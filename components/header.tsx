"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { Space_Grotesk } from "next/font/google"
import { useLanguage } from "@/components/LanguageContext"


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
          <div className="flex items-center gap-2">
            <span className="text-4xl font-audiowide text-blue-600">MOB.AI</span>
          </div>

          <div className="flex items-center gap-4">
          
            <Button className="bg-blue-600 hover:bg-blue-700 text-soft-white rounded-md" size="sm"
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

        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-900/20">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-blue-100 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

