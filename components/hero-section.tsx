"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/components/LanguageContext"

export default function HeroSection() {
  const { language } = useLanguage()
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section className="w-full py-20 md:py-28 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-600">
              {language === "en" ? "Empowering SMEs with AI Solutions" : "Entfalten Sie das Potential von KI in Ihrem Unternehmen"}
            
            </h1>
            <p className="text-xl text-blue-100 max-w-[600px]">
            {language === "en" ? 
            "We implement the latest AI technology directly from university into your business processes, dramatically increasing your efficiency." : 
            "Wir implementieren neueste KI-Technologie direkt von der Uni in Ihren Geschäftsabläufen und steigern so drastisch Ihre Effizienz."}
            </p>
            <div className="pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md"
              onClick={scrollToContact}
              >
                {language === "en" ? "Get in Touch" : "Kontakt aufnehmen"}  
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-blue-900/30">
            <Image
              src="/groupimage.jpg?height=500&width=600"
              alt="Founder Team"
              fill
              className="object-cover rounded-lg image-render-pixel"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

