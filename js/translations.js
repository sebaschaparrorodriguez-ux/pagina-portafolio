/* ==========================================================
   translations.js
   Diccionarios de textos del sitio en español (es) e inglés (en).
   No hay lógica en este archivo, solo textos, igual que data.js.

   Cómo se usa:
     - En index.html un elemento con data-i18n="about.title"
       muestra el texto de TRANSLATIONS[idioma].about.title
     - En JavaScript se pide con I18N.t('about.title')
     - {count} o {cmd} dentro de un texto se reemplazan por valores
     - Las claves que terminan en .one / .other son plurales

   Para agregar un texto nuevo, crea la misma clave en "es" y
   en "en". Si falta en inglés, se muestra la versión en español.
   ========================================================== */

const TRANSLATIONS = {
  es: {
    meta: {
      title: 'Joan Sebastian Chaparro | Portafolio',
      description: 'Portafolio de Joan Sebastian Chaparro Rodriguez, desarrollador en formación: Python, bases de datos, formatos de datos y automatización.'
    },
    nav: {
      label: 'Principal',
      about: 'Sobre mí',
      tech: 'Tecnologías',
      projects: 'Proyectos',
      soft: 'Habilidades blandas',
      contact: 'Contacto'
    },
    lang: {
      label: 'Idioma'
    },
    hero: {
      lead: 'Desarrollador en formación desde San Gil, Santander. Python, bases de datos, formatos de datos y automatización, con la lógica pensada antes del código.',
      cta: 'Ver proyectos'
    },
    about: {
      title: 'Sobre mí',
      intro: 'Soy Joan Sebastian, de San Gil, Santander. Empecé con pseudocódigo para entender la lógica, seguí con Python y hoy sumo bases de datos, formatos de datos y automatización.',
      body: 'Me gusta construir programas simples que resuelven una necesidad concreta y que cualquiera pueda entender. Busco un equipo donde aprender rápido, aportar con constancia y crecer como desarrollador.',
      facts: {
        location: 'Ubicación',
        focus: 'Enfoque',
        focusValue: 'Lógica, datos y automatización',
        mainLang: 'Lenguaje principal',
        seeking: 'Busco',
        seekingValue: 'Oportunidades para crecer como desarrollador y aportar a proyectos con impacto'
      }
    },
    tech: {
      title: 'Lenguajes y tecnologías',
      withProjects: 'Con proyectos en GitHub (toca uno para filtrar)',
      alsoKnow: 'También manejo',
      desc: {
        python: 'Mi lenguaje principal: programas de terminal con menús, datos de usuario y rankings.',
        mysql: 'Bases de datos relacionales y consultas.',
        pseudocode: 'Diseño de algoritmos antes de programar.',
        javascript: 'Lógica e interactividad para la web.',
        java: 'Programación orientada a objetos.',
        json: 'Intercambio de datos entre sistemas y APIs.',
        bson: 'Formato binario de documentos, el que usa MongoDB.',
        n8n: 'Automatización de flujos de trabajo entre aplicaciones.'
      }
    },
    // Nombre visible de cada lenguaje (la clave es el id usado en data.js)
    techName: {
      python: 'Python',
      mysql: 'MySQL',
      pseudocode: 'Pseudocódigo',
      systems: 'Sistemas'
    },
    projects: {
      title: 'Proyectos',
      filterLabel: 'Filtrar por lenguaje',
      all: 'Todos',
      viewCode: 'Ver código en GitHub',
      count: {
        one: '{count} proyecto',
        other: '{count} proyectos'
      }
    },
    soft: {
      title: 'Habilidades blandas',
      logic: {
        name: 'Pensamiento lógico',
        summary: 'Descompongo el problema antes de programarlo.',
        detail: 'Mi examen de cálculo de notas lo resolví primero en pseudocódigo. Entender el flujo antes de la sintaxis me ahorra errores y reescrituras.'
      },
      learning: {
        name: 'Aprendizaje autónomo',
        summary: 'Aprendo rápido y sin que me lo pidan.',
        detail: 'Pasé de pseudocódigo a Python, bases de datos, formatos de datos y automatización, y cada tema lo practico con algo real.'
      },
      communication: {
        name: 'Comunicación clara',
        summary: 'Explico lo técnico en palabras simples.',
        detail: 'Busco que cada programa se explique solo: menús ordenados y mensajes que guían a quien lo usa, aunque no sepa programar.'
      },
      teamwork: {
        name: 'Trabajo en equipo',
        summary: 'Recibo feedback como combustible.',
        detail: 'Prefiero revisar código con otra persona: dos miradas encuentran errores que una sola no ve, y de cada revisión me llevo algo nuevo.'
      },
      ownership: {
        name: 'Responsabilidad y constancia',
        summary: 'Entrego lo que prometo.',
        detail: 'Llevo cada proyecto hasta que corre de principio a fin y lo subo a GitHub para que cualquiera pueda comprobarlo.'
      },
      adaptability: {
        name: 'Adaptabilidad',
        summary: 'Cambio de herramienta sin perder el ritmo.',
        detail: 'Python, SQL, JavaScript, Java o n8n: la lógica es la misma y solo cambia la herramienta. Eso me permite incorporar tecnologías nuevas con rapidez.'
      }
    },
    contact: {
      title: 'Contacto',
      lead: 'Busco mejorar constantemente mis habilidades y contribuir a proyectos significativos.',
      cta: 'Escríbeme por GitHub'
    },
    term: {
      label: 'Terminal interactiva',
      title: 'Portafolio Joan Chaparro',
      placeholder: 'escribe help',
      inputLabel: 'Comando',
      intro: 'bienvenidos :D',
      welcome: [
        'Hola, soy Joan Sebastian.',
        'Soy desarrollador en formación, especializado en Python, MySQL, JavaScript, Java, JSON, BSON y n8n.',
        'Escribe un comando o toca un botón.'
      ],
      help: {
        header: 'Comandos:',
        about: 'quién soy',
        skills: 'lenguajes y tecnologías',
        projects: 'mis repositorios',
        soft: 'habilidades blandas',
        contact: 'cómo encontrarme',
        lang: 'cambiar idioma (es / en)',
        clear: 'limpiar pantalla'
      },
      about: [
        'Joan Sebastian Chaparro Rodriguez',
        'Desarrollador en formación, San Gil, Santander.',
        'Me gusta que el código sea claro y que el programa se explique solo.'
      ],
      skills: [
        'Python (principal), MySQL, Pseudocódigo',
        'JavaScript, Java, JSON, BSON, n8n'
      ],
      soft: [
        'Pensamiento lógico, aprendizaje autónomo, comunicación clara,',
        'trabajo en equipo, responsabilidad y adaptabilidad.'
      ],
      unknown: 'Comando no reconocido: {cmd}. Escribe help para ver la lista.',
      langChanged: 'Idioma cambiado a español.',
      langUsage: 'Idioma actual: {lang}. Uso: lang es | lang en'
    }
  },

  en: {
    meta: {
      title: 'Joan Sebastian Chaparro | Portfolio',
      description: 'Portfolio of Joan Sebastian Chaparro Rodriguez, developer in training: Python, databases, data formats and automation.'
    },
    nav: {
      label: 'Main',
      about: 'About',
      tech: 'Tech stack',
      projects: 'Projects',
      soft: 'Soft skills',
      contact: 'Contact'
    },
    lang: {
      label: 'Language'
    },
    hero: {
      lead: 'Developer in training based in San Gil, Santander, Colombia. Python, databases, data formats and automation, with the logic worked out before the code.',
      cta: 'View projects'
    },
    about: {
      title: 'About me',
      intro: "I'm Joan Sebastian, from San Gil, Santander. I started with pseudocode to understand logic, moved on to Python, and today I also work with databases, data formats and automation.",
      body: "I enjoy building simple programs that solve a concrete need and that anyone can understand. I'm looking for a team where I can learn fast, contribute consistently and grow as a developer.",
      facts: {
        location: 'Location',
        focus: 'Focus',
        focusValue: 'Logic, data and automation',
        mainLang: 'Main language',
        seeking: 'Looking for',
        seekingValue: 'Opportunities to grow as a developer and contribute to impactful projects'
      }
    },
    tech: {
      title: 'Languages & technologies',
      withProjects: 'With projects on GitHub (tap one to filter)',
      alsoKnow: 'Also experienced with',
      desc: {
        python: 'My main language: terminal programs with menus, user input and rankings.',
        mysql: 'Relational databases and queries.',
        pseudocode: 'Designing algorithms before writing code.',
        javascript: 'Logic and interactivity for the web.',
        java: 'Object-oriented programming.',
        json: 'Data exchange between systems and APIs.',
        bson: 'Binary document format used by MongoDB.',
        n8n: 'Workflow automation across applications.'
      }
    },
    techName: {
      python: 'Python',
      mysql: 'MySQL',
      pseudocode: 'Pseudocode',
      systems: 'Systems'
    },
    projects: {
      title: 'Projects',
      filterLabel: 'Filter by language',
      all: 'All',
      viewCode: 'View code on GitHub',
      count: {
        one: '{count} project',
        other: '{count} projects'
      }
    },
    soft: {
      title: 'Soft skills',
      logic: {
        name: 'Logical thinking',
        summary: 'I break the problem down before coding it.',
        detail: 'I solved my grade-calculation exam in pseudocode first. Understanding the flow before the syntax saves me bugs and rewrites.'
      },
      learning: {
        name: 'Self-directed learning',
        summary: 'I learn fast, without being asked.',
        detail: 'I went from pseudocode to Python, databases, data formats and automation, and I practice every topic by building something real.'
      },
      communication: {
        name: 'Clear communication',
        summary: 'I explain technical topics in simple words.',
        detail: "I want every program to explain itself: well-organized menus and messages that guide users, even if they can't code."
      },
      teamwork: {
        name: 'Teamwork',
        summary: 'Feedback is fuel for me.',
        detail: 'I prefer reviewing code with someone else: two pairs of eyes catch bugs that one would miss, and I take something new from every review.'
      },
      ownership: {
        name: 'Ownership and consistency',
        summary: 'I deliver what I promise.',
        detail: 'I see every project through until it runs end to end, and I publish it on GitHub so anyone can verify it.'
      },
      adaptability: {
        name: 'Adaptability',
        summary: 'I switch tools without losing pace.',
        detail: 'Python, SQL, JavaScript, Java or n8n: the logic stays the same, only the tool changes. That lets me pick up new technologies quickly.'
      }
    },
    contact: {
      title: 'Contact',
      lead: "I'm always looking to sharpen my skills and contribute to meaningful projects.",
      cta: 'Reach me on GitHub'
    },
    term: {
      label: 'Interactive terminal',
      title: 'Joan Chaparro Portfolio',
      placeholder: 'type help',
      inputLabel: 'Command',
      intro: 'welcome :D',
      welcome: [
        "Hi, I'm Joan Sebastian.",
        "I'm a developer in training, working with Python, MySQL, JavaScript, Java, JSON, BSON and n8n.",
        'Type a command or tap a button.'
      ],
      help: {
        header: 'Commands:',
        about: 'who I am',
        skills: 'languages and technologies',
        projects: 'my repositories',
        soft: 'soft skills',
        contact: 'how to reach me',
        lang: 'switch language (es / en)',
        clear: 'clear the screen'
      },
      about: [
        'Joan Sebastian Chaparro Rodriguez',
        'Developer in training, San Gil, Santander, Colombia.',
        'I like clear code and programs that explain themselves.'
      ],
      skills: [
        'Python (main), MySQL, Pseudocode',
        'JavaScript, Java, JSON, BSON, n8n'
      ],
      soft: [
        'Logical thinking, self-directed learning, clear communication,',
        'teamwork, ownership and adaptability.'
      ],
      unknown: 'Unknown command: {cmd}. Type help to see the list.',
      langChanged: 'Language switched to English.',
      langUsage: 'Current language: {lang}. Usage: lang es | lang en'
    }
  }
};
