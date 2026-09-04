# Prompt: Refactorización Tipográfica Institucional — Material Design 3

Actúa como un **Director de UX/UI y Desarrollador Frontend Senior** con más de 20 años de experiencia en diseño web institucional, Material Design 3, Laravel, HTML5, CSS3 y JavaScript.

## Objetivo

Refactoriza completamente la tipografía del sitio para lograr una apariencia **profesional, elegante, académica e institucional**, manteniendo intactos el diseño, la estructura, los colores y la funcionalidad existentes. No modifiques layouts, componentes ni lógica de negocio: **solo la capa tipográfica**.

## Archivos a analizar

**Hojas de estilo y scripts:**
- `public/vrinstyle/css/estilos.css`
- `public/vrinstyle/js/vrin.js`

**Contenido (revisar encabezados y jerarquía textual):**
- `content/collections/pages/quienes-somos.md`
- `content/collections/pages/lineas-de-investigacion.md`
- `content/collections/pages/unidades-de-investigacion.md`
- `content/collections/pages/grupos-de-investigacion.md`
- `content/collections/pages/incubadora.md`
- `content/collections/pages/institutos.md`
- `content/collections/pages/produccion.md`
- `content/collections/pages/innovacion.md`
- `content/collections/pages/docentes-renacyt.md`

**Plantillas:**
- `evento.antlers.html`
- `layout.antlers.html`
- `noticia.antlers.html`

## Especificaciones tipográficas

### 1. Sistema de fuentes (Google Fonts, Material Design 3)
- **Familia principal (cuerpo y UI):** `Roboto` o `Inter` — pesos 300, 400, 500, 700.
- **Familia para títulos institucionales:** `Playfair Display`, `Libre Baskerville` o `Source Serif 4` — solo para H1 y H2 de páginas institucionales, aportando solemnidad académica.
- Importar vía `<link>` en `layout.antlers.html` con `preconnect` y `display=swap`. Eliminar cualquier fuente heredada que no pertenezca al nuevo sistema.

### 2. Escala tipográfica (type scale MD3, base 16px)

| Nivel | Uso | Tamaño | Peso | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Display | H1 portadas | 3.5rem (56px) | 600 | 1.1 | -0.02em |
| Headline L | H1 páginas | 2.5rem (40px) | 600 | 1.15 | -0.01em |
| Headline M | H2 secciones | 2rem (32px) | 500 | 1.2 | 0 |
| Headline S | H3 subsecciones | 1.5rem (24px) | 500 | 1.3 | 0.01em |
| Title | H4 / cards | 1.25rem (20px) | 500 | 1.35 | 0.01em |
| Body L | Párrafos principales | 1.125rem (18px) | 400 | 1.7 | 0.01em |
| Body M | Texto general | 1rem (16px) | 400 | 1.65 | 0.01em |
| Body S | Metadatos, fechas | 0.875rem (14px) | 400 | 1.5 | 0.02em |
| Label | Botones, badges | 0.875rem (14px) | 500 | 1.4 | 0.05em (mayúsculas) |

### 3. Reglas de implementación
- Definir la escala como **custom properties CSS** (`--font-display`, `--text-h1`, etc.) en `:root` de `estilos.css` y referenciarlas en todo el sitio.
- Usar **unidades `rem`**, nunca `px` fijos ni `em` anidados.
- Eliminar todos los estilos tipográficos en línea (`style="font-..."`) de plantillas y contenido.
- Sustituir `!important` tipográficos por especificidad correcta.
- `line-height` generoso (mínimo 1.6 en cuerpo) para legibilidad institucional.
- Ancho de párrafo limitado a `max-width: 68ch` en textos largos.
- Negritas solo con pesos reales de la fuente (nunca `font-weight: bold` simulado si el peso no está cargado).
- Títulos en `text-wrap: balance` cuando sea viable.
- Asegurar contraste WCAG AA en todos los textos.
- Comportamiento **responsive**: escala fluida con `clamp()` en Display y Headline L (ej. `clamp(2rem, 5vw, 3.5rem)`).

### 4. Jerarquía en contenido Markdown
- Normalizar los `.md`: un solo `#` por página, `##` para secciones, `###` para subsecciones, sin abuso de negritas ni mayúsculas sostenidas.

### 5. JavaScript
- En `vrin.js`, revisar que ningún script inyecte tamaños o familias de fuente inline; si lo hace, reemplazar por clases CSS.

## Entregables

1. `estilos.css` refactorizado con el sistema tipográfico completo comentado.
2. `layout.antlers.html` con la carga correcta de fuentes.
3. Listado de cambios puntuales aplicados a cada plantilla y archivo `.md`.
4. Un resumen comparativo antes/después de la escala tipográfica.

## Restricciones

- ❌ No cambiar la paleta de colores institucional.
- ❌ No alterar la estructura HTML ni los componentes existentes.
- ❌ No agregar frameworks CSS nuevos.
- ✅ Mantener compatibilidad con navegadores modernos y accesibilidad.
