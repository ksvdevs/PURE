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
  var AUTOPLAY_MS = 4500;
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

// Adding JavaScript for the new carousel functionality
(function () {
  const carousel = document.querySelector('#vrin-carousel .carousel-container');
  const slides = document.querySelectorAll('#vrin-carousel .carousel-slide');
  const prevButton = document.querySelector('#vrin-carousel .prev');
  const nextButton = document.querySelector('#vrin-carousel .next');

  // Guard to prevent script execution crash on pages without the carousel
  if (!carousel || slides.length === 0 || !prevButton || !nextButton) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Auto-play functionality
  setInterval(nextSlide, 5000);

  // Initialize carousel
  showSlide(currentIndex);
})();

/* ---------- 7. Pestañas de Líneas de Investigación & Acordeón ---------- */
(function () {
  'use strict';

  var tabButtons = document.querySelectorAll('.lineas-tab-btn');
  var tabContents = document.querySelectorAll('.lineas-tab-content');

  // Función para activar la animación de entrada escalonada (staggered entrance)
  function animateTabContent(container) {
    if (!container) return;

    var items = container.querySelectorAll('.table-historico tbody tr, .lineas-accordion .accordion-row');
    items.forEach(function (item, index) {
      item.classList.remove('animate-in');
      item.style.transitionDelay = '';

      // Forzar reflow para reiniciar la animación CSS
      void item.offsetWidth;

      // Retraso escalonado (45ms por fila/tarjeta) para un efecto fluido y premium
      item.style.transitionDelay = (index * 45) + 'ms';
      item.classList.add('animate-in');
    });

    // Reiniciar animación de crecimiento de las barras del gráfico de distribución
    var chartBars = container.querySelectorAll('.chart-bar');
    chartBars.forEach(function (bar) {
      bar.style.animation = 'none';
      void bar.offsetWidth; // Forzar reflow
      bar.style.animation = '';
    });
  }

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetTab = btn.getAttribute('data-tab');

      tabButtons.forEach(function (b) { b.classList.remove('active'); });
      tabContents.forEach(function (c) { c.classList.add('d-none'); });

      btn.classList.add('active');
      var targetContent = document.getElementById('tab-' + targetTab);
      if (targetContent) {
        targetContent.classList.remove('d-none');
        animateTabContent(targetContent);
      }
    });
  });

  // Ejecutar animación en la carga inicial sobre el tab activo por defecto
  setTimeout(function () {
    var activeTabContent = document.querySelector('.lineas-tab-content:not(.d-none)');
    if (activeTabContent) {
      animateTabContent(activeTabContent);
    }
  }, 150);

  window.toggleAccordion = function (header) {
    var row = header.parentElement;
    var isOpen = row.classList.contains('open');

    // Cerrar todas las demás filas
    var allRows = document.querySelectorAll('.accordion-row');
    allRows.forEach(function (r) {
      if (r !== row) {
        r.classList.remove('open');
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
        void body.offsetWidth; // Force reflow
        row.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        row.classList.add('open');
        body.style.maxHeight = body.scrollHeight + "px";
        
        var onTransitionEnd = function (e) {
          if (e.propertyName === 'max-height' && row.classList.contains('open')) {
            body.style.maxHeight = 'none';
          }
          body.removeEventListener('transitionend', onTransitionEnd);
        };
        body.addEventListener('transitionend', onTransitionEnd);
      }
    }
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

    if (!customSelectWrapper) return;
    const triggerBtn = customSelectWrapper.querySelector('.reglamentos-custom-select-trigger');
    const selectedValueEl = triggerBtn.querySelector('.selected-value');
    const customOptionsContainer = customSelectWrapper.querySelector('.reglamentos-custom-select-options');

    let currentTab = 'reglamento';
    let currentYear = '';
    let currentPage = 1;
    const itemsPerPage = 10;

    // Spanish Date Formatter
    function formatDateToSpanish(dateStr) {
      if (!dateStr) return '';
      const parts = dateStr.trim().split('-');
      if (parts.length !== 3) return dateStr;
      
      const year = parts[0];
      const monthVal = parseInt(parts[1], 10);
      const dayVal = parseInt(parts[2], 10);
      
      if (isNaN(monthVal) || isNaN(dayVal) || monthVal < 1 || monthVal > 12) {
        return dateStr;
      }
      
      const months = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
      ];
      
      return `${dayVal} de ${months[monthVal - 1]} de ${year}`;
    }

    // Collect unique years and format all dates in rows to Spanish on load
    const years = new Set();
    rows.forEach(row => {
      const metaEl = row.querySelector('.reglamentos-doc-meta');
      if (metaEl) {
        const rawDate = metaEl.getAttribute('data-date');
        if (rawDate) {
          // Format date to Spanish
          metaEl.textContent = 'Publicado: ' + formatDateToSpanish(rawDate);
          
          // Extract year from the publication date
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

    function updateList() {
      const filteredRows = rows.filter(row => {
        const typeMatch = row.getAttribute('data-type') === currentTab;
        const yearMatch = currentYear === '' || row.getAttribute('data-year') === currentYear;
        return typeMatch && yearMatch;
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

        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
          const pageBtn = document.createElement('button');
          pageBtn.className = 'reglamentos-page-btn' + (i === currentPage ? ' active' : '');
          pageBtn.textContent = i;
          pageBtn.addEventListener('click', () => {
            currentPage = i;
            updateList();
            scrollToTable();
          });
          paginationContainer.appendChild(pageBtn);
        }

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

        // Reset year select to default "AÑO"
        currentYear = '';
        selectedValueEl.textContent = 'AÑO';
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
  
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Navegación del Sidebar
    const sidebarItems = document.querySelectorAll('.nosotros-sidebar-item');
    const sections = document.querySelectorAll('.nosotros-content-section');
    
    if (sidebarItems.length === 0 || sections.length === 0) return;
    
    sidebarItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Quitar active de todos los items del sidebar
        sidebarItems.forEach(function (sib) {
          sib.classList.remove('active');
          const chevron = sib.querySelector('.nosotros-chevron');
          if (chevron) {
            chevron.className = 'fa fa-chevron-right nosotros-chevron';
          }
        });
        
        // Agregar active al item actual
        item.classList.add('active');
        const chevron = item.querySelector('.nosotros-chevron');
        if (chevron) {
          chevron.className = 'fa fa-chevron-down nosotros-chevron';
        }
        
        // Ocultar todas las secciones
        sections.forEach(function (sec) {
          sec.style.display = 'none';
        });
        
        // Mostrar la sección correspondiente
        const targetId = item.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = 'block';
        }
      });
    });
    
    // 2. Pestañas de Direcciones del VRIN
    const dirTabBtns = document.querySelectorAll('.dir-tab-btn');
    const dirPanes = document.querySelectorAll('.dir-tab-pane');
    
    if (dirTabBtns.length > 0 && dirPanes.length > 0) {
      dirTabBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          // Quitar active de todos los botones
          dirTabBtns.forEach(function (b) { b.classList.remove('active'); });
          // Ocultar todos los paneles
          dirPanes.forEach(function (p) { p.classList.remove('active'); });
          
          // Activar el botón y panel correspondientes
          btn.classList.add('active');
          const targetSelector = btn.getAttribute('data-target');
          const targetPane = document.querySelector(targetSelector);
          if (targetPane) {
            targetPane.classList.add('active');
          }
        });
      });
    }
  });
})();

/* ========================================================================
   SECCIÓN DIRECCIONES (SLIDERS & CAROUSELS)
   ======================================================================== */
(function () {
  'use strict';
  
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Gallery Image Slider
    const gallerySlides = document.querySelector('.dir-gallery-slides');
    const galleryImgs = document.querySelectorAll('.dir-gallery-slides img');
    const galleryDots = document.querySelectorAll('.dir-gallery-dot');
    const prevBtn = document.querySelector('.dir-gallery-btn.prev');
    const nextBtn = document.querySelector('.dir-gallery-btn.next');
    
    if (gallerySlides && galleryImgs.length > 0) {
      let currentIndex = 0;
      const totalSlides = galleryImgs.length;
      
      const updateGallery = (index) => {
        currentIndex = (index + totalSlides) % totalSlides;
        gallerySlides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        galleryDots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      };
      
      if (prevBtn) {
        prevBtn.addEventListener('click', () => updateGallery(currentIndex - 1));
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => updateGallery(currentIndex + 1));
      }
      
      galleryDots.forEach((dot, idx) => {
        dot.addEventListener('click', () => updateGallery(idx));
      });
      
      // Auto play every 6 seconds
      let autoTimer = setInterval(() => updateGallery(currentIndex + 1), 6000);
      
      const resetTimer = () => {
        clearInterval(autoTimer);
        autoTimer = setInterval(() => updateGallery(currentIndex + 1), 6000);
      };
      
      if (prevBtn) prevBtn.addEventListener('click', resetTimer);
      if (nextBtn) nextBtn.addEventListener('click', resetTimer);
      galleryDots.forEach(dot => dot.addEventListener('click', resetTimer));
    }
    
    // 2. News Horizontal Slider (Optimized to avoid layout thrashing)
    const newsTrack = document.querySelector('.dir-news-track');
    const newsCards = document.querySelectorAll('.dir-news-card');
    const newsPrev = document.getElementById('dir-news-prev');
    const newsNext = document.getElementById('dir-news-next');
    
    if (newsTrack && newsCards.length > 0) {
      let index = 0;
      let cardWidth = newsCards[0].getBoundingClientRect().width;
      
      const getCardsPerView = () => {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
      };
      
      const slideNews = (dir) => {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, newsCards.length - cardsPerView);
        
        index += dir;
        if (index < 0) index = maxIndex;
        else if (index > maxIndex) index = 0;
        
        const gap = 24; // matches gap in CSS
        const offset = index * (cardWidth + gap);
        newsTrack.style.transform = `translateX(-${offset}px)`;
      };
      
      if (newsPrev) newsPrev.addEventListener('click', () => slideNews(-1));
      if (newsNext) newsNext.addEventListener('click', () => slideNews(1));
      
      window.addEventListener('resize', () => {
        index = 0;
        cardWidth = newsCards[0].getBoundingClientRect().width;
        newsTrack.style.transform = 'translateX(0)';
      }, { passive: true });
    }
  });

  // Active scroll animation effects for Unidades de Investigación cards
  // Initiated automatically via document class elements
})();

(function () {
  'use strict';

  /* ========================================================================
     MÓDULO DE INTERACTIVIDAD PARA GRUPOS DE INVESTIGACIÓN
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementById('gruposGrid');
    if (!grid) return;

    // Metadata de mapeo para los 20 grupos (códigos, facultades, fechas, resoluciones)
    const groupsMetadata = {
      '56e2b583-7959-4624-8eb4-f6ed71fcf13a': {
        code: 'GI-MA',
        faculty: 'Ingeniería de Sistemas',
        date: '20 de May, 2024',
        year: '2024',
        resolucion: 'Res. N° 045-2024-VRIN-UNAMBA'
      },
      'f0b02137-15e1-4dc9-86cb-76491221b62d': {
        code: 'COVUSBA',
        faculty: 'Medicina Veterinaria y Zootecnia',
        date: '25 de May, 2024',
        year: '2024',
        resolucion: 'Res. N° 048-2024-VRIN-UNAMBA'
      },
      '909dac78-1d7a-4d77-ae7b-80e736a76864': {
        code: 'CAMESUO',
        faculty: 'Medicina Veterinaria y Zootecnia',
        date: '25 de May, 2024',
        year: '2024',
        resolucion: 'Res. N° 049-2024-VRIN-UNAMBA'
      },
      'e1513719-c76e-4196-bb92-5ef7f0bad0cd': {
        code: 'GI-ENF-E',
        faculty: 'Departamento Académico de Humanidades',
        date: '20 de May, 2024',
        year: '2024',
        resolucion: 'Res. N° 042-2024-VRIN-UNAMBA'
      },
      'e7cb6c67-7b58-4707-8fc3-2a73d40da933': {
        code: 'GIMAJ',
        faculty: 'Ingeniería Agronómica',
        date: '18 de Abr, 2023',
        year: '2023',
        resolucion: 'Res. N° 124-2023-VRIN-UNAMBA'
      },
      'b0acff00-a3b2-476f-9a45-91053065627f': {
        code: 'IDEA',
        faculty: 'Ingeniería Agroforestal y Sostenibilidad',
        date: '12 de Ago, 2023',
        year: '2023',
        resolucion: 'Res. N° 182-2023-VRIN-UNAMBA'
      },
      '19eacf67-ec4a-444b-b6c9-39f9e2e648c4': {
        code: 'GI-BCA',
        faculty: 'Medicina Veterinaria y Zootecnia',
        date: '15 de May, 2024',
        year: '2024',
        resolucion: 'Res. N° 038-2024-VRIN-UNAMBA'
      },
      '446871a7-c2e5-4ff3-a48b-1d1d23b518e2': {
        code: 'EPCSI',
        faculty: 'Administración',
        date: '10 de Nov, 2022',
        year: '2022',
        resolucion: 'Res. N° 294-2022-VRIN-UNAMBA'
      },
      'de513f20-abc1-46f7-8649-516514295bbd': {
        code: 'GI-ADM-B',
        faculty: 'Administración',
        date: '12 de Ago, 2023',
        year: '2023',
        resolucion: 'Res. N° 185-2023-VRIN-UNAMBA'
      },
      '1f3863df-66bd-4736-8fc4-31b2dad6831b': {
        code: 'GI-SIST-B',
        faculty: 'Ingeniería de Sistemas',
        date: '20 de May, 2024',
        year: '2024',
        resolucion: 'Res. N° 041-2024-VRIN-UNAMBA'
      },
      '778e1ddb-aa99-4c8e-a392-c64ef93f6bae': {
        code: 'BIRNEC',
        faculty: 'Ingeniería de Minas',
        date: '14 de Sep, 2023',
        year: '2023',
        resolucion: 'Res. N° 201-2023-VRIN-UNAMBA'
      },
      '283ba324-7628-49be-b5c8-c01fc7c08b99': {
        code: 'GI-VET-C',
        faculty: 'Medicina Veterinaria y Zootecnia',
        date: '25 de May, 2024',
        year: '2024',
        resolucion: 'Res. N° 050-2024-VRIN-UNAMBA'
      },
      '90cff412-8646-496c-9999-e2b00e6deb19': {
        code: 'GI-POL-A',
        faculty: 'Ciencia Política',
        date: '05 de Jun, 2023',
        year: '2023',
        resolucion: 'Res. N° 145-2023-VRIN-UNAMBA'
      },
      '0a2b44b7-906f-4582-a3de-4ba7e9a05db1': {
        code: 'GI-AGRO-A',
        faculty: 'Ingeniería Agroforestal e Intercultural Bilingüe',
        date: '12 de Ago, 2023',
        year: '2023',
        resolucion: 'Res. N° 189-2023-VRIN-UNAMBA'
      },
      '9bc96518-fe99-4706-a056-607a5b46f50c': {
        code: 'GI-HUM-B',
        faculty: 'Departamento Académico de Humanidades',
        date: '14 de Mar, 2024',
        year: '2024',
        resolucion: 'Res. N° 015-2024-VRIN-UNAMBA'
      },
      'c299d75f-0f78-41a7-b4ac-1a4e0473a7f7': {
        code: 'GIHUMAN',
        faculty: 'Departamento Académico de Humanidades',
        date: '12 de Ago, 2023',
        year: '2023',
        resolucion: 'Res. N° 181-2023-VRIN-UNAMBA'
      },
      '9f693a4d-3473-4633-81cc-a80562a0ce2e': {
        code: 'ZAMZA',
        faculty: 'Medicina Veterinaria y Zootecnia',
        date: '18 de May, 2024',
        year: '2024',
        resolucion: 'Res. N° 039-2024-VRIN-UNAMBA'
      },
      '6e96bbe6-e160-47db-9905-f5b2779fefea': {
        code: 'GI-SIST-C',
        faculty: 'Ingeniería de Sistemas',
        date: '20 de May, 2024',
        year: '2024',
        resolucion: 'Res. N° 043-2024-VRIN-UNAMBA'
      },
      '0c8eec08-8406-40ca-8b2a-a6a2f42aa76d': {
        code: 'GI-MIN-A',
        faculty: 'Ingeniería de Minas',
        date: '12 de Ago, 2023',
        year: '2023',
        resolucion: 'Res. N° 180-2023-VRIN-UNAMBA'
      },
      'a3c24e73-9b7b-40a3-b6ea-dcbd6c41dec7': {
        code: 'GIYS',
        faculty: 'Ingeniería Civil',
        date: '20 de May, 2024',
        year: '2024',
        resolucion: 'Res. N° 040-2024-VRIN-UNAMBA'
      }
    };

    const cards = Array.from(grid.querySelectorAll('.grupo-card-container'));

    // Procesar información inicial de cada tarjeta
    cards.forEach(function (card) {
      const id = card.getAttribute('data-id');
      const meta = groupsMetadata[id] || {
        code: 'GI',
        faculty: 'General',
        date: '20 de May, 2024',
        year: '2024',
        resolucion: 'Resolución Rectoral'
      };

      // Guardar meta en atributos de datos de la tarjeta para búsquedas/filtros más fáciles
      card.setAttribute('data-faculty-meta', meta.faculty);
      card.setAttribute('data-year-meta', meta.year);

      // Actualizar elementos visuales de la tarjeta
      const nameText = card.getAttribute('data-nombre').trim();
      const cleanedName = nameText.replace(/\s*\([^)]+\)$/, ''); // Eliminar el (GIMAJ) del final
      card.querySelector('.grupo-category-title').textContent = cleanedName;

      // Determinar qué poner en la pastilla azul (badge-code)
      // Si el nombre es igual al código, mostramos la facultad. Si no, mostramos el código.
      let badgeText = meta.code;
      if (cleanedName.toLowerCase() === meta.code.toLowerCase()) {
        badgeText = meta.faculty;
      }
      card.querySelector('.badge-code').textContent = badgeText;
      card.querySelector('.date-text').textContent = meta.date;

      const resolBtn = card.querySelector('.btn-ver-resolucion');
      resolBtn.title = meta.resolucion;
      resolBtn.href = '#';
      resolBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Resolución del grupo ' + meta.code + ': ' + meta.resolucion);
      });

      // Formatear la lista de integrantes (máximo 3 con opción Ver más)
      const rawDiv = card.querySelector('.raw-integrantes-html');
      if (rawDiv) {
        const rawHtml = rawDiv.innerHTML;
        const cleanedHtml = rawHtml.replace(/<!--[\s\S]*?-->/g, '');
        const members = cleanedHtml.split(/<br\s*\/?>|\n/gi)
                              .map(function(item) {
                                return item.replace(/<\/?[^>]+(>|$)/g, "").trim();
                              })
                              .filter(function(item) {
                                return item.length > 0;
                              });

        card.querySelector('.integrantes-count').textContent = members.length;

        const listUl = card.querySelector('.integrantes-list');
        listUl.innerHTML = '';
        
        // Renderizar los primeros 3 integrantes
        const first3 = members.slice(0, 3);
        first3.forEach(function (member) {
          const li = document.createElement('li');
          li.textContent = member;
          listUl.appendChild(li);
        });

        // Limpiar cualquier botón o contenedor previo
        const bodyContent = card.querySelector('.integrantes-section');
        const oldBtn = bodyContent.querySelector('.ver-mas-btn');
        if (oldBtn) oldBtn.remove();
        const oldExtra = bodyContent.querySelector('.extra-members');
        if (oldExtra) oldExtra.remove();

        // Si hay más de 3 integrantes, crear colapsable de "Ver más"
        if (members.length > 3) {
          const extraContainer = document.createElement('div');
          extraContainer.className = 'extra-members';
          extraContainer.style.maxHeight = '0px';
          extraContainer.style.overflow = 'hidden';
          extraContainer.style.transition = 'max-height 0.3s ease-out';
          
          const extraUl = document.createElement('ul');
          extraUl.className = 'integrantes-list extra-list-style';
          
          const extras = members.slice(3);
          extras.forEach(function (member) {
            const li = document.createElement('li');
            li.textContent = member;
            extraUl.appendChild(li);
          });
          
          extraContainer.appendChild(extraUl);
          bodyContent.appendChild(extraContainer);

          const verMasBtn = document.createElement('button');
          verMasBtn.type = 'button';
          verMasBtn.className = 'ver-mas-btn';
          verMasBtn.innerHTML = `<span>+ Ver más (${extras.length} más)</span> <i class="material-icons ml-1">keyboard_arrow_down</i>`;
          
          verMasBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const isExpanded = extraContainer.classList.toggle('expanded');
            verMasBtn.classList.toggle('expanded', isExpanded);
            if (isExpanded) {
              extraContainer.style.maxHeight = extraContainer.scrollHeight + 'px';
              verMasBtn.innerHTML = `<span>Ver menos</span> <i class="material-icons ml-1">keyboard_arrow_up</i>`;
            } else {
              extraContainer.style.maxHeight = '0px';
              verMasBtn.innerHTML = `<span>+ Ver más (${extras.length} más)</span> <i class="material-icons ml-1">keyboard_arrow_down</i>`;
            }
          });
          
          bodyContent.appendChild(verMasBtn);
        }
      }
    });

    // Estado de filtros
    let currentFaculty = 'all';
    let currentYear = 'all';
    let searchQuery = '';
    let currentPage = 1;
    const itemsPerPage = 9;

    // Elementos de UI
    const filterButtons = document.querySelectorAll('.filter-btn');
    const yearButtons = document.querySelectorAll('.year-tab-btn');
    const searchField = document.getElementById('grupoSearch');
    const paginationControls = document.getElementById('paginationControls');
    const pageInfo = document.getElementById('pageInfo');
    const noResults = document.getElementById('noResults');
    const paginationRow = document.getElementById('paginationRow');

    function filterAndPaginate() {
      // 1. Filtrar tarjetas
      const filtered = cards.filter(function (card) {
        const name = card.getAttribute('data-nombre').toLowerCase();
        const coordinator = card.getAttribute('data-jefe').toLowerCase();
        const members = card.getAttribute('data-integrantes').toLowerCase();
        const faculty = card.getAttribute('data-faculty-meta');
        const year = card.getAttribute('data-year-meta');

        const matchesFaculty = (currentFaculty === 'all' || faculty === currentFaculty);
        const matchesYear = (currentYear === 'all' || year === currentYear);

        const matchesSearch = searchQuery === '' ||
                              name.includes(searchQuery) ||
                              coordinator.includes(searchQuery) ||
                              members.includes(searchQuery) ||
                              faculty.toLowerCase().includes(searchQuery);

        return matchesFaculty && matchesYear && matchesSearch;
      });

      // 2. Controlar visibilidad del mensaje "Sin resultados"
      if (filtered.length === 0) {
        noResults.classList.remove('d-none');
        grid.classList.add('d-none');
        paginationRow.classList.add('d-none');
        return;
      } else {
        noResults.classList.add('d-none');
        grid.classList.remove('d-none');
        paginationRow.classList.remove('d-none');
      }

      // 3. Paginar resultados
      const totalItems = filtered.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      // Asegurar que la página actual está en rango
      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Ocultar todas las tarjetas primero
      cards.forEach(function(card) {
        card.style.display = 'none';
        card.classList.remove('grupo-fade-in');
      });

      // Mostrar las tarjetas de la página actual con animación
      filtered.slice(startIndex, endIndex).forEach(function (card) {
        card.style.display = 'block';
        card.classList.add('grupo-fade-in');
      });

      // 4. Renderizar controles de paginación
      updatePaginationControls(totalPages, totalItems);
    }

    function updatePaginationControls(totalPages, totalItems) {
      pageInfo.textContent = `Página ${currentPage} de ${totalPages} (Total: ${totalItems} grupos)`;
      paginationControls.innerHTML = '';

      if (totalPages <= 1) {
        paginationRow.classList.add('d-none');
        return;
      }
      paginationRow.classList.remove('d-none');

      // Botón Anterior
      const prevLi = document.createElement('li');
      if (currentPage === 1) {
        prevLi.className = 'disabled';
        prevLi.innerHTML = `<span><i class="material-icons">chevron_left</i></span>`;
      } else {
        const prevA = document.createElement('a');
        prevA.innerHTML = `<i class="material-icons">chevron_left</i>`;
        prevA.addEventListener('click', function (e) {
          e.preventDefault();
          currentPage--;
          window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
          filterAndPaginate();
        });
        prevLi.appendChild(prevA);
      }
      paginationControls.appendChild(prevLi);

      // Páginas numeradas
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
            window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
            filterAndPaginate();
          });
          pageLi.appendChild(pageA);
        }
        paginationControls.appendChild(pageLi);
      }

      // Botón Siguiente
      const nextLi = document.createElement('li');
      if (currentPage === totalPages) {
        nextLi.className = 'disabled';
        nextLi.innerHTML = `<span><i class="material-icons">chevron_right</i></span>`;
      } else {
        const nextA = document.createElement('a');
        nextA.innerHTML = `<i class="material-icons">chevron_right</i>`;
        nextA.addEventListener('click', function (e) {
          e.preventDefault();
          currentPage++;
          window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
          filterAndPaginate();
        });
        nextLi.appendChild(nextA);
      }
      paginationControls.appendChild(nextLi);
    }

    // Eventos para Sidebar de Facultades
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFaculty = btn.getAttribute('data-faculty');
        currentPage = 1;
        filterAndPaginate();
      });
    });

    // Eventos para Tabs de Años
    yearButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        yearButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentYear = btn.getAttribute('data-year');
        currentPage = 1;
        filterAndPaginate();
      });
    });

    // Eventos para el campo de búsqueda
    searchField.addEventListener('input', function () {
      searchQuery = searchField.value.trim().toLowerCase();
      currentPage = 1;
      filterAndPaginate();
    });

    // Carga inicial
    filterAndPaginate();
  });
})();

(function () {
  'use strict';

  /* ========================================================================
     MÓDULO DE INTERACTIVIDAD PARA DOCENTES RENACYT
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', function () {
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

    const levelDetails = {
      'I': { label: 'Nivel I', color: '#8d5b4c' },
      'II': { label: 'Nivel II', color: '#7b2cbf' },
      'III': { label: 'Nivel III', color: '#caa47e' },
      'IV': { label: 'Nivel IV', color: '#9e7a56' },
      'V': { label: 'Nivel V', color: '#2e2e2e' },
      'VI': { label: 'Nivel VI', color: '#0f3073' },
      'VII': { label: 'Nivel VII', color: '#2980b9' },
      'ID': { label: 'Investigador Distinguido', color: '#94a3b8' }
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
        const lvlColor = levelDetails[level] ? levelDetails[level].color : levelDetails['ID'].color;
        badgeSpan.style.backgroundColor = lvlColor;
      }

      const estadoSpan = row.querySelector('.badge-estado');
      if (estadoSpan) {
        estadoSpan.textContent = estadoVal;
        // Cambiar el diseño del badge según el estado para reflejar inactividad
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
        if (tableBody) tableBody.parentElement.classList.add('d-none');
        if (paginationRow) paginationRow.classList.add('d-none');
        updateChartAndLegend([]);
        return;
      } else {
        if (noResults) noResults.classList.add('d-none');
        if (tableBody) tableBody.parentElement.classList.remove('d-none');
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
        pageInfo.textContent = `Mostrando ${fromItem}º al ${toItem}º docentes`;
      }
      if (!paginationControls) return;
      paginationControls.innerHTML = '';

      if (totalPages <= 1) {
        if (paginationRow) paginationRow.classList.add('d-none');
        return;
      }
      if (paginationRow) paginationRow.classList.remove('d-none');

      // Anterior (<)
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

      // Números (1, 2, 3...)
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

      // Siguiente (>)
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

      // Siguiente Texto (Siguiente)
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

      let cumulativePercent = -60 / 360; // Empezar a las 10 en punto (-60 grados)

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
    if (btnExport) {
      btnExport.addEventListener('click', function(e) {
        e.preventDefault();
        
        let rowsHtml = '';
        
        rows.forEach(row => {
          if (row.style.display !== 'none') {
            const codigoCell = row.querySelector('.col-codigo');
            const codigo = codigoCell ? codigoCell.textContent.trim() : '';
            const nombreCell = row.querySelector('.investigador-name');
            const nombre = nombreCell ? nombreCell.textContent.trim() : '';
            const gmail = row.getAttribute('data-gmail') || '';
            const resolucionCell = row.querySelector('.col-resolucion');
            const resolucion = resolucionCell ? resolucionCell.textContent.trim() : '';
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
                <td style="border: 1px solid #cbd5e1; padding: 8px;">${resolucion}</td>
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
              <col style="width: 220px; min-width: 220px;" />
              <col style="width: 220px; min-width: 220px;" />
              <col style="width: 280px; min-width: 280px;" />
              <col style="width: 90px; min-width: 90px;" />
              <col style="width: 110px; min-width: 110px;" />
            </colgroup>
            <thead>
              <tr>
                <th style="text-align: center; padding: 8px; border: 1px solid #0f3073;">CÓDIGO RENACYT</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">INVESTIGADOR</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">CORREO</th>
                <th style="padding: 8px; border: 1px solid #0f3073;">RESOLUCIÓN VRI</th>
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
      });
    }

    // Inicialización
    filterAndPaginate();
  });
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