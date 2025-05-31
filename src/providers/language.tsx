"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "de"

interface LanguageContextProps {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("de")

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "de" : "en"))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}
