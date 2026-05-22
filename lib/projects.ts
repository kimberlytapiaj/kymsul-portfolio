export type SectionGroup = {
  items: string[]
  carousel?: boolean
  contain?: boolean
  wide?: boolean
  span?: number   // column span in a 3-col grid (1 | 2 | 3)
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
  agency?: string
  challenge: string
  process: string
  result: string
  gallery: string[]
  campaigns?: SubProject[]
  campaignsLabel?: string
}

export const projects: Project[] = [
  {
    id: 'zealix',
    name: 'Zealix',
    category: 'BRANDING · SOCIAL MEDIA',
    year: '2024–26',
    image: '/assets/thumbnail-zealix.jpg',
    accentColor: 'white',
    tagline: 'Automatiza. Optimiza. Evoluciona.',
    tags: ['Naming', 'Identidad visual', 'Brand guidelines', 'Manual de marca', 'Papelería', 'Social media'],
    overview:
      'Zealix es una plataforma mexicana con IA como motor central, diseñada para automatizar la gestión de restaurantes, cafeterías y negocios de comida: desde el inventario y las órdenes hasta el análisis de rentabilidad con el asistente Zea AI. El proyecto fue end-to-end: naming de Zealix y Zea, identidad visual completa desde boceto, aplicación de identidad en el producto digital y papelería corporativa. Dirección creativa de la producción visual para redes sociales.',
    role: 'Directora de Arte y Diseñadora de Marca. Naming, identidad visual completa, manual de marca y papelería corporativa para 6 integrantes. Dirección creativa de la producción visual para IG · FB · LinkedIn.',
    challenge:
      'Construir una marca tecnológica mexicana que se sintiera accesible para dueños de restaurante sin experiencia en software, sin perder la credibilidad que un producto B2B requiere. La identidad tenía que anclar lo mexicano sin caer en lo folclórico. El sistema tenía que funcionar en modo claro y oscuro, en pantalla y en impresión, con un sistema visual tan claro que cualquier operador de negocio lo entendiera sin tecnicismos.',
    process:
      'El proyecto arranca en naming: Zealix viene de "la raíz del maíz", un nombre que ancla la identidad en lo mexicano y comunica la idea de ser la base desde la que crecen los negocios. Zea, el asistente IA, se desprende del mismo origen. El logo traduce ese concepto: bocetos a mano explorando crecimiento y conexión, construcción sobre retícula y sistema documentado en tres versiones. De ahí, la identidad se extiende al movimiento con el logo animado y a las redes sociales con dirección creativa de la producción visual.',
    result:
      'Sistema de identidad en uso activo con restaurantes reales operando bajo la marca. Entregables: logotipo en múltiples versiones, manual de marca, tarjetas personalizadas para 6 integrantes, folleto corporativo y documentos legales con identidad aplicada. La marca vive hoy en IG · FB · LinkedIn: 27 piezas publicadas en los primeros 2 meses.',
    campaignsLabel: 'TRABAJO',
    gallery: [
      '/assets/zealix/zealix-manual-mockup.jpg',
      '/assets/zealix/zealix-pos-system-01.jpg',
      '/assets/zealix/zealix-pos-system-03.jpg',
      '/assets/zealix/zealix-01.png',
      '/assets/zealix/zealix-zea-mobile.jpg',
      '/assets/zealix/zealix-06.png',
    ],
    campaigns: [
      {
        name: 'Branding',
        objective: 'Naming, construcción del logotipo, sistema tipográfico, paleta cromática y papelería. Documentado en manual de marca para equipos internos y externos.',
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
        name: 'Marca en el Producto',
        objective: 'El sistema de marca aplicado al producto digital. Revisión de consistencia sobre las interfaces reales: dashboard, inventario IA, gestión de mesas, menú, asistente Zea AI y app móvil.',
        formats: ['Mac · Desktop', 'iPad · Tablet', 'Móvil'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/zealix/zealix-dashboard.png'],      wide: true },
              { items: ['/assets/zealix/zealix-ipad-mesas.png'] },
              { items: ['/assets/zealix/zealix-mac-inventario.png'] },
              { items: ['/assets/zealix/zealix-mac-menu.png'] },
              { items: ['/assets/zealix/zealix-ipad-menu.png'] },
              { items: ['/assets/zealix/zealix-zea-chat.png'] },
              { items: ['/assets/zealix/zealix-zea-mobile.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'POS · Punto de Venta',
        objective: 'Identidad aplicada al hardware: el sistema Zealix en el punto de venta físico. Asistente Zea, gestión de menú y dashboard de ventas en terminal POS real.',
        formats: ['Terminal POS', 'Asistente Zea AI', 'Gestión de Menú', 'Dashboard de Ventas'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/zealix/zealix-pos-system-01.jpg', '/assets/zealix/zealix-pos-system-02.jpg', '/assets/zealix/zealix-pos-system-03.jpg'], carousel: true, wide: true },
            ],
          },
        ],
      },
      {
        name: 'Motion · Logo Animado',
        objective: 'Logo animado de Zealix: identidad en movimiento para uso digital, presentaciones y activaciones de marca.',
        formats: ['Logo animado · MP4'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/zealix/zealix-logo-animated.mp4'], contain: true },
            ],
          },
        ],
      },
      {
        name: 'Social Media',
        objective: 'Dirección creativa de la producción visual: lineamientos, revisión y consistencia de marca. Fotografía editorial para dueños de restaurantes en IG · FB · LinkedIn.',
        formats: ['Post · Instagram', 'Post · Facebook', 'Post · LinkedIn', 'Carrusel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/zealix/zealix-post-08-1.png', '/assets/zealix/zealix-post-08-2.png', '/assets/zealix/zealix-post-08-3.png', '/assets/zealix/zealix-post-08-4.png', '/assets/zealix/zealix-post-08-5.png', '/assets/zealix/zealix-post-08-6.png', '/assets/zealix/zealix-post-08-7.png'], carousel: true },
              { items: ['/assets/zealix/zealix-post-01.png'] },
              { items: ['/assets/zealix/zealix-post-11.png'] },
              { items: ['/assets/zealix/zealix-post-04.png'] },
              { items: ['/assets/zealix/zealix-post-09.png'] },
              { items: ['/assets/zealix/zealix-post-12.png'] },
              { items: ['/assets/zealix/zealix-post-14.png'] },
              { items: ['/assets/zealix/zealix-post-10.png'] },
              { items: ['/assets/zealix/zealix-post-03.png'] },
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
      'BrainyBudzz es una plataforma EdTech gamificada dirigida a niños en etapa primaria. El reto fue crear una identidad que compitiera en atención contra redes sociales sin caer en el caos visual típico del segmento infantil: energética, pero con sistema.',
    role: 'Diseño del logotipo, sistema visual completo, personaje Bud y aplicaciones de identidad en mockup digital.',
    challenge:
      'Crear algo que los niños encuentren divertido y los padres perciban como confiable. Dos audiencias opuestas con criterios de decisión completamente distintos.',
    process:
      'Diseñé a Bud, una mascota modular basada en un casco de inventor infantil con visor de realidad virtual, que funciona como elemento vivo de la marca: puede expresar emociones, adaptarse a contextos y escalar a merchandise o animación. La paleta combina los primarios CMY con negro y lavanda para dar energía sin saturar.',
    result:
      'Brand book completo: construcción de logotipo, sistema de reducciones, paleta Pantone documentada, tipografía y personaje Bud. Identidad aplicada en mockup digital de la plataforma.',
    gallery: [
      '/assets/brainy/brainy-12.png',
      '/assets/brainy/brainy-01.png',
      '/assets/brainy/brainy-02.png',
      '/assets/brainy/brainy-03.png',
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
      'Beatness es un fitness studio en Puebla con múltiples disciplinas — Cycling, Box, Bootcamp y Funcional. El proyecto: producir contenido que comunicara intensidad, pertenencia y progreso de comunidad en redes.',
    role: 'Dirección de arte y producción de contenido: reels, stories, carruseles, activaciones de evento y levantamiento de contenido en la collab Beatness × Kinabela.',
    agency: 'Mensaje Clave',
    challenge:
      'Mantener coherencia de marca con material de producción variable — sin estudio controlado, con distintos equipos y contextos de rodaje.',
    process:
      'Trabajé dentro del sistema visual de Beatness: paleta oscura con acentos neón, tipografía de impacto, corte rápido. Paid media para las disciplinas del club, contenido orgánico para feed e historias, y activaciones de evento. En la collab con Kinabela Derma: reels de invitación y levantamiento en el evento.',
    result:
      'Paid media, reels, stories y carruseles orgánicos para el club. Collab Beatness × Kinabela: 2 clases de cycling llenas en el rooftop — ~40 personas.',
    gallery: [
      '/assets/beatness/beatness-01.jpg',
      '/assets/beatness/beatness-reel-04feb-web.mp4',
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
              { items: ['/assets/beatness/beatness-ev-double-ride.png'] },
            ],
          },
        ],
      },
      {
        name: 'Collab · Beatness × Kinabela',
        objective: 'Clase de cycling en el rooftop de Kinabela Derma — collab entre el fitness studio y la clínica de estética. Reel de invitación y levantamiento de contenido en el evento.',
        formats: ['Reel · Invitación'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/beatness/beatness-reel-cycling-web.mp4'] },
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
    name: 'KOP',
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/thumbnail-kop.png',
    accentColor: 'white',
    tagline: 'Donde el deporte se convierte en estilo de vida.',
    tags: ['Social media', 'Dirección de arte', 'Reels', 'Sub-marca', 'Paid Media', 'IA Generativa'],
    overview:
      'KOP es un club de pádel y tenis en San Antonio, TX. El proyecto incluyó tanto la marca principal —contenido deportivo para el club— como Kings Tavern, su restaurante interno, con una línea editorial propia dentro del mismo ecosistema.',
    role: 'Dirección de arte, producción de contenido y motion: editorial deportivo, carruseles educativos, reels, contenido diferenciado para Kings Tavern y paid media producido con imagen generativa IA y script de automatización en After Effects.',
    agency: 'NexLaunch',
    challenge:
      'Manejar dos voces dentro de una misma cuenta sin que el contenido del restaurante opacara la identidad deportiva del club, ni viceversa. Cada sub-marca tenía que sentirse cohesionada pero distinguible.',
    process:
      'Creé un sistema visual de dos velocidades: posts editoriales de alto impacto para KOP —negro, blanco y verde energético— y una línea más cálida y atmosférica para Kings Tavern que convive sin romper el feed. Las piezas de paid media combinan imagen generativa con Gemini y un script de After Effects que monta el reel completo —timeline, texto, end card— en un solo clic.',
    result:
      '30+ piezas entre editoriales, carruseles y reels para KOP, más contenido diferenciado para Kings Tavern. El reel de apertura de Sin Yolanda alcanzó 26.3K views y 212 likes en 6 semanas de forma orgánica. Reel de paid media de 22 segundos producido con flujo IA + script.',
    gallery: [
      '/assets/kop/kop-paidmedia-01.mp4',
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
        objective: 'Serie de reels para la apertura de Sin Yolanda — tres piezas distintas con dos versiones del opening principal para distribución en redes sociales. El opening principal acumuló 26.3K views y 212 likes en 6 semanas de forma orgánica.',
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
    id: 'bwl',
    name: 'BWL',
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/bwl/bwl-01.png',
    accentColor: 'white',
    tagline: 'Una marca global que habla dos idiomas sin perder su voz.',
    tags: ['Social media', 'Motion', 'Paid media', 'RedNote · 小红书', 'IA Generativa'],
    overview:
      'BWL (Best World) es una marca de wellness de origen singapurense con distribución global y múltiples líneas de producto. El trabajo abarca producción de contenido para Instagram y paid media en inglés, más adaptación de reels al chino para RedNote (小红书) — cada pieza traducida y reformateada para el contexto cultural y el algoritmo de cada plataforma.',
    role: 'Dirección de arte, edición de video y producción de contenido. Adaptación bilingüe chino-inglés para Instagram y RedNote.',
    agency: 'NexLaunch',
    challenge:
      'Adaptar el mismo contenido a dos plataformas con culturas visuales distintas: lo que funciona en Instagram no necesariamente conecta en RedNote. Cada versión tenía que sentirse nativa en su plataforma, no una simple traducción.',
    process:
      'Para cada reel: primero la versión en inglés con stock premium, motion type y ritmo occidental; luego la adaptación al chino con tipografía ajustada, copy nativo y referencias visuales que conectan con la audiencia de RedNote. Los estáticos de paid media siguen una línea limpia y premium que funciona en ambos mercados.',
    result:
      'Más de 20 piezas entre paid media estático, reels bilingües y posts editoriales. Sistema de producción que permite adaptar cada pieza a dos idiomas sin perder coherencia de marca. Campaña May 1 · Global Love Your Skin Month: 53 likes y 43 sends — ratio de envíos alto para contenido editorial.',
    gallery: [
      '/assets/bwl/bwl-mothers-day-web.mp4',
      '/assets/bwl/bwl-11.png',
      '/assets/bwl/bwl-12.png',
      '/assets/bwl/bwl-13.png',
      '/assets/bwl/bwl-14.png',
    ],
    campaigns: [
      {
        name: 'May 1 · Global Love Your Skin Month',
        objective: 'Campaña editorial para el Día Mundial del Amor por tu Piel — carrusel con fotografía de pieles diversas y copy inclusivo, adaptado en versión inglés para Instagram y chino para RedNote. 53 likes · 43 sends orgánicos.',
        formats: ['Carrusel EN · Instagram', 'Carrusel 中文 · 小红书'],
        gallery: [],
        sections: [
          {
            groups: [
              {
                items: [
                  '/assets/bwl/bwl-glysm-01.png',
                  '/assets/bwl/bwl-glysm-02.png',
                  '/assets/bwl/bwl-glysm-03.png',
                  '/assets/bwl/bwl-glysm-04.png',
                  '/assets/bwl/bwl-glysm-05.png',
                ],
                carousel: true,
              },
              {
                items: [
                  '/assets/bwl/bwl-glysm-zh-01.png',
                  '/assets/bwl/bwl-glysm-zh-02.png',
                  '/assets/bwl/bwl-glysm-zh-03.png',
                  '/assets/bwl/bwl-glysm-zh-04.png',
                  '/assets/bwl/bwl-glysm-zh-05.png',
                ],
                carousel: true,
              },
            ],
          },
        ],
      },
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
    tagline: 'Rebranding para la marca detrás de los TV lifts de Disney+, Four Seasons y Ritz-Carlton.',
    tags: ['Rebranding', 'Identidad visual', 'Logotipo animado', 'Brand guidelines', 'Motion'],
    overview:
      'Activated Decor es una empresa canadiense que diseña y fabrica sistemas motorizados de elevación y ocultamiento de televisores para arquitectura de lujo. Sus instalaciones están en Disney+, Four Seasons, Hilton, Marriott y Ritz-Carlton. El proyecto fue un rebranding completo: sistema de identidad visual, brand guidelines y logotipo animado en múltiples versiones para uso digital.',
    role: 'Rebranding completo: construcción del logotipo y sistema de marca, brand guidelines, paleta cromática, tipografía y producción de identidad en movimiento — logotipo animado en tres versiones y dos combinaciones de color.',
    challenge:
      'Su propio producto tiene como objetivo desaparecer — "Quiet. Precise. Invisible." es su posicionamiento. El reto fue construir una marca que fuera recordable y premium para el B2B, sin contradecir la filosofía de invisibilidad que venden a sus clientes de lujo.',
    process:
      'Desarrollé el monograma "ad" como base del sistema — geométrico, limpio, con personalidad. La paleta negro profundo y burdeos comunica lujo técnico sin caer en lo corporativo genérico. El manual de identidad documenta construcción del logotipo, usos correctos en distintos fondos, tipografía y variantes de aplicación. Los logos animados se produjeron en tres versiones —icono, logotipo completo, versión corta— y dos paletas de color.',
    result:
      'Sistema de identidad completo con brand guidelines, logotipo en tres versiones estáticas y animadas entregadas en GIF y MOV. El logotipo animado está en uso activo en su sitio web — una marca a la altura de los venues de lujo donde viven sus productos.',
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
    id: 'ai-creative',
    name: 'Sistema Creativo IA',
    category: 'IA GENERATIVA',
    year: '2026',
    image: '/assets/kop/kop-kt-184.png',
    accentColor: '#0D0D0D',
    tagline: 'Del prompt al entregable. Sin fricción.',
    tags: ['IA Generativa', 'Gemini', 'Script AE', 'Script PS', 'Automatización', 'Codex'],
    overview:
      'Flujo de producción creativa con inteligencia artificial aplicado a clientes reales: imagen generativa, automatización de edición y generación de componentes de diseño mediante scripts. No como experimento — como método de trabajo.',
    role: 'Dirección creativa, prompt engineering, generación de imagen con Gemini y ChatGPT, y automatización de montaje en After Effects y Photoshop con scripts escritos con Codex.',
    challenge:
      'El reto no es usar IA — es usarla de forma que el resultado no se vea genérico y siga comunicando la identidad del cliente. Integrar estas herramientas sin que el cliente note la diferencia en calidad, solo en velocidad.',
    process:
      'Tres capas: (1) Imagen generativa — prompt engineering para crear fotografía de escena sin sesión fotográfica. (2) Script AE — automatización que monta el reel completo con motion type, escalado de clips y end card en minutos; el director de arte interviene solo para seleccionar los cortes y ajustar detalles finales. (3) Script PS — Claude Code investiga la marca, genera componentes por separado con IA e itera versiones hasta producir el PSD editable final.',
    result:
      'Lo que antes tomaba horas de edición ahora toma minutos de script + revisión creativa. Un reel de 22 segundos producido por script con intervención humana solo en selección de cortes. Un flyer en 5 formatos generado desde brief hasta PSD. Posts editoriales de producto sin sesión fotográfica. Sistema documentado y replicable por cliente.',
    gallery: [],
    campaigns: [
      {
        name: 'KOP · Antes / Después',
        objective: 'Foto real del restaurante subida a Gemini. Tres iteraciones: prompt simple rechazado → constraint de marca ("don\'t change any beverage or meal, just add a soccer court") → exploración de dos conceptos con objetivo de engagement → prompt técnico final especificando ángulo top-down, pasto artificial, líneas blancas y atmósfera post-partido. Resultado: la misma comida del restaurante recompuesta sobre cancha de soccer, sin sesión fotográfica.',
        formats: ['Foto original · iPhone', 'Prompt · Gemini', 'King\'s Tavern · Post'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/kop/kop-kt-original-01.jpg', '/assets/kop/kop-kt-original-02.jpg'], carousel: true },
              { items: ['/assets/kop/kop-kt-184.png'] },
            ],
          },
        ],
      },
      {
        name: 'KOP · Imagen Generativa',
        objective: 'Posts editoriales para KOP y King\'s Tavern generados con Gemini y ChatGPT — fotografía de escena, composiciones de marca y flats de producto sin sesión fotográfica.',
        formats: ['Post · Instagram', 'Carrusel · Instagram', 'Gemini · ChatGPT'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/kop/kop-post-140.png'] },
              { items: ['/assets/kop/kop-post-142.png'] },
              { items: ['/assets/kop/kop-post-170.png'] },
              { items: ['/assets/kop/kop-post-172.png'] },
              { items: ['/assets/kop/kop-c143-1.png', '/assets/kop/kop-c143-2.png', '/assets/kop/kop-c143-3.png', '/assets/kop/kop-c143-4.png'], carousel: true },
              { items: ['/assets/kop/kop-c171-1.png', '/assets/kop/kop-c171-2.png', '/assets/kop/kop-c171-3.png', '/assets/kop/kop-c171-4.png', '/assets/kop/kop-c171-5.png'], carousel: true },
            ],
          },
        ],
      },
      {
        name: 'KOP · Script AE + Paid Media',
        objective: 'Brief + carpeta de recursos → Claude Code leyó el brand file, generó el script AE (307 líneas) y el componente Remotion en paralelo. Refinamiento por prompts: timing ajustado de 0.83s a 2s por deporte ("haz que dure más para apreciarlos"), verificación de 8 clips con momento exacto de cada corte. Resultado: reel de 22s listo para renderizar en AE en un solo clic.',
        formats: ['Reel 22s · Paid Media', 'Script AE · Claude Code', 'Remotion · Preview', '1080×1920 · 30fps'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/kop/kop-paidmedia-01.mp4'] },
              { items: ['/assets/kop/kop-post-206-web.mp4'] },
            ],
          },
        ],
      },
      {
        name: 'KOP · Script PS + World Cup 2026',
        objective: 'Claude investigó la marca en web + carpeta de lineamientos antes de diseñar. Primera versión rechazada por estética ("KOP no suele tener una estética tan marcada") → pivote al look real del feed. Dos versiones de exploración con vibe World Cup 2026. Criterio clave de dirección: "usa stock en vez de fondos IA para que se vea menos IA". Jerarquía del flyer consultada como director de arte (5 niveles para tamaño carta). Versión aprobada adaptada a 5 formatos con script de Photoshop.',
        formats: ['01 · Componentes IA', '02 · Ensamblado', '03 · Exploración · No aprobadas', '04 · Final · 5 formatos', 'Script PS · Claude Code'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/kop/kop-ai-component-headline.png', '/assets/kop/kop-ai-component-family.png', '/assets/kop/kop-ai-component-badge.png', '/assets/kop/kop-ai-component-strip.png'], carousel: true, contain: true },
              { items: ['/assets/kop/kop-ai-assembled.png'], contain: true },
              { items: ['/assets/kop/kop-ai-iter-v2.png', '/assets/kop/kop-ai-iter-v3.png'], carousel: true, contain: true },
              { items: ['/assets/kop/kop-wc-post.png', '/assets/kop/kop-wc-story.png', '/assets/kop/kop-wc-flyer.png', '/assets/kop/kop-wc-tv.png', '/assets/kop/kop-wc-banner.png'], carousel: true },
            ],
          },
        ],
      },
      {
        name: 'BWL · Paid Media IA',
        objective: 'Reel de paid media y estático de producto generados con IA para BWL — imagen de lifestyle sin producción fotográfica, video de producto sin locación ni modelos.',
        formats: ['Paid Media · Video', 'Paid Media · Estático', 'Gemini · Runway'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/bwl/bwl-pm-11-web.mp4', '/assets/bwl/bwl-pm-12.png'] },
            ],
          },
        ],
      },
      {
        name: 'BWL · Post 71 · Proceso',
        objective: 'Dirección de arte en Gemini Flow: prompt inicial con constraint de marca ("no modifiques ningún elemento, solo adapta al video"), seguido de correcciones de naturalidad ("arregla las manos, no es una pose natural para abrir el jugo") y dirección de actuación ("persona joven rejuvenecida, natural y fresh, que tome el vaso y sonría"). Los clips generados se montaron luego en After Effects.',
        formats: ['Prompt · Gemini Flow', 'Clips IA · Fuente', 'Reel Final EN · AE', 'Reel Final 中文 · AE'],
        gallery: [],
        sections: [
          {
            groups: [
              {
                items: [
                  '/assets/bwl/bwl-71-ai-sobre-web.mp4',
                  '/assets/bwl/bwl-71-ai-juice-web.mp4',
                  '/assets/bwl/bwl-71-ai-mod-web.mp4',
                  '/assets/bwl/bwl-71-ai-gen-web.mp4',
                ],
                carousel: true,
              },
              { items: ['/assets/bwl/bwl-post-71-en-web.mp4', '/assets/bwl/bwl-post-71-zh-web.mp4'] },
            ],
          },
        ],
      },
      {
        name: 'BWL · Post 77 · Proceso',
        objective: 'Imagen generada con Gemini y cinco clips de video de producto generados con IA — usados como material base para el reel final montado en After Effects.',
        formats: ['Imagen · Gemini', 'Clips IA · Fuente', 'Reel Final · AE', 'Runway · Gemini'],
        gallery: [],
        sections: [
          {
            groups: [
              {
                items: [
                  '/assets/bwl/bwl-77-ai-product-reel-web.mp4',
                  '/assets/bwl/bwl-77-ai-cup-web.mp4',
                  '/assets/bwl/bwl-77-ai-reel-de-web.mp4',
                  '/assets/bwl/bwl-77-ai-reel-para-web.mp4',
                  '/assets/bwl/bwl-77-ai-collagen-web.mp4',
                ],
                carousel: true,
              },
              { items: ['/assets/bwl/bwl-post-77-web.mp4'] },
            ],
          },
        ],
      },
      {
        name: 'BWL · Post 79 · Proceso',
        objective: 'Los clips generados con IA que se usaron como material base del reel — sunbeam, cinemagraph y animaciones de producto — montados luego en After Effects para el entregable final.',
        formats: ['Clips IA · Fuente', 'Reel Final · AE', 'Gemini · Runway'],
        gallery: [],
        sections: [
          {
            groups: [
              {
                items: [
                  '/assets/bwl/bwl-79-ai-sunbeam-web.mp4',
                  '/assets/bwl/bwl-79-ai-cinemagraph-web.mp4',
                  '/assets/bwl/bwl-79-ai-reel-web.mp4',
                  '/assets/bwl/bwl-79-ai-video-web.mp4',
                ],
                carousel: true,
              },
              { items: ['/assets/bwl/bwl-post-79-web.mp4'] },
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
    tags: ['Social media', 'Dirección de arte', 'Fotografía editorial', 'Carruseles', 'Print', 'IA Generativa'],
    overview:
      'Corazón Mixteco es una marca de quesos artesanales mexicanos — quesillo, panela, manchego y más. El trabajo abarca la dirección de arte y producción de contenido mensual para redes sociales: parrillas editoriales de producto, carruseles educativos, reels y materiales de punto de venta.',
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
    tags: ['Social media', 'Dirección de arte', 'Campañas', 'Print', 'Punto de venta', 'IA Generativa'],
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
