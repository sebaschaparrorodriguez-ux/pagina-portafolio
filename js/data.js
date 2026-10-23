/* ==========================================================
   data.js
   Aquí vive toda la información de los proyectos.
   No hay lógica en este archivo, solo datos, para que sea
   fácil de editar sin tocar el resto del código.

   Para agregar un proyecto nuevo copia un objeto del arreglo
   PROJECTS y cambia:
     l -> id del lenguaje principal: javascript, typescript,
          python, gdscript, mysql, pseudocode o systems. Su
          nombre visible está en techName dentro de
          js/translations.js
     r -> nombre exacto del repositorio en GitHub
     n -> nombre del proyecto        { es, en }
     d -> descripción corta          { es, en }
     t -> etiquetas para los chips   { es: [...], en: [...] }
     w -> (opcional) enlace a la versión publicada

   El orden del arreglo es el orden en que se muestran:
   los proyectos más recientes van primero.
   ========================================================== */

// Usuario de GitHub; se reutiliza para armar los enlaces de cada repo
const GITHUB_USER = 'https://github.com/sebaschaparrorodriguez-ux/';

const PROJECTS = [
  {
    l: 'javascript',
    r: 'EventPass',
    w: 'https://eventpass-barrio.vercel.app',
    n: { es: 'EventPass Barrio', en: 'EventPass Barrio' },
    d: {
      es: 'Plataforma para inscribirse a los eventos navideños del barrio: registro con código por correo, lista de espera, recordatorios por Telegram y Gmail, roles y un asistente que resuelve dudas.',
      en: 'Platform to sign up for neighborhood Christmas events: email-code sign-up, waitlist, Telegram and Gmail reminders, user roles and an assistant that answers questions.'
    },
    t: { es: ['React', 'n8n', 'Vercel'], en: ['React', 'n8n', 'Vercel'] }
  },
  {
    l: 'typescript',
    r: 'AutoFood',
    n: { es: 'AutoFood', en: 'AutoFood' },
    d: {
      es: 'Plataforma SaaS para restaurantes en Colombia: varios restaurantes en un solo sistema, cada uno aislado con seguridad a nivel de fila en PostgreSQL. En desarrollo.',
      en: 'SaaS platform for restaurants in Colombia: many restaurants in one system, each isolated with PostgreSQL row-level security. In progress.'
    },
    t: { es: ['NestJS', 'Next.js', 'PostgreSQL'], en: ['NestJS', 'Next.js', 'PostgreSQL'] }
  },
  {
    l: 'gdscript',
    r: 'Hasta-el-Nucleo',
    n: { es: 'Hasta el Núcleo', en: 'Down to the Core' },
    d: {
      es: 'Videojuego cooperativo 3D para 1 a 4 jugadores hecho en Godot: perfora hasta el centro del planeta, mina carbón para el horno y vence jefes en mazmorras. Túnel procedural y multijugador en red.',
      en: 'Co-op 3D game for 1 to 4 players made in Godot: drill to the center of the planet, mine coal for the furnace and beat dungeon bosses. Procedural tunnel and online multiplayer.'
    },
    t: { es: ['Godot', 'Multijugador', 'Videojuego'], en: ['Godot', 'Multiplayer', 'Game'] }
  },
  {
    l: 'javascript',
    r: 'M-s-que-un-antojo-WebPage',
    n: { es: 'Más que un antojo', en: 'Más que un antojo' },
    d: {
      es: 'Tienda web para una repostería: catálogo con buscador, cuentas de cliente, carrito que envía el pedido por WhatsApp y panel de administración.',
      en: 'Online store for a bakery: searchable catalog, customer accounts, a cart that sends the order through WhatsApp and an admin panel.'
    },
    t: { es: ['Node.js', 'SQLite', 'Tienda'], en: ['Node.js', 'SQLite', 'Store'] }
  },
  {
    l: 'mysql',
    r: 'Nueva-carpeta',
    n: { es: 'Base de datos de una pizzería', en: 'Pizzeria database' },
    d: {
      es: 'Modelo relacional en tercera forma normal para una pizzería: productos, ingredientes, adiciones, combos, menú y pedidos.',
      en: 'Relational model in third normal form for a pizzeria: products, ingredients, add-ons, combos, menu and orders.'
    },
    t: { es: ['SQL', 'Modelo E-R'], en: ['SQL', 'ER model'] }
  },
  {
    l: 'python',
    r: 'Clasificador-de-videojuegos',
    n: { es: 'Clasificador de videojuegos', en: 'Video game ranker' },
    d: {
      es: 'Recibe por terminal tus videojuegos con horas jugadas y puntuación personal, y entrega tu top 3.',
      en: 'Takes your video games, hours played and personal score from the terminal, and returns your top 3.'
    },
    t: { es: ['Terminal', 'Ranking'], en: ['Terminal', 'Ranking'] }
  },
  {
    l: 'python',
    r: 'Sistema-de-Finanzas',
    n: { es: 'Sistema de finanzas', en: 'Personal finance system' },
    d: {
      es: 'Sistema en Python para organizar y consultar finanzas personales desde la terminal.',
      en: 'Python system to organize and review personal finances from the terminal.'
    },
    t: { es: ['Terminal', 'Lógica'], en: ['Terminal', 'Logic'] }
  },
  {
    l: 'systems',
    r: 'SistemaGuiaDeMenus',
    n: { es: 'Sistema guía de menús', en: 'Guided menu system' },
    d: {
      es: 'Sistema navegable por menús, pensado para guiar al usuario paso a paso.',
      en: 'Menu-driven system designed to guide the user step by step.'
    },
    t: { es: ['Menús', 'Experiencia de uso'], en: ['Menus', 'User experience'] }
  },
  {
    l: 'mysql',
    r: 'Examen-MySql',
    n: { es: 'Examen MySQL', en: 'MySQL exam' },
    d: {
      es: 'Ejercicio de bases de datos relacionales resuelto con MySQL.',
      en: 'Relational database exercise solved with MySQL.'
    },
    t: { es: ['SQL', 'Bases de datos'], en: ['SQL', 'Databases'] }
  },
  {
    l: 'pseudocode',
    r: 'Examen-Introduccion-Joan-Sebastian-Chaparro-Rodriguez',
    n: { es: 'Pseudocódigo para calcular notas', en: 'Grade calculator in pseudocode' },
    d: {
      es: 'Solución del examen de introducción: algoritmo en pseudocódigo (Papyrus) para calcular notas.',
      en: 'Intro exam solution: a pseudocode algorithm (Papyrus) that calculates grades.'
    },
    t: { es: ['Algoritmos', 'Papyrus'], en: ['Algorithms', 'Papyrus'] }
  }
];
