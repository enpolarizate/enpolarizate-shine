# Portar landing de Películas Arquitectónicas

Voy a traer la landing page completa del proyecto **"Enpolarizate Window Shields"** (la que vende películas de seguridad para hogares, oficinas y comercios) como una nueva página dentro de este proyecto, accesible en una ruta propia.

## Ruta y navegación
- Nueva URL: **`/peliculas-arquitectonicas`**
- Sin enlace agregado en navbar/footer del sitio actual (la página queda accesible solo por URL directa, hasta que indiques lo contrario).
- Registro de la ruta en `src/App.tsx`.

## Assets a copiar
Desde el otro proyecto → a `src/assets/arquitectonico/`:
- `hero.jpg`
- `building.jpg`
- `tints.jpg`
- `install.jpg`
- `logo.png` (reutilizaré el logo existente del proyecto si es el mismo; si difiere lo copio aparte)

## Estructura de la página
Misma arquitectura que el original (13 secciones):
1. Sticky WhatsApp flotante
2. Barra de alerta superior
3. Header con logo + CTA
4. Hero con VSL embebido (YouTube) + stats
5. Tonalidades y niveles de privacidad (35/50/70%)
6. Tecnología Nanocerámica Americana + grid de 9 beneficios
7. Protección real (5 escenarios con emojis)
8. Instalación interior/exterior
9. Testimonios en video (3 columnas)
10. Garantía profesional (4 a 8 años)
11. 16 años de experiencia (9 categorías)
12. Cobertura nacional (3 pasos)
13. Al por mayor (B2B)
14. Qué incluye tu servicio
15. FAQ acordeón
16. CTA final + Footer

Todos los textos se mantienen idénticos al original.

## Detalles técnicos

El otro proyecto está en **TanStack Start + Tailwind v4**, este está en **React Router + Vite + Tailwind v3**. Adaptaciones necesarias:

- Convertir `createFileRoute` → componente de página estándar en `src/pages/PeliculasArquitectonicas.tsx`.
- Reemplazar utilidades `@utility` de Tailwind v4 (`text-gradient-gold`, `glass-card`, `btn-gold`, `btn-gold-hover`, `bg-hero`) por clases CSS planas dentro de `src/index.css` bajo `@layer components`.
- Agregar a `src/index.css` las variables de marca que falten (`--gold-soft`, `--gold-deep`, `--ink`, `--charcoal`, `--silver`, `--whatsapp`, `--gradient-gold`, `--gradient-hero`, `--shadow-gold`, `--shadow-card`) sin tocar los tokens existentes del sitio principal — se agregan como complemento.
- Reutilizar la constante `WHATSAPP_URL = "https://wa.link/yjf1m1"` ya configurada en este proyecto en lugar de `wa.me/573001234567`. Para el botón "Cotizar al por mayor" usaré el mismo link salvo que prefieras otro.
- Meta tags (title, description, og:image) se configuran con `react-helmet`/equivalente solo si ya existe en el proyecto; si no, los pongo como `<title>` dinámico en `useEffect`.
- Animaciones `Reveal` con IntersectionObserver y keyframes (`fade-up`, `fade-in`, `glow`) agregadas al CSS.

## Archivos a crear/modificar
- **Nuevo:** `src/pages/PeliculasArquitectonicas.tsx` (~800 líneas, todo el contenido en un solo archivo siguiendo el patrón del original)
- **Nuevo:** carpeta `src/assets/arquitectonico/` con 4–5 imágenes
- **Modificar:** `src/index.css` — agregar variables y utilidades faltantes
- **Modificar:** `src/App.tsx` — registrar la ruta nueva

## Lo que NO se toca
- La landing actual de polarizado automotriz (`/`) queda intacta.
- Navbar, footer, política de privacidad, banner de cookies del sitio principal: sin cambios.
