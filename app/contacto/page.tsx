'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'

const WONK = { fontVariationSettings: "'SOFT' 0, 'WONK' 1" }

const projectTypes = ['Branding', 'Motion graphics', 'IA aplicada', 'Social media', 'Otro']

export default function ContactoPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    tipo: '',
    mensaje: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Crea tu form gratis en formspree.io y reemplaza el ID aquí
  const FORMSPREE_ID = 'YOUR_FORM_ID'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          tipo: form.tipo,
          mensaje: form.mensaje,
        }),
      })
      if (res.ok) setSent(true)
    } catch {
      // fallback: abre cliente de correo
      window.location.href = `mailto:kimberly.tapiaj@gmail.com?subject=Proyecto: ${form.tipo}&body=${encodeURIComponent(form.mensaje)}`
    }
  }

  return (
    <PageLayout>
      {/* Header */}
      <section className="px-6 lg:px-24 pt-12 lg:pt-20 pb-12 lg:pb-20 border-b border-[rgba(13,13,13,0.08)]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] text-muted2 tracking-[1.76px] mb-6">
            CONTACTO
          </p>
          <p
            className="text-[clamp(48px,8vw,96px)] text-dark leading-[0.9]"
            style={{ fontFamily: 'var(--font-franklin-cond)' }}
          >
            ¿Hablamos?
          </p>
          <p
            className="font-fraunces font-light italic text-[clamp(48px,8vw,96px)] text-dark leading-[0.9]"
            style={WONK}
          >
            Cuéntame tu idea.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-24 py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24">
          {/* Form */}
          <div>
            {sent ? (
              <div className="py-24">
                <p
                  className="font-fraunces font-light italic text-[56px] text-dark mb-4"
                  style={WONK}
                >
                  Mensaje enviado.
                </p>
                <p className="font-sans text-[16px] text-muted">
                  Gracias por escribir. Revisaré tu mensaje y responderé en menos de 48 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Nombre */}
                <div>
                  <label className="font-mono text-[10px] text-muted2 tracking-[1.4px] block mb-2">
                    NOMBRE
                  </label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    className="w-full border-b border-[rgba(13,13,13,0.2)] bg-transparent py-3 font-sans text-[16px] text-dark placeholder:text-muted2/40 focus:outline-none focus:border-dark transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono text-[10px] text-muted2 tracking-[1.4px] block mb-2">
                    EMAIL
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full border-b border-[rgba(13,13,13,0.2)] bg-transparent py-3 font-sans text-[16px] text-dark placeholder:text-muted2/40 focus:outline-none focus:border-dark transition-colors"
                  />
                </div>

                {/* Tipo de proyecto */}
                <div>
                  <label className="font-mono text-[10px] text-muted2 tracking-[1.4px] block mb-3">
                    TIPO DE PROYECTO
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((tipo) => (
                      <button
                        key={tipo}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, tipo }))}
                        className={`border rounded-full px-4 py-2 font-sans text-[13px] transition-colors cursor-pointer ${
                          form.tipo === tipo
                            ? 'bg-dark text-bg border-dark'
                            : 'border-[rgba(13,13,13,0.15)] text-muted hover:border-dark/40'
                        }`}
                      >
                        {tipo}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="font-mono text-[10px] text-muted2 tracking-[1.4px] block mb-2">
                    MENSAJE
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntame de tu proyecto, objetivos y tiempos..."
                    className="w-full border-b border-[rgba(13,13,13,0.2)] bg-transparent py-3 font-sans text-[16px] text-dark placeholder:text-muted2/40 focus:outline-none focus:border-dark transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-dark text-bg font-sans text-[13px] rounded-full px-8 h-[50px] inline-flex items-center hover:opacity-80 transition-opacity"
                >
                  Enviar mensaje →
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:pl-8 border-t lg:border-t-0 lg:border-l border-[rgba(13,13,13,0.08)] pt-8 lg:pt-0">
            <div className="sticky top-24 space-y-12">
              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-4">
                  EMAIL
                </p>
                <a
                  href="mailto:kimberly.tapiaj@gmail.com"
                  className="font-sans text-[15px] text-dark hover:text-muted transition-colors"
                >
                  kimberly.tapiaj@gmail.com
                </a>
              </div>

              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-4">
                  TELÉFONO
                </p>
                <a
                  href="tel:+523318450381"
                  className="font-sans text-[15px] text-dark hover:text-muted transition-colors"
                >
                  +52 331 845 0381
                </a>
              </div>

              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-4">
                  UBICACIÓN
                </p>
                <p className="font-sans text-[15px] text-muted">Puebla, México</p>
                <p className="font-sans text-[13px] text-muted2 mt-1">Disponible para proyectos remotos</p>
              </div>

              <div>
                <p className="font-mono text-[10px] text-muted2 tracking-[1.4px] mb-4">
                  SOCIAL
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/kymsul/' },
                    { label: 'Behance',   href: 'https://www.behance.net/kimberlytapia2' },
                    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/kimberly-tapia-rubio-39a35828a/' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href !== '#' ? '_blank' : undefined}
                      rel={s.href !== '#' ? 'noopener noreferrer' : undefined}
                      className="block font-sans text-[15px] text-muted hover:text-dark transition-colors py-2"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border border-[rgba(13,13,13,0.12)] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <img src="/assets/dot-green.svg" alt="" className="w-[7px] h-[7px]" />
                  <span className="font-mono text-[10px] text-muted2 tracking-[1.4px]">DISPONIBLE</span>
                </div>
                <p className="font-sans text-[13px] text-muted leading-relaxed">
                  Reviso cada solicitud personalmente y respondo en menos de 48 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
