/* ==========================================================
   data.js
   Aquí vive toda la información de los proyectos.
   No hay lógica en este archivo, solo datos, para que sea
   fácil de editar sin tocar el resto del código.

   Para agregar un proyecto nuevo copia un objeto del arreglo
   PROJECTS y cambia:
     n -> nombre del proyecto
     l -> lenguaje principal (debe coincidir con los botones
          de la sección "Lenguajes" en index.html si quieres
          que el filtro lo reconozca)
     r -> nombre exacto del repositorio en GitHub
     d -> descripción corta (una o dos frases)
     t -> lista de etiquetas para mostrar como chips
   ========================================================== */

// Usuario de GitHub; se reutiliza para armar los enlaces de cada repo
const GITHUB_USER = 'https://github.com/sebaschaparrorodriguez-ux/';

const PROJECTS = [
  {
    n: 'Clasificador de videojuegos',
    l: 'Python',
    r: 'Clasificador-de-videojuegos',
    d: 'Recibe por terminal tus videojuegos con horas jugadas y puntuación personal, y entrega tu top 3.',
    t: ['Terminal', 'Ranking']
  },
  {
    n: 'Sistema de finanzas',
    l: 'Python',
    r: 'Sistema-de-Finanzas',
    d: 'Sistema en Python para organizar y consultar finanzas personales desde la terminal.',
    t: ['Terminal', 'Lógica']
  },
  {
    n: 'Sistema guía de menús',
    l: 'Sistemas',
    r: 'SistemaGuiaDeMenus',
    d: 'Sistema navegable por menús, pensado para guiar al usuario paso a paso.',
    t: ['Menús', 'Experiencia de uso']
  },
  {
    n: 'Examen MySQL',
    l: 'MySQL',
    r: 'Examen-MySql',
    d: 'Ejercicio de bases de datos relacionales resuelto con MySQL.',
    t: ['SQL', 'Bases de datos']
  },
  {
    n: 'Pseudocódigo para calcular notas',
    l: 'Pseudocódigo',
    r: 'Examen-Introduccion-Joan-Sebastian-Chaparro-Rodriguez',
    d: 'Solución del examen de introducción: algoritmo en pseudocódigo (Papyrus) para calcular notas.',
    t: ['Algoritmos', 'Papyrus']
  }
];
