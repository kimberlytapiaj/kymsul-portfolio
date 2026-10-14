// Provisional home selection. Carousel picked 11 oct 2026 after Kimberly asked for
// better pieces than the proposal-A sample (Zealix/KOP/Beatness).
// Change the ids/images here once she confirms them.

export type FeaturedSlide = {
  id: string
  image: string
  alt: { es: string; en: string }
  category: { es: string; en: string }
  /** Background behind the uncropped image (object-fit: contain). */
  tone: string
}

export const carouselSlides: FeaturedSlide[] = [
  {
    id: 'bardana',
    image: '/assets/bardana/bardana-manual-09.jpg',
    alt: {
      es: 'Bardana: «Aquí se come.» sobre los tres colores de la marca',
      en: 'Bardana: “Aquí se come.” on the brand’s three colours',
    },
    category: { es: 'IDENTIDAD DE MARCA', en: 'BRAND IDENTITY' },
    tone: '#efe9df',
  },
  {
    id: 'kings-tavern',
    image: '/assets/kop/kop-kt-sports-lh.png',
    alt: {
      es: 'Kings Tavern: «Hook ’em.» para el game day de los Longhorns',
      en: 'Kings Tavern: “Hook ’em.” for Longhorns game day',
    },
    category: { es: 'CONTENIDO VISUAL', en: 'VISUAL CONTENT' },
    tone: '#181818',
  },
  {
    id: 'motion-centre',
    image: '/assets/motion-centre/mc-manual-17.jpg',
    alt: {
      es: 'Motion Centre: anatomía de las formas de la marca',
      en: 'Motion Centre: anatomy of the brand’s shapes',
    },
    category: { es: 'IDENTIDAD DE MARCA', en: 'BRAND IDENTITY' },
    tone: '#ffffff',
  },
  {
    id: 'iamonemind',
    image: '/assets/iamonemind/iam-post-184.png',
    alt: {
      es: 'iamonemind: «Don’t buy these strips»',
      en: 'iamonemind: “Don’t buy these strips”',
    },
    category: { es: 'CONTENIDO VISUAL', en: 'VISUAL CONTENT' },
    tone: '#f3dbe8',
  },
]

// Home "Qué hago": work grouped by area, brands as proof inside each area.
// Illustration & animation (Kymsul's origin) returns once pieces exist.
export type AreaPiece = {
  /** Project the piece links to. */
  id: string
  /** Optional image for this row (stronger piece than the case cover). */
  image?: string
  /** Optional hand-written name (defaults to the project name). */
  label?: string
}

export type WorkArea = {
  key: string
  title: { es: string; en: string }
  pieces: AreaPiece[]
  /** Where "see more" goes: a /proyectos filter value or a page path. */
  more: { href: string; label: { es: string; en: string } }
}

export const workAreas: WorkArea[] = [
  {
    key: 'identidad',
    title: { es: 'Identidad de marca', en: 'Brand identity' },
    pieces: [
      { id: 'zealix', image: '/assets/zealix/zealix-manual-mockup.jpg' },
      { id: 'bardana' },
      { id: 'motion-centre' },
    ],
    more: {
      href: '/proyectos?area=branding',
      label: { es: 'Más proyectos de identidad', en: 'More identity projects' },
    },
  },
  {
    key: 'contenido',
    title: { es: 'Contenido y motion', en: 'Content and motion' },
    pieces: [
      // Spurs Night is a Kings Tavern piece, so it signs as Kings Tavern.
      { id: 'kings-tavern', image: '/assets/kop/kop-kt-sports-spurs.png' },
      { id: 'bwl', image: '/assets/bwl/bwl-drs-skin-sos-1.png' },
      { id: 'sin-yolanda' },
      { id: 'beatness' },
      { id: 'amorcito' },
    ],
    more: {
      href: '/proyectos?area=social',
      label: { es: 'Más proyectos de contenido', en: 'More content projects' },
    },
  },
  {
    key: 'ia',
    title: { es: 'Producción con IA', en: 'AI production' },
    // One case, several pieces from it; each signed by its brand.
    pieces: [
      { id: 'ai-creative', image: '/assets/ia/ia-ad22-final-still.jpg', label: 'BWL' },
      { id: 'ai-creative', image: '/assets/kop/kop-kt-329.png', label: "King's Tavern" },
      { id: 'ai-creative', image: '/assets/ia/ia-avance-qq-despues.png', label: 'Avance' },
      { id: 'ai-creative', image: '/assets/amx/amx-c99-1.png', label: 'AseguraMax' },
      { id: 'ai-creative', image: '/assets/iamonemind/iam-post-177.png', label: 'iamonemind' },
    ],
    more: {
      href: '/ia',
      label: { es: 'Cómo trabajo con IA', en: 'How I work with AI' },
    },
  },
]
