#!/usr/bin/env node
// TEMPORARY diagnostic helper: lists the Facebook Pages the configured token can
// access, printing ONLY page ids and names. Never prints any access token.
// Used to discover the correct Page ID when /{id}/posts returns GraphMethodException
// code=100 (New Pages Experience pages expose an actor id, not the classic page id).
const https = require('https');

const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN || process.env.FB_ACCESS_TOKEN;
const GRAPH_VERSION = process.env.FB_GRAPH_VERSION || 'v22.0';

if (!TOKEN) {
  console.error('[fb-discover] Missing FB_PAGE_ACCESS_TOKEN.');
  process.exit(1);
}

function get(path) {
  return new Promise((resolve, reject) => {
    https
      .get(`https://graph.facebook.com/${GRAPH_VERSION}/${path}?access_token=${encodeURIComponent(TOKEN)}`, res => {
        let d = '';
        res.setEncoding('utf8');
        res.on('data', c => (d += c));
        res.on('end', () => resolve({ status: res.statusCode, body: d }));
      })
      .on('error', reject);
  });
}

function printError(label, res) {
  let msg = res.body;
  try {
    const j = JSON.parse(res.body);
    msg = j.error ? `${j.error.message} (code=${j.error.code})` : res.body;
  } catch (e) { /* keep raw */ }
  console.log(`[fb-discover] ${label} -> HTTP ${res.status}: ${String(msg).slice(0, 300)}`);
}

(async () => {
  console.log('[fb-discover] Identifying the token owner...');
  const me = await get('me?fields=id,name');
  if (me.status >= 400) {
    printError('GET /me', me);
    process.exit(1);
  }
  const meData = JSON.parse(me.body);
  console.log(`[fb-discover] token owner id=${meData.id} name=${meData.name}`);

  console.log('[fb-discover] Listing pages via me/accounts...');
  const acc = await get('me/accounts?fields=id,name,category,link');
  if (acc.status >= 400) {
    printError('GET /me/accounts', acc);
    console.log('[fb-discover] If this failed with code=190 the token is invalid/expired.');
    console.log('[fb-discover] If code=10 the token lacks pages_show_list permission.');
    process.exit(2);
  }
  const pages = JSON.parse(acc.body).data || [];
  console.log(`[fb-discover] pages visible to this token: ${pages.length}`);
  for (const p of pages) {
    console.log(`[fb-discover]   id=${p.id}  name=${p.name || '(no name)'}  category=${p.category || '-'}`);
    // Probe whether this id can read its own posts.
    const probe = await get(`${p.id}/posts?fields=id,created_time&limit=1`);
    if (probe.status >= 400) {
      printError(`   probe /${p.id}/posts`, probe);
    } else {
      const n = (JSON.parse(probe.body).data || []).length;
      console.log(`[fb-discover]   probe /${p.id}/posts -> OK (returned ${n} post(s))`);
    }
  }
  console.log('[fb-discover] done. No access tokens were printed.');
})().catch(e => {
  console.error('[fb-discover] FAILED:', e.message);
  process.exit(1);
});
