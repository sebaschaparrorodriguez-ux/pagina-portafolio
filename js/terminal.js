/* ==========================================================
   terminal.js
   Simula una pequeña terminal interactiva en la portada.
   Depende de PROJECTS y GITHUB_USER, definidos en data.js
   (por eso data.js se carga antes que este archivo).

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

  // Cada comando disponible devuelve el texto (o HTML) que se imprime
  const COMMANDS = {
    help: () =>
      'Comandos:\n' +
      '  about     quién soy\n' +
      '  skills    lenguajes y tecnologías\n' +
      '  projects  mis repositorios\n' +
      '  soft      habilidades blandas\n' +
      '  contact   cómo encontrarme\n' +
      '  clear     limpiar pantalla',

    about: () =>
      'Joan Sebastian Chaparro Rodriguez\n' +
      'Desarrollador en formación, San Gil, Santander.\n' +
      'Me gusta que el código sea claro y que el programa se explique solo.',

    skills: () =>
      'Python (principal), MySQL, Pseudocódigo\n' +
      'JavaScript, Java, JSON, BSON, n8n',

    projects: () =>
      PROJECTS.map(
        (p) =>
          `<a href="${GITHUB_USER}${p.r}" target="_blank" rel="noopener">${I18N.pick(p.n)}</a> ` +
          `<span class="dim">(${I18N.t(`techName.${p.l}`)})</span>`
      ).join('\n'),

    soft: () =>
      'Pensamiento lógico, aprendizaje autónomo, comunicación clara,\n' +
      'trabajo en equipo, responsabilidad y adaptabilidad.',

    contact: () => `GitHub: <a href="${GITHUB_USER.slice(0, -1)}" target="_blank" rel="noopener">sebaschaparrorodriguez-ux</a>`
  };

  // Ejecuta un comando escrito o elegido con un chip
  function runCommand(raw) {
    const command = raw.trim().toLowerCase();
    if (!command) return;

    printLine('<span class="pr">&gt;&gt;&gt;</span> ' + escapeHtml(raw));

    if (command === 'clear') {
      out.innerHTML = '';
      return;
    }

    const handler = COMMANDS[command];
    printLine(handler ? handler() : `Comando no reconocido: ${escapeHtml(command)}. Escribe help para ver la lista.`);
  }

  // Efecto de "escritura" para el mensaje de bienvenida
  async function typeIntro() {
    const line = document.createElement('div');
    line.innerHTML = '<span class="pr">&gt;&gt;&gt;</span> <span id="ty"></span>';
    out.appendChild(line);
    const typedSpan = line.querySelector('#ty');

    const introText = 'bienvenidos :D';
    for (const char of introText) {
      typedSpan.textContent += char;
      await sleep(55);
    }

    await sleep(250);
    const welcome = [
      'Hola, soy Joan Sebastian.',
      'Soy desarrollador en formación, especializado en Python, MySQL, JavaScript, Java, JSON, BSON y n8n.',
      'Escribe un comando o toca un botón.'
    ];
    for (const text of welcome) {
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
