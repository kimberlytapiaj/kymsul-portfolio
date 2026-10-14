import { type CSSProperties } from 'react'
import Link from '@/components/LocaleLink'
import Image from '@/components/MediaImage'
import PageLayout from '@/components/PageLayout'
import LazyVideo from '@/components/LazyVideo'
import CTABand from '@/components/CTABand'
import CompareSlider from '@/components/CompareSlider'
import FlowPiles from '@/components/FlowPiles'
import projects from '@/lib/project-summaries.json'
import type { Lang } from '@/lib/translations'
import NameArrow from '@/components/NameArrow'

/**
 * How Kimberly works with AI, told with real before/after pairs and little
 * text: one job end to end, five flows, where judgment decides, and the
 * brands made this way. Rebuilt 11 oct 2026 (replaces the long text page and
 * the "Sistema Creativo IA" case, which now redirects here).
 */
type L = { es: string; en: string }
const t = (v: L, lang: 'es' | 'en') => v[lang]
const isVideo = (s: string) => /\.(mp4|webm)$/i.test(s)

type Flow = {
  name: L
  line: L
  tools: string[]
  before: string
  after: string
  // Everything the viewer walks through, in order, with its caption.
  steps: { src: string; caption: L }[]
}


const FLOWS: Flow[] = [
  {
    name: { es: 'Brief y marca', en: 'Brief and brand' },
    line: { es: 'La llamada, la investigación y las referencias se vuelven un documento de marca; de ahí sale el manual.', en: 'The call, the research and the references become a brand document; the manual comes out of it.' },
    tools: ['Obsidian', 'Claude Code', 'Codex'],
    before: '/assets/bardana/bardana-manual-02.jpg',
    after: '/assets/bardana/bardana-manual-09.jpg',
    steps: [
      { src: '/assets/bardana/bardana-manual-02.jpg', caption: { es: 'Antes · el brief · Bardana', en: 'Before · the brief · Bardana' } },
      { src: '/assets/bardana/bardana-manual-09.jpg', caption: { es: 'Después · el sistema aplicado · Bardana', en: 'After · the system applied · Bardana' } },
      { src: '/assets/motion-centre/mc-manual-06.jpg', caption: { es: 'Antes · misión y visión · Motion Centre', en: 'Before · mission and vision · Motion Centre' } },
      { src: '/assets/motion-centre/mc-manual-17.jpg', caption: { es: 'Después · las figuras de la marca · Motion Centre', en: 'After · the brand figures · Motion Centre' } },
    ],
  },
  {
    name: { es: 'Motion con /reel', en: 'Motion with /reel' },
    line: { es: 'Mi skill arma el primer corte en Remotion; lo rechazo o lo dirijo hasta la pieza final en After Effects.', en: 'My skill builds the first cut in Remotion; I reject it or direct it to the final piece in After Effects.' },
    tools: ['Claude Code', 'Remotion', 'After Effects'],
    before: '/assets/ia/ia-sy031-remotion.mp4',
    after: '/assets/sin-yolanda/sy-now-hiring.mp4',
    steps: [
      { src: '/assets/ia/ia-sy031-remotion.mp4', caption: { es: 'Antes · primer corte de Remotion (rechazado) · Sin Yolanda', en: 'Before · first Remotion cut (rejected) · Sin Yolanda' } },
      { src: '/assets/sin-yolanda/sy-now-hiring.mp4', caption: { es: 'Después · versión final · Sin Yolanda', en: 'After · final version · Sin Yolanda' } },
      { src: '/assets/ia/ia-kop026-storyboard.png', caption: { es: 'Antes · storyboard · KOP', en: 'Before · storyboard · KOP' } },
      { src: '/assets/kop/kop-sponsors-tv.mp4', caption: { es: 'Después · spot para pantallas · KOP', en: 'After · screen spot · KOP' } },
      { src: '/assets/ia/ia-kt331-storyboard.jpg', caption: { es: "Antes · storyboard de /reel · Kings Tavern", en: "Before · /reel storyboard · Kings Tavern" } },
      { src: '/assets/ia/ia-kt331-final.mp4', caption: { es: "Después · reel final · Kings Tavern", en: "After · final reel · Kings Tavern" } },
      { src: '/assets/ia/ia-kop317-storyboard.jpg', caption: { es: "Antes · primera dirección (rechazada) · KOP", en: "Before · first direction (rejected) · KOP" } },
      { src: '/assets/ia/ia-kop317-final.mp4', caption: { es: "Después · reel final · KOP", en: "After · final reel · KOP" } },
      { src: '/assets/ia/ia-kt307-storyboard.png', caption: { es: "Antes · storyboard V1 (rechazado) · Kings Tavern", en: "Before · V1 storyboard (rejected) · Kings Tavern" } },
      { src: '/assets/kop/kop-kt-307.mp4', caption: { es: "Después · menú de la semana · Kings Tavern", en: "After · menu of the week · Kings Tavern" } },
      { src: '/assets/ia/ia-ktad03-storyboard.jpg', caption: { es: "Antes · storyboard · Kings Tavern Ad 03", en: "Before · storyboard · Kings Tavern Ad 03" } },
      { src: '/assets/kop/kop-kt-ad-03.mp4', caption: { es: "Después · anuncio final · Kings Tavern Ad 03", en: "After · final ad · Kings Tavern Ad 03" } },
      { src: '/assets/ia/ia-iam195-storyboard.jpg', caption: { es: "Antes · storyboard · iamonemind", en: "Before · storyboard · iamonemind" } },
      { src: '/assets/iamonemind/iam-post-195.mp4', caption: { es: "Después · reel final · iamonemind", en: "After · final reel · iamonemind" } },
      { src: '/assets/ia/ia-sy19-storyboard.jpg', caption: { es: "Antes · storyboard · Sin Yolanda", en: "Before · storyboard · Sin Yolanda" } },
      { src: '/assets/sin-yolanda/sy-post-19.mp4', caption: { es: "Después · reel The Woodlands · Sin Yolanda", en: "After · The Woodlands reel · Sin Yolanda" } },
    ],
  },
  {
    name: { es: 'Video generativo', en: 'Generative video' },
    line: { es: 'Dirijo la actuación con prompt, genero los clips y los monto con copy, ritmo y cierre de marca.', en: 'I direct the performance by prompt, generate the clips and cut them with copy, pacing and a brand close.' },
    tools: ['Gemini', 'Remotion', 'After Effects'],
    before: '/assets/ia/ia-bwl111-gemini.mp4',
    after: '/assets/bwl/bwl-111.mp4',
    steps: [
      { src: '/assets/ia/ia-bwl111-gemini.mp4', caption: { es: 'Antes · clip generado · BWL', en: 'Before · generated clip · BWL' } },
      { src: '/assets/bwl/bwl-111.mp4', caption: { es: 'Después · reel final · BWL', en: 'After · final reel · BWL' } },
      { src: '/assets/bwl/bwl-71-ai-juice-web.mp4', caption: { es: 'Antes · clip generado · Optrimax', en: 'Before · generated clip · Optrimax' } },
      { src: '/assets/bwl/bwl-post-71-en-web.mp4', caption: { es: 'Después · reel final · Optrimax', en: 'After · final reel · Optrimax' } },
      { src: '/assets/ia/ia-bwlad20-gemini.mp4', caption: { es: 'Antes · clip generado · Avance', en: 'Before · generated clip · Avance' } },
      { src: '/assets/bwl/bwl-ad-20.mp4', caption: { es: 'Después · anuncio final · Avance', en: 'After · final ad · Avance' } },
      { src: '/assets/bwl/bwl-77-ai-product-reel-web.mp4', caption: { es: 'Antes · clip generado · Avance', en: 'Before · generated clip · Avance' } },
      { src: '/assets/bwl/bwl-post-77-web.mp4', caption: { es: 'Después · reel final · Avance', en: 'After · final reel · Avance' } },
      { src: '/assets/bwl/bwl-79-ai-sunbeam-web.mp4', caption: { es: "Antes · clip generado · DR's Secret", en: "Before · generated clip · DR's Secret" } },
      { src: '/assets/bwl/bwl-post-79-web.mp4', caption: { es: "Después · reel final · DR's Secret", en: "After · final reel · DR's Secret" } },
      { src: '/assets/ia/ia-ad22-juiced-producto.png', caption: { es: "Antes · producto real · BWL Ad 22", en: "Before · real product · BWL Ad 22" } },
      { src: '/assets/ia/ia-ad22-escena-03-pour.png', caption: { es: "Escena generada para animar", en: "Generated scene to animate" } },
      { src: '/assets/bwl/bwl-ad-22.mp4', caption: { es: "Anuncio final", en: "Final ad" } },
      { src: '/assets/ia/ia-iam191-gemini.mp4', caption: { es: "Antes · clip generado · iamonemind", en: "Before · generated clip · iamonemind" } },
      { src: '/assets/iamonemind/iam-post-191.mp4', caption: { es: "Después · reel final · iamonemind", en: "After · final reel · iamonemind" } },
      { src: '/assets/ia/ia-iam186-placa.png', caption: { es: "Antes · placa con el producto real · Aware", en: "Before · plate with the real product · Aware" } },
      { src: '/assets/ia/ia-iam186-clip.mp4', caption: { es: "Clip generado desde la placa", en: "Clip generated from the plate" } },
      { src: '/assets/iamonemind/iam-post-186.mp4', caption: { es: "Reel final", en: "Final reel" } },
      { src: '/assets/ia/ia-elp11-placa.png', caption: { es: "Antes · imagen para animar · Sin Yolanda", en: "Before · image to animate · Sin Yolanda" } },
      { src: '/assets/sin-yolanda/sy-elp-11.mp4', caption: { es: "Después · reel casete · Sin Yolanda", en: "After · cassette reel · Sin Yolanda" } },
    ],
  },
  {
    name: { es: 'Imagen generativa', en: 'Generative image' },
    line: { es: 'Escenas nuevas desde fotos reales del lugar y producto integrado sin tocar el packaging; yo elijo y retoco.', en: 'New scenes from real photos of the place and products placed without touching the packaging; I choose and retouch.' },
    tools: ['Gemini', 'ImageGen', 'Photoshop'],
    before: '/assets/kop/kop-kt-original-01.jpg',
    after: '/assets/kop/kop-kt-184.png',
    steps: [
      { src: '/assets/kop/kop-kt-original-01.jpg', caption: { es: 'Antes · foto original · Kings Tavern', en: 'Before · original photo · Kings Tavern' } },
      { src: '/assets/kop/kop-kt-184.png', caption: { es: 'Después · post final · Kings Tavern', en: 'After · final post · Kings Tavern' } },
      { src: '/assets/amx/amx-raster-slide-01.png', caption: { es: 'Antes · base generada · AseguraMax', en: 'Before · generated base · AseguraMax' } },
      { src: '/assets/amx/amx-c61-final-01.png', caption: { es: 'Después · dirección de arte · AseguraMax', en: 'After · art direction · AseguraMax' } },
      { src: '/assets/ia/ia-kop322-original.jpg', caption: { es: 'Antes · foto real · KOP', en: 'Before · real photo · KOP' } },
      { src: '/assets/ia/ia-kop322-escena.png', caption: { es: 'Después · escena generada en la misma cancha · KOP', en: 'After · scene generated on the same court · KOP' } },
      { src: '/assets/ia/ia-kop323-original.png', caption: { es: 'Antes · foto real · KOP', en: 'Before · real photo · KOP' } },
      { src: '/assets/kop/kop-post-323-1.png', caption: { es: 'Después · pala del patrocinador integrada · KOP', en: 'After · sponsor paddle placed in · KOP' } },
      { src: '/assets/ia/ia-avance-qq-antes.png', caption: { es: 'Antes · foto con producto · Avance', en: 'Before · product photo · Avance' } },
      { src: '/assets/ia/ia-avance-qq-despues.png', caption: { es: 'Después · retoque generativo · Avance', en: 'After · generative retouch · Avance' } },
      { src: '/assets/ia/ia-amx91-real.jpg', caption: { es: "Antes · foto real · AseguraMax", en: "Before · real photo · AseguraMax" } },
      { src: '/assets/amx/amx-c91-3.png', caption: { es: "Después · comida real aislada y puesta en la lámina · AseguraMax", en: "After · real food isolated and placed on the slide · AseguraMax" } },
      { src: '/assets/ia/ia-amx99-placa.png', caption: { es: "Antes · placa generada · AseguraMax", en: "Before · generated plate · AseguraMax" } },
      { src: '/assets/amx/amx-c99-1.png', caption: { es: "Después · portada del carrusel · AseguraMax", en: "After · carousel cover · AseguraMax" } },
      { src: '/assets/ia/ia-kt329-real.jpg', caption: { es: "Antes · foto real de una bebida · Kings Tavern", en: "Before · real photo of one drink · Kings Tavern" } },
      { src: '/assets/kop/kop-kt-329.png', caption: { es: "Después · tres bebidas reales en una escena · Kings Tavern", en: "After · three real drinks in one scene · Kings Tavern" } },
      { src: '/assets/ia/ia-sy-ladies-real.jpg', caption: { es: "Antes · foto del lugar · Sin Yolanda", en: "Before · photo of the venue · Sin Yolanda" } },
      { src: '/assets/sin-yolanda/sy-ladies-night.png', caption: { es: "Después · promo Ladies Night · Sin Yolanda", en: "After · Ladies Night promo · Sin Yolanda" } },
      { src: '/assets/ia/ia-iam177-v1.png', caption: { es: "Antes · primera versión · iamonemind", en: "Before · first version · iamonemind" } },
      { src: '/assets/iamonemind/iam-post-177.png', caption: { es: "Después · productos oficiales y retoque · iamonemind", en: "After · official products and retouch · iamonemind" } },
    ],
  },
  {
    name: { es: 'Formatos e idiomas', en: 'Formats and languages' },
    line: { es: 'Una pieza maestra y un script arman cada versión, formato e idioma; reviso una por una.', en: 'One master piece and a script build every version, format and language; I review each one.' },
    tools: ['Codex', 'Photoshop', 'Scripts'],
    before: '/assets/ia/ia-kt-longhorns-original.png',
    after: '/assets/kop/kop-kt-sports-lh.png',
    steps: [
      { src: '/assets/ia/ia-kt-longhorns-original.png', caption: { es: 'Antes · foto original · Kings Tavern', en: 'Before · original photo · Kings Tavern' } },
      { src: '/assets/kop/kop-kt-sports-lh.png', caption: { es: 'Longhorns', en: 'Longhorns' } },
      { src: '/assets/kop/kop-kt-sports-spurs.png', caption: { es: 'Spurs', en: 'Spurs' } },
      { src: '/assets/kop/kop-kt-sports-utsa.png', caption: { es: 'UTSA', en: 'UTSA' } },
      { src: '/assets/kop/kop-kt-sports-am.png', caption: { es: 'Texas A&M', en: 'Texas A&M' } },
      { src: '/assets/kop/kop-ai-assembled.png', caption: { es: 'Antes · pieza maestra · KOP', en: 'Before · master piece · KOP' } },
      { src: '/assets/kop/kop-wc-post.png', caption: { es: 'Post', en: 'Post' } },
      { src: '/assets/kop/kop-wc-story.png', caption: { es: 'Story', en: 'Story' } },
      { src: '/assets/kop/kop-wc-flyer.png', caption: { es: 'Flyer', en: 'Flyer' } },
      { src: '/assets/kop/kop-wc-tv.png', caption: { es: 'Pantalla TV', en: 'TV screen' } },
      { src: '/assets/bwl/bwl-drs-97-1.png', caption: { es: "Antes · carrusel en inglés · DR's Secret", en: "Before · English carousel · DR's Secret" } },
      { src: '/assets/bwl/bwl-drs-97-zh-1.png', caption: { es: "中文", en: "中文" } },
      { src: '/assets/bwl/bwl-drs-97-zh-2.png', caption: { es: "中文 · 2", en: "中文 · 2" } },
      { src: '/assets/bwl/bwl-drs-97-zh-3.png', caption: { es: "中文 · 3", en: "中文 · 3" } },
      { src: '/assets/bwl/bwl-111.mp4', caption: { es: "Antes · reel en inglés · BWL", en: "Before · English reel · BWL" } },
      { src: '/assets/bwl/bwl-111-zh.mp4', caption: { es: "Versión en chino por script · BWL", en: "Chinese version by script · BWL" } },
      { src: '/assets/sin-yolanda/sy-industry-night.mp4', caption: { es: "Antes · reel · Sin Yolanda", en: "Before · reel · Sin Yolanda" } },
      { src: '/assets/sin-yolanda/sy-industry-night-email.png', caption: { es: "Email de la misma campaña", en: "Email from the same campaign" } },
    ],
  },
]

// 03 · Ad 22, stage by stage (files from its Codex project folder).
const RUN: { n: string; kind: 'brief' | 'code' | 'media'; src: string; title: L; line: L }[] = [
  { n: '01', kind: 'brief', src: '', title: { es: 'La tarea', en: 'The task' }, line: { es: 'La skill lee Asana sin tocarla y arma el brief: objetivo, formato y copy literal.', en: 'The skill reads Asana without touching it and writes the brief: goal, format and literal copy.' } },
  { n: '02', kind: 'media', src: '/assets/ia/ia-ad22-styleframe-v1.png', title: { es: 'Dirección', en: 'Direction' }, line: { es: 'Primera propuesta, «Morning layers»: cuatro bandas de amanecer.', en: 'First proposal, “Morning layers”: four bands of sunrise.' } },
  { n: '03', kind: 'media', src: '/assets/ia/ia-juiced-escena.png', title: { es: 'Assets', en: 'Assets' }, line: { es: 'Primero lo propio; la IA solo genera placas vacías. El producto nunca se regenera.', en: 'Own assets first; AI only makes empty plates. The product is never regenerated.' } },
  { n: '04', kind: 'media', src: '/assets/ia/ia-ad22-preview-v3.png', title: { es: 'Preview y correcciones', en: 'Preview and fixes' }, line: { es: 'Preview en Remotion. Mi corrección: cuatro escenas distintas, una por banda.', en: 'Preview in Remotion. My fix: four different scenes, one per band.' } },
  { n: '05', kind: 'code', src: '', title: { es: 'Editable por script', en: 'Editable by script' }, line: { es: 'Con mi «pásalo a After», un script arma el proyecto con texto nativo y escenas reemplazables.', en: 'Once I say “move it to After”, a script builds the project with live text and swappable scenes.' } },
  { n: '06', kind: 'media', src: '/assets/ia/ia-ad22-qa-v5.png', title: { es: 'Revisión por cuadros', en: 'Frame check' }, line: { es: 'Cada versión se revisa por cuadros: texto, producto y áreas seguras.', en: 'Every version is checked frame by frame: text, product and safe areas.' } },
  { n: '07', kind: 'media', src: '/assets/bwl/bwl-ad-22.mp4', title: { es: 'Mi cierre', en: 'My close' }, line: { es: 'Genero los clips, hago los ajustes finales y exporto en After Effects.', en: 'I generate the clips, make the final adjustments and export in After Effects.' } },
]

/**
 * Groups a flow's steps into examples: each "Antes" step opens one, and the
 * steps after it (its "después", or the formats it became) belong to it.
 * The label is the brand, taken from the caption's last " · " segment.
 */
function units(steps: Flow['steps']) {
  const out: { from: number; items: Flow['steps']; label: (lang: 'es' | 'en') => string }[] = []
  steps.forEach((st, i) => {
    if (!out.length || st.caption.es.startsWith('Antes')) out.push({ from: i, items: [], label: () => '' })
    out[out.length - 1].items.push(st)
  })
  return out.map((u) => ({
    ...u,
    label: (lang: 'es' | 'en') => {
      const first = t(u.items[0].caption, lang)
      const last = t(u.items[u.items.length - 1].caption, lang)
      return (first.includes(' · ') ? first : last).split(' · ').pop() ?? ''
    },
  }))
}

// Server component: only the interactive pieces inside ship as client code.
export default async function IAPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  type Summary = (typeof projects)[number] & { plate?: string; agency?: string }
  const brands = (projects as Summary[]).filter((p) => p.agency === 'NexLaunch')

  return (
    <PageLayout>
      {/* ── Hero: text + a fan of finished pieces on a purple plate ── */}
      <section className="ed-wrap ai-hero">
        <div className="ai-hero-text">
          <p className="ed-label">{lang === 'es' ? 'Sistema creativo con IA' : 'Creative AI system'}</p>
          <h1 className="case-name">{lang === 'es' ? 'Cómo trabajo con IA' : 'How I work with AI'}</h1>
          <p className="ai-hero-line">
            {lang === 'es'
              ? 'La IA hace la primera base; la dirección de arte decide qué sirve, qué se ajusta y qué se descarta.'
              : 'AI makes the first draft; art direction decides what works, what changes and what goes.'}
          </p>
          <dl className="ai-facts">
            <div>
              <dt>{lang === 'es' ? 'Con qué' : 'With'}</dt>
              <dd>
                {lang === 'es'
                  ? 'Claude Code · Codex · Gemini · Higgsfield · Remotion · toda la suite de Adobe conectada a las IAs'
                  : 'Claude Code · Codex · Gemini · Higgsfield · Remotion · the full Adobe suite connected to the AIs'}
              </dd>
            </div>
            <div>
              <dt>{lang === 'es' ? 'En producción para' : 'In production for'}</dt>
              <dd>{brands.map((b) => b.name).join(' · ')}</dd>
            </div>
          </dl>
        </div>
        <div className="case-fan ai-hero-fan" style={{ '--plate': 'linear-gradient(157deg, #f1ecff 0%, #b9a0ed 45%, #5b3a9a 100%)' } as CSSProperties}>
          {['/assets/sin-yolanda/sy-ladies-night.png', '/assets/ia/ia-avance-qq-despues.png', '/assets/kop/kop-kt-329.png'].map((src, i) => (
            <figure key={src} className="case-fan-piece">
              <Image src={src} alt="" priority={i === 1} sizes={i === 1 ? '(max-width: 1023px) 50vw, 360px' : '(max-width: 1023px) 34vw, 260px'} />
            </figure>
          ))}
        </div>
      </section>

      {/* ── Opening compare: a generated scene and the real product in one frame ── */}
      <section className="ed-wrap ai-intro">
        <div className="ai-intro-text">
          <p className="ed-label">Optrimax Juiced · BWL</p>
          <h2 className="chapter-case-title">{lang === 'es' ? 'De la foto real al clip' : 'From the real photo to the clip'}</h2>
          <p className="ai-head-line">
            {lang === 'es'
              ? 'La foto real del producto y el clip generado con Veo que abre el reel de Optrimax.'
              : 'The real product photo and the clip generated with Veo that opens the Optrimax reel.'}
          </p>
        </div>
        <CompareSlider before="/assets/ia/ia-o71-foto.jpg" after="/assets/bwl/bwl-71-ai-gen-web.mp4" label="Optrimax Juiced" maxH="78vh" beforePosition="48% 50%" />
      </section>

      {/* ── 01 · One job end to end, on a dark band ── */}
      <section className="ai-dark">
        <div className="ed-wrap">
          <header className="ai-head">
            <p className="chapter-case-num">01</p>
            <h2 className="chapter-case-title">{lang === 'es' ? 'Un encargo, de punta a punta' : 'One job, end to end'}</h2>
            <p className="ai-head-line">
              {lang === 'es'
                ? 'Reel de Aware para iamonemind: de la lata real a una placa con la tira auténtica, de ahí al clip generado y al corte final con los hongos señalados.'
                : 'Aware reel for iamonemind: from the real tin to a plate with the actual strip, then the generated clip and the final cut with the mushrooms called out.'}
            </p>
          </header>
          <ol className="ai-journey is-four">
            {[
              { n: '01', kind: 'products', srcs: ['/assets/ia/ia-aware-producto.png'], label: { es: 'El producto real', en: 'The real product' } },
              { n: '02', kind: 'single', srcs: ['/assets/ia/ia-iam186-placa.png'], label: { es: 'Placa con la tira auténtica', en: 'Plate with the actual strip' } },
              { n: '03', kind: 'single', srcs: ['/assets/ia/ia-iam186-clip.mp4'], label: { es: 'Clip generado desde la placa', en: 'Clip generated from the plate' } },
              { n: '04', kind: 'single', srcs: ['/assets/iamonemind/iam-post-186.mp4'], label: { es: 'Reel final: gancho, ritmo y hongos', en: 'Final reel: hook, pacing and mushrooms' } },
            ].map((s, i) => (
              <li key={s.n}>
                <div className={`ai-journey-media is-${s.kind}${s.srcs.length === 1 ? " is-solo" : ""}`}>
                  {s.kind === 'single' ? (
                    isVideo(s.srcs[0]) ? <LazyVideo src={s.srcs[0]} className="ai-pair-video" /> : <Image src={s.srcs[0]} alt="" sizes="(max-width: 767px) 80vw, 320px" />
                  ) : (
                    s.srcs.map((src) => (
                      <span key={src} className="ai-journey-part">
                        <Image src={src} alt="" sizes="(max-width: 767px) 80vw, 320px" />
                      </span>
                    ))
                  )}
                </div>
                <p className="ai-journey-label">
                  <span className="ed-label">— {s.n}</span> {t(s.label, lang)}
                </p>
                {i < 3 && <span className="ai-journey-arrow" aria-hidden="true">⟶</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 02 · Five flows ── */}
      <section className="ed-wrap ai-block">
        <header className="ai-head">
          <p className="chapter-case-num">02</p>
          <h2 className="chapter-case-title">{lang === 'es' ? 'Cinco flujos' : 'Five flows'}</h2>
        </header>
        <FlowPiles
          piles={FLOWS.map((f) => ({
            name: t(f.name, lang),
            line: t(f.line, lang),
            tools: f.tools,
            examples: units(f.steps).map((u) => ({
              label: u.label(lang),
              before: { src: u.items[0].src, caption: t(u.items[0].caption, lang) },
              after: u.items.slice(1).map((it) => ({ src: it.src, caption: t(it.caption, lang) })),
            })),
          }))}
        />
      </section>

      {/* ── 03 · How a job runs: my NexLaunch skill in Codex, stage by stage, one real file per stage ── */}
      <section className="ed-wrap ai-block">
        <header className="ai-head">
          <p className="chapter-case-num">03</p>
          <h2 className="chapter-case-title">{lang === 'es' ? 'Cómo corre un encargo' : 'How a job runs'}</h2>
          <p className="ai-head-line">
            {lang === 'es'
              ? 'Mi skill de NexLaunch en Codex lleva cada pieza por etapas, de la tarea de Asana al editable. Avanza solo cuando apruebo. Así fue el Ad 22 de BWL.'
              : 'My NexLaunch skill in Codex takes each piece through stages, from the Asana task to the editable file. It only moves on when I approve. This is how BWL Ad 22 went.'}
          </p>
        </header>
        <ol className="ai-run">
          {RUN.map((st) => (
            <li key={st.n} className="ai-run-step">
              <div className={`ai-run-media is-${st.kind}`}>
                {st.kind === 'brief' ? (
                  <div className="ai-run-doc">
                    <p className="ed-label">Asana · BWL Ad 22</p>
                    <p>{lang === 'es' ? 'Objetivo: seguidores e interacción' : 'Goal: followers and engagement'}</p>
                    <p>Reel · 1080 × 1920 · 10 s</p>
                    <p className="ai-run-quote">“Protect your skin. Cleanse from within.”</p>
                    <p className="ed-label">CTA · Follow @bwl.northamerica</p>
                  </div>
                ) : st.kind === 'code' ? (
                  <pre className="ai-run-code">{`var main = app.project.items
  .addComp('BWL AD22 V5 MASTER',
    W, H, 1, D, FPS);

for (var i = 0; i < 4; i++) {
  var c = app.project.items
    .addComp('SCENE ' + (i + 1)
      + ' - ' + [...][i],
      984, 304, 1, D, FPS);
}

card('COPY 01 PROTECT',
  'Protect your skin.', 91, …);`}</pre>
                ) : isVideo(st.src) ? (
                  <LazyVideo src={st.src} className="ai-pair-video" />
                ) : (
                  <Image src={st.src} alt="" sizes="(max-width: 767px) 44vw, 260px" />
                )}
              </div>
              <p className="ai-run-label">
                <span className="ed-label">{st.n}</span> {t(st.title, lang)}
              </p>
              <p className="ai-run-line">{t(st.line, lang)}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 03 · Where judgment decides, on a light purple band ── */}
      <section className="ed-wrap ai-block ai-rules-band">
        <header className="ai-head">
          <p className="chapter-case-num">04</p>
          <h2 className="chapter-case-title">{lang === 'es' ? 'Dónde decide el criterio' : 'Where judgment decides'}</h2>
        </header>
        <ul className="ai-rules">
          {[
            [{ es: 'Elijo', en: 'I choose' }, { es: 'Qué sirve, qué se ajusta y qué se descarta. La mayoría de lo generado no llega a la pieza.', en: 'What works, what changes and what goes. Most of what is generated never reaches the piece.' }],
            [{ es: 'Dirijo', en: 'I direct' }, { es: 'Tono, encuadre, actuación y tipografía desde las guías de cada marca.', en: "Tone, framing, performance and type from each brand's guidelines." }],
            [{ es: 'Cierro', en: 'I finish' }, { es: 'Retoque, ritmo del corte y revisión de cada formato antes de entregar.', en: 'Retouching, cut pacing and a check of every format before delivery.' }],
          ].map(([h, p]) => (
            <li key={h.es}>
              <p className="ai-rule-title">{t(h, lang)}.</p>
              <p className="ai-rule-line">{t(p, lang)}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 04 · Brands made this way ── */}
      <section className="ed-wrap ai-block ai-end">
        <header className="ai-head">
          <p className="chapter-case-num">05</p>
          <h2 className="chapter-case-title">{lang === 'es' ? 'Hecho con este sistema' : 'Made with this system'}</h2>
          <p className="ai-head-line">
            {lang === 'es' ? 'Casi todo mi trabajo para NexLaunch sale de aquí. También este portafolio.' : 'Almost all my work for NexLaunch comes from here. So does this portfolio.'}
          </p>
        </header>
        <ul className="work-tiles">
          {brands.map((p) => (
            <li key={p.id}>
              <Link href={`/proyectos/${p.id}`} className="related-card work-tile">
                <span className="related-media" style={p.plate ? ({ '--plate': p.plate } as CSSProperties) : undefined}>
                  <Image src={p.image} alt="" sizes="(max-width: 767px) 44vw, 240px" />
                </span>
                <span className="related-name">
                  <NameArrow name={p.name} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>


      <CTABand />
    </PageLayout>
  )
}
