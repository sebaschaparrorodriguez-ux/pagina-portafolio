/* ==========================================================
   data.js
   Aquí vive toda la información de los proyectos.
   No hay lógica en este archivo, solo datos, para que sea
   fácil de editar sin tocar el resto del código.

   Para agregar un proyecto nuevo copia un objeto del arreglo
   PROJECTS y cambia:
     l -> id del lenguaje principal: python, mysql, pseudocode
          o systems. Su nombre visible está en techName dentro
          de js/translations.js
     r -> nombre exacto del repositorio en GitHub
     n -> nombre del proyecto        { es, en }
     d -> descripción corta          { es, en }
     t -> etiquetas para los chips   { es: [...], en: [...] }
   ========================================================== */

// Usuario de GitHub; se reutiliza para armar los enlaces de cada repo
const GITHUB_USER = 'https://github.com/sebaschaparrorodriguez-ux/';

const PROJECTS = [
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
