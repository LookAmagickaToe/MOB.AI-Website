"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { useLanguage } from "@/components/LanguageContext"

export default function UseCasesSection() {
  const { language } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const useCases = [
    {
      title: "📞 Customer Service & Support",
      titleGerman: "📞 Kundenservice & Support",
      description: "Automate customer service and support with chatbots and AI-driven solutions.",
      descriptionGerman: "Automatisieren Sie den Kundenservice und -support mit Chatbots und KI-gestützten Lösungen.",
      image: "/chatbot.png?height=200&width=300",
    },
    {
      title: "📄 Knowledge Management",
      titleGerman:"📄 Wissens-Management",
      descriptionGerman: "Organisieren, zentralisieren und entsperren Sie das Wissen Ihres Unternehmens - KI-Agenten helfen, Informationen effizient zu erfassen, zu strukturieren und abzurufen.",
      description: "Organize, centralize, and unlock your company’s knowledge — AI agents help capture, structure, and retrieve information efficiently.",
      image: "/knowledge_management.png?height=200&width=300",
    },
    {
      title: "📋 Database Maintenance",
      titleGerman:"📋 Datenbankpflege",
      descriptionGerman: "Automatisieren Sie Dateneingabe-, Bereinigungs- und Wartungsaufgaben, um Datenqualität und -konsistenz sicherzustellen.", 
      description: "Automate data entry, cleaning, and maintenance tasks to ensure data quality and consistency.",
      image: "/database.png?height=fill&width=auto",
    },
    {
      title: "📅 Appointment Scheduling",
      titleGerman:"📅 Termin-management",
      descriptionGerman: "Automatisierte Terminplanung und -erinnerungen, um Ausfälle zu reduzieren und die Kundenzufriedenheit zu verbessern.",
      description: "Automate appointment scheduling and reminders to reduce no-shows and improve customer satisfaction.",
      image: "/scheduling.png?height=200&width=300",
    },
    {
      title: "💬 Marketing & Content Creation",
      titleGerman:"💬 Marketing & Content-Erstellung",
      descriptionGerman: "Autoatisierte erstellung von personalisierten Marketing-Inhalten, Verwaltung von Social Media und Automatisierung von Content-Erstellung.",
      description:  "Generate personalized marketing content, manage social media, and automate content creation.",
      image: "/contentcreation.png?height=200&width=300",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -current.offsetWidth / 2 : current.offsetWidth / 2
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="w-full py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400">{language === "en" ? "Example Use Cases" : "Beispiel Anwendungen"}</h2>
          {!isMobile && (
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="border-blue-500 text-blue-400 hover:bg-blue-900/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="border-blue-500 text-blue-400 hover:bg-blue-900/20"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          )}
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-6 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[350px] bg-card border border-blue-900/30 card-relief"
            >
              <div className="relative h-[100px] w-full mt-5">
                <Image
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.title}
                  fill
                  className="object-contain rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{language === "en" ? useCase.title : useCase.titleGerman}</h3>
                <p className="text-blue-100">{language === "en" ? useCase.description : useCase.descriptionGerman}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

