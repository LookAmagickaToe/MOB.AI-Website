"use client"
import { useLanguage } from "@/components/LanguageContext"

export default function OurApproach() {
    const { language } = useLanguage()
    const benefits = [
      {
        titlegerman:"1. Erstgespräch",
        textgerman:"Wir beginnen mit einem unverbindlichen Gespräch, um Ihre aktuelle Situation zu verstehen und herauszufinden, wo der Einsatz von AI Agents in Ihrem Unternehmen sinnvoll wäre.",
        title: "1. Initial Consultation",
        text: "We start with a non-binding conversation to understand your current situation and identify where the use of AI agents would make the most sense in your company.",
      },
      {
        titlegerman:"2. Workshop",
        textgerman:"Gemeinsam nehmen wir Ihre Geschäftsprozesse genau unter die Lupe und entwickeln auf Basis der Analyse einen optimierten Zielprozess mit maßgeschneiderten Lösungen.",
        
        title: "2. Workshop",
        text: "Together, we take a close look at your business processes and, based on this analysis, develop an optimized target process with tailored solutions.",
      },
      {
        titlegerman:"3. Umsetzung",
        textgerman:"Nach Ihrer Freigabe setzen wir die Lösungen schrittweise um, entwickeln die benötigen Agents und implementieren sie  – immer in enger Abstimmung mit Ihnen.",
        
        title: "3. Implementation",
        text: "Once approved, we implement the solutions step by step, develop the necessary agents, and integrate them into your operations – always in close coordination with you.",
      },
    ]
  
    return (
      <section className="w-full py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center text-blue-400">{language  === "en" ? 
          "We don’t just build solutions for you — we build them with you, every step of the way."
          : "Wir entwickeln unser Lösungen nicht an Ihnen vorbei, sondern gemeinsam mit Ihnen."}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="border border-blue-900/30 rounded-lg p-6 bg-card/90 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{language === "en" ? benefit.title : benefit.titlegerman}</h3>
                <p className="text-blue-100">{language === "en" ? benefit.text : benefit.textgerman}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  