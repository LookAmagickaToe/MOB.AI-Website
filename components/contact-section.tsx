"use client"

import { useState, useEffect } from "react"
import { getCookieConsentValue } from "react-cookie-consent"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/LanguageContext"

export default function ContactSection() {
  const { language } = useLanguage()
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)

  // Load Calendly only if cookie consent is given
  useEffect(() => {
    const consent = getCookieConsentValue()

    if (consent === "true" && !document.querySelector("#calendly-script")) {
      const script = document.createElement("script")
      script.id = "calendly-script"
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.onload = () => setCalendlyLoaded(true)
      document.body.appendChild(script)
    } else if (consent === "true") {
      // Script already loaded previously
      setCalendlyLoaded(true)
    }
  }, [])

  // Initialize Calendly widgets once script is loaded
useEffect(() => {
  if (calendlyLoaded) {
    const interval = setInterval(() => {
      if (window.Calendly && typeof window.Calendly.initInlineWidgets === "function") {
        window.Calendly.initInlineWidgets()
        clearInterval(interval)
      }
    }, 100)
    // Safety timeout
    setTimeout(() => clearInterval(interval), 3000)
  }
}, [calendlyLoaded])


  return (
    <section className="w-full py-20" id="contact">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-400">
          {language === "en" ? "Get in Touch" : "Kontakt aufnehmen"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-9 text-blue-300">
              {language === "en" ? "Contact Information" : "Kontaktinformation"}
            </h3>
            <div className="space-y-8">
              <Card className="bg-card border border-blue-900/30 card-relief">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg text-blue-300">Email</h4>
                    <p className="overflow-auto whitespace-nowrap text-blue-100">
                      kontakt@isarai.de
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-blue-900/30 card-relief">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg text-blue-300">
                      {language === "en" ? "Phone" : "Telefon"}
                    </h4>
                    <p className="text-blue-100">+49 174 624 78 15</p>
                  </div>
                </CardContent>
              </Card>

              <Card
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/search/?api=1&query=Lichtenbergstraße+6,+85748+Garching+bei+München",
                    "_blank"
                  )
                }
                className="bg-card border border-blue-900/30 card-relief cursor-pointer hover:bg-blue-950/20 transition"
              >
                <CardContent className="p-4 flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg text-blue-300">
                      {language === "en" ? "Mail Address" : "Anschrift"}
                    </h4>
                    <p className="text-blue-100">
                      Lichtenbergstraße 6, 85748 Garching bei München
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <a href="mailto:info@isarai.de">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md w-full">
                  {language === "en" ? "Send us a Message" : "Sende uns eine Nachricht"}
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-300">
              {language === "en" ? "Schedule a Meeting" : "Buche ein Treffen"}
            </h3>

            {getCookieConsentValue() === "true" ? (
              <>
                {/* Calendly script loads inline only after consent */}
                <script
                  id="calendly-inline-script"
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                ></script>
                <div
                  className="calendly-inline-widget bg-card border border-blue-900/30 rounded-2xl p-1 overflow-hidden"
                  data-url="https://calendly.com/maxime-christian-manageandmore/30min?hide_event_type_details=1"
                  style={{ minWidth: "320px", height: "440px" }}
                />
              </>
            ) : (
              <div className="flex items-center justify-center h-[440px] border border-blue-900/30 bg-card/30 rounded-2xl px-6 text-center text-blue-300">
                {language === "en" ? (
                  <>
                    To book a meeting, please accept cookies at the bottom of the page.
                    <br />
                    You may need to refresh the page for the cookies to take effect.
                  </>
                ) : (
                  <>
                    Bitte akzeptieren Sie die Cookies, um ein Meeting direkt zu buchen.
                    <br />
                    Möglicherweise müssen Sie die Seite neu laden damit die Cookies wirksam werden.
                  </>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
