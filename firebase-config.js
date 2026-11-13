/**
 * ============================================================================
 * RosseStudio — Firebase & Shared Utility Configuration (GitHub Pages Ready)
 * ============================================================================
 * PANDUAN KONFIGURASI UNTUK DEPLOY GITHUB PAGES:
 * 1. Buka Firebase Console (https://console.firebase.google.com) -> Project Settings.
 * 2. Salin objek `firebaseConfig` Anda jika ingin memindahkan ke project baru.
 * 3. Aktifkan "Authentication -> Sign-in method -> Email/Password" (dan/atau Google).
 * 4. Buat user Admin di menu "Authentication -> Users", lalu verifikasi email
 *    atau tambahkan UID user tersebut ke collection `admins/{uid}` di Firestore.
 * 5. Publish aturan keamanan dari file `firestore.rules` pada tab Firestore Rules.
 * ============================================================================
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocFromServer,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  writeBatch,
} from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js';

import {
  THEME_PALETTES,
  COLLECTIONS,
  escapeHtml,
  extractGoogleMapsEmbedUrl,
  normalizeExternalUrl,
  formatWhatsAppUrl,
  formatInstagramUrl,
  parseTriviaItems,
  validateContactMessageInput,
  hasHeroData,
  hasAboutData,
  hasFooterData,
  isPortfolioStateEmpty,
  sortByNewest,
  filterExperiencesByCategory,
} from './cms-utils.js';

export const firebaseConfig = {
  projectId: 'lithe-env-80z9n',
  appId: '1:508425268118:web:75f070b68a4f925f6e0bb7',
  apiKey: 'AIzaSyCzriiKob7JSuz2N8F8bMnz-aspdZjm4P4',
  authDomain: 'lithe-env-80z9n.firebaseapp.com',
  firestoreDatabaseId: 'ai-studio-rossestudio-61b1e37a-b8f3-437d-b44c-dba598a38190',
  storageBucket: 'lithe-env-80z9n.firebasestorage.app',
  messagingSenderId: '508425268118',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const googleProvider = new GoogleAuthProvider();

export const OperationType = Object.freeze({
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  LIST: 'list',
  GET: 'get',
  WRITE: 'write',
});

/**
 * Mandatory Firestore structured error handler.
 */
export function handleFirestoreError(error, operationType, path) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid ?? null,
      email: auth.currentUser?.email ?? null,
      emailVerified: auth.currentUser?.emailVerified ?? null,
      isAnonymous: auth.currentUser?.isAnonymous ?? null,
      tenantId: auth.currentUser?.tenantId ?? null,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

/**
 * Mandatory boot connection test via getDocFromServer.
 */
export async function testFirestoreConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Firebase connection offline. Check firebase-config.js.');
    }
  }
}

export function applyThemePalette(themeName) {
  const palette = THEME_PALETTES[themeName] || THEME_PALETTES['obsidian-crimson'];
  const root = document.documentElement;
  Object.entries(palette.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  root.dataset.theme = palette.id;
  return palette;
}

/**
 * Compress local image file to Base64 JPEG/WebP via HTML5 Canvas
 * so it fits comfortably within Firestore's 1MB document limit.
 */
export function compressImageToBase64(file, maxWidth = 1100, quality = 0.78) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve('');
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Gagal membaca file gambar.'));
    reader.onload = (event) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Format gambar tidak valid.'));
      img.onload = () => {
        const scale = img.width > maxWidth ? maxWidth / img.width : 1;
        const width = Math.round(img.width * scale);
        const height = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const mime = file.type === 'image/png' ? 'image/webp' : 'image/jpeg';
        const dataUrl = canvas.toDataURL(mime, quality);
        if (dataUrl.length > 850000) {
          resolve(canvas.toDataURL('image/jpeg', 0.6));
        } else {
          resolve(dataUrl);
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Convert small PDF (<= 600KB) to Base64 Data URL for zero-cost Firestore storage.
 */
export function readPdfAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve('');
      return;
    }
    if (file.size > 600 * 1024) {
      reject(new Error('Ukuran CV PDF maksimal 600 KB untuk penyimpanan langsung di Firestore.'));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Gagal membaca file PDF.'));
    reader.onload = () => resolve(String(reader.result || ''));
    reader.readAsDataURL(file);
  });
}

export {
  THEME_PALETTES,
  COLLECTIONS,
  escapeHtml,
  extractGoogleMapsEmbedUrl,
  normalizeExternalUrl,
  formatWhatsAppUrl,
  formatInstagramUrl,
  parseTriviaItems,
  validateContactMessageInput,
  hasHeroData,
  hasAboutData,
  hasFooterData,
  isPortfolioStateEmpty,
  sortByNewest,
  filterExperiencesByCategory,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  writeBatch,
};
