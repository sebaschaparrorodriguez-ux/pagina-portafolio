# Portafolio — Joan Sebastian Chaparro Rodriguez

> **EN:** Static, bilingual (Spanish / English) portfolio website. No build step and no dependencies: open `index.html` and it works. Language is picked from `?lang=es|en`, the visitor's last choice, or the browser language.

Portafolio web estático y **bilingüe (español / inglés)**, dividido en archivos por responsabilidad para que sea fácil de leer, editar y ampliar.

## Estructura del proyecto

```
portafolio/
├── index.html            Estructura de la página (HTML)
├── css/
│   └── styles.css        Todos los estilos, organizados por secciones (CSS)
├── js/
│   ├── translations.js   Textos del sitio en español e inglés
│   ├── i18n.js           Motor de traducción y selector de idioma
│   ├── data.js           Lista de proyectos: nombre, repo, descripción
│   ├── terminal.js       Lógica de la terminal simulada de la portada
│   └── app.js            Filtro de proyectos y arranque de la página
├── data/
│   └── projects.json     Misma información de data.js, en formato JSON de referencia
└── README.md             Este archivo
```

El sitio usa **HTML** para la estructura, **CSS** para el diseño y **JavaScript** para la interactividad (idioma, filtros y terminal). El archivo `data/projects.json` es una copia de los mismos proyectos en **JSON**, pensada para reutilizarse en otra herramienta (por ejemplo un flujo de **n8n**) sin tocar el sitio web.

## Cómo ver el sitio

Abre `index.html` con doble clic en cualquier navegador. No necesita servidor ni instalación, porque todos los archivos se cargan como `<script>` normales.

Para abrirlo directamente en un idioma, agrega `?lang=en` o `?lang=es` al final de la URL.

## Idiomas (español / inglés)

El sitio detecta el idioma en este orden:

1. El parámetro `?lang=` de la URL (útil para compartir el enlace en inglés con un reclutador).
2. La última elección del visitante con el selector **ES / EN** de la navegación (se guarda en el navegador).
3. El idioma del navegador: español → `es`, cualquier otro → `en`.

También se puede cambiar desde la terminal de la portada con `lang es` o `lang en`.

**Cómo funciona:**

- Cada texto de `index.html` tiene un atributo `data-i18n="clave"`, por ejemplo `data-i18n="about.title"`. Al cargar, `js/i18n.js` reemplaza el texto por el de `js/translations.js` en el idioma activo.
- Los atributos (como `aria-label` o `placeholder`) se traducen con `data-i18n-attr="atributo:clave"`.
- El español queda escrito en el HTML como respaldo, por si JavaScript no carga.
- Si una clave falta en inglés, se muestra la versión en español.

## Cómo editar cada parte

- **Colores:** abre `css/styles.css` y cambia las variables al inicio del archivo, dentro de `:root { ... }` (`--bg` es el fondo, `--ink` el texto, `--card` el fondo de las tarjetas).
- **Textos (Sobre mí, habilidades blandas, contacto, terminal):** están en `js/translations.js`, con la misma clave en `es` y en `en`. Para un texto nuevo, crea la clave en ambos idiomas y ponle `data-i18n="tu.clave"` al elemento en `index.html`.
- **Agregar o modificar un proyecto:** edita el arreglo `PROJECTS` en `js/data.js`. Copia un objeto existente y cambia `l` (id del lenguaje: `python`, `mysql`, `pseudocode` o `systems`), `r` (nombre exacto del repositorio en GitHub), `n` (nombre), `d` (descripción) y `t` (etiquetas). `n`, `d` y `t` llevan una versión `es` y otra `en`. Si quieres mantener sincronizado el archivo de referencia, actualiza también `data/projects.json`.
- **Terminal:** los textos (`intro`, `welcome`, la ayuda y las respuestas) están en `js/translations.js`, dentro de `term`. Los comandos están en el objeto `COMMANDS` de `js/terminal.js`; para agregar uno nuevo, por ejemplo `cv`, súmalo a `COMMANDS`, a `HELP_ORDER` y agrega `term.help.cv` en ambos idiomas.
- **Filtros de lenguaje:** si agregas un lenguaje nuevo, crea su id en `js/data.js`, su nombre en `techName` y su descripción en `tech.desc` (`js/translations.js`), súmalo al arreglo `FILTERS` en `js/app.js` y agrega su fila en la sección "Lenguajes" de `index.html`. El contador de proyectos de cada fila se calcula solo.

## Publicarlo gratis (GitHub Pages)

1. Sube esta carpeta a un repositorio de GitHub (por ejemplo, `portafolio`).
2. Entra a **Settings → Pages** del repositorio.
3. En "Source" elige la rama principal (`main`) y la carpeta raíz (`/`).
4. Guarda. GitHub te da un enlace tipo `https://sebaschaparrorodriguez-ux.github.io/portafolio/`.

El archivo principal debe llamarse `index.html` en minúsculas: GitHub Pages distingue mayúsculas y no sirve `Index.html` como página de inicio.

## Notas

- El diseño se adapta a celular y respeta el modo claro/oscuro del sistema del visitante.
- La preferencia de idioma se guarda en `localStorage`. Si el navegador lo bloquea (modo privado), el sitio sigue funcionando y solo olvida la elección al cerrar.
