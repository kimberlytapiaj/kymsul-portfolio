import type { Metadata } from 'next'
import type { Lang } from './translations'
import { localePath } from './locale'
export const SITE = 'https://kymsul.art'
const pages: Record<string, Record<Lang, [string, string]>> = {
  '/': {
    en: [
      'Kimberly Tapia Rubio — Creative Designer',
      'Brand identity, visual content and motion graphics by Kimberly Tapia Rubio. Selected projects and creative processes from Mexico.',
    ],
    es: [
      'Kimberly Tapia Rubio — Creative Designer · Branding y dirección de arte',
      'Identidad de marca, contenido visual y motion graphics por Kimberly Tapia Rubio. Proyectos seleccionados y procesos creativos desde México.',
    ],
  },
  '/proyectos': {
    en: [
      'Selected work',
      'Brand identity, social content and motion design case studies by Kimberly Tapia Rubio. Explore the brief, process and final pieces.',
    ],
    es: [
      'Proyectos seleccionados',
      'Casos de identidad de marca, contenido social y motion design de Kimberly Tapia Rubio. Explora el contexto, el proceso y las piezas finales.',
    ],
  },
  '/archivo': {
    en: ['Archive', 'Every piece by Kimberly Tapia Rubio in one place: branding, content, illustration, animation and more.'],
    es: ['Archivo', 'Todo el trabajo de Kimberly Tapia Rubio en un solo lugar: branding, contenido, ilustración, animación y más.'],
  },
  '/sobre-mi': {
    en: [
      'About Kimberly Tapia Rubio',
      'Brand and content designer based in Mexico. Experience, capabilities and education across visual systems, motion and creative production.',
    ],
    es: [
      'Sobre Kimberly Tapia Rubio',
      'Diseñadora de marca y contenido en México. Experiencia, capacidades y formación en sistemas visuales, motion y producción creativa.',
    ],
  },
  '/ia': {
    en: [
      'AI in the creative process',
      'Examples of AI-assisted creative workflows: brand documentation, image and video production, motion automation and format adaptation.',
    ],
    es: [
      'IA en el proceso creativo',
      'Ejemplos de procesos creativos con IA: documentación de marca, producción de imagen y video, automatización de motion y adaptación de formatos.',
    ],
  },
}
export function pageMetadata(
  lang: Lang,
  path: string,
  custom?: { title: string; description: string; image?: string },
): Metadata {
  const [title, description] = custom
    ? [custom.title, custom.description]
    : pages[path][lang]
  const url = SITE + localePath(path, lang)
  const image = custom?.image || '/opengraph-image'
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: SITE + localePath(path, 'en'),
        'es-MX': SITE + localePath(path, 'es'),
        'x-default': SITE + localePath(path, 'en'),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Kymsul',
      locale: lang === 'es' ? 'es_MX' : 'en_US',
      alternateLocale: lang === 'es' ? 'en_US' : 'es_MX',
      type: 'website',
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
