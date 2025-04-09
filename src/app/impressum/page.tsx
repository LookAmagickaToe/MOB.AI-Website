"use client";

import { useLanguage } from "@/providers/language";
import Link from "next/link";

export default function ImpressumPage() {
	const { language } = useLanguage();

	const isGerman = language === "de";

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
				<h1>{isGerman ? "Impressum" : "Legal Notice"}</h1>

				<section className="mb-8">
					<h2 className=" mb-2">{isGerman ? "Angaben gemäß § 5 TMG" : "Information according to § 5 TMG"}</h2>
					<p>
						Maxime Christian
						<br />
						Lichtenbergstraße 6<br />
						85748 Garching
						<br />
						{isGerman ? "Deutschland" : "Germany"}
					</p>
				</section>

				<section className="mb-8">
					<h2 className=" mb-2">{isGerman ? "Kontakt" : "Contact"}</h2>
					<p>
						{isGerman ? "Telefon" : "Phone"}: +49 174 6247815
						<br />
						E-Mail: info@isarai.de
					</p>
				</section>

				<section className="mb-8">
					<h2 className=" mb-2">{isGerman ? "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV" : "Responsible for content according to § 55 Abs. 2 RStV"}</h2>
					<p>
						Maxime Christian
						<br />
						Lichtenbergstraße 6<br />
						85748 Garching
					</p>
				</section>

				<section>
					<h2 className=" mb-2">{isGerman ? "Haftungsausschluss" : "Disclaimer"}</h2>
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
				<section id="datenschutz" className="mt-12">
					<h2 className=" mb-2">{isGerman ? "Datenschutzerklärung" : "Privacy Policy"}</h2>
					<p className="mb-4">
						{isGerman
							? "Diese Website verwendet keine eigenen Cookies und erhebt keine personenbezogenen Daten ohne Ihre Zustimmung."
							: "This website does not use its own cookies and does not collect personal data without your consent."}
					</p>
					<p className="mb-4">
						{isGerman
							? "Wir verwenden jedoch eingebettete Inhalte von Drittanbietern, insbesondere den Kalenderdienst Calendly. Beim Laden dieser Inhalte können durch Calendly Cookies gesetzt und personenbezogene Daten verarbeitet werden. Die Nutzung des eingebetteten Kalenders erfolgt freiwillig."
							: "However, we use embedded third-party content, particularly the calendar service Calendly. When these contents are loaded, Calendly may set cookies and process personal data. Using the embedded calendar is voluntary."}
					</p>
					<p>
						{isGerman ? "Weitere Informationen finden Sie in der Datenschutzerklärung von Calendly: " : "For more information, please refer to Calendly’s privacy policy: "}
						<a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">
							https://calendly.com/privacy
						</a>
					</p>
				</section>
			</main>
		</>
	);
}
