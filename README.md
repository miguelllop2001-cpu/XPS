# Mi Negocio

Aplicación web para gestión de ventas, inventario, comisiones y múltiples negocios.

## Cómo publicarla en GitHub Pages

1. Sube todos estos archivos a un repositorio.
2. Ve a **Settings → Pages**.
3. En "Source" elige la rama `main` y la carpeta `/ (root)`.
4. Guarda. En un minuto tu app estará en `https://TU-USUARIO.github.io/TU-REPO/`.

## Archivos

- `index.html` — la aplicación completa
- `manifest.json` — permite instalarla como app
- `service-worker.js` — permite usarla sin internet
- `icon-192.png`, `icon-512.png` — íconos de la app

## Al subir una versión nueva

Cambia el número de versión en `service-worker.js` (línea `const CACHE`) para que la actualización llegue a todos.
