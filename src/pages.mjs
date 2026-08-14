import {
  empresa, contacto, representadas, servicios, etapas,
  productos, lineasConsulta, lineas, lineasCatalogo, todosLosProductos,
} from './data.mjs';
import { page, pagehead, ctaBlock, esc, icon } from './layout.mjs';

const A = icon('arrow');

/* ============================================================
   Piezas reutilizables
   ============================================================ */

const etapaNombre = (id) => (etapas.find((e) => e.id === id) || {}).nombre || 'Repuestos';
const lineaNombre = (id) => (lineasCatalogo.find((l) => l.id === id) || {}).nombre || id;

/** Marcador cuando no hay foto real del equipo */
function placeholder(etapa) {
  return `<svg class="ph" viewBox="0 0 120 90" fill="none" stroke="#009c55" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="26" y="20" width="68" height="52" rx="3" opacity=".75"/>
    <path d="M26 34h68M40 20v-8h40v8" opacity=".5"/>
    <circle cx="47" cy="53" r="8" opacity=".8"/><circle cx="73" cy="53" r="8" opacity=".8"/>
    <path d="M14 44h12M94 44h12" opacity=".45"/>
    <path d="M52 78c2-3 6-3 8 0s6 3 8 0" opacity=".5"/>
  </svg>`;
}

function cardMedia(p, base) {
  if (p.imagen) {
    return `<img src="${base}${p.imagen}" alt="${esc(p.modelo + ' ' + p.nombre)}" loading="lazy" width="800" height="600">`;
  }
  return placeholder(p.etapa);
}

function productCard(p, base = '') {
  const spec =
    (p.fichas && p.fichas.find((f) => /capacidad|producci/i.test(f[0]))) ||
    (p.tabla && ['Capacidad', p.tabla.filas[0][1]]);
  const esConsulta = !p.parrafos;
  return `
<article class="card" data-item
  data-lineas="${(p.lineas || [p.linea]).join(' ')}" data-etapa="${p.etapa}"
  data-buscar="${esc([p.modelo, p.nombre, p.resumen, lineaNombre(p.linea), etapaNombre(p.etapa)].join(' '))}">
  <div class="card__media">
    ${cardMedia(p, base)}
    <span class="card__badge">${esc(etapaNombre(p.etapa))}</span>
  </div>
  <div class="card__body">
    <p class="card__model">${esc(p.modelo)}</p>
    <h3 class="card__title"><a class="stretched" href="${base}${esConsulta ? 'catalogo.html' : 'productos/' + p.slug + '.html'}">${esc(p.nombre)}</a></h3>
    <p class="card__desc">${esc(p.resumen)}</p>
    <div class="card__foot">
      ${spec ? `<span class="card__spec"><span>${esc(spec[0])}</span> ${esc(spec[1])}</span>` : `<span class="card__spec"><span>Línea</span> ${esc(lineaNombre(p.linea))}</span>`}
      <span class="link-arrow">${esConsulta ? 'Consultar' : 'Ver ficha'} ${A}</span>
    </div>
  </div>
</article>`;
}

/* Diagrama de proceso del scrollytelling */
const glifos = {
  almacenaje: 'M4 8 10 3l6 5v9H4zM4 8h12',
  transporte: 'M3 14h14M5 14 9 6h6l-2 8M6 17.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4M14 17.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4',
  limpieza: 'M3 6h14M3 10h14M3 14h14M6 4v12M10 4v12M14 4v12',
  despedrado: 'M4 13h12M7 9.5 10 6l3 3.5M10 6v7M4 16.5h12',
  descascarado: 'M10 4v3M6.5 10.5a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2M13.5 10.5a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2M10 11v5',
  separado: 'M10 3v5M10 8 5 15M10 8l5 7M3.5 16.5h3M13.5 16.5h3',
  blanqueado: 'M10 16.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13M7.5 8.2c.7-1.2 2-1.9 3.3-1.6',
  clasificado: 'M4 5h12M5.5 9h9M7.5 13h5M9.5 17h1',
  molienda: 'M6 8.4a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8M14 8.4a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8M4 11.5h12l-1.5 5.5h-9z',
  envasado: 'M6 6h8l1 11H5zM8 6V4h4v2M8.5 10h3',
};

function diagrama() {
  const cols = 5;
  const cw = 96;
  const rh = 92;
  const nodes = etapas
    .map((e, i) => {
      const c = i % cols;
      const r = Math.floor(i / cols);
      const x = c * cw + 8;
      const y = r * rh + 4;
      return `
    <g transform="translate(${x} ${y})">
      <rect class="flow-node" data-node="${e.id}" x="14" y="0" width="52" height="44" rx="5"/>
      <g transform="translate(30 12)">
        <path class="flow-icon" data-node-icon="${e.id}" d="${glifos[e.id]}" transform="scale(1)"/>
      </g>
      <text class="flow-label" data-node-label="${e.id}" x="40" y="60" text-anchor="middle">${esc(e.nombre)}</text>
    </g>`;
    })
    .join('');
  const links = etapas
    .slice(0, -1)
    .map((_, i) => {
      const c = i % cols;
      const r = Math.floor(i / cols);
      if (c === cols - 1) return '';
      const x1 = c * cw + 8 + 66;
      const x2 = (c + 1) * cw + 8 + 14;
      const y = r * rh + 26;
      return `<path class="flow-link" d="M${x1} ${y}H${x2}"/>`;
    })
    .join('');
  return `<svg viewBox="0 0 ${cols * cw} ${rh * 2}" role="img" aria-label="Etapas del procesamiento del grano">${links}${nodes}</svg>`;
}

/* ============================================================
   HOME
   ============================================================ */
export function home() {
  // 8 equipos: 2 filas de 4 en escritorio, 4 filas de 2 en celular
  const destacados = productos.filter((p) => p.destacado).slice(0, 8);

  // Cinco tomas de 4 s encadenadas, en orden narrativo:
  // silos afuera → planta por dentro → molienda → grano en detalle → embolsado.
  const heroShots = [
    { src: 'assets/video/hero-4.mp4', dur: 4 },
    { src: 'assets/video/hero-1.mp4', dur: 4 },
    { src: 'assets/video/hero-5.mp4', dur: 4 },
    { src: 'assets/video/hero-2.mp4', dur: 4 },
    { src: 'assets/video/hero-3.mp4', dur: 4 },
  ];

  const body = `
<section class="hero">
  <div class="hero__media">
    <img src="assets/video/hero-poster.jpg" alt="" class="is-active" aria-hidden="true">
    ${heroShots
      .map(
        (s, i) =>
          `<video src="${s.src}" muted playsinline preload="${i === 0 ? 'auto' : 'metadata'}" aria-hidden="true"${i === 0 ? ' autoplay' : ''}></video>`
      )
      .join('\n    ')}
    <div class="hero__scrim"></div>
  </div>
  <div class="container hero__inner">
    <div class="hero__content">
      <p class="hero__kicker"><b>Desde 1983</b> Representante oficial GREEN HORSE</p>
      <h1>Maquinaria agroindustrial para el <em>procesamiento de granos</em></h1>
      <p class="hero__lead">${esc(empresa.descripcionCorta)} Desde 2004 representamos la línea GREEN HORSE en Uruguay y el Mercosur: arroz, trigo, soja, maíz, leguminosas y raciones.</p>
      <div class="hero__actions">
        <a class="btn btn--primary" href="catalogo.html">Ver el catálogo ${A}</a>
        <a class="btn btn--light" href="contacto.html">Pedir cotización</a>
      </div>
    </div>
    <div class="hero__bar">
      ${empresa.cifras
        .map((c) => `<div class="hero__stat"><strong>${esc(c.valor)}</strong><span>${esc(c.label)}</span></div>`)
        .join('\n      ')}
    </div>
  </div>
  <div class="hero__progress" aria-hidden="true">
    ${heroShots.map((s) => `<i style="--shot-dur:${s.dur}s"><b></b></i>`).join('')}
  </div>
</section>

<!-- ── Intro ───────────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <p class="eyebrow">Quiénes somos</p>
        <h2>Cuatro décadas equipando la industria del grano</h2>
        ${empresa.descripcionLarga.slice(1).map((p) => `<p class="lead" style="margin-top:1.25rem">${esc(p)}</p>`).join('\n        ')}
        <p style="margin-top:1.5rem"><a class="link-arrow" href="empresa.html">Conocé la empresa ${A}</a></p>
      </div>
      <div class="reveal">
        <div class="stat-row">
          ${empresa.cifras.map((c) => `<div class="stat"><strong>${esc(c.valor)}</strong><span>${esc(c.label)}</span></div>`).join('\n          ')}
        </div>
        <div class="split__media" style="margin-top:1.5rem">
          <img src="assets/img/lineas/arroz-grano.jpg" alt="Grano de arroz descascarado" loading="lazy" width="500" height="505">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── Scrollytelling ──────────────────────────────────── -->
<section class="scrolly section" data-scrolly>
  <div class="scrolly__bg" aria-hidden="true">
    <div class="scrolly__bgSticky">
      ${etapas
        .map(
          (e, i) =>
            `<img src="assets/img/proceso/${e.id}.jpg" alt="" data-bg="${e.id}"${i === 0 ? ' class="is-on"' : ''} loading="${i < 2 ? 'eager' : 'lazy'}" width="1280" height="720">`
        )
        .join('\n      ')}
      <span class="scrolly__veil"></span>
    </div>
  </div>
  <div class="container">
    <div class="scrolly__grid">
      <div class="scrolly__sticky">
        <div class="scrolly__stage">
          <p class="scrolly__num" data-scrolly-num>01 / 10 · Almacenaje</p>
          <h2 class="scrolly__title" data-scrolly-title>${esc(etapas[0].titulo)}</h2>
          <p class="scrolly__text" data-scrolly-text>${esc(etapas[0].texto)}</p>
          <div class="scrolly__diagram">${diagrama()}</div>
        </div>
      </div>
      <div class="scrolly__steps">
        <div style="margin-bottom:2rem">
          <p class="eyebrow">El recorrido del grano</p>
          <h2 style="color:#fff;font-size:clamp(1.6rem,2.6vw,2.2rem)">De la cosecha a la bolsa, etapa por etapa</h2>
          <p style="color:#9db0a6;margin-top:1rem">Cada etapa del proceso tiene su equipo. Recorrelas y llegá directo a los que necesitás.</p>
        </div>
        ${etapas
          .map(
            (e) => `
        <div class="scrolly__step" data-etapa="${e.id}" data-nombre="${esc(e.nombre)}" data-titulo="${esc(e.titulo)}" data-texto="${esc(e.texto)}">
          <span class="step-tag">${esc(e.nombre)}</span>
          <h3>${esc(e.titulo)}</h3>
          <p>${esc(e.texto)}</p>
          <a class="link-arrow" href="catalogo.html?etapa=${e.id}">Ver equipos de esta etapa ${A}</a>
        </div>`
          )
          .join('')}
      </div>
    </div>
  </div>
</section>

<!-- ── Líneas ──────────────────────────────────────────── -->
<section class="section section--soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Líneas de producto</p>
      <h2>Un grano, una línea completa</h2>
      <p>Proyectamos la planta entera: almacenaje, transporte, proceso, selección, pesaje y envasado.</p>
    </div>
    <div class="grid grid-4 reveal">
      ${lineas
        .map(
          (l) => `
      <a class="linea-card ${l.imagen ? '' : 'linea-card--plain'}" href="catalogo.html?linea=${l.id}">
        ${l.imagen ? `<img src="${l.imagen}" alt="${esc(l.nombre)}" loading="lazy" width="500" height="505">` : ''}
        <span class="linea-card__scrim"></span>
        <span class="linea-card__body">
          <h3>${esc(l.nombre)}</h3>
          <p>${esc(l.descripcion)}</p>
          <span class="link-arrow">Ver equipos ${A}</span>
        </span>
      </a>`
        )
        .join('')}
    </div>
  </div>
</section>

<!-- ── Destacados ──────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Equipos destacados</p>
      <h2>Los equipos que más nos piden</h2>
      <p>Una selección de la línea GREEN HORSE. En el catálogo completo vas a encontrar todos los equipos con sus fichas técnicas, filtrables por línea y por etapa del proceso.</p>
    </div>
    <div class="grid grid-destacados reveal">
      ${destacados.map((p) => productCard(p)).join('')}
    </div>
    <div style="margin-top:2.5rem;text-align:center">
      <a class="btn btn--ghost" href="catalogo.html">Ver los ${todosLosProductos.length} equipos del catálogo ${A}</a>
    </div>
  </div>
</section>

<!-- ── Servicios ───────────────────────────────────────── -->
<section class="section section--soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Lo que hacemos</p>
      <h2>No vendemos una máquina, resolvemos una planta</h2>
      <p>${esc(empresa.especialidades)}</p>
    </div>
    <div class="grid grid-3 reveal">
      ${servicios.slice(0, 6).map((s) => featureCard(s)).join('')}
    </div>
    <div style="margin-top:2.5rem"><a class="link-arrow" href="servicios.html">Ver todos los servicios ${A}</a></div>
  </div>
</section>

<!-- ── Representadas ───────────────────────────────────── -->
<section class="section">
  <div class="container">
    <div class="section-head section-head--center">
      <p class="eyebrow eyebrow--center">Marcas representadas</p>
      <h2>Fabricantes que representamos</h2>
      <p>Importamos y representamos maquinaria de Asia, Brasil y Europa para cubrir la planta de punta a punta.</p>
    </div>
    <div class="grid grid-brands reveal">
      ${representadas.map((r) => brandCard(r)).join('')}
    </div>
    <div style="margin-top:2.5rem;text-align:center"><a class="btn btn--ghost" href="representadas.html">Conocé cada fabricante ${A}</a></div>
  </div>
</section>

${ctaBlock()}`;

  return page({
    title: 'TERRASOL S.A. — Maquinaria agroindustrial GREEN HORSE | Uruguay',
    description:
      'Representante e importador oficial de GREEN HORSE en Uruguay desde 2004. Maquinaria para el procesamiento de arroz, trigo, soja, maíz y leguminosas: prelimpieza, descascarado, blanqueado, clasificado, almacenaje, pesaje y envasado.',
    active: 'index',
    overHero: true,
    body,
  });
}

function featureCard(s) {
  const glyphs = {
    layout: '<path d="M6 6h32v32H6z"/><path d="M6 17h32M17 17v21"/>',
    soporte: '<path d="M22 40c9.9 0 18-8.1 18-18S31.9 4 22 4 4 12.1 4 22c0 3.2.8 6.1 2.3 8.7L4 40l9.6-2.2A17.9 17.9 0 0 0 22 40Z"/><path d="M17 17a5 5 0 0 1 9.6 1.9c0 3.3-5 4-5 6.6"/><path d="M22 31h.02"/>',
    instalacion: '<path d="m14 30-8 8 4 4 8-8"/><path d="M25 5a10 10 0 0 0-9.3 13.7L5 29.4l5.6 5.6 10.7-10.7A10 10 0 1 0 25 5Z"/>',
    postventa: '<path d="M22 4 5 11v10c0 10 7.2 17 17 19 9.8-2 17-9 17-19V11Z"/><path d="m15 22 5 5 10-10"/>',
    repuestos: '<circle cx="22" cy="22" r="6"/><path d="M35 22a13 13 0 0 0-.2-2.2l4-3-4-6.9-4.7 1.7a13 13 0 0 0-3.8-2.2L25.6 4h-8l-.7 5.4a13 13 0 0 0-3.8 2.2L8.4 9.9l-4 6.9 4 3a13 13 0 0 0 0 4.4l-4 3 4 6.9 4.7-1.7a13 13 0 0 0 3.8 2.2l.7 5.4h8l.7-5.4a13 13 0 0 0 3.8-2.2l4.7 1.7 4-6.9-4-3c.1-.7.2-1.5.2-2.2Z"/>',
    integral: '<path d="M4 34V14l9-6 9 6v20"/><path d="M22 34V20l9-6 9 6v14"/><path d="M4 34h36"/><path d="M13 22v6M31 26v4"/>',
  };
  return `
<article class="feature">
  <svg class="feature__icon" viewBox="0 0 44 44" aria-hidden="true">${glyphs[s.icono] || glyphs.integral}</svg>
  <h3>${esc(s.titulo)}</h3>
  <p>${esc(s.texto)}</p>
</article>`;
}

function brandCard(r, base = '') {
  const iniciales = r.nombre.replace(/[^A-Z]/g, '').slice(0, 3) || r.nombre.slice(0, 2);
  let visual;
  if (r.logo) {
    visual = `<img class="brand-card__mark" src="${base}assets/img/marca/${r.logo}" alt="Logo ${esc(r.nombre)}" loading="lazy">`;
  } else if (r.imagen) {
    visual = `<img class="brand-card__foto" src="${base}${r.imagen}" alt="Equipamiento ${esc(r.nombre)}" loading="lazy">`;
  } else {
    visual = `<span class="initials">${esc(iniciales)}</span>`;
  }
  return `
<article class="brand-card${r.destacada ? ' brand-card--lead' : ''}">
  <div class="brand-card__logo">${visual}${r.destacada ? '<span class="brand-card__flag">Línea principal</span>' : ''}</div>
  <div class="brand-card__body">
    <h3>${esc(r.nombre)}</h3>
    <p class="brand-card__meta">${esc(r.rubro)}</p>
    <p class="brand-card__origen">${esc(r.origen)}${r.desde ? ' · representada desde ' + r.desde : ''}</p>
    <p class="brand-card__texto">${esc(r.texto)}</p>
    <div class="brand-card__foot">
      ${r.web ? `<a class="link-arrow" href="${r.web}" target="_blank" rel="noopener">Sitio del fabricante ${A}</a>` : `<a class="link-arrow" href="${base}contacto.html">Consultar ${A}</a>`}
    </div>
  </div>
</article>`;
}

/* ============================================================
   CATÁLOGO
   ============================================================ */
export function catalogo() {
  const items = todosLosProductos;
  const countBy = (key, val) => items.filter((p) => p[key] === val).length;
  const countLinea = (id) => items.filter((p) => (p.lineas || [p.linea]).includes(id)).length;
  const etapasUsadas = etapas.filter((e) => countBy('etapa', e.id) > 0);

  const body = `
${pagehead({
  eyebrow: 'Catálogo',
  title: 'Equipos para el procesamiento de granos',
  text: `${items.length} equipos de las líneas que representamos, con sus fichas técnicas. Filtrá por línea de grano o por etapa del proceso.`,
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Catálogo' }],
})}

<section class="section section--tight">
  <div class="container">
    <div class="catalog" data-catalog>
      <aside class="filters" data-collapsed="false">
        <button class="filters__toggle" type="button">Filtrar equipos ${icon('chevron')}</button>
        <div class="filters__body">
          <div class="filters__group">
            <p class="filters__legend">Línea</p>
            ${lineasCatalogo
              .map(
                (l) => `
            <label class="filters__opt">
              <input type="checkbox" data-group="linea" value="${l.id}" data-label="${esc(l.nombre)}">
              <span>${esc(l.nombre)}</span><span class="count">${countLinea(l.id)}</span>
            </label>`
              )
              .join('')}
          </div>
          <div class="filters__group">
            <p class="filters__legend">Etapa del proceso</p>
            ${etapasUsadas
              .map(
                (e) => `
            <label class="filters__opt">
              <input type="checkbox" data-group="etapa" value="${e.id}" data-label="${esc(e.nombre)}">
              <span>${esc(e.nombre)}</span><span class="count">${countBy('etapa', e.id)}</span>
            </label>`
              )
              .join('')}
            ${
              countBy('etapa', 'servicio')
                ? `<label class="filters__opt">
              <input type="checkbox" data-group="etapa" value="servicio" data-label="Repuestos">
              <span>Repuestos</span><span class="count">${countBy('etapa', 'servicio')}</span>
            </label>`
                : ''
            }
          </div>
          <div class="filters__group" style="border-bottom:0">
            <button class="btn btn--ghost btn--sm" type="button" data-clear hidden style="width:100%">Limpiar filtros</button>
          </div>
        </div>
      </aside>

      <div>
        <div class="search">
          ${icon('search')}
          <input type="search" data-search placeholder="Buscar por modelo o equipo — TQLZ, plansifter, trieur…" aria-label="Buscar equipos">
        </div>
        <div class="catalog__bar">
          <p class="catalog__count" data-count><b>${items.length}</b> equipos</p>
          <div class="chips" data-chips></div>
        </div>
        <div class="grid grid-3">
          ${items.map((p) => productCard(p)).join('')}
        </div>
        <div class="empty" data-empty hidden>
          <h3>No encontramos equipos con esos filtros</h3>
          <p class="muted">Probá quitando algún filtro, o escribinos y te ayudamos a encontrar el equipo que necesitás.</p>
          <p style="margin-top:1.25rem"><a class="btn btn--primary btn--sm" href="contacto.html">Consultanos ${A}</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

${ctaBlock()}`;

  return page({
    title: 'Catálogo de maquinaria GREEN HORSE — TERRASOL S.A.',
    description:
      'Catálogo completo de maquinaria para arroz y trigo: limpieza TQLZ, prelimpieza TQLM, stoners TQS y TQSF, descascarador MLGQ 25, separador de paddy MGCZ, blanqueadores MNML, pulidoras CM, trieurs MDJY, plansifters FSFJ y bancos de cilindros.',
    active: 'catalogo',
    body,
  });
}

/* ============================================================
   FICHA DE PRODUCTO
   ============================================================ */
export function producto(p) {
  const relacionados = productos
    .filter((x) => x.slug !== p.slug && (x.etapa === p.etapa || x.linea === p.linea))
    .slice(0, 3);

  const asunto = encodeURIComponent(`Consulta por ${p.modelo} — ${p.nombre}`);
  const cuerpo = encodeURIComponent(
    `Hola,\n\nQuisiera recibir información y cotización del equipo ${p.modelo} — ${p.nombre}.\n\nMi planta procesa: \nCapacidad estimada: \n\nGracias.`
  );

  const body = `
${pagehead({
  eyebrow: `${lineaNombre(p.linea)} · ${etapaNombre(p.etapa)}`,
  title: `${p.modelo} — ${p.nombre}`,
  text: p.resumen,
  base: '../',
  crumbs: [
    { label: 'Inicio', href: 'index.html' },
    { label: 'Catálogo', href: 'catalogo.html' },
    { label: p.modelo },
  ],
})}

<section class="section section--tight">
  <div class="container">
    <div class="product">
      <div>
        <figure class="product__figure">
          ${
            p.imagen
              ? `<img src="../${p.imagen}" alt="${esc(p.modelo + ' ' + p.nombre)}" width="800" height="600">`
              : placeholder(p.etapa)
          }
        </figure>
        ${p.fotoReal ? '' : '<p class="product__nota">Imagen ilustrativa del tipo de equipo. La configuración final se define según el grano, la variedad y la capacidad de cada planta.</p>'}

        <div class="prose">
          ${p.subtitulo ? `<p class="lead"><strong>${esc(p.subtitulo)}</strong></p>` : ''}
          ${p.parrafos && p.parrafos.length ? `<h2>Descripción</h2>${p.parrafos.map((t) => `<p>${esc(t)}</p>`).join('')}` : ''}
          ${
            p.caracteristicas && p.caracteristicas.length
              ? `<h2>Características principales</h2><ul>${p.caracteristicas.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>`
              : ''
          }
          ${
            p.tabla
              ? `<h2>Modelos y especificaciones</h2>
          <div class="spectable">
            <div class="spectable__scroll">
              <table>
                <thead><tr>${p.tabla.columnas.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead>
                <tbody>${p.tabla.filas.map((f) => `<tr>${f.map((v) => `<td>${esc(v)}</td>`).join('')}</tr>`).join('')}</tbody>
              </table>
            </div>
            ${p.tabla.nota ? `<p class="spectable__note">${esc(p.tabla.nota)}</p>` : ''}
          </div>`
              : ''
          }
          ${
            p.fichas
              ? `<h2>Especificaciones</h2>
          <dl class="fichalist">${p.fichas.map((f) => `<div><dt>${esc(f[0])}</dt><dd>${esc(f[1])}</dd></div>`).join('')}</dl>`
              : ''
          }
          <h2>Configuración a medida</h2>
          <p>Los equipos GREEN HORSE se configuran de fábrica según el grano, la variedad y el rendimiento de cada planta. Escribinos contándonos qué procesás y con qué capacidad, y te asesoramos sobre el modelo y las zarandas o alvéolos adecuados.</p>
        </div>
      </div>

      <aside class="aside">
        <div class="askbox">
          <div class="askbox__top">
            <h3>Consultar por este equipo</h3>
            <p>Te respondemos con la ficha completa, la configuración recomendada y el precio.</p>
          </div>
          <div class="askbox__body">
            <a class="btn btn--primary" href="mailto:${contacto.emailPrincipal}?subject=${asunto}&body=${cuerpo}">Pedir cotización ${A}</a>
            <a class="btn btn--ghost" href="https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent('Hola, consulto por el equipo ' + p.modelo + ' — ' + p.nombre)}" target="_blank" rel="noopener">Escribir por WhatsApp</a>
            <div class="askbox__meta">
              <a href="tel:+59829022632">${icon('phone')} +598 2 902 2632</a>
              <a href="mailto:${contacto.emailPrincipal}">${icon('mail')} ${contacto.emailPrincipal}</a>
              <a href="../contacto.html">${icon('pin')} Juncal 1408 of. 602, Montevideo</a>
            </div>
          </div>
        </div>
        <div class="feature">
          <h3 style="font-size:1rem">Ficha rápida</h3>
          <dl class="fichalist" style="margin-top:.75rem;border-top:0">
            <div><dt>Modelo</dt><dd>${esc(p.modelo)}</dd></div>
            <div><dt>Línea</dt><dd>${esc(lineaNombre(p.linea))}</dd></div>
            <div><dt>Etapa</dt><dd>${esc(etapaNombre(p.etapa))}</dd></div>
            <div><dt>Marca</dt><dd>GREEN HORSE</dd></div>
          </dl>
        </div>
      </aside>
    </div>
  </div>
</section>

${
  relacionados.length
    ? `<section class="section section--soft section--tight">
  <div class="container">
    <div class="section-head"><p class="eyebrow">También te puede servir</p><h2>Equipos relacionados</h2></div>
    <div class="grid grid-3">${relacionados.map((r) => productCard(r, '../')).join('')}</div>
  </div>
</section>`
    : ''
}

${ctaBlock('../')}`;

  return page({
    title: `${p.modelo} ${p.nombre} — GREEN HORSE | TERRASOL S.A.`,
    description: p.resumen,
    active: 'catalogo',
    base: '../',
    body,
  });
}

/* ============================================================
   EMPRESA
   ============================================================ */
export function empresaPage() {
  const body = `
${pagehead({
  eyebrow: 'La empresa',
  title: 'Cuatro décadas junto a la industria del grano',
  text: 'Fundada en 1983 en Montevideo. Desde 2004, representante e importador de la maquinaria GREEN HORSE para Uruguay, el Mercosur y Europa.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Empresa' }],
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <p class="eyebrow">Nuestra historia</p>
        <h2>De importadora a socio técnico de la industria</h2>
        ${empresa.descripcionLarga.map((t) => `<p class="lead" style="margin-top:1.25rem">${esc(t)}</p>`).join('')}
      </div>
      <div class="reveal">
        <div class="split__media"><img src="assets/img/lineas/trigo-espigas.jpg" alt="Cultivo de trigo" loading="lazy" width="500" height="505"></div>
      </div>
    </div>
  </div>
</section>

<section class="section section--soft section--tight">
  <div class="container">
    <div class="stat-row reveal">
      ${empresa.cifras.map((c) => `<div class="stat"><strong>${esc(c.valor)}</strong><span>${esc(c.label)}</span></div>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <div class="split__media"><img src="assets/img/lineas/maiz-choclo.jpg" alt="Maíz" loading="lazy" width="500" height="505"></div>
      </div>
      <div class="reveal">
        <p class="eyebrow">Nuestra presencia</p>
        <h2>Abastecimiento integral de la planta</h2>
        ${empresa.presencia.map((t) => `<p style="margin-top:1.25rem">${esc(t)}</p>`).join('')}
        <p style="margin-top:1.75rem"><a class="link-arrow" href="servicios.html">Ver los servicios ${A}</a></p>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Nuestras especialidades</p>
      <h2>${esc(empresa.especialidades)}</h2>
      <p style="color:#a9bcb1">Trabajamos con las industrias de arroz, trigo, soja, maíz, leguminosas y fábricas de raciones, en Uruguay, el Mercosur, América Latina y Europa.</p>
    </div>
    <div class="grid grid-4">
      ${lineas
        .map(
          (l) => `
      <div style="padding:1.5rem;border:1px solid rgba(255,255,255,.14);border-radius:8px">
        <h3 style="color:#fff;font-size:1.15rem;margin-bottom:.6rem">${esc(l.nombre)}</h3>
        <p style="color:#9db0a6;font-size:.92rem">${esc(l.descripcion)}</p>
      </div>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--center">
      <p class="eyebrow eyebrow--center">Dónde estamos</p>
      <h2>Montevideo y Málaga</h2>
      <p>Casa central en Uruguay y oficina comercial en España para el mercado europeo.</p>
    </div>
    <div class="grid grid-2">
      ${contacto.oficinas.map((o) => officeCard(o)).join('')}
    </div>
  </div>
</section>

${ctaBlock()}`;

  return page({
    title: 'La empresa — TERRASOL S.A. | Maquinaria agroindustrial en Uruguay',
    description:
      'TERRASOL S.A., fundada en 1983 en Montevideo. Importador y representante de maquinaria agroindustrial GREEN HORSE desde 2004 para Uruguay, Mercosur, América Latina y Europa.',
    active: 'empresa',
    body,
  });
}

function officeCard(o, base = '') {
  return `
<article class="office${o.principal ? ' office--main' : ''}">
  <span class="office__tag">${esc(o.rol)}</span>
  <h3>${esc(o.ciudad)}</h3>
  <p class="office__country">${esc(o.pais)}</p>
  <div class="office__rows">
    <div class="office__row">${icon('pin')}<span>${esc(o.direccion)}</span></div>
    ${o.telefonos.map((t) => `<div class="office__row">${icon('phone')}<a href="${t.href}">${esc(t.label)}</a></div>`).join('')}
    <div class="office__row">${icon('mail')}<a href="mailto:${o.email}">${esc(o.email)}</a></div>
  </div>
</article>`;
}

/* ============================================================
   SERVICIOS
   ============================================================ */
export function serviciosPage() {
  const body = `
${pagehead({
  eyebrow: 'Servicios',
  title: 'No vendemos una máquina, resolvemos una planta',
  text: 'Diseño de layout, asesoramiento técnico, instalación, puesta en marcha, post venta y stock de repuestos en plaza.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Servicios' }],
})}

<section class="section">
  <div class="container">
    <div class="grid grid-3 reveal">
      ${servicios.map((s) => featureCard(s)).join('')}
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Alcance</p>
      <h2>Qué cubrimos dentro de la planta</h2>
      <p>${esc(empresa.presencia[1])}</p>
    </div>
    <div class="grid grid-3 reveal">
      ${etapas
        .map(
          (e) => `
      <a class="feature" href="catalogo.html?etapa=${e.id}" style="display:block">
        <p class="card__model">${esc(e.nombre)}</p>
        <h3>${esc(e.titulo)}</h3>
        <p>${esc(e.texto)}</p>
        <p style="margin-top:1rem"><span class="link-arrow">Ver equipos ${A}</span></p>
      </a>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container container--narrow" style="text-align:center">
    <p class="eyebrow eyebrow--center">Repuestos</p>
    <h2>Una planta parada cuesta más que el repuesto</h2>
    <p style="color:#a9bcb1;margin-top:1.25rem;font-size:1.1rem">Contamos con un amplio stock de repuestos y accesorios en plaza que nos permite brindar rápida asistencia: rodillos de goma, zarandas, telas, rubber strips, rulemanes y piezas de desgaste de toda la línea GREEN HORSE.</p>
    <p style="margin-top:2rem"><a class="btn btn--primary" href="contacto.html">Consultar por repuestos ${A}</a></p>
  </div>
</section>

${ctaBlock()}`;

  return page({
    title: 'Servicios — Layout, instalación, post venta y repuestos | TERRASOL S.A.',
    description:
      'Diseño de layout de planta, asistencia técnica, instalación y puesta en marcha, servicio post venta y amplio stock de repuestos para maquinaria de procesamiento de granos.',
    active: 'servicios',
    body,
  });
}

/* ============================================================
   REPRESENTADAS
   ============================================================ */
export function representadasPage() {
  const body = `
${pagehead({
  eyebrow: 'Marcas representadas',
  title: 'Los fabricantes detrás de cada equipo',
  text: 'Representamos e importamos maquinaria de Asia, Brasil y Europa para cubrir la planta completa, desde el silo hasta la etiquetadora.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Representadas' }],
})}

<section class="section">
  <div class="container">
    <div class="grid grid-brands reveal">
      ${representadas.map((r) => brandCard(r)).join('')}
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <p class="eyebrow">GREEN HORSE</p>
        <h2>Por qué elegimos esta línea hace más de veinte años</h2>
        <p class="lead" style="margin-top:1.25rem">Maquinaria de origen chino con tecnología japonesa y alemana. Los equipos se fabrican con corte láser y balanceado electrónico, con aceros y rulemanes de origen alemán en las piezas críticas, y electrónica y neumática de marcas internacionales.</p>
        <p style="margin-top:1.25rem">Es una línea completa: cubre el molino arrocero entero — prelimpieza, despedrado, descascarado, separado de paddy, blanqueado, pulido, clasificado y trieur — y la molienda de trigo con plansifters, bancos de cilindros y purificadores.</p>
        <p style="margin-top:1.75rem"><a class="btn btn--primary" href="catalogo.html">Ver el catálogo GREEN HORSE ${A}</a></p>
      </div>
      <div class="reveal" style="display:grid;place-items:center">
        <img src="assets/img/marca/logo-green-horse.jpg" alt="Logo GREEN HORSE" width="200" height="300" style="border-radius:8px;box-shadow:var(--shadow)">
      </div>
    </div>
  </div>
</section>

${ctaBlock()}`;

  return page({
    title: 'Marcas representadas — GREEN HORSE, Enesval, Tecnotok, Yongxiang | TERRASOL S.A.',
    description:
      'TERRASOL S.A. representa en Uruguay a GREEN HORSE (China), Enesval (España), Tecnotok, Yongxiang (China) y CSI: maquinaria de procesamiento de granos, pesaje, ensacado y paletizado.',
    active: 'representadas',
    body,
  });
}

/* ============================================================
   CONTACTO
   ============================================================ */
export function contactoPage() {
  const opciones = [
    ...productos.map((p) => `${p.modelo} — ${p.nombre}`),
    ...lineasConsulta.map((p) => p.nombre),
  ];

  const body = `
${pagehead({
  eyebrow: 'Contacto',
  title: 'Contanos qué necesitás procesar',
  text: 'Respondemos con la ficha técnica del equipo, la configuración recomendada para tu grano y la cotización.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Contacto' }],
})}

<section class="section">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="reveal">
        <p class="eyebrow">Escribinos</p>
        <h2>Pedí tu cotización</h2>
        <p style="margin-top:1rem;margin-bottom:2rem" class="muted">Completá el formulario y se abrirá tu programa de correo con todos los datos cargados, listo para enviar.</p>
        <form class="form" data-mailform="${contacto.emailPrincipal}">
          <div class="form__row">
            <div class="field"><label for="nombre">Nombre y apellido *</label><input id="nombre" name="nombre" required></div>
            <div class="field"><label for="empresa">Empresa</label><input id="empresa" name="empresa"></div>
          </div>
          <div class="form__row">
            <div class="field"><label for="email">Email *</label><input id="email" name="email" type="email" required></div>
            <div class="field"><label for="telefono">Teléfono</label><input id="telefono" name="telefono" type="tel"></div>
          </div>
          <div class="field"><label for="pais">País</label><input id="pais" name="pais" value="Uruguay"></div>
          <div class="field">
            <label for="equipo">Equipo de interés</label>
            <select id="equipo" name="equipo">
              <option value="">Consulta general</option>
              ${opciones.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join('')}
            </select>
          </div>
          <div class="field">
            <label for="mensaje">Contanos tu proyecto *</label>
            <textarea id="mensaje" name="mensaje" required placeholder="Qué grano procesás, con qué capacidad, si es una planta nueva o una ampliación…"></textarea>
          </div>
          <button class="btn btn--primary" type="submit">Enviar consulta ${A}</button>
          <p class="form__note">También podés escribirnos directo a <a href="mailto:${contacto.emailPrincipal}" style="color:var(--green);font-weight:600">${contacto.emailPrincipal}</a> o por <a href="https://wa.me/${contacto.whatsapp}" target="_blank" rel="noopener" style="color:var(--green);font-weight:600">WhatsApp</a>.</p>
        </form>
      </div>
      <div class="reveal" style="display:grid;gap:1.25rem">
        ${contacto.oficinas.map((o) => officeCard(o)).join('')}
        <article class="feature">
          <h3 style="font-size:1.05rem">Horario de atención</h3>
          <p>Lunes a viernes. Para urgencias de planta o consultas por repuestos, escribinos por WhatsApp y te respondemos a la brevedad.</p>
          <p style="margin-top:1rem"><a class="link-arrow" href="${contacto.linkedin}" target="_blank" rel="noopener">Seguinos en LinkedIn ${A}</a></p>
        </article>
      </div>
    </div>
  </div>
</section>`;

  return page({
    title: 'Contacto — TERRASOL S.A. | Montevideo, Uruguay',
    description:
      'Contactá a TERRASOL S.A. en Montevideo (+598 2 902 2632) o en Málaga, España (+34 665 207 165). Cotizaciones de maquinaria agroindustrial GREEN HORSE.',
    active: 'contacto',
    body,
  });
}

/* Página 404 */
export function notFound() {
  const body = `
${pagehead({
  eyebrow: 'Error 404',
  title: 'No encontramos esa página',
  text: 'Puede que el enlace esté viejo o que la página haya cambiado de dirección.',
})}
<section class="section">
  <div class="container container--narrow" style="text-align:center">
    <p class="lead">Probá desde el catálogo completo o escribinos y te ayudamos a encontrar lo que buscabas.</p>
    <p style="margin-top:2rem;display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">
      <a class="btn btn--primary" href="catalogo.html">Ver el catálogo ${A}</a>
      <a class="btn btn--ghost" href="index.html">Volver al inicio</a>
    </p>
  </div>
</section>`;
  return page({ title: 'Página no encontrada — TERRASOL S.A.', description: 'Página no encontrada.', active: '', body });
}
