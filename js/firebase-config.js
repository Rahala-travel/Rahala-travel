// ──────────────────────────────────────────────────────────────
// Firebase Configuration — Rahala Through History
// ──────────────────────────────────────────────────────────────
// HOW TO SET UP:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or use an existing one)
// 3. Go to Project Settings → General → Your apps → Add web app
// 4. Copy the firebaseConfig object and paste it below
// 5. Go to Authentication → Sign-in method → Enable "Anonymous"
// 6. Go to Realtime Database → Create database → Start in test mode
// 7. Go to Storage → Get started → Start in test mode
//
// Firebase Security Rules (paste in Realtime Database → Rules):
// {
//   "rules": {
//     "publishedBooks": {
//       ".read": true,
//       ".write": "auth != null"
//     }
//   }
// }
//
// Firebase Security Rules (paste in Storage → Rules):
// rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /publishedBooks/{allPaths=**} {
//       allow read: if true;
//       allow write: if request.auth != null;
//     }
//   }
// }
// ──────────────────────────────────────────────────────────────

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
