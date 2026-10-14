import type { NextConfig } from 'next'
const routes = [
  '/',
  '/proyectos',
  '/proyectos/:id',
  '/archivo',
  '/ia',
  '/sobre-mi',
]
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Short links by area, for a CV or a message: everything in that area.
      ...[
        ['branding', 'branding'],
        ['motion', 'motion'],
        ['video', 'video'],
        ['edicion-de-video', 'video'],
        ['contenido', 'social'],
        ['content', 'social'],
        ['social-media', 'social'],
      ].flatMap(([path, area]) => [
        { source: `/${path}`, destination: `/proyectos?area=${area}`, permanent: false },
        { source: `/en/${path}`, destination: `/proyectos?area=${area}`, permanent: false },
        { source: `/es/${path}`, destination: `/es/proyectos?area=${area}`, permanent: false },
      ]),
      // The AI case now lives in /ia.
      { source: '/proyectos/ai-creative', destination: '/ia', permanent: true },
      { source: '/en/proyectos/ai-creative', destination: '/ia', permanent: true },
      { source: '/es/proyectos/ai-creative', destination: '/es/ia', permanent: true },
      // Retired pages: services now live in the home areas, contact in its closing.
      { source: '/servicios', destination: '/', permanent: true },
      { source: '/en/servicios', destination: '/', permanent: true },
      { source: '/es/servicios', destination: '/es', permanent: true },
      { source: '/en/contacto', destination: '/#contacto', permanent: true },
      { source: '/contacto', destination: '/#contacto', permanent: true },
      { source: '/es/contacto', destination: '/es#contacto', permanent: true },
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path+', destination: '/:path+', permanent: true },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: routes.map((source) => ({
        source,
        destination: `/en${source === '/' ? '' : source}`,
      })),
      afterFiles: [],
      fallback: [],
    }
  },
  async headers() {
    return [
      {
        source: '/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  experimental: {
    globalNotFound: true,
    preloadEntriesOnStart: false,
    turbopackFileSystemCacheForDev: false,
  },
  images: { qualities: [75, 90] },
}
export default nextConfig
