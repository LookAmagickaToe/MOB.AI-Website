"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ImpressumPage() {
	const isGerman = true;

	return (
		<>
			<header className="w-full py-4 px-4 border-b border-muted">
				<div className="max-w-6xl mx-auto">
					<Button variant="link" className="uppercase" asChild>
						<Link href="/">← Zurück zur Startseite</Link>
					</Button>
				</div>
			</header>

			<main className="md:max-w-2xl mx-auto md:py-16 md:px-6 p-6">
				<h1 className="text-center mb-2">Impressum</h1>

				<section className="text-muted-foreground md:text-base text-sm mb-4 text-left">
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

				<section className="text-muted-foreground md:text-base text-sm mb-4 text-left">
					<h2 className=" mb-2">{isGerman ? "Kontakt" : "Contact"}</h2>
					<p>
						{isGerman ? "Telefon" : "Phone"}: +49 174 6247815
						<br />
						E-Mail: info@isarai.de
					</p>
				</section>

				<section className="text-muted-foreground md:text-base text-sm mb-4 text-left">
					<h2 className=" mb-2">{isGerman ? "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV" : "Responsible for content according to § 55 Abs. 2 RStV"}</h2>
					<p>
						Maxime Christian
						<br />
						Lichtenbergstraße 6<br />
						85748 Garching
					</p>
				</section>

				<section className="text-muted-foreground md:text-base text-sm mb-4 text-left">
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
				<section id="datenschutz" className="text-muted-foreground md:text-base text-sm mb-4 text-left mt-12">
					<h2 className=" mb-2">{isGerman ? "Datenschutzerklärung" : "Privacy Policy"}</h2>
					<p className="mb-4">
						{isGerman
							? "Diese Website verwendet keine eigenen Cookies und erhebt keine personenbezogenen Daten ohne Ihre Zustimmung."
							: "This website does not use its own cookies and does not collect personal data without your consent."}
					</p>
					<p className="mb-4">
						{isGerman
							? "Wir verwenden jedoch eingebettete Inhalte von Drittanbietern, insbesondere den Kalenderdienst Cal.com. Beim Laden dieser Inhalte können durch Cal.com zu Authentifizierungszwecken Cookies gesetzt und personenbezogene Daten verarbeitet werden."
							: "However, we use embedded content from third parties, in particular the calendar service Cal.com. When loading this content, cookies may be set and personal data may be processed by Cal.com for authentication purposes."}
					</p>
					<p>
						{isGerman ? "Weitere Informationen finden Sie in der Datenschutzerklärung von Cal.com: " : "For more information, please refer to Cal.com’s privacy policy: "}
						<a href="https://cal.com/de/privacy" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">
							https://cal.com/de/privacy
						</a>
					</p>
				</section>
			</main>
		</>
	);
}
