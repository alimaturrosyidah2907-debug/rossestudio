/**
 * Pure utility functions & Dark Mode Obsidian/Crimson theme definitions
 * shared by index.html, admin.html, firebase-config.js, and Node unit tests
 * (zero external/CDN imports).
 */

export const MAX_UNIVERSAL_FILE_BYTES = 750 * 1024; // 750 KB safe Firestore document threshold

export const THEME_PALETTES = {
  'obsidian-crimson': {
    id: 'obsidian-crimson',
    label: 'Obsidian & Crimson Glow',
    description: 'Obsidian dark canvas with deep burgundy ambient light and crimson glow.',
    swatches: ['#0A0A0A', '#8B0000', '#FF3333'],
    vars: {
      '--bg-canvas': '#0A0A0A',
      '--bg-ambient': '#110505',
      '--bg-surface': 'rgba(18, 8, 10, 0.72)',
      '--bg-surface-solid': '#13090B',
      '--bg-surface-alt': 'rgba(28, 10, 12, 0.85)',
      '--bg-glass': 'rgba(10, 10, 10, 0.72)',
      '--text-primary': '#F8F4F4',
      '--text-muted': '#B8A6A8',
      '--accent-primary': '#DC2626',
      '--accent-deep': '#8B0000',
      '--accent-bright': '#FF3333',
      '--accent-hover': '#EF4444',
      '--accent-soft': '#FCA5A5',
      '--accent-contrast': '#FFFFFF',
      '--glow-crimson': 'rgba(220, 38, 38, 0.48)',
      '--border-hairline': 'rgba(255, 255, 255, 0.10)',
      '--border-crimson': 'rgba(220, 38, 38, 0.35)',
      '--logo-color': '#F8F4F4',
      '--footer-bg': '#070304',
      '--footer-text': '#F8F4F4',
    },
  },
  'burgundy-wine': {
    id: 'burgundy-wine',
    label: 'Velvet Burgundy Noir',
    description: 'Deep wine noir with rose-crimson specular highlights.',
    swatches: ['#110505', '#7F1D1D', '#FB7185'],
    vars: {
      '--bg-canvas': '#0E0406',
      '--bg-ambient': '#1A070B',
      '--bg-surface': 'rgba(26, 9, 13, 0.75)',
      '--bg-surface-solid': '#19080C',
      '--bg-surface-alt': 'rgba(38, 12, 18, 0.86)',
      '--bg-glass': 'rgba(14, 4, 6, 0.75)',
      '--text-primary': '#FDF2F4',
      '--text-muted': '#C7ACB2',
      '--accent-primary': '#B91C1C',
      '--accent-deep': '#7F1D1D',
      '--accent-bright': '#EF4444',
      '--accent-hover': '#DC2626',
      '--accent-soft': '#FCA5A5',
      '--accent-contrast': '#FFFFFF',
      '--glow-crimson': 'rgba(185, 28, 28, 0.45)',
      '--border-hairline': 'rgba(255, 255, 255, 0.10)',
      '--border-crimson': 'rgba(185, 28, 28, 0.38)',
      '--logo-color': '#FDF2F4',
      '--footer-bg': '#080203',
      '--footer-text': '#FDF2F4',
    },
  },
  'midnight-navy': {
    id: 'midnight-navy',
    label: 'Midnight Sapphire & Gold',
    description: 'Nocturnal obsidian navy paired with champagne gold glow.',
    swatches: ['#070B14', '#1E3A8A', '#D4AF37'],
    vars: {
      '--bg-canvas': '#070B14',
      '--bg-ambient': '#0D1526',
      '--bg-surface': 'rgba(15, 23, 42, 0.74)',
      '--bg-surface-solid': '#0F172A',
      '--bg-surface-alt': 'rgba(23, 35, 62, 0.85)',
      '--bg-glass': 'rgba(7, 11, 20, 0.76)',
      '--text-primary': '#F6F2E9',
      '--text-muted': '#A6B1C4',
      '--accent-primary': '#D4AF37',
      '--accent-deep': '#9A7B1C',
      '--accent-bright': '#F3D265',
      '--accent-hover': '#E5C354',
      '--accent-soft': '#EAD289',
      '--accent-contrast': '#070B14',
      '--glow-crimson': 'rgba(212, 175, 55, 0.38)',
      '--border-hairline': 'rgba(255, 255, 255, 0.10)',
      '--border-crimson': 'rgba(212, 175, 55, 0.32)',
      '--logo-color': '#F6F2E9',
      '--footer-bg': '#04070D',
      '--footer-text': '#F6F2E9',
    },
  },
  'espresso-taupe': {
    id: 'espresso-taupe',
    label: 'Smoked Espresso & Ember',
    description: 'Dark roasted espresso canvas with warm copper ember accents.',
    swatches: ['#0D0908', '#7C2D12', '#EA580C'],
    vars: {
      '--bg-canvas': '#0C0807',
      '--bg-ambient': '#180E0B',
      '--bg-surface': 'rgba(24, 15, 12, 0.76)',
      '--bg-surface-solid': '#170E0B',
      '--bg-surface-alt': 'rgba(36, 22, 18, 0.86)',
      '--bg-glass': 'rgba(12, 8, 7, 0.76)',
      '--text-primary': '#F7F1ED',
      '--text-muted': '#BCAE9E',
      '--accent-primary': '#C2410C',
      '--accent-deep': '#7C2D12',
      '--accent-bright': '#FB923C',
      '--accent-hover': '#EA580C',
      '--accent-soft': '#FDBA74',
      '--accent-contrast': '#FFFFFF',
      '--glow-crimson': 'rgba(234, 88, 12, 0.42)',
      '--border-hairline': 'rgba(255, 255, 255, 0.10)',
      '--border-crimson': 'rgba(234, 88, 12, 0.34)',
      '--logo-color': '#F7F1ED',
      '--footer-bg': '#070404',
      '--footer-text': '#F7F1ED',
    },
  },
  'eucalyptus-porcelain': {
    id: 'eucalyptus-porcelain',
    label: 'Obsidian Jade & Emerald',
    description: 'Dark carbon jade surface with subtle emerald glow.',
    swatches: ['#070D0B', '#065F46', '#10B981'],
    vars: {
      '--bg-canvas': '#070D0B',
      '--bg-ambient': '#0A1813',
      '--bg-surface': 'rgba(12, 24, 19, 0.76)',
      '--bg-surface-solid': '#0D1914',
      '--bg-surface-alt': 'rgba(18, 36, 29, 0.86)',
      '--bg-glass': 'rgba(7, 13, 11, 0.76)',
      '--text-primary': '#F1F7F4',
      '--text-muted': '#9FB5AC',
      '--accent-primary': '#059669',
      '--accent-deep': '#064E3B',
      '--accent-bright': '#34D399',
      '--accent-hover': '#10B981',
      '--accent-soft': '#6EE7B7',
      '--accent-contrast': '#FFFFFF',
      '--glow-crimson': 'rgba(16, 185, 129, 0.38)',
      '--border-hairline': 'rgba(255, 255, 255, 0.10)',
      '--border-crimson': 'rgba(16, 185, 129, 0.32)',
      '--logo-color': '#F1F7F4',
      '--footer-bg': '#040806',
      '--footer-text': '#F1F7F4',
    },
  },
  'dusty-mauve': {
    id: 'dusty-mauve',
    label: 'Obsidian Plum & Rose',
    description: 'Deep plum noir with muted rose-crimson accents.',
    swatches: ['#0D080B', '#831843', '#F43F5E'],
    vars: {
      '--bg-canvas': '#0C070A',
      '--bg-ambient': '#180B13',
      '--bg-surface': 'rgba(24, 12, 19, 0.76)',
      '--bg-surface-solid': '#170B12',
      '--bg-surface-alt': 'rgba(36, 18, 28, 0.86)',
      '--bg-glass': 'rgba(12, 7, 10, 0.76)',
      '--text-primary': '#F9F2F6',
      '--text-muted': '#BFA6B4',
      '--accent-primary': '#E11D48',
      '--accent-deep': '#881337',
      '--accent-bright': '#FB7185',
      '--accent-hover': '#F43F5E',
      '--accent-soft': '#FDA4AF',
      '--accent-contrast': '#FFFFFF',
      '--glow-crimson': 'rgba(225, 29, 72, 0.42)',
      '--border-hairline': 'rgba(255, 255, 255, 0.10)',
      '--border-crimson': 'rgba(225, 29, 72, 0.34)',
      '--logo-color': '#F9F2F6',
      '--footer-bg': '#060305',
      '--footer-text': '#F9F2F6',
    },
  },
};

export const COLLECTIONS = [
  'hero_settings',
  'hero_socials',
  'about_settings',
  'educations',
  'experiences',
  'achievements',
  'certificates',
  'skills',
  'expertise_categories',
  'portfolio_items',
  'app_projects',
  'designs',
  'tutorials',
  'books',
  'journals',
  'testimonials',
  'faqs',
  'footer_contacts',
  'site_themes',
  'contact_messages',
];

export function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export const ADMIN_EMAIL = 'alimaturrosyidah2907@gmail.com';
export const ADMIN_PIN_SALT = 'rosse-admin-pin';
// Default 6-digit PIN: 290726 (SHA-256 of `${ADMIN_PIN_SALT}:290726`)
export const ADMIN_PIN_HASH = '1c6d85cb296b873690e90c9516fe15d55686050954bad94f718b9e595db2c3d7';

export async function sha256Hex(text) {
  const bytes = new TextEncoder().encode(String(text ?? ''));
  const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function verifyAdminPin(pin, expectedHash = ADMIN_PIN_HASH) {
  const cleaned = String(pin ?? '').trim();
  if (!cleaned) return false;
  const computed = await sha256Hex(`${ADMIN_PIN_SALT}:${cleaned}`);
  return computed === expectedHash;
}

export function isAuthorizedAdminUser(user) {
  if (!user || !user.email) return false;
  return user.email.trim().toLowerCase() === ADMIN_EMAIL && user.emailVerified === true;
}

export function extractGoogleMapsEmbedUrl(raw) {
  if (!raw || !String(raw).trim()) return null;
  const trimmed = String(raw).trim();
  const iframeMatch = trimmed.match(/<iframe[^>]*\ssrc=["']([^"']+)["']/i);
  const candidate = iframeMatch ? iframeMatch[1].trim() : trimmed;
  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== 'https:') return null;
    const allowedHosts = ['www.google.com', 'maps.google.com', 'google.com', 'www.openstreetmap.org'];
    if (!allowedHosts.some((host) => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`))) {
      return null;
    }
    if (
      parsed.hostname.includes('google.com') &&
      !parsed.pathname.includes('/maps/embed') &&
      parsed.searchParams.get('output') !== 'embed'
    ) {
      const placeMatch = parsed.pathname.match(/\/maps\/place\/([^/@]+)/i);
      const coordMatch = parsed.pathname.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
      const qParam = parsed.searchParams.get('q') || parsed.searchParams.get('query');
      if (qParam) {
        return `https://maps.google.com/maps?q=${encodeURIComponent(qParam)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
      }
      if (placeMatch?.[1]) {
        const placeName = decodeURIComponent(placeMatch[1]).replace(/\+/g, ' ');
        return `https://maps.google.com/maps?q=${encodeURIComponent(placeName)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
      }
      if (coordMatch) {
        return `https://maps.google.com/maps?q=${coordMatch[1]},${coordMatch[2]}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
      }
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

export function resolveGoogleMapsDisplay(raw, fallbackAddress = '') {
  const directEmbed = extractGoogleMapsEmbedUrl(raw);
  const rawTrimmed = String(raw ?? '').trim();
  let externalUrl = null;

  if (rawTrimmed) {
    const iframeMatch = rawTrimmed.match(/<iframe[^>]*\ssrc=["']([^"']+)["']/i);
    const candidate = iframeMatch ? iframeMatch[1].trim() : rawTrimmed;
    try {
      const parsed = new URL(candidate);
      if (parsed.protocol === 'https:') {
        const allowedShareHosts = [
          'maps.app.goo.gl',
          'goo.gl',
          'www.google.com',
          'maps.google.com',
          'google.com',
          'www.openstreetmap.org',
        ];
        if (allowedShareHosts.some((h) => parsed.hostname === h || parsed.hostname.endsWith(`.${h}`))) {
          externalUrl = parsed.toString();
        }
      }
    } catch {
      // Ignore malformed raw string
    }
  }

  if (directEmbed) {
    return { embedUrl: directEmbed, externalUrl: externalUrl || directEmbed };
  }

  const addr = String(fallbackAddress ?? '').trim();
  if (externalUrl && addr) {
    return {
      embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(addr)}&t=&z=14&ie=UTF8&iwloc=&output=embed`,
      externalUrl,
    };
  }

  if (!externalUrl && addr) {
    return {
      embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(addr)}&t=&z=14&ie=UTF8&iwloc=&output=embed`,
      externalUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`,
    };
  }

  return { embedUrl: null, externalUrl };
}

export function normalizeExternalUrl(raw) {
  if (!raw || !String(raw).trim()) return null;
  const trimmed = String(raw).trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^[a-z0-9.-]+\.[a-z]{2,}/i.test(trimmed)) return `https://${trimmed}`;
  return null;
}

export function formatWhatsAppUrl(wa) {
  if (!wa || !String(wa).trim()) return null;
  const trimmed = String(wa).trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  const digits = trimmed.replace(/\D/g, '');
  if (!digits) return null;
  const normalized = digits.startsWith('0') ? `62${digits.slice(1)}` : digits;
  return `https://wa.me/${normalized}`;
}

export function formatInstagramUrl(ig) {
  if (!ig || !String(ig).trim()) return null;
  const trimmed = String(ig).trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  const handle = trimmed.replace(/^@/, '');
  return handle ? `https://instagram.com/${handle}` : null;
}

const SOCIAL_SVG_ICONS = {
  github:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.39-5.26 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  linkedin:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>',
  instagram:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  youtube:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>',
  tiktok:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6a2.6 2.6 0 0 1 3.41-2.46V9.66a5.72 5.72 0 0 0-6.51 5.64 5.73 5.73 0 0 0 5.7 5.7 5.73 5.73 0 0 0 5.7-5.7V9.01a7.3 7.3 0 0 0 4.27 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>',
  behance:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.8 11.4c1.2-.5 1.7-1.4 1.7-2.4 0-2.1-1.6-3-4-3H1v12h4.9c2.5 0 4.3-1.2 4.3-3.5 0-1.5-.8-2.6-2.4-3.1zM3.6 8.1h1.7c.9 0 1.6.3 1.6 1.2s-.7 1.2-1.6 1.2H3.6V8.1zm1.9 7.8H3.6v-2.8h1.9c1.1 0 1.9.4 1.9 1.4 0 1-.8 1.4-1.9 1.4zm10.4-5.7c-2.6 0-4.4 1.8-4.4 4.3 0 2.6 1.7 4.2 4.4 4.2 1.9 0 3.3-.9 4-2.4h-2.2c-.3.5-.9.8-1.7.8-1.1 0-1.9-.6-2-1.8h6.1c.1-3-1.3-5.1-4.2-5.1zm-1.9 3.2c.2-1 .9-1.5 1.9-1.5s1.6.5 1.8 1.5H14zm-.3-6.2h4.4v1.4h-4.4V7.2z"/></svg>',
  dribbble:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M8.5 3.6c3.2 4.4 5 9.8 5.2 16.8M15.5 3.6c-1.8 4.4-5.4 9.5-11 12.6"/></svg>',
  figma:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 3h3v6H9a3 3 0 0 1 0-6zm3 0h3a3 3 0 0 1 0 6h-3V3zm0 6h3a3 3 0 0 1 0 6h-3V9zm-3 0h3v6H9a3 3 0 0 1 0-6zm0 6h3v3a3 3 0 1 1-3-3z"/></svg>',
  x:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  whatsapp:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>',
  email:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  telegram:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  website:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
};

export function detectSocialPlatform(platformInput = '', urlInput = '') {
  const plat = String(platformInput ?? '').trim();
  const rawUrl = String(urlInput ?? '').trim();
  const combined = `${plat} ${rawUrl}`.toLowerCase();

  let key = 'website';
  let label = plat || 'Website';

  if (combined.includes('github')) {
    key = 'github';
    label = plat || 'GitHub';
  } else if (combined.includes('linkedin')) {
    key = 'linkedin';
    label = plat || 'LinkedIn';
  } else if (combined.includes('instagram') || plat.toLowerCase() === 'ig') {
    key = 'instagram';
    label = plat || 'Instagram';
  } else if (combined.includes('youtube') || combined.includes('youtu.be')) {
    key = 'youtube';
    label = plat || 'YouTube';
  } else if (combined.includes('tiktok')) {
    key = 'tiktok';
    label = plat || 'TikTok';
  } else if (combined.includes('behance')) {
    key = 'behance';
    label = plat || 'Behance';
  } else if (combined.includes('dribbble')) {
    key = 'dribbble';
    label = plat || 'Dribbble';
  } else if (combined.includes('figma')) {
    key = 'figma';
    label = plat || 'Figma';
  } else if (combined.includes('whatsapp') || combined.includes('wa.me') || plat.toLowerCase() === 'wa') {
    key = 'whatsapp';
    label = plat || 'WhatsApp';
  } else if (
    combined.includes('mailto:') ||
    plat.toLowerCase().includes('email') ||
    plat.toLowerCase().includes('gmail') ||
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(rawUrl)
  ) {
    key = 'email';
    label = plat || 'Email';
  } else if (combined.includes('t.me') || combined.includes('telegram')) {
    key = 'telegram';
    label = plat || 'Telegram';
  } else if (
    combined.includes('twitter.com') ||
    combined.includes('x.com') ||
    plat.toLowerCase() === 'x' ||
    plat.toLowerCase().includes('twitter')
  ) {
    key = 'x';
    label = plat || 'X';
  }

  let href = null;
  if (key === 'email') {
    const cleanMail = rawUrl.replace(/^mailto:/i, '').trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanMail)) {
      href = `mailto:${cleanMail}`;
    } else {
      href = normalizeExternalUrl(rawUrl);
    }
  } else if (key === 'whatsapp') {
    href = formatWhatsAppUrl(rawUrl);
  } else if (key === 'instagram' && !/^https?:\/\//i.test(rawUrl)) {
    href = formatInstagramUrl(rawUrl);
  } else {
    href = normalizeExternalUrl(rawUrl);
  }

  return {
    key,
    label,
    href,
    svg: SOCIAL_SVG_ICONS[key] || SOCIAL_SVG_ICONS.website,
  };
}

export function parseTagList(raw) {
  if (!raw || !String(raw).trim()) return [];
  const seen = new Set();
  return String(raw)
    .split(',')
    .map((s) => s.trim())
    .filter((s) => {
      if (!s || seen.has(s.toLowerCase())) return false;
      seen.add(s.toLowerCase());
      return true;
    })
    .slice(0, 16);
}

export function extractVideoEmbedUrl(rawUrl) {
  const safe = normalizeExternalUrl(rawUrl);
  if (!safe) return null;
  try {
    const parsed = new URL(safe);
    const host = parsed.hostname.toLowerCase();

    // YouTube
    if (host === 'youtu.be' || host.endsWith('.youtu.be')) {
      const id = parsed.pathname.replace(/^\/+/, '').split('/')[0];
      return id ? `https://www.youtube.com/embed/${encodeURIComponent(id)}` : null;
    }
    if (host === 'youtube.com' || host.endsWith('.youtube.com')) {
      if (parsed.pathname.startsWith('/embed/')) {
        return safe;
      }
      if (parsed.pathname.startsWith('/shorts/')) {
        const id = parsed.pathname.split('/')[2];
        return id ? `https://www.youtube.com/embed/${encodeURIComponent(id)}` : null;
      }
      const v = parsed.searchParams.get('v');
      if (v) {
        return `https://www.youtube.com/embed/${encodeURIComponent(v)}`;
      }
    }

    // Google Drive file preview
    if (host === 'drive.google.com') {
      const fileMatch = parsed.pathname.match(/\/file\/d\/([^/]+)/);
      if (fileMatch?.[1]) {
        return `https://drive.google.com/file/d/${encodeURIComponent(fileMatch[1])}/preview`;
      }
      const idParam = parsed.searchParams.get('id');
      if (idParam) {
        return `https://drive.google.com/file/d/${encodeURIComponent(idParam)}/preview`;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export function classifyMediaPreview(dataUrl = '', fileName = '', externalUrl = '') {
  const raw = String(dataUrl ?? '').trim();
  const name = String(fileName ?? '').trim();
  const extUrl = normalizeExternalUrl(externalUrl);
  const videoEmbed = extractVideoEmbedUrl(extUrl);

  const extFromName = (name.match(/\.([a-z0-9]{1,8})$/i)?.[1] || '').toUpperCase();

  if (raw.startsWith('data:image/') || /^https?:\/\/.+\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(raw)) {
    return {
      kind: 'image',
      src: raw,
      embedSrc: videoEmbed || null,
      downloadName: name || 'visual-rossestudio.png',
      extLabel: extFromName || 'IMG',
      hasFile: true,
    };
  }

  if (raw.startsWith('data:application/pdf') || /\.pdf$/i.test(name)) {
    return {
      kind: 'pdf',
      src: raw,
      embedSrc: raw,
      downloadName: name || 'dokumen-rossestudio.pdf',
      extLabel: 'PDF',
      hasFile: Boolean(raw),
    };
  }

  if (raw.startsWith('data:video/') || /\.(mp4|webm|mov|m4v)$/i.test(name)) {
    return {
      kind: 'video',
      src: raw,
      embedSrc: videoEmbed || null,
      downloadName: name || 'video-rossestudio.mp4',
      extLabel: extFromName || 'VIDEO',
      hasFile: Boolean(raw),
    };
  }

  if (raw.startsWith('data:')) {
    const mimeExt = raw.match(/^data:[^/]+\/([a-z0-9.+-]+)/i)?.[1]?.toUpperCase() || 'FILE';
    return {
      kind: 'file',
      src: raw,
      embedSrc: videoEmbed || null,
      downloadName: name || `lampiran-rossestudio.${mimeExt.toLowerCase()}`,
      extLabel: extFromName || mimeExt.slice(0, 6),
      hasFile: true,
    };
  }

  if (videoEmbed) {
    return {
      kind: 'video-embed',
      src: '',
      embedSrc: videoEmbed,
      downloadName: name || '',
      extLabel: 'VIDEO',
      hasFile: false,
    };
  }

  return {
    kind: 'none',
    src: '',
    embedSrc: null,
    downloadName: name || '',
    extLabel: extFromName || '',
    hasFile: false,
  };
}

export function parseTriviaItems(raw) {
  if (!raw || !String(raw).trim()) return [];
  const trimmed = String(raw).trim();
  if (trimmed.startsWith('[')) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed
          .filter((entry) => entry && (entry.label || entry.value))
          .map((entry) => ({
            label: String(entry.label || 'Info').trim(),
            value: String(entry.value || '').trim(),
          }))
          .filter((item) => item.value.length > 0);
      }
    } catch {
      // Fallback to line parsing
    }
  }
  return trimmed
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const idx = line.indexOf(':');
      if (idx > 0) {
        return { label: line.slice(0, idx).trim(), value: line.slice(idx + 1).trim() };
      }
      return { label: 'Highlight', value: line };
    })
    .filter((item) => item.value.length > 0);
}

export function validateContactMessageInput(input) {
  const nama = String(input?.nama ?? '').trim();
  const email = String(input?.email ?? '').trim();
  const subjek = String(input?.subjek ?? '').trim();
  const pesan = String(input?.pesan ?? '').trim();

  if (!nama || nama.length > 150) {
    return { valid: false, error: 'Nama wajib diisi (maksimal 150 karakter).' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
    return { valid: false, error: 'Alamat email tidak valid.' };
  }
  if (!subjek || subjek.length > 250) {
    return { valid: false, error: 'Subjek pesan wajib diisi (maksimal 250 karakter).' };
  }
  if (!pesan || pesan.length > 4000) {
    return { valid: false, error: 'Isi pesan wajib diisi (maksimal 4000 karakter).' };
  }
  return { valid: true, error: null, payload: { nama, email, subjek, pesan } };
}

export function hasHeroData(hero) {
  return Boolean(hero && (hero.headline?.trim() || hero.sub_headline?.trim() || hero.foto_profil?.trim()));
}

export function hasAboutData(about) {
  return Boolean(about && (about.bio?.trim() || parseTriviaItems(about.trivia_unik).length > 0));
}

export function hasFooterData(footer) {
  if (!footer) return false;
  return Boolean(
    footer.alamat_teks?.trim() ||
      footer.email?.trim() ||
      footer.wa?.trim() ||
      footer.ig?.trim() ||
      footer.linkedin?.trim() ||
      footer.cv_file?.trim() ||
      footer.cv_link_url?.trim() ||
      footer.maps_embed_iframe_link?.trim() ||
      footer.teks_copyright_dinamis?.trim()
  );
}

export function isPortfolioStateEmpty(state) {
  return (
    !hasHeroData(state.hero) &&
    (!state.heroSocials || state.heroSocials.length === 0) &&
    !hasAboutData(state.about) &&
    (!state.educations || state.educations.length === 0) &&
    (!state.experiences || state.experiences.length === 0) &&
    (!state.achievements || state.achievements.length === 0) &&
    (!state.certificates || state.certificates.length === 0) &&
    (!state.skills || state.skills.length === 0) &&
    (!state.categories || state.categories.length === 0) &&
    (!state.portfolios || state.portfolios.length === 0) &&
    (!state.appProjects || state.appProjects.length === 0) &&
    (!state.designs || state.designs.length === 0) &&
    (!state.tutorials || state.tutorials.length === 0) &&
    (!state.books || state.books.length === 0) &&
    (!state.journals || state.journals.length === 0) &&
    (!state.testimonials || state.testimonials.length === 0) &&
    (!state.faqs || state.faqs.length === 0) &&
    !hasFooterData(state.footer)
  );
}

export function sortByNewest(arr, field = 'createdAt') {
  return [...(arr || [])].sort((a, b) => {
    const ta = a?.[field]?.seconds || 0;
    const tb = b?.[field]?.seconds || 0;
    return tb - ta;
  });
}

export function filterExperiencesByCategory(items, category) {
  return (items || []).filter((e) => e.kategori_pengalaman === category);
}

export function splitTwoToneHeadline(headline = '') {
  const cleaned = String(headline ?? '').trim();
  if (!cleaned) return { primary: '', accent: '' };
  const words = cleaned.split(/\s+/);
  if (words.length === 1) {
    return { primary: words[0], accent: '' };
  }
  const splitIdx = words.length === 2 ? 1 : Math.ceil(words.length / 2);
  return {
    primary: words.slice(0, splitIdx).join(' '),
    accent: words.slice(splitIdx).join(' '),
  };
}

export function computeHeroSummaryStats(state = {}) {
  const expCount = (state.experiences || []).length;
  const appCount = (state.appProjects || []).length;
  const catCount = (state.categories || []).length;
  const worksCount =
    appCount +
    (state.portfolios || []).length +
    (state.designs || []).length +
    (state.tutorials || []).length +
    (state.books || []).length +
    (state.journals || []).length;
  const certCount = (state.certificates || []).length;
  const achCount = (state.achievements || []).length;
  const skillCount = (state.skills || []).length;
  const eduCount = (state.educations || []).length;

  const worksHref =
    appCount > 0
      ? '#aplikasi'
      : catCount > 0
        ? '#keahlian'
        : (state.books || []).length > 0 || (state.journals || []).length > 0
          ? '#publikasi'
          : '#karya-kreatif';

  const candidates = [
    { key: 'experiences', label: 'Organisasi & Karir', count: expCount, href: '#pengalaman', icon: 'users' },
    { key: 'works', label: 'Karya & Publikasi', count: worksCount, href: worksHref, icon: 'briefcase' },
    { key: 'certificates', label: 'Sertifikat', count: certCount, href: '#sertifikat', icon: 'award' },
    { key: 'achievements', label: 'Penghargaan', count: achCount, href: '#prestasi', icon: 'trophy' },
    { key: 'skills', label: 'Skills & Alat', count: skillCount, href: '#skills', icon: 'cpu' },
    { key: 'educations', label: 'Pendidikan', count: eduCount, href: '#tentang', icon: 'book' },
  ];

  return candidates.filter((item) => item.count > 0).slice(0, 4);
}

export function partitionMediaItems(items = [], inspectFn) {
  const withImage = [];
  const withoutImage = [];
  (items || []).forEach((item, index) => {
    const media = inspectFn ? inspectFn(item) : classifyMediaPreview(item?.image || '', '', '');
    if (media && media.kind === 'image' && media.src) {
      withImage.push({ item, index, media });
    } else {
      withoutImage.push({ item, index, media: media || { kind: 'none', src: '', hasFile: false } });
    }
  });
  return { withImage, withoutImage };
}

