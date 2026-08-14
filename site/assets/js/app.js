/* TERRASOL S.A. — interacciones del sitio */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     Header: transparente sobre el hero, sólido al hacer scroll
  --------------------------------------------------------- */
  var header = document.querySelector('.header');
  if (header) {
    var overHero = header.dataset.over === 'true';
    // Arriba de todo va transparente con texto blanco (encima del hero o del
    // encabezado verde), y se vuelve sólido apenas empieza el scroll.
    // Siempre tiene exactamente una de las dos clases: sin ninguna quedaba
    // transparente pero con texto oscuro, ilegible sobre el verde.
    var setHeader = function () {
      var over = overHero && window.scrollY <= 20;
      header.classList.toggle('header--over', over);
      header.classList.toggle('header--solid', !over);
    };
    setHeader();
    window.addEventListener('scroll', setHeader, { passive: true });

    var burger = header.querySelector('.burger');
    var nav = header.querySelector('.nav');
    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!open));
        nav.dataset.open = String(!open);
        if (!open) header.classList.add('header--solid'), header.classList.remove('header--over');
        else setHeader();
      });
      nav.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          burger.setAttribute('aria-expanded', 'false');
          nav.dataset.open = 'false';
        }
      });
    }
  }

  /* ---------------------------------------------------------
     Hero: secuencia de tomas encadenadas
  --------------------------------------------------------- */
  var heroMedia = document.querySelector('.hero__media');
  if (heroMedia) {
    var clips = Array.prototype.slice.call(heroMedia.querySelectorAll('video'));
    var bars = Array.prototype.slice.call(document.querySelectorAll('.hero__progress i'));
    var poster = heroMedia.querySelector('img');
    var idx = 0;

    var markBars = function (active) {
      bars.forEach(function (bar, i) {
        bar.classList.toggle('is-done', i < active);
        bar.classList.remove('is-live');
        if (i === active) {
          // reinicia la animación
          void bar.offsetWidth;
          bar.classList.add('is-live');
        }
      });
    };

    var show = function (i) {
      clips.forEach(function (v, n) {
        if (n === i) {
          v.classList.add('is-active');
          v.currentTime = 0;
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        } else {
          v.classList.remove('is-active');
          if (n !== i) { try { v.pause(); } catch (e) {} }
        }
      });
      if (poster) poster.classList.remove('is-active');
      markBars(i);
    };

    if (clips.length && !reduced) {
      clips.forEach(function (v, i) {
        v.muted = true;
        v.playsInline = true;
        if (i > 0) v.preload = 'auto';
        v.addEventListener('ended', function () {
          idx = (idx + 1) % clips.length;
          show(idx);
        });
      });
      // arranca cuando la primera toma tiene datos
      if (clips[0].readyState >= 2) show(0);
      else clips[0].addEventListener('loadeddata', function () { show(0); }, { once: true });

      // pausa el ciclo cuando el hero no está visible
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            var cur = clips[idx];
            if (!cur) return;
            if (en.isIntersecting) { var p = cur.play(); if (p && p.catch) p.catch(function () {}); }
            else { try { cur.pause(); } catch (e) {} }
          });
        }, { threshold: 0.15 }).observe(heroMedia);
      }
    } else if (poster) {
      poster.classList.add('is-active');
    }
  }

  /* ---------------------------------------------------------
     Trabajo diferido: rAF cuando la pestaña está visible,
     inmediato cuando no (rAF no corre en pestañas ocultas).
  --------------------------------------------------------- */
  function throttled(fn) {
    var pending = false;
    var timer = null;
    return function () {
      if (pending) return;
      pending = true;
      var run = function () {
        if (!pending) return;
        pending = false;
        clearTimeout(timer);
        fn();
      };
      // setTimeout como red de seguridad: rAF no corre en pestañas ocultas
      // ni en páginas que no están componiendo, y si no llegara a disparar
      // el throttle quedaría trabado y no se procesaría ningún scroll más.
      timer = setTimeout(run, 90);
      if (window.requestAnimationFrame) requestAnimationFrame(run);
    };
  }

  /* ---------------------------------------------------------
     Scrollytelling — el recorrido del grano
  --------------------------------------------------------- */
  var scrolly = document.querySelector('[data-scrolly]');
  if (scrolly) {
    var steps = Array.prototype.slice.call(scrolly.querySelectorAll('.scrolly__step'));
    var elNum = scrolly.querySelector('[data-scrolly-num]');
    var elTitle = scrolly.querySelector('[data-scrolly-title]');
    var elText = scrolly.querySelector('[data-scrolly-text]');
    var current = -1;

    var paint = function (i) {
      if (i === current) return;
      current = i;
      var s = steps[i];
      if (!s) return;
      steps.forEach(function (n, k) { n.classList.toggle('is-active', k === i); });
      if (elNum) elNum.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(steps.length).padStart(2, '0') + ' · ' + s.dataset.nombre;
      if (elTitle) elTitle.textContent = s.dataset.titulo;
      if (elText) elText.textContent = s.dataset.texto;
      var id = s.dataset.etapa;
      scrolly.querySelectorAll('[data-node]').forEach(function (n) {
        n.classList.toggle('is-on', n.dataset.node === id);
      });
      scrolly.querySelectorAll('[data-node-label]').forEach(function (n) {
        n.classList.toggle('is-on', n.dataset.nodeLabel === id);
      });
      scrolly.querySelectorAll('[data-node-icon]').forEach(function (n) {
        n.classList.toggle('is-on', n.dataset.nodeIcon === id);
      });
      scrolly.querySelectorAll('[data-bg]').forEach(function (n) {
        n.classList.toggle('is-on', n.dataset.bg === id);
      });
    };

    // El paso activo es el que cruza la mitad de la pantalla. Si ninguno la
    // cruza (arriba o abajo de la sección) se toma el más cercano.
    var pick = function () {
      var mid = window.innerHeight / 2;
      var best = 0;
      var bestDist = Infinity;
      for (var i = 0; i < steps.length; i++) {
        var r = steps[i].getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) { best = i; break; }
        var d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestDist) { bestDist = d; best = i; }
      }
      paint(best);
    };

    var onScroll = throttled(pick);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    pick();
  }

  /* ---------------------------------------------------------
     Catálogo — filtros, búsqueda y chips
  --------------------------------------------------------- */
  var catalog = document.querySelector('[data-catalog]');
  if (catalog) {
    var cards = Array.prototype.slice.call(catalog.querySelectorAll('[data-item]'));
    var boxes = Array.prototype.slice.call(catalog.querySelectorAll('.filters input[type="checkbox"]'));
    var input = catalog.querySelector('[data-search]');
    var countEl = catalog.querySelector('[data-count]');
    var chipsEl = catalog.querySelector('[data-chips]');
    var emptyEl = catalog.querySelector('[data-empty]');
    var clearEl = catalog.querySelector('[data-clear]');

    var norm = function (s) {
      return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    };

    var apply = function () {
      var active = { linea: [], etapa: [] };
      boxes.forEach(function (b) { if (b.checked) active[b.dataset.group].push(b.value); });
      var q = norm(input ? input.value.trim() : '');
      var shown = 0;

      cards.forEach(function (c) {
        // un equipo puede pertenecer a varias líneas (p. ej. un stoner sirve
        // para arroz, trigo, maíz y legumbres)
        var suyas = (c.dataset.lineas || '').split(' ');
        var okLinea = !active.linea.length || active.linea.some(function (l) { return suyas.indexOf(l) > -1; });
        var okEtapa = !active.etapa.length || active.etapa.indexOf(c.dataset.etapa) > -1;
        var okQ = !q || norm(c.dataset.buscar).indexOf(q) > -1;
        var ok = okLinea && okEtapa && okQ;
        c.hidden = !ok;
        if (ok) shown++;
      });

      if (countEl) countEl.innerHTML = '<b>' + shown + '</b> ' + (shown === 1 ? 'equipo' : 'equipos');
      if (emptyEl) emptyEl.hidden = shown !== 0;

      if (chipsEl) {
        chipsEl.innerHTML = '';
        boxes.filter(function (b) { return b.checked; }).forEach(function (b) {
          var chip = document.createElement('span');
          chip.className = 'chip';
          chip.textContent = b.dataset.label;
          var x = document.createElement('button');
          x.type = 'button';
          x.setAttribute('aria-label', 'Quitar filtro ' + b.dataset.label);
          x.textContent = '×';
          x.addEventListener('click', function () { b.checked = false; apply(); sync(); });
          chip.appendChild(x);
          chipsEl.appendChild(chip);
        });
        if (q) {
          var chipQ = document.createElement('span');
          chipQ.className = 'chip';
          chipQ.textContent = '“' + q + '”';
          var xq = document.createElement('button');
          xq.type = 'button';
          xq.setAttribute('aria-label', 'Borrar búsqueda');
          xq.textContent = '×';
          xq.addEventListener('click', function () { input.value = ''; apply(); sync(); });
          chipQ.appendChild(xq);
          chipsEl.appendChild(chipQ);
        }
      }
      if (clearEl) clearEl.hidden = !(boxes.some(function (b) { return b.checked; }) || q);
    };

    var sync = function () {
      var params = new URLSearchParams();
      boxes.forEach(function (b) { if (b.checked) params.append(b.dataset.group, b.value); });
      if (input && input.value.trim()) params.set('q', input.value.trim());
      var url = params.toString() ? location.pathname + '?' + params : location.pathname;
      history.replaceState(null, '', url);
    };

    boxes.forEach(function (b) { b.addEventListener('change', function () { apply(); sync(); }); });
    if (input) {
      var t;
      input.addEventListener('input', function () {
        clearTimeout(t);
        t = setTimeout(function () { apply(); sync(); }, 160);
      });
    }
    if (clearEl) {
      clearEl.addEventListener('click', function () {
        boxes.forEach(function (b) { b.checked = false; });
        if (input) input.value = '';
        apply(); sync();
      });
    }

    // estado inicial desde la URL (?linea=arroz&etapa=blanqueado&q=...)
    var qs = new URLSearchParams(location.search);
    boxes.forEach(function (b) {
      if (qs.getAll(b.dataset.group).indexOf(b.value) > -1) b.checked = true;
    });
    if (input && qs.get('q')) input.value = qs.get('q');
    apply();

    var toggle = catalog.querySelector('.filters__toggle');
    var panel = catalog.querySelector('.filters');
    if (toggle && panel) {
      if (window.innerWidth <= 880) panel.dataset.collapsed = 'true';
      toggle.addEventListener('click', function () {
        panel.dataset.collapsed = panel.dataset.collapsed === 'true' ? 'false' : 'true';
      });
    }
  }

  /* ---------------------------------------------------------
     Formulario de contacto → abre el correo con todo cargado
  --------------------------------------------------------- */
  var form = document.querySelector('[data-mailform]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var equipo = (d.get('equipo') || '').toString().trim();
      var asunto = equipo ? 'Consulta por ' + equipo : 'Consulta desde el sitio web';
      var datos = [
        'Nombre: ' + (d.get('nombre') || ''),
        'Empresa: ' + (d.get('empresa') || ''),
        'País: ' + (d.get('pais') || ''),
        'Teléfono: ' + (d.get('telefono') || ''),
        'Email: ' + (d.get('email') || ''),
        equipo ? 'Equipo de interés: ' + equipo : '',
      ].filter(Boolean).join('\n');
      var cuerpo = datos + '\n\n' + (d.get('mensaje') || '').toString();
      window.location.href =
        'mailto:' + form.dataset.mailform +
        '?subject=' + encodeURIComponent(asunto) +
        '&body=' + encodeURIComponent(cuerpo);
    });
  }

  /* ---------------------------------------------------------
     Aparición al hacer scroll
  --------------------------------------------------------- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduced) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else if (revealables.length) {
    var checkReveal = function () {
      for (var i = revealables.length - 1; i >= 0; i--) {
        var el = revealables[i];
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
          el.classList.add('is-in');
          revealables.splice(i, 1);
        }
      }
      if (!revealables.length) window.removeEventListener('scroll', onReveal);
    };
    var onReveal = throttled(checkReveal);
    window.addEventListener('scroll', onReveal, { passive: true });
    window.addEventListener('resize', onReveal);
    checkReveal();
  }

  /* Año en el pie */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
