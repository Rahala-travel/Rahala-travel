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
    const data = { ...bookData, id: bookId, publishedAt: Date.now(), published: true };
    console.log('[DataService] Writing to Firebase...', bookId, 'size:', JSON.stringify(data).length);
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
    isBookPublished
  };
})();
