import Link from 'next/link'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

type ProjectCardProps = {
  id: string
  name: string
  category: string
  year: string
  image: string
  tagline: string
  accentColor?: string
  className?: string
  images?: string[]
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
  images,
}: ProjectCardProps) {
  const hasCollage = images && images.length >= 2

  return (
    <Link href={`/proyectos/${id}`} className={`overflow-hidden flex flex-col cursor-pointer group ${className}`}>
      <div className="relative flex-1 overflow-hidden">
        {hasCollage ? (
          <div className="flex h-full" style={{ gap: '2px' }}>
            <div className="flex-[64] overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex-[36] flex flex-col" style={{ gap: '2px' }}>
              <div className="flex-1 overflow-hidden">
                <img
                  src={images[0]}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <img
                  src={images[1]}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}

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
          <div className="min-w-0">
            <p className="font-fraunces text-[22px] text-dark leading-none" style={WONK}>
              {name}
            </p>
            <p className="font-sans text-[12px] text-muted mt-1.5 leading-snug">
              {tagline}
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-[5px] pt-0.5">
            <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] text-right">{category}</p>
            <p className="font-mono text-[10px] text-muted2">{year}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
