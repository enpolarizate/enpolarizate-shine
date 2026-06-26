## Galería carrusel de carros polarizados

Agregar una nueva sección tipo galería con las 5 fotos subidas, que se desplace horizontalmente a la derecha al hacer scroll vertical (efecto "horizontal scroll on scroll").

### Ubicación
Justo **después de la sección de Testimonios** y antes de Garantía. Encaja como prueba social visual: el usuario ve el testimonio en video, luego ve trabajos reales aplicados a distintos carros (Corvette, Maserati, Jaguar, BYD, Jetour), y luego entra la garantía. Refuerza credibilidad antes del bloque mayorista.

### Comportamiento del carrusel
- Sección con `height: 200vh` (contenedor "alto") que actúa como pista de scroll.
- Dentro, un `sticky top-0 h-screen` que mantiene la galería fija mientras se hace scroll.
- Las tarjetas se desplazan horizontalmente hacia la derecha usando `useScroll` + `useTransform` de framer-motion, mapeando el progreso vertical (0→1) a un `translateX` negativo proporcional al ancho total de las imágenes.
- Cada tarjeta: imagen con `aspect-[4/3]`, bordes redondeados, borde sutil dorado, sombra, overlay con etiqueta "Nano Blindex" en una esquina.
- Header de sección arriba (eyebrow + título "Trabajos reales en la calle" + subtítulo corto).
- En móvil: degradar a un carrusel horizontal nativo con `overflow-x-auto snap-x` (no usa el efecto de scroll vertical, porque en móvil resulta molesto).

### Assets
Subir las 5 imágenes con `lovable-assets create` desde `/mnt/user-uploads/` (no copiarlas al repo). Crear pointers en `src/assets/gallery/*.jpg.asset.json` e importarlos en el componente.

### Archivos
- Crear `src/components/site/Gallery.tsx` con el componente carrusel.
- Crear los 5 pointers `src/assets/gallery/*.asset.json`.
- Editar `src/pages/Index.tsx` para insertar `<Gallery />` entre `<Testimonials />` y `<Warranty />`.

No se tocan estilos globales ni otras secciones.
