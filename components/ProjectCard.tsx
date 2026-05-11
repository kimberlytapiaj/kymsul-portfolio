import Link from 'next/link'
import Image from 'next/image'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

type ProjectCardProps = {
  id: string
  name: string
  category: string
  year: string
  image: string
  tagline?: string
  accentColor?: string
  className?: string
  sizes?: string
}

export default function ProjectCard({
  id,
  name,
  category,
  year,
  image,
  tagline,
  accentColor = 'white',
  className = '',
  sizes = '(max-width: 1440px) 55vw, 728px',
}: ProjectCardProps) {
  return (
    <Link href={`/proyectos/${id}`} className={`overflow-hidden flex flex-col cursor-pointer group ${className}`}>
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          quality={90}
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute bottom-0 left-0 right-0 h-11 bg-gradient-to-t from-black/60 to-transparent flex items-center px-5">
          <span
            className="font-mono text-[10px] tracking-[1.6px] flex-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: accentColor }}
          >
            VER CASO →
          </span>
          <span className="font-mono text-[10px] tracking-[1.4px] text-white/40">{year}</span>
        </div>
      </div>

      <div className="pt-[10px] pb-0">
        <div className="h-px bg-[rgba(13,13,13,0.08)] mb-[10px]" />
        <div className="flex items-start justify-between gap-6">
          <p className="font-fraunces text-[22px] text-dark" style={WONK}>
            {name}
          </p>
          <div className="shrink-0 flex items-baseline gap-4">
            <p className="font-mono text-[10px] text-muted2 tracking-[1.4px]">{category}</p>
            <p className="font-mono text-[10px] text-muted2">{year}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
