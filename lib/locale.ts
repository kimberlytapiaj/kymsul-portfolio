import type { Lang } from './translations'
export function withoutLocale(path: string) {
  return path.replace(/^\/(es|en)(?=\/|$)/, '') || '/'
}
export function localePath(path: string, lang: Lang) {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  // Keep a #fragment out of the locale logic so '/#contacto' becomes '/es#contacto'.
  const [route, hash] = path.split(/(?=#)/)
  const clean = withoutLocale(route)
  return (lang === 'es' ? `/es${clean === '/' ? '' : clean}` : clean) + (hash ?? '')
}
/** A case's address; the AI system lives on its own page, not as a case. */
export function caseHref(id: string) {
  return id === 'ai-creative' ? '/ia' : `/proyectos/${id}`
}
