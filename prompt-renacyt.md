Actúa como un Desarrollador Senior Frontend y Full Stack con experiencia en Laravel, HTML5, CSS3, JavaScript, UX/UI y diseño web institucional.

Analiza y modifica los siguientes archivos:

content/collections/pages/docentes-renacyt.md
public/vrinstyle/css/estilos.css
public/vrinstyle/js/vrin.js

Toma como referencia visual los siguientes diseños:

public/assets/vrin/renaty.png

## Objetivo

Reproducir fielmente el diseño mostrado en la imagen de referencia, manteniendo una estructura moderna, profesional e institucional acorde a una página universitaria, con especial atención a que la tabla de docentes RENACYT sea completamente **responsive** y tenga una paleta de colores **elegante y profesional**.

## Requisitos técnicos

- Analiza la imagen y determina la estructura visual, jerarquía de información, tipografías, espaciados, colores, tarjetas, secciones y distribución de elementos.
- Modifica únicamente los archivos indicados.
- Mantén compatibilidad con el proyecto actual sin afectar otras páginas.
- Implementa diseño responsive para:
  - Desktop (>1200px)
  - Tablet (768px – 1199px)
  - Móvil (<768px)
- Utiliza Material UI (Material Design 3).
- Utiliza CSS moderno: Flexbox, CSS Grid cuando sea necesario, variables CSS, transiciones suaves.
- Buenas prácticas de accesibilidad.
- Optimiza el JavaScript existente evitando código duplicado.
- Conserva la semántica HTML generada desde el archivo Markdown.
- Agrega comentarios únicamente en las secciones complejas.
- Mantén una alta puntuación en Lighthouse (Performance, Accessibility y Best Practices).

## Requisitos específicos de la tabla de docentes RENACYT

### Responsividad de la tabla

- **Desktop (>1200px):** tabla completa con todas las columnas visibles.
- **Tablet (768px–1199px):** ajustar anchos de columna o reducir padding; si no entra el contenido, permitir scroll horizontal con indicador visual (sombra/gradiente en los bordes) en vez de romper el layout.
- **Móvil (<768px):** transformar cada fila en una tarjeta (card) apilada verticalmente, mostrando cada dato con su etiqueta correspondiente, para evitar scroll horizontal incómodo en pantallas pequeñas.
- Usar `overflow-x: auto` con `-webkit-overflow-scrolling: touch` como fallback donde aplique scroll horizontal.

### Colores de la tabla (elegante y profesional)

- Encabezado de tabla con un color institucional sólido o un degradado sutil, tipografía en peso medio/semibold y buen contraste (mínimo AA de accesibilidad).
- Filas alternadas (zebra striping) con un tono neutro muy claro para facilitar la lectura, sin perder elegancia.
- Estado hover en las filas con una transición suave (`transition: background-color 0.2s ease`) usando un tono institucional atenuado.
- Bordes sutiles (1px, color gris claro) en vez de líneas gruesas o negras, para un acabado más refinado.
- Si existen indicadores o badges (ej. nivel RENACYT, categoría), usar colores institucionales consistentes con el resto del sitio, evitando colores saturados que rompan la paleta general.
- Verificar que todos los pares de color texto/fondo cumplan un contraste mínimo de 4.5:1 (WCAG AA).
- Mantener coherencia con la tipografía y paleta de colores institucional ya definida en el proyecto (no introducir colores nuevos fuera de la paleta existente salvo que sea estrictamente necesario, y en ese caso justificarlo).

## Entregables

- Explica brevemente los cambios realizados.
- Muestra el contenido completo actualizado de cada archivo modificado.
- Indica qué secciones del CSS fueron agregadas o reemplazadas.
- Justifica cualquier cambio estructural realizado en el Markdown.
- Si identificas problemas de UX/UI o accesibilidad, corrígelos y explica la mejora aplicada.
- Confirma explícitamente que la tabla fue probada (o su comportamiento fue validado) en los tres breakpoints (desktop, tablet, móvil).

## Prioriza

- Calidad visual.
- Código mantenible.
- Responsividad.
- Rendimiento.
- Accesibilidad.

Trabaja como un desarrollador senior.