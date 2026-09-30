/* ==========================================================
   app.js
   Punto de entrada de la página. Se encarga de:
     1. Dibujar los proyectos según el filtro activo
     2. Conectar los botones de filtro (sección Proyectos
        y sección Lenguajes)
     3. Arrancar la terminal simulada (terminal.js)

   Depende de PROJECTS y GITHUB_USER (data.js) y de
   initTerminal() (terminal.js), así que este archivo debe
   cargarse de último en index.html.
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const filterBar = document.getElementById('fl');
  const grid = document.getElementById('grid');
  const languageRows = document.getElementById('lp');

  const FILTERS = ['Todos', 'Python', 'MySQL', 'Pseudocódigo'];
  let currentFilter = 'Todos';

  // Dibuja los botones de filtro (Todos / Python / MySQL / Pseudocódigo)
  function renderFilterButtons() {
    filterBar.innerHTML = FILTERS.map(
      (name) => `<button aria-pressed="${name === currentFilter}" data-filter="${name}">${name}</button>`
    ).join('');
  }

  // Dibuja las tarjetas de proyecto que coinciden con el filtro activo
  function renderProjectCards() {
    const visible = PROJECTS.filter((p) => currentFilter === 'Todos' || p.l === currentFilter);

    grid.innerHTML = visible
      .map(
        (p) => `
        <article class="pj">
          <h3>${p.n}</h3>
          <div class="tg">
            <span class="l">${p.l}</span>
            ${p.t.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
          <p>${p.d}</p>
          <a href="${GITHUB_USER}${p.r}" target="_blank" rel="noopener">Ver código en GitHub</a>
        </article>`
      )
      .join('');
  }

  // Marca como activa la fila de lenguaje que coincide con el filtro
  function syncLanguageRows() {
    languageRows.querySelectorAll('.row[data-l]').forEach((row) => {
      row.setAttribute('aria-pressed', row.dataset.l === currentFilter);
    });
  }

  // Vuelve a pintar todo lo que depende del filtro activo
  function render() {
    renderFilterButtons();
    renderProjectCards();
    syncLanguageRows();
  }

  // Clic en un botón de filtro (Todos / Python / MySQL / Pseudocódigo)
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    render();
  });

  // Clic en una fila de la sección "Lenguajes": filtra y baja a Proyectos
  languageRows.addEventListener('click', (e) => {
    const row = e.target.closest('.row[data-l]');
    if (!row) return;
    currentFilter = row.dataset.l;
    render();
    document.getElementById('proyectos').scrollIntoView();
  });

  render();
  initTerminal();
});
