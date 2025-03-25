"use client"

import { useLanguage } from "@/components/LanguageContext"
import Link from "next/link"

export default function ImpressumPage() {
  const { language } = useLanguage()

  const isGerman = language === "de"

  return (
    <>
      <header className="w-full py-4 px-6 border-b border-blue-900/20 bg-background">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-blue-400 hover:underline">
            ← {isGerman ? "Zurück zur Startseite" : "Back to Homepage"}
          </Link>
        </div>
      </header>

    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">
        {isGerman ? "Impressum" : "Legal Notice"}
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {isGerman ? "Angaben gemäß § 5 TMG" : "Information according to § 5 TMG"}
        </h2>
        <p>
          Maxime Christian<br />
          Lichtenbergstraße 6<br />
          85748 Garching<br />
          {isGerman ? "Deutschland" : "Germany"}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {isGerman ? "Kontakt" : "Contact"}
        </h2>
        <p>
          {isGerman ? "Telefon" : "Phone"}: +49 174 6247815<br />
          E-Mail: maxime.christian@manageandmore.de
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {isGerman
            ? "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"
            : "Responsible for content according to § 55 Abs. 2 RStV"}
        </h2>
        <p>
          Maxime Christian<br />
          Lichtenbergstraße 6<br />
          85748 Garching
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          {isGerman ? "Haftungsausschluss" : "Disclaimer"}
        </h2>
        <p className="mb-4">
          {isGerman
            ? "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich."
            : "Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content."}
        </p>
        <p>
          {isGerman
            ? "Diese Website dient ausschließlich zu Informationszwecken. Die Inhalte wurden mit größter Sorgfalt erstellt, jedoch übernehmen wir keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität."
            : "This website is for informational purposes only. The content has been created with the utmost care, but we assume no responsibility for the accuracy, completeness, or timeliness of the information."}
        </p>
      </section>
    </main>
    </>
  )
}
