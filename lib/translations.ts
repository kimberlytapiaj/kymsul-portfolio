export type Lang = 'es' | 'en'

export const DEFAULT_LANG: Lang = 'en'

export const tr = {
  nav: {
    links: {
      es: ['Inicio', 'Proyectos', 'Archivo', 'IA', 'Sobre mí'],
      en: ['Home', 'Projects', 'Archive', 'AI', 'About'],
    },
    hrefs: ['/', '/proyectos', '/archivo', '/ia', '/sobre-mi'],
  },

  hero: {
    eyebrow: {
      es: 'CREATIVE DESIGNER · BRANDING Y DIRECCIÓN DE ARTE',
      en: 'CREATIVE DESIGNER · BRANDING & ART DIRECTION',
    },
    name: { es: 'KIMBERLY TAPIA', en: 'KIMBERLY TAPIA' },
    portraitAlt: { es: 'Retrato de Kimberly Tapia Rubio', en: 'Portrait of Kimberly Tapia Rubio' },
    signature: { es: 'Soy Kim.', en: "I'm Kim." },
    lead: {
      es: 'Empecé creando ilustraciones y animaciones.',
      en: 'I started out making illustrations and animations.',
    },
    story: { es: 'Conoce mi historia', en: 'Read my story' },
    carousel: {
      label: { es: 'PROYECTOS EN FOCO', en: 'PROJECTS IN FOCUS' },
      region: { es: 'Proyectos destacados', en: 'Featured projects' },
      prev: { es: 'Proyecto anterior', en: 'Previous project' },
      next: { es: 'Proyecto siguiente', en: 'Next project' },
      pause: { es: 'Pausar carrusel', en: 'Pause carousel' },
      play: { es: 'Reanudar carrusel', en: 'Resume carousel' },
      pauseWord: { es: 'Pausa', en: 'Pause' },
      playWord: { es: 'Reanudar', en: 'Play' },
      view: { es: 'Ver proyecto', en: 'View project' },
      of: { es: 'de', en: 'of' },
      project: { es: 'proyecto', en: 'project' },
    },
  },

  portfolio: {
    label:      { es: 'PORTAFOLIO', en: 'PORTFOLIO' },
    verCaso:    { es: 'VER CASO', en: 'VIEW CASE' },
    noProjects: { es: 'SIN PROYECTOS', en: 'NO PROJECTS' },
    filters: {
      es: [
        { label: 'TODOS',        value: 'todos' },
        { label: 'BRANDING',     value: 'branding' },
        { label: 'MOTION',       value: 'motion' },
        { label: 'VIDEO',        value: 'video' },
        { label: 'SOCIAL MEDIA', value: 'social' },
        // Illustration, photo and AI share one area (Kimberly, 11 oct 2026).
        { label: 'MÁS',          value: 'mas' },
      ],
      en: [
        { label: 'ALL',          value: 'todos' },
        { label: 'BRANDING',     value: 'branding' },
        { label: 'MOTION',       value: 'motion' },
        { label: 'VIDEO',        value: 'video' },
        { label: 'SOCIAL MEDIA', value: 'social' },
        { label: 'MORE',         value: 'mas' },
      ],
    },
  },

  cta: {
    eyebrow: { es: 'CONTACTO', en: 'CONTACT' },
    title:   { es: 'Hablemos.', en: "Let's talk." },
    sign:    { es: '— Kim.', en: '— Kim.' },
  },

  footer: {
    navLabel:     { es: 'Navegación del pie de página', en: 'Footer navigation' },
    links: {
      es: ['Inicio', 'Proyectos', 'Archivo', 'IA', 'Sobre mí'],
      en: ['Home', 'Projects', 'Archive', 'AI', 'About'],
    },
  },

  proyectos: {
    eyebrow:    { es: 'PROYECTOS', en: 'PROJECTS' },
    h1:         { es: 'Trabajo', en: 'Selected' },
    h2:         { es: 'seleccionado.', en: 'work.' },
    count:      { es: 'PROYECTOS', en: 'PROJECTS' },
    noProjects: { es: 'SIN PROYECTOS', en: 'NO PROJECTS' },
    filters: {
      es: [
        { label: 'TODOS',        value: 'todos' },
        { label: 'BRANDING',     value: 'branding' },
        { label: 'MOTION',       value: 'motion' },
        { label: 'VIDEO',        value: 'video' },
        { label: 'SOCIAL MEDIA', value: 'social' },
        // Illustration, photo and AI share one area (Kimberly, 11 oct 2026).
        { label: 'MÁS',          value: 'mas' },
      ],
      en: [
        { label: 'ALL',          value: 'todos' },
        { label: 'BRANDING',     value: 'branding' },
        { label: 'MOTION',       value: 'motion' },
        { label: 'VIDEO',        value: 'video' },
        { label: 'SOCIAL MEDIA', value: 'social' },
        { label: 'MORE',         value: 'mas' },
      ],
    },
  },

  caso: {
    back:       { es: '← PROYECTOS', en: '← PROJECTS' },
    rol:        { es: 'ROL', en: 'ROLE' },
    año:        { es: 'AÑO', en: 'YEAR' },
    disciplina: { es: 'DISCIPLINA', en: 'DISCIPLINE' },
    agencia:    { es: 'AGENCIA', en: 'AGENCY' },
    contexto:   { es: 'CONTEXTO', en: 'CONTEXT' },
    reto:       { es: 'EL RETO', en: 'THE CHALLENGE' },
    proceso:    { es: 'PROCESO', en: 'PROCESS' },
    resultado:  { es: 'RESULTADO', en: 'RESULT' },
    siguiente:  { es: 'SIGUIENTE PROYECTO', en: 'NEXT PROJECT' },
    campanas:   { es: 'CAMPAÑAS', en: 'CAMPAIGNS' },
  },

  sobreMi: {
    eyebrow: { es: 'CREATIVE DESIGNER · BRANDING Y DIRECCIÓN DE ARTE', en: 'CREATIVE DESIGNER · BRANDING & ART DIRECTION' },
    bio: {
      es: 'Encuentro la idea de una marca y la llevo hasta que se ve y se mueve.',
      en: 'I find the idea behind a brand and carry it until it looks and moves.',
    },
    rolLabel:   { es: 'ROL', en: 'ROLE' },
    baseLabel:  { es: 'BASE', en: 'BASE' },
    desdeLabel: { es: 'DESDE', en: 'SINCE' },
    rolValue:   { es: 'Creative Designer', en: 'Creative Designer' },
    baseValue:  { es: 'Puebla, MX', en: 'Puebla, MX' },
    desdeValue: { es: '2023', en: '2023' },

    practica: {
      eyebrow: { es: 'PRÁCTICA', en: 'PRACTICE' },
      h1:      { es: 'Diseño desde', en: 'Design from' },
      h1span:  { es: 'sistema,', en: 'system,' },
      h2:      { es: 'no desde piezas.', en: 'not from pieces.' },
      p1: {
        es: 'Mi enfoque parte de entender el diseño como un sistema que conecta identidad, comunicación y experiencia.',
        en: 'My approach starts from understanding design as a system that connects identity, communication and experience.',
      },
      p2: {
        es: 'Trabajo desde lo visual, pero también desde la estructura: narrativa, movimiento y lógica detrás de cada decisión.',
        en: 'I work from the visual, but also from structure: narrative, movement and logic behind every decision.',
      },
      p3: {
        es: 'Busco crecer en equipos creativos y marcas que valoren el pensamiento estratégico tanto como la ejecución visual.',
        en: 'I want to grow within creative teams and brands that value strategic thinking as much as visual execution.',
      },
    },

    capacidades: {
      eyebrow:  { es: 'CAPACIDADES', en: 'CAPABILITIES' },
      headline: {
        es: 'La herramienta sigue a la',
        en: 'The tool follows',
      },
      headlineBold: { es: 'intención.', en: 'intention.' },
      cats: {
        es: [
          {
            cat: 'BRANDING',
            items: ['Brand strategy', 'Naming', 'Identity systems', 'Art direction', 'Character design', 'Packaging design', 'Papelería · Print', 'Brand guidelines'],
          },
          {
            cat: 'MOTION',
            items: ['Reels · Templates', 'Motion graphics', 'Animación 2D', 'Video editing', 'Kinetic typography', 'Color grading'],
          },
          {
            cat: 'CONTENT',
            items: ['Content strategy', 'Content design', 'Paid media', 'Social media visuals', 'Calendarios editoriales', 'Visual storytelling'],
          },
          {
            cat: 'IA',
            items: ['AI-native workflows', 'Creative automation', 'Imagen y video generativo', 'Claude Code · Codex', 'Remotion', 'Gemini · Imagen 2', 'Veo · Higgsfield', 'Adobe Firefly'],
          },
          {
            cat: 'SOFTWARE',
            items: ['Adobe Suite', 'Figma · Canva', 'CapCut', 'Obsidian', 'ClickUp · Notion · Asana', 'Vercel · GitHub'],
          },
        ],
        en: [
          {
            cat: 'BRANDING',
            items: ['Brand strategy', 'Naming', 'Identity systems', 'Art direction', 'Character design', 'Packaging design', 'Print & stationery', 'Brand guidelines'],
          },
          {
            cat: 'MOTION',
            items: ['Reels · Templates', 'Motion graphics', '2D animation', 'Video editing', 'Kinetic typography', 'Color grading'],
          },
          {
            cat: 'CONTENT',
            items: ['Content strategy', 'Content design', 'Paid media', 'Social media visuals', 'Editorial calendars', 'Visual storytelling'],
          },
          {
            cat: 'AI',
            items: ['AI-native workflows', 'Creative automation', 'Generative image and video', 'Claude Code · Codex', 'Remotion', 'Gemini · Imagen 2', 'Veo · Higgsfield', 'Adobe Firefly'],
          },
          {
            cat: 'SOFTWARE',
            items: ['Adobe Suite', 'Figma · Canva', 'CapCut', 'Obsidian', 'ClickUp · Notion · Asana', 'Vercel · GitHub'],
          },
        ],
      },
    },

    trayectoria: {
      eyebrow: { es: 'TRAYECTORIA', en: 'EXPERIENCE' },
      entries: {
        es: [
          { year: '2023',    title: 'Kymsul',                     detail: 'Comisiones streaming · +80 clientes · Assets animados' },
          { year: '2023–24', title: 'Proyectos independientes',     detail: 'Branding end-to-end · Identidades de marca · Múltiples industrias' },
          { year: '2024 →',  title: 'Diseñadora de Marca & Dirección de Arte · Zealix', detail: 'Naming · Identidad visual · Dirección creativa · SaaS' },
          { year: '2026 →',  title: 'NexLaunch',                  detail: 'Reels · Paid media · Producción multimarca', current: true },
        ],
        en: [
          { year: '2023',    title: 'Kymsul',                     detail: 'Streaming commissions · +80 clients · Animated assets' },
          { year: '2023–24', title: 'Independent projects',        detail: 'End-to-end branding · Brand identities · Multiple industries' },
          { year: '2024 →',  title: 'Brand Designer & Art Direction · Zealix', detail: 'Naming · Visual identity · Creative direction · SaaS' },
          { year: '2026 →',  title: 'NexLaunch',                  detail: 'Reels · Paid media · Multi-brand production', current: true },
        ],
      },
    },

    formacion: {
      eyebrow: { es: 'FORMACIÓN', en: 'EDUCATION' },
      entries: {
        es: [
          { inst: 'Universidad del Valle de México', degree: 'Licenciatura en Diseño Digital',             period: '2023 – 2026', note: '' },
          { inst: 'Universidad Anáhuac México',      degree: 'Diplomado en Diseño Multimedia',             period: '2023 – 2024', note: '' },
          { inst: 'Amerike, Puebla',                 degree: 'Lic. Comunicación y Producción Audiovisual', period: 'Ago 2026 →',  note: 'En curso' },
        ],
        en: [
          { inst: 'Universidad del Valle de México', degree: "Bachelor's in Digital Design",              period: '2023 – 2026', note: '' },
          { inst: 'Universidad Anáhuac México',      degree: 'Diploma in Multimedia Design',              period: '2023 – 2024', note: '' },
          { inst: 'Amerike, Puebla',                 degree: 'BA Communication & Audiovisual Production', period: 'Aug 2026 →',  note: 'In progress' },
        ],
      },
    },

    certEyebrow: { es: 'CERTIFICACIONES', en: 'CERTIFICATIONS' },

    idiomas: {
      eyebrow: { es: 'IDIOMAS', en: 'LANGUAGES' },
      entries: {
        es: [
          { lang: 'Español', level: 'Nativo' },
          { lang: 'Inglés', level: 'Intermedio avanzado (B2)' },
        ],
        en: [
          { lang: 'Spanish', level: 'Native' },
          { lang: 'English', level: 'Upper intermediate (B2)' },
        ],
      },
    },

    cta: {
      h: {
        es: 'Si algo aquí',
        en: 'If something here',
      },
      hItalic: { es: 'resuena.', en: 'resonates.' },
      desc: {
        es: 'Abierta a conversaciones profesionales sobre diseño de marca, contenido visual, motion y workflows creativos con IA.',
        en: 'Open to professional conversations around brand design, visual content, motion, and AI-native creative workflows.',
      },
      primary:   { es: 'Escríbeme', en: 'Get in touch' },
      secondary: { es: 'Ver proyectos', en: 'See projects' },
    },
  },
} as const
