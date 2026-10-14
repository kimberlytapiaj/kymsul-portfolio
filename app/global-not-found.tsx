import type { Metadata } from 'next'
export const metadata: Metadata = {
  metadataBase: new URL('https://kymsul.art'),
  title: 'Page not found — Kymsul',
  robots: { index: false, follow: true },
}
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body style={{margin:0,background:'#fafaf8',color:'#0d0d0d',fontFamily:'system-ui,sans-serif'}}>
        <main style={{maxWidth:720,margin:'12vh auto',padding:32}}>
          <p>KYMSUL · 404</p>
          <h1 style={{fontSize:'clamp(36px,6vw,64px)'}}>This page is missing.</h1>
          <p lang="es">Esta página no existe o cambió de dirección.</p>
          <nav aria-label="Return to the portfolio" style={{display:'flex',gap:24,marginTop:32}}>
            <a href="/" style={{color:'inherit',padding:'12px 0'}}>Portfolio in English →</a>
            <a href="/es" lang="es" style={{color:'inherit',padding:'12px 0'}}>Portafolio en español →</a>
          </nav>
        </main>
      </body>
    </html>
  )
}
