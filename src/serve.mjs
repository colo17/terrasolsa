/** Servidor estático mínimo para previsualizar /site. Uso: node src/serve.mjs */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, dirname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');
const PORT = Number(process.env.PORT || 4330);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.gif': 'image/gif', '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4', '.webm': 'video/webm',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

createServer(async (req, res) => {
  try {
    let rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (rel.endsWith('/')) rel += 'index.html';
    const file = join(root, normalize(rel).replace(/^(\.\.[/\\])+/, ''));
    if (!file.startsWith(root)) { res.writeHead(403).end('Forbidden'); return; }

    const info = await stat(file).catch(() => null);
    const target = info && info.isDirectory() ? join(file, 'index.html') : file;
    const buf = await readFile(target);
    const type = TYPES[extname(target).toLowerCase()] || 'application/octet-stream';

    // Peticiones de rango: Safari las exige para reproducir <video>.
    const range = req.headers.range;
    const m = range && /^bytes=(\d*)-(\d*)$/.exec(range.trim());
    if (m && (m[1] || m[2])) {
      const total = buf.length;
      let start = m[1] ? Number(m[1]) : total - Number(m[2]);
      let end = m[1] && m[2] ? Number(m[2]) : total - 1;
      if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= total) {
        res.writeHead(416, { 'Content-Range': `bytes */${total}` }).end();
        return;
      }
      end = Math.min(end, total - 1);
      res.writeHead(206, {
        'Content-Type': type,
        'Content-Range': `bytes ${start}-${end}/${total}`,
        'Content-Length': end - start + 1,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache',
      });
      res.end(buf.subarray(start, end + 1));
      return;
    }

    res.writeHead(200, {
      'Content-Type': type,
      'Content-Length': buf.length,
      'Cache-Control': 'no-cache',
      'Accept-Ranges': 'bytes',
    });
    res.end(buf);
  } catch {
    const nf = await readFile(join(root, '404.html')).catch(() => Buffer.from('404'));
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }).end(nf);
  }
}).listen(PORT, () => console.log(`TERRASOL · http://localhost:${PORT}`));

