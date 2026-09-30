/* ==========================================================
   i18n.js
   Motor de traducción del sitio. Depende de TRANSLATIONS
   (translations.js), así que se carga justo después de él.

   Expone un objeto global I18N:
     I18N.init()           detecta el idioma y traduce la página
     I18N.t(clave, datos)  devuelve un texto del idioma activo
     I18N.plural(clave, n) elige entre clave.one y clave.other
     I18N.pick(campo)      toma {es, en} y devuelve el del idioma activo
     I18N.setLang('en')    cambia el idioma y avisa a los suscriptores
     I18N.onChange(fn)     ejecuta fn cada vez que cambia el idioma
     I18N.lang             idioma activo ('es' o 'en')

   Prioridad para elegir el idioma al entrar:
     1. ?lang=en en la URL (útil para compartir un enlace)
     2. La última elección del visitante (localStorage)
     3. El idioma del navegador (español -> es, cualquier otro -> en)
   ========================================================== */

(function () {
  const SUPPORTED = ['es', 'en'];
  const DEFAULT_LANG = 'es';
  const STORAGE_KEY = 'portfolio-lang';

  const listeners = [];
  let current = DEFAULT_LANG;

  // Busca una clave con puntos ("about.facts.focus") dentro de un idioma
  function lookup(lang, key) {
    return key
      .split('.')
      .reduce((node, part) => (node == null ? undefined : node[part]), TRANSLATIONS[lang]);
  }

  // Texto del idioma activo; si falta, usa el español y, si no, la clave
  function t(key, params) {
    let value = lookup(current, key);
    if (value === undefined) value = lookup(DEFAULT_LANG, key);
    if (value === undefined) return key;

    if (typeof value === 'string' && params) {
      value = value.replace(/\{(\w+)\}/g, (match, name) => (name in params ? params[name] : match));
    }
    return value;
  }

  function plural(key, count) {
    return t(`${key}.${count === 1 ? 'one' : 'other'}`, { count });
  }

  // Campos bilingües de data.js: { es: '...', en: '...' }
  function pick(field) {
    if (field && typeof field === 'object' && !Array.isArray(field)) {
      return field[current] ?? field[DEFAULT_LANG];
    }
    return field;
  }

  // localStorage puede fallar (modo privado, cookies bloqueadas)
  function readStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* sin almacenamiento, el idioma solo dura esta visita */
    }
  }

  function detectLang() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    const chosen = [fromUrl, readStoredLang()].find((lang) => SUPPORTED.includes(lang));
    if (chosen) return chosen;

    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return browser === 'es' ? 'es' : 'en';
  }

  // Traduce todo lo marcado en el HTML:
  //   data-i18n="clave"                     -> texto del elemento
  //   data-i18n-attr="atributo:clave; ..."  -> atributos (aria-label, placeholder...)
  function applyToDom() {
    document.documentElement.lang = current;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':').map((part) => part.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });

    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.lang === current);
    });
  }

  // Devuelve false si el idioma no está soportado
  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return false;
    if (lang === current) return true;

    current = lang;
    storeLang(lang);
    applyToDom();
    listeners.forEach((fn) => fn(lang));
    return true;
  }

  function init() {
    current = detectLang();
    applyToDom();

    // Cualquier botón con data-lang="es|en" funciona como selector
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-lang]');
      if (btn) setLang(btn.dataset.lang);
    });
  }

  window.I18N = {
    SUPPORTED,
    init,
    t,
    plural,
    pick,
    setLang,
    onChange: (fn) => listeners.push(fn),
    get lang() {
      return current;
    }
  };
})();
