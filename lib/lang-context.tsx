'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Lang } from './translations'

type LangContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextValue>({
  lang: 'es',
  setLang: () => {},
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  // Read from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('kymsul-lang')
      if (stored === 'es' || stored === 'en') setLangState(stored)
    } catch {}
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    try {
      localStorage.setItem('kymsul-lang', l)
    } catch {}
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
