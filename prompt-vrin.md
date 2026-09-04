Actúa como un Desarrollador Senior Frontend y Full Stack con experiencia en Laravel, Statamic, Material Design, HTML5, CSS3, JavaScript, UX/UI y diseño web institucional (universitario).

Analiza y modifica los siguientes archivos:

content/collections/pages/lineas-de-investigacion.md
content/collections/pages/unidades-de-investigacion.md
content/collections/pages/grupos-de-investigacion.md
content/collections/pages/incubadora.md
content/collections/pages/institutos.md
content/collections/pages/produccion.md
content/collections/pages/innovacion.md
content/collections/pages/docentes-renacyt.md
content/collections/pages/quienes-somos.md
public/vrinstyle/css/estilos.css
public/vrinstyle/js/vrin.js

Toma como referencia visual los siguientes diseños:

public/assets/vrin/nosotros-vrin.png
public/assets/vrin/direccionesde-vrin.png
public/assets/vrin/autoridades-vrin.png
public/assets/vrin/direccion-vrin.png
public/assets/vrin/grupos-vrin.png
public/assets/vrin/lineas-vrin.png
public/assets/vrin/organigrama-vrin.png
public/assets/vrin/renacyt-vrin.png
public/assets/vrin/unidad-vrin.png

## Objetivo
Reproducir fielmente el diseño mostrado en las imágenes de referencia, y elevar el acabado visual de la página aplicando principios de Material Design (ya instalado en el proyecto), para lograr un resultado **elegante, profesional e institucional**, propio de una página universitaria de alto nivel.

## Refactorización (obligatorio)
Antes o durante el rediseño, identifica bloques/estructuras visuales que se repiten (por ejemplo: tarjetas de autoridades, bloques de dirección, nodos del organigrama, secciones con imagen+texto, etc.) y refactoriza el código para eliminar duplicación:

- **CSS**: agrupa estilos repetidos en clases reutilizables (ej. `.card-institucional`, `.card-autoridad`, `.seccion-bloque`) en vez de reglas sueltas o repetidas por sección. Usa variables CSS (`:root`) para colores, tipografía, espaciados y radios, y modificadores (`.card--autoridad`, `.card--direccion`) para las diferencias puntuales entre bloques similares.
- **HTML/Markdown**: si la estructura del Markdown genera marcado repetido para tarjetas o secciones similares, propone una estructura más consistente y reutilizable (mismas clases y jerarquía de etiquetas para bloques del mismo tipo), sin romper el parsing de Statamic.
- **JavaScript**: si hay funciones o listeners duplicados para comportamientos similares (hover, animaciones al hacer scroll, toggles, etc.), unifícalos en funciones reutilizables/parametrizables en vez de repetir lógica por sección.
- El objetivo es que un mismo tipo de componente (ej. "tarjeta de persona/autoridad") tenga una sola definición de estilo/comportamiento reutilizada en todas las secciones donde aparece, no una copia distinta por bloque.

## Foco principal del rediseño
Quiero que trabajes específicamente estos 5 aspectos, con el mismo nivel de detalle en cada uno:

1. **Tipografía**
   - Jerarquía clara y consistente (h1/h2/h3, subtítulos, cuerpo, texto secundario) usando la escala tipográfica de Material Design (Type Scale: display, headline, title, body, label).
   - Pesos y tamaños coherentes en todos los bloques (Autoridades, Direcciones, Organigrama, Nosotros).
   - Buen contraste y legibilidad, sin texto apretado ni desalineado.

2. **Colores**
   - Aplica la paleta institucional existente del proyecto (azules/verdes institucionales) mediante variables CSS (`:root`), integrada con el sistema de theming de Material (primary, secondary, surface, on-surface, etc.).
   - Estados definidos (hover, focus, active, disabled) coherentes en toda la página.
   - Contraste accesible (mínimo WCAG AA).

3. **Espaciados**
   - Sistema de espaciado consistente (escala de 8px tipo Material: 8/16/24/32/48px) entre secciones, tarjetas, textos e imágenes.
   - Padding vertical adecuado entre secciones para dar "respiración" visual.
   - Alineación uniforme en grids de autoridades/direcciones/organigrama.

4. **Bordes y elevación**
   - Radios de borde consistentes (usar un valor estándar tipo Material, ej. 8–16px) en tarjetas, imágenes de autoridades, botones.
   - Uso de elevación (box-shadow tipo Material Elevation) en vez de bordes duros, para dar profundidad de forma sutil.
   - Bordes limpios y coherentes entre todos los componentes similares (tarjetas de autoridad, bloques de dirección, nodos del organigrama).

5. **Animaciones y transiciones**
   - Transiciones suaves (ease-in-out, 200–300ms) en hover de tarjetas, botones e imágenes.
   - Animaciones de entrada sutiles al hacer scroll (fade/slide-up) en las secciones de Autoridades, Direcciones y Organigrama, sin exagerar.
   - Evitar animaciones bruscas o que afecten el rendimiento (usar `transform`/`opacity`, no propiedades que disparen reflow).

## Requisitos técnicos
- Analiza cada imagen de referencia y determina estructura visual, jerarquía de información, tipografías, espaciados, colores, tarjetas, secciones y distribución de elementos.
- Modifica únicamente los archivos indicados.
- Mantén compatibilidad con el proyecto actual sin afectar otras páginas.
- Diseño responsive para:
  - Desktop (>1200px)
  - Tablet (768px–1199px)
  - Móvil (<768px)
- CSS moderno: Flexbox, CSS Grid donde corresponda, variables CSS, transiciones suaves, integración correcta con las clases/componentes de Material ya instalados.
- Buenas prácticas de accesibilidad (contraste, roles, foco visible, alt en imágenes).
- Conserva la semántica HTML generada desde el Markdown.
- Comenta únicamente las secciones complejas del código.
- Mantén alta puntuación en Lighthouse (Performance, Accessibility, Best Practices).
- No elimines funcionalidades existentes que no estén relacionadas con "Quiénes Somos".

## Entregables
1. Explicación breve de los cambios realizados, organizados por los 5 aspectos (tipografía, colores, espaciados, bordes, animaciones).
2. Un resumen específico de la refactorización: qué bloques repetidos identificaste y cómo quedaron unificados (clases/funciones nuevas creadas).
3. Contenido completo actualizado de cada archivo modificado.
4. Detalle de qué secciones del CSS fueron agregadas, reemplazadas o eliminadas por duplicación.
5. Justificación de cualquier cambio estructural en el Markdown.
6. Si detectas problemas de UX/UI o accesibilidad, corrígelos y explica la mejora aplicada.

## Prioridades
1. Calidad visual (elegancia y coherencia institucional)
2. Código mantenible y sin duplicación
3. Responsividad
4. Rendimiento
5. Accesibilidad

Trabaja como un desarrollador senior.