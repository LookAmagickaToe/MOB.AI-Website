import { Card, CardContent } from "@/components/ui/card"
import { BarChartIcon as ChartBar, TrendingUp, AlertCircle } from "lucide-react"

export default function ProblemStatementSection() {
  const stats = [
    {
      value: "70%",
      label: "of SMEs cite lack of technical know-how as the primary barrier to AI adoption",
      icon: <AlertCircle className="h-8 w-8 text-blue-500" />,
    },
    {
      value: "83%",
      label: "of SMEs believe AI could give them a competitive advantage",
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    },
    {
      value: "62%",
      label: "of small businesses can't afford specialized AI talent",
      icon: <ChartBar className="h-8 w-8 text-blue-500" />,
    },
  ]

  return (
    <section className="relative w-full py-20">
      <div className="relative z-10 container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">
              The AI Adoption Challenge for SMEs
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-blue-100">
                Small and medium enterprises struggle to implement AI solutions despite their transformative potential.
              </p>
              <p className="text-xl text-blue-100">
                The cost of hiring specialized AI talent is prohibitive for most small businesses, creating an innovation gap between enterprises and SMEs.
              </p>
              <p className="text-xl text-blue-100">
                Without accessible AI solutions, SMEs risk falling behind in efficiency, customer experience, and market competitiveness in an increasingly AI-driven economy.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm border border-blue-900/30 card-relief">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {stat.icon}
                    <div>
                      <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                      <p className="text-blue-100">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

