# Portafolio — Joan Sebastian Chaparro Rodriguez

Portafolio web estático, dividido en archivos por responsabilidad para que sea fácil de leer, editar y ampliar.

## Estructura del proyecto

```
portafolio/
├── index.html          Estructura de la página (HTML)
├── css/
│   └── styles.css      Todos los estilos, organizados por secciones (CSS)
├── js/
│   ├── data.js         Lista de proyectos: nombre, repo, descripción (JavaScript)
│   ├── terminal.js     Lógica de la terminal simulada de la portada (JavaScript)
│   └── app.js          Filtro de proyectos y arranque de la página (JavaScript)
├── data/
│   └── projects.json   Misma información de data.js, en formato JSON de referencia
└── README.md           Este archivo
```

El sitio usa **HTML** para la estructura, **CSS** para el diseño y **JavaScript** para la interactividad (filtros y terminal). El archivo `data/projects.json` es una copia de los mismos proyectos en **JSON**, pensada para reutilizarse en otra herramienta (por ejemplo un flujo de **n8n**) sin tocar el sitio web.

## Cómo ver el sitio

Abre `index.html` con doble clic en cualquier navegador. No necesita servidor ni instalación, porque todos los archivos se cargan como `<script>` normales.

## Cómo editar cada parte

- **Colores:** abre `css/styles.css` y cambia las variables al inicio del archivo, dentro de `:root { ... }` (`--bg` es el fondo, `--ink` el texto, `--card` el fondo de las tarjetas).
- **Textos (Sobre mí, habilidades blandas, contacto):** están directamente en `index.html`.
- **Agregar o modificar un proyecto:** edita el arreglo `PROJECTS` en `js/data.js`. Copia un objeto existente y cambia `n` (nombre), `l` (lenguaje), `r` (nombre exacto del repositorio en GitHub), `d` (descripción) y `t` (etiquetas). Si quieres mantener sincronizado el archivo de referencia, actualiza también `data/projects.json`.
- **Terminal:** el texto que se escribe solo al cargar (`bienvenidos :D`) está en la constante `introText` de `js/terminal.js`, y las líneas de bienvenida en el arreglo `welcome`. Los comandos están en el objeto `COMMANDS`; puedes agregar uno nuevo, por ejemplo `cv`, siguiendo el mismo patrón.
- **Filtros de lenguaje:** si agregas un lenguaje nuevo a `js/data.js`, súmalo también al arreglo `FILTERS` en `js/app.js` y agrega su fila en la sección "Lenguajes" de `index.html`.

## Publicarlo gratis (GitHub Pages)

1. Sube esta carpeta a un repositorio de GitHub (por ejemplo, `portafolio`).
2. Entra a **Settings → Pages** del repositorio.
3. En "Source" elige la rama principal (`main`) y la carpeta raíz (`/`).
4. Guarda. GitHub te da un enlace tipo `https://sebaschaparrorodriguez-ux.github.io/portafolio/`.

## Notas

- El diseño se adapta a celular y respeta el modo claro/oscuro del sistema del visitante.
- Para una versión en inglés, se puede duplicar `index.html` y traducir sus textos sin tocar `css/` ni `js/`.
