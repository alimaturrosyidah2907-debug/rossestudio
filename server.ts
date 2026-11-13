import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import express from 'express';

const PORT = Number(process.env.PORT || 3000);
const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const app = express();

// Serve root static files cleanly for pure HTML5 + ES6 module GitHub Pages architecture
app.get('/', (_req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'index.html'));
});

app.get('/index.html', (_req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'index.html'));
});

app.get('/admin', (_req, res) => {
  res.redirect('/admin.html');
});

app.get('/admin.html', (_req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'admin.html'));
});

app.get('/firebase-config.js', (_req, res) => {
  res.type('application/javascript').sendFile(path.join(ROOT_DIR, 'firebase-config.js'));
});

app.get('/cms-utils.js', (_req, res) => {
  res.type('application/javascript').sendFile(path.join(ROOT_DIR, 'cms-utils.js'));
});

// Serve assets from /assets (GitHub Pages layout) and fallback to /public/assets
app.use('/assets', express.static(path.join(ROOT_DIR, 'assets')));
if (fs.existsSync(path.join(PUBLIC_DIR, 'assets'))) {
  app.use('/assets', express.static(path.join(PUBLIC_DIR, 'assets')));
}

app.use((_req, res) => {
  res.status(404).sendFile(path.join(ROOT_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`RosseStudio static CMS server listening on http://localhost:${PORT}`);
});
