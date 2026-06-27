## Plan

1. **Corregir enlaces para Lovable con HashRouter**
   - Cambiar los enlaces de páginas internas para que apunten a:
     - `/#/politica-privacidad`
     - `/#/peliculas-arquitectonicas`

2. **Agregar enlace visible a Arquitectura**
   - En el footer actualmente aparece política de privacidad, pero no aparece claramente la página de películas arquitectónicas.
   - Agregar un enlace visible llamado “Películas arquitectónicas”.

3. **Corregir enlaces de regreso**
   - En la página de políticas, el botón “Volver al inicio” apunta a `/`.
   - Cambiarlo a `/#/` para que funcione igual en Lovable y GitHub Pages.

4. **Mejorar la página 404**
   - Cambiar “Return to Home” por texto en español.
   - Agregar accesos directos a:
     - Inicio
     - Política de privacidad
     - Películas arquitectónicas

5. **URLs que deben funcionar en Lovable después del ajuste**
   - `https://enpolarizate-shine.lovable.app/#/`
   - `https://enpolarizate-shine.lovable.app/#/politica-privacidad`
   - `https://enpolarizate-shine.lovable.app/#/peliculas-arquitectonicas`

## Detalle técnico

El problema no es que las páginas no existan. Sí están creadas y registradas en `App.tsx`. El problema es la navegación: algunos enlaces usan formato normal como `/politica-privacidad`, pero el proyecto está usando `HashRouter`, que necesita rutas con `#/`.