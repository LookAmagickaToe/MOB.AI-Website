"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"
import { useLanguage } from "@/components/LanguageContext"
import { link } from "fs"

export default function TeamSection() {
  const {language} = useLanguage()
  const founders = [
    {
      name: "Maxime Christian",
      biogerman : "Maxime ist Informatikstudent an der TUM und der Universität Cambridge UK. Er hat als Freelancer an mehreren Projekten für KMU gearbeitet, insbesondere im Bereich der Digitalisierung von Geschäftsprozessen.",
      bio: "Maxime is a computer science student at TUM and Cambridge University UK. He has been working as Freelancer on several projects for SME's especially in the field of Business process digitization.",
      image: "/maxime.png?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/maxime-christian-33189116b/",
      logos: ["/tum.png", "/cambridge.png"]
    },
    {
      name: "Oliver Sommer",
      biogerman : "Oliver studiert Software Systems an der Uni Zürich, ist leidenschaftlicher Entwickler und war zuvor CTO bei peeka.ai. Er hat bereits mehrere Unternehmen als Freelancer bei Software & KI Projekten unterstützt.",
      bio: "Oliver is studying Software Systems at the University of Zurich, is a passionate developer, and previously served as CTO at peeka.ai. He has already supported several companies as a freelancer on software and AI projects.",
      image: "/oliver.png?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/oli-sommer/",
      logos: ["/uzh.png", "/lmu.png"],
    },
    {
      name: "Bruno Polster",
      biogerman : "Bruno hat an der LMU und am King’s College in London studiert und sich hierbei auf die Schnittstelle zwischen Business und KI fokussiert. Parallel hat er bei mehreren Top-Startups in München im Product Management gearbeitet.",
      bio: "Bruno studied at LMU and King’s College London, focusing on the intersection of business and artificial intelligence. Alongside his studies, he worked in product management at several top startups in Munich.",
      image: "/bruno.png?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/bruno-polster/",
      logos: ["/lmu.png", "/kingscollege.png"],
    },
  ]

  return (
    <section className="w-full py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-400">{language ==="en" ? "Meet the Team" : "Das Team"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col bg-card rounded-lg overflow-hidden border border-blue-900/30 mx-auto w-full max-w-sm"
            >
              <div className="relative h-80 w-auto">
                <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-blue-400">{founder.name}</h3>
                  <div className="flex items-center gap-3 mt-auto pt-2">
                    {founder.logos?.map((logo, index) => (
                      <div key={index} className="h-6 w-auto">
                        <Image
                          src={logo}
                          alt="Affiliation logo"
                          className="h-full w-auto object-contain"
                          width={0} // required to avoid layout shift in Next.js 13+
                          height={0}
                          sizes="32px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-blue-100 mt-3 mb-5 flex-grow">{language === "en" ? founder.bio : founder.biogerman}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 border-blue-500 text-blue-400 hover:bg-blue-900/20"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

