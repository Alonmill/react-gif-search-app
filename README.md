# Buscador de Gifs – React con TypeScript SWC + Giphy API

Aplicación web desarrollada en **React** que permite buscar, visualizar y reutilizar GIFs utilizando la **API de Giphy  
La aplicación está optimizada para evitar peticiones HTTP innecesarias mediante un sistema de caché en memoria


## Tecnologías

- **React**
- **TypeScript + SWC**
- **Hooks de React**
  - `useState`
  - `useEffect`
  - `useRef`
  - **Custom Hooks**
-  **Giphy API**
-  **Axios** 
-  CSS / CSS Modules

---

## Funcionalidades

- Búsqueda de GIFs por texto
- Historial de búsquedas recientes (máx. 8)
- Caché de resultados para búsquedas repetidas
- Evita peticiones HTTP duplicadas
- Reutilización de búsquedas previas con un solo click
-  Arquitectura basada en componentes
-  Tipado estricto con interfaces TypeScript


- **Componentes** → Renderizan la UI
- **Custom Hook (`useGifs`)** → Maneja la lógica de negocio
- **Servicios** → Comunicación con la API de Giphy
- **Interfaces** → Tipado de datos


## Despliegue

La aplicación se encuentra desplegada en Netlify y es accesible públicamente.

 Demo en producción:
 https://react-gif-search-alonso.netlify.app

 Proceso de despliegue
Repositorio conectado a GitHub
Build automático en cada push a la rama main
Comando de build:  npm run build
Directorio de publicación: dist
