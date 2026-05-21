# Refactorización del Carrusel de Convocatorias

**Fecha:** Mayo 2026  
**Archivos Modificados:** `estilos.css`, `vrin.js`

## 📋 Resumen de Cambios

Se realizó una refactorización completa del módulo de carrusel de convocatorias para mejorar la mantenibilidad, legibilidad y organización del código.

---

## 🎨 Cambios en `estilos.css`

### 1. **Organización Estructural**
- ✅ Dividido en secciones claramente definidas con comentarios descriptivos
- ✅ Cada sección tiene un encabezado jerárquico
- ✅ Variables CSS organizadas al inicio del componente

### 2. **Paleta de Colores Documentada**
```css
/* Primarios */
--c-primary: #052F83;              /* Color primario oficial */
--c-primary-dark: #031c4f;         /* Gradiente: -15L */
--c-primary-deeper: #020f33;       /* Profundidad: -25L */
--c-primary-light: #0a47b3;        /* Highlights: +10L */

/* Acentos */
--c-accent-green: #3daa42;         /* CTA - Verde complementario */
--c-accent-hover: #329037;         /* Verde en hover */
```

### 3. **Secciones del CSS**

| Sección | Líneas | Descripción |
|---------|--------|-------------|
| **Sección Principal** | - | Configuración general y variables |
| **Viewport** | - | Contenedor del carrusel |
| **Items** | - | Slides individuales + animaciones |
| **Imagen con Aura** | - | Efectos visuales de la imagen |
| **Contenido** | - | Etiqueta, título, descripción y botón |
| **Navegación** | - | Flechas de control |
| **Pie/Paginación** | - | Puntos y contador |
| **Responsividad** | - | Breakpoints (1100px, 992px, 768px, 480px) |
| **Accesibilidad** | - | Respeto a `prefers-reduced-motion` |

### 4. **Mejoras de Legibilidad**
- ✅ Comentarios en español claros y descriptivos
- ✅ Indentación consistente
- ✅ Alineación visual de grupos relacionados
- ✅ Explicación de propósito de cada propiedad CSS

### 5. **Animaciones**
```css
/* Animación de slide hacia arriba (contenido) */
@keyframes convSlideUp { }

/* Animación de entrada de imagen (escala) */
@keyframes convMediaIn { }
```

---

## 🔧 Cambios en `vrin.js`

### 1. **Estructura de Módulo IIFE**
```javascript
(function () {
  'use strict';
  // Código encapsulado y seguro
})();
```

### 2. **Configuración Centralizada**
```javascript
var CONFIG = {
  sectionSelector: '#convocatorias-relevantes',
  autoplayMS: 9000,              /* 9 segundos */
  touchThreshold: 50,            /* píxeles para swipe */
  ariaLive: true                 /* accesibilidad */
};
```

### 3. **Estado Centralizado**
```javascript
var state = {
  currentIndex: 0,
  autoTimer: null,
  touchStartX: 0
};
```

### 4. **Funciones Organizadas por Propósito**

#### Inicialización
- `initializeCarousel()` - Configura estado inicial
- `createDots()` - Genera paginación
- `updateCarousel()` - Actualiza vista

#### Navegación
- `navigateTo(targetIndex)` - Va a slide específico
- `nextSlide()` - Siguiente
- `prevSlide()` - Anterior

#### Autoplay
- `startAutoplay()` - Inicia reproducción automática
- `stopAutoplay()` - Detiene
- `resetAutoplay()` - Reinicia

### 5. **Manejadores de Eventos**
✅ Botones de navegación (click)
✅ Hover (pausa/reanuda)
✅ Visibilidad de pestaña (pausa en background)
✅ Teclado (flechas izquierda/derecha)
✅ Touch/Swipe (detección de deslización)

### 6. **Mejoras de Documentación**
- ✅ Comentarios JSDoc para funciones
- ✅ Variables con nombres descriptivos
- ✅ Secciones claramente separadas

---

## ✨ Características Principales

### CSS
- 📐 Grid layout: imagen + contenido
- 🌈 Gradiente con múltiples capas
- 💫 Aura de efecto halo alrededor de imagen
- 🎭 Animaciones escalonadas de entrada
- 📱 Completamente responsive
- ♿ Accesibilidad WCAG incluida

### JavaScript
- ⏱️ Autoplay inteligente (9 segundos)
- 🖱️ Click en flechas
- ⌨️ Navegación por teclado
- 👆 Soporte táctil/swipe
- 🔄 Pausa en hover
- 📍 Puntos de paginación dinámicos
- ♿ ARIA attributes para accesibilidad

---

## 🎯 Beneficios de la Refactorización

| Aspecto | Antes | Después |
|--------|-------|---------|
| **Mantenibilidad** | Comentarios escasos | Bien documentado |
| **Organización** | Código disperso | Estructura clara |
| **Legibilidad** | Difícil seguir | Fácil de entender |
| **Escalabilidad** | Acoplado | Modular y reutilizable |
| **Depuración** | Lenta | Rápida con nombres claros |

---

## 🚀 Uso

El carrusel se inicializa automáticamente al cargar la página. No requiere configuración adicional.

### Elementos HTML Requeridos
```html
<section id="convocatorias-relevantes" class="convocatorias-section">
  <div class="carousel-inner">
    <!-- Items con clase .carousel-item-conv -->
  </div>
  <button class="carousel-control carousel-control-prev"></button>
  <button class="carousel-control carousel-control-next"></button>
  <div class="carousel-footer">
    <div class="carousel-dots" id="convocatoriasDots"></div>
    <div class="carousel-counter">
      <span id="convCurrentSlide">01</span>
      <span class="sep">/</span>
      <span id="convTotalSlides">01</span>
    </div>
  </div>
</section>
```

---

## 📝 Notas de Desarrollo

- Tiempo de autoplay: **9 segundos** (optimizado para lectura en español)
- Threshold de swipe: **50 píxeles** (evita triggers accidentales)
- Transiciones: **0.55s** (suave pero rápida)
- Compatible con: **IE11+**, navegadores modernos

---

## ✅ Checklist de Validación

- ✅ CSS válido y sin errores
- ✅ JavaScript sin errores de consola
- ✅ Funciona en desktop
- ✅ Funciona en tablet
- ✅ Funciona en móvil
- ✅ Navegación completa funciona
- ✅ Autoplay funciona
- ✅ Touch/swipe funciona
- ✅ Teclado funciona
- ✅ ARIA attributes presentes

---

**Refactorización completada exitosamente** ✨
