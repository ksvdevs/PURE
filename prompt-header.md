# Prompt: Rediseño del Navbar — Material Design 3 Corporativo

Actúa como un **Desarrollador Frontend Senior y Arquitecto UX/UI** con amplia experiencia en Laravel, HTML5, CSS3, JavaScript, Material Design 3, animaciones web modernas y diseño de aplicaciones empresariales.

## Alcance

Analiza y modifica **únicamente** los siguientes archivos:

- `content/collections/globals/navbar.yml`
- `public/vrinstyle/css/estilos.css`
- `public/vrinstyle/js/vrin.js`

## Objetivo principal

Rediseñar completamente el Navbar actual para convertirlo en un menú de navegación **corporativo, moderno, elegante y profesional**, mejorando significativamente la experiencia visual y de usuario **sin alterar la lógica funcional existente** (rutas, enlaces, estructura de menús definida en `navbar.yml` y comportamiento de navegación).

## Requisitos del nuevo Navbar

### 1. Diseño profesional
- Navbar moderno inspirado en **Material Design 3**.
- Apariencia corporativa comparable a Google Workspace, Atlassian, Microsoft Fluent UI o SAP Fiori.
- Diseño limpio, minimalista y elegante.
- Coherencia visual total con el resto de la aplicación (paleta de colores institucional existente).

### 2. Tipografía
- Utilizar únicamente las familias del sistema tipográfico del sitio: **Roboto o Inter** para enlaces y menús (pesos 400 y 500), y la familia serif institucional solo si el logo lo requiere.
- Aplicar jerarquía visual correcta: enlaces principales (`font-weight: 500`, 0.95rem), opciones de dropdown (`font-weight: 400`, 0.875rem).
- Letter-spacing sutil en enlaces (0.01em–0.02em).
- Respetar las custom properties tipográficas definidas en `estilos.css`; no introducir fuentes nuevas.

### 3. Estructura del navbar
- Altura fija y consistente: **64px en desktop** (48–56px en móvil).
- Logo correctamente alineado verticalmente con altura controlada.
- Distribución equilibrada: logo a la izquierda, menús centrados o a la derecha, acciones al extremo.
- Espaciado uniforme entre enlaces (mínimo 8px, recomendado 16px–24px).
- Navbar con posición `sticky` o `fixed` y sombra sutil al hacer scroll (elevation MD3).

### 4. Animaciones y microinteracciones

**Hover en enlaces:**
- Cambio de color suave.
- Línea animada inferior (underline animation que crece de 0 a 100% desde el centro o la izquierda).
- Ligera elevación o cambio de fondo tipo "state layer" MD3.

**Hover en botones:**
- Transición gradual de color y efecto de profundidad (box-shadow).

**Dropdowns:**
- Apertura con `fade-in` + `slide-down` (opacity + translateY).
- Cierre suave.

**Menú móvil:**
- Navigation Drawer con apertura/cierre lateral animado.
- Botón hamburguesa con transformación animada a ícono de cierre (X).

**Duración estándar:**
```css
transition: all 0.3s ease;
```
Usar `cubic-bezier(0.4, 0, 0.2, 1)` (easing MD3) para movimientos principales.

### 5. Estados visuales
Implementar estados claros y distinguibles para:
- **Hover**
- **Active** (página actual, con indicador persistente)
- **Focus** (anillo visible, nunca `outline: none` sin reemplazo)
- **Selected**
- **Disabled** (opacidad reducida, `cursor: not-allowed`)

### 6. Dropdowns
- Submenús completamente modernizados.
- `border-radius: 8px`.
- Sombras suaves tipo MD3 (`box-shadow: 0 4px 16px rgba(0,0,0,0.12)`).
- Padding interno generoso y separación clara entre opciones (mínimo 4px).
- Opción con hover de fondo tipo state layer.
- Cierre al hacer clic fuera o presionar `Escape`.

### 7. Responsive design
Optimizar para Desktop, Laptop, Tablet y Mobile con breakpoints coherentes (ej. 1280px / 1024px / 768px / 480px).

**En móviles:**
- Convertir el menú en un **Navigation Drawer** lateral moderno.
- Botón hamburguesa animado (3 líneas → X).
- Apertura lateral suave con overlay semitransparente de fondo.
- Áreas táctiles de mínimo 48×48px (guía MD3).
- Cierre al seleccionar una opción o tocar el overlay.

### 8. Accesibilidad (WCAG AA)
- Navegación completa por teclado (Tab, Enter, Escape, flechas en dropdowns).
- Estados `focus-visible` claramente visibles.
- Contraste mínimo 4.5:1 en texto.
- Atributos ARIA correctos: `aria-expanded`, `aria-haspopup`, `aria-controls`, `aria-label` en el botón hamburguesa.
- HTML semántico: `<nav>`, `<ul>`, `<li>`.

### 9. Calidad del código
- Refactorizar el CSS del navbar: eliminar estilos redundantes o sin uso.
- Definir y reutilizar **custom properties CSS** (colores, altura del navbar, transiciones, sombras, radios).
- Código limpio, comentado por secciones y escalable.
- En `vrin.js`: encapsular la lógica del menú (toggle, dropdowns, drawer) sin variables globales contaminantes y sin romper funcionalidad existente.

## Entregables

1. `estilos.css` con la sección del navbar refactorizada y comentada.
2. `vrin.js` con la lógica del menú móvil y dropdowns actualizada.
3. `navbar.yml` ajustado solo si la estructura de datos lo requiere (sin eliminar entradas de menú existentes).
4. Resumen de cambios por archivo y una breve guía de las clases/variables nuevas.

## Restricciones

- ❌ No cambiar la paleta de colores institucional.
- ❌ No alterar rutas, URLs ni la estructura de menús definida en `navbar.yml`.
- ❌ No agregar frameworks CSS ni librerías JS externas (todo con CSS y JS vanilla).
- ❌ No modificar archivos fuera del alcance indicado.
- ✅ Mantener compatibilidad con navegadores modernos y accesibilidad WCAG AA.

## Resultado esperado

Un Navbar de **nivel empresarial premium**: visualmente atractivo, moderno, elegante, totalmente responsive, con animaciones profesionales, excelente experiencia de usuario y alineado con Material Design 3, manteniendo intacta la funcionalidad existente del sistema.