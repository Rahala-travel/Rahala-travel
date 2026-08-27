// ──────────────────────────────────────────────────────────────
// Data Service — Shared persistent storage via Firebase
// ──────────────────────────────────────────────────────────────
// Firebase SDKs are loaded DYNAMICALLY after page render so they
// never block the main page content from appearing.
// ──────────────────────────────────────────────────────────────

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
    return new Promise((resolve, reject) => {
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
    try {
      if (typeof FIREBASE_CONFIG === 'undefined' || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
        console.warn('[DataService] Firebase config not set. Using localStorage fallback.');
        return;
      }
      if (typeof firebase === 'undefined') {
        await loadFirebaseSDKs();
      }
      if (typeof firebase === 'undefined' || !firebase.initializeApp) {
        console.warn('[DataService] Firebase SDK failed to load.');
        return;
      }
      firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.database();
      storage = firebase.storage();
      firebase.auth().signInAnonymously().then(() => {
        firebaseReady = true;
        console.log('[DataService] Firebase connected (anonymous auth).');
      }).catch(err => {
        console.warn('[DataService] Anonymous auth failed:', err.message);
        firebaseReady = true;
      });
    } catch (err) {
      console.warn('[DataService] Firebase init failed:', err.message);
    }
  }

  function isReady() {
    return firebaseReady && db !== null;
  }

  async function getPublishedBooks() {
    if (!isReady()) return getLocalFallback();
    try {
      const snapshot = await db.ref('publishedBooks').once('value');
      const data = snapshot.val();
      if (!data) return [];
      return Object.values(data).sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0));
    } catch (err) {
      console.warn('[DataService] Read failed:', err.message);
      return getLocalFallback();
    }
  }

  async function publishBook(bookData) {
    if (!isReady()) throw new Error('Firebase غير متاح. تحقق من الاتصال بالإنترنت.');
    const bookId = bookData.id || 'book-' + Date.now();
    const safeData = { ...bookData, id: bookId, publishedAt: Date.now(), published: true };
    if (safeData.img && safeData.img.startsWith('data:')) safeData.img = '';
    if (safeData.pdfUrl && safeData.pdfUrl.startsWith('data:')) safeData.pdfUrl = '';
    await db.ref(`publishedBooks/${bookId}`).set(safeData);
    saveLocalCache({ ...bookData, id: bookId, publishedAt: Date.now(), published: true });
    return safeData;
  }

  async function unpublishBook(bookId) {
    if (!isReady()) throw new Error('Firebase غير متاح.');
    try {
      await storage.ref(`publishedBooks/${bookId}/image.jpg`).delete().catch(() => {});
      await storage.ref(`publishedBooks/${bookId}/document.pdf`).delete().catch(() => {});
    } catch (e) { /* ignore */ }
    await db.ref(`publishedBooks/${bookId}`).remove();
    removeLocalCache(bookId);
  }

  async function isBookPublished(bookId) {
    if (!isReady()) return false;
    try {
      const snapshot = await db.ref(`publishedBooks/${bookId}`).once('value');
      return snapshot.exists();
    } catch {
      return false;
    }
  }

  async function getPublishedBook(bookId) {
    if (!isReady()) return null;
    try {
      const snapshot = await db.ref(`publishedBooks/${bookId}`).once('value');
      return snapshot.val();
    } catch {
      return null;
    }
  }

  function uploadFile(path, dataUrl) {
    return new Promise((resolve, reject) => {
      const ref = storage.ref(path);
      const parts = dataUrl.split(',');
      const mime = parts[0].match(/:(.*?);/)[1];
      const b64 = atob(parts[1]);
      const arr = new Uint8Array(b64.length);
      for (let i = 0; i < b64.length; i++) arr[i] = b64.charCodeAt(i);
      const blob = new Blob([arr], { type: mime });
      ref.put(blob, { contentType: mime }).then(() => ref.getDownloadURL()).then(url => resolve(url)).catch(err => {
        console.warn('[DataService] Upload failed:', err.message);
        reject(err);
      });
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

  setTimeout(() => init(), 2000);

  return {
    isReady,
    getPublishedBooks,
    publishBook,
    unpublishBook,
    isBookPublished,
    getPublishedBook
  };
})();
