import ProjectCard from './ProjectCard'
import { projects } from '@/lib/projects'

export default function Portfolio() {
  const [zealix, brainy, beatness, nerdheart, nomada] = projects

  return (
    <section id="portafolio" className="px-24 pt-16 pb-0">
      <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-8">
        PORTAFOLIO
      </p>

      {/* Row 1: Zealix (wide) + BrainyBudzz */}
      <div className="flex gap-6 mb-6">
        <ProjectCard {...zealix} className="flex-[728_1_0%] h-[524px]" />
        <ProjectCard {...brainy} className="flex-[496_1_0%] h-[524px]" />
      </div>

      {/* Row 2: Beatness full-width */}
      <div className="mb-6">
        <ProjectCard {...beatness} className="w-full h-[604px]" />
      </div>

      {/* Row 3: NerdHeart + Nómada (wide) */}
      <div className="flex gap-6">
        <ProjectCard {...nerdheart} className="flex-[496_1_0%] h-[524px]" />
        <ProjectCard {...nomada} className="flex-[728_1_0%] h-[524px]" />
      </div>
    </section>
  )
}
