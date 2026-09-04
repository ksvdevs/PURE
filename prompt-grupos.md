```markdown
Actúa como un Desarrollador Senior Frontend y Full Stack con experiencia en Laravel, HTML5, CSS3, JavaScript, UX/UI y diseño web institucional.

Analiza y modifica los siguientes archivos:

content/collections/pages/grupos-de-investigacion.md
public/vrinstyle/css/estilos.css
public/vrinstyle/js/vrin.js

## Objetivo

Rediseñar la página manteniendo una estructura moderna, profesional e institucional acorde a una página universitaria, con especial énfasis en que el resultado sea **totalmente responsivo** en cualquier dispositivo.

## Requisitos técnicos

- Analiza la estructura visual actual de la página (jerarquía de información, tipografías, espaciados, colores, tarjetas, secciones y distribución de elementos) y detecta puntos débiles a mejorar.
- Modifica únicamente los archivos indicados.
- Mantén compatibilidad con el proyecto actual sin afectar otras páginas.
- Utiliza Material UI (Material Design 3).
- Utiliza CSS moderno: Flexbox, CSS Grid cuando sea necesario, variables CSS, transiciones suaves.
- Buenas prácticas de accesibilidad.
- Optimiza el JavaScript existente evitando código duplicado.
- Conserva la semántica HTML generada desde el archivo Markdown.
- Agrega comentarios únicamente en las secciones complejas.
- Mantén una alta puntuación en Lighthouse (Performance, Accessibility y Best Practices).

## Responsividad total (requisito prioritario)

- Implementa diseño responsive validado en, como mínimo, estos breakpoints:
  - Desktop grande (>1400px)
  - Desktop (1200px–1400px)
  - Tablet (768px–1199px)
  - Móvil grande (480px–767px)
  - Móvil pequeño (<480px)
- Usa unidades relativas (`rem`, `%`, `clamp()`, `minmax()`) en vez de valores fijos en `px` para tipografía, espaciados y anchos de contenedores, de modo que la página escale de forma fluida entre breakpoints y no solo "salte" entre tamaños fijos.
- Las tarjetas/grupos de investigación deben reorganizarse automáticamente según el ancho disponible (por ejemplo, con `grid-template-columns: repeat(auto-fit, minmax(...))`), sin depender de un número fijo de columnas por breakpoint.
- Ningún elemento debe generar scroll horizontal no intencional en ningún ancho de pantalla.
- Los elementos interactivos (botones, enlaces, filtros si existen) deben mantener un área táctil mínima de 44x44px en móvil.
- Las imágenes o íconos dentro de las tarjetas deben ser responsivos (`max-width: 100%`, `height: auto`) y no deformarse.
- Verifica el comportamiento también en orientación horizontal (landscape) en tablet y móvil.
- Como parte del entregable, confirma explícitamente que la página fue revisada en cada uno de los breakpoints listados y describe cualquier ajuste específico que fue necesario en cada uno.

## Entregables

- Explica brevemente los cambios realizados.
- Muestra el contenido completo actualizado de cada archivo modificado.
- Indica qué secciones del CSS fueron agregadas o reemplazadas.
- Justifica cualquier cambio estructural realizado en el Markdown.
- Si identificas problemas de UX/UI o accesibilidad, corrígelos y explica la mejora aplicada.
- Confirma la responsividad en cada breakpoint, según lo indicado arriba.

## Prioriza

- Responsividad total.
- Calidad visual.
- Código mantenible.
- Rendimiento.
- Accesibilidad.

Trabaja como un desarrollador senior.