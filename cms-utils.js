/**
 * Pure utility functions & Dark Mode Obsidian/Crimson theme definitions
 * shared by index.html, admin.html, firebase-config.js, and Node unit tests
 * (zero external/CDN imports).
 */

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
  'about_settings',
  'educations',
  'experiences',
  'achievements',
  'certificates',
  'skills',
  'expertise_categories',
  'portfolio_items',
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
    return parsed.toString();
  } catch {
    return null;
  }
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
    footer.maps_embed_iframe_link?.trim() ||
    footer.teks_copyright_dinamis?.trim()
  );
}

export function isPortfolioStateEmpty(state) {
  return (
    !hasHeroData(state.hero) &&
    !hasAboutData(state.about) &&
    (!state.educations || state.educations.length === 0) &&
    (!state.experiences || state.experiences.length === 0) &&
    (!state.achievements || state.achievements.length === 0) &&
    (!state.certificates || state.certificates.length === 0) &&
    (!state.skills || state.skills.length === 0) &&
    (!state.categories || state.categories.length === 0) &&
    (!state.portfolios || state.portfolios.length === 0) &&
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
