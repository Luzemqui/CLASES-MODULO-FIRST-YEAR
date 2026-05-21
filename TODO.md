# Plan: Centrar elementos y fondo con corazones

## Archivos a editar
- `Personal/Untitled-1.html`
- `Personal/Love.css`

## Pasos
- [x] En `Untitled-1.html`: agrupar los botones en un `<div class="buttons">` para alinearlos juntos.
- [x] En `Love.css`:
  - Cambiar `body` a `flex-direction: column` con `justify-content: center`, `align-items: center`, `min-height: 100vh` y `gap` para mantener espacio entre elementos.
  - Eliminar posicionamientos manuales (`position: relative`, `top`, `left`, `right`) de `h1`, `img`, `.Yes` y `.No`.
  - Crear clase `.buttons` con `display: flex`, `gap: 20px` y `justify-content: center`.
  - Estilizar `hr` para que esté centrado y no ocupe todo el ancho.
  - Añadir fondo con patrón de corazones usando `background-image` con SVG repetido sobre `#b1bcff`.

