import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/projects'
import ProjectDetailView from '@/components/ProjectDetailView'

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

type Props = { params: Promise<{ id: string }> }

function getProjectSeoTitle(project: { id: string; name: string }) {
  const titles: Record<string, string> = {
    zealix: 'Brand Identity Case Study',
    brainy: 'Brand Identity Case Study',
    beatness: 'Social Content & Motion Case Study',
    kop: 'Motion & Social Media Case Study',
    bwl: 'AI-Native Content Production Case Study',
    'activated-decor': 'Rebranding & Motion Case Study',
    procyon: 'Brand Identity & Esports Case Study',
    'ai-creative': 'AI-Native Creative Workflows Case Study',
    'corazon-mixteco': 'Social Content & Art Direction Case Study',
    amorcito: 'Social Content & Motion Case Study',
  }

  return `${project.name} — ${titles[project.id] ?? 'Creative Case Study'}`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = getProject(id)
  if (!project) return {}
  const desc = project.overview.slice(0, 155)
  const title = getProjectSeoTitle(project)
  return {
    title,
    description: desc,
    keywords: [
      project.name,
      'Kimberly Tapia Rubio',
      'kymsul',
      ...project.tags,
      'Brand & Content Designer',
      'Visual systems',
      'Motion graphics',
      'AI-native workflows',
      'Creative production',
    ],
    openGraph: {
      title: `${title} — kymsul`,
      description: desc,
      images: [{ url: project.image, alt: project.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — kymsul`,
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
