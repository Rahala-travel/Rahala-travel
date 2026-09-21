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

const PAGE_ID = process.env.FB_PAGE_ID || '61551718626171';
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const DB_URL = (process.env.FIREBASE_DB_URL || '').replace(/\/+$/, '');
const DB_SECRET = process.env.FIREBASE_DB_SECRET || '';
const SA_JSON = process.env.FIREBASE_SERVICE_ACCOUNT || '';
const GRAPH_VERSION = process.env.FB_GRAPH_VERSION || 'v22.0';
const MAX_PAGES = Number(process.env.FB_MAX_PAGES || 30);

const IMPORTS_NODE = 'facebookImports';
const META_NODE = 'facebookImportMeta';

if (!TOKEN || !DB_URL) {
  console.error('[fb-import] Missing required env: FB_PAGE_ACCESS_TOKEN and FIREBASE_DB_URL.');
  process.exit(1);
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
  const qs = new URLSearchParams({ ...params, access_token: TOKEN }).toString();
  return httpsRequest(`https://graph.facebook.com/${GRAPH_VERSION}/${path}?${qs}`);
}

let cachedToken = null;
let cachedTokenExp = 0;

async function getRtdbToken() {
  if (DB_SECRET) return null; // legacy ?auth= secret path
  if (!SA_JSON) throw new Error('Provide FIREBASE_DB_SECRET or FIREBASE_SERVICE_ACCOUNT.');
  if (cachedToken && cachedTokenExp > Math.floor(Date.now() / 1000) + 60) return cachedToken;

  const sa = typeof SA_JSON === 'string' ? JSON.parse(SA_JSON) : SA_JSON;
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
  const url = `${DB_URL}/${path}.json${DB_SECRET ? `?auth=${encodeURIComponent(DB_SECRET)}` : ''}`;
  const options = { method: 'GET', headers: {} };
  if (!DB_SECRET) options.headers.Authorization = `Bearer ${await getRtdbToken()}`;
  const res = await httpsRequest(url, options);
  if (res.status >= 400) throw new Error(`RTDB GET ${path} → ${res.status}: ${res.body}`);
  try { return JSON.parse(res.body || 'null'); } catch { return null; }
}

async function rtdbPut(path, data) {
  const url = `${DB_URL}/${path}.json${DB_SECRET ? `?auth=${encodeURIComponent(DB_SECRET)}` : ''}`;
  const body = JSON.stringify(data);
  const options = { method: 'PUT', headers: { 'Content-Type': 'application/json' } };
  if (!DB_SECRET) options.headers.Authorization = `Bearer ${await getRtdbToken()}`;
  const res = await httpsRequest(url, options, body);
  if (res.status >= 400) throw new Error(`RTDB PUT ${path} → ${res.status}: ${res.body}`);
  return res;
}

// ── Business helpers ────────────────────────────────────────────────────────
function pickImage(post) {
  if (post.full_picture) return post.full_picture;
  const attach = post.attachments && post.attachments.data && post.attachments.data[0];
  if (attach) {
    if (attach.media && attach.media.image && attach.media.image.src) return attach.media.image.src;
    if (attach.url && /\.(jpe?g|png|webp|gif)(\?|$)/.test(attach.url)) return attach.url;
  }
  return '';
}

function pickVideo(post) {
  const attach = post.attachments && post.attachments.data && post.attachments.data[0];
  if (attach && attach.media && attach.media.source) return attach.media.source;
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
    hasVideo: Boolean(post.attachments && post.attachments.data && post.attachments.data.some(a => a.media_type === 'video'))
  };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchAllPosts() {
  const posts = [];
  let url = `${PAGE_ID}/posts?fields=id,created_time,message,permalink_url,full_picture,attachments{media_type,title,url,media{image,source}}&limit=100`;
  let pages = 0;
  while (url && pages < MAX_PAGES) {
    pages++;
    const res = await fbRequest(url);
    const body = JSON.parse(res.body || '{}');
    if (body.error) throw new Error(`Graph API error: ${body.error.message} (${body.error.type || '#'}) code=${body.error.code}`);
    if (!body.data) break;
    posts.push(...body.data);
    url = body.paging && body.paging.next ? body.paging.next.replace(`https://graph.facebook.com/${GRAPH_VERSION}/`, '') : null;
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