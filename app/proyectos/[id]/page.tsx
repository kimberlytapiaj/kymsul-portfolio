import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/projects'
import ProjectDetailView from '@/components/ProjectDetailView'

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

type Props = { params: Promise<{ id: string }> }

export default async function CasoPage({ params }: Props) {
  const { id } = await params
  const project = getProject(id)
  if (!project) notFound()
  return <ProjectDetailView project={project} />
}
