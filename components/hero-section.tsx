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
    <>
      <section className="w-full pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tigh"style={{ color: '#0101FB' }}>
                {language === "en"
                  ? "Empowering SMEs with AI Solutions"
                  : "Entfalten Sie das Potential von KI in Ihrem Unternehmen"}
              </h1>
              <p className="text-xl text-blue-100 max-w-[600px]">
                {language === "en"
                  ? "We implement the latest AI technology directly from university into your business processes, dramatically increasing your efficiency."
                  : "Wir implementieren neueste KI-Technologie direkt von der Uni in Ihren Geschäftsabläufen und steigern so drastisch Ihre Effizienz."}
              </p>
              <div className="pt-4">
                <Button
                  className=" hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md" 
                  style={{ backgroundColor: '#0101FB' }}
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
  
      <section className="w-full py-10 ">
        <div className="container px-4 mb-15 md:px-6 mx-auto text-center">
          <p className="text-2xl md:text-3xl font-semibold text-blue-500 uppercase tracking-wide mb-10">
            {language === "en"
              ? "We are proud to be supported by"
              : "Wir sind stolz von"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-10">
            <Image
              src="/utum.png"
              alt="Unternehmertum"
              height={80}
              width={80}
              className="object-contain"
            />
            <Image
              src="/mm.png"
              alt="Manage and More"
              height={80}
              width={160}
              className="object-contain"
            />
            <Image
              src="/tum.png"
              alt="TUM"
              height={80}
              width={120}
              className="object-contain"
            />
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-blue-500 uppercase tracking-wide mb-10">
            {language === "en"
              ? ""
              : "unterstützt zu werden."}
          </p> 
        </div>
      </section>




    </>
  )
}  

