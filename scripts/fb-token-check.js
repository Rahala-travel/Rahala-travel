#!/usr/bin/env node
// TEMPORARY diagnostic: find which requested field/edge triggers the #10 permission error.
// Prints only HTTP status + Graph error codes. No tokens, secrets, or post content.
const https = require('https');

const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN || '';
const PAGE_ID = process.env.FB_PAGE_ID || '';
const GRAPH_VERSION = process.env.FB_GRAPH_VERSION || 'v22.0';
if (!TOKEN) { console.error('[fc] missing token'); process.exit(1); }

function probe(edge, fields, limit) {
  return new Promise(resolve => {
    const q = `fields=${encodeURIComponent(fields)}&limit=${limit}&access_token=${encodeURIComponent(TOKEN)}`;
    https
      .get(`https://graph.facebook.com/${GRAPH_VERSION}/${edge}?${q}`, res => {
        let d = ''; res.setEncoding('utf8');
        res.on('data', c => (d += c));
        res.on('end', () => {
          let code = 'ok', n = 0;
          try {
            const j = JSON.parse(d);
            if (j.error) code = `ERR code=${j.error.code} subcode=${j.error.error_subcode || '-'}`;
            else n = (j.data || []).length;
          } catch (_) { code = 'unparsable'; }
          resolve({ status: res.statusCode, code, n });
        });
      })
      .on('error', e => resolve({ status: 0, code: e.message, n: 0 }));
  });
}

const CASES = [
  ['posts', 'id', 2],
  ['posts', 'id,created_time', 2],
  ['posts', 'id,message', 2],
  ['posts', 'id,permalink_url', 2],
  ['posts', 'id,full_picture', 2],
  ['posts', 'id,attachments{media_type}', 2],
  ['posts', 'id,attachments{media_type,title,url}', 2],
  ['posts', 'id,attachments{media_type,title,url,media{image,source}}', 2],
  ['posts', 'id,created_time,message,permalink_url,full_picture,attachments{media_type,title,url,media{image,source}}', 2],
  ['posts', 'id,created_time,message,permalink_url,full_picture,attachments{media_type,title,url,media{image,source}}', 100],
  ['feed', 'id,created_time,message,permalink_url,full_picture,attachments{media_type,title,url,media{image,source}}', 100],
  ['feed', 'id,created_time,message', 25]
];

(async () => {
  console.log('[fc] probing page *** /' + PAGE_ID.length + ' digit id');
  for (const [edge, fields, limit] of CASES) {
    const r = await probe(`${PAGE_ID}/${edge}`, fields, limit);
    const short = fields.length > 46 ? fields.slice(0, 43) + '...' : fields;
    console.log(`[fc] /${edge} limit=${limit} fields=${short} -> HTTP ${r.status} ${r.code} returned=${r.n}`);
    await new Promise(res => setTimeout(res, 250));
  }
  console.log('[fc] done.');
})().catch(e => console.error('[fc] FAILED:', e.message));