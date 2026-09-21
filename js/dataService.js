// Data Service — Shared persistent storage via Firebase
// Firebase SDKs load dynamically after page render.

const DataService = (() => {
  let db = null;
  let storage = null;
  let firebaseReady = false;

  const FIREBASE_SDK_URLS = [
    'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js',
    'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js',
    'https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js'
  ];

  function loadScript(url) {
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = url;
      s.onload = resolve;
      s.onerror = () => { console.warn('[DataService] Failed to load:', url); resolve(); };
      document.head.appendChild(s);
    });
  }

  async function loadFirebaseSDKs() {
    for (const url of FIREBASE_SDK_URLS) {
      await loadScript(url);
    }
  }

  async function init() {
    console.log('[DataService] Starting init...');
    try {
      if (typeof FIREBASE_CONFIG === 'undefined' || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
        console.warn('[DataService] Firebase config not set.');
        return;
      }
      console.log('[DataService] Loading Firebase SDKs...');
      if (typeof firebase === 'undefined') {
        await loadFirebaseSDKs();
      }
      console.log('[DataService] Firebase SDK loaded:', typeof firebase);
      if (typeof firebase === 'undefined' || !firebase.initializeApp) {
        console.warn('[DataService] Firebase SDK failed to load.');
        return;
      }
      firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.database();
      storage = firebase.storage();
      console.log('[DataService] Trying anonymous auth...');
      try {
        await firebase.auth().signInAnonymously();
        firebaseReady = true;
        console.log('[DataService] Firebase READY.');
      } catch (err) {
        console.warn('[DataService] Anonymous auth FAILED:', err.code, err.message);
      }
    } catch (err) {
      console.warn('[DataService] Firebase init FAILED:', err.message);
    }
  }

  function isReady() {
    return firebaseReady && db !== null;
  }

  function withTimeout(promise, ms) {
    return Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error(' Timeout ' + ms + 'ms')), ms))
    ]);
  }

  async function getPublishedBooks() {
    if (!isReady()) return getLocalFallback();
    try {
      const snapshot = await withTimeout(db.ref('publishedBooks').once('value'), 10000);
      const data = snapshot.val();
      if (!data) return [];
      return Object.values(data).sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0));
    } catch (err) {
      console.warn('[DataService] Read failed:', err.message);
      return getLocalFallback();
    }
  }

  async function publishBook(bookData) {
    if (!isReady()) throw new Error('Firebase غير متاح — تحقق من إعدادات Anonymous Auth في Firebase Console');
    const bookId = bookData.id || 'book-' + Date.now();
    console.log('[DataService] Publishing book:', bookId);

    const data = { ...bookData, id: bookId, publishedAt: Date.now(), published: true };

    // Upload image to Storage if it's a base64 data URL
    if (data.img && typeof data.img === 'string' && data.img.startsWith('data:')) {
      console.log('[DataService] Uploading image to Storage...');
      const imgExt = (data.img.match(/data:image\/([a-z]+);/) || [])[1] || 'jpg';
      data.img = await uploadFile(`publishedBooks/${bookId}/image.${imgExt}`, data.img);
      console.log('[DataService] Image uploaded:', data.img);
    }

    // Upload PDF to Storage if it's a base64 data URL
    if (data.pdfUrl && typeof data.pdfUrl === 'string' && data.pdfUrl.startsWith('data:')) {
      console.log('[DataService] Uploading PDF to Storage...');
      data.pdfUrl = await uploadFile(`publishedBooks/${bookId}/document.pdf`, data.pdfUrl);
      console.log('[DataService] PDF uploaded:', data.pdfUrl);
    }

    // Remove huge content from database to keep it fast, only keep excerpt
    if (data.contentAr && data.contentAr.length > 2000) delete data.contentAr;
    if (data.contentEn && data.contentEn.length > 2000) delete data.contentEn;

    console.log('[DataService] Writing metadata to DB...', 'size:', JSON.stringify(data).length);
    await withTimeout(db.ref(`publishedBooks/${bookId}`).set(data), 15000);
    console.log('[DataService] Write OK!');
    saveLocalCache(data);
    return data;
  }

  async function unpublishBook(bookId) {
    if (!isReady()) throw new Error('Firebase غير متاح.');
    await withTimeout(db.ref(`publishedBooks/${bookId}`).remove(), 10000);
    removeLocalCache(bookId);
  }

  async function isBookPublished(bookId) {
    if (!isReady()) return false;
    try {
      const snapshot = await withTimeout(db.ref(`publishedBooks/${bookId}`).once('value'), 5000);
      return snapshot.exists();
    } catch {
      return false;
    }
  }

  // ── Facebook Articles Import (manual approval flow) ──
  const FB_IMPORTS_NODE = 'facebookImports';
  const FB_META_NODE = 'facebookImportMeta';

  async function getFacebookPosts() {
    if (!isReady()) return null;
    try {
      let data = {};
      try {
        const snapshot = await withTimeout(db.ref(FB_IMPORTS_NODE).once('value'), 10000);
        data = snapshot.val() || {};
      } catch (err) {
        console.warn('[DataService] FB imports read failed:', err.message);
      }
      const posts = Object.keys(data).map(key => data[key]).filter(Boolean);
      posts.sort((a, b) => ((b.createdTime || '') > (a.createdTime || '') ? 1 : -1));
      return posts;
    } catch (err) {
      console.warn('[DataService] getFacebookPosts failed:', err.message);
      return null;
    }
  }

  async function getFbImportMeta() {
    if (!isReady()) return null;
    try {
      const snapshot = await withTimeout(db.ref(FB_META_NODE).once('value'), 5000);
      return snapshot.val() || null;
    } catch (err) {
      console.warn('[DataService] getFbImportMeta failed:', err.message);
      return null;
    }
  }

  async function setFbPostStatus(fbId, status, extra = {}) {
    if (!isReady()) throw new Error('Firebase غير متاح.');
    const updates = Object.assign({ status }, extra);
    if (status === 'published') updates.publishedAt = Date.now();
    if (status === 'rejected') updates.rejectedAt = Date.now();
    await withTimeout(db.ref(`${FB_IMPORTS_NODE}/${fbId}`).update(updates), 10000);
  }

  async function updateFbImportedRecord(fbId, record) {
    if (!isReady()) return null;
    await withTimeout(db.ref(`${FB_IMPORTS_NODE}/${fbId}`).update(record), 10000);
    return record;
  }

  const FB_PUBLISHED_CACHE_KEY = 'rahala_fb_published_articles_cache';

  // Approved/published FB articles for the public blog grid. Merges the live
  // Firebase node with a local cache so the site keeps working when Firebase
  // is slow or offline.
  async function getPublishedFbArticles() {
    if (!isReady()) return getFbLocalFallback();
    try {
      let data = {};
      try {
        const snapshot = await withTimeout(db.ref(FB_IMPORTS_NODE).once('value'), 8000);
        data = snapshot.val() || {};
      } catch (err) {
        console.warn('[DataService] FB published read failed:', err.message);
      }
      const posts = Object.keys(data).map(key => data[key]).filter(p => p && p.status === 'published');
      posts.sort((a, b) => ((b.publishedAt || 0) - (a.publishedAt || 0)));
      saveFbLocalCache(posts);
      return posts;
    } catch (err) {
      console.warn('[DataService] getPublishedFbArticles failed:', err.message);
      return getFbLocalFallback();
    }
  }

  function getFbLocalFallback() {
    try {
      const arr = JSON.parse(localStorage.getItem(FB_PUBLISHED_CACHE_KEY) || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch { return []; }
  }

  function saveFbLocalCache(posts) {
    try { localStorage.setItem(FB_PUBLISHED_CACHE_KEY, JSON.stringify(posts)); } catch (e) { /* ignore */ }
  }

  function uploadFile(path, dataUrl) {
    return new Promise((resolve, reject) => {
      try {
        const ref = storage.ref(path);
        const parts = dataUrl.split(',');
        const mime = (parts[0].match(/data:(.*?);/) || [])[1] || 'application/octet-stream';
        const b64 = parts[1];
        const binary = atob(b64);
        const arr = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) arr[i] = binary.charCodeAt(i);
        const blob = new Blob([arr], { type: mime });
        console.log('[DataService] Uploading file size:', blob.size);
        const task = ref.put(blob, { contentType: mime });
        const timer = setTimeout(() => { task.cancel(); reject(new Error('انتهى وقت الرفع (30 ثانية) — الملف كبير جداً')); }, 30000);
        task.then(() => ref.getDownloadURL()).then(url => { clearTimeout(timer); resolve(url); }).catch(err => { clearTimeout(timer); console.warn('[DataService] Upload failed:', err.message); reject(err); });
      } catch (err) {
        reject(err);
      }
    });
  }

  const LOCAL_CACHE_KEY = 'rahala_published_books_cache';

  function getLocalFallback() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_CACHE_KEY) || '[]');
    } catch { return []; }
  }

  function saveLocalCache(book) {
    const cache = getLocalFallback();
    const idx = cache.findIndex(b => b.id === book.id);
    if (idx >= 0) cache[idx] = book; else cache.unshift(book);
    localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(cache));
  }

  function removeLocalCache(bookId) {
    const cache = getLocalFallback().filter(b => b.id !== bookId);
    localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(cache));
  }

  setTimeout(() => init(), 1500);

  return {
    isReady,
    getPublishedBooks,
    publishBook,
    unpublishBook,
    isBookPublished,
    getFacebookPosts,
    getFbImportMeta,
    setFbPostStatus,
    updateFbImportedRecord,
    getPublishedFbArticles
  };
})();
