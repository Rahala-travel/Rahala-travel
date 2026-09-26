#!/usr/bin/env node
// Facebook Posts → Firebase Realtime Database importer (zero-dependency).
// Runs inside a GitHub Action on a schedule. NEVER publishes anything: every
// post is stored with status 'pending' (preserved if it already has a status).
//
// Required env:
//   FB_PAGE_ACCESS_TOKEN   Long-lived Facebook Page access token (secret)
//   FB_PAGE_ID             Facebook Page id, e.g. 61551718626171 (secret/var)
//   FIREBASE_DB_URL        e.g. https://rhala-a3d4c-default-rtdb.asia-southeast1.firebasedatabase.app
//   FIREBASE_DB_SECRET     Legacy RTDB secret ?auth= (or, instead:
//   FIREBASE_SERVICE_ACCOUNT {...} JSON of a service account with
//                          roles/firebasedatabase.admin)
// Optional:
//   FB_GRAPH_VERSION       default v22.0
//   FB_MAX_PAGES           default 30 (each page = up to 100 posts)

const https = require('https');
const crypto = require('crypto');

const APP_ID = process.env.FB_APP_ID || '';
const APP_SECRET = process.env.FB_APP_SECRET || '';
const PAGE_ID = process.env.FB_PAGE_ID || '61551718626171';

// The token is resolved lazily in resolveToken(): app credentials mint a
// long-lived user token, which is then exchanged for a never-expiring page
// token. Only an explicitly provided token overrides that.
let TOKEN = process.env.FB_PAGE_ACCESS_TOKEN || process.env.FB_ACCESS_TOKEN || '';
const SA_JSON = process.env.FIREBASE_SERVICE_ACCOUNT || '';

function parseSa() {
  if (!SA_JSON) return null;
  try {
    let v = JSON.parse(SA_JSON);
    if (typeof v === 'string') { try { v = JSON.parse(v); } catch { return null; } }
    return v && typeof v === 'object' ? v : null;
  } catch {
    return null;
  }
}

// Shape only: key names and lengths, never values.
function describeSa(sa) {
  if (!SA_JSON) return 'missing';
  if (!sa) return `unparsable (${SA_JSON.length} chars)`;
  const has = k => (sa[k] ? `yes(${String(sa[k]).length})` : 'NO');
  return `ok project_id=${has('project_id')} client_email=${has('client_email')} private_key=${has('private_key')}`;
}

function looksLikeUrl(v) {
  return /^https?:\/\//i.test(v) || /^[\w-]+(?:\.[\w-]+)+(?::\d+)?(?:\/.+)?$/.test(v);
}

const ENV_DB_URL = String(process.env.FIREBASE_DB_URL || '').trim().replace(/\s+/g, '');
const ENV_DB_SECRET = String(process.env.FIREBASE_DB_SECRET || '').trim().replace(/\s+/g, '');
const SA = parseSa();
const SA_PROJECT_ID = SA && SA.project_id ? String(SA.project_id) : '';

// The two Firebase secrets are very easy to enter in each other's slot. If the
// DB_URL slot does not look like a URL but the DB_SECRET slot does, they are swapped:
// use the URL from the secret slot and the secret from the url slot. No value is logged.
const SECRETS_SWAPPED = Boolean(ENV_DB_URL) && Boolean(ENV_DB_SECRET) && !looksLikeUrl(ENV_DB_URL) && looksLikeUrl(ENV_DB_SECRET);

// Last-resort fallback: the site's own public config already ships the RTDB host.
const SITE_DB_URL = 'https://rhala-a3d4c-default-rtdb.asia-southeast1.firebasedatabase.app';

const RESOLVED_DB_URL = SECRETS_SWAPPED
  ? ENV_DB_SECRET
  : (looksLikeUrl(ENV_DB_URL) ? ENV_DB_URL : (SA_PROJECT_ID ? `https://${SA_PROJECT_ID}.firebaseio.com` : SITE_DB_URL));

const DB_URL = RESOLVED_DB_URL.replace(/\/+$/, '');
const DB_SECRET = SECRETS_SWAPPED ? ENV_DB_URL : ENV_DB_SECRET;

// Bearer auth is only possible with a complete, parsable service account; otherwise
// fall back to the legacy ?auth= database secret.
const USE_SA = Boolean(SA_PROJECT_ID);

const GRAPH_VERSION = process.env.FB_GRAPH_VERSION || 'v22.0';
const MAX_PAGES = Number(process.env.FB_MAX_PAGES || 30);

const IMPORTS_NODE = 'facebookImports';
const META_NODE = 'facebookImportMeta';

const urlSource = SECRETS_SWAPPED ? 'FIREBASE_DB_SECRET (swapped)'
  : (looksLikeUrl(ENV_DB_URL) ? 'FIREBASE_DB_URL'
    : (SA_PROJECT_ID ? 'service account project_id' : 'js/firebase-config.js (built-in fallback)'));
console.log(`[fb-import] Firebase db url source: ${urlSource} | project_id: ${SA_PROJECT_ID || 'unknown'} | auth: ${USE_SA ? 'service account (Bearer)' : DB_SECRET ? 'db secret' : 'NONE'}`);
console.log(`[fb-import] FIREBASE_SERVICE_ACCOUNT: ${describeSa(SA)}`);
console.log(`[fb-import] FIREBASE_DB_URL: ${ENV_DB_URL ? `present (${ENV_DB_URL.length} chars, ${looksLikeUrl(ENV_DB_URL) ? 'is a URL' : 'NOT a URL'})` : 'missing'}`);
console.log(`[fb-import] FIREBASE_DB_SECRET: ${DB_SECRET ? `present (${DB_SECRET.length} chars)` : 'missing'}`);
if (SECRETS_SWAPPED) console.log('[fb-import] NOTE: FIREBASE_DB_URL and FIREBASE_DB_SECRET appear to be swapped; corrected automatically. Consider re-saving them in the right slots.');

if ((!TOKEN && !(APP_ID && APP_SECRET)) || !DB_URL) {
  console.error('[fb-import] Missing required env: FB_APP_ID + FB_APP_SECRET (or FB_PAGE_ACCESS_TOKEN) and a usable Firebase database URL.');
  process.exit(1);
}

// ── Token resolution ────────────────────────────────────────────────────────
// Preferred path: derive a page access token from the app's own credentials so
// nothing ever has to be copied by hand and nothing is stored outside GitHub.
//   1) long-lived user token  = oauth/access_token?grant_type=fb_exchange_token
//   2) page token             = /{app_id}/accounts?fields=access_token
async function resolveToken() {
  if (TOKEN) return TOKEN;
  if (!APP_ID || !APP_SECRET) {
    throw new Error('No usable Facebook token: set FB_APP_ID + FB_APP_SECRET, or FB_PAGE_ACCESS_TOKEN.');
  }
  const short = await httpJson(`https://graph.facebook.com/oauth/access_token?client_id=${encodeURIComponent(APP_ID)}&client_secret=${encodeURIComponent(APP_SECRET)}`);
  if (!short.access_token) {
    const detail = short.error ? `${short.error.message} (code=${short.error.code})` : 'no access_token returned';
    throw new Error(`App token exchange failed: ${detail}. App credentials cannot mint a token on their own — a page token from FB_PAGE_ACCESS_TOKEN is required.`);
  }
  const longRes = await httpJson(`https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${encodeURIComponent(APP_ID)}&client_secret=${encodeURIComponent(APP_SECRET)}&fb_exchange_token=${encodeURIComponent(short.access_token)}`);
  const userToken = longRes.access_token;
  if (!userToken) throw new Error(`Long-lived token exchange failed: ${longRes.error ? longRes.error.message : 'no access_token returned'}`);

  const acc = await httpJson(`https://graph.facebook.com/${GRAPH_VERSION}/me/accounts?fields=id,name,access_token&access_token=${encodeURIComponent(userToken)}`);
  if (!acc.data || !acc.data.length) {
    const msg = acc.error ? `${acc.error.message} (code=${acc.error.code})` : 'no pages returned';
    throw new Error(`me/accounts returned nothing: ${msg}`);
  }
  // Prefer the configured page; otherwise fall back to the first page.
  let page = acc.data.find(p => String(p.id) === String(PAGE_ID));
  if (!page) {
    page = acc.data[0];
    console.log(`[fb-import] Configured FB_PAGE_ID not accessible; using discovered page id=${page.id} name=${page.name}`);
  }
  if (!page.access_token) throw new Error('Page access_token missing from me/accounts.');
  TOKEN = page.access_token;
  console.log(`[fb-import] Using page '${page.name}' (id=${page.id})`);
  return TOKEN;
}

function httpJson(url) {
  return httpsRequest(url).then(res => {
    try { return JSON.parse(res.body || '{}'); } catch (e) { return { error: { message: `HTTP ${res.status}: ${res.body.slice(0, 200)}` } }; }
  });
}

// ── HTTPS helpers ───────────────────────────────────────────────────────────
function httpsRequest(url, options = {}, body = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, res => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', c => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    if (body != null) req.write(body);
    req.end();
  });
}

function fbRequest(path, params = {}) {
  // `path` may already carry a query string (fields/limit, or a paging.next URL).
  // Merge into it instead of appending a second "?" which would swallow the token.
  const [rawPath, rawQuery] = String(path).split('?');
  const query = new URLSearchParams(rawQuery || '');
  query.delete('access_token');
  query.delete('appsecret_proof');
  for (const [k, v] of Object.entries(params)) query.set(k, v);
  query.set('access_token', TOKEN);
  return httpsRequest(`https://graph.facebook.com/${GRAPH_VERSION}/${rawPath}?${query.toString()}`);
}

let cachedToken = null;
let cachedTokenExp = 0;

async function getRtdbToken() {
  if (!USE_SA) return null; // legacy ?auth= secret path
  if (!SA_JSON) throw new Error('Provide FIREBASE_DB_SECRET or FIREBASE_SERVICE_ACCOUNT.');
  if (cachedToken && cachedTokenExp > Math.floor(Date.now() / 1000) + 60) return cachedToken;

  const sa = SA;
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claims = {
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/firebase.database',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };
  const b64 = obj => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${b64(header)}.${b64(claims)}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsigned);
  const signature = signer.sign(sa.private_key, 'base64url');
  const jwt = `${unsigned}.${signature}`;

  const res = await new Promise((resolve, reject) => {
    const body = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${encodeURIComponent(jwt)}`;
    const req = https.request('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(body) }
    }, r => {
      let data = '';
      r.on('data', c => (data += c));
      r.on('end', () => resolve(JSON.parse(data || '{}')));
    });
    req.on('error', reject);
    req.end(body);
  });
  if (!res.access_token) throw new Error('OAuth token exchange failed: ' + JSON.stringify(res));
  cachedToken = res.access_token;
  cachedTokenExp = now + 3500;
  return cachedToken;
}

async function rtdbRead(path) {
  const url = `${DB_URL}/${path}.json${USE_SA || !DB_SECRET ? '' : `?auth=${encodeURIComponent(DB_SECRET)}`}`;
  const options = { method: 'GET', headers: {} };
  if (USE_SA) options.headers.Authorization = `Bearer ${await getRtdbToken()}`;
  const res = await httpsRequest(url, options);
  if (res.status >= 400) throw new Error(`RTDB GET ${path} → ${res.status}: ${String(res.body).slice(0, 300)}`);
  try { return JSON.parse(res.body || 'null'); } catch { return null; }
}

async function rtdbPut(path, data) {
  const url = `${DB_URL}/${path}.json${USE_SA || !DB_SECRET ? '' : `?auth=${encodeURIComponent(DB_SECRET)}`}`;
  const body = JSON.stringify(data);
  const options = { method: 'PUT', headers: { 'Content-Type': 'application/json' } };
  if (USE_SA) options.headers.Authorization = `Bearer ${await getRtdbToken()}`;
  const res = await httpsRequest(url, options, body);
  if (res.status >= 400) throw new Error(`RTDB PUT ${path} → ${res.status}: ${String(res.body).slice(0, 300)}`);
  return res;
}

// ── Business helpers ────────────────────────────────────────────────────────
// NOTE: the `attachments` expansion is not requestable for this app (Graph returns
// #10 "Page Public Content Access"), so media is derived from full_picture and
// from video links present in the post message.
function pickImage(post) {
  return post.full_picture || '';
}

function pickVideo(post) {
  const msg = post.message || '';
  const link = msg.match(/https?:\/\/[^\s]+/);
  if (link && /\.(mp4|mov|webm)(\?|$)|\/watch\?v=|youtu\.be\//i.test(link[0])) return link[0];
  return '';
}

function deriveTitle(post) {
  const msg = (post.message || '').replace(/\s+/g, ' ').trim();
  if (!msg) return 'منشور من صفحة رحّالة عبر التاريخ';
  return msg.length > 120 ? msg.slice(0, 117) + '…' : msg;
}

function deriveExcerpt(post) {
  const msg = (post.message || '').replace(/\s+/g, ' ').trim();
  if (!msg) return '';
  return msg.length > 300 ? msg.slice(0, 297) + '…' : msg;
}

function normalizeRecord(post) {
  return {
    fbId: String(post.id),
    source: 'facebook',
    title: deriveTitle(post),
    excerpt: deriveExcerpt(post),
    message: post.message || '',
    imageUrl: pickImage(post),
    videoUrl: pickVideo(post),
    permalink: post.permalink_url || `https://www.facebook.com/${post.id}`,
    createdTime: post.created_time || '',
    hasVideo: Boolean(pickVideo(post))
  };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchAllPosts() {
  const posts = [];
  let url = `${PAGE_ID}/posts?fields=id,created_time,message,permalink_url,full_picture&limit=100`;
  let pages = 0;
  while (url && pages < MAX_PAGES) {
    pages++;
    const res = await fbRequest(url);
    const body = JSON.parse(res.body || '{}');
    if (body.error) throw new Error(`Graph API error on page ${pages}: ${body.error.message} (${body.error.type || '#'}) code=${body.error.code}`);
    if (!body.data) break;
    console.log(`[fb-import] page ${pages}: HTTP ${res.status}, ${body.data.length} posts (total ${posts.length + body.data.length})`);
    posts.push(...body.data);
    const next = body.paging && body.paging.next;
    if (!next) { url = null; break; }
    try {
      const u = new URL(next);
      const prefix = `/${GRAPH_VERSION}/`;
      const p = u.pathname.startsWith(prefix) ? u.pathname.slice(prefix.length) : u.pathname.replace(/^\//, '');
      url = u.search ? `${p}?${u.searchParams.toString()}` : p;
    } catch {
      url = String(next).replace(`https://graph.facebook.com/${GRAPH_VERSION}/`, '');
    }
    if (!url) break;
    await sleep(350); // be gentle with rate limits
  }
  return posts;
}

function calcStats(records) {
  const counts = { pending: 0, published: 0, rejected: 0, total: Object.keys(records || {}).length };
  Object.values(records || {}).forEach(r => { if (counts[r && r.status] != null) counts[r.status]++; });
  return counts;
}

async function main() {
  await resolveToken();
  console.log(`[fb-import] Fetching posts for page ${PAGE_ID} (max ${MAX_PAGES} pages)...`);
  const posts = await fetchAllPosts();
  console.log(`[fb-import] Fetched ${posts.length} posts.`);

  const existing = await rtdbRead(IMPORTS_NODE) || {};
  let added = 0;
  let updated = 0;
  let preserved = 0;

  for (const post of posts) {
    const id = String(post.id);
    const current = existing[id];
    const record = normalizeRecord(post);
    if (!current) {
      record.status = 'pending'; // never auto-publish
      record.importedAt = Date.now();
      existing[id] = record;
      added++;
    } else {
      // Preserve the workflow status; refresh only media/metadata.
      record.status = current.status || 'pending';
      record.importedAt = current.importedAt || Date.now();
      record.publishedAt = current.publishedAt || null;
      record.rejectedAt = current.rejectedAt || null;
      record.category = current.category || null;
      if (JSON.stringify(record) !== JSON.stringify(current)) { existing[id] = record; updated++; }
      else preserved++;
    }
  }

  await rtdbPut(IMPORTS_NODE, existing);
  const stats = calcStats(existing);
  const meta = {
    pageId: PAGE_ID,
    lastSyncAt: Date.now(),
    ...stats
  };
  await rtdbPut(META_NODE, meta);

  console.log(`[fb-import] added=${added} updated=${updated} preserved=${preserved}`);
  console.log(`[fb-import] ${JSON.stringify(stats)}`);
  console.log('[fb-import] Done. Nothing was published automatically.');
}

main().catch(err => {
  console.error('[fb-import] FAILED:', err.message);
  process.exit(1);
});