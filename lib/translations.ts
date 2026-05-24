export type Lang = 'es' | 'en'

export const tr = {
  nav: {
    links: {
      es: ['Inicio', 'Proyectos', 'IA', 'Sobre Mí'],
      en: ['Home', 'Projects', 'AI', 'About'],
    },
    hrefs: ['/', '/proyectos', '/ia', '/sobre-mi'],
  },

  hero: {
    eyebrow: { es: 'BRAND & CONTENT DESIGNER', en: 'BRAND & CONTENT DESIGNER' },
    line1:   { es: 'Brand identity,', en: 'Brand identity,' },
    line2:   { es: 'contenido visual', en: 'visual content' },
    line3:   { es: 'producción IA‑native.', en: 'IA‑native production.' },
    tag:     { es: 'DESDE UNA SOLA DIRECCIÓN CREATIVA', en: 'FROM ONE CREATIVE DIRECTION' },
    sub:     {
      es: 'Construyo marcas con esencia, que se sienten, se recuerdan y escalan con sistema.',
      en: 'I build brands with soul — that feel, that stick, and scale with system.',
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
    h1:      { es: 'Tres servicios.', en: 'Three services.' },
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
          desc: 'Generación de imagen y video, flujos automatizados y sistemas de conocimiento integrados al proceso creativo. IA como ventaja de producción, sin perder el criterio.',
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
          light: 'IA‑native',
          bold: 'production',
          desc: 'Image and video generation, automated workflows and knowledge systems integrated into the creative process. AI as a production advantage, without losing creative judgment.',
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
    line1: { es: 'Las marcas con esencia', en: 'Meaningful brands' },
    line2: { es: 'no se construyen solas.', en: "aren't built alone." },
    btn:   { es: 'Trabajemos juntos', en: "Let's work together" },
  },

  footer: {
    navLabel:     { es: 'NAVEGACIÓN', en: 'NAVIGATION' },
    socialLabel:  { es: 'SOCIAL', en: 'SOCIAL' },
    contactLabel: { es: 'CONTACTO', en: 'CONTACT' },
    sistema:      { es: 'Sistema.', en: 'System.' },
    links: {
      es: ['Inicio', 'Proyectos', 'IA', 'Sobre Mí'],
      en: ['Home', 'Projects', 'AI', 'About'],
    },
  },

  proyectos: {
    eyebrow:    { es: 'PROYECTOS', en: 'PROJECTS' },
    h1:         { es: 'Todo mi', en: 'All my' },
    h2:         { es: 'trabajo.', en: 'work.' },
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
      es: 'Brand & Content Designer. Empecé con assets animados para streamers y terminé construyendo sistemas de marca para startups — pasando por agencia, SaaS y producción IA-native. El hilo es siempre el mismo: entender el sistema antes de diseñar la pieza.',
      en: 'Brand & Content Designer. I started with animated assets for streamers and ended up building brand systems for startups — through agency work, SaaS, and AI-native production. The thread is always the same: understand the system before designing the piece.',
    },
    rolLabel:   { es: 'ROL', en: 'ROLE' },
    baseLabel:  { es: 'BASE', en: 'BASE' },
    desdeLabel: { es: 'DESDE', en: 'SINCE' },
    rolValue:   { es: 'Brand & Content Designer', en: 'Brand & Content Designer' },
    baseValue:  { es: 'Puebla, MX', en: 'Puebla, MX' },
    desdeValue: { es: '2020', en: '2020' },

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
        es: 'Busco colaborar con marcas y creadores que entienden el valor de construir con intención, no solo de verse bien.',
        en: 'I seek to collaborate with brands and creators who understand the value of building with intention, not just looking good.',
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
            items: ['Producción IA-native', 'Vibe coding · Frontend', 'Claude Code · Codex', 'Claude Design', 'Remotion', 'Gemini · Imagen 2', 'Veo · Higgsfield', 'Adobe Firefly'],
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
            items: ['AI-native production', 'Vibe coding · Frontend', 'Claude Code · Codex', 'Claude Design', 'Remotion', 'Gemini · Imagen 2', 'Veo · Higgsfield', 'Adobe Firefly'],
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
          { year: '2024 – 2026',  title: 'Directora de Arte · Zealix', detail: 'Naming · Identidad visual · Dirección creativa · SaaS' },
          { year: '2026 →',  title: 'NexLaunch',                  detail: 'Brand & Content Designer · Producción IA-native · Multimarca', current: true },
        ],
        en: [
          { year: '2023',    title: 'Kymsul',                     detail: 'Streaming commissions · +80 clients · Animated assets' },
          { year: '2023–24', title: 'Independent projects',        detail: 'End-to-end branding · Brand identities · Multiple industries' },
          { year: '2024 – 2026',  title: 'Art Director · Zealix',      detail: 'Naming · Visual identity · Creative direction · SaaS' },
          { year: '2026 →',  title: 'NexLaunch',                  detail: 'Brand & Content Designer · AI-native production · Multi-brand', current: true },
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

    cta: {
      h: {
        es: 'Si algo aquí',
        en: 'If something here',
      },
      hItalic: { es: 'resuena.', en: 'resonates.' },
      desc: {
        es: 'Disponible para posiciones de tiempo completo o colaboración. Escríbeme.',
        en: 'Available for full-time positions or long-term collaboration. Reach out.',
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
      line3:   { es: 'Sin fricción.', en: 'No friction.' },
      sub: {
        es: 'Cinco flujos de producción aplicados a clientes reales: documentación de marca, reels y motion, imagen generativa sin sesión fotográfica, video generativo con dirección de arte, y piezas estáticas que escalan desde un brief.',
        en: 'Five production workflows applied to real clients: brand documentation, reels and motion, generative imagery without a photo shoot, generative video with art direction, and static pieces that scale from a brief.',
      },
      tools: { es: 'Obsidian · Claude Code · Codex · Gemini · Higgsfield · Remotion · AE · Photoshop · Illustrator', en: 'Obsidian · Claude Code · Codex · Gemini · Higgsfield · Remotion · AE · Photoshop · Illustrator' },
    },

    flujo: {
      eyebrow: { es: 'EL FLUJO', en: 'THE FLOW' },
      sub: {
        es: 'Cinco flujos de producción con casos reales de cliente.',
        en: 'Five production workflows with real client cases.',
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
        es: 'Los brand guidelines de cada cliente viven en Obsidian: tipografía, paleta, tono, reglas visuales. Antes de generar una sola imagen o escribir una línea de código, Claude Code lee ese contexto. El output no es genérico: está calibrado a la marca desde el primer prompt.',
        en: 'Every client\'s brand guidelines live in Obsidian: typography, palette, tone, visual rules. Before generating a single image or writing a line of code, Claude Code reads that context. The output isn\'t generic: it\'s calibrated to the brand from the very first prompt.',
      },
      p2: {
        es: 'La misma documentación que alimenta la producción también se entrega al cliente como activo, un sistema vivo que escala con la marca.',
        en: 'The same documentation that fuels production is also delivered to the client as an asset, a living system that scales with the brand.',
      },
      bullets: {
        es: [
          'Obsidian como base de conocimiento de marca',
          'Claude Code y Codex leen guidelines antes de ejecutar',
          'Coherencia asegurada desde el origen',
          'Documentación entregada como activo al cliente',
        ],
        en: [
          'Obsidian as brand knowledge base',
          'Claude Code and Codex read guidelines before executing',
          'Consistency ensured from the source',
          'Documentation delivered as a client asset',
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
      terminalOutputLine2val: { es: 'aprobado en primera revisión', en: 'approved on first review' },
    },

    reel: {
      eyebrow: { es: '— 02 · MOTION', en: '— 02 · MOTION' },
      h: {
        es: 'Del brief al reel en un prompt.',
        en: 'From brief to reel in one prompt.',
      },
      p: {
        es: 'La skill /reel convierte un brief en una composición Remotion con timing, tipo de motion y estructura de cortes. El humano selecciona; el reel final se renderiza en After Effects. Cinco reels de paid media producidos con el mismo flujo: dos para AseguraMax, uno para KOP y dos para BWL.',
        en: 'The /reel skill turns a brief into a Remotion composition with timing, motion type and cut structure. The human selects; the final reel renders in After Effects. Five paid media reels produced with the same flow: two for AseguraMax, one for KOP and two for BWL.',
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
        es: 'Imagen de producto, lifestyle y composiciones generadas con IA, calibradas con prompt engineering para que el resultado no rompa la identidad visual del cliente. Lo que antes requería locación, modelos y horas de edición ahora es iteración de prompts con dirección de arte.',
        en: 'Product imagery, lifestyle and compositions generated with AI, calibrated with prompt engineering so the result doesn\'t break the client\'s visual identity. What once required location, models and hours of editing is now prompt iteration with art direction.',
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
        es: 'Dirección de arte en Gemini Flow e Higgsfield: prompt inicial, correcciones de actuación, ajustes de luz y ambiente. Los clips generados se montan en After Effects para el reel final. Cuatro piezas de video generativo para BWL con dirección aplicada en cada corte.',
        en: 'Art direction in Gemini Flow and Higgsfield: initial prompt, performance corrections, light and mood adjustments. Generated clips are assembled in After Effects for the final reel. Four generative video pieces for BWL with applied direction on every cut.',
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
        es: 'Dos herramientas, dos dominios del mismo ecosistema: Codex con Gemini Image 2 construye carruseles, editorial de producto y piezas de campaña sin tocar un archivo manualmente; Claude Code genera los scripts de Photoshop que toman un diseño aprobado y lo redimensionan a todos los formatos en un clic.',
        en: 'Two tools, two domains of the same ecosystem: Codex with Gemini Image 2 builds carousels, product editorial and campaign pieces without touching a file manually; Claude Code generates the Photoshop scripts that take an approved design and resize it to all formats in one click.',
      },
      case1label: { es: 'CODEX + GEMINI IMAGE 2 · AMX', en: 'CODEX + GEMINI IMAGE 2 · AMX' },
      case1: {
        es: 'Carrusel de 8 slides para AseguraMax generado con Codex: paleta, tipografía, composición y copy definidos por el brief, sin construir ninguna pieza manualmente.',
        en: '8-slide carousel for AseguraMax generated with Codex: palette, typography, composition and copy defined by the brief, without building any piece manually.',
      },
      case2label: { es: 'SCRIPT PS · WORLD CUP 2026', en: 'PS SCRIPT · WORLD CUP 2026' },
      case2: {
        es: 'Flyer aprobado → script de Photoshop lo redimensiona a 5 formatos (post, story, TV, banner, flyer imprimible) sin intervención manual.',
        en: 'Approved flyer → Photoshop script resizes it to 5 formats (post, story, TV, banner, printable flyer) without manual intervention.',
      },
      codexLabel:   { es: 'CARRUSEL CODEX · AMX · 8 SLIDES', en: 'CODEX CAROUSEL · AMX · 8 SLIDES' },
      formatsLabel: { es: '5 FORMATOS DESDE 1 BRIEF · WORLD CUP 2026', en: '5 FORMATS FROM 1 BRIEF · WORLD CUP 2026' },
    },

    frontend: {
      eyebrow: { es: '— 06 · CASO DE ESTUDIO · KYMSUL.ART', en: '— 06 · CASE STUDY · KYMSUL.ART' },
      h1: { es: 'Este portafolio,', en: 'This portfolio,' },
      h2: { es: 'construido con el mismo sistema.', en: 'built with the same system.' },
      p: {
        es: 'Lo que estás viendo es el resultado. kymsul.art no se contrató a alguien más — se diseñó y construyó con el mismo sistema que se usa para los clientes: dirección creativa propia, moodboard, prototipo en Claude Design, ajuste en Figma vía plugin, código generado con Claude y Codex, deploy en Vercel.',
        en: 'What you\'re looking at is the result. kymsul.art wasn\'t outsourced — it was designed and built with the same system used for clients: original creative direction, moodboard, prototype in Claude Design, Figma adjustments via plugin, code generated with Claude and Codex, deployed on Vercel.',
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
        { num: '10+', desc: 'proyectos con IA documentados' },
        { num: '5',   desc: 'reels de paid media producidos' },
        { num: '5',   desc: 'formatos desde un solo brief' },
        { num: '0',   desc: 'sesiones fotográficas para posts IA' },
      ],
      en: [
        { num: '10+', desc: 'AI projects documented' },
        { num: '5',   desc: 'paid media reels produced' },
        { num: '5',   desc: 'formats from one single brief' },
        { num: '0',   desc: 'photo shoots for AI posts' },
      ],
    },
  },
} as const
