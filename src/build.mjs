/**
 * Generador estático del sitio de TERRASOL S.A.
 * Uso:  node src/build.mjs
 * Salida: ./site
 */
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { productos, todosLosProductos } from './data.mjs';
import {
  home, catalogo, producto, empresaPage, serviciosPage,
  representadasPage, contactoPage, notFound,
} from './pages.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'site');
const SITE = 'https://terrasolsa.com';

function write(rel, html) {
  const file = join(out, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html, 'utf8');
  return rel;
}

const written = [];

written.push(write('index.html', home()));
written.push(write('catalogo.html', catalogo()));
written.push(write('empresa.html', empresaPage()));
written.push(write('servicios.html', serviciosPage()));
written.push(write('representadas.html', representadasPage()));
written.push(write('contacto.html', contactoPage()));
written.push(write('404.html', notFound()));

for (const p of productos) {
  written.push(write(join('productos', `${p.slug}.html`), producto(p)));
}

/* ── Favicon SVG con el isotipo ── */
write(
  'assets/img/marca/favicon.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="5" fill="#009c55"/><path fill="#fff" d="M8 8h24v5.4H23.1v18.6h-6.2V13.4H8V8Z"/><path fill="#fff" opacity=".55" d="M25.6 16.4H32v15.6h-6.4z"/></svg>`
);

/* ── sitemap.xml ── */
const urls = written
  .filter((f) => f.endsWith('.html') && !f.endsWith('404.html'))
  .map((f) => f.replace(/\\/g, '/').replace(/index\.html$/, ''));
const today = new Date().toISOString().slice(0, 10);
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${SITE}/${u}</loc><lastmod>${today}</lastmod><priority>${u === '' ? '1.0' : u.startsWith('productos/') ? '0.6' : '0.8'}</priority></url>`
  )
  .join('\n')}
</urlset>`
);

/* ── robots.txt ── */
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

/* ── aviso si falta el video del hero ── */
const faltanVideos = ['hero-1.mp4', 'hero-2.mp4', 'hero-3.mp4'].filter(
  (v) => !existsSync(join(out, 'assets', 'video', v))
);

console.log(`✓ ${written.length} páginas generadas en /site`);
console.log(`  · ${productos.length} fichas de producto`);
console.log(`  · ${todosLosProductos.length} equipos en el catálogo`);
console.log(`  · sitemap.xml con ${urls.length} URLs`);
if (faltanVideos.length) console.log(`  ! faltan videos del hero: ${faltanVideos.join(', ')}`);
