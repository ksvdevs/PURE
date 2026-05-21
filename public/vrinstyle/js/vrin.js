(function () {
  'use strict';

  /* ---------- 1. Dropdowns Desktop (hover + click) ---------- */
  var dropdowns = document.querySelectorAll('.has-dropdown');

  dropdowns.forEach(function (item) {
    var toggle = item.querySelector(':scope > a');
    var closeTimer;

    item.addEventListener('mouseenter', function () {
      clearTimeout(closeTimer);
      dropdowns.forEach(function (o) { if (o !== item) o.classList.remove('open'); });
      item.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    });

    item.addEventListener('mouseleave', function () {
      closeTimer = setTimeout(function () {
        item.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }, 150);
    });

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = item.classList.contains('open');
      dropdowns.forEach(function (o) {
        o.classList.remove('open');
        var t = o.querySelector(':scope > a');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Cerrar dropdowns al click fuera
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      dropdowns.forEach(function (o) {
        o.classList.remove('open');
        var t = o.querySelector(':scope > a');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  /* ---------- 2. Drawer Móvil ---------- */
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileNav = document.getElementById('mobileNav');
  var drawerOverlay = document.getElementById('drawerOverlay');
  var drawerClose = document.getElementById('drawerClose');

  function openDrawer() {
    mobileNav.classList.add('open');
    drawerOverlay.classList.add('open');
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileNav.classList.remove('open');
    drawerOverlay.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', function () {
    if (mobileNav.classList.contains('open')) closeDrawer();
    else openDrawer();
  });

  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  // Tecla Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeDrawer();
  });

  // Swipe hacia la derecha para cerrar
  var touchStartX = 0;
  mobileNav.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  mobileNav.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 60) closeDrawer();
  }, { passive: true });

  // Cerrar drawer al hacer click en cualquier link normal (no acordeón)
  mobileNav.querySelectorAll('a:not([role="button"])').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  // Cerrar drawer si se redimensiona a desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 992 && mobileNav.classList.contains('open')) {
      closeDrawer();
    }
  }, { passive: true });

  /* ---------- 3. Acordeón Móvil ---------- */
  function setupAccordion(triggerId, dropdownId) {
    var trigger = document.getElementById(triggerId);
    var dropdown = document.getElementById(dropdownId);
    if (!trigger || !dropdown) return;

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = dropdown.classList.toggle('open');
      trigger.classList.toggle('open', isOpen);
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  setupAccordion('mobileInvTrigger', 'mobileInvDropdown');
  setupAccordion('mobileDirTrigger', 'mobileDirDropdown');

  /* ---------- 4. Sombra del header al scrollear ---------- */
  var siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', function () {
    siteHeader.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  /* ---------- 5. Marcar link activo según la URL ---------- */
  var currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.nav-menu a[href], .mobile-nav a[href]').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('http')) return;
    var normalized = href.replace(/\/+$/, '') || '/';
    if (normalized === currentPath) link.classList.add('active');
  });

  /* ---------- 6. Inicializar clase tablet-range ---------- */
  function checkResponsiveRange() {
    if (window.innerWidth >= 992 && window.innerWidth <= 1200) {
      document.body.classList.add('tablet-range');
    } else {
      document.body.classList.remove('tablet-range');
    }
  }
  checkResponsiveRange();
  window.addEventListener('resize', checkResponsiveRange, { passive: true });
})();

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active1");
    } else {
      reveals[i].classList.remove("active1");
    }
  }
}
window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();

function zoom() {
  var reveals = document.querySelectorAll(".zoom-in");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active2");
    } else {
      reveals[i].classList.remove("active2");
    }
  }
}
window.addEventListener("scroll", zoom);
// To check the scroll position on page load
zoom();



/**para formulario de contactos */


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

/* ========================================================================
   CARRUSEL DE CONVOCATORIAS
   Módulo independiente para gestionar la navegación y autoplay
   ======================================================================== */

(function () {
  'use strict';

  /* ---- CONFIGURACIÓN ---- */
  var CONFIG = {
    sectionSelector: '#convocatorias-relevantes',
    autoplayMS: 9000,           /* 9 segundos: tiempo de lectura + imagen */
    touchThreshold: 50,         /* píxeles para considerar un swipe */
    ariaLive: true              /* accesibilidad: actualizaciones dinámicas */
  };

  /* ---- REFERENCIAS AL DOM ---- */
  var section = document.getElementById(CONFIG.sectionSelector.replace('#', ''));
  if (!section) return;

  var items = section.querySelectorAll('.carousel-item-conv');
  if (items.length === 0) return;

  var dotsContainer = section.querySelector('#convocatoriasDots');
  var prevBtn = section.querySelector('.carousel-control-prev');
  var nextBtn = section.querySelector('.carousel-control-next');
  var currentEl = section.querySelector('#convCurrentSlide');
  var totalEl = section.querySelector('#convTotalSlides');

  /* ---- ESTADO INTERNO ---- */
  var state = {
    currentIndex: 0,
    autoTimer: null,
    touchStartX: 0
  };

  /* ---- MÉTODOS PRIVADOS ---- */

  /**
   * Inicializa el estado del carrusel
   * - Establece slide activo inicial
   * - Configura atributos ARIA
   */
  function initializeCarousel() {
    var foundActive = false;

    items.forEach(function (item, i) {
      if (item.classList.contains('active')) {
        state.currentIndex = i;
        foundActive = true;
      }
      item.setAttribute('aria-hidden', item.classList.contains('active') ? 'false' : 'true');
      item.setAttribute('aria-label', (i + 1) + ' de ' + items.length);
    });

    if (!foundActive && items.length > 0) {
      items[0].classList.add('active');
      items[0].setAttribute('aria-hidden', 'false');
    }

    totalEl.textContent = String(items.length).padStart(2, '0');
  }

  /**
   * Crea los botones de paginación dinámicamente
   */
  function createDots() {
    items.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot' + (i === state.currentIndex ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Ir a convocatoria ' + (i + 1));
      dot.setAttribute('aria-selected', i === state.currentIndex ? 'true' : 'false');
      dot.setAttribute('aria-controls', 'convocatorias-relevantes');
      dot.addEventListener('click', function () { navigateTo(i); });
      dotsContainer.appendChild(dot);
    });
  }

  /**
   * Actualiza el estado visual del carrusel
   * - Muestra/oculta slides
   * - Actualiza puntos de paginación
   * - Actualiza contador
   */
  function updateCarousel() {
    // Actualizar slides
    items.forEach(function (item, i) {
      var isActive = (i === state.currentIndex);
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    // Actualizar puntos
    var dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach(function (dot, i) {
      var isActive = (i === state.currentIndex);
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Actualizar contador
    currentEl.textContent = String(state.currentIndex + 1).padStart(2, '0');
  }

  /**
   * Navega a un slide específico
   * @param {number} targetIndex - Índice del slide destino
   */
  function navigateTo(targetIndex) {
    state.currentIndex = (targetIndex + items.length) % items.length;
    updateCarousel();
    resetAutoplay();
  }

  /**
   * Navega al siguiente slide
   */
  function nextSlide() {
    navigateTo(state.currentIndex + 1);
  }

  /**
   * Navega al slide anterior
   */
  function prevSlide() {
    navigateTo(state.currentIndex - 1);
  }

  /**
   * Inicia el autoplay
   */
  function startAutoplay() {
    if (items.length < 2) return;
    state.autoTimer = setInterval(nextSlide, CONFIG.autoplayMS);
  }

  /**
   * Detiene el autoplay
   */
  function stopAutoplay() {
    if (state.autoTimer) {
      clearInterval(state.autoTimer);
      state.autoTimer = null;
    }
  }

  /**
   * Reinicia el autoplay
   */
  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  /* ---- EVENTOS DE INTERACCIÓN ---- */

  // Botones de navegación
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  // Pausa en hover
  section.addEventListener('mouseenter', stopAutoplay);
  section.addEventListener('mouseleave', startAutoplay);

  // Pausa cuando la pestaña pierde foco
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  // Navegación por teclado (accesibilidad)
  section.setAttribute('tabindex', '-1');
  section.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  });

  // Navegación por swipe táctil
  section.addEventListener('touchstart', function (e) {
    state.touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  section.addEventListener('touchend', function (e) {
    var touchEndX = e.changedTouches[0].screenX;
    var dx = touchEndX - state.touchStartX;

    if (Math.abs(dx) > CONFIG.touchThreshold) {
      // Swipe: izquierda (dx < 0) = siguiente, derecha (dx > 0) = anterior
      dx < 0 ? nextSlide() : prevSlide();
    } else {
      // Toque sin significancia, reanudar autoplay
      startAutoplay();
    }
  }, { passive: true });

  /* ---- INICIALIZACIÓN ---- */
  initializeCarousel();
  createDots();
  updateCarousel();
  startAutoplay();

})();

/* ========================================================================
   CARRUSEL ENLACES — infinito, por ítem, arrastre mouse/touch
   ======================================================================== */

(function () {
  'use strict';

  var viewport      = document.getElementById('enlacesViewport');
  var track         = document.getElementById('enlacesTrack');
  if (!viewport || !track) return;

  /* ---- Capturar ítems reales antes de clonar ---- */
  var realItems = Array.prototype.slice.call(track.querySelectorAll('.enlace-logo'));
  var count     = realItems.length;
  if (count === 0) return;

  var prevBtn       = document.getElementById('enlacesPrev');
  var nextBtn       = document.getElementById('enlacesNext');
  var dotsContainer = document.getElementById('enlacesDots');

  var GAP         = 20;
  var BUF         = 4;   /* clones a cada lado (>= max visibleN) */
  var AUTOPLAY_MS = 4500;
  var autoTimer   = null;
  var itemW       = 0;
  var visibleN    = 4;
  var domIdx      = BUF; /* índice DOM del ítem real 0 */
  var hasDragged  = false;

  /* ---- Clonar: [BUF clones últimos | reales | BUF clones primeros] ---- */
  for (var i = 0; i < BUF; i++) {
    track.insertBefore(
      realItems[(count - BUF + i + count) % count].cloneNode(true),
      i === 0 ? track.firstChild : track.children[i]
    );
  }
  for (var i = 0; i < BUF; i++) {
    track.appendChild(realItems[i % count].cloneNode(true));
  }

  var allItems = Array.prototype.slice.call(track.querySelectorAll('.enlace-logo'));

  /* ---- Dimensiones ---- */
  function calcVN() {
    var vw = viewport.offsetWidth;
    return vw >= 900 ? 4 : vw >= 600 ? 3 : vw >= 380 ? 2 : 1;
  }

  function setup() {
    visibleN = calcVN();
    var vw = viewport.offsetWidth;
    if (!vw) return; /* viewport aún no renderizado — esperar al evento load */
    itemW = (vw - GAP * (visibleN - 1)) / visibleN;
    allItems.forEach(function (el) { el.style.width = itemW + 'px'; });
    posAt(domIdx, false);
    syncDots();
  }

  /* ---- Movimiento ---- */
  function setTrans(on) {
    track.style.transition = on
      ? 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
      : 'none';
  }

  function posAt(idx, animate) {
    setTrans(animate !== false);
    track.style.transform = 'translateX(-' + (idx * (itemW + GAP)) + 'px)';
  }

  function realOf(idx) {
    return ((idx - BUF) % count + count) % count;
  }

  /* Tras la transición: si estamos en un clon, saltar al real homólogo */
  track.addEventListener('transitionend', function () {
    if (domIdx >= BUF + count) {
      domIdx -= count;
      posAt(domIdx, false);
    } else if (domIdx < BUF) {
      domIdx += count;
      posAt(domIdx, false);
    }
  });

  function step(delta) {
    domIdx += delta;
    posAt(domIdx, true);
    syncDots();
  }

  function goNext() { step(1); }
  function goPrev() { step(-1); }

  /* ---- Dots (un círculo por ítem real) ---- */
  function buildDots() {
    realItems.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'enlace-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Logo ' + (i + 1));
      dot.addEventListener('click', function () {
        var target = BUF + i;
        var diff   = target - domIdx;
        /* camino más corto en el loop */
        if (diff >  count / 2) diff -= count;
        if (diff < -count / 2) diff += count;
        domIdx += diff;
        posAt(domIdx, true);
        syncDots();
        stopAutoplay(); startAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function syncDots() {
    var ri = realOf(domIdx);
    dotsContainer.querySelectorAll('.enlace-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === ri);
    });
  }

  /* ---- Autoplay ---- */
  function startAutoplay() {
    autoTimer = setInterval(goNext, AUTOPLAY_MS);
  }

  function stopAutoplay() {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  /* ---- Arrastre con mouse ---- */
  var dragging   = false;
  var dragStartX = 0;
  var dragBaseX  = 0;

  function liveX() { return -(domIdx * (itemW + GAP)); }

  viewport.addEventListener('mousedown', function (e) {
    dragging   = true;
    hasDragged = false;
    dragStartX = e.clientX;
    dragBaseX  = liveX();
    setTrans(false);
    viewport.classList.add('is-dragging');
    stopAutoplay();
    e.preventDefault();
  });

  document.addEventListener('mousemove', function (e) {
    if (!dragging) return;
    var dx = e.clientX - dragStartX;
    if (Math.abs(dx) > 6) hasDragged = true;
    track.style.transform = 'translateX(' + (dragBaseX + dx) + 'px)';
  });

  document.addEventListener('mouseup', function (e) {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove('is-dragging');
    var dx        = e.clientX - dragStartX;
    var threshold = Math.max(40, itemW * 0.25);
    if (hasDragged && dx < -threshold)     goNext();
    else if (hasDragged && dx > threshold) goPrev();
    else                                   posAt(domIdx, true);
    startAutoplay();
    setTimeout(function () { hasDragged = false; }, 0);
  });

  /* Bloquear click si hubo arrastre */
  Array.prototype.slice.call(track.querySelectorAll('.enlace-logo'))
    .forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (hasDragged) e.preventDefault();
      });
    });

  /* ---- Swipe táctil ---- */
  var touchX0   = 0;
  var touchBase = 0;

  viewport.addEventListener('touchstart', function (e) {
    touchX0   = e.changedTouches[0].screenX;
    touchBase = liveX();
    setTrans(false);
    stopAutoplay();
  }, { passive: true });

  viewport.addEventListener('touchmove', function (e) {
    track.style.transform =
      'translateX(' + (touchBase + e.changedTouches[0].screenX - touchX0) + 'px)';
  }, { passive: true });

  viewport.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].screenX - touchX0;
    if (dx < -50) goNext();
    else if (dx > 50) goPrev();
    else posAt(domIdx, true);
    startAutoplay();
  }, { passive: true });

  /* ---- Controles ---- */
  if (prevBtn) prevBtn.addEventListener('click', function () { goPrev(); stopAutoplay(); startAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goNext(); stopAutoplay(); startAutoplay(); });

  var section = document.querySelector('.enlaces-section');
  if (section) {
    section.addEventListener('mouseenter', stopAutoplay);
    section.addEventListener('mouseleave', startAutoplay);
  }

  window.addEventListener('resize', setup, { passive: true });

  /* ---- Init ---- */
  buildDots();

  /* Diferir la inicialización hasta que el viewport tenga dimensiones reales.
     RAF asegura que el browser ya calculó el layout; si aún es 0 (ej. fuentes
     web bloqueando), el evento 'load' actúa como respaldo garantizado. */
  var _launched = false;

  function _launch() {
    if (_launched || !viewport.offsetWidth) return;
    _launched = true;
    setup();
    startAutoplay();
  }

  requestAnimationFrame(_launch);
  window.addEventListener('load', _launch, { once: true });
})();

/* ========================================================================
   ANIMACIÓN CONTADORES STATS
   ======================================================================== */
(function () {
  'use strict';

  var nums = document.querySelectorAll('.stat-num');
  if (!nums.length) return;

  var animated = new Set();

  function parseTarget(el) {
    return parseInt(el.textContent.replace(/\D/g, ''), 10) || 0;
  }

  function getPrefix(el) {
    return el.textContent.trim().charAt(0) === '+' ? '+' : '';
  }

  function animateCount(el) {
    if (animated.has(el)) return;
    animated.add(el);

    var target   = parseTarget(el);
    var prefix   = getPrefix(el);
    var duration = 1600;
    var startTs  = null;

    function step(now) {
      if (!startTs) startTs = now;
      var p    = Math.min((now - startTs) / duration, 1);
      var ease = 1 - Math.pow(1 - p, 4); /* easeOutQuart */
      el.textContent = prefix + Math.floor(ease * target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target;
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) animateCount(entry.target);
      });
    }, { threshold: 0.4 });

    nums.forEach(function (el) { io.observe(el); });
  } else {
    /* Fallback: animar sin esperar scroll */
    nums.forEach(animateCount);
  }
})();


document.getElementById('load-more').addEventListener('click', function () {
    const hiddenItems = document.querySelectorAll('.news-item.hidden');
    const itemsToShow = 4; // Número de elementos a mostrar por clic

    // Mostrar los siguientes elementos ocultos
    for (let i = 0; i < itemsToShow && hiddenItems[i]; i++) {
        hiddenItems[i].classList.remove('hidden');
    }

    // Si no quedan más elementos ocultos, oculta el botón
    if (document.querySelectorAll('.news-item.hidden').length === 0) {
        this.style.display = 'none';
    }
});