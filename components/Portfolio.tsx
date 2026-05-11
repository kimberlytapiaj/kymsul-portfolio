import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 'zealix',
    name: 'Zealix',
    category: 'BRANDING',
    year: '2025',
    image: '/assets/thumbnail-zealix.png',
    accentColor: 'white',
    wide: true,
  },
  {
    id: 'brainy',
    name: 'BrainyBudzz',
    category: 'BRANDING · UX UI',
    year: '2025',
    image: '/assets/thumbnail-brainy.png',
    accentColor: 'white',
    wide: false,
  },
  {
    id: 'beatness',
    name: 'Beatness',
    category: 'SOCIAL MEDIA',
    year: '2024',
    image: '/assets/thumbnail-beatness.png',
    accentColor: 'white',
    fullWidth: true,
  },
  {
    id: 'nerdheart',
    name: 'NerdHeart',
    category: 'MOTION',
    year: '2024',
    image: '/assets/thumbnail-tierra.png',
    accentColor: '#d6cc94',
    wide: false,
  },
  {
    id: 'nomada',
    name: 'Nómada',
    category: 'BRAND · WEB',
    year: '2024',
    image: '/assets/thumbnail-nomada.png',
    accentColor: '#c7b8ff',
    wide: true,
  },
]

export default function Portfolio() {
  const [zealix, brainy, beatness, nerdheart, nomada] = projects

  return (
    <section id="portafolio" className="px-24 pt-16 pb-0">
      <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-8">
        PORTAFOLIO
      </p>

      {/* Row 1: Zealix (wide) + BrainyBudzz */}
      <div className="flex gap-6 mb-6">
        <ProjectCard
          {...zealix}
          className="flex-[728_1_0%] h-[524px]"
        />
        <ProjectCard
          {...brainy}
          className="flex-[496_1_0%] h-[524px]"
        />
      </div>

      {/* Row 2: Beatness full-width */}
      <div className="mb-6">
        <ProjectCard
          {...beatness}
          className="w-full h-[604px]"
        />
      </div>

      {/* Row 3: NerdHeart + Nómada (wide) */}
      <div className="flex gap-6">
        <ProjectCard
          {...nerdheart}
          className="flex-[496_1_0%] h-[524px]"
        />
        <ProjectCard
          {...nomada}
          className="flex-[728_1_0%] h-[524px]"
        />
      </div>
    </section>
  )
}
