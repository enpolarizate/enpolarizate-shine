## Objetivo
Reforzar la aceptación de políticas de privacidad en la ruta `/peliculas-arquitectonicas`.

## Cambios (todos en `src/pages/PeliculasArquitectonicas.tsx`)

### 1. Banner de cookies global
Ya está montado globalmente en `App.tsx` (`<CookieConsent />`), por lo que aparece automáticamente en esta ruta. Verificaré en preview que se muestre correctamente sobre el fondo oscuro de la página; si hace falta, no cambia nada más.

### 2. Enlace a Política de Privacidad en el footer
En el bloque inferior del footer (línea ~790, junto al copyright):
- Agregar un enlace `Política de Privacidad` que apunte a `/peliculas-arquitectonicas` no — apunta a la ruta existente `/politica-privacidad` usando `<Link>` de `react-router-dom`.
- Estilo discreto coherente con el footer (`text-muted-foreground hover:text-[var(--gold)]`).

### 3. Checkbox de aceptación en el CTA final
En el componente `FinalCta` (línea 727):
- Agregar un checkbox controlado ("Acepto la Política de Privacidad y el tratamiento de mis datos") justo arriba del botón "Recibir asesoría por WhatsApp".
- El texto incluye un link a `/politica-privacidad`.
- El botón CTA queda deshabilitado (opacidad + `pointer-events-none`) hasta marcar la casilla; al marcarla, el `<a>` queda activo y abre WhatsApp.
- Se mantiene el mismo estilo visual del botón dorado actual.

## Detalles técnicos
- Reusar `useState<boolean>` local en `FinalCta`.
- Importar `Link` desde `react-router-dom` (ya disponible en el proyecto).
- No se toca `CookieConsent.tsx` ni `App.tsx`.
- No se introducen colores nuevos; se reutilizan tokens `var(--gold)`, `text-muted-foreground`, y clases existentes (`glass-card` opcional para enmarcar el checkbox).
