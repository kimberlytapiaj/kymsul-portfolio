export type Project = {
  id: string
  name: string
  category: string
  year: string
  image: string
  accentColor?: string
  // Case study fields
  tagline: string
  tags: string[]
  overview: string
  role: string
  challenge: string
  process: string
  result: string
  gallery: string[]
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
      '/assets/thumbnail-zealix.png',
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
      '/assets/thumbnail-brainy.png',
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
      '/assets/thumbnail-beatness.png',
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
      '/assets/thumbnail-tierra.png',
    ],
  },
  {
    id: 'nomada',
    name: 'Nómada',
    category: 'BRAND · WEB',
    year: '2024',
    image: '/assets/thumbnail-nomada.png',
    accentColor: '#c7b8ff',
    tagline: 'Un restaurante que encontró su identidad.',
    tags: ['Branding', 'Web design', 'Fotografía'],
    overview:
      'La Cabaña — Nómada es un restaurante con cocina de autor en Puebla, México. El nombre evocaba cantina; la experiencia real era otra cosa. El proyecto fue un reposicionamiento completo.',
    role: 'Rediseño de identidad visual, diseño de menú impreso, dirección de fotografía de producto y diseño web.',
    challenge:
      'Cambiar la percepción de un restaurante establecido sin alienar a su clientela base. El nuevo sistema tenía que ser sofisticado pero cálido, premium sin pretensión.',
    process:
      'La nueva identidad parte del concepto de nomadismo culinario: elementos de diferentes tradiciones que convergen en una experiencia. El logotipo usa serif clásico con detalles irregulares que sugieren artesanía. El menú impreso fue diseñado para fotogenia — pensado para ser fotografiado por clientes. El sitio web prioriza la reservación y la carta.',
    result:
      'Sistema de identidad completo, menú impreso en dos versiones (carta y tabla), fotografía de platos y espacio, y sitio web de una página con reservaciones.',
    gallery: [
      '/assets/thumbnail-nomada.png',
    ],
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
