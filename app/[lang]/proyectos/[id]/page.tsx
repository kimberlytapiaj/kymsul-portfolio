import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/projects'
import { applyTranslation } from '@/lib/localize-project'
import { pageMetadata, SITE } from '@/lib/seo'
import { localePath } from '@/lib/locale'
import { mediaUrl } from '@/lib/media'
import type { Lang } from '@/lib/translations'
import ProjectDetailView from '@/components/ProjectDetailView'
type Props = { params: Promise<{ id: string; lang: Lang }> }
export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}
export async function generateMetadata({ params }: Props) {
  const { id, lang } = await params
  const source = getProject(id)
  if (!source) return {}
  const p = applyTranslation(source, lang)
  return pageMetadata(lang, `/proyectos/${id}`, {
    // The /proyectos layout sets its own title, so the root template doesn't reach here.
    title: `${p.name} · ${lang === 'es' ? 'Caso de diseño' : 'Design case study'} — Kymsul`,
    description: p.tagline,
    image: mediaUrl(p.image),
  })
}
export default async function CasePage({ params }: Props) {
  const { id, lang } = await params
  const source = getProject(id)
  if (!source) notFound()
  const project = applyTranslation(source, lang)
  const url = SITE + localePath(`/proyectos/${id}`, lang)
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.tagline,
    url,
    image: new URL(mediaUrl(project.image), SITE).href,
    inLanguage: lang,
    creator: { '@type': 'Person', name: 'Kimberly Tapia Rubio', url: SITE },
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, '\\u003c'),
        }}
      />
      {/* The long texts (overview, process, result) stay in lib/projects.ts for
          CV and interviews; the page doesn't show them, so they aren't sent. */}
      <ProjectDetailView project={{ ...project, overview: '', process: '', result: '' }} />
    </>
  )
}
