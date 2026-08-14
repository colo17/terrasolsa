/** Verifica que todo href/src interno del sitio generado exista. */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');
const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const pages = walk(root).filter((f) => f.endsWith('.html'));
const bad = new Set();
let checked = 0;

for (const p of pages) {
  const html = readFileSync(p, 'utf8');
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const r = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(r)) continue;
    const clean = r.split('?')[0].split('#')[0];
    if (!clean) continue;
    checked++;
    if (!existsSync(resolve(dirname(p), clean))) bad.add(`${relative(root, p)}  ->  ${r}`);
  }
}

console.log(`páginas: ${pages.length}`);
console.log(`referencias internas verificadas: ${checked}`);
console.log(bad.size ? `ROTAS (${bad.size}):\n` + [...bad].join('\n') : '✓ sin enlaces rotos');
process.exit(bad.size ? 1 : 0);
