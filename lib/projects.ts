export type SubProject = {
  name: string
  objective: string
  formats: string[]
  gallery: string[]
  type?: 'carousel'
}

export type Project = {
  id: string
  name: string
  category: string
  year: string
  image: string
  accentColor?: string
  tagline: string
  tags: string[]
  overview: string
  role: string
  challenge: string
  process: string
  result: string
  gallery: string[]
  campaigns?: SubProject[]
}

export const projects: Project[] = [
  {
    id: 'zealix',
    name: 'Zealix',
    category: 'BRANDING',
    year: '2025',
    image: '/assets/thumbnail-zealix.png',
    accentColor: 'white',
    tagline: 'Identidad para una fintech que se mueve a otra velocidad.',
    tags: ['Identidad visual', 'Brand guidelines', 'Naming'],
    overview:
      'Zealix es una plataforma fintech que usa inteligencia artificial para simplificar la gestión financiera de negocios en crecimiento. Necesitaban una marca que transmitiera tecnología sin frío, y confianza sin rigidez.',
    role: 'Branding completo: naming, logotipo, paleta cromática, sistema tipográfico y brand guidelines para equipos internos y externos.',
    challenge:
      'El reto era posicionar a Zealix entre dos mundos: lo suficientemente tech para atraer a early adopters, y lo suficientemente accesible para dueños de negocios que no son nativos digitales.',
    process:
      'Empecé con un audit de competidores directos en fintech LATAM y definí el territorio visual: moderno, limpio, con personalidad. El logotipo parte de una forma geométrica que sugiere movimiento ascendente. La paleta —negro profundo, blanco y un acento violeta— distingue sin distanciar.',
    result:
      'Sistema de identidad listo para escalar: logotipo en múltiples versiones, paleta de color documentada, tipografía primaria y secundaria, y un manual de uso que el equipo interno puede aplicar sin depender de diseñador.',
    gallery: [
      '/assets/zealix/zealix-01.png',
      '/assets/zealix/zealix-02.png',
      '/assets/zealix/zealix-03.png',
      '/assets/zealix/zealix-04.png',
      '/assets/zealix/zealix-05.png',
      '/assets/zealix/zealix-06.png',
      '/assets/zealix/zealix-07.png',
      '/assets/zealix/zealix-08.png',
      '/assets/zealix/zealix-09.png',
      '/assets/zealix/zealix-10.png',
    ],
  },
  {
    id: 'brainy',
    name: 'BrainyBudzz',
    category: 'BRANDING · UX UI',
    year: '2025',
    image: '/assets/thumbnail-brainy.png',
    accentColor: 'white',
    tagline: 'Aprendizaje que se ve, se siente y se recuerda.',
    tags: ['Branding', 'UI Design', 'Design System'],
    overview:
      'BrainyBudzz es una plataforma EdTech dirigida a niños y adolescentes. El producto necesitaba una identidad que compitiera en atención contra redes sociales, sin caer en el caos visual típico del segmento infantil.',
    role: 'Diseño de marca completo más diseño de interfaz: desde el posicionamiento visual hasta los componentes de UI en Figma, incluyendo design system documentado.',
    challenge:
      'Crear algo que los niños encuentren divertido y los padres perciban como confiable. Dos audiencias opuestas con criterios de decisión completamente distintos.',
    process:
      'Desarrollé una mascota modular —Budzz— que funciona como elemento vivo de la marca: puede expresar emociones, adaptarse a distintos contextos y escalar a merchandise o animación. La paleta mezcla energía (amarillo, cian, magenta) con fondos neutros para no saturar. Los componentes UI priorizan tamaño de toque generoso y jerarquía clara.',
    result:
      'Design system funcional en Figma con más de 40 componentes, brand book completo, y una mascota lista para animar. La marca pasó validación con usuarios de 8 a 14 años en pruebas de concepto.',
    gallery: [
      '/assets/brainy/brainy-01.png',
      '/assets/brainy/brainy-02.png',
      '/assets/brainy/brainy-03.png',
      '/assets/brainy/brainy-04.png',
      '/assets/brainy/brainy-05.png',
      '/assets/brainy/brainy-06.png',
      '/assets/brainy/brainy-07.png',
      '/assets/brainy/brainy-08.png',
      '/assets/brainy/brainy-09.png',
      '/assets/brainy/brainy-10.png',
      '/assets/brainy/brainy-11.png',
      '/assets/brainy/brainy-12.png',
    ],
  },
  {
    id: 'beatness',
    name: 'Beatness',
    category: 'SOCIAL MEDIA',
    year: '2024',
    image: '/assets/thumbnail-beatness.png',
    accentColor: 'white',
    tagline: 'Contenido que se mueve tan fuerte como el entreno.',
    tags: ['Motion', 'Social media', 'Dirección de arte'],
    overview:
      'Beatness es una marca de fitness enfocada en entrenamiento funcional e identidad de comunidad. Necesitaban transformar sus redes en un sistema visual que reflejara intensidad, progreso y pertenencia.',
    role: 'Dirección de arte, producción de contenido y motion: templates para feed, reels, stories y carruseles. Estrategia visual para Instagram y TikTok.',
    challenge:
      'El cliente tenía contenido inconsistente — fotos de buena calidad sin sistema visual. El reto fue crear una identidad de contenido que funcionara con material de producción variable, no siempre en condiciones ideales.',
    process:
      'Diseñé un sistema modular de templates que parte de la fotografía existente y le da coherencia a través de tipografía, color y composición. La paleta es oscura con acentos neón —cian y magenta— que conecta con la estética de gym premium. Los reels tienen un estilo de corte rápido con textos cinéticos.',
    result:
      'Pack de más de 15 templates editables, 4 reels de campaña producidos, y una guía visual para que el equipo interno pueda generar contenido sin romper el sistema.',
    gallery: [
      '/assets/beatness/beatness-01.jpg',
      '/assets/beatness/beatness-02.jpg',
      '/assets/beatness/beatness-03.jpg',
      '/assets/beatness/beatness-04.jpg',
      '/assets/beatness/beatness-05.jpg',
      '/assets/beatness/beatness-06.png',
      '/assets/beatness/beatness-07.jpg',
      '/assets/beatness/beatness-08.png',
      '/assets/beatness/beatness-09.png',
      '/assets/beatness/beatness-10.jpg',
      '/assets/beatness/beatness-11.png',
    ],
  },
  {
    id: 'kop',
    name: 'KOP · Kings Tavern',
    category: 'SOCIAL MEDIA',
    year: '2024',
    image: '/assets/thumbnail-kop.png',
    accentColor: 'white',
    tagline: 'Donde el deporte se convierte en estilo de vida.',
    tags: ['Social media', 'Dirección de arte', 'Reels', 'Sub-marca'],
    overview:
      'KOP es un club de pádel y tenis en Guadalajara. El proyecto incluyó tanto la marca principal —contenido deportivo para el club— como Kings Tavern, su restaurante interno, con una línea editorial propia dentro del mismo ecosistema.',
    role: 'Dirección de arte y producción de contenido para Instagram: editorial deportivo, carruseles educativos, efemérides, reels y contenido diferenciado para Kings Tavern.',
    challenge:
      'Manejar dos voces dentro de una misma cuenta sin que el contenido del restaurante opacara la identidad deportiva del club, ni viceversa. Cada sub-marca tenía que sentirse cohesionada pero distinguible.',
    process:
      'Creé un sistema visual de dos velocidades: posts editoriales de alto impacto para KOP —negro, blanco y verde energético— y una línea más cálida y atmosférica para Kings Tavern que convive sin romper el feed. Los carruseles educativos (pádel en 60 min, pádel vs pickleball) posicionan al club como referente del deporte.',
    result:
      '30+ piezas entre editoriales, carruseles y reels para KOP, más contenido diferenciado para Kings Tavern. Sistema con templates replicables entregados al equipo interno.',
    gallery: [
      '/assets/kop/kop-01.png',
      '/assets/kop/kop-04.png',
      '/assets/kop/kop-02.png',
      '/assets/kop/kop-reel-01-web.mp4',
      '/assets/kop/kop-07.png',
      '/assets/kop/kop-08.png',
      '/assets/kop/kop-09.png',
      '/assets/kop/kop-reel-02-web.mp4',
      '/assets/kop/kop-kt-cover.png',
      '/assets/kop/kop-kt-slide.png',
    ],
    campaigns: [
      {
        name: 'Soccer Tournament · Maestro Dobel',
        objective: 'Campaña integral para torneo de soccer patrocinado. Un mismo diseño adaptado a 5 formatos y pantallas distintas — desde el flyer imprimible hasta el banner de app.',
        formats: ['Flyer', 'Post', 'Story', 'TV Screen', 'Banner App'],
        gallery: [
          '/assets/kop/kop-soccer-flyer.png',
          '/assets/kop/kop-soccer-post.png',
          '/assets/kop/kop-soccer-story.png',
          '/assets/kop/kop-soccer-tv.png',
          '/assets/kop/kop-soccer-banner.png',
        ],
      },
      {
        name: 'World Cup 2026 · Sticker Swap',
        objective: 'Campaña de activación aprovechando la Copa Mundial 2026. Adaptación del concepto a 5 formatos: flyer, social media, TV en instalaciones, banner digital y email.',
        formats: ['Flyer', 'Post', 'Story', 'TV Screen', 'Banner App'],
        gallery: [
          '/assets/kop/kop-wc-flyer.png',
          '/assets/kop/kop-wc-post.png',
          '/assets/kop/kop-wc-story.png',
          '/assets/kop/kop-wc-tv.png',
          '/assets/kop/kop-wc-banner.png',
        ],
      },
      {
        name: 'Plan Weeks Opens',
        objective: 'Sistema de comunicación semanal para horarios de apertura del club. Diseñado como template modular adaptable a cada día y entregado en 4 formatos distintos.',
        formats: ['Flyer', 'Post', 'Story', 'TV Screen'],
        gallery: [
          '/assets/kop/kop-pwo-flyer.png',
          '/assets/kop/kop-pwo-flyer-day.png',
          '/assets/kop/kop-pwo-post.png',
          '/assets/kop/kop-pwo-story.png',
          '/assets/kop/kop-pwo-tv.png',
        ],
      },
      {
        name: 'Highlights per Sport',
        objective: 'Videos de 30 segundos por deporte practicado en el club — Pádel, Soccer y Voleibol — para activación en pantallas del venue y redes sociales.',
        formats: ['Reel 30s · Pádel', 'Reel 30s · Soccer', 'Reel 30s · Voleibol'],
        gallery: [
          '/assets/kop/kop-hl-30-secs-padel-web.mp4',
          '/assets/kop/kop-hl-30-secs-soccer-web.mp4',
          '/assets/kop/kop-hl-30-secs-volley-web.mp4',
        ],
      },
    ],
  },
  {
    id: 'casta-real',
    name: 'Casta Real',
    category: 'SOCIAL MEDIA',
    year: '2024',
    image: '/assets/thumbnail-casta-real.png',
    accentColor: 'white',
    tagline: 'Fuerza que se ve. Origen que se nota.',
    tags: ['Social media', 'Editorial fotográfico', 'Dirección de arte'],
    overview:
      'Casta Real es una marca de suplementos deportivos con raíces mexicanas. Su identidad de marca ya tenía fuerza; lo que faltaba era un sistema de contenido que lo comunicara sin perder autenticidad.',
    role: 'Dirección de arte y producción de contenido para Instagram: editorial fotográfico, editorial tipográfico y piezas de campaña.',
    challenge:
      'El mercado de suplementos está saturado de contenido agresivo y genérico. El reto fue crear algo visualmente contundente que destacara sin caer en los clichés del fitness estadounidense.',
    process:
      'Desarrollé dos líneas editoriales paralelas: una fotográfica con atletas reales en entornos de entrenamiento, y una tipográfica con frases de identidad en layout bold. Ambas comparten paleta —negro, blanco y tierra— y tipografía densa que refuerza el peso de la marca.',
    result:
      '15+ piezas editoriales entre fotografía y tipografía, con coherencia visual total. Sistema replicable para el equipo de marketing interno.',
    gallery: [
      '/assets/casta-real/cr-01.png',
      '/assets/casta-real/cr-02.png',
      '/assets/casta-real/cr-03.png',
      '/assets/casta-real/cr-04.jpg',
      '/assets/casta-real/cr-05.jpg',
      '/assets/casta-real/cr-06.jpg',
      '/assets/casta-real/cr-07.png',
      '/assets/casta-real/cr-08.png',
      '/assets/casta-real/cr-09.jpg',
    ],
  },
  {
    id: 'nerdheart',
    name: 'NerdHeart',
    category: 'MOTION',
    year: '2024',
    image: '/assets/thumbnail-tierra.png',
    accentColor: '#d6cc94',
    tagline: 'Una marca que vive en el movimiento.',
    tags: ['Motion graphics', 'Brand animation', 'After Effects'],
    overview:
      'NerdHeart es una marca de cultura pop —stickers, merch, contenido digital— con una mascota ya establecida pero sin sistema de animación. El trabajo fue traducir esa personalidad a movimiento.',
    role: 'Diseño y producción de identidad en movimiento: stings de logo, loops para redes, stickers animados y sistema de animación reutilizable en After Effects.',
    challenge:
      'La mascota existía en 2D plano. Había que definir cómo se mueve, cuáles son sus principios de animación, y crear un sistema que otros puedan usar sin conocer After Effects a fondo.',
    process:
      'Primero definí los principios de animación de la marca: rebote suave, timing orgánico, sin movimientos mecánicos. Construí un rig básico en AE para la mascota y documenté las curvas de velocidad como preset reutilizable. Cada pieza tiene versiones de 3, 6 y 15 segundos.',
    result:
      'Sistema de 8 piezas animadas: 2 stings de logo, 3 loops para stories/feed, 3 stickers GIF listos para Tenor. Archivos fuente organizados y un mini-manual de uso.',
    gallery: [
      '/assets/nerdheart/nerdheart-01.gif',
      '/assets/nerdheart/nerdheart-02.gif',
      '/assets/nerdheart/nerdheart-03.gif',
      '/assets/nerdheart/nerdheart-04.gif',
      '/assets/nerdheart/nerdheart-05.gif',
      '/assets/nerdheart/nerdheart-06.png',
      '/assets/nerdheart/nerdheart-07.png',
      '/assets/nerdheart/nerdheart-08.png',
    ],
  },
  {
    id: 'bwl',
    name: 'BWL',
    category: 'SOCIAL MEDIA · MOTION',
    year: '2025',
    image: '/assets/bwl/bwl-01.png',
    accentColor: 'white',
    tagline: 'Una marca china que habla dos idiomas sin perder su voz.',
    tags: ['Social media', 'Motion', 'Paid media', 'RedNote · 小红书'],
    overview:
      'BWL es una marca china de wellness con múltiples líneas de producto. El trabajo abarca producción de contenido para Instagram y paid media en inglés, más adaptación de reels al chino para RedNote (小红书) — cada pieza traducida y reformateada para el contexto cultural y el algoritmo de cada plataforma.',
    role: 'Dirección de arte, edición de video y producción de contenido. Adaptación bilingüe chino-inglés para Instagram y RedNote.',
    challenge:
      'Adaptar el mismo contenido a dos plataformas con culturas visuales distintas: lo que funciona en Instagram no necesariamente conecta en RedNote. Cada versión tenía que sentirse nativa en su plataforma, no una simple traducción.',
    process:
      'Para cada reel: primero la versión en inglés con stock premium, motion type y ritmo occidental; luego la adaptación al chino con tipografía ajustada, copy nativo y referencias visuales que conectan con la audiencia de RedNote. Los estáticos de paid media siguen una línea limpia y premium que funciona en ambos mercados.',
    result:
      'Más de 20 piezas entre paid media estático, reels bilingües y posts editoriales. Sistema de producción que permite adaptar cada pieza a dos idiomas sin perder coherencia de marca.',
    gallery: [
      '/assets/bwl/bwl-mothers-day-web.mp4',
      '/assets/bwl/bwl-11.png',
      '/assets/bwl/bwl-12.png',
      '/assets/bwl/bwl-13.png',
      '/assets/bwl/bwl-14.png',
      '/assets/bwl/bwl-15.png',
    ],
    campaigns: [
      {
        name: 'Avance · Reels',
        objective: 'Reels de producto en inglés y chino para Instagram y RedNote. Misma pieza, dos idiomas, dos plataformas — cada versión adaptada al contexto visual y cultural de su audiencia.',
        formats: ['Reel EN', 'Reel 中文', 'Post 77'],
        gallery: [
          '/assets/bwl/bwl-post-66-web.mp4',
          '/assets/bwl/bwl-post-66-zh-web.mp4',
          '/assets/bwl/bwl-post-77-web.mp4',
        ],
      },
      {
        name: 'Avance · Carrusel',
        objective: 'Post carrusel educativo: "3 Signs your body is asking for help". Secuencia de 5 slides que conecta síntomas con el producto, pensada para retención y guardados en Instagram.',
        formats: ['Carrusel · 5 slides'],
        gallery: [
          '/assets/bwl/bwl-06.png',
          '/assets/bwl/bwl-07.png',
          '/assets/bwl/bwl-08.png',
          '/assets/bwl/bwl-16.png',
          '/assets/bwl/bwl-17.png',
        ],
        type: 'carousel',
      },
      {
        name: 'Optrimax',
        objective: 'Adaptación bilingüe de reel de producto: versión en inglés para Instagram y versión en chino para RedNote (小红书). Mismo concepto visual, copy nativo en cada idioma.',
        formats: ['Reel EN · Instagram', 'Reel 中文 · 小红书'],
        gallery: [
          '/assets/bwl/bwl-post-71-en-web.mp4',
          '/assets/bwl/bwl-post-71-zh-web.mp4',
        ],
      },
      {
        name: 'Drs Secret',
        objective: 'Campaña de paid media con video y set de estáticos. El video activa la marca en pauta dinámica; los estáticos cubren formatos de display y feed con composición limpia orientada a conversión.',
        formats: ['Video · Paid Media', 'Statics · Paid Media'],
        gallery: [
          '/assets/bwl/bwl-pm-03-web.mp4',
          '/assets/bwl/bwl-01.png',
          '/assets/bwl/bwl-02.png',
          '/assets/bwl/bwl-03.png',
          '/assets/bwl/bwl-04.png',
          '/assets/bwl/bwl-05.png',
        ],
      },
      {
        name: 'Pentalab',
        objective: 'Pieza de paid media en video para activación de marca. Edición de producto con cierre de marca y empaque — diseñado para captar atención en el primer segundo de pauta.',
        formats: ['Video · Paid Media'],
        gallery: [
          '/assets/bwl/bwl-pm-11-web.mp4',
        ],
      },
    ],
  },
  {
    id: 'nomada',
    name: 'La Cabaña',
    category: 'BRANDING',
    year: '2024',
    image: '/assets/thumbnail-nomada.png',
    accentColor: '#c7b8ff',
    tagline: 'Un restaurante que encontró su identidad.',
    tags: ['Branding', 'Manual de identidad', 'Diseño editorial'],
    overview:
      'La Cabaña es un restaurante con cocina de autor en Puebla, México. El proyecto fue un reposicionamiento visual completo: desde el logotipo hasta el manual de identidad y el menú impreso.',
    role: 'Rediseño de identidad visual y diseño editorial: logotipo, paleta, tipografía, manual de identidad y menú impreso.',
    challenge:
      'Cambiar la percepción de un restaurante establecido sin alienar a su clientela base. El nuevo sistema tenía que ser sofisticado pero cálido, premium sin pretensión.',
    process:
      'La nueva identidad parte de la calidez: maderas, luz suave y una tipografía serif con personalidad. El manual de identidad documenta usos correctos e incorrectos del logotipo, paleta extendida y aplicaciones en papelería y menú.',
    result:
      'Sistema de identidad completo, menú impreso en dos versiones (carta y tabla), y brand guidelines listos para aplicar en cualquier pieza nueva.',
    gallery: [
      '/assets/nomada/nomada-01.png',
      '/assets/nomada/nomada-02.png',
      '/assets/nomada/nomada-03.png',
      '/assets/nomada/nomada-04.png',
      '/assets/nomada/nomada-05.png',
      '/assets/nomada/nomada-06.png',
      '/assets/nomada/nomada-07.png',
      '/assets/nomada/nomada-08.png',
    ],
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
