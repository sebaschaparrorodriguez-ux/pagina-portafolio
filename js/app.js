/* ==========================================================
   app.js
   Punto de entrada de la página. Se encarga de:
     1. Activar el idioma (i18n.js)
     2. Dibujar los proyectos según el filtro activo
     3. Conectar los botones de filtro (sección Proyectos
        y sección Lenguajes)
     4. Arrancar la terminal simulada (terminal.js)

   Depende de I18N (i18n.js), PROJECTS y GITHUB_USER (data.js)
   y de initTerminal() (terminal.js), así que este archivo debe
   cargarse de último en index.html.
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const filterBar = document.getElementById('fl');
  const grid = document.getElementById('grid');
  const languageRows = document.getElementById('lp');

  // Ids de lenguaje (ver techName en translations.js); 'all' muestra todo
  const FILTERS = ['all', 'python', 'mysql', 'pseudocode'];
  let currentFilter = 'all';

  const techLabel = (id) => I18N.t(`techName.${id}`);
  const filterLabel = (id) => (id === 'all' ? I18N.t('projects.all') : techLabel(id));

  // Dibuja los botones de filtro (Todos / Python / MySQL / Pseudocódigo)
  function renderFilterButtons() {
    filterBar.innerHTML = FILTERS.map(
      (id) => `<button aria-pressed="${id === currentFilter}" data-filter="${id}">${filterLabel(id)}</button>`
    ).join('');
  }

  // Dibuja las tarjetas de proyecto que coinciden con el filtro activo
  function renderProjectCards() {
    const visible = PROJECTS.filter((p) => currentFilter === 'all' || p.l === currentFilter);

    grid.innerHTML = visible
      .map(
        (p) => `
        <article class="pj">
          <h3>${I18N.pick(p.n)}</h3>
          <div class="tg">
            <span class="l">${techLabel(p.l)}</span>
            ${I18N.pick(p.t).map((tag) => `<span>${tag}</span>`).join('')}
          </div>
          <p>${I18N.pick(p.d)}</p>
          <a href="${GITHUB_USER}${p.r}" target="_blank" rel="noopener">${I18N.t('projects.viewCode')}</a>
        </article>`
      )
      .join('');
  }

  // Marca la fila de lenguaje activa y actualiza su contador de proyectos
  function syncLanguageRows() {
    languageRows.querySelectorAll('.row[data-l]').forEach((row) => {
      const id = row.dataset.l;
      const count = PROJECTS.filter((p) => p.l === id).length;
      row.setAttribute('aria-pressed', id === currentFilter);
      row.querySelector('em').textContent = I18N.plural('projects.count', count);
    });
  }

  // Vuelve a pintar todo lo que depende del filtro o del idioma
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

  I18N.init();
  I18N.onChange(render);
  render();
  initTerminal();
});
