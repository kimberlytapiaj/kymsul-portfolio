/** A tile's name and its arrow: the last word never lets the arrow wrap alone. */
export default function NameArrow({ name }: { name: string }) {
  const i = name.lastIndexOf(' ')
  return (
    <>
      {i > 0 && name.slice(0, i + 1)}
      <span className="whitespace-nowrap">
        {name.slice(i + 1)} <span aria-hidden="true" className="related-arrow">⟶</span>
      </span>
    </>
  )
}
