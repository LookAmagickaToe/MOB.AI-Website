import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ValuePropositionSection() {
  const valuePoints = [
    {
      title: "Tailored AI Solutions",
      description:
        "We develop custom AI solutions that address your specific business challenges, ensuring relevance and immediate impact.",
    },
    {
      title: "Implementation Support",
      description:
        "Our team provides end-to-end implementation support, from initial assessment to deployment and staff training.",
    },
    {
      title: "Ongoing Optimization",
      description:
        "We continuously monitor and optimize your AI solutions to ensure they evolve with your business needs and technological advancements.",
    },
  ]

  return (
    <section className="w-full py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-400">Our Value Proposition</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden border border-blue-900/30">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Value Proposition"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-10">
            {valuePoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{point.title}</h3>
                  <p className="text-blue-100">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

