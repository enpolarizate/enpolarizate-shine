# ENPOLARÍZATE — Landing Web

Sitio web estático de ENPOLARÍZATE, especialistas en polarizado automotriz y películas arquitectónicas.

## Tecnologías

- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- React Router (HashRouter para compatibilidad con GitHub Pages)

## Requisitos previos

- [Bun](https://bun.sh/) (recomendado) o Node.js 20+
- Cuenta de GitHub (para el deploy)

## Desarrollo local

```bash
# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun run dev

# Generar build de producción
bun run build
```

## Deploy en GitHub Pages (pasos para el cliente)

1. **Crear repositorio público en GitHub**
   - Ir a [github.com](https://github.com) y crear una cuenta (si no tiene).
   - Crear un nuevo repositorio público con nombre `enpolarizate-web`.

2. **Subir este código al repositorio**
   - Subir todos los archivos del proyecto a la rama `main` del nuevo repositorio.

3. **Activar GitHub Pages**
   - Ir a **Settings > Pages** del repositorio.
   - En **Source**, seleccionar **GitHub Actions**.
   - El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente en cada push a `main`.

4. **Conectar el dominio personalizado (`enpolarizate.com`)**
   - En **Settings > Pages > Custom domain**, ingresar `enpolarizate.com` y guardar.
   - GitHub generará automáticamente un archivo `CNAME` en el repositorio.
   - En el registrador de dominios (donde se compró `enpolarizate.com`), actualizar los registros DNS:
     - **A records** para `@` (root):
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - **CNAME record** para `www`: `<usuario-de-github>.github.io`
   - Esperar propagación DNS (hasta 48 horas).
   - GitHub provisionará automáticamente el certificado SSL (HTTPS).

5. **Verificar**
   - Acceder a `https://enpolarizate.com` y confirmar que carga correctamente.
   - Probar las rutas: `/politica-privacidad` y `/peliculas-arquitectonicas`.

## Notas importantes

- Este proyecto usa **HashRouter** en lugar de BrowserRouter para garantizar que todas las rutas funcionen correctamente en GitHub Pages.
- Las URLs internas tendrán el formato `enpolarizate.com/#/politica-privacidad`. Esto es normal y funcional en GitHub Pages.
- Cualquier cambio futuro requiere editar el código y hacer push al repositorio de GitHub; ya no se podrá usar el editor visual de Lovable.