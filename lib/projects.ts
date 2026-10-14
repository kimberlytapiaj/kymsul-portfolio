export type SectionGroup = {
  items: string[]
  carousel?: boolean
  contain?: boolean
  wide?: boolean
  span?: number   // column span in a 3-col grid (1 | 2 | 3)
  label?: string  // badge shown above the media cell (e.g. "ANTES", "DESPUÉS")
  /** Same piece in other languages: a small "EN / 中文" switch swaps them. The first is the default. */
  versions?: { label: string; items: string[] }[]
}

export type Section = {
  items?: string[]
  type?: 'carousel'
  groups?: SectionGroup[]
  label?: string  // header shown above this section's grid row
  split?: boolean // renders group[0] vs group[1] as a full-width before/after comparison
}

export type SubProject = {
  name: string
  objective: string
  formats: string[]
  gallery: string[]
  type?: 'carousel'
  sections?: Section[]
  subCampaigns?: SubProject[]
  collapsible?: boolean
  /** Show this sub-campaign's whole work as a pile card that opens the viewer. */
  pile?: boolean
  /** Mixed proportions (photos): justified rows, every piece whole, no gaps. */
  puzzle?: boolean
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
  /** Case opening: key pieces fanned over a plate in the brand's colour. */
  brand?: {
    plate?: string // CSS background for the plate behind the key pieces
    palette?: string[] // brand colours shown as small swatches
    pieces?: string[] // three key pieces: left, centre, right
  }
}

export const projects: Project[] = [
  {
    id: 'zealix',
    name: 'Zealix',
    brand: {
      plate: 'linear-gradient(157deg, #c9b6ff 0%, #6d35e8 46%, #1a1030 100%)',
      palette: ['#111111', '#6d35e8', '#d43fd0'],
      pieces: ['/assets/zealix/zealix-manual-mockup.jpg', '/assets/zealix/zealix-pos-system-03.jpg', '/assets/zealix/zealix-post-01.png'],
    },
    category: 'BRANDING · SOCIAL MEDIA',
    year: '2024 — 2026',
    image: '/assets/thumbnail-zealix.jpg',
    accentColor: 'white',
    tagline: 'Naming, identidad visual y sistema de marca para SaaS restaurantero.',
    tags: ['Naming', 'Identidad visual', 'Brand guidelines', 'Manual de marca', 'Papelería', 'Social media'],
    overview:
      'Zealix es una plataforma mexicana con IA como motor central, diseñada para automatizar la gestión de restaurantes, cafeterías y negocios de comida: desde el inventario y las órdenes hasta el análisis de rentabilidad con el asistente Zea AI. El proyecto fue end-to-end: naming de Zealix y Zea, identidad visual completa desde boceto, aplicación de identidad en el producto digital y papelería corporativa. Dirección creativa de la producción visual para redes sociales.',
    role: 'Naming, identidad visual, manual de marca y papelería. Producción visual para IG, FB y LinkedIn.',
    challenge:
      'Una marca tecnológica mexicana que se sintiera cercana para dueños de restaurante sin experiencia en software. La identidad tenía que anclar lo mexicano sin caer en lo folclórico. El sistema tenía que funcionar en modo claro y oscuro, en pantalla y en impresión, con un sistema visual tan claro que cualquier operador de negocio lo entendiera sin tecnicismos.',
    process:
      'El proyecto arranca en naming: Zealix viene de "la raíz del maíz", un nombre que ancla la identidad en lo mexicano y comunica la idea de ser la base desde la que crecen los negocios. Zea, el asistente IA, se desprende del mismo origen. El logo traduce ese concepto: bocetos a mano explorando crecimiento y conexión, construcción sobre retícula y sistema documentado en tres versiones. De ahí, la identidad se extiende al movimiento con el logo animado y a las redes sociales con dirección creativa de la producción visual.',
    result:
      'Sistema de identidad en uso activo con restaurantes reales operando bajo la marca. Entregables: logotipo en múltiples versiones, manual de marca, tarjetas personalizadas para 6 integrantes, folleto corporativo y documentos legales con identidad aplicada. La marca vive hoy en IG · FB · LinkedIn: 27 piezas publicadas en los primeros 2 meses.',
    campaignsLabel: 'TRABAJO',
    gallery: [],
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
    id: 'bardana',
    name: 'Bardana',
    brand: {
      plate: 'linear-gradient(157deg, #e5d5bc 0%, #9c522f 48%, #262626 100%)',
      palette: ['#262626', '#9c522f', '#3d5878', '#e5d5bc'],
      pieces: ['/assets/bardana/bardana-manual-09.jpg', '/assets/bardana/bardana-logo-principal-negativo.jpg', '/assets/bardana/bardana-manual-14.jpg'],
    },
    category: 'BRANDING',
    year: '2026',
    image: '/assets/bardana/bardana-logo-principal-negativo.jpg',
    accentColor: 'white',
    tagline: 'Identidad para una cocina México‑Asia, del brief al manual.',
    tags: ['Identidad visual', 'Personaje', 'Lettering', 'Manual de marca'],
    // Freelance case told as process (Kimberly, 11 oct 2026): brief, routes,
    // character, lettering, identity and manual. Narrative text pending.
    overview: 'Bardana es un restaurante de cocina México‑Asia en Metepec, para gente de 20 a 40 años: informal, artístico y que funcione de día y de noche.',
    role: 'Identidad de marca completa: investigación, rutas visuales, personaje, lettering, paleta, logotipos y manual de identidad.',
    challenge: 'Texto en preparación.',
    process: 'Texto en preparación.',
    result: 'Texto en preparación.',
    gallery: [],
    campaignsLabel: 'PROCESO',
    campaigns: [
      {
        name: 'El brief',
        objective: 'Una cocina México‑Asia con carácter propio: joven, sencilla, imperfecta a propósito. Sin geishas, sin kanji, sin talavera.',
        formats: ['Brief', 'Personalidad'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/bardana/bardana-manual-02.jpg'] },
              { items: ['/assets/bardana/bardana-manual-03.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'Tres rutas',
        objective: 'Tres caminos para la misma idea: entre dos mundos, todo adquiere otra forma.',
        formats: [],
        gallery: [],
        subCampaigns: [
          {
            name: 'Materia',
            pile: true,
            objective: 'Barro, madera y cerámica: la cocina como materia que se transforma.',
            formats: ['Moodboard de logo', 'Escena'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/bardana/bardana-ruta-materia-logo.png'] }, { items: ['/assets/bardana/bardana-ruta-materia-escena.png'] }] }],
          },
          {
            name: 'Sello',
            pile: true,
            objective: 'Formas planas y color de mercado: una marca que se estampa.',
            formats: ['Moodboard de logo', 'Escena'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/bardana/bardana-ruta-sello-logo.png'] }, { items: ['/assets/bardana/bardana-ruta-sello-escena.png'] }] }],
          },
          {
            name: 'Trazo',
            pile: true,
            objective: 'El gesto de la mano: lettering de pincel y dibujo vivo.',
            formats: ['Moodboard de logo', 'Escena'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/bardana/bardana-ruta-trazo-logo.png'] }, { items: ['/assets/bardana/bardana-ruta-trazo-escena.png'] }] }],
          },
        ],
      },
      {
        name: 'El personaje',
        objective: 'Una bardana que se asoma del bowl, probada en cuatro estilos de dibujo.',
        formats: ['Tinta', 'Grabado', 'Fanzine', 'Pincel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/bardana/bardana-personaje-01.png'] },
              { items: ['/assets/bardana/bardana-personaje-02.png'] },
              { items: ['/assets/bardana/bardana-personaje-03.png'] },
              { items: ['/assets/bardana/bardana-personaje-04.png'] },
              { items: ['/assets/bardana/bardana-personaje-05.png'] },
              { items: ['/assets/bardana/bardana-personaje-06.png'] },
            ],
          },
        ],
      },
      {
        name: 'El lettering',
        objective: 'De la tipografía al trazo de pincel: decenas de pruebas hasta la firma final.',
        formats: ['Exploración tipográfica', 'Letra manual', 'Pincel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/bardana/bardana-lettering-01.png'] },
              { items: ['/assets/bardana/bardana-lettering-02.png'] },
              { items: ['/assets/bardana/bardana-lettering-03.png'] },
              { items: ['/assets/bardana/bardana-lettering-04.png'] },
              { items: ['/assets/bardana/bardana-lettering-05.png'] },
              { items: ['/assets/bardana/bardana-lettering-06.png'] },
              { items: ['/assets/bardana/bardana-lettering-07.png'] },
              { items: ['/assets/bardana/bardana-lettering-08.png'] },
              { items: ['/assets/bardana/bardana-lettering-09.png'] },
            ],
          },
        ],
      },
      {
        name: 'La identidad',
        objective: 'Logotipo principal, horizontal y lettering, en positivo y negativo.',
        formats: ['Principal', 'Horizontal', 'Lettering'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/bardana/bardana-logo-principal.jpg'] },
              { items: ['/assets/bardana/bardana-logo-horizontal.jpg'] },
              { items: ['/assets/bardana/bardana-logo-lettering.jpg'] },
              { items: ['/assets/bardana/bardana-logo-principal-negativo.jpg'] },
              { items: ['/assets/bardana/bardana-logo-horizontal-negativo.jpg'] },
              { items: ['/assets/bardana/bardana-logo-lettering-negativo.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'Manual de marca',
        objective: 'Veintidós páginas: trazo, negativo, paleta, tipografía, fotografía y aplicaciones.',
        formats: ['Manual de identidad · 22 páginas'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/bardana/bardana-manual-01.jpg', '/assets/bardana/bardana-manual-02.jpg', '/assets/bardana/bardana-manual-03.jpg', '/assets/bardana/bardana-manual-04.jpg', '/assets/bardana/bardana-manual-05.jpg', '/assets/bardana/bardana-manual-06.jpg', '/assets/bardana/bardana-manual-07.jpg', '/assets/bardana/bardana-manual-08.jpg', '/assets/bardana/bardana-manual-09.jpg', '/assets/bardana/bardana-manual-10.jpg', '/assets/bardana/bardana-manual-11.jpg', '/assets/bardana/bardana-manual-12.jpg', '/assets/bardana/bardana-manual-13.jpg', '/assets/bardana/bardana-manual-14.jpg', '/assets/bardana/bardana-manual-15.jpg', '/assets/bardana/bardana-manual-16.jpg', '/assets/bardana/bardana-manual-17.jpg', '/assets/bardana/bardana-manual-18.jpg', '/assets/bardana/bardana-manual-19.jpg', '/assets/bardana/bardana-manual-20.jpg', '/assets/bardana/bardana-manual-21.jpg', '/assets/bardana/bardana-manual-22.jpg'], carousel: true },
              { items: ['/assets/bardana/bardana-manual-04.jpg'] },
              { items: ['/assets/bardana/bardana-manual-08.jpg'] },
              { items: ['/assets/bardana/bardana-manual-10.jpg'] },
              { items: ['/assets/bardana/bardana-manual-12.jpg'] },
              { items: ['/assets/bardana/bardana-manual-14.jpg'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'motion-centre',
    name: 'Motion Centre',
    brand: {
      plate: 'linear-gradient(157deg, #e6eefc 0%, #2e5bd8 50%, #14286b 100%)',
      palette: ['#2e5bd8', '#14286b', '#f4efe6', '#e6eefc'],
      pieces: ['/assets/motion-centre/mc-tarjeta-digital.png', '/assets/motion-centre/mc-isologo.png', '/assets/motion-centre/mc-manual-17.jpg'],
    },
    category: 'BRANDING',
    year: '2026',
    image: '/assets/motion-centre/mc-isologo.png',
    accentColor: 'white',
    tagline: 'Identidad para un centro de fisioterapia: el cuerpo en movimiento.',
    tags: ['Identidad visual', 'Iconografía', 'Patrones', 'Papelería', 'Manual de marca'],
    // Freelance case told as process (Kimberly, 11 oct 2026). Whole identity
    // confirmed as hers; narrative text pending.
    overview: 'Motion Centre es un espacio de fisioterapia y salud que acompaña a las personas a comprender, cuidar y desarrollar su cuerpo.',
    role: 'Identidad de marca completa: concepto visual, iconografía de cuatro figuras, logotipo, paleta, papelería clínica y manual de identidad.',
    challenge: 'Texto en preparación.',
    process: 'Texto en preparación.',
    result: 'Texto en preparación.',
    gallery: [],
    campaignsLabel: 'PROCESO',
    campaigns: [
      {
        name: 'La marca',
        objective: 'Saber moverte: una marca clara, cercana y experta, que explica el cuerpo sin tecnicismos.',
        formats: ['Misión', 'Personalidad', 'Tono'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/motion-centre/mc-manual-06.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-07.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'Concepto visual',
        objective: 'El movimiento como forma: figuras orgánicas, color plano y acompañamiento.',
        formats: ['Moodboard', 'Concepto'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/motion-centre/mc-concepto-board.png'] },
              { items: ['/assets/motion-centre/mc-concepto-acompanamiento.png'] },
            ],
          },
        ],
      },
      {
        name: 'Iconografía',
        objective: 'Cuatro figuras para cuatro etapas: conocer, preparar, recuperar y avanzar.',
        formats: ['Conocer', 'Preparar', 'Recuperar', 'Avanzar'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/motion-centre/mc-figura-01.jpg'] },
              { items: ['/assets/motion-centre/mc-figura-02.jpg'] },
              { items: ['/assets/motion-centre/mc-figura-03.jpg'] },
              { items: ['/assets/motion-centre/mc-figura-04.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-16.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-17.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'La identidad',
        objective: 'Las figuras se vuelven isologo y patrón; azul, marino y hueso; Campton y Rubik.',
        formats: ['Isologo', 'Logotipo', 'Paleta', 'Tipografía'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/motion-centre/mc-isologo.png'] },
              { items: ['/assets/motion-centre/mc-manual-14.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-15.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-11.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-09.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-20.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'Aplicaciones',
        objective: 'Tarjeta digital, papelería clínica y tres propuestas para los documentos de pacientes.',
        formats: ['Tarjeta digital', 'Papelería', 'Propuestas'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/motion-centre/mc-tarjeta-digital.png'] },
              { items: ['/assets/motion-centre/mc-manual-22.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-24.jpg'] },
              { items: ['/assets/motion-centre/mc-papeleria-propuesta-01.png'] },
              { items: ['/assets/motion-centre/mc-papeleria-propuesta-02.png'] },
              { items: ['/assets/motion-centre/mc-papeleria-propuesta-03.png'] },
            ],
          },
        ],
      },
      {
        name: 'Manual de marca',
        objective: 'Veinticuatro páginas: esencia, construcción del logotipo e iconos, y aplicaciones.',
        formats: ['Manual de identidad · 24 páginas'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/motion-centre/mc-manual-01.jpg', '/assets/motion-centre/mc-manual-02.jpg', '/assets/motion-centre/mc-manual-03.jpg', '/assets/motion-centre/mc-manual-04.jpg', '/assets/motion-centre/mc-manual-05.jpg', '/assets/motion-centre/mc-manual-06.jpg', '/assets/motion-centre/mc-manual-07.jpg', '/assets/motion-centre/mc-manual-08.jpg', '/assets/motion-centre/mc-manual-09.jpg', '/assets/motion-centre/mc-manual-10.jpg', '/assets/motion-centre/mc-manual-11.jpg', '/assets/motion-centre/mc-manual-12.jpg', '/assets/motion-centre/mc-manual-13.jpg', '/assets/motion-centre/mc-manual-14.jpg', '/assets/motion-centre/mc-manual-15.jpg', '/assets/motion-centre/mc-manual-16.jpg', '/assets/motion-centre/mc-manual-17.jpg', '/assets/motion-centre/mc-manual-18.jpg', '/assets/motion-centre/mc-manual-19.jpg', '/assets/motion-centre/mc-manual-20.jpg', '/assets/motion-centre/mc-manual-21.jpg', '/assets/motion-centre/mc-manual-22.jpg', '/assets/motion-centre/mc-manual-23.jpg', '/assets/motion-centre/mc-manual-24.jpg'], carousel: true },
              { items: ['/assets/motion-centre/mc-manual-04.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-12.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-18.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-19.jpg'] },
              { items: ['/assets/motion-centre/mc-manual-23.jpg'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'brainy',
    name: 'BrainyBudzz',
    brand: {
      plate: 'linear-gradient(157deg, #ffe14a 0%, #e94fa8 50%, #38b6e0 100%)',
      palette: ['#1d1d1b', '#e94fa8', '#38b6e0', '#ffd400'],
      pieces: ['/assets/brainy/brainy-09.png', '/assets/brainy/brainy-12.png', '/assets/brainy/brainy-10.png'],
    },
    category: 'BRANDING',
    year: '2023',
    image: '/assets/brainy/brainy-09.png',
    accentColor: 'white',
    tagline: 'Identidad que los niños quieren y los padres aprueban.',
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
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'La marca',
        objective: 'Una plataforma de videojuegos educativos: misión, valores y un tono amigable, divertido y confiable.',
        formats: ['Misión', 'Valores', 'Tono'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/brainy/brainy-02.png'] },
              { items: ['/assets/brainy/brainy-03.png'] },
              { items: ['/assets/brainy/brainy-04.png'] },
            ],
          },
        ],
      },
      {
        name: 'Construcción',
        objective: 'Bud, el personaje: casco, visor y sonrisa; el logotipo y sus reducciones.',
        formats: ['Isotipo', 'Logotipo', 'Reducciones'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/brainy/brainy-07.png'] },
              { items: ['/assets/brainy/brainy-08.png'] },
            ],
          },
        ],
      },
      {
        name: 'Sistema visual',
        objective: 'Colores primarios con cyan, amarillo y magenta, y una tipografía redondeada.',
        formats: ['Paleta', 'Tipografía', 'Versiones'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/brainy/brainy-09.png'] },
              { items: ['/assets/brainy/brainy-10.png'] },
              { items: ['/assets/brainy/brainy-06.png'] },
              { items: ['/assets/brainy/brainy-05.png'] },
            ],
          },
        ],
      },
      {
        name: 'Aplicaciones',
        objective: 'La identidad en la plataforma: escritorio, móvil y patrón de marca.',
        formats: ['Digital', 'Patrón'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/brainy/brainy-11.png'] },
              { items: ['/assets/brainy/brainy-12.png'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'beatness',
    name: 'Beatness',
    brand: {
      plate: 'linear-gradient(157deg, #4ff0e6 0%, #8a7cf6 50%, #1b1236 100%)',
      palette: ['#0b0b0f', '#2fe3dc', '#8b7cf6'],
      pieces: ['/assets/beatness/beatness-01.jpg', '/assets/beatness/beatness-03.jpg', '/assets/beatness/beatness-beat-box.jpg'],
    },
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/beatness/beatness-01.jpg',
    accentColor: 'white',
    tagline: 'Contenido que se mueve tan fuerte como el entreno.',
    tags: ['Motion', 'Social media', 'Dirección de arte'],
    overview:
      'Beatness es un fitness studio en Puebla con cuatro disciplinas: Cycling, Box, Bootcamp y Funcional. Durante dos meses fui la responsable de ejecutar todo el contenido para redes: diseño, levantamiento y producción bajo la revisión de una project manager.',
    role: 'Producción y diseño de contenido: reels, stories, carruseles, paid media y activaciones de evento. Coordinación con videógrafa externa en el 10K Beatdown y con operador de dron en la collab Beatness × Kinabela.',
    agency: 'Mensaje Clave',
    challenge:
      'Producir contenido coherente con el sistema visual del club (paleta oscura, acentos neón, tipografía de impacto) con material de producción variable: levantamiento propio con celular, distintos contextos de rodaje y coordinación de talento externo en dos eventos.',
    process:
      'Ejecuté la parrilla dentro del sistema visual de Beatness: paid media por disciplina, contenido orgánico para feed e historias, y activaciones para eventos especiales. En el 10K Beatdown (evento tipo Hyrox del club), coordiné a la videógrafa contratada. En la collab con Kinabela Derma trabajé junto a un operador de dron para el levantamiento en el rooftop.',
    result:
      'Dos meses de sistema de contenido activo: paid media, parrilla orgánica y activaciones de evento. Collab Beatness × Kinabela: dos clases de cycling con cupo lleno en el rooftop, ~40 personas por sesión.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Contenido',
        objective: 'Fotografía real en el gym, acentos neón y tipografía de impacto: el feed del club.',
        formats: ['Post', 'Reel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/beatness/beatness-01.jpg'] },
              { items: ['/assets/beatness/beatness-reel-04feb-web.mp4'] },
              { items: ['/assets/beatness/beatness-03.jpg'] },
              { items: ['/assets/beatness/beatness-02.jpg'] },
              { items: ['/assets/beatness/beatness-09.png'] },
              { items: ['/assets/beatness/beatness-05.jpg'] },
              { items: ['/assets/beatness/beatness-feb-1.png'] },
              { items: ['/assets/beatness/beatness-10.jpg'] },
              { items: ['/assets/beatness/beatness-feb-3.png'] },
            ],
          },
        ],
      },
      {
        name: 'Paid media',
        objective: 'Pauta «Different disciplines»: cuatro variaciones fotográficas, también en banner HD.',
        formats: ['Post · 4 variaciones', 'Banner HD'],
        gallery: [],
        sections: [{ groups: [{ items: ['/assets/beatness/beatness-pauta-post-1.png'] }, { items: ['/assets/beatness/beatness-pauta-post-2.png'] }, { items: ['/assets/beatness/beatness-pauta-post-3.png'] }, { items: ['/assets/beatness/beatness-pauta-post-4.png'] }] }],
      },
      {
        name: 'Creative requests',
        objective: 'Series, eventos y colaboraciones del club.',
        formats: [],
        gallery: [],
        subCampaigns: [
          {
            name: 'The ___ Beat',
            objective: 'Una serie por disciplina, cada una con su propio acento de color.',
            formats: ['Box', 'Funcional', 'Bootcamp', 'Cycling'],
            gallery: ['/assets/beatness/beatness-beat-box.jpg', '/assets/beatness/beatness-beat-funcional.jpg', '/assets/beatness/beatness-beat-bootcamp.jpg', '/assets/beatness/beatness-beat-cycling.jpg'],
          },
          {
            name: 'Eventos',
            pile: true,
            objective: 'Inauguraciones, clases temáticas, pláticas y programas del club.',
            formats: ['Story', 'Post'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/beatness/beatness-ev-inaug.png'] }, { items: ['/assets/beatness/beatness-ev-switch.png'] }, { items: ['/assets/beatness/beatness-ev-double-ride.png'] }, { items: ['/assets/beatness/beatness-ev-anika.png'] }, { items: ['/assets/beatness/beatness-ev-box-kids.png'] }, { items: ['/assets/beatness/beatness-ev-tec.png'] }] }],
          },
          {
            name: '10K Beatdown',
            pile: true,
            objective: 'Evento tipo Hyrox del club: reel con videógrafa externa y stories de promoción.',
            formats: ['Reel', 'Story'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/beatness/beatness-reel-beatdown-web.mp4'] }, { items: ['/assets/beatness/beatness-10k-1.png'] }, { items: ['/assets/beatness/beatness-10k-2.png'] }, { items: ['/assets/beatness/beatness-10k-3.png'] }] }],
          },
          {
            name: 'Beatness × Kinabela',
            pile: true,
            objective: 'Clase de cycling en el rooftop de Kinabela Derma: reel de invitación y del evento.',
            formats: ['Reel · Invitación', 'Reel · Evento'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/beatness/beatness-reel-cycling-web.mp4'] }, { items: ['/assets/beatness/beatness-reel-kinabela-roof-web.mp4'] }] }],
          },
        ],
      },
    ],

  },
  {
    id: 'kop',
    name: 'KOP',
    brand: {
      plate: 'linear-gradient(157deg, #eef9b8 0%, #d7f25c 45%, #a9cf2e 100%)',
      palette: ['#0b0b0b', '#d7f25c', '#f4f4f0'],
      pieces: ['/assets/kop/kop-c168-1.png', '/assets/kop/kop-01.png', '/assets/kop/kop-post-265-1.png'],
    },
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/thumbnail-kop.png',
    accentColor: 'white',
    tagline: 'Contenido social, motion y anuncios para un club deportivo.',
    tags: ['Social media', 'Dirección de arte', 'Reels', 'Sub-marca', 'Paid Media', 'IA Generativa'],
    overview:
      'KOP es un club de pádel y tenis en San Antonio, TX. Kings Tavern, su restaurante interno, tiene su propio caso.',
    role: 'Dirección de arte, producción visual y motion dentro de un flujo multimarca: editorial deportivo, carruseles educativos, reels y paid media con apoyo de imagen generativa y automatización en After Effects.',
    agency: 'NexLaunch',
    challenge:
      'Manejar dos voces dentro de una misma cuenta sin que el contenido del restaurante opacara la identidad deportiva del club, ni viceversa. Cada sub-marca tenía que sentirse cohesionada pero distinguible.',
    process:
      'Creé un sistema visual de dos velocidades: posts editoriales de alto impacto para KOP (negro, blanco y verde energético) y una línea más cálida y atmosférica para Kings Tavern que convive sin romper el feed. Las piezas de paid media combinan imagen generativa con Gemini y automatización en After Effects para acelerar el montaje base antes de la revisión final.',
    result:
      'Posts, carruseles, reels y anuncios para el club.',
    gallery: [],
    // Selection 10 oct 2026. Kings Tavern, same client, has its own case.
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Contenido',
        objective: 'El club deportivo: pádel, soccer y voley en un mismo lugar. Negro, blanco y verde energético.',
        formats: ['Post', 'Carrusel', 'Reel', 'Ad'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/kop/kop-01.png'] },
              { items: ['/assets/kop/kop-c168-1.png', '/assets/kop/kop-c168-2.png', '/assets/kop/kop-c168-3.png'], carousel: true },
              { items: ['/assets/kop/kop-c171-1.png', '/assets/kop/kop-c171-2.png', '/assets/kop/kop-c171-3.png', '/assets/kop/kop-c171-4.png', '/assets/kop/kop-c171-5.png'], carousel: true },
              { items: ['/assets/kop/kop-post-265-1.png', '/assets/kop/kop-post-265-2.png', '/assets/kop/kop-post-265-3.png', '/assets/kop/kop-post-265-4.png', '/assets/kop/kop-post-265-5.png', '/assets/kop/kop-post-265-6.png'], carousel: true },
              { items: ['/assets/kop/kop-post-296-1.png', '/assets/kop/kop-post-296-2.png', '/assets/kop/kop-post-296-3.png', '/assets/kop/kop-post-296-4.png'], carousel: true },
              { items: ['/assets/kop/kop-post-268.mp4'] },
              { items: ['/assets/kop/kop-post-289-1.png', '/assets/kop/kop-post-289-2.png', '/assets/kop/kop-post-289-3.png'], carousel: true },
              { items: ['/assets/kop/kop-post-258.mp4'] },
              { items: ['/assets/kop/kop-post-323-1.png', '/assets/kop/kop-post-323-2.png', '/assets/kop/kop-post-323-3.png', '/assets/kop/kop-post-323-4.png', '/assets/kop/kop-post-323-5.png'], carousel: true },
            ],
          },
        ],
      },
      {
        name: 'Paid media',
        objective: 'Campaña de anuncios de septiembre 2026: dos ángulos para que renten el lugar completo.',
        formats: ['Ad · Reel 9:16'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/kop/kop-ad-05.mp4'] },
              { items: ['/assets/kop/kop-ad-02.mp4'] },
            ],
          },
        ],
      },
      {
        name: 'Creative requests',
        objective: 'Encargos para eventos y operación del club: un mismo diseño adaptado a cada formato y pantalla.',
        formats: [],
        gallery: [],
        subCampaigns: [
          {
            name: 'World Cup 2026 · Sticker Swap Day',
            objective: 'Activación por el Mundial: flyer, post, story, pantalla del club y banner de la app.',
            formats: ['Flyer', 'Post', 'Story', 'TV', 'Banner app'],
            gallery: [
              '/assets/kop/kop-wc-flyer.png',
              '/assets/kop/kop-wc-post.png',
              '/assets/kop/kop-wc-story.png',
              '/assets/kop/kop-wc-tv.png',
              '/assets/kop/kop-wc-banner.png',
            ],
          },
          {
            name: 'Padel every night',
            objective: 'Plantilla semanal de eventos de pádel, adaptable a cada día.',
            formats: ['Flyer', 'Flyer por día', 'Post', 'Story', 'TV'],
            gallery: [
              '/assets/kop/kop-pwo-flyer.png',
              '/assets/kop/kop-pwo-flyer-day.png',
              '/assets/kop/kop-pwo-post.png',
              '/assets/kop/kop-pwo-story.png',
              '/assets/kop/kop-pwo-tv.png',
            ],
          },
          {
            name: 'Sponsors TV',
            objective: 'Video para las pantallas del club que invita a marcas a patrocinar: pádel, voley y «One place. All in.».',
            formats: ['TV 16:9 · 10 s'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/kop/kop-sponsors-tv.mp4'], wide: true }] }],
          },
        ],
      },
    ],
  },
  {
    id: 'kings-tavern',
    name: 'Kings Tavern',
    brand: {
      plate: 'linear-gradient(157deg, #8b5cc4 0%, #4e2585 50%, #2a1247 100%)',
      palette: ['#2a1247', '#6b3aa0', '#f8c22c'],
      pieces: ['/assets/kop/kop-kt-157-1.png', '/assets/kop/kop-kt-sports-spurs.png', '/assets/kop/kop-kt-184.png'],
    },
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/kop/kop-kt-sports-spurs.png',
    accentColor: 'white',
    agency: 'NexLaunch',
    tagline: 'Comida, bebidas y noches de partido dentro de KOP.',
    tags: ['Social media', 'Dirección de arte', 'Reels', 'Paid Media', 'Serie game day'],
    // Split from KOP on 10 oct 2026 (same client). Narrative pending Kimberly's text.
    overview: 'Kings Tavern es el restaurante y bar dentro de KOP, el club deportivo de San Antonio, TX.',
    role: 'Dirección de arte, producción visual y motion: posts, carruseles, reels, anuncios y la serie de días de partido.',
    challenge: 'Texto en preparación.',
    process: 'Texto en preparación.',
    result: 'Texto en preparación.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Contenido',
        objective: 'Comida, bebidas y noches de partido. Morado, dorado y una línea más cálida que la del club.',
        formats: ['Post', 'Carrusel', 'Reel', 'Ad'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/kop/kop-kt-157-1.png', '/assets/kop/kop-kt-157-2.png', '/assets/kop/kop-kt-157-3.png', '/assets/kop/kop-kt-157-4.png', '/assets/kop/kop-kt-157-5.png', '/assets/kop/kop-kt-157-6.png', '/assets/kop/kop-kt-157-7.png'], carousel: true },
              { items: ['/assets/kop/kop-kt-330.mp4'] },
              { items: ['/assets/kop/kop-kt-303-1.png', '/assets/kop/kop-kt-303-2.png', '/assets/kop/kop-kt-303-3.png', '/assets/kop/kop-kt-303-4.png'], carousel: true },
              { items: ['/assets/kop/kop-kt-184.png'] },
              { items: ['/assets/kop/kop-kt-328.mp4'] },
              { items: ['/assets/kop/kop-kt-274.png'] },
              { items: ['/assets/kop/kop-kt-301.mp4'] },
              { items: ['/assets/kop/kop-kt-329.png'] },
              { items: ['/assets/kop/kop-kt-307.mp4'] },
            ],
          },
        ],
      },
      {
        name: 'Paid media',
        objective: 'Anuncio de la campaña de septiembre 2026: razones para ver el partido en Kings Tavern.',
        formats: ['Ad · Reel 9:16'],
        gallery: [],
        sections: [{ groups: [{ items: ['/assets/kop/kop-kt-ad-03.mp4'] }] }],
      },
      {
        name: 'Creative requests',
        objective: 'Encargos para el bar y sus pantallas.',
        formats: [],
        gallery: [],
        subCampaigns: [
          {
            // Resizes per team (story, TV…) to be added later.
            name: 'Game day',
            objective: 'Una serie para cada equipo que se ve en el bar: cada póster toma el color del equipo y su cerveza patrocinadora.',
            formats: ['Texas A&M', 'Texas Longhorns', 'Spurs', 'UTSA'],
            gallery: [
              '/assets/kop/kop-kt-sports-am.png',
              '/assets/kop/kop-kt-sports-lh.png',
              '/assets/kop/kop-kt-sports-spurs.png',
              '/assets/kop/kop-kt-sports-utsa.png',
            ],
          },
          {
            name: 'Sponsors TV',
            objective: 'Video que invita a marcas a anunciarse en el bar: «Great food. Cold drinks.» y «Want to advertise here?».',
            formats: ['TV 16:9 · 10 s'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/kop/kop-kt-sponsors-tv.mp4'], wide: true }] }],
          },
        ],
      },
    ],
  },
  {
    id: 'bwl',
    name: 'BWL',
    brand: {
      plate: 'linear-gradient(157deg, #c9eef0 0%, #4fb7c2 48%, #13889a 100%)',
      palette: ['#13889a', '#f3ece4', '#2b2622'],
      pieces: ['/assets/bwl/bwl-glysm-01.png', '/assets/bwl/bwl-post-82-1.png', '/assets/bwl/bwl-avance-100-1.png'],
    },
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/bwl/bwl-post-82-1.png',
    accentColor: 'white',
    tagline: 'Cinco marcas de skincare y suplementos, en inglés y en chino.',
    tags: ['Social media', 'Motion', 'Paid media', 'RedNote · 小红书', 'IA Generativa'],
    overview:
      'BWL (Best World) es una marca de wellness de origen singapurense con distribución global y múltiples líneas de producto. El trabajo abarca piezas de contenido para Instagram y paid media en inglés, más adaptación de reels al chino para RedNote (小红书), cada pieza reformateada para el contexto cultural y visual de cada plataforma.',
    role: 'Dirección de arte, edición de video y producción visual dentro de un flujo multimarca. Adaptación bilingüe chino-inglés para Instagram y RedNote.',
    agency: 'NexLaunch',
    challenge:
      'Adaptar el mismo contenido a dos plataformas con culturas visuales distintas: lo que funciona en Instagram no necesariamente conecta en RedNote. Cada versión tenía que sentirse nativa en su plataforma, no una simple traducción.',
    process:
      'Para cada reel: primero la versión en inglés con stock premium, motion type y ritmo occidental; luego la adaptación al chino con tipografía ajustada, copy nativo y referencias visuales que conectan con la audiencia de RedNote. Los estáticos de paid media siguen una línea limpia y premium que funciona en ambos mercados.',
    result:
      'Más de 20 piezas entre paid media estático, reels bilingües y posts editoriales. Sistema de producción que permite adaptar cada pieza a dos idiomas sin perder coherencia de marca. Campaña May 1 · Global Love Your Skin Month: 53 likes y 43 sends, ratio de envíos alto para contenido editorial.',
    gallery: [],
    // One chapter per brand of the family, then ads and requests. Selection 10 oct 2026.
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Las marcas',
        objective: 'Cinco marcas de una misma familia, cada una con su propio lenguaje visual.',
        formats: [],
        gallery: [],
        subCampaigns: [
          {
            name: 'BWL',
            pile: true,
            objective: 'La marca madre: campañas globales en inglés y en chino para Instagram y RedNote.',
            formats: ['Carrusel EN · 中文', 'Reel'],
            gallery: [],
            sections: [
              {
                groups: [
                  { items: ['/assets/bwl/bwl-glysm-01.png', '/assets/bwl/bwl-glysm-02.png', '/assets/bwl/bwl-glysm-03.png', '/assets/bwl/bwl-glysm-04.png', '/assets/bwl/bwl-glysm-05.png'], carousel: true, versions: [{ label: 'EN', items: ['/assets/bwl/bwl-glysm-01.png', '/assets/bwl/bwl-glysm-02.png', '/assets/bwl/bwl-glysm-03.png', '/assets/bwl/bwl-glysm-04.png', '/assets/bwl/bwl-glysm-05.png'] }, { label: '中文', items: ['/assets/bwl/bwl-glysm-zh-01.png', '/assets/bwl/bwl-glysm-zh-02.png', '/assets/bwl/bwl-glysm-zh-03.png', '/assets/bwl/bwl-glysm-zh-04.png', '/assets/bwl/bwl-glysm-zh-05.png'] }] },
                  { items: ['/assets/bwl/bwl-post-82-1.png', '/assets/bwl/bwl-post-82-2.png', '/assets/bwl/bwl-post-82-3.png', '/assets/bwl/bwl-post-82-4.png', '/assets/bwl/bwl-post-82-5.png', '/assets/bwl/bwl-post-82-6.png'], carousel: true },
                  { items: ['/assets/bwl/bwl-111.mp4'], versions: [{ label: 'EN', items: ['/assets/bwl/bwl-111.mp4'] }, { label: '中文', items: ['/assets/bwl/bwl-111-zh.mp4'] }] },
                  { items: ['/assets/bwl/bwl-mothers-day-web.mp4'] },
                  { items: ['/assets/bwl/bwl-post-76.png'] },
                  { items: ['/assets/bwl/bwl-post-80-web.mp4'] },
                ],
              },
            ],
          },
          {
            name: "DR's Secret",
            pile: true,
            objective: 'Skincare: piel real, rutinas por temporada y producto en primer plano.',
            formats: ['Carrusel', 'Post', 'Reel'],
            gallery: [],
            sections: [
              {
                groups: [
                  { items: ['/assets/bwl/bwl-drs-97-1.png', '/assets/bwl/bwl-drs-97-2.png', '/assets/bwl/bwl-drs-97-3.png', '/assets/bwl/bwl-drs-97-4.png', '/assets/bwl/bwl-drs-97-5.png', '/assets/bwl/bwl-drs-97-6.png'], carousel: true, versions: [{ label: 'EN', items: ['/assets/bwl/bwl-drs-97-1.png', '/assets/bwl/bwl-drs-97-2.png', '/assets/bwl/bwl-drs-97-3.png', '/assets/bwl/bwl-drs-97-4.png', '/assets/bwl/bwl-drs-97-5.png', '/assets/bwl/bwl-drs-97-6.png'] }, { label: '中文', items: ['/assets/bwl/bwl-drs-97-zh-1.png', '/assets/bwl/bwl-drs-97-zh-2.png', '/assets/bwl/bwl-drs-97-zh-3.png', '/assets/bwl/bwl-drs-97-zh-4.png', '/assets/bwl/bwl-drs-97-zh-5.png', '/assets/bwl/bwl-drs-97-zh-6.png'] }] },
                  { items: ['/assets/bwl/bwl-drs-20-1.png', '/assets/bwl/bwl-drs-20-2.png', '/assets/bwl/bwl-drs-20-3.png', '/assets/bwl/bwl-drs-20-4.png', '/assets/bwl/bwl-drs-20-5.png'], carousel: true },
                  { items: ['/assets/bwl/bwl-drs-101.png'] },
                  { items: ['/assets/bwl/bwl-drs-107.mp4'] },
                  { items: ['/assets/bwl/bwl-drs-skinrecon-t4.mp4'] },
                ],
              },
            ],
          },
          {
            name: 'Avance',
            pile: true,
            objective: 'Suplementos de belleza y bienestar: rituales diarios y colágeno.',
            formats: ['Carrusel', 'Post', 'Reel EN · 中文'],
            gallery: [],
            sections: [
              {
                groups: [
                  { items: ['/assets/bwl/bwl-avance-100-1.png', '/assets/bwl/bwl-avance-100-2.png', '/assets/bwl/bwl-avance-100-3.png', '/assets/bwl/bwl-avance-100-4.png', '/assets/bwl/bwl-avance-100-5.png'], carousel: true },
                  { items: ['/assets/bwl/bwl-avance-108-1.png', '/assets/bwl/bwl-avance-108-2.png', '/assets/bwl/bwl-avance-108-3.png', '/assets/bwl/bwl-avance-108-4.png', '/assets/bwl/bwl-avance-108-5.png'], carousel: true },
                  { items: ['/assets/bwl/bwl-avance-120-1.png', '/assets/bwl/bwl-avance-120-2.png', '/assets/bwl/bwl-avance-120-3.png', '/assets/bwl/bwl-avance-120-4.png', '/assets/bwl/bwl-avance-120-5.png'], carousel: true },
                  { items: ['/assets/bwl/bwl-post-87.png'], versions: [{ label: 'EN', items: ['/assets/bwl/bwl-post-87.png'] }, { label: '中文', items: ['/assets/bwl/bwl-post-87-zh.png'] }] },
                  { items: ['/assets/bwl/bwl-post-77-web.mp4'] },
                  { items: ['/assets/bwl/bwl-post-83-web.mp4'] },
                  { items: ['/assets/bwl/bwl-post-66-web.mp4'], versions: [{ label: 'EN', items: ['/assets/bwl/bwl-post-66-web.mp4'] }, { label: '中文', items: ['/assets/bwl/bwl-post-66-zh-web.mp4'] }] },
                ],
              },
            ],
          },
          {
            name: 'Optrimax',
            pile: true,
            objective: 'Bebidas funcionales: color, ilustración y un tono más juguetón.',
            formats: ['Post', 'Reel'],
            gallery: [],
            sections: [
              {
                groups: [
                  { items: ['/assets/bwl/bwl-09.png'] },
                  { items: ['/assets/bwl/bwl-10.png'] },
                  { items: ['/assets/bwl/bwl-post-71-en-web.mp4'], versions: [{ label: 'EN', items: ['/assets/bwl/bwl-post-71-en-web.mp4'] }, { label: '中文', items: ['/assets/bwl/bwl-post-71-zh-web.mp4'] }] },
                ],
              },
            ],
          },
          {
            name: 'Pentalab',
            pile: true,
            objective: 'Cuidado corporal: la piel no termina en la cara.',
            formats: ['Carrusel'],
            gallery: [],
            sections: [
              {
                groups: [
                  { items: ['/assets/bwl/bwl-pentalab-99-1.png', '/assets/bwl/bwl-pentalab-99-2.png', '/assets/bwl/bwl-pentalab-99-3.png', '/assets/bwl/bwl-pentalab-99-4.png', '/assets/bwl/bwl-pentalab-99-5.png'], carousel: true },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Paid media',
        objective: 'Anuncios para la familia de marcas: de la marca madre a cada línea de producto.',
        formats: ['Ad · Reel 9:16', 'Ad · Carrusel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/bwl/bwl-ad-20.mp4'] },
              { items: ['/assets/bwl/bwl-ad-22.mp4'] },
              { items: ['/assets/bwl/bwl-pm-06-1.png', '/assets/bwl/bwl-pm-06-2.png', '/assets/bwl/bwl-pm-06-3.png', '/assets/bwl/bwl-pm-06-4.png', '/assets/bwl/bwl-pm-06-5.png'], carousel: true },
              { items: ['/assets/bwl/bwl-pm-09-1.png', '/assets/bwl/bwl-pm-09-2.png', '/assets/bwl/bwl-pm-09-3.png', '/assets/bwl/bwl-pm-09-4.png', '/assets/bwl/bwl-pm-09-5.png'], carousel: true },
              { items: ['/assets/bwl/bwl-pm-03-web.mp4'] },
              { items: ['/assets/bwl/bwl-pm-11-web.mp4'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sin-yolanda',
    name: 'Sin Yolanda',
    brand: {
      plate: 'linear-gradient(157deg, #f0a03a 0%, #c4461f 50%, #5a180b 100%)',
      palette: ['#c4461f', '#f2b705', '#f1e4cf'],
      pieces: ['/assets/sin-yolanda/sy-ladies-night.png', '/assets/sin-yolanda/sy-post-43.png', '/assets/sin-yolanda/sy-open-mic.png'],
    },
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/sin-yolanda/sy-ladies-night.png',
    accentColor: 'white',
    agency: 'NexLaunch',
    tagline: 'Promos, reels y encargos para sus sedes en Texas.',
    tags: ['Social media', 'Diseño promocional', 'Tipografía', 'Reels', 'Motion'],
    // Provisional copy: role, permission to show and credits pending (NexLaunch).
    overview: 'Sin Yolanda es una cantina y restaurante mexicano con sedes en Houston, San Antonio, The Woodlands y El Paso.',
    role: 'Diseño y composición de piezas promocionales, reels y motion.',
    challenge: 'Texto en preparación.',
    process: 'Texto en preparación.',
    result: 'Texto en preparación.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Contenido',
        objective: 'Noches, tragos y música en sus cuatro sedes. Terracota, mostaza y tipografía que se oye.',
        formats: ['Post', 'Reel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/sin-yolanda/sy-post-43.png'] },
              { items: ['/assets/sin-yolanda/sy-elp-11.mp4'] },
              { items: ['/assets/sin-yolanda/sy-labor-day.png'] },
              { items: ['/assets/sin-yolanda/sy-post-19.mp4'] },
              { items: ['/assets/sin-yolanda/sy-elp-12.mp4'] },
              { items: ['/assets/sin-yolanda/sy-promo-lluvia.png'] },
              { items: ['/assets/sin-yolanda/sy-post-47.mp4'] },
              { items: ['/assets/sin-yolanda/sy-post-21.mp4'] },
              { items: ['/assets/sin-yolanda/sy-elp-07.mp4'] },
            ],
          },
        ],
      },
      {
        name: 'Creative requests',
        objective: 'Encargos por sede: aperturas, noches fijas, reels de ambiente y la serie con Jorge Guevara.',
        formats: [],
        gallery: [],
        subCampaigns: [
          {
            name: 'Jorge Guevara',
            pile: true,
            objective: 'Serie de entrevistas con el cantante, de cara a su noche en Sin Yolanda The Woodlands.',
            formats: ['Reel 9:16', 'Subtítulos animados'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/sin-yolanda/sy-jg-03.mp4'] }, { items: ['/assets/sin-yolanda/sy-jg-05.mp4'] }, { items: ['/assets/sin-yolanda/sy-jg-07.mp4'] }, { items: ['/assets/sin-yolanda/sy-jg-09.mp4'] }, { items: ['/assets/sin-yolanda/sy-jg-11.mp4'] }, { items: ['/assets/sin-yolanda/sy-jg-17.mp4'] }, { items: ['/assets/sin-yolanda/sy-jg-woodlands.mp4'] }] }],
          },
          {
            name: 'Noches en El Paso',
            objective: 'Una pieza por cada noche fija de la sede de El Paso.',
            formats: ['Ladies Night', 'Birthday Bash', 'Open Mic', 'Ahogo y Desahogo'],
            gallery: ['/assets/sin-yolanda/sy-ladies-night.png', '/assets/sin-yolanda/sy-birthday-bash.png', '/assets/sin-yolanda/sy-open-mic.png', '/assets/sin-yolanda/sy-ahogo-desahogo.png'],
          },
          {
            name: 'Friday Industry Night',
            pile: true,
            objective: 'Noche para la gente de la industria en Houston: reel y correo.',
            formats: ['Reel 9:16', 'Email'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/sin-yolanda/sy-industry-night.mp4'] }, { items: ['/assets/sin-yolanda/sy-industry-night-email.png'] }] }],
          },
          {
            name: 'Grand Opening',
            objective: 'Reel de apertura de El Paso: el brindis con champagne.',
            formats: ['Reel 9:16'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/sin-yolanda/sy-champagne-opening.mp4'] }] }],
          },
          {
            name: 'Food Reel',
            objective: 'La comida de San Antonio, plato por plato.',
            formats: ['Reel 9:16'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/sin-yolanda/sy-food-reel.mp4'] }] }],
          },
          {
            name: 'Night Ambiance',
            objective: 'Cómo se vive una noche en San Antonio.',
            formats: ['Reel 9:16'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/sin-yolanda/sy-night-ambiance.mp4'] }] }],
          },
          {
            name: 'Cocktail Experience',
            objective: 'La coctelería de Houston, trago por trago.',
            formats: ['Reel 9:16'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/sin-yolanda/sy-cocktail-experience.mp4'] }] }],
          },
          {
            name: 'Now Hiring',
            objective: 'Reel animado de vacantes para la apertura de El Paso.',
            formats: ['Reel 9:16 · motion'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/sin-yolanda/sy-now-hiring.mp4'] }] }],
          },
        ],
      },
    ],
  },
  {
    id: 'aseguramax',
    name: 'AseguraMax',
    brand: {
      plate: 'linear-gradient(157deg, #f4846a 0%, #e85a3c 38%, #1d3260 72%, #101c3a 100%)',
      palette: ['#13254a', '#ee6446', '#f6efe3'],
      pieces: ['/assets/amx/amx-c91-1.png', '/assets/amx/amx-post-92.png', '/assets/amx/amx-c99-1.png'],
    },
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/amx/amx-c91-1.png',
    accentColor: 'white',
    agency: 'NexLaunch',
    tagline: 'Seguros explicados sin letra chiquita.',
    tags: ['Social media', 'Carruseles', 'Reels', 'Paid Media'],
    // Provisional copy: permission to show and credits pending (NexLaunch).
    overview: 'AseguraMax es una agencia de seguros, agente GNP, con cotización en línea en aseguramax.com.',
    role: 'Diseño de carruseles, posts, reels y anuncios.',
    challenge: 'Texto en preparación.',
    process: 'Texto en preparación.',
    result: 'Texto en preparación.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Contenido',
        objective: 'Auto, hogar y gastos médicos en preguntas sencillas. Azul marino, coral y listas que se palomean.',
        formats: ['Carrusel', 'Post', 'Reel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/amx/amx-c91-1.png', '/assets/amx/amx-c91-2.png', '/assets/amx/amx-c91-3.png', '/assets/amx/amx-c91-4.png', '/assets/amx/amx-c91-5.png', '/assets/amx/amx-c91-6.png', '/assets/amx/amx-c91-7.png'], carousel: true },
              { items: ['/assets/amx/amx-post-108.mp4'] },
              { items: ['/assets/amx/amx-c86-1.png', '/assets/amx/amx-c86-2.png', '/assets/amx/amx-c86-3.png', '/assets/amx/amx-c86-4.png', '/assets/amx/amx-c86-5.png', '/assets/amx/amx-c86-6.png'], carousel: true },
              { items: ['/assets/amx/amx-post-92.png'] },
              { items: ['/assets/amx/amx-post-90.mp4'] },
              { items: ['/assets/amx/amx-c99-1.png', '/assets/amx/amx-c99-2.png', '/assets/amx/amx-c99-3.png', '/assets/amx/amx-c99-4.png', '/assets/amx/amx-c99-5.png'], carousel: true },
              { items: ['/assets/amx/amx-c77-1.png', '/assets/amx/amx-c77-2.png', '/assets/amx/amx-c77-3.png', '/assets/amx/amx-c77-4.png', '/assets/amx/amx-c77-5.png'], carousel: true },
              { items: ['/assets/amx/amx-post-78.mp4'] },
              { items: ['/assets/amx/amx-c97-1.png', '/assets/amx/amx-c97-2.png', '/assets/amx/amx-c97-3.png', '/assets/amx/amx-c97-4.png', '/assets/amx/amx-c97-5.png'], carousel: true },
              { items: ['/assets/amx/amx-post-84.png'] },
              { items: ['/assets/amx/amx-post-75.mp4'] },
              { items: ['/assets/amx/amx-c61-final-01.png', '/assets/amx/amx-c61-final-02.png', '/assets/amx/amx-c61-final-03.png', '/assets/amx/amx-c61-final-04.png', '/assets/amx/amx-c61-final-05.png', '/assets/amx/amx-c61-final-06.png', '/assets/amx/amx-c61-final-07.png', '/assets/amx/amx-c61-final-08.png'], carousel: true },
            ],
          },
        ],
      },
      {
        name: 'Paid media',
        objective: 'Anuncios en video para cotizar en línea.',
        formats: ['Ad · Reel 9:16'],
        gallery: [],
        sections: [{ groups: [{ items: ['/assets/amx/amx-pm-11-web.mp4'] }, { items: ['/assets/amx/amx-pm-13-web.mp4'] }] }],
      },
    ],
  },
  {
    id: 'iamonemind',
    name: 'iamonemind',
    brand: {
      plate: 'linear-gradient(157deg, #f6cfe3 0%, #c39ae0 42%, #4a3a86 76%, #2a2150 100%)',
      palette: ['#2e2453', '#e2559b', '#f4efe9'],
      pieces: ['/assets/iamonemind/iam-post-177.png', '/assets/iamonemind/iam-post-184.png', '/assets/iamonemind/iam-post-192.png'],
    },
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/iamonemind/iam-post-184.png',
    accentColor: 'white',
    agency: 'NexLaunch',
    tagline: 'Bienestar en una tira: suplementos sin pastillas.',
    tags: ['Social media', 'Posts', 'Reels', 'Producto'],
    // Provisional copy: permission to show and credits pending (NexLaunch).
    overview: 'iamonemind vende suplementos en tiras orales: Glow, Calm, Spark, Aware y Serenity.',
    role: 'Diseño de posts y reels de producto.',
    challenge: 'Texto en preparación.',
    process: 'Texto en preparación.',
    result: 'Texto en preparación.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Contenido',
        objective: 'Producto al frente y piel real: una tira para cada momento del día.',
        formats: ['Post', 'Reel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/iamonemind/iam-post-177.png'] },
              { items: ['/assets/iamonemind/iam-post-180.mp4'] },
              { items: ['/assets/iamonemind/iam-post-184.png'] },
              { items: ['/assets/iamonemind/iam-post-192.png'] },
              { items: ['/assets/iamonemind/iam-post-186.mp4'] },
              { items: ['/assets/iamonemind/iam-post-193.png'] },
              { items: ['/assets/iamonemind/iam-post-195.mp4'] },
              { items: ['/assets/iamonemind/iam-post-197.png'] },
              { items: ['/assets/iamonemind/iam-post-191.mp4'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'nexlaunch',
    name: 'NexLaunch',
    brand: {
      plate: 'linear-gradient(157deg, #3fe0ff 0%, #2b3df0 48%, #0b1f3f 100%)',
      palette: ['#0b1f3f', '#2b3df0', '#22d3f5'],
      pieces: ['/assets/nexlaunch/nl-c576-1.png', '/assets/nexlaunch/nl-post-579.png', '/assets/nexlaunch/nl-c571-1.png'],
    },
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/nexlaunch/nl-c576-1.png',
    accentColor: 'white',
    agency: 'NexLaunch',
    tagline: 'La agencia hablando de sí misma: estrategia antes que contenido.',
    tags: ['Social media', 'Carruseles', 'Reels', 'Ilustración'],
    // Provisional copy: permission to show and credits pending (NexLaunch).
    overview: 'NexLaunch es la agencia de marketing donde trabajo actualmente; este es el contenido de su propia marca.',
    role: 'Diseño de carruseles, posts y reels para la marca de la agencia.',
    challenge: 'Texto en preparación.',
    process: 'Texto en preparación.',
    result: 'Texto en preparación.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Contenido',
        objective: 'Mensajes cortos para dueños de negocio: velocidad, estrategia y datos. Azul eléctrico y frases que se leen de un vistazo.',
        formats: ['Carrusel', 'Post', 'Reel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/nexlaunch/nl-c576-1.png', '/assets/nexlaunch/nl-c576-2.png', '/assets/nexlaunch/nl-c576-3.png', '/assets/nexlaunch/nl-c576-4.png', '/assets/nexlaunch/nl-c576-5.png', '/assets/nexlaunch/nl-c576-6.png', '/assets/nexlaunch/nl-c576-7.png'], carousel: true },
              { items: ['/assets/nexlaunch/nl-post-572.mp4'] },
              { items: ['/assets/nexlaunch/nl-c571-1.png', '/assets/nexlaunch/nl-c571-2.png', '/assets/nexlaunch/nl-c571-3.png', '/assets/nexlaunch/nl-c571-4.png', '/assets/nexlaunch/nl-c571-5.png'], carousel: true },
              { items: ['/assets/nexlaunch/nl-post-568.png'] },
              { items: ['/assets/nexlaunch/nl-post-580.mp4'] },
              { items: ['/assets/nexlaunch/nl-post-579.png'] },
              { items: ['/assets/nexlaunch/nl-post-584.jpg'] },
              { items: ['/assets/nexlaunch/nl-post-583.mp4'] },
            ],
          },
        ],
      },
      {
        name: 'Creative requests',
        objective: 'Encargos para la web de la agencia.',
        formats: [],
        gallery: [],
        subCampaigns: [
          {
            name: 'Social sharing image',
            pile: true,
            objective: 'La imagen que aparece al compartir el sitio en redes y mensajes.',
            formats: ['1200 × 630'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/nexlaunch/nl-social-sharing.png'], wide: true }] }],
          },
        ],
      },
    ],
  },
  {
    id: 'activated-decor',
    name: 'Activated Decor',
    brand: {
      plate: 'linear-gradient(157deg, #e4e4e4 0%, #8b0020 50%, #111111 100%)',
      palette: ['#050505', '#8b0020', '#a9a9a9'],
      pieces: ['/assets/activated-decor/ad-cover.png', '/assets/activated-decor/ad-guideline-cover.png', '/assets/activated-decor/ad-mockup.png'],
    },
    category: 'BRANDING · MOTION',
    year: '2024',
    image: '/assets/activated-decor/ad-guideline-cover.png',
    accentColor: '#8B1A1A',
    tagline: 'Rebranding para una marca canadiense de TV lifts.',
    tags: ['Rebranding', 'Identidad visual', 'Logotipo animado', 'Brand guidelines', 'Motion'],
    overview:
      'Activated Decor es una empresa canadiense que diseña y fabrica sistemas motorizados de elevación y ocultamiento de televisores para arquitectura de lujo. Sus instalaciones están en Disney+, Four Seasons, Hilton, Marriott y Ritz-Carlton. El proyecto fue un rebranding completo: sistema de identidad visual, brand guidelines y logotipo animado en múltiples versiones para uso digital.',
    role: 'Rebranding completo: construcción del logotipo y sistema de marca, brand guidelines, paleta cromática, tipografía y producción de identidad en movimiento: logotipo animado en tres versiones y dos combinaciones de color.',
    challenge:
      'Su propio producto tiene como objetivo desaparecer: "Quiet. Precise. Invisible." es su posicionamiento. El reto fue construir una marca que fuera recordable y premium para el B2B, sin contradecir la filosofía de invisibilidad que venden a sus clientes de lujo.',
    process:
      'Desarrollé el monograma "ad" como base del sistema: geométrico, limpio, con personalidad. La paleta negro profundo y burdeos comunica lujo técnico sin caer en lo corporativo genérico. El manual de identidad documenta construcción del logotipo, usos correctos en distintos fondos, tipografía y variantes de aplicación. Los logos animados se produjeron en tres versiones (icono, logotipo completo, versión corta) y dos paletas de color.',
    result:
      'Sistema de identidad completo con brand guidelines, logotipo en tres versiones estáticas y animadas entregadas en GIF y MOV. El logotipo animado está en uso activo en su sitio web, una marca a la altura de los venues de lujo donde viven sus productos.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Construcción',
        objective: 'Monograma, logotipo y versión corta, con su anatomía y cómo se adaptan.',
        formats: ['Monograma', 'Logotipo', 'Adaptación'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/activated-decor/ad-08.png'] },
              { items: ['/assets/activated-decor/ad-04.png'] },
              { items: ['/assets/activated-decor/ad-09.png'] },
            ],
          },
        ],
      },
      {
        name: 'Sistema',
        objective: 'Negro, vino y grises; Poppins e Inter; usos correctos e incorrectos.',
        formats: ['Paleta', 'Tipografía', 'Uso'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/activated-decor/ad-07.png'] },
              { items: ['/assets/activated-decor/ad-03.png'] },
              { items: ['/assets/activated-decor/ad-05.png'] },
              { items: ['/assets/activated-decor/ad-10.png'] },
            ],
          },
        ],
      },
      {
        name: 'Aplicaciones',
        objective: 'La marca en redes y en producto.',
        formats: ['Social', 'Mockup'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/activated-decor/ad-mockup.png'] },
              { items: ['/assets/activated-decor/ad-cover.png'] },
            ],
          },
        ],
      },
      {
        name: 'Motion',
        objective: 'El logotipo animado en sus versiones.',
        formats: ['Logo animado', 'Monograma', 'Logotipo'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/activated-decor/ad-logo-animated.mp4'] },
              { items: ['/assets/activated-decor/ad-logos-animados.mp4'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'procyon',
    name: 'Procyon',
    brand: {
      plate: 'linear-gradient(157deg, #d7cbff 0%, #6a2bd1 50%, #120a24 100%)',
      palette: ['#2a0a4a', '#7b3fe4', '#e9ecf7'],
      pieces: ['/assets/procyon/procyon-post-match.jpg', '/assets/procyon/procyon-post-merch.jpg', '/assets/procyon/procyon-post-winner.jpg'],
    },
    category: 'BRANDING · ESPORTS',
    year: '2025',
    image: '/assets/procyon/procyon-post-merch.jpg',
    accentColor: '#6B21A8',
    tagline: 'Identidad visual, contenido y sistema gráfico para organización esports.',
    tags: ['Branding', 'Esports', 'Social media', 'Identidad visual', 'Merch', 'Streaming'],
    overview:
      'Procyon es una organización esports mexicana competidora en Valorant Challengers LATAM Norte. El trabajo abarca la identidad visual completa: logo system, plantillas de contenido para redes, headers de plataforma y diseño del jersey oficial del equipo.',
    role: 'Identidad visual completa y producción de contenido: sistema de logo en tres variantes, plantillas de match day en tres estados (Gameday, Winners, Defeat), headers para Twitch, YouTube, Twitter y Facebook, posts de jugadores y diseño de jersey oficial.',
    challenge:
      'Una identidad para un equipo de esports que se reconociera en cada pieza, de los posts al jersey. El nombre Procyon (la estrella más brillante del Can Menor) definió la dirección: cósmico, preciso, con algo de misterio.',
    process:
      'El sistema parte del monograma de cuatro puntas como ícono central: geométrico, simétrico, con referencias a una estrella. La paleta negro/púrpura refuerza la dimensión espacial del nombre. Las plantillas de partido operan en dos modos: fondo oscuro y personaje intenso para el match day, fondo claro con tipografía expansiva para los resultados ganadores. El jersey replica el ícono en el pecho con textura topográfica para el acabado premium.',
    result:
      'Sistema completo publicado en @ProcyonGaming_: logo en tres versiones (horizontal, vertical, ícono) en positivo, negativo y digital. Seis plantillas de resultado, headers en cuatro plataformas, posts de jugadores y jersey oficial del equipo.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Identidad',
        objective: 'Una estrella de cuatro puntas: icono, logotipo horizontal y vertical.',
        formats: ['Icono', 'Horizontal', 'Vertical'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/procyon/procyon-icon.png'] },
              { items: ['/assets/procyon/procyon-logo-h.png'] },
              { items: ['/assets/procyon/procyon-logo-v-orig.png'] },
            ],
          },
        ],
      },
      {
        name: 'Match day',
        objective: 'Plantillas para cada partido en tres estados: gameday, victoria y derrota.',
        formats: ['Gameday', 'Winners', 'Defeat'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/procyon/procyon-post-match.jpg'] },
              { items: ['/assets/procyon/procyon-post-winner.jpg'] },
              { items: ['/assets/procyon/procyon-post-defeat.jpg'] },
              { items: ['/assets/procyon/procyon-gameday-02.png'] },
              { items: ['/assets/procyon/procyon-winners-02.png'] },
              { items: ['/assets/procyon/procyon-defeat-02.png'] },
            ],
          },
        ],
      },
      {
        name: 'Jugadores y creadores',
        objective: 'Bienvenidas para el roster y los creadores de contenido.',
        formats: ['Bienvenida', 'Jugadores'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/procyon/procyon-welcome-loremu.png'] },
              { items: ['/assets/procyon/procyon-welcome-nubes.png'] },
              { items: ['/assets/procyon/procyon-welcome-yass.png'] },
              { items: ['/assets/procyon/procyon-post-jugadores.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'Banners',
        objective: 'Cabeceras para YouTube, Twitch y redes de cada creador.',
        formats: ['YouTube', 'Twitch', 'Creadores'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/procyon/procyon-banner-yt.png'] },
              { items: ['/assets/procyon/procyon-banner-twitch.jpg'] },
              { items: ['/assets/procyon/procyon-banner-loremu.png'] },
              { items: ['/assets/procyon/procyon-banner-nubes.png'] },
              { items: ['/assets/procyon/procyon-banner-yass.png'] },
              { items: ['/assets/procyon/procyon-header.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'Merch',
        objective: 'El jersey oficial de la organización.',
        formats: ['Jersey'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/procyon/procyon-post-merch.jpg'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'retrato',
    name: 'Retrato',
    brand: {
      plate: 'linear-gradient(157deg, #ece7df 0%, #9a948b 50%, #1c1b1a 100%)',
      palette: ['#1c1b1a', '#2f6f8f', '#ece7df'],
      pieces: ['/assets/retrato/retrato-ivanna-03.jpg', '/assets/retrato/retrato-ivanna-portada.jpg', '/assets/retrato/retrato-michel-04.jpg'],
    },
    category: 'FOTOGRAFÍA',
    year: '2026',
    image: '/assets/retrato/retrato-ivanna-portada.jpg',
    accentColor: 'white',
    tagline: 'Ivanna y Michel, dos sesiones con una Canon T3i.',
    tags: ['Fotografía', 'Retrato', 'Dirección de modelo'],
    // Added 11 oct 2026 from ~/Documents/Album Fotoso (Canon T3i, 30 sep – 1 oct 2026).
    // Before publishing: confirm Ivanna's and Michel's consent to appear.
    overview: 'Dos sesiones de retrato: escaleras, plantas, una moto y un elevador como escenario, con luz natural y dura.',
    role: 'Fotografía, dirección de pose y selección.',
    challenge: 'Texto en preparación.',
    process: 'Texto en preparación.',
    result: 'Texto en preparación.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Ivanna',
        puzzle: true,
        objective: 'Pelo azul contra concreto, plantas y metal: color frío en espacios grises.',
        formats: ['Retrato', 'Exterior'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/retrato/retrato-ivanna-portada.jpg'] },
              { items: ['/assets/retrato/retrato-ivanna-01.jpg'] },
              { items: ['/assets/retrato/retrato-ivanna-02.jpg'] },
              { items: ['/assets/retrato/retrato-ivanna-03.jpg'] },
              { items: ['/assets/retrato/retrato-ivanna-04.jpg'] },
              { items: ['/assets/retrato/retrato-ivanna-05.jpg'] },
              { items: ['/assets/retrato/retrato-ivanna-06.jpg'] },
              { items: ['/assets/retrato/retrato-ivanna-07.jpg'] },
              { items: ['/assets/retrato/retrato-ivanna-08.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'Michel',
        puzzle: true,
        objective: 'Del árbol al elevador: luz dura, reflejos y un close‑up.',
        formats: ['Retrato', 'Exterior', 'Interior'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/retrato/retrato-michel-01.jpg'] },
              { items: ['/assets/retrato/retrato-michel-02.jpg'] },
              { items: ['/assets/retrato/retrato-michel-03.jpg'] },
              { items: ['/assets/retrato/retrato-michel-04.jpg'] },
              { items: ['/assets/retrato/retrato-michel-05.jpg'] },
              { items: ['/assets/retrato/retrato-michel-06.jpg'] },
              { items: ['/assets/retrato/retrato-michel-07.jpg'] },
              { items: ['/assets/retrato/retrato-michel-08.jpg'] },
            ],
          },
        ],
      },
    ],
  },
  // Plantilla · Kymsul (ilustración y animación), visible como «en preparación».
  // El material está en la otra PC de Kimberly: comisiones de íconos, wallpapers,
  // emotes, overlays animados y PNGtuber (Karmaaa, Karasuu, SansBTW, Harvey,
  // Reader, alwaysrosse_, Paola, stitch, g.sepulveda). Para llenarla:
  //   1. Copia los archivos a projects/kymsul-renovacion/work/original-assets/kymsul/
  //      (videos: comprímelos con scratchpad tools/webvideo; los .webm no se leen aquí).
  //   2. Cambia las piezas del hero y la portada por piezas reales.
  //   3. Agrega capítulos (con `puzzle: true`: filas justificadas, cada pieza completa),
  //      por ejemplo Íconos y wallpapers · Emotes · Overlays animados · PNGtuber,
  //      y su traducción en lib/project-translations.ts (mismo orden).
  //   4. Overlays animados y PNGtuber: súmalos también a MOTION_PICKS en lib/motion.ts.
  //   5. npm run media:prepare · media:check · summaries.
  {
    id: 'kymsul',
    name: 'Kymsul',
    brand: {
      plate: 'linear-gradient(157deg, #f1ecff 0%, #c4aef2 50%, #6b4aa8 100%)',
      palette: ['#151514', '#c4aef2', '#f1ecff'],
      pieces: ['/assets/kymsul/kymsul-placeholder-emotes.png', '/assets/kymsul/kymsul-portada.png', '/assets/kymsul/kymsul-placeholder-pngtuber.png'],
    },
    category: 'ILUSTRACIÓN · ANIMACIÓN',
    year: '2023 —',
    image: '/assets/kymsul/kymsul-portada.png',
    accentColor: 'white',
    tagline: 'Comisiones de ilustración y animación: de cero a vender. En preparación.',
    tags: ['Ilustración', 'Animación', 'Emotes', 'Overlays', 'PNGtuber'],
    overview: 'Kymsul nació con comisiones de ilustración y animación; lo llevé desde cero hasta generar ventas.',
    role: 'Ilustración, animación, atención a clientes y venta de comisiones.',
    challenge: 'Texto en preparación.',
    process: 'Texto en preparación.',
    result: 'Texto en preparación.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [],
  },
  {
    id: 'ai-creative',
    name: 'Sistema Creativo IA',
    category: 'IA GENERATIVA',
    year: '2026',
    image: '/assets/amx/amx-c61-final-01.png',
    accentColor: '#0D0D0D',
    tagline: 'Cinco flujos de IA en producción real — del brief al entregable con más criterio.',
    tags: ['IA Generativa', 'Gemini', 'Remotion', 'Claude Code', 'Automatización', 'Codex'],
    overview:
      'Sistema creativo propio con cinco flujos integrados en producción real: documentación de marca en Obsidian, motion automatizado con Claude Code + Remotion, imagen generativa con Gemini, video generativo con Gemini Flow e Higgsfield, y adaptación de formatos con Codex y Photoshop. No es experimentación; es un método de producción documentado aplicado en clientes activos. La IA reduce fricción en la primera base editable — el criterio creativo decide qué sirve, qué se ajusta y qué se descarta.',
    role: 'Dirección creativa en cinco flujos: documentación de marca en Obsidian, motion con skill /reel en Claude Code + Remotion + AE, imagen generativa con Gemini y prompt engineering, video generativo con dirección de arte en Gemini Flow e Higgsfield, y producción estática a escala con Codex y Photoshop.',
    challenge:
      'Integrar IA sin que delate la herramienta ni rompa la identidad de cada marca. Cada flujo tiene un punto de intervención humana definido: leer guidelines antes de generar, seleccionar cortes de video, dirigir actuación con prompt, retocar iluminación, y decidir cuándo usar stock en vez de fondos IA para que el resultado se vea natural.',
    process:
      'Cinco flujos aplicados en producción real para clientes activos: documentación de marca como memoria creativa del sistema, skill /reel que genera la composición base en Remotion desde el brief, imagen generativa con dirección de arte desde el prompt hasta el retoque, video generativo con correcciones de actuación antes del montaje final, y scripts de Codex y Photoshop para producción estática a escala.',
    result:
      'Workflow documentado y en producción activa: reels de paid media para AMX, KOP y BWL con la skill /reel; clips de video generativo con dirección de actuación para BWL Optrimax; fotografía de escena generativa para KOP Kings Tavern y editorial para múltiples marcas; flyer World Cup 2026 adaptado a 5 formatos con script de Photoshop; 8 slides de carrusel explorados con Codex para AseguraMax. El sistema completo — lógica, herramientas y casos — está documentado en la página IA.',
    gallery: [],
    campaigns: [
      {
        name: 'Skill /reel · De Brief a Video',
        objective: 'Skill propia construida en Claude Code: el brief entra, sale una composición Remotion completa. El humano revisa, ajusta y renderiza el final en AE. Cada par muestra el output directo de Remotion y el entregable después de dirección de arte.',
        formats: ['Claude Code · Skill /reel', 'Remotion', 'After Effects', 'Antes / Después'],
        collapsible: true,
        gallery: [],
        sections: [
          {
            label: 'AMX · Paid Media · 17s',
            split: true,
            groups: [
              { items: ['/assets/amx/amx-pm-11-antes-web.mp4'], label: 'Antes · Output Remotion' },
              { items: ['/assets/amx/amx-pm-11-web.mp4'], label: 'Después · Dirección de arte' },
            ],
          },
          {
            label: 'AMX · Paid Media · 15s',
            split: true,
            groups: [
              { items: ['/assets/amx/amx-pm-13-antes-web.mp4'], label: 'Antes · Output Remotion' },
              { items: ['/assets/amx/amx-pm-13-web.mp4'], label: 'Después · Dirección de arte' },
            ],
          },
          {
            label: 'KOP · Paid Media · 22s',
            split: true,
            groups: [
              { items: ['/assets/kop/kop-pm01-antes-web.mp4'], label: 'Antes · Output Remotion' },
              { items: ['/assets/kop/kop-paidmedia-01.mp4'], label: 'Después · Dirección de arte' },
            ],
          },
          {
            label: 'BWL · Post 80 · 16s',
            split: true,
            groups: [
              { items: ['/assets/bwl/bwl-post-80-antes-web.mp4'], label: 'Antes · Output Remotion' },
              { items: ['/assets/bwl/bwl-post-80-web.mp4'], label: 'Después · Dirección de arte' },
            ],
          },
          {
            label: 'BWL · Post 83 · 27s',
            split: true,
            groups: [
              { items: ['/assets/bwl/bwl-post-83-antes-web.mp4'], label: 'Antes · Output Remotion' },
              { items: ['/assets/bwl/bwl-post-83-web.mp4'], label: 'Después · Dirección de arte' },
            ],
          },
        ],
      },
      {
        name: 'Scripts + Codex',
        objective: 'Generación de piezas de diseño con IA: script de Photoshop que adapta un flyer a 5 formatos con menos trabajo repetitivo, y carrusel explorado con Codex desde componentes visuales generados a partir del brief.',
        formats: ['Script PS · Claude Code', 'Codex · Claude Code'],
        collapsible: true,
        gallery: [],
        subCampaigns: [
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
            name: 'AMX · Carrusel · Codex',
            objective: 'Brief → Codex genera los paneles base con IA (tipografía, composición, paleta) → retoque humano de personas e iluminación → texto y copy final superpuesto. 8 slides listos a publicar sin construir ninguno manualmente.',
            formats: ['Carrusel 8 slides · Instagram', 'Codex · Claude Code', 'Gemini · Imagen generativa'],
            gallery: [],
            sections: [
              {
                label: 'Carrusel · 8 slides',
                split: true,
                groups: [
                  {
                    label: 'Antes · Output IA',
                    items: [
                      '/assets/amx/amx-raster-slide-01.png',
                      '/assets/amx/amx-raster-slide-02.png',
                      '/assets/amx/amx-raster-slide-03.png',
                      '/assets/amx/amx-raster-slide-04.png',
                      '/assets/amx/amx-raster-slide-05.png',
                      '/assets/amx/amx-raster-slide-06.png',
                      '/assets/amx/amx-raster-slide-07.png',
                      '/assets/amx/amx-raster-slide-08.png',
                    ],
                    carousel: true,
                  },
                  {
                    label: 'Después · Dirección de arte',
                    items: [
                      '/assets/amx/amx-c61-final-01.png',
                      '/assets/amx/amx-c61-final-02.png',
                      '/assets/amx/amx-c61-final-03.png',
                      '/assets/amx/amx-c61-final-04.png',
                      '/assets/amx/amx-c61-final-05.png',
                      '/assets/amx/amx-c61-final-06.png',
                      '/assets/amx/amx-c61-final-07.png',
                      '/assets/amx/amx-c61-final-08.png',
                    ],
                    carousel: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Imagen Generativa',
        objective: 'Fotografía de escena, composiciones de marca y flats de producto generados con IA para piezas reales. Prompt engineering como herramienta de exploración y producción visual — con dirección de arte y criterio humano.',
        formats: ['Gemini · ChatGPT', 'Prompt Engineering', 'Post · Instagram', 'Carrusel · Instagram'],
        collapsible: true,
        gallery: [],
        sections: [
          {
            label: 'KOP · Antes / Después',
            groups: [
              { items: ['/assets/kop/kop-kt-original-01.jpg', '/assets/kop/kop-kt-original-02.jpg'], carousel: true },
              { items: ['/assets/kop/kop-kt-184.png'] },
            ],
          },
          {
            label: 'KOP · Posts Editoriales',
            groups: [
              { items: ['/assets/kop/kop-post-140.png'] },
              { items: ['/assets/kop/kop-post-142.png'] },
              { items: ['/assets/kop/kop-post-170.png'] },
              { items: ['/assets/kop/kop-post-172.png'] },
              { items: ['/assets/kop/kop-c143-1.png', '/assets/kop/kop-c143-2.png', '/assets/kop/kop-c143-3.png', '/assets/kop/kop-c143-4.png'], carousel: true },
              { items: ['/assets/kop/kop-c171-1.png', '/assets/kop/kop-c171-2.png', '/assets/kop/kop-c171-3.png', '/assets/kop/kop-c171-4.png', '/assets/kop/kop-c171-5.png'], carousel: true },
            ],
          },
          {
            label: 'BWL · Imagen Generativa',
            groups: [
              { items: ['/assets/bwl/bwl-post-87.png'] },
              { items: ['/assets/bwl/bwl-pm-12.png'] },
            ],
          },
          {
            label: 'Amorcito Corazón · Editorial',
            groups: [
              { items: ['/assets/amorcito/ac-feb-03.png'] },
            ],
          },
          {
            label: 'Beatness · Editorial',
            groups: [
              { items: ['/assets/beatness/beatness-feb-05-v2.png'] },
            ],
          },
          {
            label: 'Corazón Mixteco · Editorial',
            groups: [
              { items: ['/assets/corazon-mixteco/cm-carrusel-bg-ai.png'] },
              { items: ['/assets/corazon-mixteco/cm-post-05-v2.png'] },
              { items: ['/assets/corazon-mixteco/cm-post-07.png'] },
            ],
          },
        ],
      },
      {
        name: 'Video Generativo',
        objective: 'Dirección de arte con herramientas de video generativo: prompt inicial, correcciones de naturalidad y dirección de actuación. Los clips generados se montan en After Effects para el entregable final.',
        formats: ['Gemini Flow · Higgsfield', 'Clips IA · Fuente', 'Reel Final · AE'],
        collapsible: true,
        gallery: [],
        subCampaigns: [
          {
            name: 'BWL · Optrimax',
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
            name: 'BWL · Paid Media',
            objective: 'Reel de paid media generado con IA para BWL: video de producto sin locación ni modelos.',
            formats: ['Paid Media · Video', 'Gemini · Higgsfield'],
            gallery: [],
            sections: [
              { groups: [{ items: ['/assets/bwl/bwl-pm-11-web.mp4'] }] },
            ],
          },
          {
            name: 'BWL · Avance',
            objective: 'Cinco clips de video de producto generados con IA, usados como material base para el reel final montado en After Effects.',
            formats: ['Clips IA · Fuente', 'Reel Final · AE', 'Higgsfield · Gemini'],
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
            name: 'BWL · DR\'s Secret',
            objective: 'Los clips generados con IA que se usaron como material base del reel (sunbeam, cinemagraph y animaciones de producto), montados luego en After Effects.',
            formats: ['Clips IA · Fuente', 'Reel Final · AE', 'Gemini · Higgsfield'],
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
    ],
  },
  {
    id: 'corazon-mixteco',
    name: 'Corazón Mixteco',
    brand: {
      plate: 'linear-gradient(157deg, #d9b8e6 0%, #7b2d8b 50%, #3a1242 100%)',
      palette: ['#5b2a6e', '#e9572b', '#f1e6d6'],
      pieces: ['/assets/corazon-mixteco/cm-car1-cover.png', '/assets/corazon-mixteco/cm-post-09.png', '/assets/corazon-mixteco/cm-post-06.png'],
    },
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/corazon-mixteco/cm-post-09.png',
    accentColor: '#7B2D8B',
    tagline: 'La herencia del buen queso, en cada pieza de contenido.',
    tags: ['Social media', 'Dirección de arte', 'Fotografía editorial', 'Carruseles', 'Print', 'IA Generativa'],
    overview:
      'Corazón Mixteco es una marca de quesos artesanales mexicanos: quesillo, panela, manchego y más. El trabajo abarca la dirección de arte y producción de contenido mensual para redes sociales: parrillas editoriales de producto, carruseles educativos, reels y materiales de punto de venta.',
    role: 'Dirección de arte y producción de contenido: parrillas mensuales de Febrero y Marzo 2026, carruseles educativos de producto, reels y diseño de banner roll-up para exhibición.',
    agency: 'Mensaje Clave',
    challenge:
      'Comunicar autenticidad artesanal y tradición oaxaqueña en un feed de Instagram sin caer en lo folclórico ni en lo genérico. El queso tiene que verse como lo que es: un producto premium de origen.',
    process:
      'Cada parrilla parte del producto como protagonista: fotografía de food con luz natural, props de madera, barro y textiles oaxaqueños. Los carruseles educativos complementan el editorial explicando procesos y tips de cuidado. Los copies juegan con el lenguaje coloquial mexicano sin perder el tono premium.',
    result:
      'Producción continua: parrillas editoriales de Febrero y Marzo 2026, dos carruseles educativos, siete reels (tres de Febrero y cuatro de Marzo) y banner roll-up para punto de venta.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Contenido',
        objective: 'El queso como protagonista: luz natural, madera, barro y textiles oaxaqueños, más carruseles que enseñan a reconocerlo y cuidarlo.',
        formats: ['Post', 'Carrusel', 'Reel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/corazon-mixteco/cm-post-09.png'] },
              { items: ['/assets/corazon-mixteco/cm-reel-feb-02.mp4'] },
              { items: ['/assets/corazon-mixteco/cm-car1-cover.png', '/assets/corazon-mixteco/cm-car1-02.png', '/assets/corazon-mixteco/cm-car1-03.png', '/assets/corazon-mixteco/cm-car1-04.png', '/assets/corazon-mixteco/cm-car1-05.png'], carousel: true },
              { items: ['/assets/corazon-mixteco/cm-post-06.png'] },
              { items: ['/assets/corazon-mixteco/cm-reel-mar-03.mp4'] },
              { items: ['/assets/corazon-mixteco/cm-car2-cover.png', '/assets/corazon-mixteco/cm-car2-02.png', '/assets/corazon-mixteco/cm-car2-03.png', '/assets/corazon-mixteco/cm-car2-04.png'], carousel: true },
              { items: ['/assets/corazon-mixteco/cm-post-07.png'] },
              { items: ['/assets/corazon-mixteco/cm-mar-12.jpg'] },
              { items: ['/assets/corazon-mixteco/cm-reel-mar-01.mp4'] },
              { items: ['/assets/corazon-mixteco/cm-post-02.png'] },
              { items: ['/assets/corazon-mixteco/cm-mar-04.jpg'] },
              { items: ['/assets/corazon-mixteco/cm-mar-05.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'Creative requests',
        objective: 'Material impreso para punto de venta.',
        formats: [],
        gallery: [],
        subCampaigns: [
          {
            name: 'Banner roll-up',
            pile: true,
            objective: 'Las dos líneas principales, Quesillo y Panela, para exhibición en punto de venta.',
            formats: ['Roll-up', 'Print'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/corazon-mixteco/cm-banner-mockup.png'] }, { items: ['/assets/corazon-mixteco/cm-banner.png'] }] }],
          },
        ],
      },
    ],

  },
  {
    id: 'amorcito',
    name: 'Amorcito Corazón',
    brand: {
      plate: 'linear-gradient(157deg, #f6b24a 0%, #d8542a 48%, #3a120a 100%)',
      palette: ['#111111', '#e3a33a', '#c8442a'],
      pieces: ['/assets/amorcito/ac-feb-03.png', '/assets/amorcito/ac-feb-04.png', '/assets/amorcito/ac-cover.png'],
    },
    category: 'SOCIAL MEDIA · MOTION',
    year: '2026',
    image: '/assets/amorcito/ac-cover.png',
    accentColor: '#C9871A',
    tagline: 'El sushi más chingón de México, en cinco sucursales.',
    tags: ['Social media', 'Motion', 'Dirección de arte', 'Campañas', 'Print', 'Punto de venta', 'IA Generativa'],
    overview:
      'Amorcito Corazón es una cadena de restaurantes japonés-mexicano con cinco sucursales en Puebla. El trabajo abarca la dirección de arte y producción de contenido para redes sociales, desde la parrilla mensual de fotografía editorial hasta campañas de activación, kit de sucursales y materiales de punto de venta.',
    role: 'Dirección de arte y producción de contenido: parrilla mensual de reels y posts, campañas de activación, adaptación a múltiples formatos (feed, stories, HD, print) y materiales POS. Producción del llamado y codirección del levantamiento fotográfico de mixología en locación.',
    agency: 'Mensaje Clave',
    challenge:
      'Mantener coherencia visual en una cadena con cinco locaciones y un posicionamiento que mezcla lo japonés y lo mexicano (dos mundos visuales distintos) sin caer en la obviedad de ninguno de los dos.',
    process:
      'El trabajo tuvo dos frentes. Producción de contenido: reels, posts y piezas de campaña armadas desde la estética del restaurante (iluminación cálida, neón amarillo, madera). Shooting de mixología: preparé el llamado junto con la copy, coordiné con la encargada del restaurante y codirigí el levantamiento en locación con la fotógrafa. Las imágenes generadas alimentan el banco visual de la marca para coctelería.',
    result:
      'Parrillas mensuales de Feb y Marzo 2026, campaña San Valentín en digital y print, kit de cinco sucursales en cuatro formatos, tent card de coctelería, encuesta de expansión y banco de imágenes de mixología producido en locación.',
    gallery: [],
    campaignsLabel: 'TRABAJO',
    campaigns: [
      {
        name: 'Contenido',
        objective: 'Sushi, coctelería y gente real bajo el neón: la parrilla mensual de reels y posts.',
        formats: ['Post', 'Reel'],
        gallery: [],
        sections: [
          {
            groups: [
              { items: ['/assets/amorcito/ac-cover.png'] },
              { items: ['/assets/amorcito/ac-reel-01.mp4'] },
              { items: ['/assets/amorcito/ac-feb-03.png'] },
              { items: ['/assets/amorcito/ac-feb-04.png'] },
              { items: ['/assets/amorcito/ac-reel-tiktok.mp4'] },
              { items: ['/assets/amorcito/ac-feb-02.png'] },
              { items: ['/assets/amorcito/ac-mar-03.jpg'] },
              { items: ['/assets/amorcito/ac-reel-02.mp4'] },
              { items: ['/assets/amorcito/ac-feb-07.png'] },
              { items: ['/assets/amorcito/ac-mar-05.jpg'] },
              { items: ['/assets/amorcito/ac-mar-02.jpg'] },
              { items: ['/assets/amorcito/ac-mar-07.jpg'] },
            ],
          },
        ],
      },
      {
        name: 'Creative requests',
        objective: 'Campañas, sucursales, pantallas y punto de venta.',
        formats: [],
        gallery: [],
        subCampaigns: [
          {
            name: 'San Valentín',
            pile: true,
            objective: 'Mini campaña UGC «¿Tienes una historia con tu amorcito?»: convocatoria, mecánica y cierre, más tabloide y portada.',
            formats: ['Story · UGC', 'Tabloide', 'Portada'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/amorcito/ac-ugc-01.png'] }, { items: ['/assets/amorcito/ac-ugc-02.png'] }, { items: ['/assets/amorcito/ac-ugc-03.png'] }, { items: ['/assets/amorcito/ac-tabloide.png'] }, { items: ['/assets/amorcito/ac-portada-fb.png'] }] }],
          },
          {
            name: 'Kit de sucursales',
            pile: true,
            objective: 'Las cinco sucursales en Puebla en post y story, con dos fotografías para rotar.',
            formats: ['Post', 'Story'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/amorcito/ac-suc-post-01.png'] }, { items: ['/assets/amorcito/ac-suc-story-01.png'] }, { items: ['/assets/amorcito/ac-suc-post-02.png'] }, { items: ['/assets/amorcito/ac-suc-story-02.png'] }] }],
          },
          {
            name: 'Pantalla TV',
            objective: 'Las promos del restaurante animadas para las pantallas del venue.',
            formats: ['TV 16:9'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/amorcito/ac-pantallas.mp4'], wide: true }] }],
          },
          {
            name: 'Punto de venta',
            pile: true,
            objective: 'Para las mesas: tent card de coctelería con QR y encuesta para elegir la nueva sucursal.',
            formats: ['Tent card', 'Encuesta'],
            gallery: [],
            sections: [{ groups: [{ items: ['/assets/amorcito/ac-tentcard.png'] }, { items: ['/assets/amorcito/ac-encuesta.png'] }] }],
          },
        ],
      },
    ],

  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
