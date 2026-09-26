#!/usr/bin/env node
// TEMPORARY diagnostic: identify the correct page id for the configured token.
// Prints only page ids/names and probe results — never any access token.
const https = require('https');

const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN || '';
const GRAPH_VERSION = process.env.FB_GRAPH_VERSION || 'v22.0';
if (!TOKEN) { console.error('[fb-id] Missing FB_PAGE_ACCESS_TOKEN.'); process.exit(1); }

function get(path) {
  return new Promise((resolve, reject) => {
    const sep = path.includes('?') ? '&' : '?';
    https
      .get(`https://graph.facebook.com/${GRAPH_VERSION}/${path}${sep}access_token=${encodeURIComponent(TOKEN)}`, res => {
        let d = ''; res.setEncoding('utf8');
        res.on('data', c => (d += c));
        res.on('end', () => resolve({ status: res.statusCode, body: d }));
      })
      .on('error', reject);
  });
}

(async () => {
  const me = await get('me?fields=id,name');
  console.log('[fb-id] token scope check (/me): ' + (me.status === 200 ? 'OK -> ' + me.body.slice(0, 160) : 'HTTP ' + me.status + ' -> ' + me.body.slice(0, 160)));
  if (me.status >= 400) { console.log('[fb-id] If code=190 -> token invalid. code=10 -> token is a page token, not a user token (use /{id} directly).'); }

  // A page token can only address its own page directly.
  for (const guess of ['61551718626171']) {
    const r = await get(`${guess}?fields=id,name,link,fan_count`);
    console.log(`[fb-id] probe /${guess}: HTTP ${r.status} -> ${r.body.slice(0, 220)}`);
  }

  const acc = await get('me/accounts?fields=id,name,access_token');
  if (acc.status === 200) {
    const pages = JSON.parse(acc.body).data || [];
    console.log(`[fb-id] me/accounts returned ${pages.length} page(s):`);
    for (const p of pages) {
      const probe = await get(`${p.id}/posts?fields=id,created_time&limit=2`);
      let n = 'ERR';
      if (probe.status === 200) n = (JSON.parse(probe.body).data || []).length;
      console.log(`[fb-id]   id=${p.id} name="${p.name}" postsProbe=${probe.status} sample=${n}`);
    }
  } else {
    console.log('[fb-id] me/accounts unavailable: HTTP ' + acc.status + ' -> ' + acc.body.slice(0, 200));
  }
  console.log('[fb-id] done. No tokens printed.');
})().catch(e => console.error('[fb-id] FAILED:', e.message));