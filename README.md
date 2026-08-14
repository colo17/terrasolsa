# Sitio web TERRASOL S.A. — GREEN HORSE

Sitio estático multipágina. Sin dependencias: se genera con Node y se publica subiendo la carpeta `site/`.

## Estructura

```
terrasol-web/
├─ src/                      ← lo que se edita
│  ├─ data.mjs               TODO el contenido (textos, productos, contactos, marcas)
│  ├─ layout.mjs             header, footer, <head>, iconos
│  ├─ pages.mjs              plantillas de cada página
│  ├─ build.mjs              generador
│  ├─ serve.mjs              servidor local de previsualización
│  └─ checklinks.mjs         verificador de enlaces internos
├─ site/                     ← SALIDA, esto es lo que se sube al hosting
├─ recuperado/               material original rescatado del Wayback Machine
├─ INFORMACION-RECUPERADA.md dossier del relevamiento
└─ FUENTES-WAYBACK.md        links a las capturas archivadas
```

**Regla:** nunca edites los `.html` de `site/` — se sobrescriben en cada build. Editá `src/data.mjs`.

## Comandos

Generar el sitio:

```bash
node src/build.mjs
```

Previsualizar en http://localhost:4330:

```bash
node src/serve.mjs
```

Verificar que no haya enlaces rotos:

```bash
node src/checklinks.mjs
```

## Páginas

| Página | Archivo |
|---|---|
| Inicio (hero en video + scrollytelling) | `index.html` |
| Catálogo con filtros | `catalogo.html` |
| Ficha de equipo (×26) | `productos/<slug>.html` |
| Empresa | `empresa.html` |
| Servicios | `servicios.html` |
| Marcas representadas | `representadas.html` |
| Contacto | `contacto.html` |
| Error 404 | `404.html` |

Se generan también `sitemap.xml`, `robots.txt` y el favicon SVG.

## Cómo editar el contenido

Todo está en `src/data.mjs`:

- `empresa` — textos institucionales y cifras
- `contacto` — oficinas, teléfonos, mails, WhatsApp
- `representadas` — marcas
- `servicios` — bloques de servicios
- `etapas` — los 10 pasos del scrollytelling
- `productos` — equipos **con** ficha técnica (generan página propia)
- `lineasConsulta` — equipos **sin** ficha, aparecen en el catálogo como "Consultar"
- `lineas` — las cuatro líneas de grano de la home

Para agregar un equipo con ficha, copiá un objeto de `productos`, cambiá `slug`, `modelo`,
`nombre`, `linea`, `etapa`, `resumen` y sus `parrafos`, `caracteristicas` y `tabla`/`fichas`.
Corré `node src/build.mjs` y la página nueva aparece sola en el catálogo, en el sitemap y
en los relacionados.

## De dónde sale cada imagen

| Carpeta | Qué es | Origen |
|---|---|---|
| `site/assets/img/marca/terrasol-logo*.png` | Logo TERRASOL S.A. | **Original.** Recortado de `recuperado/assets/logo.png` con el fondo quitado. Dos variantes: gris para header claro, blanca para header sobre el hero. |
| `site/assets/img/marca/logo-green-horse.jpg` | Logo GREEN HORSE | **Original**, del sitio anterior. |
| `site/assets/img/marca/logo-enesval.png`, `logo-yongxiang.png` | Logos de representadas | **Reales**, bajados del sitio de cada fabricante. |
| `site/assets/img/maquinas/` en MAYÚSCULAS (`MDJY`, `MSD`, `MJXH`, `TQLM`, `TQLZt`, `TQSF`) | 6 fotos de equipos | **Fotos reales** del sitio anterior. |
| `site/assets/img/maquinas/` en minúsculas | 36 imágenes de equipos | **Generadas** (Higgsfield `z_image`). Ilustran el *tipo* de equipo, no el modelo exacto. Las fichas lo aclaran con la leyenda "Imagen ilustrativa". |
| `site/assets/img/proceso/` | 10 fondos del scrollytelling | **Generadas.** Ambiente de planta, una por etapa. |
| `site/assets/img/lineas/` | Fotos de grano | Recortes del collage original de 2021, salvo `legumbres.jpg` que es generada. |
| `site/assets/video/hero-*.mp4` | 5 tomas del hero | **Generadas** (Higgsfield `veo3_1_lite`), 4 s cada una. El orden de reproducción se define en `heroShots` dentro de `src/pages.mjs`, no por el número de archivo. |

**Prioridad al recibir fotos reales del cliente:** reemplazar los archivos en `maquinas/`
conservando el nombre, y agregar el slug al conjunto `FOTOS_REALES` en `src/data.mjs`
para que desaparezca la leyenda de "imagen ilustrativa" de esa ficha.

El script `src/fetch-imagenes.ps1` documenta qué generación produjo cada archivo.

## Notas técnicas

- **Sin build tools ni dependencias npm.** Solo Node para generar. El resultado es HTML/CSS/JS plano.
- **Hero:** cinco clips de 4 s encadenados por JS con barra de progreso, `hero-poster.jpg` como
  primer cuadro y respeto de `prefers-reduced-motion` (si está activo se muestra solo el póster).
- **Cuidado con `overflow` en `.scrolly`:** cualquier valor distinto de `visible` en la sección
  la convierte en contenedor de scroll y anula el `position: sticky` de sus dos columnas.
  El recorte del fondo lo hace `.scrolly__bgSticky`, no la sección.
- **Scrollytelling y aparición al scroll:** medición directa en el evento `scroll` con throttle
  rAF + red de seguridad `setTimeout`, para que no se trabe si el navegador suspende rAF.
- **Catálogo:** filtrado en cliente, sin recargar. El estado se refleja en la URL
  (`catalogo.html?linea=arroz&etapa=blanqueado&q=trieur`), así que los filtros son enlazables.
- **Formulario:** no hay backend. Arma un `mailto:` con todos los datos cargados. Si más adelante
  se quiere recibir los mensajes en un panel, se puede cambiar por Formspree, Netlify Forms o similar.

## Publicación

Repositorio: https://github.com/colo17/terrasolsa (rama `main`).

`site/` es estático puro, sin build: lo sirve cualquier hosting.

- **Vercel** — el `vercel.json` de la raíz ya declara `outputDirectory: "site"` y desactiva
  build e install. Con el repo conectado, cada push a `main` publica solo.
- **Netlify / Cloudflare Pages** — sin comando de build, directorio de salida `site`.
- **GitHub Pages** — Pages solo puede servir desde la raíz o `/docs`, así que habría que mover
  el contenido de `site/` a la raíz o publicar con una acción que suba esa carpeta.
- **HostGator (el hosting actual)** — subir el *contenido* de `site/` a `public_html/`,
  no la carpeta.

Flujo normal de cambios:

```bash
node src/build.mjs; node src/checklinks.mjs; git add -A; git commit -m "..."; git push
```

> ⚠️ Antes de apuntar el dominio: **terrasolsa.com vence el 21/09/2026** y el HostGator
> actual devuelve 503. Ver `INFORMACION-RECUPERADA.md`, sección 1.
