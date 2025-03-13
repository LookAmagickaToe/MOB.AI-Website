"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "de">("en")
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en")
  }

  const navItems = [
    { name: language === "en" ? "Home" : "Startseite", href: "#" },
    { name: language === "en" ? "Services" : "Dienstleistungen", href: "#" },
    { name: language === "en" ? "Team" : "Team", href: "#" },
    { name: language === "en" ? "Use Cases" : "Anwendungsfälle", href: "#" },
    { name: language === "en" ? "Contact" : "Kontakt", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/20 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image src="/placeholder.svg?height=32&width=32" alt="Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-semibold text-blue-400">AI Founders</span>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm font-medium text-blue-100 hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-blue-500 text-blue-400 hover:bg-blue-900/20"
            >
              {language === "en" ? "DE" : "EN"}
            </Button>

            {/* Mobile Menu Button */}
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden text-blue-400">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
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

