"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"

export default function UseCasesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const useCases = [
    {
      title: "Predictive Inventory Management",
      description: "AI-powered inventory forecasting that reduced stockouts by 35% for a retail chain.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Customer Support Automation",
      description: "Chatbot implementation that handled 60% of customer queries for a SaaS company.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Sales Forecasting",
      description: "Machine learning model that improved sales prediction accuracy by 40% for a distribution business.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Document Processing",
      description: "Automated document extraction system that reduced processing time by 75% for a legal firm.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Personalized Marketing",
      description:
        "AI-driven customer segmentation that increased campaign conversion rates by 28% for an e-commerce business.",
      image: "/placeholder.svg?height=200&width=300",
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400">Example Use Cases</h2>
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
              <div className="relative h-[200px] w-full">
                <Image
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{useCase.title}</h3>
                <p className="text-blue-100">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

