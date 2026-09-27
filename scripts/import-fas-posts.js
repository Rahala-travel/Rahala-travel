#!/usr/bin/env node
// Import articles from the "post fas" folder into the Firebase Realtime Database.
//
// Structure:  post fas/<category folder>/<article>.txt  +  an image in the same folder
//
// The publication date is never invented: it is read from the file header and stored
// both as-is (dateOriginal) and as a sortable YYYY-MM-DD value (date).
//
// Writes to the RTDB `blogPosts` node using the same auth the Facebook importer uses.
// Images are copied into images/posts/ so GitHub Pages serves them publicly, and the
// workflow commits that folder afterwards.
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'post fas');
const IMAGE_OUT_DIR = path.join(ROOT, 'images', 'posts');
const RTDB_NODE = 'blogPosts';
const DRY_RUN = process.argv.includes('--dry-run');

const ENV_DB_URL = String(process.env.FIREBASE_DB_URL || '').trim().replace(/\s+/g, '');
const ENV_DB_SECRET = String(process.env.FIREBASE_DB_SECRET || '').trim().replace(/\s+/g, '');

// The repository's FIREBASE_DB_URL secret holds a non-URL value, so the same
// resolution scripts/fb-import.js uses is applied here: only accept the secret
// when it really looks like a URL, otherwise use the site's known RTDB host.
const SITE_DB_URL = 'https://rhala-a3d4c-default-rtdb.asia-southeast1.firebasedatabase.app';
const looksLikeUrl = v => /^https?:\/\/[\w.-]+/i.test(v);
const DB_URL = (looksLikeUrl(ENV_DB_URL) ? ENV_DB_URL : SITE_DB_URL).replace(/\/+$/, '');
const DB_SECRET = ENV_DB_SECRET;
const DB_URL_SOURCE = looksLikeUrl(ENV_DB_URL) ? 'FIREBASE_DB_URL' : 'built-in site host';

const AUTHOR_LABELS = ['Author', 'الكاتب', 'بقلم', 'كتابة', 'إعداد', 'اعداد'];
// "كتابة: ..." and "كتابة/ ..." are both used in the source notebooks.
const AUTHOR_SEP = '[:：/]';
const CATEGORY_MAP = {
  'تاريخ مصري قديم': 'ancient',
  'تاريخ اسلامي': 'islamic',
  'تاريخ قبطي': 'coptic',
  'تاريخ الحديث و المعاصر': 'modern',
  'تاريخ أوروبا': 'europe',
  'مقالات اللغة': 'language'
};

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
const TEXT_EXT = new Set(['.txt', '.md']);
const MONTHS = {
  january: 1, jan: 1, february: 2, feb: 2, march: 3, mar: 3, april: 4, apr: 4,
  may: 5, june: 6, jun: 6, july: 7, jul: 7, august: 8, aug: 8,
  september: 9, sep: 9, sept: 9, october: 10, oct: 10, november: 11, nov: 11, december: 12, dec: 12,
  'يناير': 1, 'كانون الثاني': 1, 'feb': 2, 'فبراير': 2, 'شباط': 2,
  'مارس': 3, 'آذار': 3, 'اذار': 3, 'april': 4, 'أبريل': 4, 'ابريل': 4, 'إبريل': 4, 'نيسان': 4,
  'مايو': 5, 'أيار': 5, 'june': 6, 'يونيو': 6, 'يونية': 6, 'حزيران': 6,
  'يوليو': 7, 'يوليه': 7, 'آب': 7, 'august': 8, 'أغسطس': 8, 'اغسطس': 8, 'آبسطس': 8,
  'سبتمبر': 9, 'أيلول': 9, 'october': 10, 'أكتوبر': 10, 'اكتوبر': 10, 'تشرين الأول': 10,
  'نوفمبر': 11, 'تشرين الثاني': 11, 'december': 12, 'ديسمبر': 12, 'كانون الاول': 12
};

function httpsRequest(url, options = {}, body = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, res => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', c => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    if (body != null) req.write(body);
    req.end();
  });
}

async function rtdbRead(node) {
  const url = `${DB_URL}/${node}.json${DB_SECRET ? `?auth=${encodeURIComponent(DB_SECRET)}` : ''}`;
  const res = await httpsRequest(url, { method: 'GET', headers: {} });
  if (res.status >= 400) throw new Error(`RTDB GET ${node} -> ${res.status}: ${res.body.slice(0, 200)}`);
  return JSON.parse(res.body || 'null');
}

async function rtdbPut(node, data) {
  const url = `${DB_URL}/${node}.json${DB_SECRET ? `?auth=${encodeURIComponent(DB_SECRET)}` : ''}`;
  const res = await httpsRequest(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  }, JSON.stringify(data));
  if (res.status >= 400) throw new Error(`RTDB PUT ${node} -> ${res.status}: ${res.body.slice(0, 200)}`);
  return res;
}

// ── Parsing ────────────────────────────────────────────────────────────────
function stripMarkers(line) {
  return line.replace(/^\s*[*_#>\-]+\s*/, '').replace(/[*_`]+/g, '').trim();
}

function headerField(line, labels, seps) {
  const clean = stripMarkers(line);
  const group = seps || '[:：]';
  for (const label of labels) {
    const re = new RegExp(`^${label}\\s*(?:${group})\\s*(.+)$`, 'i');
    const m = clean.match(re);
    if (m) return m[1].trim();
  }
  return '';
}

function parseHeader(lines) {
  let title = '';
  let date = '';
  let author = '';
  let bodyStart = 0;
  for (let i = 0; i < lines.length; i++) {
    const t = headerField(lines[i], ['Title', 'العنوان', 'اسم المقال']);
    const d = headerField(lines[i], ['Publication Date', 'Publish Date', 'Date', 'تاريخ النشر', 'تاريخ']);
    const a = headerField(lines[i], AUTHOR_LABELS, AUTHOR_SEP);
    if (t) { title = t; bodyStart = i + 1; continue; }
    if (d) { date = d; bodyStart = i + 1; continue; }
    if (a) { author = a; bodyStart = i + 1; continue; }
    if (stripMarkers(lines[i]) !== '' && (title || date || author)) break;
    if (stripMarkers(lines[i]) === '' && (title || date || author)) { bodyStart = i + 1; }
  }
  return { title, date, author, bodyStart };
}

// A trailing "كتابة : ..." / "بقلم ..." line names the author rather than body text.
function splitTrailingAuthor(body) {
  const lines = body.split(/\r?\n/);
  for (let i = lines.length - 1; i >= 0; i--) {
    const clean = stripMarkers(lines[i]);
    if (!clean) continue;
    if (/^[.ـ\-–—\s]+$/.test(clean)) { lines.splice(i, 1); continue; }
    const author = headerField(lines[i], AUTHOR_LABELS, AUTHOR_SEP);
    if (author) { lines.splice(i, 1); return { author, body: lines.join('\n') }; }
    break;
  }
  return { author: '', body };
}

// Accepts "15 September 2024", "15/09/2024", "2024-09-15" and Arabic digits.
// Returns { iso, ok }. The caller's original string is always kept separately.
function parseDate(raw) {
  const value = String(raw || '').trim();
  if (!value) return { iso: '', ok: false, reason: 'empty' };
  const latin = value.replace(/[٠-٩]/g, d => String(d.charCodeAt(0) - 0x0660));

  const iso = latin.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (iso) return { iso: `${iso[1]}-${String(iso[2]).padStart(2, '0')}-${String(iso[3]).padStart(2, '0')}`, ok: true };

  const named = latin.match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/);
  if (named) {
    const month = MONTHS[String(named[2]).toLowerCase()];
    if (month) return { iso: `${named[3]}-${String(month).padStart(2, '0')}-${String(named[1]).padStart(2, '0')}`, ok: true };
    return { iso: '', ok: false, reason: `unknown month "${named[2]}"` };
  }

  const dmy = latin.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (dmy) return { iso: `${dmy[3]}-${String(dmy[2]).padStart(2, '0')}-${String(dmy[1]).padStart(2, '0')}`, ok: true };

  return { iso: '', ok: false, reason: 'unrecognised format' };
}

function slugify(value) {
  return String(value || '')
    .replace(/[\\/:*?"<>|]+/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 90) || 'article';
}

function normalizeName(value) {
  return String(value || '')
    .replace(/[ً-ٰٟ]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[^\w؀-ۿ]+/g, '')
    .toLowerCase();
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function textToHtml(text) {
  const blocks = String(text).replace(/\r\n/g, '\n').split(/\n{2,}/);
  const clean = blocks
    .map(b => b.trim())
    .filter(Boolean)
    .map(b => {
      const inline = b.split('\n').map(l => l.trim()).filter(Boolean).join('<br>');
      return `<p>${inline}</p>`;
    });
  return clean.join('\n') || '<p></p>';
}

function excerptFrom(text, max = 300) {
  const flat = String(text).replace(/\s+/g, ' ').trim();
  return flat.length > max ? flat.slice(0, max - 3) + '…' : flat;
}

function pickImage(files, title, baseName) {
  const images = files.filter(f => IMAGE_EXT.has(path.extname(f).toLowerCase()));
  if (!images.length) return '';
  const target = normalizeName(title || path.basename(baseName, path.extname(baseName)));
  const exact = images.find(f => normalizeName(path.basename(f, path.extname(f))) === target);
  if (exact) return exact;
  const loose = images.find(f => {
    const n = normalizeName(path.basename(f, path.extname(f)));
    return n && (target.includes(n) || n.includes(target));
  });
  if (loose) return loose;
  const sameStem = images.find(f => path.basename(f, path.extname(f)) === path.basename(baseName, path.extname(baseName)));
  if (sameStem) return sameStem;
  return images[0];
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    throw new Error(`Source folder not found: ${SOURCE_DIR}\nCreate it and add one folder per category, then re-run.`);
  }
  if (!DRY_RUN && (!DB_URL || !DB_SECRET)) throw new Error('FIREBASE_DB_URL and FIREBASE_DB_SECRET are required.');

  const built = [];
  const problems = [];

  const cats = fs.readdirSync(SOURCE_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  // Verify the database credentials up front, so a bad secret fails immediately
  // with a clear message instead of looking like "nothing to import".
  if (!DRY_RUN) {
    console.log(`[fas] db host source: ${DB_URL_SOURCE} | auth: ${DB_SECRET ? 'db secret' : 'NONE'}`);
    const before = await rtdbRead(RTDB_NODE);
    console.log(`[fas] ${RTDB_NODE} currently holds ${before ? Object.keys(before).length : 0} record(s)`);
  }

  for (const catName of cats) {
    const key = CATEGORY_MAP[catName];
    if (!key) { problems.push(`Unknown category folder: "${catName}"`); continue; }
    const dir = path.join(SOURCE_DIR, catName);
    const files = fs.readdirSync(dir);

    for (const file of files.sort((a, b) => a.localeCompare(b))) {
      const ext = path.extname(file).toLowerCase();
      if (!TEXT_EXT.has(ext)) continue;
      const stem = path.basename(file, ext);

      const raw = fs.readFileSync(path.join(dir, file), 'utf8').replace(/^\uFEFF/, '');
      const lines = raw.split(/\r?\n/);
      const head = parseHeader(lines);
      const title = head.title || stem;
      const split = splitTrailingAuthor(lines.slice(head.bodyStart).join('\n').trim());
      const author = head.author || split.author;
      const body = split.body.trim();

      if (!body) { problems.push(`${catName}/${file}: file has no article text`); continue; }

      const dateParsed = parseDate(head.date);
      if (head.date && !dateParsed.ok) {
        problems.push(`${catName}/${file}: publication date "${head.date}" is ${dateParsed.reason} — skipped, not invented`);
        continue;
      }
      if (!head.date) {
        problems.push(`${catName}/${file}: no publication date found in the header — skipped, not invented`);
        continue;
      }

      const imgFile = pickImage(files, head.title, stem);
      let img = 'images/logo.jpg';
      if (imgFile) {
        const dest = `${slugify(title)}${path.extname(imgFile).toLowerCase()}`;
        if (!DRY_RUN) {
          fs.mkdirSync(IMAGE_OUT_DIR, { recursive: true });
          fs.copyFileSync(path.join(dir, imgFile), path.join(IMAGE_OUT_DIR, dest));
        }
        img = `images/posts/${dest}`;
      }

      const html = textToHtml(body);
      const excerpt = excerptFrom(body);

      built.push({
        id: `fas-${slugify(title)}`,
        category: key,
        categoryFolder: catName,
        date: dateParsed.iso,
        dateOriginal: head.date,
        authorAr: author || 'رحّالة عبر التاريخ',
        authorEn: author || 'Rahala Through History',
        readTimeAr: '4 دقائق قراءة',
        readTimeEn: '4 min read',
        img,
        titleAr: title,
        titleEn: title,
        excerptAr: excerpt,
        excerptEn: excerpt,
        contentAr: html,
        contentEn: html,
        source: 'post-fas',
        sourceFile: `${catName}/${file}`,
        importedAt: Date.now()
      });
    }
  }

  console.log(`[fas] categories found: ${cats.length}`);
  console.log(`[fas] articles parsed: ${built.length}`);

  for (const p of problems) console.log(`[fas] SKIPPED: ${p}`);
  if (!built.length) {
    console.log('[fas] nothing to import — no changes written.');
    return;
  }

  const ids = built.map(r => r.id);
  for (const r of built) {
    console.log(`[fas]   [${r.category}] ${r.dateOriginal} -> ${r.date}`);
    console.log(`[fas]     title : ${r.titleAr}`);
    console.log(`[fas]     author: ${r.authorAr}`);
    console.log(`[fas]     image : ${r.img}`);
    console.log(`[fas]     file  : ${r.sourceFile}  (${r.contentAr.length} chars of HTML)`);
  }

  if (DRY_RUN) {
    console.log('[fas] DRY RUN — nothing was written to Firebase and no image was copied.');
    console.log(`[fas] would write ${built.length} record(s) to ${RTDB_NODE}: ${ids.join(', ')}`);
    return;
  }

  const existing = (await rtdbRead(RTDB_NODE)) || {};
  const incoming = {};
  for (const rec of built) incoming[rec.id] = rec;

  // Update the parsed articles, keep anything else that was already there.
  const merged = Object.assign({}, existing, incoming);
  await rtdbPut(RTDB_NODE, merged);

  const total = Object.keys(merged).length;
  console.log(`[fas] ${RTDB_NODE} node now has ${total} record(s) (${built.length} from post fas, ${total - built.length} kept).`);
  console.log(`[fas] written ids: ${ids.join(', ')}`);
}

main().catch(err => {
  console.error('[fas] FAILED:', err.message);
  process.exit(1);
});
