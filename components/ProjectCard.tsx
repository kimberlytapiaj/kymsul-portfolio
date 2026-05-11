const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

type ProjectCardProps = {
  name: string
  category: string
  year: string
  image: string
  accentColor?: string
  className?: string
}

export default function ProjectCard({
  name,
  category,
  year,
  image,
  accentColor = 'white',
  className = '',
}: ProjectCardProps) {
  return (
    <div className={`overflow-hidden flex flex-col cursor-pointer group ${className}`}>
      {/* Thumbnail */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay bar */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[rgba(13,13,13,0.45)] flex items-center px-5">
          <span
            className="font-mono text-[10px] tracking-[1.6px] flex-1"
            style={{ color: accentColor }}
          >
            VER CASO →
          </span>
          <span className="font-mono text-[10px] tracking-[1.4px] text-[rgba(255,255,255,0.4)]">
            {year}
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div className="pt-[10px] pb-0">
        <div className="h-px bg-[rgba(13,13,13,0.08)] mb-[10px]" />
        <div className="flex items-baseline justify-between">
          <p
            className="font-fraunces text-[22px] text-dark"
            style={WONK}
          >
            {name}
          </p>
          <p className="font-mono text-[10px] text-muted2 tracking-[1.4px]">
            {category}
          </p>
          <p className="font-mono text-[10px] text-muted2">
            {year}
          </p>
        </div>
      </div>
    </div>
  )
}
