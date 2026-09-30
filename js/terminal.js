/* ==========================================================
   terminal.js
   Simula una pequeña terminal interactiva en la portada.
   Depende de I18N (i18n.js) y de PROJECTS y GITHUB_USER,
   definidos en data.js (por eso se cargan antes que este archivo).
   Sus textos están en translations.js, dentro de "term".

   Expone una sola función global: initTerminal(), que
   app.js llama una vez cargado el documento.
   ========================================================== */

(function () {
  const out = document.getElementById('out');
  const input = document.getElementById('cmd');
  const chips = document.getElementById('chips');

  // Respeta si el visitante pidió menos animaciones en su sistema
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, reduceMotion ? 0 : ms));

  // Evita que un comando escrito por el usuario inyecte HTML
  function escapeHtml(text) {
    return text.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  }

  // Imprime una línea en la terminal
  function printLine(html, className) {
    const line = document.createElement('div');
    if (className) line.className = className;
    line.innerHTML = html;
    out.appendChild(line);
    out.scrollTop = out.scrollHeight;
  }

  // Los textos salen de translations.js (term.*); los arreglos son varias líneas
  const lines = (key) => I18N.t(key).join('\n');

  // Orden en que aparecen los comandos al escribir help
  const HELP_ORDER = ['about', 'skills', 'projects', 'soft', 'contact', 'lang', 'clear'];

  // Cada comando disponible devuelve el texto (o HTML) que se imprime.
  // Los nombres de comando son iguales en ambos idiomas.
  const COMMANDS = {
    help: () =>
      [I18N.t('term.help.header'), ...HELP_ORDER.map((c) => `  ${c.padEnd(10)}${I18N.t(`term.help.${c}`)}`)].join('\n'),

    about: () => lines('term.about'),

    skills: () => lines('term.skills'),

    projects: () =>
      PROJECTS.map(
        (p) =>
          `<a href="${GITHUB_USER}${p.r}" target="_blank" rel="noopener">${I18N.pick(p.n)}</a> ` +
          `<span class="dim">(${I18N.t(`techName.${p.l}`)})</span>`
      ).join('\n'),

    soft: () => lines('term.soft'),

    contact: () => `GitHub: <a href="${GITHUB_USER.slice(0, -1)}" target="_blank" rel="noopener">sebaschaparrorodriguez-ux</a>`,

    // lang es | lang en: cambia el idioma de toda la página
    lang: (code) =>
      I18N.setLang(code) ? I18N.t('term.langChanged') : I18N.t('term.langUsage', { lang: I18N.lang })
  };

  // Ejecuta un comando escrito o elegido con un chip ("lang en" -> comando + argumento)
  function runCommand(raw) {
    const [command, arg] = raw.trim().toLowerCase().split(/\s+/);
    if (!command) return;

    printLine('<span class="pr">&gt;&gt;&gt;</span> ' + escapeHtml(raw));

    if (command === 'clear') {
      out.innerHTML = '';
      return;
    }

    const handler = COMMANDS[command];
    printLine(handler ? handler(arg) : I18N.t('term.unknown', { cmd: escapeHtml(command) }));
  }

  // Efecto de "escritura" para el mensaje de bienvenida
  async function typeIntro() {
    const line = document.createElement('div');
    line.innerHTML = '<span class="pr">&gt;&gt;&gt;</span> <span id="ty"></span>';
    out.appendChild(line);
    const typedSpan = line.querySelector('#ty');

    for (const char of I18N.t('term.intro')) {
      typedSpan.textContent += char;
      await sleep(55);
    }

    await sleep(250);
    for (const text of I18N.t('term.welcome')) {
      printLine(text);
      await sleep(350);
    }
  }

  // Conecta los eventos y arranca la animación de bienvenida
  function initTerminal() {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        runCommand(input.value);
        input.value = '';
      }
    });

    const commandList = ['about', 'skills', 'projects', 'soft', 'contact'];
    chips.innerHTML = commandList.map((c) => `<button>${c}</button>`).join('');
    chips.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (btn) runCommand(btn.textContent);
    });

    typeIntro();
  }

  // Se expone globalmente para que app.js la llame
  window.initTerminal = initTerminal;
})();
