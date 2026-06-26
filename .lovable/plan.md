# Eliminar botón "Asesoría WhatsApp" del Header

## Contexto
- Archivo: `src/pages/PeliculasArquitectonicas.tsx`
- El botón está en la línea 142 dentro del componente `Header`.
- Es el único lugar donde se renderiza `CtaButton` con el texto "Asesoría WhatsApp".

## Cambios a realizar
1. **Eliminar** la línea del `CtaButton` dentro del `<header>` en `PeliculasArquitectonicas.tsx`:
   ```tsx
   <CtaButton className="hidden sm:inline-flex !px-5 !py-2.5 !text-xs">Asesoría WhatsApp</CtaButton>
   ```
   Al eliminar este botón, el header quedará con el logo a la izquierda y el espacio a la derecha vacío, manteniendo el layout `justify-between`.

2. **Opcional**: si el `CtaButton` o sus estilos (`btn-gold`, etc.) dejan de usarse exclusivamente en este header (se usan en otras secciones), no se toca nada más.

## Riesgos
- Ninguno. Es un cambio de UI aislado que no afecta funcionalidad ni otras rutas del sitio.