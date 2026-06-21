export type Lang = 'es' | 'en'

export const tr = {
  nav: {
    links: {
      es: ['Inicio', 'Proyectos', 'IA', 'Sobre Mí', 'Servicios', 'Contacto'],
      en: ['Home', 'Projects', 'AI', 'About', 'Services', 'Contact'],
    },
    hrefs: ['/', '/proyectos', '/ia', '/sobre-mi', '/servicios', '/contacto'],
  },

  hero: {
    eyebrow: { es: 'BRAND & CONTENT DESIGNER', en: 'BRAND & CONTENT DESIGNER' },
    line1:   { es: 'Brand identity,', en: 'Brand identity,' },
    line2:   { es: 'contenido visual', en: 'visual content' },
    line3:   { es: 'producción IA‑native.', en: 'AI‑native production.' },
    tag:     { es: 'DESDE UNA SOLA DIRECCIÓN CREATIVA', en: 'FROM ONE CREATIVE DIRECTION' },
    sub:     {
      es: 'Construyo sistemas visuales de marca y los activo en contenido, motion y workflows creativos con IA.',
      en: 'I build visual brand systems and activate them through content, motion, and AI-native creative workflows.',
    },
    cta: { es: 'Ver proyectos', en: 'See projects' },
  },

  marquee: {
    items: {
      es: ['Brand identity', 'Motion', 'Contenido visual', 'IA', 'Dirección creativa'],
      en: ['Brand identity', 'Motion', 'Visual content', 'AI', 'Creative direction'],
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
        { label: 'SOCIAL MEDIA', value: 'social' },
        { label: 'IA',           value: 'ia' },
      ],
      en: [
        { label: 'ALL',          value: 'todos' },
        { label: 'BRANDING',     value: 'branding' },
        { label: 'MOTION',       value: 'motion' },
        { label: 'SOCIAL MEDIA', value: 'social' },
        { label: 'AI',           value: 'ia' },
      ],
    },
  },

  spec: {
    eyebrow: { es: 'ESPECIALIZACIÓN', en: 'SPECIALIZATION' },
    h1:      { es: 'Tres capacidades.', en: 'Three capabilities.' },
    h2:      { es: 'Un sistema.', en: 'One system.' },
    cards: {
      es: [
        {
          num: '01',
          light: 'Branding',
          bold: 'estratégico',
          desc: 'Identidad visual completa: posicionamiento, sistema visual, guidelines y aplicaciones. La marca como base de todo lo demás.',
        },
        {
          num: '02',
          light: 'Producción',
          bold: 'IA‑native',
          desc: 'Workflows creativos con IA para documentar marcas, explorar visuales, automatizar formatos y producir con más control sin perder criterio.',
        },
        {
          num: '03',
          light: 'Contenido &',
          bold: 'motion visual',
          desc: 'Sistemas de contenido para redes con motion como herramienta: reels, templates y piezas que comunican con coherencia de marca en cada plataforma.',
        },
      ],
      en: [
        {
          num: '01',
          light: 'Strategic',
          bold: 'branding',
          desc: 'Complete visual identity: positioning, visual system, guidelines and applications. The brand as the foundation of everything else.',
        },
        {
          num: '02',
          light: 'AI‑native',
          bold: 'production',
          desc: 'AI-native creative workflows to document brands, explore visuals, automate formats, and produce with more control without losing creative judgment.',
        },
        {
          num: '03',
          light: 'Content &',
          bold: 'visual motion',
          desc: 'Content systems for social media with motion as a tool: reels, templates and pieces that communicate with brand consistency across every platform.',
        },
      ],
    },
  },

  cta: {
    line1: { es: 'Diseño, motion e IA.', en: 'Design, motion and AI.' },
    line2: { es: 'En un mismo sistema.', en: 'In one system.' },
    btn:   { es: 'Escríbeme', en: 'Get in touch' },
  },

  footer: {
    navLabel:     { es: 'NAVEGACIÓN', en: 'NAVIGATION' },
    socialLabel:  { es: 'SOCIAL', en: 'SOCIAL' },
    contactLabel: { es: 'CONTACTO', en: 'CONTACT' },
    sistema:      { es: 'Sistema.', en: 'System.' },
    links: {
      es: ['Inicio', 'Proyectos', 'IA', 'Sobre Mí', 'Servicios', 'Contacto'],
      en: ['Home', 'Projects', 'AI', 'About', 'Services', 'Contact'],
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
        { label: 'SOCIAL MEDIA', value: 'social' },
        { label: 'IA',           value: 'ia' },
      ],
      en: [
        { label: 'ALL',          value: 'todos' },
        { label: 'BRANDING',     value: 'branding' },
        { label: 'MOTION',       value: 'motion' },
        { label: 'SOCIAL MEDIA', value: 'social' },
        { label: 'AI',           value: 'ia' },
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
    eyebrow: { es: 'BRAND & CONTENT DESIGNER', en: 'BRAND & CONTENT DESIGNER' },
    bio: {
      es: 'Brand & Content Designer. Construyo sistemas visuales de marca y los activo en contenido, motion y workflows creativos con IA. Mi base es entender antes de ejecutar; mi diferencial es producir con sistema sin perder criterio visual.',
      en: 'Brand & Content Designer. I build visual brand systems and activate them through content, motion, and AI-native creative workflows. My base is understanding before execution; my edge is producing with system without losing visual judgment.',
    },
    rolLabel:   { es: 'ROL', en: 'ROLE' },
    baseLabel:  { es: 'BASE', en: 'BASE' },
    desdeLabel: { es: 'DESDE', en: 'SINCE' },
    rolValue:   { es: 'Brand & Content Designer', en: 'Brand & Content Designer' },
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
          { inst: 'Universidad del Valle de México', degree: 'Licenciatura en Diseño Digital',             period: '2023 – 2026', note: 'En curso' },
          { inst: 'Universidad Anáhuac México',      degree: 'Diplomado en Diseño Multimedia',             period: '2023 – 2024', note: '' },
          { inst: 'Amerike, Puebla',                 degree: 'Lic. Comunicación y Producción Audiovisual', period: '2026 →',      note: 'Próximamente' },
        ],
        en: [
          { inst: 'Universidad del Valle de México', degree: "Bachelor's in Digital Design",              period: '2023 – 2026', note: 'In progress' },
          { inst: 'Universidad Anáhuac México',      degree: 'Diploma in Multimedia Design',              period: '2023 – 2024', note: '' },
          { inst: 'Amerike, Puebla',                 degree: 'BA Communication & Audiovisual Production', period: '2026 →',      note: 'Upcoming' },
        ],
      },
    },

    certEyebrow: { es: 'CERTIFICACIONES', en: 'CERTIFICATIONS' },

    idiomas: {
      eyebrow: { es: 'IDIOMAS', en: 'LANGUAGES' },
      entries: {
        es: [
          { lang: 'Español', level: 'Nativo' },
          { lang: 'Inglés', level: 'Intermedio conversacional (B1+)' },
        ],
        en: [
          { lang: 'Spanish', level: 'Native' },
          { lang: 'English', level: 'Conversational intermediate (B1+)' },
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

  ia: {
    hero: {
      eyebrow: { es: 'SISTEMA CREATIVO IA', en: 'AI CREATIVE SYSTEM' },
      line1:   { es: 'Del prompt', en: 'From prompt' },
      line2:   { es: 'al entregable.', en: 'to deliverable.' },
      line3:   { es: 'Más criterio.', en: 'More judgment.' },
      sub: {
        es: 'Uso IA para documentar marcas, explorar visuales, automatizar formatos y producir con más control. No reemplaza el criterio creativo: lo uso para reducir fricción y dedicar más tiempo a dirección de arte.',
        en: 'I use AI to document brands, explore visuals, automate formats, and produce with more control. It does not replace creative judgment: I use it to reduce friction and spend more time on art direction.',
      },
      tools: { es: 'Obsidian · Claude Code · Codex · Gemini · Higgsfield · Remotion · AE · Photoshop · Illustrator', en: 'Obsidian · Claude Code · Codex · Gemini · Higgsfield · Remotion · AE · Photoshop · Illustrator' },
    },

    flujo: {
      eyebrow: { es: 'EL FLUJO', en: 'THE FLOW' },
      sub: {
        es: 'Cinco flujos de producción aplicados en piezas reales.',
        en: 'Five production workflows applied to real pieces.',
      },
      steps: {
        es: [
          { num: '01', label: 'Documentación',     sub: 'Obsidian · Claude Code · Codex' },
          { num: '02', label: 'Motion',            sub: 'Claude Code · Remotion · Script AE' },
          { num: '03', label: 'Imagen generativa', sub: 'Gemini · Imagen 2' },
          { num: '04', label: 'Video generativo',  sub: 'Gemini Flow · Higgsfield' },
          { num: '05', label: 'Estático',          sub: 'Codex · Photoshop · Illustrator' },
        ],
        en: [
          { num: '01', label: 'Documentation',     sub: 'Obsidian · Claude Code · Codex' },
          { num: '02', label: 'Motion',             sub: 'Claude Code · Remotion · Script AE' },
          { num: '03', label: 'Generative imagery', sub: 'Gemini · Imagen 2' },
          { num: '04', label: 'Generative video',   sub: 'Gemini Flow · Higgsfield' },
          { num: '05', label: 'Static',             sub: 'Codex · Photoshop · Illustrator' },
        ],
      },
    },

    doc: {
      eyebrow: { es: '— 01 · DOCUMENTACIÓN', en: '— 01 · DOCUMENTATION' },
      h: {
        es: 'El sistema sabe quién es la marca.',
        en: 'The system knows who the brand is.',
      },
      p1: {
        es: 'Cuando documento una marca, el contexto vive en Obsidian: tipografía, paleta, tono y reglas visuales. Antes de generar una imagen o escribir una línea de código, el sistema puede leer ese contexto. El output no parte de cero: parte de una dirección visual definida.',
        en: 'When I document a brand, its context lives in Obsidian: typography, palette, tone, and visual rules. Before generating an image or writing code, the system can read that context. The output does not start from zero: it starts from a defined visual direction.',
      },
      p2: {
        es: 'La documentación funciona como memoria creativa: ayuda a mantener coherencia entre piezas, formatos y herramientas sin depender solo de recordar cada decisión manualmente.',
        en: 'Documentation works as creative memory: it helps maintain consistency across pieces, formats, and tools without relying only on remembering every decision manually.',
      },
      bullets: {
        es: [
          'Obsidian como base de conocimiento de marca',
          'Claude Code y Codex pueden trabajar desde guidelines',
          'Coherencia visual desde el contexto',
          'Documentación como memoria creativa',
        ],
        en: [
          'Obsidian as brand knowledge base',
          'Claude Code and Codex can work from guidelines',
          'Visual consistency from context',
          'Documentation as creative memory',
        ],
      },
      terminalLabel1: { es: 'BRAND FILE · OBSIDIAN', en: 'BRAND FILE · OBSIDIAN' },
      terminalPrimary: { es: 'Primario', en: 'Primary' },
      terminalSecondary: { es: 'Secundario', en: 'Secondary' },
      terminalTypo: { es: 'Tipografía', en: 'Typography' },
      terminalTone: { es: 'Tono', en: 'Tone' },
      terminalNever: { es: 'Nunca', en: 'Never' },
      terminalLabel2: { es: 'CLAUDE CODE · CODEX · LEEN EL CONTEXTO', en: 'CLAUDE CODE · CODEX · READ CONTEXT' },
      terminalRead: {
        es: '> Leyendo',
        en: '> Reading',
      },
      terminalLoading: {
        es: '> Cargando paleta · tipografía · reglas visuales...',
        en: '> Loading palette · typography · visual rules...',
      },
      terminalGen: {
        es: '> Generando composición Remotion calibrada a la marca',
        en: '> Generating brand-calibrated Remotion composition',
      },
      terminalOutput: { es: 'OUTPUT', en: 'OUTPUT' },
      terminalOutputLine1: { es: 'Remotion JSX ·', en: 'Remotion JSX ·' },
      terminalOutputLine1val: { es: '307 líneas', en: '307 lines' },
      terminalOutputLine2: { es: 'Coherente con marca →', en: 'Brand-consistent →' },
      terminalOutputLine2val: { es: 'listo para revisión creativa', en: 'ready for creative review' },
    },

    reel: {
      eyebrow: { es: '— 02 · MOTION', en: '— 02 · MOTION' },
      h: {
        es: 'Del brief al primer sistema de reel.',
        en: 'From brief to the first reel system.',
      },
      p: {
        es: 'La skill /reel convierte un brief en una composición Remotion con timing, tipo de motion y estructura de cortes. Yo reviso, selecciono y ajusto; el entregable final se termina en After Effects. El valor no está en automatizar todo, sino en llegar más rápido a una base editable con criterio.',
        en: 'The /reel skill turns a brief into a Remotion composition with timing, motion type, and cut structure. I review, select, and adjust; the final deliverable is finished in After Effects. The value is not automating everything, but reaching an editable base faster with judgment.',
      },
      beforeLabel: { es: 'COMPOSICIÓN REMOTION · AMX', en: 'REMOTION COMPOSITION · AMX' },
      afterLabel:  { es: 'REEL FINAL · AMX PAID MEDIA · 17S', en: 'FINAL REEL · AMX PAID MEDIA · 17S' },
    },

    imagen: {
      eyebrow: { es: '— 03 · IMAGEN GENERATIVA', en: '— 03 · GENERATIVE IMAGERY' },
      h: {
        es: 'Fotografía de escena sin sesión.',
        en: 'Scene photography without a shoot.',
      },
      p: {
        es: 'Imagen de producto, lifestyle y composiciones generadas con IA, calibradas con prompt engineering y dirección de arte para no romper la identidad visual. La IA propone material; el criterio decide qué sirve, qué se corrige y qué se descarta.',
        en: 'Product imagery, lifestyle, and compositions generated with AI, calibrated through prompt engineering and art direction so they do not break the visual identity. AI proposes material; judgment decides what works, what gets corrected, and what gets rejected.',
      },
      promptLabel: { es: 'PROMPT REAL · KOP KINGS TAVERN', en: 'REAL PROMPT · KOP KINGS TAVERN' },
      beforeLabel:  { es: 'FOTO ORIGINAL · IPHONE', en: 'ORIGINAL PHOTO · IPHONE' },
      afterLabel:   { es: 'RESULTADO · GEMINI', en: 'RESULT · GEMINI' },
    },

    videoGen: {
      eyebrow: { es: '— 04 · VIDEO GENERATIVO', en: '— 04 · GENERATIVE VIDEO' },
      h: {
        es: 'Actuación dirigida. Sin cámara.',
        en: 'Directed performance. No camera.',
      },
      p: {
        es: 'Dirección de arte en Gemini Flow e Higgsfield: prompt inicial, correcciones de actuación, ajustes de luz y ambiente. Los clips generados funcionan como material base; después se seleccionan, editan y montan en After Effects para el entregable final.',
        en: 'Art direction in Gemini Flow and Higgsfield: initial prompt, performance corrections, light, and mood adjustments. Generated clips work as base material; then they are selected, edited, and assembled in After Effects for the final deliverable.',
      },
      clipLabel: { es: 'CLIP GENERADO · BWL OPTRIMAX', en: 'GENERATED CLIP · BWL OPTRIMAX' },
      reelLabel: { es: 'REEL FINAL · BWL OPTRIMAX', en: 'FINAL REEL · BWL OPTRIMAX' },
    },

    scripts: {
      eyebrow: { es: '— 05 · ESTÁTICO', en: '— 05 · STATIC' },
      h: {
        es: 'Codex genera. El script escala.',
        en: 'Codex generates. The script scales.',
      },
      p: {
        es: 'Dos dominios dentro del mismo ecosistema: Codex con Gemini Image 2 ayuda a explorar carruseles, editorial de producto y piezas de campaña desde el brief; Claude Code genera scripts de Photoshop que toman un diseño aprobado y lo adaptan a múltiples formatos con menos trabajo repetitivo.',
        en: 'Two domains inside the same ecosystem: Codex with Gemini Image 2 helps explore carousels, product editorial, and campaign pieces from the brief; Claude Code generates Photoshop scripts that take an approved design and adapt it to multiple formats with less repetitive work.',
      },
      case1label: { es: 'CODEX + GEMINI IMAGE 2 · AMX', en: 'CODEX + GEMINI IMAGE 2 · AMX' },
      case1: {
        es: 'Carrusel de 8 slides para AseguraMax explorado con Codex: paleta, tipografía, composición y copy definidos por el brief, con dirección humana sobre edición, retoque y cierre visual.',
        en: '8-slide carousel for AseguraMax explored with Codex: palette, typography, composition, and copy defined by the brief, with human direction over editing, retouching, and final visual decisions.',
      },
      case2label: { es: 'SCRIPT PS · WORLD CUP 2026', en: 'PS SCRIPT · WORLD CUP 2026' },
      case2: {
        es: 'Flyer aprobado → script de Photoshop lo adapta a 5 formatos (post, story, TV, banner, flyer imprimible), reduciendo trabajo repetitivo y dejando la revisión final al criterio humano.',
        en: 'Approved flyer → Photoshop script adapts it to 5 formats (post, story, TV, banner, printable flyer), reducing repetitive work while keeping final review in human hands.',
      },
      codexLabel:   { es: 'CARRUSEL CODEX · AMX · 8 SLIDES', en: 'CODEX CAROUSEL · AMX · 8 SLIDES' },
      formatsLabel: { es: '5 FORMATOS DESDE 1 BRIEF · WORLD CUP 2026', en: '5 FORMATS FROM 1 BRIEF · WORLD CUP 2026' },
    },

    frontend: {
      eyebrow: { es: '— 06 · CASO DE ESTUDIO · KYMSUL.ART', en: '— 06 · CASE STUDY · KYMSUL.ART' },
      h1: { es: 'Este portafolio,', en: 'This portfolio,' },
      h2: { es: 'construido con el mismo sistema.', en: 'built with the same system.' },
      p: {
        es: 'Lo que estás viendo es el resultado. kymsul.art se diseñó y construyó como experimento personal de workflow: dirección creativa propia, moodboard, prototipo en Claude Design, ajustes en Figma, código generado con Claude y Codex, deploy en Vercel.',
        en: 'What you are looking at is the result. kymsul.art was designed and built as a personal workflow experiment: original creative direction, moodboard, prototype in Claude Design, Figma adjustments, code generated with Claude and Codex, deployed on Vercel.',
      },
      details: {
        es: [
          { label: 'DIRECCIÓN',   val: 'Moodboard · brief de marca · estética definida desde cero' },
          { label: 'PROTOTIPO',   val: 'Claude Design · primeras pantallas generadas desde el brief' },
          { label: 'FIGMA',       val: 'De Claude Design a Figma vía plugin · refinamiento manual de componentes' },
          { label: 'CÓDIGO',      val: 'Codex para componentes estáticos · Claude para motion y animación' },
          { label: 'DEPLOY',      val: 'Vercel · kymsul.art live desde mayo 2026' },
        ],
        en: [
          { label: 'DIRECTION',   val: 'Moodboard · brand brief · aesthetic defined from scratch' },
          { label: 'PROTOTYPE',   val: 'Claude Design · first screens generated from the brief' },
          { label: 'FIGMA',       val: 'From Claude Design to Figma via plugin · manual component refinement' },
          { label: 'CODE',        val: 'Codex for static components · Claude for motion and animation' },
          { label: 'DEPLOY',      val: 'Vercel · kymsul.art live since May 2026' },
        ],
      },
    },

    stats: {
      es: [
        { num: '10+', desc: 'exploraciones IA documentadas' },
        { num: '5',   desc: 'reels producidos con apoyo de workflow' },
        { num: '5',   desc: 'formatos desde un solo brief' },
        { num: '0',   desc: 'sesiones fotográficas para piezas generadas con IA' },
      ],
      en: [
        { num: '10+', desc: 'documented AI explorations' },
        { num: '5',   desc: 'reels produced with workflow support' },
        { num: '5',   desc: 'formats from one single brief' },
        { num: '0',   desc: 'photo shoots for AI-generated pieces' },
      ],
    },
  },
} as const
