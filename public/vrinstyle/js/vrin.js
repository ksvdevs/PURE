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
    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', window.scrollY > 30);
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
      r.classList.remove('open');
      var body = r.querySelector('.accordion-body');
      if (body) {
        body.style.maxHeight = null;
      }
    });

    if (!isOpen) {
      row.classList.add('open');
      var body = row.querySelector('.accordion-body');
      if (body) {
        body.style.maxHeight = body.scrollHeight + "px";
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
    
    // 2. News Horizontal Slider
    const newsTrack = document.querySelector('.dir-news-track');
    const newsCards = document.querySelectorAll('.dir-news-card');
    const newsPrev = document.getElementById('dir-news-prev');
    const newsNext = document.getElementById('dir-news-next');
    
    if (newsTrack && newsCards.length > 0) {
      let index = 0;
      
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
        
        const cardWidth = newsCards[0].getBoundingClientRect().width;
        const gap = 24; // matches gap in CSS
        const offset = index * (cardWidth + gap);
        newsTrack.style.transform = `translateX(-${offset}px)`;
      };
      
      if (newsPrev) newsPrev.addEventListener('click', () => slideNews(-1));
      if (newsNext) newsNext.addEventListener('click', () => slideNews(1));
      
      window.addEventListener('resize', () => {
        index = 0;
        newsTrack.style.transform = 'translateX(0)';
      });
    }
  });
})();