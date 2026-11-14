import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ADMIN_EMAIL,
  COLLECTIONS,
  THEME_PALETTES,
  classifyMediaPreview,
  detectSocialPlatform,
  escapeHtml,
  extractGoogleMapsEmbedUrl,
  extractVideoEmbedUrl,
  filterExperiencesByCategory,
  formatInstagramUrl,
  formatWhatsAppUrl,
  hasAboutData,
  hasFooterData,
  hasHeroData,
  isAuthorizedAdminUser,
  isPortfolioStateEmpty,
  normalizeExternalUrl,
  parseTagList,
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

test('COLLECTIONS covers all 20 CMS Firestore collections', () => {
  assert.equal(COLLECTIONS.length, 20);
  for (const required of [
    'hero_socials',
    'app_projects',
    'designs',
    'tutorials',
    'books',
    'journals',
    'expertise_categories',
    'portfolio_items',
    'site_themes',
    'contact_messages',
  ]) {
    assert.ok(COLLECTIONS.includes(required), `Missing ${required}`);
  }
});

test('detectSocialPlatform automatically identifies platform icon and safe href from platform or URL', () => {
  const gh = detectSocialPlatform('GitHub', 'github.com/rossestudio');
  assert.equal(gh.key, 'github');
  assert.equal(gh.href, 'https://github.com/rossestudio');
  assert.ok(gh.svg.includes('<svg'));

  const yt = detectSocialPlatform('Channel', 'https://youtu.be/dQw4w9WgXcQ');
  assert.equal(yt.key, 'youtube');
  assert.equal(yt.href, 'https://youtu.be/dQw4w9WgXcQ');

  const mail = detectSocialPlatform('Email', 'alimaturrosyidah2907@gmail.com');
  assert.equal(mail.key, 'email');
  assert.equal(mail.href, 'mailto:alimaturrosyidah2907@gmail.com');

  const xss = detectSocialPlatform('Website', 'javascript:alert(1)');
  assert.equal(xss.href, null);
});

test('parseTagList, extractVideoEmbedUrl, and classifyMediaPreview parse tags, embeds, and universal files cleanly', () => {
  assert.deepEqual(parseTagList('React, Firebase, react, Tailwind CSS, '), [
    'React',
    'Firebase',
    'Tailwind CSS',
  ]);

  assert.equal(
    extractVideoEmbedUrl('https://www.youtube.com/watch?v=abc123XYZ'),
    'https://www.youtube.com/embed/abc123XYZ',
  );
  assert.equal(
    extractVideoEmbedUrl('https://youtu.be/abc123XYZ'),
    'https://www.youtube.com/embed/abc123XYZ',
  );
  assert.equal(
    extractVideoEmbedUrl('https://drive.google.com/file/d/1AbCdEfGh/view?usp=sharing'),
    'https://drive.google.com/file/d/1AbCdEfGh/preview',
  );

  const pdfMeta = classifyMediaPreview('data:application/pdf;base64,JVBERi0=', 'jurnal-2026.pdf', '');
  assert.equal(pdfMeta.kind, 'pdf');
  assert.equal(pdfMeta.extLabel, 'PDF');
  assert.equal(pdfMeta.downloadName, 'jurnal-2026.pdf');

  const zipMeta = classifyMediaPreview('data:application/zip;base64,UEsDB', 'app-release.apk', '');
  assert.equal(zipMeta.kind, 'file');
  assert.equal(zipMeta.extLabel, 'APK');
  assert.equal(zipMeta.hasFile, true);

  const ytOnly = classifyMediaPreview('', '', 'https://youtu.be/demo99');
  assert.equal(ytOnly.kind, 'video-embed');
  assert.equal(ytOnly.embedSrc, 'https://www.youtube.com/embed/demo99');
});

test('isPortfolioStateEmpty returns true only when every collection and singleton is empty', () => {
  const emptyState = {
    hero: null,
    heroSocials: [],
    about: null,
    educations: [],
    experiences: [],
    achievements: [],
    certificates: [],
    skills: [],
    categories: [],
    portfolios: [],
    appProjects: [],
    designs: [],
    tutorials: [],
    books: [],
    journals: [],
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
    isPortfolioStateEmpty({ ...emptyState, appProjects: [{ id: 'p1', judul: 'POS App' }] }),
    false,
  );
  assert.equal(
    isPortfolioStateEmpty({ ...emptyState, journals: [{ id: 'j1', judul: 'Paper' }] }),
    false,
  );
  assert.equal(hasHeroData({ headline: 'RosseStudio' }), true);
  assert.equal(hasAboutData({ bio: 'Developer & MUA' }), true);
  assert.equal(hasFooterData({ cv_link_url: 'https://drive.google.com/file/d/123/view' }), true);
});

test('validateContactMessageInput validates required fields and rejects malformed payloads', () => {
  const badEmail = validateContactMessageInput({
    nama: 'Nadia',
    email: 'not-an-email',
    subjek: 'Booking MUA',
    pesan: 'Halo RosseStudio',
  });
  assert.equal(badEmail.valid, false);

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
    extractGoogleMapsEmbedUrl('https://www.google.com/maps/place/Singgahan,+Tuban/@-7.01,111.79,15z'),
    'https://maps.google.com/maps?q=Singgahan%2C%20Tuban&t=&z=15&ie=UTF8&iwloc=&output=embed',
  );

  const shortWithAddr = resolveGoogleMapsDisplay(
    'https://maps.app.goo.gl/qUgjkHPkjpLERmUf6',
    'Singgahan, Tuban, Jawa Timur, Indonesia',
  );
  assert.equal(shortWithAddr.externalUrl, 'https://maps.app.goo.gl/qUgjkHPkjpLERmUf6');
  assert.ok(shortWithAddr.embedUrl?.includes('output=embed'));
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
