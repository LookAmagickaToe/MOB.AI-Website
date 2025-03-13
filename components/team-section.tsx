import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export default function TeamSection() {
  const founders = [
    {
      name: "Alex Johnson",
      role: "CEO & AI Strategist",
      bio: "Former Google AI researcher with 10+ years of experience in machine learning and business strategy.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "CTO & Lead Engineer",
      bio: "MIT graduate with expertise in developing scalable AI solutions for enterprise clients.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "COO & Implementation Lead",
      bio: "Business transformation specialist with a track record of successful technology implementations in SMEs.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="w-full py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-400">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col bg-card rounded-lg overflow-hidden border border-blue-900/30">
              <div className="relative h-64 w-full">
                <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-blue-400">{founder.name}</h3>
                  <div className="relative h-8 w-8">
                    <Image
                      src="/placeholder.svg?height=32&width=32&text=College"
                      alt="College logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-blue-500 font-medium mb-4">{founder.role}</p>
                <p className="text-blue-100 mb-6 flex-grow">{founder.bio}</p>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 border-blue-500 text-blue-400 hover:bg-blue-900/20"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

