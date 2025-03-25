"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BarChartIcon as ChartBar, TrendingUp, AlertCircle } from "lucide-react"
import { useLanguage } from "@/components/LanguageContext"
import { use } from "react"

export default function ProblemStatementSection() {
  const { language } = useLanguage()
  const stats = [
    {
      valuegerman: "40% Leistungssteigerung",
      labelgerman: "KI kann die Leistung hochqualifizierter Arbeitskräfte um fast 40% steigern im Vergleich zu Mitarbeitern, die sie nicht nutzen",
      value: "40% performance boost",
      label: "AI can boost the performance of highly skilled workers by nearly 40% compared to employees who do not use it.",
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      source: "– Harvard Business School –",
      link: "https://mitsloan.mit.edu/ideas-made-to-matter/how-generative-ai-can-boost-highly-skilled-workers-productivity",

    },
    {
      valuegerman: "Know-How als Hürde bei 70% der KMUs",
      labelgerman: "70% der KMUs in Deutschland nennen fehlendes technisches Know-how als größtes Hindernis bei der KI-Einführung.",
      value: "70% of SMEs cite Know-How as Hurdle",
      label: "in Germany cite a lack of technical expertise as the biggest obstacle to adopting AI.",
      icon: <AlertCircle className="h-8 w-8 text-blue-500" />,
      source: "– Harvard Business School –",
      link: "https://www.mittelstand-digital.de/MD/Redaktion/DE/Publikationen/ki-Studie-2023.pdf?__blob=publicationFile&v=4",

    },
  ]

  return (
    <section className="relative w-full py-20">
      <div className="relative z-10 container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">
            {language === "en" ? 
            "The Cost Advantage of AI Is Too Great to Ignore" : 
            "Der Kostenvorteil durch KI ist zu groß, um ignoriert zu werden."
            }
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-blue-100">
                {language === "en" ? 
                "Small and medium-sized enterprises (SMEs) face a decisive challenge: the integration of Artificial Intelligence (AI) is no longer optional but increasingly vital for survival." : 
                "Der Mittelstand steht vor einer entscheidenden Herausforderung: Die Integration von Künstlicher Intelligenz (KI) ist nicht mehr optional, sondern zunehmend überlebenswichtig. "
                }
              </p>
              <p className="text-xl text-blue-100">
                {language === "en" ?
                "The cost of hiring specialized AI talent is prohibitive for most small businesses, creating an innovation gap between enterprises and SMEs." :
                "Die Kosten für die Einstellung spezialisierter KI-Fachkräfte sind für die meisten kleinen Unternehmen zu hoch – das schafft eine Innovationslücke zwischen Großunternehmen und dem Mittelstand."}
              </p>
              <p className="text-xl text-blue-100">
                {language === "en" ?
                "Without accessible AI solutions, SMEs risk falling behind in efficiency, customer experience, and market competitiveness in an increasingly AI-driven economy." :
                "Ohne zugängliche KI-Lösungen drohen KMUs in einer zunehmend KI-getriebenen Wirtschaft in den Bereichen Effizienz, Kundenerlebnis und Wettbewerbsfähigkeit zurückzufallen."}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <a
                key={index}
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-[1.02]"
              >
              <Card key={index} className="bg-card/90 backdrop-blur-sm border border-blue-900/30 card-relief">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {stat.icon}
                    <div>
                      <div className="text-3xl font-bold text-blue-400 mb-2">{language === "en" ? stat.value : stat.valuegerman}</div>
                        <p className="text-blue-100">{language === "en" ? stat.label : stat.labelgerman}</p>
                        <p className="text-sm text-gray-400 mt-1 italic">{stat.source}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

