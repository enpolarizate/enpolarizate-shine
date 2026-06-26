## Plan: Actualizar sección de Testimonios

### Objetivo
Reemplazar los 3 testimonios genéricos actuales por el video real de YouTube Shorts del cliente, combinado con 2 testimonios escritos para mantener social proof variado.

### Cambios propuestos

#### 1. `src/components/site/Testimonials.tsx`
- **Video principal:** Incorporar el video de YouTube Shorts (`https://youtube.com/shorts/qWDARZ8qjRk`) como testimonial destacado. Usar un iframe de YouTube embed (`https://www.youtube.com/embed/qWDARZ8qjRk`) con aspect-ratio vertical (9:16) o adaptarlo a un contenedor que se vea bien en la grilla.
- **Textos de respaldo:** Mantener 2 tarjetas de testimonios escritos (reutilizar los 2 mejores del array actual o generar nuevos breves).
- **Layout:** Cambiar de grilla 3 columnas a un layout donde el video ocupe 1 columna grande (o 2/3 del ancho) y los 2 textos estén al lado o debajo, dependiendo del viewport. En móvil, apilados (video primero, luego textos).
- **CTA:** El botón de play en el video debe ser nativo del embed de YouTube. Eliminar el botón de play decorativo actual si ya no aplica.

#### 2. Datos
- Video ID: `qWDARZ8qjRk`
- Título opcional sobre el video: "Mira lo que dicen nuestros clientes"

### Notas técnicas
- YouTube Shorts se puede embejar igual que un video normal usando `/embed/<id>`.
- Se respetarán las clases y animaciones existentes (`Reveal`, `Stagger`, `StaggerItem`, `premium-card`).
- No se modificarán otras secciones del sitio.