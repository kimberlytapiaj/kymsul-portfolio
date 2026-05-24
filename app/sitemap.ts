import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

const baseUrl = 'https://kymsul.art'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/proyectos', '/ia', '/sobre-mi', '/contacto'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/proyectos/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...projectRoutes]
}
