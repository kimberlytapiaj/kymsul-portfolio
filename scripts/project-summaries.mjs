import fs from 'node:fs'
import ts from 'typescript'
function readModule(path) {
  const module = { exports: {} }
  new Function(
    'exports',
    ts.transpileModule(fs.readFileSync(path, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    }).outputText,
  )(module.exports)
  return module.exports
}
const { projects } = readModule('lib/projects.ts')
const { projectTranslationsEN } = readModule('lib/project-translations.ts')
const summaries = projects.map(
  ({ id, name, category, year, image, tagline, accentColor, agency, brand }) => ({
    id,
    name,
    category,
    year,
    image,
    tagline,
    accentColor,
    agency,
    plate: brand?.plate,
    taglineEN: projectTranslationsEN[id]?.tagline || tagline,
  }),
)
fs.writeFileSync(
  'lib/project-summaries.json',
  JSON.stringify(summaries, null, 2) + '\n',
)
