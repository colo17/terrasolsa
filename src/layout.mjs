import { empresa, contacto } from './data.mjs';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Logo original de TERRASOL S.A., recortado del sitio anterior y con el fondo
   quitado. Dos variantes: texto gris para fondo claro, blanco para fondo oscuro. */
export const logo = (base = '', cls = 'brandlogo') => `
<span class="${cls}">
  <img class="${cls}__dark" src="${base}assets/img/marca/terrasol-logo.png" alt="TERRASOL S.A." width="378" height="63">
  <img class="${cls}__light" src="${base}assets/img/marca/terrasol-logo-blanco.png" alt="" aria-hidden="true" width="378" height="63">
</span>`;

const ico = {
  arrow: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 8h11M9 3.5 13.5 8 9 12.5"/></svg>',
  mail: '<svg viewBox="0 0 20 20"><rect x="2.5" y="4.5" width="15" height="11" rx="2"/><path d="m3 6 7 5 7-5"/></svg>',
  phone: '<svg viewBox="0 0 20 20"><path d="M4 3h3l1.5 4-2 1.4a11 11 0 0 0 5.1 5.1L13 11.5 17 13v3a1.5 1.5 0 0 1-1.7 1.5A14.5 14.5 0 0 1 2.5 4.7 1.5 1.5 0 0 1 4 3Z"/></svg>',
  pin: '<svg viewBox="0 0 20 20"><path d="M10 18s6-5.3 6-9.4A6 6 0 1 0 4 8.6C4 12.7 10 18 10 18Z"/><circle cx="10" cy="8.4" r="2.2"/></svg>',
  search: '<svg viewBox="0 0 20 20"><circle cx="8.75" cy="8.75" r="5.75"/><path d="m13.2 13.2 4 4"/></svg>',
  chevron: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m4 6 4 4 4-4"/></svg>',
  wa: '<svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.4 0-.5.1-.7l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4C6.5 6.9 6 7.7 6 9s.9 2.5 1 2.7 1.8 2.9 4.4 4a15 15 0 0 0 1.5.5c.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.8-1.2s.3-1.2.2-1.3-.2-.2-.5-.4M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z"/></svg>',
};

export const icon = (n) => ico[n] || '';

const navItems = [
  { href: 'index.html', label: 'Inicio', key: 'index' },
  { href: 'catalogo.html', label: 'Catálogo', key: 'catalogo' },
  { href: 'empresa.html', label: 'Empresa', key: 'empresa' },
  { href: 'servicios.html', label: 'Servicios', key: 'servicios' },
  { href: 'representadas.html', label: 'Representadas', key: 'representadas' },
  { href: 'contacto.html', label: 'Contacto', key: 'contacto' },
];

function header(active, base, overHero) {
  return `
<header class="header ${overHero ? 'header--over' : 'header--solid'}" data-over="${overHero}">
  <div class="container header__inner">
    <a class="header__brand" href="${base}index.html" aria-label="TERRASOL S.A. — inicio">
      ${logo(base)}
      <span class="header__gh">Representante<b>GREEN HORSE</b></span>
    </a>
    <nav class="nav" id="nav" data-open="false" aria-label="Principal">
      ${navItems
        .map(
          (i) =>
            `<a href="${base}${i.href}"${i.key === active ? ' aria-current="page"' : ''}>${i.label}</a>`
        )
        .join('\n      ')}
      <a class="btn btn--primary btn--sm nav__cta" href="${base}contacto.html">Pedir cotización</a>
    </nav>
    <button class="burger" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;
}

function footer(base) {
  const mvd = contacto.oficinas[0];
  const mal = contacto.oficinas[1];
  return `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <div class="footer__brand">
          <img src="${base}assets/img/marca/terrasol-logo-blanco.png" alt="TERRASOL S.A." width="378" height="63">
        </div>
        <p class="footer__about">${esc(empresa.descripcionCorta)}</p>
        <div class="footer__gh">
          <img src="${base}assets/img/marca/logo-green-horse.jpg" alt="Logo GREEN HORSE" width="42" height="63" loading="lazy">
          <span><b>Representante oficial</b>GREEN HORSE en Uruguay desde 2004</span>
        </div>
      </div>
      <div>
        <h4>Catálogo</h4>
        <ul>
          <li><a href="${base}catalogo.html?linea=arroz">Línea arroz</a></li>
          <li><a href="${base}catalogo.html?linea=trigo">Línea trigo</a></li>
          <li><a href="${base}catalogo.html?linea=maiz">Línea maíz</a></li>
          <li><a href="${base}catalogo.html?linea=legumbres">Soja y legumbres</a></li>
          <li><a href="${base}catalogo.html?linea=almacenaje">Almacenaje y transporte</a></li>
          <li><a href="${base}catalogo.html?linea=envasado">Pesaje y envasado</a></li>
        </ul>
      </div>
      <div>
        <h4>Empresa</h4>
        <ul>
          <li><a href="${base}empresa.html">Quiénes somos</a></li>
          <li><a href="${base}servicios.html">Servicios</a></li>
          <li><a href="${base}representadas.html">Marcas representadas</a></li>
          <li><a href="${base}contacto.html">Contacto</a></li>
          <li><a href="${contacto.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
      </div>
      <div>
        <h4>Contacto</h4>
        <ul>
          <li><b style="color:#fff">${mvd.ciudad}, ${mvd.pais}</b></li>
          <li>${esc(mvd.direccion)}</li>
          ${mvd.telefonos.map((t) => `<li><a href="${t.href}">${t.label}</a></li>`).join('\n          ')}
          <li><a href="mailto:${mvd.email}">${mvd.email}</a></li>
          <li style="margin-top:.6rem"><b style="color:#fff">${mal.ciudad}, ${mal.pais}</b></li>
          <li><a href="${mal.telefonos[0].href}">${mal.telefonos[0].label}</a></li>
          <li><a href="mailto:${mal.email}">${mal.email}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© <span data-year>2026</span> TERRASOL S.A. — GREEN HORSE. Todos los derechos reservados.</span>
      <span>Maquinaria agroindustrial · Montevideo, Uruguay</span>
    </div>
  </div>
</footer>
<a class="wa-float" href="https://wa.me/${contacto.whatsapp}" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp">${ico.wa}</a>`;
}

/**
 * Envuelve el contenido de una página en el layout completo.
 */
/* overHero: la página arranca con un bloque oscuro detrás del header (el hero
   del inicio o el encabezado verde de las internas), así que arriba de todo el
   header va transparente con texto blanco. Es true en todas las páginas. */
export function page({ title, description, active, body, base = '', overHero = true, canonical = '' }) {
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#009c55">
${canonical ? `<link rel="canonical" href="${canonical}">` : ''}
<meta property="og:type" content="website">
<meta property="og:site_name" content="TERRASOL S.A. — GREEN HORSE">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:locale" content="es_UY">
<link rel="icon" href="${base}assets/img/marca/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${base}assets/css/styles.css">
<script type="application/ld+json">
${JSON.stringify(
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TERRASOL S.A.',
    alternateName: 'Terrasol Green Horse',
    description: empresa.descripcionCorta,
    foundingDate: '1983',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Juncal 1408, oficina 602',
      addressLocality: 'Montevideo',
      postalCode: '11000',
      addressCountry: 'UY',
    },
    telephone: '+598 2 902 2632',
    email: contacto.emailPrincipal,
    sameAs: [contacto.linkedin],
    areaServed: ['UY', 'AR', 'BR', 'PY', 'ES'],
  },
  null,
  2
)}
</script>
</head>
<body>
<a class="skip" href="#main">Saltar al contenido</a>
${header(active, base, overHero)}
<main id="main">
${body}
</main>
${footer(base)}
<script src="${base}assets/js/app.js" defer></script>
</body>
</html>`;
}

/** Encabezado oscuro para páginas internas */
export function pagehead({ eyebrow, title, text, crumbs = [], base = '' }) {
  return `
<section class="pagehead">
  <div class="container pagehead__inner">
    ${
      crumbs.length
        ? `<nav class="crumbs" aria-label="Migas de pan">
      ${crumbs
        .map((c, i) =>
          c.href
            ? `<a href="${base}${c.href}">${esc(c.label)}</a>${i < crumbs.length - 1 ? '<span>/</span>' : ''}`
            : `<span style="opacity:1;color:#a9bcb1">${esc(c.label)}</span>`
        )
        .join('\n      ')}
    </nav>`
        : ''
    }
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
    <h1>${esc(title)}</h1>
    ${text ? `<p>${esc(text)}</p>` : ''}
  </div>
</section>`;
}

export function ctaBlock(base = '') {
  return `
<section class="section section--tight">
  <div class="container">
    <div class="cta reveal">
      <div class="cta__inner">
        <div>
          <h2>¿Estás proyectando o ampliando tu planta?</h2>
          <p>Diseñamos el layout completo, seleccionamos el equipo según tu grano y tu rendimiento objetivo, y te acompañamos desde el montaje hasta el servicio post venta.</p>
        </div>
        <div class="cta__actions">
          <a class="btn btn--primary" href="${base}contacto.html">Contactanos ${ico.arrow}</a>
          <a class="btn btn--light" href="${base}catalogo.html">Ver el catálogo</a>
        </div>
      </div>
    </div>
  </div>
</section>`;
}
