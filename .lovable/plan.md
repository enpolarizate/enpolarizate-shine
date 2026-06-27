## Objetivo
Migrar el proyecto ENPOLARÍZATE de Lovable a GitHub Pages (cuenta del cliente, repo público, dominio enpolarizate.com) para eliminar la dependencia de la suscripción de Lovable.

## Resumen de viabilidad
- **Sí es posible**: el proyecto es 100% frontend (React + Vite), sin backend ni APIs propias.
- **Costo**: $0 (repo público + GitHub Pages + dominio ya pagado).
- **Limitación clave**: GitHub Pages no soporta SPA routing (`BrowserRouter`) de forma nativa. Es necesario cambiar a `HashRouter` para que las rutas internas funcionen al recargar o compartir enlaces directos.

## Pasos del plan

### 1. Exportar el código fuente
Dado que el cliente no quiere seguir pagando Lovable, se exporta el código directamente desde el editor de Lovable o se descarga una vez antes de cancelar.

### 2. Crear cuenta de GitHub y repositorio público
- Crear cuenta de GitHub para el cliente.
- Crear un repositorio público con nombre descriptivo (ej. `enpolarizate-web`).
- Inicializar con README.

### 3. Adaptar el código para GitHub Pages
- **Cambiar routing**: Reemplazar `BrowserRouter` por `HashRouter` en `src/App.tsx`. Esto asegura que rutas como `/politica-privacidad` funcionen correctamente al recargar la página en GitHub Pages.
- **Agregar `base` en Vite**: Configurar `base: "/enpolarizate-web/"` (o el nombre del repo) en `vite.config.ts` para que los assets se resuelvan bien. Si se usa dominio personalizado en la raíz, `base: "/"` es suficiente.
- **Eliminar dependencias innecesarias**: Quitar `lovable-tagger` del `vite.config.ts` y del `package.json` (es un plugin de desarrollo de Lovable, innecesario fuera de la plataforma).
- **Limpiar metadatos**: Revisar que `index.html` y manifiestos no contengan referencias a Lovable.

### 4. Subir el código al repositorio
- Subir todo el código adaptado al repo de GitHub.
- Confirmar que el `README.md` explique cómo hacer build localmente.

### 5. Activar GitHub Pages
- En Settings > Pages del repositorio, seleccionar "GitHub Actions" o "Deploy from a branch" (rama `main`, carpeta raíz o `/docs`).
- Para un proyecto Vite, la opción recomendada es usar **GitHub Actions** con un workflow que ejecute `npm run build` y despliegue automáticamente a GitHub Pages.

### 6. Configurar el dominio personalizado (`enpolarizate.com`)
- En Settings > Pages > Custom domain, ingresar `enpolarizate.com`.
- GitHub generará un archivo `CNAME` automáticamente en el repo.
- **Importante**: Los DNS actuales apuntan a Lovable (`185.158.133.1`). Deben cambiarse en el registrador del dominio a los de GitHub Pages:
  - **A records** para `@` (root): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - **CNAME record** para `www`: `usuario.github.io` (reemplazando con el usuario real de GitHub)
- Esperar propagación DNS (puede tardar hasta 48 horas).
- GitHub provisionará automáticamente el certificado SSL (HTTPS).

### 7. Verificación final
- Confirmar que `https://enpolarizate.com` carga correctamente.
- Probar todas las rutas: home, `/politica-privacidad`, `/peliculas-arquitectonicas`.
- Verificar que los botones a WhatsApp, enlaces a Google Maps y redes sociales funcionen.
- Confirmar que las imágenes y assets se cargan sin errores 404.

## Notas técnicas
- **Rutas con #**: Al usar `HashRouter`, las URLs serán del tipo `enpolarizate.com/#/politica-privacidad`. Esto es funcional pero menos "limpio" que las URLs actuales sin `#`. Es el trade-off obligatorio de GitHub Pages para SPAs sin servidor propio.
- **Dominio**: Conectar el dominio en GitHub Pages es gratuito y el certificado SSL es automático. No es "mejor" ni "peor" que Lovable en ese sentido; es simplemente otro proveedor de hosting estático.
- **Actualizaciones futuras**: Una vez migrado, cualquier cambio en el código requiere editar los archivos localmente o en GitHub y esperar el deploy automático de GitHub Actions. Ya no se podrá usar el editor visual de Lovable.