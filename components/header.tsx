"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { Roboto } from "next/font/google"
import { useLanguage } from "@/components/LanguageContext"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()
  const { language, toggleLanguage } = useLanguage()

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/20 backdrop-blur-md bg-background/80">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex h-16 items-center justify-between">
        {/* Group logo and text together */}
        <div className="flex items-center space-x-2">
          <div className="relative h-16 w-auto aspect-[2/1]">
            <Image
              src="/isarailogo.png"
              alt="ISAR AI Logo"
              fill
              className="rounded-lg object-contain"
              priority
            />
          </div>
          <span   className="h-full flex items-center font-semibold text-blue-600 text-[55px] leading-none">AI</span>
        </div>
          <div className="flex items-center gap-4">
          
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-soft-white rounded-md" size="sm"
              onClick={scrollToContact}
              >
                {language === "en" ? "Get in Touch" : "Kontakt aufnehmen"}  
              </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-blue-500 text-soft-white"
            >
              {language === "en" ? "DE" : "EN"}
            </Button>

          </div>
        </div>
      </div>
    </header>
  )
}

