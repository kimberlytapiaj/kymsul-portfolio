import ProjectCard from './ProjectCard'
import { projects } from '@/lib/projects'

export default function Portfolio() {
  const [zealix, brainy, beatness, kop, castaReal, nerdheart, nomada, bwl] = projects

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
          images={['/assets/zealix/zealix-05.png', '/assets/zealix/zealix-08.png']}
        />
        <ProjectCard
          {...brainy}
          className="flex-[496_1_0%] h-[524px]"
          images={['/assets/brainy/brainy-02.png', '/assets/brainy/brainy-04.png']}
        />
      </div>

      {/* Row 2: Beatness full-width */}
      <div className="mb-6">
        <ProjectCard
          {...beatness}
          className="w-full h-[604px]"
          images={['/assets/beatness/beatness-02.jpg', '/assets/beatness/beatness-04.jpg']}
        />
      </div>

      {/* Row 3: KOP + Casta Real */}
      <div className="flex gap-6 mb-6">
        <ProjectCard
          {...kop}
          className="flex-[496_1_0%] h-[524px]"
          images={['/assets/kop/kop-02.png', '/assets/kop/kop-08.png']}
        />
        <ProjectCard
          {...castaReal}
          className="flex-[728_1_0%] h-[524px]"
          images={['/assets/casta-real/cr-05.jpg', '/assets/casta-real/cr-13.jpg']}
        />
      </div>

      {/* Row 4: NerdHeart + BWL (nomada var = projects[6] = BWL) */}
      <div className="flex gap-6 mb-6">
        <ProjectCard
          {...nerdheart}
          className="flex-[496_1_0%] h-[524px]"
          images={['/assets/nerdheart/nerdheart-02.gif', '/assets/nerdheart/nerdheart-04.gif']}
        />
        <ProjectCard
          {...nomada}
          className="flex-[728_1_0%] h-[524px]"
          images={['/assets/bwl/bwl-11.png', '/assets/bwl/bwl-13.png']}
        />
      </div>

      {/* Row 5: La Cabaña full-width (bwl var = projects[7] = La Cabaña) */}
      <div>
        <ProjectCard
          {...bwl}
          className="w-full h-[604px]"
          images={['/assets/nomada/nomada-03.png', '/assets/nomada/nomada-05.png']}
        />
      </div>
    </section>
  )
}
