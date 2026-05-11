export type SectionGroup = {
  items: string[]
  carousel?: boolean
  contain?: boolean
  wide?: boolean
}

export type Section = {
  items?: string[]
  type?: 'carousel'
  groups?: SectionGroup[]
}

export type SubProject = {
  name: string
  objective: string
  formats: string[]
  gallery: string[]
  type?: 'carousel'
  sections?: Section[]
  subCampaigns?: SubProject[]
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
    category: 'BRANDING · SOCIAL MEDIA',
    year: '2025',
    image: '/assets/thumbnail-zealix.jpg',
    accentColor: 'white',
    tagline: 'Marca completa para un software que transforma restaurantes.',
    tags: ['Identidad visual', 'Brand guidelines', 'Manual de marca', 'Social media'],
    overview:
      'Zealix es un software de gestión inteligente para restaurantes, bares y cafeterías — desde inventario y ventas hasta automatización con IA. El proyecto fue end-to-end: construí la identidad de marca desde cero, desde el naming y el logotipo hasta el sistema tipográfico, paleta y papelería.',
    role: 'Branding completo: naming, logotipo, paleta cromática, sistema tipográfico, papelería y brand guidelines. Producción de contenido editorial para redes sociales aplicando la identidad en contextos reales.',
    challenge:
      'Diseñar una marca que comunicara tecnología de punta sin alienar a dueños de negocio que no son nativos digitales. La identidad tenía que funcionar tanto en materiales impresos —manual, tarjeta, brochure— como en redes sociales con coherencia visual consistente.',
    process:
      'Definí el territorio visual desde el posicionamiento: moderno, claro, con personalidad. El logotipo parte de una forma geométrica que sugiere conectividad y movimiento. La paleta —negro profundo, blanco y acento violeta— distingue sin distanciar. El manual documenta cada decisión para que el sistema escale con coherencia.',
    result:
      'Sistema de identidad listo para escalar: logotipo en múltiples versiones, paleta documentada, tipografía, papelería completa y manual de uso. Contenido editorial para redes sociales aplicando la identidad en contextos reales de restaurantes.',
    gallery: [
      '/assets/zealix/zealix-manual-mockup.jpg',
      '/assets/zealix/zealix-tarjeta.jpg',
      '/assets/zealix/zealix-brochure.png',
      '/assets/zealix/zealix-post-11.png',
    ],
    campaigns: [
      {
        name: 'Branding',
        objective: 'Identidad visual completa para Zealix — desde el naming y construcción del logotipo hasta el sistema tipográfico, paleta cromática y papelería. Documentado en un manual de uso para equipos internos y externos.',
        formats: ['Manual de identidad', 'Logotipo', 'Tipografía', 'Papelería'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/zealix/zealix-manual-01.png', '/assets/zealix/zealix-manual-06.png', '/assets/zealix/zealix-manual-09.png', '/assets/zealix/zealix-manual-14.png', '/assets/zealix/zealix-manual-15.png'], carousel: true, contain: true, wide: true },
              { items: ['/assets/zealix/zealix-sketches.jpg'] },
              { items: ['/assets/zealix/zealix-brochure.png'] },
              { items: ['/assets/zealix/zealix-tarjeta.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'UX UI · Dirección',
        objective: 'Dirección visual del producto digital — lineamientos de interfaz para el sistema POS y el asistente IA móvil, asegurando coherencia entre la identidad de marca y cada pantalla del software.',
        formats: ['POS · Asistente Zea AI', 'App · Zea Mobile'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/zealix/zealix-pos-01.jpg'], contain: true },
              { items: ['/assets/zealix/zealix-zea-mobile.jpg'], contain: true },
            ],
          },
        ],
      },
      {
        name: 'Social Media',
        objective: 'Contenido editorial para Instagram aplicando la identidad de marca en contextos reales — fotografía, copy y composición para conectar con dueños de restaurantes, bares y cafeterías.',
        formats: ['Post · Instagram'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/zealix/zealix-post-08-1.png', '/assets/zealix/zealix-post-08-2.png', '/assets/zealix/zealix-post-08-3.png', '/assets/zealix/zealix-post-08-4.png', '/assets/zealix/zealix-post-08-5.png', '/assets/zealix/zealix-post-08-6.png', '/assets/zealix/zealix-post-08-7.png'], carousel: true },
              { items: ['/assets/zealix/zealix-post-09.png'] },
              { items: ['/assets/zealix/zealix-post-14.png'] },
              { items: ['/assets/zealix/zealix-post-10.png'] },
              { items: ['/assets/zealix/zealix-post-01.png'] },
              { items: ['/assets/zealix/zealix-post-05.png'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'brainy',
    name: 'BrainyBudzz',
    category: 'BRANDING',
    year: '2025',
    image: '/assets/brainy/brainy-12.png',
    accentColor: 'white',
    tagline: 'Aprendizaje que se ve, se siente y se recuerda.',
    tags: ['Branding', 'Identidad visual', 'Mascota', 'Brand book'],
    overview:
      'BrainyBudzz es una plataforma EdTech dirigida a niños en etapa primaria. El reto fue crear una identidad que compitiera en atención contra redes sociales sin caer en el caos visual típico del segmento infantil — energética, pero con sistema.',
    role: 'Diseño de identidad visual completo: naming, logotipo, mascota Bud, paleta, tipografía y brand book. Aplicación de la identidad en la plataforma digital.',
    challenge:
      'Crear algo que los niños encuentren divertido y los padres perciban como confiable. Dos audiencias opuestas con criterios de decisión completamente distintos.',
    process:
      'Diseñé a Bud — una mascota modular basada en un casco de inventor infantil con visor de realidad virtual — que funciona como elemento vivo de la marca: puede expresar emociones, adaptarse a contextos y escalar a merchandise o animación. La paleta combina los primarios CMY con negro y lavanda para dar energía sin saturar.',
    result:
      'Brand book completo: construcción de logotipo, sistema de reducciones, paleta Pantone documentada, tipografía y mascota lista para animar. Identidad aplicada a la plataforma digital en desktop y mobile.',
    gallery: [
      '/assets/brainy/brainy-12.png',
      '/assets/brainy/brainy-09.png',
      '/assets/brainy/brainy-07.png',
      '/assets/brainy/brainy-11.png',
    ],
    campaigns: [
      {
        name: 'Branding',
        objective: 'Identidad visual completa para BrainyBudzz — construcción del logotipo y mascota Bud, sistema de variantes de color, paleta Pantone, tipografía y aplicación en plataforma digital.',
        formats: ['Logotipo', 'Mascota · Bud', 'Paleta de color', 'Tipografía', 'Reducciones', 'Aplicación digital'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/brainy/brainy-09.png', '/assets/brainy/brainy-10.png', '/assets/brainy/brainy-07.png', '/assets/brainy/brainy-06.png', '/assets/brainy/brainy-05.png', '/assets/brainy/brainy-08.png', '/assets/brainy/brainy-11.png'], carousel: true, contain: true, wide: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'beatness',
    name: 'Beatness',
    category: 'SOCIAL MEDIA',
    year: '2024',
    image: '/assets/beatness/beatness-01.jpg',
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
      '/assets/beatness/beatness-reel-cycling-web.mp4',
      '/assets/beatness/beatness-02.jpg',
      '/assets/beatness/beatness-03.jpg',
      '/assets/beatness/beatness-04.jpg',
      '/assets/beatness/beatness-05.jpg',
      '/assets/beatness/beatness-06.png',
      '/assets/beatness/beatness-09.png',
      '/assets/beatness/beatness-10.jpg',
    ],
    campaigns: [
      {
        name: 'Pauta · Diferentes Disciplinas',
        objective: 'Campaña de paid media en 4 variaciones fotográficas y 2 formatos — post cuadrado y banner HD — para activación de marca en pauta digital.',
        formats: ['Post · 4 variaciones', 'Banner HD · 2 variaciones'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/beatness/beatness-pauta-post-1.png', '/assets/beatness/beatness-pauta-post-2.png', '/assets/beatness/beatness-pauta-post-3.png', '/assets/beatness/beatness-pauta-post-4.png'], carousel: true },
              { items: ['/assets/beatness/beatness-pauta-hd-1.png', '/assets/beatness/beatness-pauta-hd-2.png'], carousel: true },
            ],
          },
        ],
      },
      {
        name: 'Eventos',
        objective: 'Piezas de activación para eventos especiales del club — desde inauguraciones y colaboraciones externas hasta clases temáticas y programas inclusivos.',
        formats: ['Story · Instagram', 'Post · Instagram'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/beatness/beatness-reel-beatdown-web.mp4'] },
              { items: ['/assets/beatness/beatness-ev-inaug.png'] },
              { items: ['/assets/beatness/beatness-ev-anika.png'] },
              { items: ['/assets/beatness/beatness-ev-switch.png'] },
              { items: ['/assets/beatness/beatness-ev-box-kids.png'] },
              { items: ['/assets/beatness/beatness-ev-tec.png'] },
            ],
          },
        ],
      },
      {
        name: 'The ___ Beat',
        objective: 'Serie editorial por disciplina — cada deporte con su propio acento de color y fotografía real en el gym. Box, Funcional, Bootcamp y Cycling en un solo sistema visual.',
        formats: ['Post · Instagram · 4 disciplinas'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/beatness/beatness-beat-box.jpg', '/assets/beatness/beatness-beat-funcional.jpg', '/assets/beatness/beatness-beat-bootcamp.jpg', '/assets/beatness/beatness-beat-cycling.jpg'], carousel: true },
            ],
          },
        ],
      },
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
      '/assets/kop/kop-02.png',
      '/assets/kop/kop-reel-01-web.mp4',
      '/assets/kop/kop-08.png',
      '/assets/kop/kop-reel-02-web.mp4',
    ],
    campaigns: [
      {
        name: 'Campañas',
        objective: 'Sistema de comunicación para eventos, activaciones y operación del club — cada pieza adaptada a los formatos y pantallas necesarios.',
        formats: [],
        gallery: [],
        subCampaigns: [
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
        name: 'Kings Tavern',
        objective: 'Contenido editorial para el restaurante interno del club. Una línea visual más cálida y atmosférica que convive con la identidad deportiva de KOP sin romper el feed.',
        formats: ['Post · Instagram', 'Carrusel · Instagram'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/kop/kop-kt-reel-web.mp4'] },
              { items: ['/assets/kop/kop-kt-184.png'] },
              { items: ['/assets/kop/kop-kt-157-1.png', '/assets/kop/kop-kt-157-2.png', '/assets/kop/kop-kt-157-3.png', '/assets/kop/kop-kt-157-4.png', '/assets/kop/kop-kt-157-5.png', '/assets/kop/kop-kt-157-6.png', '/assets/kop/kop-kt-157-7.png'], carousel: true },
            ],
          },
        ],
      },
      {
        name: 'Sin Yolanda',
        objective: 'Serie de reels para la apertura de Sin Yolanda — tres piezas distintas con dos versiones del opening principal para distribución en redes sociales.',
        formats: ['Reel · Opening v1', 'Reel · Opening v2', 'Reel · Part 2', 'Reel · Part 3'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/kop/kop-sy-reel-01-web.mp4'] },
              { items: ['/assets/kop/kop-sy-reel-03-web.mp4'] },
              { items: ['/assets/kop/kop-sy-reel-04-web.mp4'] },
            ],
          },
        ],
      },
      {
        name: 'Contenido Orgánico',
        objective: 'Posts editoriales, carruseles educativos y reels para el feed de Instagram de KOP — piezas que construyen identidad de marca semana a semana.',
        formats: ['Post', 'Carrusel', 'Reel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/kop/kop-reel-174-web.mp4'] },
              { items: ['/assets/kop/kop-c143-1.png', '/assets/kop/kop-c143-2.png', '/assets/kop/kop-c143-3.png', '/assets/kop/kop-c143-4.png'], carousel: true },
              { items: ['/assets/kop/kop-post-140.png'] },
              { items: ['/assets/kop/kop-reel-147-web.mp4'] },
              { items: ['/assets/kop/kop-c146-1.png', '/assets/kop/kop-c146-2.png', '/assets/kop/kop-c146-3.png', '/assets/kop/kop-c146-4.png'], carousel: true },
              { items: ['/assets/kop/kop-reel-150-web.mp4'] },
              { items: ['/assets/kop/kop-c154-1.png', '/assets/kop/kop-c154-2.png', '/assets/kop/kop-c154-3.png'], carousel: true },
              { items: ['/assets/kop/kop-c168-1.png', '/assets/kop/kop-c168-2.png', '/assets/kop/kop-c168-3.png'], carousel: true },
              { items: ['/assets/kop/kop-post-172.png'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'casta-real',
    name: 'Casta Real',
    category: 'SOCIAL MEDIA · PACKAGING',
    year: '2024',
    image: '/assets/thumbnail-casta-real.png',
    accentColor: 'white',
    tagline: 'Fuerza que se ve. Origen que se nota.',
    tags: ['Social media', 'Editorial fotográfico', 'Packaging', 'Dirección de arte'],
    overview:
      'Casta Real es una marca de suplementos deportivos con raíces mexicanas. Su identidad de marca ya tenía fuerza; lo que faltaba era un sistema de contenido y packaging que lo comunicara sin perder autenticidad.',
    role: 'Dirección de arte, producción de contenido para Instagram y diseño de packaging: editorial fotográfico, editorial tipográfico, reels y etiquetas para dos líneas de producto.',
    challenge:
      'El mercado de suplementos está saturado de contenido agresivo y genérico. El reto fue crear algo visualmente contundente que destacara sin caer en los clichés del fitness estadounidense — tanto en redes como en el empaque físico.',
    process:
      'Desarrollé dos líneas editoriales paralelas: una fotográfica con atletas reales en entornos de entrenamiento, y una tipográfica con frases de identidad en layout bold. Para el packaging, la misma paleta —negro, blanco y tierra— aplicada a dos formatos distintos: bolsa de transporte y presentación de descanso.',
    result:
      '15+ piezas editoriales, 2 reels de contenido y packaging completo para dos líneas de producto. Sistema visual coherente entre digital y físico.',
    gallery: [
      '/assets/casta-real/cr-01.png',
      '/assets/casta-real/cr-reel-01-web.mp4',
      '/assets/casta-real/cr-02.png',
      '/assets/casta-real/cr-03.png',
      '/assets/casta-real/cr-10.png',
      '/assets/casta-real/cr-reel-02-web.mp4',
      '/assets/casta-real/cr-05.jpg',
      '/assets/casta-real/cr-11.png',
      '/assets/casta-real/cr-12.jpg',
      '/assets/casta-real/cr-13.jpg',
      '/assets/casta-real/cr-07.png',
      '/assets/casta-real/cr-08.png',
      '/assets/casta-real/cr-09.jpg',
    ],
    campaigns: [
      {
        name: 'Packaging',
        objective: 'Diseño de etiquetas y empaque para dos líneas de producto — Transporte y Descanso — manteniendo la identidad de fuerza y origen que define la marca en todos sus puntos de contacto físicos.',
        formats: ['Empaque · Transporte', 'Empaque · Descanso'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/casta-real/cr-pkg-hero.png', '/assets/casta-real/cr-pkg-hero-v2.png'], carousel: true },
              { items: ['/assets/casta-real/cr-label-basico.png', '/assets/casta-real/cr-label-mant.png'], carousel: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'nerdheart',
    name: 'NerdHeart',
    category: 'UX UI · MOTION',
    year: '2024',
    image: '/assets/nerdheart/nerdheart-mockup-monitors.jpg',
    accentColor: '#d6cc94',
    tagline: 'Una marca que vive en el movimiento.',
    tags: ['UX UI', 'Landing page', 'Motion graphics', 'Ilustración'],
    overview:
      'NerdHeart es una plataforma de productividad y automatización digital con una identidad de marca propia — mascota, sello animado y sistema visual. El proyecto abarcó desde el diseño de la landing page hasta la identidad en movimiento.',
    role: 'Diseño UX UI de landing page, design system y componentes. Producción de identidad en movimiento: sello animado, sticker GIF de la mascota y elementos gráficos para merchandising.',
    challenge:
      'Crear una identidad que funcione tanto en digital —landing, componentes UI— como en físico —stickers, sello, merch— sin perder coherencia. La mascota tenía que ser igual de expresiva en estático que en movimiento.',
    process:
      'Diseñé la landing page partiendo de la personalidad de la marca: tipografía expresiva, paleta pastel-neon y la mascota como hilo conductor de cada sección. En paralelo, definí los principios de animación del sello —rotación orgánica, timing suave— y produje los GIFs entregables para uso digital y físico.',
    result:
      'Landing page completa con design system documentado, mockups de dispositivo y 4 piezas animadas: sello rotatorio en 3 versiones y sticker de la mascota listos para Tenor y merchandising.',
    gallery: [
      '/assets/nerdheart/nerdheart-mockup-monitors.jpg',
      '/assets/nerdheart/nerdheart-mockup-phone.jpg',
      '/assets/nerdheart/nerdheart-01.gif',
      '/assets/nerdheart/nerdheart-mockup-laptop.jpg',
    ],
    campaigns: [
      {
        name: 'UX UI · Landing Page',
        objective: 'Diseño de landing page completa para NerdHeart — desde wireframes y design system hasta entrega final con mockups en desktop y mobile.',
        formats: ['Landing page · Desktop', 'Landing page · Mobile', 'Design system'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/nerdheart/nerdheart-mockup-monitors.jpg'] },
              { items: ['/assets/nerdheart/nerdheart-mockup-laptop.jpg'] },
              { items: ['/assets/nerdheart/nerdheart-mockup-phone.jpg'] },
              { items: ['/assets/nerdheart/nerdheart-mockup-phone2.png'] },
            ],
          },
        ],
      },
      {
        name: 'Motion · Ilustración',
        objective: 'Sello animado de la marca en 3 versiones y sticker GIF de la mascota — entregables listos para uso digital, redes sociales y merchandising físico.',
        formats: ['Sello animado', 'Sticker GIF', 'PNG estáticos'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/nerdheart/nerdheart-01.gif'] },
              { items: ['/assets/nerdheart/nerdheart-02.gif'] },
              { items: ['/assets/nerdheart/nerdheart-03.gif'] },
              { items: ['/assets/nerdheart/nerdheart-04.gif'] },
              { items: ['/assets/nerdheart/nerdheart-05.gif'] },
              { items: ['/assets/nerdheart/nerdheart-06.png'] },
              { items: ['/assets/nerdheart/nerdheart-07.png'] },
              { items: ['/assets/nerdheart/nerdheart-08.png'] },
            ],
          },
        ],
      },
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
    ],
    campaigns: [
      {
        name: 'Avance',
        objective: 'Contenido de producto para Instagram y RedNote: reels bilingües adaptados por plataforma y carrusel educativo pensado para retención y guardados.',
        formats: ['Reel EN', 'Reel 中文', 'Carrusel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/bwl/bwl-post-66-web.mp4', '/assets/bwl/bwl-post-66-zh-web.mp4'], carousel: true },
              { items: ['/assets/bwl/bwl-post-77-web.mp4'] },
            ],
          },
          { items: ['/assets/bwl/bwl-06.png', '/assets/bwl/bwl-07.png', '/assets/bwl/bwl-08.png', '/assets/bwl/bwl-16.png', '/assets/bwl/bwl-17.png'], type: 'carousel' },
        ],
      },
      {
        name: 'Optrimax',
        objective: 'Adaptación bilingüe de reel de producto: versión en inglés para Instagram y versión en chino para RedNote (小红书). Mismo concepto visual, copy nativo en cada idioma.',
        formats: ['Reel EN · Instagram', 'Reel 中文 · 小红书'],
        gallery: [],
        sections: [
          { items: ['/assets/bwl/bwl-post-71-en-web.mp4', '/assets/bwl/bwl-post-71-zh-web.mp4'], type: 'carousel' },
          { items: ['/assets/bwl/bwl-pm-12.png', '/assets/bwl/bwl-pm-13.png'] },
        ],
      },
      {
        name: 'Drs Secret',
        objective: 'Campaña de paid media con video y set de estáticos. El video activa la marca en pauta dinámica; los estáticos cubren formatos de display y feed con composición limpia orientada a conversión.',
        formats: ['Video · Paid Media', 'Statics · Paid Media'],
        gallery: [],
        sections: [
          { items: ['/assets/bwl/bwl-pm-03-web.mp4'] },
          { items: ['/assets/bwl/bwl-01.png', '/assets/bwl/bwl-02.png', '/assets/bwl/bwl-03.png', '/assets/bwl/bwl-04.png', '/assets/bwl/bwl-05.png'], type: 'carousel' },
        ],
      },
      {
        name: 'Pentalab',
        objective: 'Pieza de paid media en video para activación de marca. Edición de producto con cierre de marca y empaque — diseñado para captar atención en el primer segundo de pauta.',
        formats: ['Video · Paid Media'],
        gallery: [],
        sections: [
          { items: ['/assets/bwl/bwl-pm-11-web.mp4'] },
        ],
      },
    ],
  },
  {
    id: 'activated-decor',
    name: 'Activated Decor',
    category: 'BRANDING · MOTION',
    year: '2024',
    image: '/assets/activated-decor/ad-cover.png',
    accentColor: '#8B1A1A',
    tagline: 'Rebranding que transforma un espacio en una marca.',
    tags: ['Rebranding', 'Identidad visual', 'Logotipo animado', 'Brand guidelines', 'Motion'],
    overview:
      'Activated Decor es un estudio de interiorismo y decoración. El proyecto fue un rebranding completo: desde el sistema de identidad visual —logotipo, paleta, tipografía— hasta la producción del logotipo animado en múltiples versiones para uso digital y redes sociales.',
    role: 'Rebranding completo: construcción del logotipo y sistema de marca, brand guidelines, paleta cromática, tipografía y producción de identidad en movimiento — logotipo animado en tres versiones y dos combinaciones de color.',
    challenge:
      'Reflejar la sofisticación y precisión de un estudio de diseño de interiores en un sistema de marca que funcionara tanto en aplicaciones físicas como en entornos digitales con logos en movimiento.',
    process:
      'Desarrollé el monograma "ad" como base del sistema — geométrico, limpio, con personalidad. La paleta negro profundo y burdeos aporta elegancia y distinción. El manual de identidad documenta construcción del logotipo, usos correctos en distintos fondos, tipografía (Poppins + Inter) y variantes de aplicación. Los logos animados se produjeron en tres versiones —icono, logotipo completo, versión corta— y dos paletas de color.',
    result:
      'Sistema de identidad completo con brand guidelines, logotipo en tres versiones estáticas y animadas entregadas en GIF y MOV para uso digital, redes sociales y aplicaciones de marca.',
    gallery: [],
    campaigns: [
      {
        name: 'Brand Identity',
        objective: 'Sistema de identidad visual completo para Activated Decor — logotipo y monograma, paleta cromática, tipografía, construcción del sistema y guía de usos correctos e incorrectos.',
        formats: ['Logotipo · 3 versiones', 'Paleta cromática', 'Tipografía', 'Brand guidelines'],
        gallery: [],
        sections: [
          {
            groups: [
              {
                items: [
                  '/assets/activated-decor/ad-03.png',
                  '/assets/activated-decor/ad-07.png',
                  '/assets/activated-decor/ad-08.png',
                  '/assets/activated-decor/ad-04.png',
                  '/assets/activated-decor/ad-05.png',
                  '/assets/activated-decor/ad-09.png',
                  '/assets/activated-decor/ad-10.png',
                ],
                carousel: true,
                contain: true,
                wide: true,
              },
            ],
          },
        ],
      },
      {
        name: 'Motion · Logotipo Animado',
        objective: 'Logotipo animado en tres versiones — icono, logotipo completo y versión corta — producidos en dos combinaciones de color: negro/rojo y blanco/rojo.',
        formats: ['Logotipo animado · Negro/Rojo', 'Logotipo animado · Blanco/Rojo', 'GIF · MOV'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/activated-decor/ad-icon-br.gif'], contain: true },
              { items: ['/assets/activated-decor/ad-logotype-br.gif'], contain: true },
              { items: ['/assets/activated-decor/ad-shorter-br.gif'], contain: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'procyon',
    name: 'Procyon Gaming',
    category: 'BRANDING · SOCIAL MEDIA',
    year: '2024',
    image: '/assets/procyon/procyon-cover.jpg',
    accentColor: '#7C3AED',
    tagline: 'Identidad cósmica para una organización esports en ascenso.',
    tags: ['Branding', 'Identidad visual', 'Manual de marca', 'Social media', 'Motion', 'Esports'],
    overview:
      'Procyon Gaming es una organización de Valorant en LATAM con presencia competitiva en torneos universitarios y ligas regionales. El proyecto fue branding completo desde cero: logotipo, sistema visual, headers de redes sociales, plantillas competitivas y un kit completo para creadores de contenido con marcos animados de streaming.',
    role: 'Branding end-to-end: logotipo en 9 variantes (horizontal, vertical e icono × original, digital y negativo), paleta cromática, tipografía, manual de marca, headers de redes, producción de contenido competitivo y kit de creadores con overlays animados.',
    challenge:
      'Construir una identidad que viviera en dos mundos simultáneamente: la arena competitiva —posts de partidos, resultados, torneos— y el ecosistema de creadores —overlays de streaming, banners, posts de bienvenida— sin perder coherencia visual ni personalidad de marca.',
    process:
      'El punto de partida fue el símbolo: una estrella geométrica con anillo orbital inspirada en la constelación Procyon. Paleta profunda de negro y púrpura, tipografía de display agresiva (Air Millhouse) complementada con Kodchasan para texto. Desde ahí construí el sistema completo — headers de organización, plantillas competitivas para resultados de match y game day, y el kit de creadores con banners, posts de bienvenida y marcos animados en WEBM.',
    result:
      'Sistema de identidad completo entregado: 9 variantes de logotipo, headers para Twitter, Facebook y Twitch, más de 10 piezas de contenido competitivo, 4 banners de creadores, 3 posts de bienvenida y 3 marcos animados de streaming listos para producción.',
    gallery: [],
    campaigns: [
      {
        name: 'Identidad Visual',
        objective: 'Sistema de logotipo en 9 variantes (horizontal, vertical e icono × original, digital y negativo) más headers de organización para todas las plataformas sociales.',
        formats: ['Logotipo · 3 versiones', 'Paleta cromática', 'Tipografía', 'Headers · Twitter · Facebook · Twitch'],
        gallery: [],
        sections: [
          {
            groups: [
              {
                items: [
                  '/assets/procyon/procyon-logo-h-original.png',
                  '/assets/procyon/procyon-logo-h-digital.png',
                  '/assets/procyon/procyon-logo-v-original.png',
                  '/assets/procyon/procyon-logo-icon.png',
                ],
                carousel: true,
                contain: true,
              },
              { items: ['/assets/procyon/procyon-header.jpg'], wide: true },
            ],
          },
        ],
      },
      {
        name: 'Social Media · Competitivo',
        objective: 'Plantillas de contenido competitivo para partidos de la Overload League — Game Day, Winners y Defeat — con personajes 3D de Valorant y jugadores reales del roster.',
        formats: ['Game Day', 'Winners', 'Defeat', 'Instagram · 4:5'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/procyon/procyon-gameday-01.png'] },
              { items: ['/assets/procyon/procyon-winners-01.png'] },
              { items: ['/assets/procyon/procyon-defeat-01.png'] },
              { items: ['/assets/procyon/procyon-gameday-02.png'] },
              { items: ['/assets/procyon/procyon-winners-02.png'] },
              { items: ['/assets/procyon/procyon-defeat-02.png'] },
            ],
          },
        ],
      },
      {
        name: 'Creadores de Contenido',
        objective: 'Kit completo para los creadores de contenido de la org — banners para Twitter y Twitch, y posts de bienvenida para cada creator del roster.',
        formats: ['Banners · Twitter · Twitch', 'Posts de bienvenida', 'Content Creator kit'],
        gallery: [],
        sections: [
          {
            groups: [
              {
                items: [
                  '/assets/procyon/procyon-banner-loremu.png',
                  '/assets/procyon/procyon-banner-yass.png',
                  '/assets/procyon/procyon-banner-nubes.png',
                  '/assets/procyon/procyon-banner-nubes-branded.png',
                ],
                carousel: true,
                wide: true,
              },
              { items: ['/assets/procyon/procyon-welcome-loremu.png'] },
              { items: ['/assets/procyon/procyon-welcome-yass.png'] },
              { items: ['/assets/procyon/procyon-welcome-nubes.png'] },
            ],
          },
        ],
      },
      {
        name: 'Marcos Animados · Streaming',
        objective: 'Overlays de streaming animados en WEBM para los creadores de contenido de Procyon Gaming — marcos personalizados para cada streamer del roster.',
        formats: ['Streaming overlay · WEBM', 'Loremu · Nubes · Sweety'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/procyon/procyon-marco-loremu.webm'] },
              { items: ['/assets/procyon/procyon-marco-nubes.webm'] },
              { items: ['/assets/procyon/procyon-marco-sweety.webm'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'corazon-mixteco',
    name: 'Corazón Mixteco',
    category: 'SOCIAL MEDIA',
    year: '2026',
    image: '/assets/corazon-mixteco/cm-mar-02.jpg',
    accentColor: '#7B2D8B',
    tagline: 'La herencia del buen queso, en cada pieza de contenido.',
    tags: ['Social media', 'Dirección de arte', 'Fotografía editorial', 'Carruseles', 'Print'],
    overview:
      'Corazón Mixteco es una marca de quesos artesanales oaxaqueños con 60 años de historia. El trabajo abarca la dirección de arte y producción de contenido mensual para redes sociales: parrillas editoriales de producto, carruseles educativos, reels y materiales de punto de venta.',
    role: 'Dirección de arte y producción de contenido: parrillas mensuales de Febrero y Marzo 2026, carruseles educativos de producto, reels y diseño de banner roll-up para exhibición.',
    challenge:
      'Comunicar autenticidad artesanal y tradición oaxaqueña en un feed de Instagram sin caer en lo folclórico ni en lo genérico. El queso tiene que verse como lo que es: un producto premium de origen.',
    process:
      'Cada parrilla parte del producto como protagonista — fotografía de food con luz natural, props de madera, barro y textiles oaxaqueños. Los carruseles educativos complementan el editorial explicando procesos y tips de cuidado. Los copies juegan con el lenguaje coloquial mexicano sin perder el tono premium.',
    result:
      'Producción continua: parrillas editoriales de Febrero y Marzo 2026, dos carruseles educativos, cuatro reels de Marzo y banner roll-up para punto de venta.',
    gallery: [
      '/assets/corazon-mixteco/cm-post-01.png',
      '/assets/corazon-mixteco/cm-mar-01.jpg',
      '/assets/corazon-mixteco/cm-post-02.png',
      '/assets/corazon-mixteco/cm-mar-12.jpg',
      '/assets/corazon-mixteco/cm-post-06.png',
      '/assets/corazon-mixteco/cm-mar-02.jpg',
      '/assets/corazon-mixteco/cm-post-07.png',
      '/assets/corazon-mixteco/cm-post-09.png',
      '/assets/corazon-mixteco/cm-post-10.png',
      '/assets/corazon-mixteco/cm-mar-03.jpg',
      '/assets/corazon-mixteco/cm-mar-04.jpg',
      '/assets/corazon-mixteco/cm-mar-05.jpg',
      '/assets/corazon-mixteco/cm-mar-06.jpg',
      '/assets/corazon-mixteco/cm-mar-07.jpg',
      '/assets/corazon-mixteco/cm-mar-09.jpg',
      '/assets/corazon-mixteco/cm-mar-10.jpg',
      '/assets/corazon-mixteco/cm-reel-mar-01.mp4',
      '/assets/corazon-mixteco/cm-reel-mar-02.mp4',
      '/assets/corazon-mixteco/cm-reel-mar-03.mp4',
      '/assets/corazon-mixteco/cm-reel-mar-04.mp4',
      '/assets/corazon-mixteco/cm-reel-feb-01.mp4',
    ],
    campaigns: [
      {
        name: 'Carruseles Educativos',
        objective: 'Carruseles de producto que educan al consumidor sobre autenticidad y cuidado del queso artesanal — dos formatos: identificación de queso artesanal y tips de conservación.',
        formats: ['Carrusel · Instagram', 'Educativo · Producto'],
        gallery: [],
        sections: [
          {
            groups: [
              {
                items: [
                  '/assets/corazon-mixteco/cm-car1-cover.png',
                  '/assets/corazon-mixteco/cm-car1-02.png',
                  '/assets/corazon-mixteco/cm-car1-03.png',
                  '/assets/corazon-mixteco/cm-car1-04.png',
                  '/assets/corazon-mixteco/cm-car1-05.png',
                ],
                carousel: true,
              },
              {
                items: [
                  '/assets/corazon-mixteco/cm-car2-cover.png',
                  '/assets/corazon-mixteco/cm-car2-02.png',
                  '/assets/corazon-mixteco/cm-car2-03.png',
                  '/assets/corazon-mixteco/cm-car2-04.png',
                ],
                carousel: true,
              },
            ],
          },
        ],
      },
      {
        name: 'Material Print',
        objective: 'Banner roll-up para punto de venta y exhibiciones — comunica las dos líneas principales de producto (Quesillo y Panela) con identidad de marca clara y datos de contacto.',
        formats: ['Banner roll-up · Punto de venta', 'Print'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/corazon-mixteco/cm-banner.png'], contain: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'amorcito',
    name: 'Amorcito Corazón',
    category: 'SOCIAL MEDIA',
    year: '2026',
    image: '/assets/amorcito/ac-cover.png',
    accentColor: '#C9871A',
    tagline: 'El sushi más chingón de México, en cinco sucursales.',
    tags: ['Social media', 'Dirección de arte', 'Campañas', 'Print', 'Punto de venta'],
    overview:
      'Amorcito Corazón es una cadena de restaurantes japonés-mexicano con cinco sucursales en Puebla. El trabajo abarca la dirección de arte y producción de contenido para redes sociales — desde la parrilla mensual de fotografía editorial hasta campañas de activación, kit de sucursales y materiales de punto de venta.',
    role: 'Dirección de arte y producción de contenido: parrilla mensual, campañas de activación, adaptación a múltiples formatos (feed, stories, HD, print) y diseño de materiales POS.',
    challenge:
      'Mantener coherencia visual en una cadena con cinco locaciones y un posicionamiento que mezcla lo japonés y lo mexicano — dos mundos visuales distintos — sin caer en la obviedad de ninguno de los dos.',
    process:
      'La dirección de arte parte del espacio: iluminación cálida, neón amarillo, madera y piezas de cerámica. La fotografía editorial ancla cada parrilla mensual, y desde ahí se construyen las piezas de campaña, el material impreso y los kits de activación adaptados a cada formato y sucursal.',
    result:
      'Producción continua: parrillas mensuales de Feb y Marzo 2026, campaña San Valentín con adaptación a digital y print, kit de cinco sucursales en post + story, tent card de coctelería y encuesta de expansión.',
    gallery: [
      '/assets/amorcito/ac-cover.png',
      '/assets/amorcito/ac-feb-02.png',
      '/assets/amorcito/ac-feb-03.png',
      '/assets/amorcito/ac-feb-04.png',
      '/assets/amorcito/ac-feb-05.png',
      '/assets/amorcito/ac-feb-06.png',
      '/assets/amorcito/ac-mar-02.jpg',
      '/assets/amorcito/ac-mar-03.jpg',
      '/assets/amorcito/ac-mar-05.jpg',
      '/assets/amorcito/ac-mar-07.jpg',
      '/assets/amorcito/ac-mar-09.jpg',
      '/assets/amorcito/ac-reel-01.mp4',
      '/assets/amorcito/ac-reel-02.mp4',
      '/assets/amorcito/ac-reel-tiktok.mp4',
      '/assets/amorcito/ac-pantallas.mp4',
    ],
    campaigns: [
      {
        name: 'Campaña San Valentín',
        objective: 'Campaña de activación para el 14 de febrero — mini campaña UGC "¿Tienes una historia con tu amorcito?" en tres stories para Instagram: convocatoria, mecánica y cierre.',
        formats: ['Stories · Instagram', 'UGC · Activación'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/amorcito/ac-ugc-01.png'] },
              { items: ['/assets/amorcito/ac-ugc-02.png'] },
              { items: ['/assets/amorcito/ac-ugc-03.png'] },
            ],
          },
        ],
      },
      {
        name: 'Kit de Sucursales',
        objective: 'Kit de contenido para las cinco sucursales en Puebla — post cuadrado y story con las ubicaciones, adaptado en dos versiones de fotografía para rotar en el feed.',
        formats: ['Post · Instagram', '5 sucursales'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/amorcito/ac-suc-post-01.png'] },
              { items: ['/assets/amorcito/ac-suc-post-02.png'] },
            ],
          },
        ],
      },
      {
        name: 'Materiales de Punto de Venta',
        objective: 'Diseño de materiales físicos para las mesas — tent card de coctelería con QR y encuesta de expansión para identificar demanda de nueva sucursal.',
        formats: ['Tent card · Coctelería', 'Encuesta · Nueva sucursal', 'Print'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/amorcito/ac-tentcard.png'], wide: true },
              { items: ['/assets/amorcito/ac-encuesta.png'], contain: true },
            ],
          },
        ],
      },
    ],
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
