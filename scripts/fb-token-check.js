#!/usr/bin/env node
// TEMPORARY diagnostic: report the token's validity, granted scopes, and the exact
// Graph error for the configured page. Also tests whether an appsecret_proof makes
// the page/posts call succeed. Prints NO token, secret, or appsecret_proof values.
const https = require('https');
const crypto = require('crypto');

const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN || '';
const APP_ID = process.env.FB_APP_ID || '';
const APP_SECRET = process.env.FB_APP_SECRET || '';
const PAGE_ID = process.env.FB_PAGE_ID || '';
const GRAPH_VERSION = process.env.FB_GRAPH_VERSION || 'v22.0';

function get(path) {
  return new Promise(resolve => {
    const sep = path.includes('?') ? '&' : '?';
    https
      .get(`https://graph.facebook.com/${GRAPH_VERSION}/${path}${sep}access_token=${encodeURIComponent(TOKEN)}`, res => {
        let d = '';
        res.setEncoding('utf8');
        res.on('data', c => (d += c));
        res.on('end', () => resolve({ status: res.statusCode, body: d }));
      })
      .on('error', e => resolve({ status: 0, body: String(e && e.message) }));
  });
}

function getRaw(url) {
  return new Promise(resolve => {
    https
      .get(url, res => {
        let d = '';
        res.setEncoding('utf8');
        res.on('data', c => (d += c));
        res.on('end', () => resolve({ status: res.statusCode, body: d }));
      })
      .on('error', e => resolve({ status: 0, body: String(e && e.message) }));
  });
}

(async () => {
  console.log('[tc] env present: token=' + !!TOKEN + ' app_id=' + !!APP_ID + ' app_secret=' + !!APP_SECRET + ' page_id=' + !!PAGE_ID);

  // 1) Mint an app access token so we can inspect the user/page token.
  if (APP_ID && APP_SECRET) {
    const u = `https://graph.facebook.com/oauth/access_token?client_id=${encodeURIComponent(APP_ID)}&client_secret=${encodeURIComponent(APP_SECRET)}&grant_type=client_credentials`;
    const r = await getRaw(u);
    let appTok = null;
    try { appTok = JSON.parse(r.body).access_token || null; } catch (_) {}
    console.log('[tc] app access token: ' + (appTok ? 'OBTAINED' : 'FAILED HTTP ' + r.status + ' -> ' + r.body.slice(0, 200)));

    if (appTok) {
      const d = await getRaw(`https://graph.facebook.com/${GRAPH_VERSION}/debug_token?input_token=${encodeURIComponent(TOKEN)}&access_token=${encodeURIComponent(appTok)}`);
      try {
        const j = JSON.parse(d.body);
        const dt = j.data || {};
        console.log('[tc] is_valid=' + dt.is_valid + ' app_id=' + dt.app_id + ' type=' + dt.type);
        if (dt.expires_at) {
          const mins = Math.round((dt.expires_at * 1000 - Date.now()) / 60000);
          console.log('[tc] expires_in_minutes=' + mins);
        }
        console.log('[tc] scopes=' + JSON.stringify(dt.scopes || []));
        console.log('[tc] granular_scopes=' + JSON.stringify(dt.granular_scopes || {}));
        const need = ['pages_show_list', 'pages_read_engagement', 'pages_manage_posts'];
        for (const s of need) console.log(`[tc]   scope ${s}: ${(dt.scopes || []).includes(s) ? 'PRESENT' : 'MISSING'}`);
      } catch (_) {
        console.log('[tc] debug_token raw: HTTP ' + d.status + ' -> ' + d.body.slice(0, 300));
      }
    }
  }

  // 2) Exact error for the page object itself.
  const p = await get(`${PAGE_ID}?fields=id,name,link`);
  console.log(`[tc] /${PAGE_ID}: HTTP ${p.status} -> ${p.body.slice(0, 300)}`);

  // 3) Exact error for the posts edge.
  const po = await get(`${PAGE_ID}/posts?fields=id,created_time&limit=2`);
  console.log(`[tc] /${PAGE_ID}/posts: HTTP ${po.status} -> ${po.body.slice(0, 300)}`);

  // 4) Does an appsecret_proof change the outcome?
  if (APP_SECRET) {
    const proof = crypto.createHmac('sha256', APP_SECRET).update(TOKEN).digest('hex');
    const r = await getRaw(`https://graph.facebook.com/${GRAPH_VERSION}/${PAGE_ID}/posts?fields=id&limit=2&access_token=${encodeURIComponent(TOKEN)}&appsecret_proof=${proof}`);
    console.log(`[tc] /${PAGE_ID}/posts WITH appsecret_proof: HTTP ${r.status} -> ${r.body.slice(0, 300)}`);
  }

  console.log('[tc] done. No secrets printed.');
})().catch(e => console.error('[tc] FAILED:', e.message));