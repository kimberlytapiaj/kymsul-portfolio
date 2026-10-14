import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'
import { localePath } from '@/lib/locale'
import { SITE } from '@/lib/seo'
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/proyectos',
    '/archivo',
    '/ia',
    '/sobre-mi',
    // ai-creative redirects to /ia (next.config.ts), so it isn't listed.
    ...projects.filter((p) => p.id !== 'ai-creative').map((p) => `/proyectos/${p.id}`),
  ]
  return paths.flatMap((path) =>
    (['en', 'es'] as const).map((lang) => ({
      url: SITE + localePath(path, lang),
      alternates: {
        languages: {
          en: SITE + localePath(path, 'en'),
          'es-MX': SITE + localePath(path, 'es'),
        },
      },
    })),
  )
}
