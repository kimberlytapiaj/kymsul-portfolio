import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/projects'
import ProjectDetailView from '@/components/ProjectDetailView'

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = getProject(id)
  if (!project) return {}
  const desc = project.overview.slice(0, 155)
  return {
    title: project.name,
    description: desc,
    openGraph: {
      title: `${project.name} — kymsul`,
      description: desc,
      images: [{ url: project.image, alt: project.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} — kymsul`,
      description: desc,
      images: [project.image],
    },
    alternates: { canonical: `/proyectos/${id}` },
  }
}

export default async function CasoPage({ params }: Props) {
  const { id } = await params
  const project = getProject(id)
  if (!project) notFound()
  return <ProjectDetailView project={project} />
}
