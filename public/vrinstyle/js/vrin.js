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

  /* ---------- 4. Sombra del header al scrollear (Optimizado) ---------- */
  var siteHeader = document.getElementById('siteHeader');
  var isScrolled = false;
  window.addEventListener('scroll', function () {
    if (!siteHeader) return;
    var shouldScroll = window.scrollY > 30;
    if (shouldScroll !== isScrolled) {
      isScrolled = shouldScroll;
      siteHeader.classList.toggle('scrolled', isScrolled);
    }
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

/**
 * Inicializa las animaciones al hacer scroll usando IntersectionObserver.
 * Optimizado para transiciones más fluidas y rápidas (0.8s en CSS).
 */
function initScrollAnimations() {
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  var animationObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('reveal')) {
          entry.target.classList.add('active1');
        }
        if (entry.target.classList.contains('zoom-in')) {
          entry.target.classList.add('active2');
        }
      } else {
        if (entry.target.classList.contains('reveal')) {
          entry.target.classList.remove('active1');
        }
        if (entry.target.classList.contains('zoom-in')) {
          entry.target.classList.remove('active2');
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal, .zoom-in').forEach(function (el) {
    animationObserver.observe(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}



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

  var viewport = document.getElementById('enlacesViewport');
  var track = document.getElementById('enlacesTrack');
  if (!viewport || !track) return;

  /* ---- Capturar ítems reales antes de clonar ---- */
  var realItems = Array.prototype.slice.call(track.querySelectorAll('.enlace-logo'));
  var count = realItems.length;
  if (count === 0) return;

  var prevBtn = document.getElementById('enlacesPrev');
  var nextBtn = document.getElementById('enlacesNext');
  var dotsContainer = document.getElementById('enlacesDots');

  var GAP = 20;
  var BUF = 4;   /* clones a cada lado (>= max visibleN) */
  var AUTOPLAY_MS = 8000;
  var autoTimer = null;
  var itemW = 0;
  var visibleN = 4;
  var domIdx = BUF; /* índice DOM del ítem real 0 */
  var hasDragged = false;

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

  /* ---- Dots (un círculo por grupo) ---- */
  function buildDots() {
    if (!dotsContainer) return;
    for (var i = 0; i < 3; i++) {
      (function (dotIdx) {
        var dot = document.createElement('button');
        dot.className = 'enlace-dot' + (dotIdx === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Grupo de enlaces ' + (dotIdx + 1));
        dot.addEventListener('click', function () {
          var target;
          if (dotIdx === 0) target = BUF + 0;
          else if (dotIdx === 1) target = BUF + 3;
          else target = BUF + 5;

          var diff = target - domIdx;
          /* camino más corto en el loop */
          if (diff > count / 2) diff -= count;
          if (diff < -count / 2) diff += count;
          domIdx += diff;
          posAt(domIdx, true);
          syncDots();
          stopAutoplay(); startAutoplay();
        });
        dotsContainer.appendChild(dot);
      })(i);
    }
  }

  function syncDots() {
    if (!dotsContainer) return;
    var ri = realOf(domIdx);
    var targetDotIdx = 0;
    if (ri >= 0 && ri <= 2) targetDotIdx = 0;
    else if (ri === 3 || ri === 4) targetDotIdx = 1;
    else targetDotIdx = 2; // ri === 5 || ri === 6

    var dots = dotsContainer.querySelectorAll('.enlace-dot');
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === targetDotIdx);
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
  var dragging = false;
  var dragStartX = 0;
  var dragBaseX = 0;

  function liveX() { return -(domIdx * (itemW + GAP)); }

  viewport.addEventListener('mousedown', function (e) {
    dragging = true;
    hasDragged = false;
    dragStartX = e.clientX;
    dragBaseX = liveX();
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
    var dx = e.clientX - dragStartX;
    var threshold = Math.max(40, itemW * 0.25);
    if (hasDragged && dx < -threshold) goNext();
    else if (hasDragged && dx > threshold) goPrev();
    else posAt(domIdx, true);
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
  var touchX0 = 0;
  var touchBase = 0;

  viewport.addEventListener('touchstart', function (e) {
    touchX0 = e.changedTouches[0].screenX;
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
  var _autoplayStarted = false;

  function _launch() {
    if (!viewport.offsetWidth) return;
    setup();
    if (!_autoplayStarted) {
      _autoplayStarted = true;
      startAutoplay();
    }
  }

  requestAnimationFrame(_launch);
  window.addEventListener('load', _launch, { once: true });
})();

/* ---------- 7. Pestañas de Líneas de Investigación & Acordeón ---------- */
(function () {
  'use strict';

  var tabButtons = document.querySelectorAll('.lineas-tab-btn');
  var tabContents = document.querySelectorAll('.lineas-tab-content');

  /**
   * Triggers staggered fade-in animations on tab content rows/accordion items.
   * Also resets the grow animation on distribution chart bars.
   * 
   * @param {HTMLElement} container The tab content container element.
   */
  function animateTabContent(container) {
    if (!container) return;

    var items = container.querySelectorAll('.table-historico tbody tr, .lineas-accordion .accordion-row');
    items.forEach(function (item, index) {
      item.classList.remove('animate-in');
      item.style.transitionDelay = '';

      // Force layout reflow to restart CSS keyframe/transition animations
      void item.offsetWidth;

      // Staggered delay (45ms per row) for a premium, smooth transition effect
      item.style.transitionDelay = (index * 45) + 'ms';
      item.classList.add('animate-in');
    });

    // Reset growth animations of distribution bar charts
    var chartBars = container.querySelectorAll('.chart-bar');
    chartBars.forEach(function (bar) {
      bar.style.animation = 'none';
      void bar.offsetWidth; // Force reflow
      bar.style.animation = '';
    });
  }

  // Bind tab switching events
  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetTab = btn.getAttribute('data-tab');

      // Clear active states on buttons and hide all contents
      tabButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabContents.forEach(function (c) { c.classList.add('d-none'); });

      // Activate current tab and show target content
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      var targetContent = document.getElementById('tab-' + targetTab);
      if (targetContent) {
        targetContent.classList.remove('d-none');
        animateTabContent(targetContent);
      }
    });
  });

  // Execute staggered animation on initial page load for the active tab
  setTimeout(function () {
    var activeTabContent = document.querySelector('.lineas-tab-content:not(.d-none)');
    if (activeTabContent) {
      animateTabContent(activeTabContent);
    }
  }, 150);

  // Navegación con teclado según el patrón ARIA de pestañas (flechas, Inicio y Fin)
  var tabsArray = Array.from(tabButtons);
  tabButtons.forEach(function (btn, index) {
    btn.addEventListener('keydown', function (e) {
      var nextIndex = null;
      if (e.key === 'ArrowRight') nextIndex = (index + 1) % tabsArray.length;
      else if (e.key === 'ArrowLeft') nextIndex = (index - 1 + tabsArray.length) % tabsArray.length;
      else if (e.key === 'Home') nextIndex = 0;
      else if (e.key === 'End') nextIndex = tabsArray.length - 1;
      if (nextIndex !== null) {
        e.preventDefault();
        tabsArray[nextIndex].focus();
        tabsArray[nextIndex].click();
      }
    });
  });

  /**
   * Toggles the accordion row for lines of investigation, closing other rows.
   * Uses scrollHeight calculation for smooth, dynamic CSS height transitions.
   * 
   * @param {HTMLElement} header The accordion header that was clicked.
   */
  window.toggleAccordion = function (header) {
    var row = header.parentElement;
    var isOpen = row.classList.contains('open');

    // Close all other accordion rows to maintain a clean layout
    var allRows = document.querySelectorAll('.accordion-row');
    allRows.forEach(function (r) {
      if (r !== row) {
        r.classList.remove('open');
        var otherHeader = r.querySelector('.accordion-header');
        if (otherHeader) {
          otherHeader.setAttribute('aria-expanded', 'false');
        }
        var body = r.querySelector('.accordion-body');
        if (body) {
          body.style.maxHeight = null;
        }
      }
    });

    var body = row.querySelector('.accordion-body');
    if (body) {
      if (isOpen) {
        body.style.maxHeight = body.scrollHeight + 'px';
        void body.offsetWidth; // Force layout recalculation
        row.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        row.classList.add('open');
        body.style.maxHeight = body.scrollHeight + "px";
        
        // Clean up inline max-height after transition to allow responsive content adjustments
        var onTransitionEnd = function (e) {
          if (e.propertyName === 'max-height' && row.classList.contains('open')) {
            body.style.maxHeight = 'none';
          }
          body.removeEventListener('transitionend', onTransitionEnd);
        };
        body.addEventListener('transitionend', onTransitionEnd);
      }
    }

    // Sincronizar aria-expanded del header según el estado final de la fila
    header.setAttribute('aria-expanded', row.classList.contains('open') ? 'true' : 'false');
  };
})();

/* ---------- 8. Barra de Progreso de Lectura y Animaciones de Entrada ---------- */
(function () {
  'use strict';

  var eventPage = document.querySelector('.evento-page');
  if (!eventPage) return;

  // Crear la barra de progreso dinámicamente al tope de la página
  var progressBar = document.createElement('div');
  progressBar.className = 'reading-progress-bar';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function () {
    var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + "%";
  }, { passive: true });

  // Animación de entrada fluida y escalonada para los elementos de artículo
  var animElements = eventPage.querySelectorAll('.evento-header, .evento-image-wrap, .evento-body');
  animElements.forEach(function (el, index) {
    el.classList.add('reveal-element');
    setTimeout(function () {
      el.classList.add('visible');
    }, (index * 150) + 120);
  });
})();

/* ---------- 9. Paginación y Filtros de Reglamentos ---------- */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('.reglamentos-table tbody');
    if (!tableBody) return;

    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const tabButtons = document.querySelectorAll('.reglamentos-tab');
    const customSelectWrapper = document.querySelector('.reglamentos-custom-select-wrapper');
    const paginationContainer = document.querySelector('.reglamentos-pagination');
    const infoBar = document.querySelector('.reglamentos-info-bar');
    const searchInput = document.getElementById('reglamentos-search-input');

    if (!customSelectWrapper) return;
    const triggerBtn = customSelectWrapper.querySelector('.reglamentos-custom-select-trigger');
    const selectedValueEl = triggerBtn.querySelector('.selected-value');
    const customOptionsContainer = customSelectWrapper.querySelector('.reglamentos-custom-select-options');

    let currentTab = 'reglamento';
    let currentYear = '';
    let currentPage = 1;
    const itemsPerPage = 10;

    // DD/MM/YYYY Date Formatter
    function formatDate(dateStr) {
      if (!dateStr) return '';
      const parts = dateStr.trim().split('-');
      if (parts.length !== 3) return dateStr;
      
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      
      return `${day}/${month}/${year}`;
    }

    // Format text to Title Case while keeping Roman numerals and acronyms uppercase
    function formatTitleToProfessional(titleStr) {
      if (!titleStr) return '';
      // If it's already mixed case, keep it
      if (titleStr !== titleStr.toUpperCase()) return titleStr;
      
      const prepositions = ['de', 'para', 'la', 'el', 'los', 'las', 'en', 'y', 'con', 'del', 'a', 'o', 'al', 'un', 'una', 'por', 'sobre', 'e', 'u'];
      const acronyms = ['unamba', 'vrin', 'pdf', 'cti', 'unsa', 'uni', 'unam'];
      const romanNumerals = /^(x|v|i)+$/i;
      
      let words = titleStr.toLowerCase().split(/\s+/);
      words = words.map((word, index) => {
        // Remove punctuation for checking acronyms
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        
        // If it's a roman numeral (e.g. II, III, IV) or acronym, uppercase it
        if (romanNumerals.test(cleanWord) || acronyms.includes(cleanWord)) {
          return word.toUpperCase();
        }
        
        // Always capitalize first word
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        
        // If it's a preposition, keep lowercase
        if (prepositions.includes(cleanWord)) {
          return word;
        }
        
        // Otherwise, capitalize
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      
      return words.join(' ');
    }

    // Convert Google Drive view URL to direct download URL
    function convertToGoogleDriveDownloadLink(url) {
      if (!url) return '';
      
      // Check if it's a Google Drive URL
      if (url.includes('drive.google.com')) {
        let fileId = '';
        
        // Pattern 1: /file/d/[FILE_ID]/view
        if (url.includes('/file/d/')) {
          const parts = url.split('/file/d/');
          if (parts.length > 1) {
            fileId = parts[1].split('/')[0];
          }
        } 
        // Pattern 2: ?id=[FILE_ID] or &id=[FILE_ID]
        else if (url.includes('?id=') || url.includes('&id=')) {
          try {
            const urlObj = new URL(url);
            fileId = urlObj.searchParams.get('id');
          } catch(e) {
            // Fallback parsing if URL constructor fails
            const match = url.match(/[?&]id=([^&#]+)/);
            if (match) fileId = match[1];
          }
        }
        
        if (fileId) {
          return `https://drive.google.com/uc?export=download&id=${fileId}`;
        }
      }
      
      return url;
    }

    // Collect unique years, format titles and dates on load
    const years = new Set();
    rows.forEach(row => {
      // Format Title to professional casing
      const titleEl = row.querySelector('.reglamentos-doc-title');
      if (titleEl) {
        titleEl.textContent = formatTitleToProfessional(titleEl.textContent);
      }

      // Convert Google Drive viewer link to direct download link
      const downloadBtn = row.querySelector('.reglamentos-btn-descargar');
      if (downloadBtn) {
        const originalHref = downloadBtn.getAttribute('href');
        if (originalHref) {
          downloadBtn.setAttribute('href', convertToGoogleDriveDownloadLink(originalHref));
        }
      }

      const metaEl = row.querySelector('.reglamentos-doc-meta');
      if (metaEl) {
        const rawDate = metaEl.getAttribute('data-date');
        if (rawDate) {
          // Format date
          metaEl.textContent = 'Aprobado: ' + formatDate(rawDate);
          
          // Extract year from the approval date
          const parts = rawDate.trim().split('-');
          if (parts.length === 3) {
            const year = parts[0];
            if (year && year.length === 4 && !isNaN(year)) {
              row.setAttribute('data-year', year);
              years.add(year);
            }
          }
        }
      }
    });

    // Sort years descending
    const sortedYears = Array.from(years).sort((a, b) => b - a);

    // Populate custom select options
    const defaultOption = customOptionsContainer.querySelector('.reglamentos-custom-option');
    customOptionsContainer.innerHTML = '';
    customOptionsContainer.appendChild(defaultOption);

    sortedYears.forEach(year => {
      const opt = document.createElement('div');
      opt.className = 'reglamentos-custom-option';
      opt.setAttribute('data-value', year);
      opt.textContent = year;
      customOptionsContainer.appendChild(opt);
    });

    // Toggle dropdown open/close
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      customSelectWrapper.classList.toggle('open');
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!customSelectWrapper.contains(e.target)) {
        customSelectWrapper.classList.remove('open');
      }
    });

    // Handle option click (using event delegation)
    customOptionsContainer.addEventListener('click', (e) => {
      const option = e.target.closest('.reglamentos-custom-option');
      if (!option) return;

      const val = option.getAttribute('data-value');
      const text = option.textContent;

      currentYear = val;
      currentPage = 1;

      // Update trigger text
      selectedValueEl.textContent = text;

      // Update active option class
      customOptionsContainer.querySelectorAll('.reglamentos-custom-option').forEach(opt => {
        opt.classList.toggle('active', opt === option);
      });

      // Close dropdown
      customSelectWrapper.classList.remove('open');

      // Refresh list
      updateList();
    });

    // Handle live search input
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        currentPage = 1;
        updateList();
      });
    }

    function updateList() {
      const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';

      const filteredRows = rows.filter(row => {
        const typeMatch = row.getAttribute('data-type') === currentTab;
        const yearMatch = currentYear === '' || row.getAttribute('data-year') === currentYear;
        
        let searchMatch = true;
        if (searchQuery !== '') {
          const titleEl = row.querySelector('.reglamentos-doc-title');
          const titleText = titleEl ? titleEl.textContent.toLowerCase() : '';
          searchMatch = titleText.includes(searchQuery);
        }

        return typeMatch && yearMatch && searchMatch;
      });

      const totalItems = filteredRows.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

      // Hide all rows
      rows.forEach(row => row.style.display = 'none');

      // Show active page rows and re-index shown rows from 1 to N for pagination
      filteredRows.slice(startIndex, endIndex).forEach((row, index) => {
        row.style.display = '';
        const numCell = row.querySelector('.reglamentos-cell-num');
        if (numCell) {
          numCell.textContent = startIndex + index + 1;
        }
      });

      // Update text
      if (totalItems > 0) {
        infoBar.textContent = `MOSTRANDO REGISTROS DEL ${startIndex + 1} AL ${endIndex} DE UN TOTAL DE ${totalItems} REGISTRO(S)`;
        infoBar.style.display = '';
      } else {
        infoBar.textContent = 'NO SE ENCONTRARON REGISTROS';
      }

      // Update pagination buttons
      paginationContainer.innerHTML = '';
      if (totalPages > 1) {
        // Prev button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'reglamentos-page-btn' + (currentPage === 1 ? ' disabled' : '');
        prevBtn.innerHTML = '&laquo;';
        prevBtn.addEventListener('click', () => {
          if (currentPage > 1) {
            currentPage--;
            updateList();
            scrollToTable();
          }
        });
        paginationContainer.appendChild(prevBtn);

        // Page buttons (with responsive smart ranges and ellipses)
        const createPageButton = (pageNumber) => {
          const pageBtn = document.createElement('button');
          pageBtn.className = 'reglamentos-page-btn' + (pageNumber === currentPage ? ' active' : '');
          pageBtn.textContent = pageNumber;
          pageBtn.addEventListener('click', () => {
            currentPage = pageNumber;
            updateList();
            scrollToTable();
          });
          paginationContainer.appendChild(pageBtn);
        };

        const range = [];
        const delta = window.innerWidth < 480 ? 1 : 2;
        
        for (let i = 1; i <= totalPages; i++) {
          if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
            range.push(i);
          }
        }
        
        let lastNum;
        range.forEach(i => {
          if (lastNum) {
            if (i - lastNum === 2) {
              createPageButton(lastNum + 1);
            } else if (i - lastNum > 2) {
              const ellipsis = document.createElement('span');
              ellipsis.className = 'reglamentos-pagination-ellipsis';
              ellipsis.textContent = '...';
              paginationContainer.appendChild(ellipsis);
            }
          }
          createPageButton(i);
          lastNum = i;
        });

        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'reglamentos-page-btn' + (currentPage === totalPages ? ' disabled' : '');
        nextBtn.innerHTML = '&raquo;';
        nextBtn.addEventListener('click', () => {
          if (currentPage < totalPages) {
            currentPage++;
            updateList();
            scrollToTable();
          }
        });
        paginationContainer.appendChild(nextBtn);

        // Optional "Siguiente" text button as in mockup
        const nextTextBtn = document.createElement('button');
        nextTextBtn.className = 'reglamentos-page-btn-text' + (currentPage === totalPages ? ' disabled' : '');
        nextTextBtn.textContent = 'Siguiente';
        nextTextBtn.addEventListener('click', () => {
          if (currentPage < totalPages) {
            currentPage++;
            updateList();
            scrollToTable();
          }
        });
        paginationContainer.appendChild(nextTextBtn);
      }
    }

    function scrollToTable() {
      const tableCard = document.querySelector('.reglamentos-table-card');
      if (tableCard) {
        tableCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTab = btn.getAttribute('data-tab');

        // Reset search input
        if (searchInput) searchInput.value = '';

        // Reset year select to default "Año"
        currentYear = '';
        selectedValueEl.textContent = 'Año';
        customOptionsContainer.querySelectorAll('.reglamentos-custom-option').forEach(opt => {
          opt.classList.toggle('active', opt.getAttribute('data-value') === '');
        });

        currentPage = 1;
        updateList();
      });
    });

    updateList();
  });
})();

/* ========================================================================
   SECCIÓN QUIÉNES SOMOS (NOSOTROS)
   Módulo para gestionar la navegación del sidebar, las pestañas de
   direcciones y la interactividad en la página Quiénes Somos.
   ======================================================================== */
(function () {
  'use strict';

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  /* ========================================================================
     PÁGINA QUIÉNES SOMOS
     Miniíndice lateral (secciones), pestañas de Direcciones del VRIN y
     animaciones de entrada. Todo el estado vive en clases + ARIA; el JS
     no escribe estilos inline, el CSS controla la presentación.
     ======================================================================== */
  function initNosotros() {
    // 1. Miniíndice lateral: un botón por sección, sincronizado con ARIA
    var sidebarItems = Array.prototype.slice.call(document.querySelectorAll('.vrin-sidebar-item'));
    var sections = Array.prototype.slice.call(document.querySelectorAll('.vrin-panel-section'));

    if (sidebarItems.length && sections.length) {
      sidebarItems.forEach(function (item) {
        item.setAttribute('aria-expanded', item.classList.contains('active') ? 'true' : 'false');

        item.addEventListener('click', function (e) {
          e.preventDefault();

          var targetId = item.getAttribute('data-target');

          sidebarItems.forEach(function (sib) {
            var isCurrent = sib === item;
            sib.classList.toggle('active', isCurrent);
            sib.setAttribute('aria-expanded', isCurrent ? 'true' : 'false');
          });

          sections.forEach(function (sec) {
            sec.classList.toggle('active', sec.id === targetId);
          });
        });
      });
    }

    // 2. Pestañas de Direcciones del VRIN (tablist/tabpanel con ARIA)
    var dirTabBtns = Array.prototype.slice.call(document.querySelectorAll('.vrin-dir-tab'));

    if (dirTabBtns.length) {
      dirTabBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var targetSelector = btn.getAttribute('data-target');

          dirTabBtns.forEach(function (b) {
            var isCurrent = b === btn;
            b.classList.toggle('active', isCurrent);
            b.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
          });

          document.querySelectorAll('.vrin-dir-pane').forEach(function (pane) {
            pane.classList.toggle('active', '#' + pane.id === targetSelector);
          });
        });
      });
    }
  }

  // 3. Entrada suave al hacer scroll: solo transform/opacity (sin reflow).
  //    Respeta prefers-reduced-motion y navegadores sin IntersectionObserver.
  function initReveal() {
    var nodes = document.querySelectorAll('.vrin-reveal');
    if (!nodes.length) return;

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    nodes.forEach(function (n) { io.observe(n); });
  }

  onReady(initNosotros);
  onReady(initReveal);
})();
(function () {
  'use strict';

  /* ========================================================================
     MÓDULO DE INTERACTIVIDAD PARA GRUPOS DE INVESTIGACIÓN
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementById('gruposGrid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.grupo-card-container'));
    if (!cards.length) return;

    /* ----------------------------------------------------------------------
       Mapeos de datos
       ---------------------------------------------------------------------- */
    const carreraMap = {
      1: 'Administración',
      2: 'Educación Inicial Intercultural Bilingüe',
      3: 'Ciencia Política y Gobernabilidad',
      4: 'Ingeniería Agroindustrial',
      5: 'Ingeniería de Minas',
      6: 'Ingeniería Informática y Sistemas',
      7: 'Ingeniería Civil',
      8: 'Ingeniería Agroecológica y Desarrollo Rural',
      9: 'Medicina Veterinaria y Zootecnia',
      10: 'Departamento Académico de Ciencias Básicas',
      11: 'Departamento Académico de Humanidades',
      12: 'Escuela de Posgrado'
    };

    const lineaMap = {
      1: 'Caracterización, desarrollo de procesos e innovación en la agroindustria.',
      2: 'Gestión empresarial.',
      3: 'Gestión pública.',
      4: 'Minería, procesamiento de minerales.',
      5: 'Geología, geotecnia y medio ambiente.',
      6: 'Educación inicial, desarrollo infantil y gestión pedagógica.',
      7: 'Interculturalidad y cosmovisión andina.',
      8: 'Ingeniería de la construcción.',
      9: 'Ingeniería de materiales.',
      10: 'Ciencias veterinarias.',
      11: 'Ingeniería informática, industria y sociedad.',
      12: 'Ingeniería de software e innovación tecnológica.',
      13: 'Modelos de gestión y calidad educativa.',
      14: 'Agua, agricultura, silvicultura y pecuaria sostenible.',
      15: 'Biotecnología, fitomejoramiento y conservación de la biodiversidad.',
      16: 'Sistema político y gobernabilidad.',
      17: 'Teoría política y gobernabilidad.',
      18: 'Aplicación de la matemática, estadística, física, química y biología.',
      19: 'Desarrollo humano y calidad de vida.',
      20: 'Sociedad e identidad nacional, territorios y cambios climáticos.'
    };

    const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    // Fallback de metadatos para grupos sin fecha/link completos en la plantilla
    const groupsMetadata = {
      '56e2b583-7959-4624-8eb4-f6ed71fcf13a': { date: '20 de mayo de 2024', year: '2024', resolution: 'Res. N° 045-2024-VRIN-UNAMBA' },
      'f0b02137-15e1-4dc9-86cb-76491221b62d': { date: '25 de mayo de 2024', year: '2024', resolution: 'Res. N° 048-2024-VRIN-UNAMBA' },
      '909dac78-1d7a-4d77-ae7b-80e736a76864': { date: '25 de mayo de 2024', year: '2024', resolution: 'Res. N° 049-2024-VRIN-UNAMBA' },
      'e1513719-c76e-4196-bb92-5ef7f0bad0cd': { date: '20 de mayo de 2024', year: '2024', resolution: 'Res. N° 042-2024-VRIN-UNAMBA' },
      'e7cb6c67-7b58-4707-8fc3-2a73d40da933': { date: '18 de abril de 2023', year: '2023', resolution: 'Res. N° 124-2023-VRIN-UNAMBA' },
      'b0acff00-a3b2-476f-9a45-91053065627f': { date: '12 de agosto de 2023', year: '2023', resolution: 'Res. N° 182-2023-VRIN-UNAMBA' },
      '19eacf67-ec4a-444b-b6c9-39f9e2e648c4': { date: '15 de mayo de 2024', year: '2024', resolution: 'Res. N° 038-2024-VRIN-UNAMBA' },
      '446871a7-c2e5-4ff3-a48b-1d1d23b518e2': { date: '10 de noviembre de 2022', year: '2022', resolution: 'Res. N° 294-2022-VRIN-UNAMBA' },
      'de513f20-abc1-46f7-8649-516514295bbd': { date: '12 de agosto de 2023', year: '2023', resolution: 'Res. N° 185-2023-VRIN-UNAMBA' },
      '1f3863df-66bd-4736-8fc4-31b2dad6831b': { date: '20 de mayo de 2024', year: '2024', resolution: 'Res. N° 041-2024-VRIN-UNAMBA' },
      '778e1ddb-aa99-4c8e-a392-c64ef93f6bae': { date: '14 de septiembre de 2023', year: '2023', resolution: 'Res. N° 201-2023-VRIN-UNAMBA' },
      '283ba324-7628-49be-b5c8-c01fc7c08b99': { date: '25 de mayo de 2024', year: '2024', resolution: 'Res. N° 050-2024-VRIN-UNAMBA' },
      '90cff412-8646-496c-9999-e2b00e6deb19': { date: '05 de junio de 2023', year: '2023', resolution: 'Res. N° 145-2023-VRIN-UNAMBA' },
      '0a2b44b7-906f-4582-a3de-4ba7e9a05db1': { date: '12 de agosto de 2023', year: '2023', resolution: 'Res. N° 189-2023-VRIN-UNAMBA' },
      '9bc96518-fe99-4706-a056-607a5b46f50c': { date: '14 de marzo de 2024', year: '2024', resolution: 'Res. N° 015-2024-VRIN-UNAMBA' },
      'c299d75f-0f78-41a7-b4ac-1a4e0473a7f7': { date: '12 de agosto de 2023', year: '2023', resolution: 'Res. N° 181-2023-VRIN-UNAMBA' },
      '9f693a4d-3473-4633-81cc-a80562a0ce2e': { date: '18 de mayo de 2024', year: '2024', resolution: 'Res. N° 039-2024-VRIN-UNAMBA' },
      '6e96bbe6-e160-47db-9905-f5b2779fefea': { date: '20 de mayo de 2024', year: '2024', resolution: 'Res. N° 043-2024-VRIN-UNAMBA' },
      '0c8eec08-8406-40ca-8b2a-a6a2f42aa76d': { date: '12 de agosto de 2023', year: '2023', resolution: 'Res. N° 180-2023-VRIN-UNAMBA' },
      'a3c24e73-9b7b-40a3-b6ea-dcbd6c41dec7': { date: '20 de mayo de 2024', year: '2024', resolution: 'Res. N° 040-2024-VRIN-UNAMBA' }
    };

    /* ----------------------------------------------------------------------
       Referencias de UI
       ---------------------------------------------------------------------- */
    const searchField = document.getElementById('grupoSearch');
    const paginationControls = document.getElementById('paginationControls');
    const pageInfo = document.getElementById('pageInfo');
    const noResults = document.getElementById('noResults');
    const paginationRow = document.getElementById('paginationRow');
    const sidebar = document.querySelector('.filters-sidebar');
    const exportBtn = document.getElementById('btnExportarLista');
    const resetBtn = document.getElementById('btnResetFilters');
    const resultsCount = document.getElementById('gruposResultsCount');

    const modal = document.getElementById('grupoModal');
    if (modal && modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }

    const modalTitle = document.getElementById('grupoModalTitle');
    const modalEstado = document.getElementById('modalEstado');
    const modalCarrera = document.getElementById('modalCarrera');
    const modalLinea = document.getElementById('grupoModalLinea');
    const modalAvatar = document.getElementById('modalAvatar');
    const modalCoordinator = document.getElementById('modalCoordinator');
    const modalEmail = document.getElementById('modalEmail');
    const modalIntegrantesCount = document.getElementById('modalIntegrantesCount');
    const modalIntegrantes = document.getElementById('modalIntegrantes');
    const modalDescripcionSection = document.getElementById('modalDescripcionSection');
    const modalDescripcion = document.getElementById('modalDescripcion');
    const modalObjetivosSection = document.getElementById('modalObjetivosSection');
    const modalObjetivos = document.getElementById('modalObjetivos');
    const modalFecha = document.getElementById('modalFecha');
    const modalResolucion = document.getElementById('modalResolucion');
    const modalClose = modal ? modal.querySelector('.grupo-modal__close') : null;
    const modalBackdrop = modal ? modal.querySelector('.grupo-modal__backdrop') : null;
    const modalBtnCerrar = modal ? modal.querySelector('.grupo-modal__btn-cerrar') : null;

    let filtered = cards.slice();
    let currentPage = 1;
    const itemsPerPage = 9;
    let lastFocused = null;
    let searchDebounce = null;

    /* ----------------------------------------------------------------------
       Helpers
       ---------------------------------------------------------------------- */
    function normalizeText(str) {
      if (str == null) return '';
      return String(str)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();
    }

    function getInitials(name) {
      if (!name) return 'GI';
      const clean = String(name)
        .replace(/\b(?:Lic\.|Mg\.|Dr\.|Dra\.|Ing\.|M\.Sc\.|Ph\.D\.|PhD|MSc|Bach\.|Tec\.|Prof\.|Mtro\.|Mtra\.|M\.sc\.|Msc\.)\b/gi, '')
        .trim();
      const parts = clean.split(/\s+/).filter(Boolean);
      if (parts.length === 0) return 'GI';
      if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
      return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
    }

    function parseMembers(rawHtml, rawText) {
      let source = rawHtml || '';
      if (!source && rawText) {
        source = rawText.replace(/\n/g, '<br>').replace(/,/g, '<br>');
      }
      if (!source) return [];

      const tmp = document.createElement('div');
      tmp.innerHTML = source
        .replace(/<\/p>/gi, '</p>\n')
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<li>/gi, '\n<li>');

      let text = tmp.textContent || tmp.innerText || '';
      text = text.replace(/\u00A0/g, ' ');

      return text
        .split(/\n|(?:,\s*(?=[A-ZÁÉÍÓÚÑ][a-záéíóúñ]|\w{2,}))/g)
        .map(function (s) { return s.replace(/[•\-–—]/g, '').trim(); })
        .filter(function (s) { return s.length > 2; });
    }

    function formatDate(value, fallback) {
      if (!value && fallback) value = fallback;
      if (!value) return { text: '—', shortText: '—', year: '' };

      const str = String(value).trim();
      if (/[a-zA-Z]/.test(str)) {
        const yearMatch = str.match(/\b(20\d{2})\b/);
        return { text: str, shortText: str, year: yearMatch ? yearMatch[1] : '' };
      }

      let m = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
      if (!m) {
        m = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
        if (m) m = [m[0], m[3], m[2], m[1]];
      }
      if (m) {
        const year = m[1];
        const monthIndex = parseInt(m[2], 10) - 1;
        const day = parseInt(m[3], 10);
        const monthName = monthNames[monthIndex];
        const shortMonth = monthName.charAt(0).toUpperCase() + monthName.substring(1, 3);
        return {
          text: day + ' de ' + monthName + ' de ' + year,
          shortText: day + ' ' + shortMonth + ', ' + year,
          year: year
        };
      }

      const yearMatch = str.match(/\b(20\d{2})\b/);
      return { text: str, shortText: str, year: yearMatch ? yearMatch[1] : '' };
    }

    function getMapLabel(map, key) {
      if (key == null) return '';
      const label = map[String(key).trim()] || '';
      // Las líneas se almacenan como frases con punto final; se omite en la presentación
      return label.replace(/\.$/, '');
    }

    function getMultiMapLabels(map, keysStr) {
      if (!keysStr) return [];
      return String(keysStr)
        .split(',')
        .map(function (s) { return s.trim(); })
        .filter(Boolean)
        .map(function (k) { return map[k] || ''; })
        .filter(Boolean);
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    function splitKeys(keysStr) {
      return String(keysStr || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    }

    function setText(el, text) {
      if (el) el.textContent = text;
    }

    function setHtml(el, html) {
      if (el) el.innerHTML = html;
    }

    // Avatar: foto del coordinador si existe, si no iniciales (con fallback si la imagen falla)
    function setAvatar(el, name, fotoUrl) {
      if (!el) return;
      const url = String(fotoUrl || '').trim();
      if (!url) {
        el.textContent = getInitials(name);
        return;
      }
      el.textContent = '';
      const img = document.createElement('img');
      img.src = url;
      img.alt = '';
      img.loading = 'lazy';
      img.addEventListener('error', function onError() {
        img.removeEventListener('error', onError);
        el.textContent = getInitials(name);
      });
      el.appendChild(img);
    }

    /* ----------------------------------------------------------------------
       Inicialización de cada tarjeta
       ---------------------------------------------------------------------- */
    function initCard(card) {
      const id = card.getAttribute('data-id') || '';
      const meta = groupsMetadata[id] || {};
      const nombre = (card.getAttribute('data-nombre') || '').trim();
      const jefe = (card.getAttribute('data-jefe') || '').trim();
      const carreraKey = (card.getAttribute('data-carrera') || '').trim();
      const lineaKey = (card.getAttribute('data-linea') || '').trim();
      const rawFecha = card.getAttribute('data-fecha');
      const rawLink = card.getAttribute('data-link');
      const foto = card.getAttribute('data-foto') || '';

      const dateInfo = formatDate(rawFecha, meta.date);
      const year = dateInfo.year || meta.year || new Date().getFullYear().toString();
      card.setAttribute('data-year', year);
      card.setAttribute('data-date', dateInfo.text);
      card.setAttribute('data-date-short', dateInfo.shortText);

      // Línea y carrera
      const lineaValue = card.querySelector('.grupo-card__meta-value--linea');
      const carreraValue = card.querySelector('.grupo-card__meta-value--carrera');
      const lineaLabel = getMapLabel(lineaMap, lineaKey.split(',')[0]) || 'Línea de investigación';
      const carreraLabel = getMapLabel(carreraMap, carreraKey) || 'Carrera profesional';
      if (lineaValue) lineaValue.textContent = lineaLabel;
      if (carreraValue) carreraValue.textContent = carreraLabel;

      // Avatar, nombre y correo del coordinador
      const avatarEl = card.querySelector('.coordinator-avatar');
      setAvatar(avatarEl, jefe, foto);
      const coordNameEl = card.querySelector('.coordinator-name');
      if (coordNameEl) coordNameEl.textContent = jefe || 'Sin coordinador';
      const emailEl = card.querySelector('.coordinator-email');
      const emailTextEl = card.querySelector('.coordinator-email .email-text');
      const email = (card.getAttribute('data-email') || '').trim();
      if (emailTextEl) {
        emailTextEl.textContent = email;
      }
      if (emailEl) {
        emailEl.setAttribute('title', email);
        emailEl.style.display = email ? '' : 'none';
      }

      // Fecha en footer: mostrar fecha corta en tarjeta
      const dateTextEl = card.querySelector('.date-text');
      if (dateTextEl) dateTextEl.textContent = (dateInfo.shortText && dateInfo.shortText !== '—') ? dateInfo.shortText : year;

      // Estado
      const estadoRaw = (card.getAttribute('data-estado') || '').trim().toLowerCase();
      const isInactive = estadoRaw === 'inactivo' || estadoRaw === 'false' || estadoRaw === '0';
      const estadoLabel = isInactive ? 'Inactivo' : 'Activo';
      const statusText = card.querySelector('.status-text');
      const statusDot = card.querySelector('.status-dot');
      if (statusText) statusText.textContent = estadoLabel;
      if (statusDot) {
        statusDot.classList.remove('status-active', 'status-inactive');
        statusDot.classList.add(isInactive ? 'status-inactive' : 'status-active');
      }
      card.setAttribute('data-estado-label', estadoLabel);

      // Integrantes
      const rawDiv = card.querySelector('.raw-integrantes-html');
      const rawHtml = rawDiv ? rawDiv.innerHTML : '';
      const rawText = card.getAttribute('data-integrantes') || '';
      const members = parseMembers(rawHtml, rawText);
      card.setAttribute('data-members-count', members.length);
      card.setAttribute('data-members-list', members.join('|'));

      // Descripción y objetivos
      const descripcionRaw = (card.getAttribute('data-descripcion') || '').trim();
      const objetivosRaw = (card.getAttribute('data-objetivos') || '').trim();
      const objetivosList = objetivosRaw
        .split(/\n|<br\s*\/?>/i)
        .map(function (s) { return s.replace(/[•\-–—]/g, '').trim(); })
        .filter(function (s) { return s.length > 2; });
      card.setAttribute('data-descripcion', descripcionRaw);
      card.setAttribute('data-objetivos-list', objetivosList.join('|'));

      // Texto indexable
      const searchable = normalizeText([
        nombre,
        jefe,
        rawText,
        carreraLabel,
        getMultiMapLabels(lineaMap, lineaKey).join(' '),
        year,
        descripcionRaw,
        objetivosRaw
      ].join(' '));
      card.setAttribute('data-searchable', searchable);

      // Enlace a resolución
      const link = (rawLink && rawLink.trim() !== '#' && rawLink.trim() !== '') ? rawLink.trim() : (meta.link || '');
      card.setAttribute('data-resolution-link', link);
      card.setAttribute('data-resolution-text', meta.resolution || '');
    }

    /* ----------------------------------------------------------------------
       Filtros y paginación
       ---------------------------------------------------------------------- */
    function getFilterState() {
      const yearInput = document.querySelector('input[name="filter-year"]:checked');
      const lineas = Array.from(document.querySelectorAll('input[name="filter-linea"]:checked')).map(function (i) { return i.value; });
      const carreras = Array.from(document.querySelectorAll('input[name="filter-carrera"]:checked')).map(function (i) { return i.value; });
      return { year: yearInput ? yearInput.value : 'all', lineas: lineas, carreras: carreras };
    }

    function matchesFilters(card, state, query) {
      const cardLineas = splitKeys(card.getAttribute('data-linea'));
      const cardCarreras = splitKeys(card.getAttribute('data-carrera'));
      const year = card.getAttribute('data-year') || '';
      const searchable = card.getAttribute('data-searchable') || '';

      const yearMatch = state.year === 'all' || year === state.year;
      const lineaMatch = state.lineas.length === 0 || state.lineas.some(function (v) { return cardLineas.includes(v); });
      const carreraMatch = state.carreras.length === 0 || state.carreras.some(function (v) { return cardCarreras.includes(v); });
      const searchMatch = !query || searchable.includes(query);

      return yearMatch && lineaMatch && carreraMatch && searchMatch;
    }

    // Actualiza el contador "Grupos Registrados — N registros" y el estado del botón Reestablecer
    function updateResultsSummary(state, query) {
      if (resultsCount) {
        resultsCount.textContent = filtered.length + (filtered.length === 1 ? ' registro' : ' registros');
      }
      if (resetBtn) {
        const hasActiveFilters = state.year !== 'all' || state.lineas.length > 0 || state.carreras.length > 0 || query !== '';
        resetBtn.disabled = !hasActiveFilters;
      }
    }

    function filterCards() {
      const state = getFilterState();
      const query = normalizeText(searchField ? searchField.value : '');

      filtered = cards.filter(function (card) { return matchesFilters(card, state, query); });

      updateResultsSummary(state, query);

      if (filtered.length === 0) {
        if (noResults) noResults.classList.remove('d-none');
        grid.classList.add('d-none');
        if (paginationRow) paginationRow.classList.add('d-none');
        return;
      }

      if (noResults) noResults.classList.add('d-none');
      grid.classList.remove('d-none');
      if (paginationRow) paginationRow.classList.remove('d-none');

      const totalPages = Math.ceil(filtered.length / itemsPerPage);
      currentPage = Math.max(1, Math.min(currentPage, totalPages));

      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      cards.forEach(function (c) {
        c.style.display = 'none';
        c.classList.remove('grupo-fade-in');
      });
      filtered.slice(start, end).forEach(function (c) {
        c.style.display = 'block';
        c.classList.add('grupo-fade-in');
      });

      renderPagination(totalPages, filtered.length);
    }

    function renderPagination(totalPages, totalItems) {
      if (!pageInfo || !paginationControls) return;

      pageInfo.textContent = 'Página ' + currentPage + ' de ' + totalPages;
      paginationControls.innerHTML = '';

      if (totalPages <= 1) {
        if (paginationRow) paginationRow.classList.add('d-none');
        return;
      }
      if (paginationRow) paginationRow.classList.remove('d-none');

      function createItem(content, page, disabled) {
        const li = document.createElement('li');
        if (disabled) {
          li.className = 'disabled';
          li.innerHTML = '<span>' + content + '</span>';
        } else if (page === currentPage) {
          li.className = 'active';
          li.innerHTML = '<span>' + content + '</span>';
        } else {
          const a = document.createElement('a');
          a.href = '#';
          a.setAttribute('data-page', page);
          a.setAttribute('aria-label', 'Ir a la página ' + page);
          a.innerHTML = content;
          li.appendChild(a);
        }
        return li;
      }

      paginationControls.appendChild(createItem('<i class="material-icons">chevron_left</i>', currentPage - 1, currentPage === 1));
      for (let i = 1; i <= totalPages; i++) {
        paginationControls.appendChild(createItem(String(i), i, false));
      }
      paginationControls.appendChild(createItem('<i class="material-icons">chevron_right</i>', currentPage + 1, currentPage === totalPages));
    }

    /* ----------------------------------------------------------------------
       Eventos de filtros, búsqueda y paginación
       ---------------------------------------------------------------------- */
    if (sidebar) {
      sidebar.addEventListener('click', function (e) {
        const toggle = e.target.closest('.filter-group__toggle');
        if (!toggle) return;
        e.preventDefault();
        const content = document.getElementById(toggle.getAttribute('aria-controls'));
        const expanded = toggle.getAttribute('aria-expanded') !== 'false';
        toggle.setAttribute('aria-expanded', String(!expanded));
        if (content) content.classList.toggle('open');
      });

      sidebar.addEventListener('change', function (e) {
        if (e.target.matches('input[name^="filter-"]')) {
          currentPage = 1;
          filterCards();
        }
      });
    }

    /* ----------------------------------------------------------------------
       "Reestablecer": limpia año, líneas, carreras y búsqueda
       ---------------------------------------------------------------------- */
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        document.querySelectorAll('input[name="filter-linea"]:checked, input[name="filter-carrera"]:checked')
          .forEach(function (input) { input.checked = false; });
        const allYears = document.querySelector('input[name="filter-year"][value="all"]');
        if (allYears) allYears.checked = true;
        if (searchField) searchField.value = '';
        currentPage = 1;
        filterCards();
      });
    }

    /* ----------------------------------------------------------------------
       Contadores "(N)" de cada opción de filtro, calculados desde los datos
       ---------------------------------------------------------------------- */
    function appendFilterCount(input, count) {
      const option = input.closest('.filter-checkbox');
      if (!option) return;
      const badge = document.createElement('span');
      badge.className = 'filter-count';
      badge.setAttribute('aria-hidden', 'true');
      badge.textContent = '(' + count + ')';
      option.appendChild(badge);
    }

    function initFilterCounts() {
      document.querySelectorAll('.filters-sidebar input[name="filter-year"]').forEach(function (input) {
        const count = input.value === 'all'
          ? cards.length
          : cards.filter(function (c) { return c.getAttribute('data-year') === input.value; }).length;
        appendFilterCount(input, count);
      });

      ['filter-linea', 'filter-carrera'].forEach(function (name) {
        const attr = name === 'filter-linea' ? 'data-linea' : 'data-carrera';
        document.querySelectorAll('.filters-sidebar input[name="' + name + '"]').forEach(function (input) {
          const count = cards.filter(function (c) {
            return splitKeys(c.getAttribute(attr)).includes(input.value);
          }).length;
          appendFilterCount(input, count);
        });
      });
    }

    /* ----------------------------------------------------------------------
       "Ver más / Ver menos" en grupos de filtros con muchas opciones
       ---------------------------------------------------------------------- */
    const FILTER_VISIBLE_LIMIT = 5;

    function initFilterVerMas() {
      document.querySelectorAll('.filters-sidebar .filter-group__content').forEach(function (content) {
        const options = Array.from(content.querySelectorAll('.filter-checkbox'));
        if (options.length <= FILTER_VISIBLE_LIMIT) return;

        const hiddenCount = options.length - FILTER_VISIBLE_LIMIT;
        options.slice(FILTER_VISIBLE_LIMIT).forEach(function (option) {
          option.classList.add('filter-checkbox--hidden');
        });

        const verMasBtn = document.createElement('button');
        verMasBtn.type = 'button';
        verMasBtn.className = 'filter-group__ver-mas';
        verMasBtn.setAttribute('aria-expanded', 'false');

        function updateVerMasLabel(expanded) {
          const label = expanded ? 'Ver menos' : 'Ver más (' + hiddenCount + ')';
          const icon = expanded ? 'expand_less' : 'expand_more';
          verMasBtn.innerHTML = '<span>' + label + '</span><i class="material-icons" aria-hidden="true">' + icon + '</i>';
        }

        verMasBtn.addEventListener('click', function () {
          const expanded = verMasBtn.getAttribute('aria-expanded') === 'true';
          verMasBtn.setAttribute('aria-expanded', String(!expanded));
          content.classList.toggle('open-all', !expanded);
          updateVerMasLabel(!expanded);
        });

        updateVerMasLabel(false);
        content.appendChild(verMasBtn);
      });
    }

    if (searchField) {
      searchField.addEventListener('input', function () {
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(function () {
          currentPage = 1;
          filterCards();
        }, 200);
      });
    }

    if (paginationControls) {
      paginationControls.addEventListener('click', function (e) {
        const a = e.target.closest('a[data-page]');
        if (!a) return;
        e.preventDefault();
        const page = parseInt(a.getAttribute('data-page'), 10);
        if (!isNaN(page) && page !== currentPage) {
          currentPage = page;
          window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
          filterCards();
        }
      });
    }

    /* ----------------------------------------------------------------------
       Exportar lista a CSV
       ---------------------------------------------------------------------- */
    function escapeCsv(value) {
      const str = String(value == null ? '' : value).replace(/"/g, '""');
      return /[",\n]/.test(str) ? '"' + str + '"' : str;
    }

    function exportarCSV() {
      const headers = ['Nombre del Grupo', 'Estado', 'Coordinador', 'Email', 'Línea de Investigación', 'Carrera', 'Año', 'Integrantes'];
      const rows = filtered.map(function (card) {
        const lineaKey = card.getAttribute('data-linea') || '';
        const carreraKey = card.getAttribute('data-carrera') || '';
        return [
          card.getAttribute('data-nombre') || '',
          card.getAttribute('data-estado-label') || 'Activo',
          card.getAttribute('data-jefe') || '',
          card.getAttribute('data-email') || '',
          getMapLabel(lineaMap, lineaKey.split(',')[0]),
          getMapLabel(carreraMap, carreraKey),
          card.getAttribute('data-year') || '',
          (card.getAttribute('data-members-list') || '').replace(/\|/g, '; ')
        ].map(escapeCsv).join(',');
      });

      const csv = '\uFEFF' + headers.map(escapeCsv).join(',') + '\n' + rows.join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'grupos-de-investigacion.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }

    if (exportBtn) exportBtn.addEventListener('click', exportarCSV);

    /* ----------------------------------------------------------------------
       Modal de detalles
       ---------------------------------------------------------------------- */
    function openModal(card) {
      if (!modal) return;

      const nombre = (card.getAttribute('data-nombre') || '').trim();
      const jefe = card.getAttribute('data-jefe') || '';
      const carreraKey = card.getAttribute('data-carrera') || '';
      const lineaKey = card.getAttribute('data-linea') || '';
      const dateText = card.getAttribute('data-date-short') || card.getAttribute('data-date') || '—';
      const link = card.getAttribute('data-resolution-link') || '';
      const resolutionText = card.getAttribute('data-resolution-text') || 'Ver Resolución';
      const members = (card.getAttribute('data-members-list') || '').split('|').filter(Boolean);
      const descripcion = card.getAttribute('data-descripcion') || '';
      const objetivos = (card.getAttribute('data-objetivos-list') || '').split('|').filter(Boolean);
      const estadoLabel = card.getAttribute('data-estado-label') || 'Activo';
      const email = card.getAttribute('data-email') || '';
      const foto = card.getAttribute('data-foto') || '';

      const carreraLabel = getMapLabel(carreraMap, carreraKey) || '—';
      const lineaLabel = getMapLabel(lineaMap, lineaKey.split(',')[0]) || '—';

      setText(modalTitle, nombre || 'Grupo de Investigación');
      setText(modalEstado, estadoLabel);
      if (modalEstado) modalEstado.classList.toggle('is-inactive', estadoLabel === 'Inactivo');
      setText(modalCarrera, carreraLabel);
      setText(modalLinea, lineaLabel !== '—' ? 'Línea: ' + lineaLabel : '—');
      setAvatar(modalAvatar, jefe, foto);
      setText(modalCoordinator, jefe || 'Sin coordinador');
      setText(modalEmail, email);
      setText(modalFecha, (dateText && dateText !== '—') ? 'Fecha de Resolución: ' + dateText : '—');

      setText(modalIntegrantesCount, String(members.length));
      setHtml(modalIntegrantes, members.map(function (m) { return '<li>' + escapeHtml(m) + '</li>'; }).join(''));

      if (modalDescripcionSection && modalDescripcion) {
        if (descripcion.trim()) {
          modalDescripcion.innerHTML = escapeHtml(descripcion).replace(/\n/g, '<br>');
          modalDescripcionSection.hidden = false;
        } else {
          modalDescripcionSection.hidden = true;
        }
      }

      if (modalObjetivosSection && modalObjetivos) {
        if (objetivos.length) {
          modalObjetivos.innerHTML = objetivos.map(function (o) { return '<li>' + escapeHtml(o) + '</li>'; }).join('');
          modalObjetivosSection.hidden = false;
        } else {
          modalObjetivosSection.hidden = true;
        }
      }

      if (modalResolucion) {
        if (link && link !== '#') {
          modalResolucion.href = link;
          modalResolucion.title = resolutionText;
          modalResolucion.style.display = '';
        } else {
          modalResolucion.href = '#';
          modalResolucion.style.display = 'none';
        }
      }

      lastFocused = document.activeElement;
      modal.hidden = false;
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', trapFocus);
      requestAnimationFrame(function () { modal.classList.add('grupo-modal--open'); });
      if (modalClose) modalClose.focus();
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.remove('grupo-modal--open');
      setTimeout(function () {
        if (!modal.classList.contains('grupo-modal--open')) {
          modal.hidden = true;
        }
      }, 300);
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', trapFocus);
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
      lastFocused = null;
    }

    function getFocusableElements() {
      if (!modal) return [];
      return Array.from(modal.querySelectorAll(
        'a[href]:not([href="#"]), button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter(function (el) { return el.offsetParent !== null && el.tabIndex >= 0; });
    }

    function trapFocus(e) {
      if (e.key !== 'Tab' || !modal || modal.hidden) return;
      const focusable = getFocusableElements();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    function handleCardActivate(e) {
      const card = e.target.closest('.grupo-card-container');
      if (!card) return;
      if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
      if (e.type === 'keydown') e.preventDefault();
      openModal(card);
    }

    if (grid) {
      grid.addEventListener('click', handleCardActivate);
      grid.addEventListener('keydown', handleCardActivate);
    }

    if (modal) {
      if (modalClose) modalClose.addEventListener('click', closeModal);
      if (modalBtnCerrar) modalBtnCerrar.addEventListener('click', closeModal);
      if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden && modal.classList.contains('grupo-modal--open')) {
          closeModal();
        }
      });
    }

    /* ----------------------------------------------------------------------
       Carga inicial
       ---------------------------------------------------------------------- */
    initFilterVerMas();
    cards.forEach(initCard);
    initFilterCounts();
    filterCards();
  });
})();

(function () {
  'use strict';

  /* ========================================================================
     MÓDULO DE INTERACTIVIDAD PARA DOCENTES RENACYT
     ======================================================================== */
  function initRenacyt() {
    const tableBody = document.getElementById('docentesTableBody');
    if (!tableBody) return;

    // Distribución determinística de niveles para los 60 docentes para aproximar el mockup
    const levelMapping = [
      'IV', 'V', 'VI', 'VII', 'III', 'IV', 'V', 'VI', 'VII', 'II',
      'III', 'IV', 'V', 'VI', 'VII', 'III', 'IV', 'V', 'VI', 'VII',
      'III', 'IV', 'V', 'VI', 'VII', 'III', 'IV', 'V', 'VI', 'VII',
      'III', 'IV', 'V', 'IV', 'V', 'III', 'IV', 'V', 'III', 'IV',
      'V', 'III', 'IV', 'V', 'III', 'IV', 'V', 'III', 'IV', 'V',
      'II', 'II', 'II', 'IV', 'V', 'VI', 'VII', 'IV', 'V', 'I'
    ];

    // Colores muestreados de la imagen de referencia (pie + leyenda comparten paleta)
    const levelDetails = {
      'I': { label: 'Nivel I', color: '#7c3f3f' },
      'II': { label: 'Nivel II', color: '#c0c0c0' },
      'III': { label: 'Nivel III', color: '#d4b896' },
      'IV': { label: 'Nivel IV', color: '#c8b088' },
      'V': { label: 'Nivel V', color: '#a67c52' },
      'VI': { label: 'Nivel VI', color: '#2c2c2c' },
      'VII': { label: 'Nivel VII', color: '#1e7a9e' },
      'ID': { label: 'Investigador Distinguido', color: '#8a93a3' }
    };

    // Colores de las píldoras de nivel en la tabla (paleta propia de la referencia)
    const badgeDetails = {
      'I':   { text: '#8b4040', bg: '#f5e9e9' },
      'II':  { text: '#a0522d', bg: '#fdf0e6' },
      'III': { text: '#8b6914', bg: '#fef3e2' },
      'IV':  { text: '#a67c52', bg: '#f9efe4' },
      'V':   { text: '#1a7a4a', bg: '#e8f5ee' },
      'VI':  { text: '#3a3a3a', bg: '#ececec' },
      'VII': { text: '#1e7a9e', bg: '#e6f2f7' },
      'ID':  { text: '#6b7280', bg: '#f1f2f4' }
    };

    const rows = Array.from(tableBody.querySelectorAll('.docente-row'));

    // Inicializar propiedades de cada docente
    rows.forEach(function (row, index) {
      const id = row.getAttribute('data-id');
      const name = row.getAttribute('data-nombre');
      const gmail = row.getAttribute('data-gmail');
      const carrera = row.getAttribute('data-carrera');

      // Leer campos reales desde la base de datos (si existen)
      const dbCodigo = row.getAttribute('data-codigo-db');
      const dbResolucion = row.getAttribute('data-resolucion-db');
      const dbNivel = row.getAttribute('data-nivel-db');
      const dbEstado = row.getAttribute('data-estado-db');

      // Códigos de fallback determinísticos en caso de campos vacíos en BD
      const fallbackCode = 'P' + String(1760 + index * 13).padStart(6, '0');
      const resNum = String(60 + (index * 7) % 150).padStart(3, '0');
      const fallbackResol = `R.V. ${resNum}-2025-VRI`;
      const fallbackLevel = levelMapping[index % levelMapping.length];

      // Determinar valores finales
      const codeVal = (dbCodigo && dbCodigo.trim() !== '') ? dbCodigo.trim() : fallbackCode;
      const resolVal = (dbResolucion && dbResolucion.trim() !== '') ? dbResolucion.trim() : fallbackResol;
      const level = (dbNivel && dbNivel.trim() !== '') ? dbNivel.trim() : fallbackLevel;
      const estadoVal = (dbEstado && dbEstado.trim() !== '') ? dbEstado.trim() : 'Activo';

      // Actualizar celdas del DOM
      const codeCell = row.querySelector('.col-codigo');
      if (codeCell) codeCell.textContent = codeVal;

      const resCell = row.querySelector('.col-resolucion');
      if (resCell) resCell.textContent = resolVal;
      
      const badgeSpan = row.querySelector('.badge-nivel');
      if (badgeSpan) {
        badgeSpan.textContent = level;
        const badge = badgeDetails[level] || badgeDetails['ID'];
        badgeSpan.style.backgroundColor = badge.bg;
        badgeSpan.style.color = badge.text;
      }

      const estadoSpan = row.querySelector('.badge-estado');
      if (estadoSpan) {
        const estadoText = estadoSpan.querySelector('.badge-estado-text');
        if (estadoText) estadoText.textContent = estadoVal;
        // Cambiar el diseño del badge según el estado para reflejar inactividad
        if (estadoVal === 'Activo') {
          estadoSpan.style.backgroundColor = '#f0fdf4';
          estadoSpan.style.color = '#15803d';
          estadoSpan.style.borderColor = '#bbf7d0';
        } else {
          estadoSpan.style.backgroundColor = '#f1f5f9';
          estadoSpan.style.color = '#64748b';
          estadoSpan.style.borderColor = '#cbd5e1';
        }
      }

      // Guardar en meta atributos para filtros rápidos
      row.setAttribute('data-codigo-meta', codeVal);
      row.setAttribute('data-nivel-meta', level);
      row.setAttribute('data-estado-meta', estadoVal);
    });

    // Ordenar docentes por nivel (Nivel I, II, III, IV, etc.)
    const levelRank = {
      'I': 1,
      'II': 2,
      'III': 3,
      'IV': 4,
      'V': 5,
      'VI': 6,
      'VII': 7,
      'ID': 8
    };

    rows.sort(function (a, b) {
      const lvA = a.getAttribute('data-nivel-meta') || 'ID';
      const lvB = b.getAttribute('data-nivel-meta') || 'ID';
      return levelRank[lvA] - levelRank[lvB];
    });

    // Reordenar físicamente en el DOM para que se rendericen en el orden correcto
    rows.forEach(function (row) {
      tableBody.appendChild(row);
    });

    // Estado de filtros
    let searchQuery = '';
    let selectedCarrera = 'all';
    let selectedEstado = 'all';
    let currentPage = 1;
    const itemsPerPage = 20;

    // Elementos de UI
    const searchInput = document.getElementById('renacytSearch');
    const filterCarrera = document.getElementById('filterCarrera');
    const filterEstado = document.getElementById('filterEstado');
    const paginationControls = document.getElementById('renacytPaginationControls');
    const pageInfo = document.getElementById('renacytPageInfo');
    const noResults = document.getElementById('renacytNoResults');
    const paginationRow = document.getElementById('renacytPaginationRow');
    const btnExport = document.getElementById('btnExport');
    const tableWrapper = tableBody ? tableBody.closest('.table-responsive-wrapper') : null;

    function filterAndPaginate() {
      // 1. Filtrar filas
      const filtered = rows.filter(function (row) {
        const name = row.getAttribute('data-nombre').toLowerCase();
        const code = (row.getAttribute('data-codigo-meta') || '').toLowerCase();
        const carrera = row.getAttribute('data-carrera') || '';
        const estado = row.getAttribute('data-estado-meta') || 'Activo';

        const matchesCarrera = (selectedCarrera === 'all' || carrera === selectedCarrera);
        const matchesEstado = (selectedEstado === 'all' || estado === selectedEstado);
        
        const matchesSearch = searchQuery === '' || 
                              name.includes(searchQuery) || 
                              code.includes(searchQuery) ||
                              carrera.toLowerCase().includes(searchQuery);

        return matchesCarrera && matchesEstado && matchesSearch;
      });

      // 2. Controlar visibilidad del mensaje "Sin resultados"
      if (filtered.length === 0) {
        if (noResults) noResults.classList.remove('d-none');
        if (tableWrapper) tableWrapper.classList.add('d-none');
        if (paginationRow) paginationRow.classList.add('d-none');
        updateChartAndLegend([]);
        return;
      } else {
        if (noResults) noResults.classList.add('d-none');
        if (tableWrapper) tableWrapper.classList.remove('d-none');
        if (paginationRow) paginationRow.classList.remove('d-none');
      }

      // 3. Paginar resultados
      const totalItems = filtered.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      
      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Ocultar todas las filas
      rows.forEach(function(row) {
        row.style.display = 'none';
        row.classList.remove('grupo-fade-in');
      });

      // Mostrar filas de la página actual
      filtered.slice(startIndex, endIndex).forEach(function (row) {
        row.style.display = '';
        row.classList.add('grupo-fade-in');
      });

      // 4. Actualizar controles e info de paginación
      updatePaginationControls(totalPages, totalItems, startIndex + 1, Math.min(endIndex, totalItems));

      // 5. Actualizar gráfico y leyenda dinámicamente según la lista filtrada
      updateChartAndLegend(filtered);
    }

    function updatePaginationControls(totalPages, totalItems, fromItem, toItem) {
      if (pageInfo) {
        pageInfo.innerHTML = `Página <strong>${currentPage}</strong> de <strong>${totalPages}</strong>`;
      }
      if (!paginationControls) return;
      paginationControls.innerHTML = '';

      if (totalPages <= 1) {
        if (paginationRow) paginationRow.classList.add('d-none');
        return;
      }
      if (paginationRow) paginationRow.classList.remove('d-none');

      // Helper único para generar ítems de paginación (anterior / número / siguiente)
      function createNavItem(content, targetPage, options) {
        const opts = options || {};
        const li = document.createElement('li');

        if (opts.disabled) {
          li.className = 'disabled';
          li.innerHTML = `<span${opts.ariaLabel ? ` aria-label="${opts.ariaLabel}"` : ''}>${content}</span>`;
        } else {
          const a = document.createElement('a');
          a.href = '#';
          if (opts.ariaLabel) a.setAttribute('aria-label', opts.ariaLabel);
          if (opts.current) {
            li.className = 'active';
            a.setAttribute('aria-current', 'page');
          }
          a.innerHTML = content;
          a.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = targetPage;
            window.scrollTo({ top: tableBody.offsetTop - 120, behavior: 'smooth' });
            filterAndPaginate();
          });
          li.appendChild(a);
        }
        return li;
      }

      // Anterior (<)
      paginationControls.appendChild(createNavItem('<i class="fa fa-angle-left"></i>', currentPage - 1, {
        disabled: currentPage === 1,
        ariaLabel: 'Página anterior'
      }));

      // Números (1, 2, 3...)
      for (let i = 1; i <= totalPages; i++) {
        paginationControls.appendChild(createNavItem(String(i), i, { current: i === currentPage }));
      }

      // Siguiente (>)
      paginationControls.appendChild(createNavItem('<i class="fa fa-angle-right"></i>', currentPage + 1, {
        disabled: currentPage === totalPages,
        ariaLabel: 'Página siguiente'
      }));
    }

    function updateChartAndLegend(filteredDocs) {
      // Contar niveles
      const counts = { 'I': 0, 'II': 0, 'III': 0, 'IV': 0, 'V': 0, 'VI': 0, 'VII': 0, 'ID': 0 };
      filteredDocs.forEach(row => {
        const level = row.getAttribute('data-nivel-meta');
        if (counts[level] !== undefined) counts[level]++;
      });

      const total = filteredDocs.length;

      let activeCount = 0;
      filteredDocs.forEach(row => {
        if (row.getAttribute('data-estado-meta') === 'Activo') {
          activeCount++;
        }
      });
      
      const summaryTotal = document.getElementById('summaryTotal');
      const summaryActive = document.getElementById('summaryActive');
      if (summaryTotal) summaryTotal.textContent = total;
      if (summaryActive) summaryActive.textContent = activeCount;

      const segmentGroup = document.getElementById('donutSegments');
      if (segmentGroup) segmentGroup.innerHTML = '';

      const legendGrid = document.getElementById('chartLegend');
      if (legendGrid) legendGrid.innerHTML = '';

      // Orden de visualización en la leyenda
      const legendOrder = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'ID'];

      legendOrder.forEach(level => {
        const count = counts[level];
        const color = levelDetails[level].color;
        const label = levelDetails[level].label;

        if (legendGrid) {
          const legendItem = document.createElement('div');
          legendItem.className = 'legend-item';
          legendItem.innerHTML = `
            <span class="legend-color" style="background-color: ${color}"></span>
            <span class="legend-label">${label}</span>
            <span class="legend-count">${count}</span>
          `;
          legendGrid.appendChild(legendItem);
        }
      });

      if (total === 0) return;

      // Orden específico para dibujar los sectores en sentido horario (como el mockup)
      const drawingOrder = ['IV', 'III', 'II', 'I', 'VII', 'VI', 'V', 'ID'];

      let cumulativePercent = -90 / 360; // Empezar a las 12 en punto (como la referencia)

      drawingOrder.forEach(level => {
        const count = counts[level];
        if (count === 0) return;

        const fraction = count / total;
        const color = levelDetails[level].color;
        const percentage = Math.round(fraction * 100);

        if (segmentGroup) {
          const r = 38; // Radio del gráfico de torta
          
          if (fraction > 0.999) {
            // Caso 100% de un nivel
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '50');
            circle.setAttribute('cy', '50');
            circle.setAttribute('r', String(r));
            circle.setAttribute('fill', color);
            circle.setAttribute('stroke', '#ffffff');
            circle.setAttribute('stroke-width', '1.5');
            segmentGroup.appendChild(circle);
          } else {
            // Dibujar sector usando path SVG para pie chart
            const startAngle = 2 * Math.PI * cumulativePercent - Math.PI / 2;
            const endAngle = 2 * Math.PI * (cumulativePercent + fraction) - Math.PI / 2;

            const x1 = 50 + r * Math.cos(startAngle);
            const y1 = 50 + r * Math.sin(startAngle);
            const x2 = 50 + r * Math.cos(endAngle);
            const y2 = 50 + r * Math.sin(endAngle);

            const largeArcFlag = fraction > 0.5 ? 1 : 0;
            const d = `M 50 50 L ${x1.toFixed(3)} ${y1.toFixed(3)} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2.toFixed(3)} ${y2.toFixed(3)} Z`;

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', d);
            path.setAttribute('fill', color);
            path.setAttribute('stroke', '#ffffff');
            path.setAttribute('stroke-width', '1.5');
            segmentGroup.appendChild(path);
          }

          // Dibujar etiqueta de porcentaje
          const midPercent = cumulativePercent + fraction / 2;
          const midAngle = 2 * Math.PI * midPercent - Math.PI / 2;
          const labelDist = 47; // Colocar la etiqueta justo fuera del sector de torta

          const tx = 50 + labelDist * Math.cos(midAngle);
          const ty = 50 + labelDist * Math.sin(midAngle);

          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.setAttribute('x', tx.toFixed(3));
          text.setAttribute('y', (ty + 1.5).toFixed(3)); // Ajuste de centrado vertical

          // Alinear el texto dinámicamente según la posición para que no se superponga con el gráfico
          if (tx < 42) {
            text.setAttribute('text-anchor', 'end');
          } else if (tx > 58) {
            text.setAttribute('text-anchor', 'start');
          } else {
            text.setAttribute('text-anchor', 'middle');
          }

          // La etiqueta hereda el color de su sector (como en el diseño de referencia)
          text.setAttribute('fill', color);
          text.setAttribute('font-size', '5.5');
          text.setAttribute('font-family', "'Inter', sans-serif");
          text.setAttribute('font-weight', '600');
          text.textContent = `${percentage}%`;
          segmentGroup.appendChild(text);
        }

        cumulativePercent += fraction;
      });
    }

    // Eventos de Filtrado
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        searchQuery = searchInput.value.trim().toLowerCase();
        currentPage = 1;
        filterAndPaginate();
      });
    }

    if (filterCarrera) {
      filterCarrera.addEventListener('change', function () {
        selectedCarrera = filterCarrera.value;
        currentPage = 1;
        filterAndPaginate();
      });
    }

    if (filterEstado) {
      filterEstado.addEventListener('change', function () {
        selectedEstado = filterEstado.value;
        currentPage = 1;
        filterAndPaginate();
      });
    }

    // Lógica de Exportar Lista (Genera un Excel real con anchos de columna y estilos)
    function exportarLista() {
      let rowsHtml = '';
        
        rows.forEach(row => {
          if (row.style.display !== 'none') {
            const codigoCell = row.querySelector('.col-codigo');
            const codigo = codigoCell ? codigoCell.textContent.trim() : '';
            const nombreCell = row.querySelector('.investigador-name');
            const nombre = nombreCell ? nombreCell.textContent.trim() : '';
            const gmail = row.getAttribute('data-gmail') || '';
            const facultadCell = row.querySelector('.col-facultad');
            const facultad = facultadCell ? facultadCell.textContent.trim() : '';
            const nivelCell = row.querySelector('.badge-nivel');
            const nivel = nivelCell ? nivelCell.textContent.trim() : '';
            const estadoCell = row.querySelector('.badge-estado');
            const estado = estadoCell ? estadoCell.textContent.trim() : '';
            
            rowsHtml += `
              <tr>
                <td style="font-weight: bold; text-align: center; border: 1px solid #cbd5e1; padding: 8px;">${codigo}</td>
                <td style="text-transform: uppercase; border: 1px solid #cbd5e1; padding: 8px;">${nombre}</td>
                <td style="border: 1px solid #cbd5e1; padding: 8px;">${gmail}</td>
                <td style="border: 1px solid #cbd5e1; padding: 8px;">${facultad}</td>
                <td style="text-align: center; font-weight: bold; border: 1px solid #cbd5e1; padding: 8px;">${nivel}</td>
                <td style="text-align: center; border: 1px solid #cbd5e1; padding: 8px;">${estado}</td>
              </tr>
            `;
          }
        });

        // Plantilla HTML estructurada para emular XLS con soporte de estilos y rejillas
        const excelTemplate = `
          <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
          <head>
          <meta charset="utf-8">
          <!--[if gte mso 9]>
          <xml>
            <x:ExcelWorkbook>
              <x:ExcelWorksheets>
                <x:ExcelWorksheet>
                  <x:Name>Docentes RENACYT</x:Name>
                  <x:WorksheetOptions>
                    <x:DisplayGridlines/>
                  </x:WorksheetOptions>
                </x:ExcelWorksheet>
              </x:ExcelWorksheets>
            </x:ExcelWorkbook>
          </xml>
          <![endif]-->
          <style>
            table { border-collapse: collapse; font-family: 'Segoe UI', Arial, sans-serif; font-size: 11pt; }
            th { background-color: #0F3073; color: #ffffff; font-weight: bold; text-align: left; height: 35px; border: 1px solid #cbd5e1; }
            td { vertical-align: middle; height: 28px; }
          </style>
          </head>
          <body>
          <table>
            <colgroup>
              <col style="width: 140px; min-width: 140px;" />
              <col style="width: 280px; min-width: 280px;" />
              <col style="width: 280px; min-width: 280px;" />
              <col style="width: 280px; min-width: 280px;" />
              <col style="width: 90px; min-width: 90px;" />
              <col style="width: 110px; min-width: 110px;" />
            </colgroup>
            <thead>
              <tr>
                <th style="text-align: center; padding: 8px; border: 1px solid #0f3073;">CÓDIGO RENACYT</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">INVESTIGADOR</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">CORREO</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">FACULTAD</th>
                <th style="text-align: center; padding: 8px; border: 1px solid #0f3073;">NIVEL</th>
                <th style="text-align: center; padding: 8px; border: 1px solid #0f3073;">ESTADO</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
          </body>
          </html>
        `;

        // Generar Blob con codificación UTF-8 e inyectar BOM para acentos/tildes
        const blob = new Blob(["\uFEFF" + excelTemplate], { type: "application/vnd.ms-excel;charset=utf-8" });
        const encodedUri = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "docentes_renacyt_unamba.xls");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(encodedUri);
    }

    if (btnExport) {
      btnExport.addEventListener('click', function (e) {
        e.preventDefault();
        exportarLista();
      });
    }

    // Inicialización
    filterAndPaginate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRenacyt);
  } else {
    initRenacyt();
  }
})();

(function () {
  'use strict';

  /* ========================================================================
     MÓDULO DE INTERACTIVIDAD PARA DOCENTES INVESTIGADORES
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('docentesInvTableBody');
    if (!tableBody) return;

    const levelDetails = {
      'A': { label: 'Nivel A', color: '#0f3073' },
      'B': { label: 'Nivel B', color: '#caa47e' },
      'C': { label: 'Nivel C', color: '#7b2cbf' }
    };

    const deptColors = [
      '#0f3073', '#caa47e', '#7b2cbf', '#2980b9', '#8d5b4c',
      '#9e7a56', '#2e2e2e', '#15803d', '#eab308', '#ec4899', '#f97316'
    ];

    const rows = Array.from(tableBody.querySelectorAll('.docentes-inv-row'));

    function cleanDeptName(name) {
      if (!name) return 'Otros';
      return name.replace(/^(Departamento Académico de|Departamento académico de|Escuela Académica Profesional de|Escuela Profesional de|Facultad de)\s+/i, '').trim();
    }

    // Inicializar fallbacks de nivel, resolución y estado
    rows.forEach(function (row, index) {
      const dbNivel = row.getAttribute('data-nivel-db');
      const dbEstado = row.getAttribute('data-estado-db');
      const dbResolucion = row.getAttribute('data-resolucion-db');

      // Nivel fallback
      let level = 'A';
      if (dbNivel && dbNivel.trim() !== '') {
        const cleanedNivel = dbNivel.trim().toUpperCase();
        if (cleanedNivel === '1' || cleanedNivel === 'A') level = 'A';
        else if (cleanedNivel === '2' || cleanedNivel === 'B') level = 'B';
        else if (cleanedNivel === '3' || cleanedNivel === 'C') level = 'C';
      } else {
        const lvMapping = ['A', 'B', 'C'];
        level = lvMapping[index % lvMapping.length];
      }

      // Resolución fallback
      const resolNum = String(100 + (index * 9) % 250).padStart(3, '0');
      const resolVal = (dbResolucion && dbResolucion.trim() !== '') ? dbResolucion.trim() : `R.V. ${resolNum}-2024-VRI`;
      
      // Estado fallback: 90% activo, 10% inactivo para pruebas de UX/UI
      const estadoVal = (dbEstado && dbEstado.trim() !== '') ? dbEstado.trim() : (index % 12 === 0 ? 'Inactivo' : 'Activo');

      // Actualizar celdas
      const resCell = row.querySelector('.col-resolucion');
      if (resCell) resCell.textContent = resolVal;

      const badgeSpan = row.querySelector('.badge-nivel');
      if (badgeSpan) {
        badgeSpan.textContent = level;
        badgeSpan.style.backgroundColor = levelDetails[level].color;
      }

      const estadoSpan = row.querySelector('.badge-estado');
      if (estadoSpan) {
        estadoSpan.textContent = estadoVal;
        if (estadoVal === 'Activo') {
          estadoSpan.style.backgroundColor = '#f0fdf4';
          estadoSpan.style.color = '#15803d';
          estadoSpan.style.borderColor = '#bbf7d0';
        } else {
          estadoSpan.style.backgroundColor = '#fef2f2';
          estadoSpan.style.color = '#991b1b';
          estadoSpan.style.borderColor = '#fca5a5';
        }
      }

      row.setAttribute('data-nivel-meta', level);
      row.setAttribute('data-estado-meta', estadoVal);
      row.setAttribute('data-resolucion-meta', resolVal);
    });

    // Ordenar docentes investigadores por nivel A, B, C y luego por N°
    const levelRank = { 'A': 1, 'B': 2, 'C': 3 };
    rows.sort(function (a, b) {
      const lvA = a.getAttribute('data-nivel-meta');
      const lvB = b.getAttribute('data-nivel-meta');
      if (lvA !== lvB) {
        return levelRank[lvA] - levelRank[lvB];
      }
      return parseInt(a.getAttribute('data-n')) - parseInt(b.getAttribute('data-n'));
    });

    // Reordenar físicamente en el DOM
    rows.forEach(function (row) {
      tableBody.appendChild(row);
    });

    // Cargar selector de carreras dinámicamente
    const filterCarrera = document.getElementById('docentesInvFilterCarrera');
    if (filterCarrera) {
      const uniqueDepts = {};
      rows.forEach(row => {
        const dept = row.getAttribute('data-departamento');
        if (dept && dept.trim() !== '') {
          uniqueDepts[dept] = cleanDeptName(dept);
        }
      });
      
      const sortedDepts = Object.keys(uniqueDepts).sort((a, b) => uniqueDepts[a].localeCompare(uniqueDepts[b]));
      sortedDepts.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = uniqueDepts[dept];
        filterCarrera.appendChild(option);
      });
    }

    // Variables de control de filtrado
    let searchQuery = '';
    let selectedCarrera = 'all';
    let selectedEstado = 'all';
    let currentPage = 1;
    const itemsPerPage = 20;

    const searchInput = document.getElementById('docentesInvSearch');
    const filterEstado = document.getElementById('docentesInvFilterEstado');
    const paginationControls = document.getElementById('docentesInvPaginationControls');
    const pageInfo = document.getElementById('docentesInvPageInfo');
    const noResults = document.getElementById('docentesInvNoResults');
    const paginationRow = document.getElementById('docentesInvPaginationRow');
    const btnExport = document.getElementById('docentesInvExport');

    function filterAndPaginate() {
      const filtered = rows.filter(function (row) {
        const name = row.getAttribute('data-nombre').toLowerCase();
        const project = row.getAttribute('data-proyecto').toLowerCase();
        const dept = (row.getAttribute('data-departamento') || '').toLowerCase();
        const estado = row.getAttribute('data-estado-meta');

        const matchesCarrera = (selectedCarrera === 'all' || row.getAttribute('data-departamento') === selectedCarrera);
        const matchesEstado = (selectedEstado === 'all' || estado === selectedEstado);

        const matchesSearch = searchQuery === '' ||
                              name.includes(searchQuery) ||
                              project.includes(searchQuery) ||
                              dept.includes(searchQuery);

        return matchesCarrera && matchesEstado && matchesSearch;
      });

      if (filtered.length === 0) {
        if (noResults) noResults.classList.remove('d-none');
        if (tableBody) tableBody.parentElement.classList.add('d-none');
        if (paginationRow) paginationRow.classList.add('d-none');
        updateChartAndLegend([]);
        return;
      } else {
        if (noResults) noResults.classList.add('d-none');
        if (tableBody) tableBody.parentElement.classList.remove('d-none');
        if (paginationRow) paginationRow.classList.remove('d-none');
      }

      const totalItems = filtered.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      rows.forEach(function (row) {
        row.style.display = 'none';
        row.classList.remove('grupo-fade-in');
      });

      filtered.slice(startIndex, endIndex).forEach(function (row) {
        row.style.display = '';
        row.classList.add('grupo-fade-in');
      });

      updatePaginationControls(totalPages, totalItems, startIndex + 1, Math.min(endIndex, totalItems));
      updateChartAndLegend(filtered);
    }

    function updatePaginationControls(totalPages, totalItems, fromItem, toItem) {
      if (pageInfo) {
        pageInfo.textContent = `Mostrando ${fromItem}º al ${toItem}º docentes`;
      }
      if (!paginationControls) return;
      paginationControls.innerHTML = '';

      if (totalPages <= 1) {
        if (paginationRow) paginationRow.classList.add('d-none');
        return;
      }
      if (paginationRow) paginationRow.classList.remove('d-none');

      // Botón Anterior
      const prevLi = document.createElement('li');
      if (currentPage === 1) {
        prevLi.className = 'disabled';
        prevLi.innerHTML = `<span><i class="fa fa-angle-left"></i></span>`;
      } else {
        const prevA = document.createElement('a');
        prevA.innerHTML = `<i class="fa fa-angle-left"></i>`;
        prevA.addEventListener('click', function (e) {
          e.preventDefault();
          currentPage--;
          window.scrollTo({ top: tableBody.offsetTop - 120, behavior: 'smooth' });
          filterAndPaginate();
        });
        prevLi.appendChild(prevA);
      }
      paginationControls.appendChild(prevLi);

      // Páginas Numéricas
      for (let i = 1; i <= totalPages; i++) {
        const pageLi = document.createElement('li');
        if (i === currentPage) {
          pageLi.className = 'active';
          pageLi.innerHTML = `<span>${i}</span>`;
        } else {
          const pageA = document.createElement('a');
          pageA.textContent = i;
          pageA.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = i;
            window.scrollTo({ top: tableBody.offsetTop - 120, behavior: 'smooth' });
            filterAndPaginate();
          });
          pageLi.appendChild(pageA);
        }
        paginationControls.appendChild(pageLi);
      }

      // Siguiente Flecha
      const nextIconLi = document.createElement('li');
      if (currentPage === totalPages) {
        nextIconLi.className = 'disabled';
        nextIconLi.innerHTML = `<span><i class="fa fa-angle-right"></i></span>`;
      } else {
        const nextIconA = document.createElement('a');
        nextIconA.innerHTML = `<i class="fa fa-angle-right"></i>`;
        nextIconA.addEventListener('click', function (e) {
          e.preventDefault();
          currentPage++;
          window.scrollTo({ top: tableBody.offsetTop - 120, behavior: 'smooth' });
          filterAndPaginate();
        });
        nextIconLi.appendChild(nextIconA);
      }
      paginationControls.appendChild(nextIconLi);

      // Siguiente Texto
      const nextTextLi = document.createElement('li');
      nextTextLi.className = 'pagination-text-btn';
      if (currentPage === totalPages) {
        nextTextLi.classList.add('disabled');
        nextTextLi.innerHTML = `<span>Siguiente</span>`;
      } else {
        const nextTextA = document.createElement('a');
        nextTextA.textContent = 'Siguiente';
        nextTextA.addEventListener('click', function (e) {
          e.preventDefault();
          currentPage++;
          window.scrollTo({ top: tableBody.offsetTop - 120, behavior: 'smooth' });
          filterAndPaginate();
        });
        nextTextLi.appendChild(nextTextA);
      }
      paginationControls.appendChild(nextTextLi);
    }

    function updateChartAndLegend(filteredDocs) {
      const counts = {};
      filteredDocs.forEach(row => {
        const dept = row.getAttribute('data-departamento') || 'Otros';
        counts[dept] = (counts[dept] || 0) + 1;
      });

      const total = filteredDocs.length;
      let activeCount = 0;
      filteredDocs.forEach(row => {
        if (row.getAttribute('data-estado-meta') === 'Activo') {
          activeCount++;
        }
      });

      const summaryTotal = document.getElementById('docentesInvTotal');
      const summaryActive = document.getElementById('docentesInvActive');
      if (summaryTotal) summaryTotal.textContent = total;
      if (summaryActive) summaryActive.textContent = activeCount;

      const segmentGroup = document.getElementById('docentesInvSegments');
      if (segmentGroup) segmentGroup.innerHTML = '';

      const legendGrid = document.getElementById('docentesInvLegend');
      if (legendGrid) legendGrid.innerHTML = '';

      if (total === 0) return;

      const sortedDepts = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

      // Mapear colores
      const colorsMap = {};
      sortedDepts.forEach((dept, i) => {
        colorsMap[dept] = deptColors[i % deptColors.length];
      });

      // Pintar leyenda
      sortedDepts.forEach(dept => {
        const count = counts[dept];
        const color = colorsMap[dept];
        const cleanName = cleanDeptName(dept);

        if (legendGrid) {
          const legendItem = document.createElement('div');
          legendItem.className = 'legend-item';
          legendItem.innerHTML = `
            <span class="legend-color" style="background-color: ${color}"></span>
            <span class="legend-label" title="${dept}">${cleanName}</span>
            <span class="legend-count">${count}</span>
          `;
          legendGrid.appendChild(legendItem);
        }
      });

      // Dibujar SVG Sectores
      let cumulativePercent = -60 / 360;

      sortedDepts.forEach(dept => {
        const count = counts[dept];
        const fraction = count / total;
        const color = colorsMap[dept];
        const percentage = Math.round(fraction * 100);

        if (segmentGroup && fraction > 0) {
          const r = 38;
          if (fraction > 0.999) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '50');
            circle.setAttribute('cy', '50');
            circle.setAttribute('r', String(r));
            circle.setAttribute('fill', color);
            circle.setAttribute('stroke', '#ffffff');
            circle.setAttribute('stroke-width', '1.5');
            segmentGroup.appendChild(circle);
          } else {
            const startAngle = 2 * Math.PI * cumulativePercent - Math.PI / 2;
            const endAngle = 2 * Math.PI * (cumulativePercent + fraction) - Math.PI / 2;

            const x1 = 50 + r * Math.cos(startAngle);
            const y1 = 50 + r * Math.sin(startAngle);
            const x2 = 50 + r * Math.cos(endAngle);
            const y2 = 50 + r * Math.sin(endAngle);

            const largeArcFlag = fraction > 0.5 ? 1 : 0;
            const d = `M 50 50 L ${x1.toFixed(3)} ${y1.toFixed(3)} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2.toFixed(3)} ${y2.toFixed(3)} Z`;

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', d);
            path.setAttribute('fill', color);
            path.setAttribute('stroke', '#ffffff');
            path.setAttribute('stroke-width', '1.5');
            segmentGroup.appendChild(path);
          }

          // Etiqueta radial exterior
          const midPercent = cumulativePercent + fraction / 2;
          const midAngle = 2 * Math.PI * midPercent - Math.PI / 2;
          const labelDist = 47;

          const tx = 50 + labelDist * Math.cos(midAngle);
          const ty = 50 + labelDist * Math.sin(midAngle);

          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.setAttribute('x', tx.toFixed(3));
          text.setAttribute('y', (ty + 1.5).toFixed(3));

          if (tx < 42) text.setAttribute('text-anchor', 'end');
          else if (tx > 58) text.setAttribute('text-anchor', 'start');
          else text.setAttribute('text-anchor', 'middle');

          text.setAttribute('fill', '#4b5563');
          text.setAttribute('font-size', '5.5');
          text.setAttribute('font-family', "'Inter', sans-serif");
          text.setAttribute('font-weight', '600');
          text.textContent = `${percentage}%`;
          segmentGroup.appendChild(text);
        }

        cumulativePercent += fraction;
      });
    }

    // Manejar eventos de filtrado
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        searchQuery = searchInput.value.trim().toLowerCase();
        currentPage = 1;
        filterAndPaginate();
      });
    }

    if (filterCarrera) {
      filterCarrera.addEventListener('change', function () {
        selectedCarrera = filterCarrera.value;
        currentPage = 1;
        filterAndPaginate();
      });
    }

    if (filterEstado) {
      filterEstado.addEventListener('change', function () {
        selectedEstado = filterEstado.value;
        currentPage = 1;
        filterAndPaginate();
      });
    }

    // Exportar Excel
    if (btnExport) {
      btnExport.addEventListener('click', function (e) {
        e.preventDefault();

        let rowsHtml = '';
        rows.forEach(row => {
          if (row.style.display !== 'none') {
            const n = row.getAttribute('data-n') || '';
            const nombre = (row.getAttribute('data-nombre') || '').toUpperCase();
            const correo = row.getAttribute('data-correo') || '';
            const resolucion = row.getAttribute('data-resolucion-meta') || '';
            const departamento = row.getAttribute('data-departamento') || '';
            const nivel = row.getAttribute('data-nivel-meta') || '';
            const estado = row.getAttribute('data-estado-meta') || '';
            const proyectoCell = row.querySelector('.col-proyecto');
            const proyecto = proyectoCell ? proyectoCell.textContent.trim() : '';

            rowsHtml += `
              <tr>
                <td style="font-weight: bold; text-align: center; border: 1px solid #cbd5e1; padding: 8px;">${n}</td>
                <td style="text-transform: uppercase; border: 1px solid #cbd5e1; padding: 8px;">${nombre}</td>
                <td style="border: 1px solid #cbd5e1; padding: 8px;">${correo}</td>
                <td style="border: 1px solid #cbd5e1; padding: 8px;">${proyecto}</td>
                <td style="border: 1px solid #cbd5e1; padding: 8px;">${departamento}</td>
                <td style="text-align: center; font-weight: bold; border: 1px solid #cbd5e1; padding: 8px;">${nivel}</td>
                <td style="text-align: center; border: 1px solid #cbd5e1; padding: 8px;">${estado}</td>
                <td style="border: 1px solid #cbd5e1; padding: 8px;">${resolucion}</td>
              </tr>
            `;
          }
        });

        const excelTemplate = `
          <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
          <head>
          <meta charset="utf-8">
          <!--[if gte mso 9]>
          <xml>
            <x:ExcelWorkbook>
              <x:ExcelWorksheets>
                <x:ExcelWorksheet>
                  <x:Name>Docentes Investigadores</x:Name>
                  <x:WorksheetOptions>
                    <x:DisplayGridlines/>
                  </x:WorksheetOptions>
                </x:ExcelWorksheet>
              </x:ExcelWorksheets>
            </x:ExcelWorkbook>
          </xml>
          <![endif]-->
          <style>
            table { border-collapse: collapse; font-family: 'Segoe UI', Arial, sans-serif; font-size: 11pt; }
            th { background-color: #0F3073; color: #ffffff; font-weight: bold; text-align: left; height: 35px; border: 1px solid #cbd5e1; }
            td { vertical-align: middle; height: 28px; }
          </style>
          </head>
          <body>
          <table>
            <colgroup>
              <col style="width: 60px; min-width: 60px;" />
              <col style="width: 250px; min-width: 250px;" />
              <col style="width: 200px; min-width: 200px;" />
              <col style="width: 350px; min-width: 350px;" />
              <col style="width: 250px; min-width: 250px;" />
              <col style="width: 80px; min-width: 80px;" />
              <col style="width: 100px; min-width: 100px;" />
              <col style="width: 180px; min-width: 180px;" />
            </colgroup>
            <thead>
              <tr>
                <th style="text-align: center; padding: 8px; border: 1px solid #0f3073;">N°</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">INVESTIGADOR</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">CORREO</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">PROYECTO</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">DEPARTAMENTO ACADÉMICO</th>
                <th style="text-align: center; padding: 8px; border: 1px solid #0f3073;">NIVEL</th>
                <th style="text-align: center; padding: 8px; border: 1px solid #0f3073;">ESTADO</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">RESOLUCIÓN VRI</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
          </body>
          </html>
        `;

        const blob = new Blob(["\uFEFF" + excelTemplate], { type: "application/vnd.ms-excel;charset=utf-8" });
        const encodedUri = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "docentes_investigadores_unamba.xls");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(encodedUri);
      });
    }

    filterAndPaginate();
  });
})();

(function () {
  'use strict';

  /* ========================================================================
     MÓDULO DE INTERACTIVIDAD PARA ALUMNOS INVESTIGADORES
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('alumnosInvTableBody');
    if (!tableBody) return;

    const schoolColors = {
      'Ciencia Política y Gobernabilidad': '#7b2cbf',
      'Educación Inicial Intercultural Bilingüe': '#caa47e',
      'Ingeniería Informática y Sistemas': '#0f3073',
      'Medicina Veterinaria y Zootecnia': '#15803d',
      'Otros': '#64748b'
    };

    const concursoLabels = {
      '1': 'Concurso 2018',
      '2': 'Concurso 2019-I',
      '3': 'Concurso 2019-II',
      '4': 'Concurso 2022-I',
      '5': 'Concurso 2022-II',
      '6': 'Concurso 2023-I',
      '7': 'Concurso 2023-II',
      '8': 'Concurso 2024-I',
      '9': 'Concurso 2024-II',
      '10': 'Concurso 2025-I',
      '11': 'Concurso 2025-II',
      '12': 'Concurso 2026-I',
      '13': 'Concurso 2026-II'
    };

    const rows = Array.from(tableBody.querySelectorAll('.alumnos-inv-row'));

    function getFallbackConcurso(projectName, index) {
      if (projectName) {
        const text = projectName.toLowerCase();
        if (text.includes('2018')) return 'Concurso 2018';
        if (text.includes('2019')) return 'Concurso 2019-I';
        if (text.includes('2022')) return 'Concurso 2022-I';
        if (text.includes('2023')) return 'Concurso 2023-I';
        if (text.includes('2024')) return 'Concurso 2024-I';
      }
      const labels = Object.values(concursoLabels);
      return labels[index % labels.length];
    }

    // Inicializar concurso
    rows.forEach(function (row, index) {
      const dbConcurso = row.getAttribute('data-concurso-db');
      const dbConcursoKey = row.getAttribute('data-concurso-key');
      const proyecto = row.getAttribute('data-proyecto');

      let concursoVal = '';
      if (dbConcurso && dbConcurso.trim() !== '') {
        concursoVal = dbConcurso.trim();
      } else if (dbConcursoKey && concursoLabels[dbConcursoKey]) {
        concursoVal = concursoLabels[dbConcursoKey];
      } else {
        concursoVal = getFallbackConcurso(proyecto, index);
      }

      const badge = row.querySelector('.badge-concurso');
      if (badge) {
        badge.textContent = concursoVal;
      }
      row.setAttribute('data-concurso-meta', concursoVal);
    });

    // Ordenar por N°
    rows.sort(function (a, b) {
      return parseInt(a.getAttribute('data-n')) - parseInt(b.getAttribute('data-n'));
    });

    // Reordenar físicamente en el DOM
    rows.forEach(function (row) {
      tableBody.appendChild(row);
    });

    // Cargar selector de escuelas dinámicamente
    const filterCarrera = document.getElementById('alumnosInvFilterCarrera');
    if (filterCarrera) {
      const uniqueSchools = {};
      rows.forEach(row => {
        const school = row.getAttribute('data-escuela');
        if (school && school.trim() !== '') {
          uniqueSchools[school] = school;
        }
      });
      const sortedSchools = Object.keys(uniqueSchools).sort();
      sortedSchools.forEach(school => {
        const option = document.createElement('option');
        option.value = school;
        option.textContent = school;
        filterCarrera.appendChild(option);
      });
    }

    // Controladores de filtros
    let searchQuery = '';
    let selectedCarrera = 'all';
    let selectedConcurso = 'all';
    let currentPage = 1;
    const itemsPerPage = 20;

    const searchInput = document.getElementById('alumnosInvSearch');
    const filterConcurso = document.getElementById('alumnosInvFilterConcurso');
    const paginationControls = document.getElementById('alumnosInvPaginationControls');
    const pageInfo = document.getElementById('alumnosInvPageInfo');
    const noResults = document.getElementById('alumnosInvNoResults');
    const paginationRow = document.getElementById('alumnosInvPaginationRow');
    const btnExport = document.getElementById('alumnosInvExport');

    function filterAndPaginate() {
      const filtered = rows.filter(function (row) {
        const responsable = row.getAttribute('data-responsable').toLowerCase();
        const asesor = row.getAttribute('data-asesor').toLowerCase();
        const project = row.getAttribute('data-proyecto').toLowerCase();
        const school = (row.getAttribute('data-escuela') || '').toLowerCase();
        const concurso = row.getAttribute('data-concurso-meta');
        const concursoKey = row.getAttribute('data-concurso-key');

        const matchesCarrera = (selectedCarrera === 'all' || row.getAttribute('data-escuela') === selectedCarrera);
        
        let matchesConcurso = false;
        if (selectedConcurso === 'all') {
          matchesConcurso = true;
        } else {
          const selectedLabel = concursoLabels[selectedConcurso];
          matchesConcurso = (concurso === selectedLabel || concursoKey === selectedConcurso);
        }

        const matchesSearch = searchQuery === '' ||
                              responsable.includes(searchQuery) ||
                              asesor.includes(searchQuery) ||
                              project.includes(searchQuery) ||
                              school.includes(searchQuery);

        return matchesCarrera && matchesConcurso && matchesSearch;
      });

      if (filtered.length === 0) {
        if (noResults) noResults.classList.remove('d-none');
        if (tableBody) tableBody.parentElement.classList.add('d-none');
        if (paginationRow) paginationRow.classList.add('d-none');
        updateChartAndLegend([]);
        return;
      } else {
        if (noResults) noResults.classList.add('d-none');
        if (tableBody) tableBody.parentElement.classList.remove('d-none');
        if (paginationRow) paginationRow.classList.remove('d-none');
      }

      const totalItems = filtered.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      rows.forEach(function (row) {
        row.style.display = 'none';
        row.classList.remove('grupo-fade-in');
      });

      filtered.slice(startIndex, endIndex).forEach(function (row) {
        row.style.display = '';
        row.classList.add('grupo-fade-in');
      });

      updatePaginationControls(totalPages, totalItems, startIndex + 1, Math.min(endIndex, totalItems));
      updateChartAndLegend(filtered);
    }

    function updatePaginationControls(totalPages, totalItems, fromItem, toItem) {
      if (pageInfo) {
        pageInfo.textContent = `Mostrando ${fromItem}º al ${toItem}º alumnos`;
      }
      if (!paginationControls) return;
      paginationControls.innerHTML = '';

      if (totalPages <= 1) {
        if (paginationRow) paginationRow.classList.add('d-none');
        return;
      }
      if (paginationRow) paginationRow.classList.remove('d-none');

      // Anterior Flecha
      const prevLi = document.createElement('li');
      if (currentPage === 1) {
        prevLi.className = 'disabled';
        prevLi.innerHTML = `<span><i class="fa fa-angle-left"></i></span>`;
      } else {
        const prevA = document.createElement('a');
        prevA.innerHTML = `<i class="fa fa-angle-left"></i>`;
        prevA.addEventListener('click', function (e) {
          e.preventDefault();
          currentPage--;
          window.scrollTo({ top: tableBody.offsetTop - 120, behavior: 'smooth' });
          filterAndPaginate();
        });
        prevLi.appendChild(prevA);
      }
      paginationControls.appendChild(prevLi);

      // Páginas Numéricas
      for (let i = 1; i <= totalPages; i++) {
        const pageLi = document.createElement('li');
        if (i === currentPage) {
          pageLi.className = 'active';
          pageLi.innerHTML = `<span>${i}</span>`;
        } else {
          const pageA = document.createElement('a');
          pageA.textContent = i;
          pageA.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = i;
            window.scrollTo({ top: tableBody.offsetTop - 120, behavior: 'smooth' });
            filterAndPaginate();
          });
          pageLi.appendChild(pageA);
        }
        paginationControls.appendChild(pageLi);
      }

      // Siguiente Flecha
      const nextIconLi = document.createElement('li');
      if (currentPage === totalPages) {
        nextIconLi.className = 'disabled';
        nextIconLi.innerHTML = `<span><i class="fa fa-angle-right"></i></span>`;
      } else {
        const nextIconA = document.createElement('a');
        nextIconA.innerHTML = `<i class="fa fa-angle-right"></i>`;
        nextIconA.addEventListener('click', function (e) {
          e.preventDefault();
          currentPage++;
          window.scrollTo({ top: tableBody.offsetTop - 120, behavior: 'smooth' });
          filterAndPaginate();
        });
        nextIconLi.appendChild(nextIconA);
      }
      paginationControls.appendChild(nextIconLi);

      // Siguiente Texto
      const nextTextLi = document.createElement('li');
      nextTextLi.className = 'pagination-text-btn';
      if (currentPage === totalPages) {
        nextTextLi.classList.add('disabled');
        nextTextLi.innerHTML = `<span>Siguiente</span>`;
      } else {
        const nextTextA = document.createElement('a');
        nextTextA.textContent = 'Siguiente';
        nextTextA.addEventListener('click', function (e) {
          e.preventDefault();
          currentPage++;
          window.scrollTo({ top: tableBody.offsetTop - 120, behavior: 'smooth' });
          filterAndPaginate();
        });
        nextTextLi.appendChild(nextTextA);
      }
      paginationControls.appendChild(nextTextLi);
    }

    function updateChartAndLegend(filteredRows) {
      const counts = {};
      filteredRows.forEach(row => {
        const school = row.getAttribute('data-escuela') || 'Otros';
        counts[school] = (counts[school] || 0) + 1;
      });

      const total = filteredRows.length;
      const summaryTotal = document.getElementById('alumnosInvTotal');
      if (summaryTotal) summaryTotal.textContent = total;

      const segmentGroup = document.getElementById('alumnosInvSegments');
      if (segmentGroup) segmentGroup.innerHTML = '';

      const legendGrid = document.getElementById('alumnosInvLegend');
      if (legendGrid) legendGrid.innerHTML = '';

      if (total === 0) return;

      const sortedSchools = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

      // Pintar leyenda
      sortedSchools.forEach(school => {
        const count = counts[school];
        const color = schoolColors[school] || schoolColors['Otros'];

        if (legendGrid) {
          const legendItem = document.createElement('div');
          legendItem.className = 'legend-item';
          legendItem.innerHTML = `
            <span class="legend-color" style="background-color: ${color}"></span>
            <span class="legend-label">${school}</span>
            <span class="legend-count">${count}</span>
          `;
          legendGrid.appendChild(legendItem);
        }
      });

      // Dibujar SVG Sectores
      let cumulativePercent = -60 / 360;

      sortedSchools.forEach(school => {
        const count = counts[school];
        const fraction = count / total;
        const color = schoolColors[school] || schoolColors['Otros'];
        const percentage = Math.round(fraction * 100);

        if (segmentGroup && fraction > 0) {
          const r = 38;
          if (fraction > 0.999) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '50');
            circle.setAttribute('cy', '50');
            circle.setAttribute('r', String(r));
            circle.setAttribute('fill', color);
            circle.setAttribute('stroke', '#ffffff');
            circle.setAttribute('stroke-width', '1.5');
            segmentGroup.appendChild(circle);
          } else {
            const startAngle = 2 * Math.PI * cumulativePercent - Math.PI / 2;
            const endAngle = 2 * Math.PI * (cumulativePercent + fraction) - Math.PI / 2;

            const x1 = 50 + r * Math.cos(startAngle);
            const y1 = 50 + r * Math.sin(startAngle);
            const x2 = 50 + r * Math.cos(endAngle);
            const y2 = 50 + r * Math.sin(endAngle);

            const largeArcFlag = fraction > 0.5 ? 1 : 0;
            const d = `M 50 50 L ${x1.toFixed(3)} ${y1.toFixed(3)} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2.toFixed(3)} ${y2.toFixed(3)} Z`;

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', d);
            path.setAttribute('fill', color);
            path.setAttribute('stroke', '#ffffff');
            path.setAttribute('stroke-width', '1.5');
            segmentGroup.appendChild(path);
          }

          // Etiqueta radial exterior
          const midPercent = cumulativePercent + fraction / 2;
          const midAngle = 2 * Math.PI * midPercent - Math.PI / 2;
          const labelDist = 47;

          const tx = 50 + labelDist * Math.cos(midAngle);
          const ty = 50 + labelDist * Math.sin(midAngle);

          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.setAttribute('x', tx.toFixed(3));
          text.setAttribute('y', (ty + 1.5).toFixed(3));

          if (tx < 42) text.setAttribute('text-anchor', 'end');
          else if (tx > 58) text.setAttribute('text-anchor', 'start');
          else text.setAttribute('text-anchor', 'middle');

          text.setAttribute('fill', '#4b5563');
          text.setAttribute('font-size', '5.5');
          text.setAttribute('font-family', "'Inter', sans-serif");
          text.setAttribute('font-weight', '600');
          text.textContent = `${percentage}%`;
          segmentGroup.appendChild(text);
        }

        cumulativePercent += fraction;
      });
    }

    // Manejar eventos
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        searchQuery = searchInput.value.trim().toLowerCase();
        currentPage = 1;
        filterAndPaginate();
      });
    }

    if (filterCarrera) {
      filterCarrera.addEventListener('change', function () {
        selectedCarrera = filterCarrera.value;
        currentPage = 1;
        filterAndPaginate();
      });
    }

    if (filterConcurso) {
      filterConcurso.addEventListener('change', function () {
        selectedConcurso = filterConcurso.value;
        currentPage = 1;
        filterAndPaginate();
      });
    }

    // Exportar Excel
    if (btnExport) {
      btnExport.addEventListener('click', function (e) {
        e.preventDefault();

        let rowsHtml = '';
        rows.forEach(row => {
          if (row.style.display !== 'none') {
            const n = row.getAttribute('data-n') || '';
            const asesor = row.getAttribute('data-asesor') || '';
            const responsable = (row.getAttribute('data-responsable') || '').toUpperCase();
            const escuela = row.getAttribute('data-escuela') || '';
            const monto = row.getAttribute('data-monto') || '';
            const concurso = row.getAttribute('data-concurso-meta') || '';
            const proyectoCell = row.querySelector('.col-proyecto');
            const proyecto = proyectoCell ? proyectoCell.textContent.trim() : '';

            rowsHtml += `
              <tr>
                <td style="font-weight: bold; text-align: center; border: 1px solid #cbd5e1; padding: 8px;">${n}</td>
                <td style="border: 1px solid #cbd5e1; padding: 8px;">${asesor}</td>
                <td style="text-transform: uppercase; font-weight: bold; border: 1px solid #cbd5e1; padding: 8px;">${responsable}</td>
                <td style="border: 1px solid #cbd5e1; padding: 8px;">${proyecto}</td>
                <td style="border: 1px solid #cbd5e1; padding: 8px;">${escuela}</td>
                <td style="text-align: center; font-weight: bold; border: 1px solid #cbd5e1; padding: 8px;">${monto}</td>
                <td style="text-align: center; border: 1px solid #cbd5e1; padding: 8px;">${concurso}</td>
              </tr>
            `;
          }
        });

        const excelTemplate = `
          <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
          <head>
          <meta charset="utf-8">
          <!--[if gte mso 9]>
          <xml>
            <x:ExcelWorkbook>
              <x:ExcelWorksheets>
                <x:ExcelWorksheet>
                  <x:Name>Alumnos Investigadores</x:Name>
                  <x:WorksheetOptions>
                    <x:DisplayGridlines/>
                  </x:WorksheetOptions>
                </x:ExcelWorksheet>
              </x:ExcelWorksheets>
            </x:ExcelWorkbook>
          </xml>
          <![endif]-->
          <style>
            table { border-collapse: collapse; font-family: 'Segoe UI', Arial, sans-serif; font-size: 11pt; }
            th { background-color: #0F3073; color: #ffffff; font-weight: bold; text-align: left; height: 35px; border: 1px solid #cbd5e1; }
            td { vertical-align: middle; height: 28px; }
          </style>
          </head>
          <body>
          <table>
            <colgroup>
              <col style="width: 60px; min-width: 60px;" />
              <col style="width: 220px; min-width: 220px;" />
              <col style="width: 250px; min-width: 250px;" />
              <col style="width: 350px; min-width: 350px;" />
              <col style="width: 220px; min-width: 220px;" />
              <col style="width: 120px; min-width: 120px;" />
              <col style="width: 150px; min-width: 150px;" />
            </colgroup>
            <thead>
              <tr>
                <th style="text-align: center; padding: 8px; border: 1px solid #0f3073;">N°</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">ASESOR</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">RESPONSABLE (ALUMNO)</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">PROYECTO DE INVESTIGACIÓN</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">ESCUELA PROFESIONAL</th>
                <th style="text-align: center; padding: 8px; border: 1px solid #0f3073;">MONTO (S/.)</th>
                <th style="text-align: center; padding: 8px; border: 1px solid #0f3073;">CONCURSO</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
          </body>
          </html>
        `;

        const blob = new Blob(["\uFEFF" + excelTemplate], { type: "application/vnd.ms-excel;charset=utf-8" });
        const encodedUri = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "alumnos_investigadores_unamba.xls");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(encodedUri);
      });
    }

    filterAndPaginate();
  });
})();

/* ========================================================================
   MÓDULO LIGHTBOX / MODAL DE IMÁGENES ZOOMABLES (SENIOR UX/UI)
   ======================================================================== */
(function () {
  'use strict';

  function initImageLightbox() {
    document.addEventListener('click', function (e) {
      const target = e.target.closest('.zoomable-map');
      if (!target) return;

      e.preventDefault();
      const src = target.getAttribute('data-zoom-src') || target.src;
      const innerImg = target.querySelector('img');
      const alt = target.alt || (innerImg && innerImg.alt) || 'Imagen ampliada';

      let lightbox = document.getElementById('globalLightboxModal');
      if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'globalLightboxModal';
        lightbox.className = 'lightbox-modal';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.innerHTML = `
          <div class="lightbox-content">
            <div class="lightbox-header">
              <span class="lightbox-title">Croquis de Ubicación</span>
              <button class="lightbox-close" aria-label="Cerrar modal">&times;</button>
            </div>
            <div class="lightbox-body">
              <img class="lightbox-img" src="" alt="">
            </div>
          </div>
        `;
        document.body.appendChild(lightbox);

        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function (event) {
          if (event.target === lightbox || event.target.closest('.lightbox-content') === null) {
            closeLightbox();
          }
        });
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
          }
        });
      }

      const img = lightbox.querySelector('.lightbox-img');
      img.src = src;
      img.alt = alt;
      
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    function closeLightbox() {
      const lightbox = document.getElementById('globalLightboxModal');
      if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageLightbox);
  } else {
    initImageLightbox();
  }
})();

/* ---------- 10. Acordeón de Funciones (Unidades de Investigación) ---------- */
(function () {
  'use strict';

  /**
   * Colapsa/expande la tarjeta de funciones y rota el chevron.
   * Usa max-height para una transición suave, igual que el acordeón de líneas.
   */
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('.funciones-toggle');
    if (!toggle) return;

    var card = toggle.closest('.funciones-card');
    var body = card ? card.querySelector('.funciones-body') : null;
    if (!body) return;

    var isOpen = toggle.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      // Colapsar: fijar la altura actual antes de transicionar a 0
      body.style.maxHeight = body.scrollHeight + 'px';
      void body.offsetWidth; // Forzar recálculo de layout para la transición
      card.classList.add('collapsed');
      body.style.maxHeight = '0px';
    } else {
      card.classList.remove('collapsed');
      body.style.maxHeight = body.scrollHeight + 'px';

      // Liberar el max-height inline al terminar para no bloquear cambios responsive
      var onTransitionEnd = function (ev) {
        if (ev.propertyName === 'max-height' && !card.classList.contains('collapsed')) {
          body.style.maxHeight = 'none';
        }
        body.removeEventListener('transitionend', onTransitionEnd);
      };
      body.addEventListener('transitionend', onTransitionEnd);
    }

    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
})();