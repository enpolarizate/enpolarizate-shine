Plan: banner de consentimiento de cookies flotante inferior

## Resumen
Agregar una barra inferior flotante de consentimiento de cookies que aparezca en la primera visita, con un solo boton "Aceptar" y un mensaje breve estandar en espanol con enlace a la politica de privacidad existente.

## Componente `CookieConsent`

Crear `src/components/site/CookieConsent.tsx`:

- Estado `visible` inicializado leyendo `localStorage.getItem('cookieConsent')`.
- Si no hay consentimiento previo, mostrar la barra.
- Al hacer clic en "Aceptar", guardar `localStorage.setItem('cookieConsent', 'true')` y ocultar la barra.
- Montarlo en `App.tsx` fuera de `<Routes>` para que aparezca en todas las rutas.

## Diseno y estilo

- Barra fija en la parte inferior (`fixed bottom-0 left-0 right-0`).
- Fondo oscuro con opacidad: `bg-black/90 backdrop-blur-md` para integrarse con el tema negro/dorado del sitio.
- Borde superior sutil dorado usando el gradiente existente: `bg-gradient-to-r from-transparent via-gold/60 to-transparent`.
- Contenedor interno con `container-pro` y padding adecuado.
- Texto principal en `text-sm text-muted-foreground`.
- Enlace a `/politica-privacidad` con estilo `text-gold-light hover:text-gold`.
- Boton "Aceptar" usando la clase `btn-gold` existente (o un boton pequeno si `btn-gold` es muy grande) — evaluar si conviene un boton compacto tipo `px-5 py-2 rounded-full bg-gold text-black font-semibold`.
- Animacion de entrada: animar desde `translate-y-full` a `translate-y-0` con transicion suave.

## Contenido del mensaje

> "Utilizamos cookies y tecnologias similares para mejorar tu experiencia de navegacion, analizar el trafico y personalizar contenido. Al continuar navegando, aceptas nuestra politica de privacidad y el tratamiento de tus datos."

Incluir un enlace: "Ver politica de privacidad" apuntando a `/politica-privacidad`.

## Persistencia

- Guardar en `localStorage` bajo la clave `cookieConsent`.
- Al cargar el componente, verificar si ya existe el valor para no mostrar el banner nuevamente.
- Opcionalmente guardar tambien la fecha de aceptacion (`cookieConsentDate`) para posibles auditorias futuras.

## Integracion en rutas

- Importar `CookieConsent` en `App.tsx`.
- Renderizarlo justo dentro de `<BrowserRouter>` pero fuera de `<Routes>`, o justo despues de `<Routes>`, para que este presente en todas las paginas.

## Archivos a modificar/crear

- **Nuevo:** `src/components/site/CookieConsent.tsx`
- **Editar:** `src/App.tsx` (importar y montar el componente)

## Notas

- No se agregan nuevas dependencias; todo con React, Tailwind y las utilidades de tema existentes.
- El banner no bloquea la navegacion; es informativo y se cierra al aceptar.
- Se respeta el sistema de diseno actual (colores HSL, clases `text-gold`, `btn-gold`, etc.).