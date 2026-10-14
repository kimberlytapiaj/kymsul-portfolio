// Builds lib/media-index.json, the compact lookup that client components ship.
// media-manifest.json stays the full record for the media scripts.
// Entry: "/assets/" stripped from the key → "file|width|height|variantWidths|poster".
import fs from 'node:fs/promises'

const manifest = JSON.parse(await fs.readFile('lib/media-manifest.json', 'utf8'))
const strip = (src) => src.replace(/^\/media\//, '')
const index = {}
for (const [key, m] of Object.entries(manifest)) {
  const file = strip(m.src)
  const [hash] = file.split(/[-.]/)
  const ext = file.split('.').pop()
  const widths = (m.variants || []).map((v) => {
    if (v.src !== `/media/${hash}-${v.width}.${ext}`) throw new Error(`Unexpected variant ${v.src} in ${key}`)
    return v.width
  })
  const parts = [file, m.width ?? '', m.height ?? '', widths.join(','), m.poster ? strip(m.poster) : '']
  while (parts.at(-1) === '') parts.pop()
  index[key.replace(/^\/assets\//, '')] = parts.join('|')
}
await fs.writeFile('lib/media-index.json', JSON.stringify(index))
console.log(`media-index: ${Object.keys(index).length} entries`)
