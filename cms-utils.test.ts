import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ADMIN_EMAIL,
  COLLECTIONS,
  THEME_PALETTES,
  escapeHtml,
  extractGoogleMapsEmbedUrl,
  filterExperiencesByCategory,
  formatInstagramUrl,
  formatWhatsAppUrl,
  hasAboutData,
  hasFooterData,
  hasHeroData,
  isAuthorizedAdminUser,
  isPortfolioStateEmpty,
  normalizeExternalUrl,
  parseTriviaItems,
  resolveGoogleMapsDisplay,
  sortByNewest,
  validateContactMessageInput,
  verifyAdminPin,
} from './cms-utils.js';

test('verifyAdminPin and isAuthorizedAdminUser enforce 2-step PIN and strict Gmail access', async () => {
  assert.equal(await verifyAdminPin('290726'), true);
  assert.equal(await verifyAdminPin('000000'), false);
  assert.equal(await verifyAdminPin(''), false);

  assert.equal(isAuthorizedAdminUser({ email: ADMIN_EMAIL, emailVerified: true }), true);
  assert.equal(isAuthorizedAdminUser({ email: 'ALIMATURROSYIDAH2907@GMAIL.COM', emailVerified: true }), true);
  assert.equal(isAuthorizedAdminUser({ email: ADMIN_EMAIL, emailVerified: false }), false);
  assert.equal(isAuthorizedAdminUser({ email: 'other@gmail.com', emailVerified: true }), false);
  assert.equal(isAuthorizedAdminUser(null), false);
});

test('THEME_PALETTES includes obsidian-crimson default plus all curated dark luxury palettes', () => {
  const keys = Object.keys(THEME_PALETTES);
  assert.deepEqual(keys, [
    'obsidian-crimson',
    'burgundy-wine',
    'midnight-navy',
    'espresso-taupe',
    'eucalyptus-porcelain',
    'dusty-mauve',
  ]);
  for (const palette of Object.values(THEME_PALETTES)) {
    assert.ok(palette.vars['--bg-canvas']);
    assert.ok(palette.vars['--text-primary']);
    assert.ok(palette.vars['--accent-primary']);
    assert.ok(palette.vars['--glow-crimson']);
    assert.ok(palette.vars['--logo-color']);
  }
});

test('COLLECTIONS covers all 14 dynamic CMS Firestore collections including contact_messages', () => {
  assert.equal(COLLECTIONS.length, 14);
  assert.ok(COLLECTIONS.includes('expertise_categories'));
  assert.ok(COLLECTIONS.includes('portfolio_items'));
  assert.ok(COLLECTIONS.includes('site_themes'));
  assert.ok(COLLECTIONS.includes('contact_messages'));
});

test('isPortfolioStateEmpty returns true only when every collection and singleton is empty', () => {
  const emptyState = {
    hero: null,
    about: null,
    educations: [],
    experiences: [],
    achievements: [],
    certificates: [],
    skills: [],
    categories: [],
    portfolios: [],
    testimonials: [],
    faqs: [],
    footer: null,
  };
  assert.equal(isPortfolioStateEmpty(emptyState), true);

  assert.equal(
    isPortfolioStateEmpty({ ...emptyState, hero: { headline: '   ', sub_headline: '', foto_profil: '' } }),
    true,
  );
  assert.equal(
    isPortfolioStateEmpty({ ...emptyState, about: { bio: '', trivia_unik: '[]' } }),
    true,
  );
  assert.equal(
    isPortfolioStateEmpty({ ...emptyState, educations: [{ id: '1', institusi: 'ITB Tuban' }] }),
    false,
  );
  assert.equal(hasHeroData({ headline: 'RosseStudio' }), true);
  assert.equal(hasAboutData({ bio: 'Developer & MUA' }), true);
  assert.equal(hasFooterData({ wa: '08123456789' }), true);
});

test('validateContactMessageInput validates required fields and rejects malformed payloads', () => {
  const badEmail = validateContactMessageInput({
    nama: 'Nadia',
    email: 'not-an-email',
    subjek: 'Booking MUA',
    pesan: 'Halo RosseStudio',
  });
  assert.equal(badEmail.valid, false);

  const missingMsg = validateContactMessageInput({
    nama: 'Nadia',
    email: 'nadia@example.com',
    subjek: 'Booking',
    pesan: '   ',
  });
  assert.equal(missingMsg.valid, false);

  const ok = validateContactMessageInput({
    nama: '  Nadia Putri ',
    email: ' nadia@example.com ',
    subjek: ' Web & MUA Collaboration ',
    pesan: 'Ingin konsultasi proyek website.',
  });
  assert.equal(ok.valid, true);
  assert.equal(ok.payload?.nama, 'Nadia Putri');
  assert.equal(ok.payload?.email, 'nadia@example.com');
});

test('extractGoogleMapsEmbedUrl and resolveGoogleMapsDisplay handle embeds, place links, and maps.app.goo.gl short links', () => {
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12" width="600" height="450"></iframe>';
  assert.equal(extractGoogleMapsEmbedUrl(iframe), 'https://www.google.com/maps/embed?pb=!1m18!1m12');
  assert.equal(
    extractGoogleMapsEmbedUrl('https://maps.google.com/maps?q=Tuban&output=embed'),
    'https://maps.google.com/maps?q=Tuban&output=embed',
  );
  assert.equal(
    extractGoogleMapsEmbedUrl('https://www.google.com/maps/place/Singgahan,+Tuban/@-7.01,111.79,15z'),
    'https://maps.google.com/maps?q=Singgahan%2C%20Tuban&t=&z=15&ie=UTF8&iwloc=&output=embed',
  );
  assert.equal(extractGoogleMapsEmbedUrl('<iframe src="javascript:alert(1)"></iframe>'), null);
  assert.equal(extractGoogleMapsEmbedUrl('https://evil.example.com/embed'), null);

  const shortWithAddr = resolveGoogleMapsDisplay(
    'https://maps.app.goo.gl/qUgjkHPkjpLERmUf6',
    'Singgahan, Tuban, Jawa Timur, Indonesia',
  );
  assert.equal(shortWithAddr.externalUrl, 'https://maps.app.goo.gl/qUgjkHPkjpLERmUf6');
  assert.ok(shortWithAddr.embedUrl?.includes('output=embed'));
  assert.ok(shortWithAddr.embedUrl?.includes('Singgahan'));

  const shortNoAddr = resolveGoogleMapsDisplay('https://maps.app.goo.gl/qUgjkHPkjpLERmUf6', '');
  assert.equal(shortNoAddr.embedUrl, null);
  assert.equal(shortNoAddr.externalUrl, 'https://maps.app.goo.gl/qUgjkHPkjpLERmUf6');
});

test('URL, WhatsApp, Instagram, Trivia, Escape, and Sorting helpers behave deterministically', () => {
  assert.equal(formatWhatsAppUrl('0812-3456-7890'), 'https://wa.me/6281234567890');
  assert.equal(formatInstagramUrl('@rossestudio'), 'https://instagram.com/rossestudio');
  assert.equal(normalizeExternalUrl('rossestudio.com'), 'https://rossestudio.com');
  assert.equal(normalizeExternalUrl('javascript:alert(1)'), null);

  assert.deepEqual(parseTriviaItems('Domisili: Tuban\nFokus: Web & MUA'), [
    { label: 'Domisili', value: 'Tuban' },
    { label: 'Fokus', value: 'Web & MUA' },
  ]);

  assert.equal(escapeHtml('<script>"x"</script>'), '&lt;script&gt;&quot;x&quot;&lt;/script&gt;');

  const sorted = sortByNewest([
    { id: 'old', createdAt: { seconds: 100 } },
    { id: 'new', createdAt: { seconds: 500 } },
  ]);
  assert.equal(sorted[0].id, 'new');

  const exps = [
    { kategori_pengalaman: 'Profesional', posisi: 'Fullstack' },
    { kategori_pengalaman: 'Organisasi', posisi: 'Ketua' },
  ];
  assert.equal(filterExperiencesByCategory(exps, 'Organisasi').length, 1);
});
