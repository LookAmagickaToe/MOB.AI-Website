"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ImpressumPage() {

	useEffect(() => {
		// Load iubenda script
		const script = document.createElement('script');
		script.src = 'https://cdn.iubenda.com/iubenda.js';
		script.async = true;
		document.head.appendChild(script);

		return () => {
			// Cleanup
			document.head.removeChild(script);
		};
	}, []);


	return (
		<>
			<header className="w-full py-4 px-4 border-b border-muted">
				<div className="max-w-6xl mx-auto">
					<Button variant="link" className="uppercase justify-center items-center" asChild>
						<Link href="/"><ArrowLeft className="size-4" /> Zurück</Link>
					</Button>
				</div>
			</header>

			<main className="md:max-w-2xl mx-auto md:py-16 md:px-6 p-6">
				<h1 className="text-center mb-2 md:mb-6">Impressum</h1>

				<section className="text-muted-foreground md:text-base text-sm mb-4 text-left">
					<h4 className=" mb-2">{"Angaben gemäß § 5 TMG"}</h4>
					<p>
						IsarAI UG (haftungsbeschränkt)
						<br />
						Breitensteinstrasse.6
						<br />
						82031 Grünwald
						<br />
						Handelsregister Amtsgericht München HRB 273699
						<br />
						Vertreten durch: Bruno Polster
						<br />
						E-Mail: info@isarai.de
					</p>
				</section>

				{/* <section className="text-muted-foreground md:text-base text-sm mb-4 text-left">
					<h4 className=" mb-2">{"Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"}</h4>
					<p>
						Bruno Polster
						<br />
						Breitensteinstrasse.6<br />
						82031 Grünwald
					</p>
				</section> */}

				<section className="text-muted-foreground md:text-base text-sm mb-4 text-left">
					<a href="https://www.iubenda.com/privacy-policy/89875941"
						className="iubenda-white iubenda-noiframe iubenda-embed"
						title="Datenschutzerklärung">
						Datenschutzerklärung
					</a>
				</section>

				{/* <section className="text-muted-foreground md:text-base text-sm mb-4 text-left">
					<h4 className=" mb-2">{"Haftungsausschluss"}</h4>
					<p className="mb-4">
						{"Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich."}
					</p>
					<p>
						{"Diese Website dient ausschließlich zu Informationszwecken. Die Inhalte wurden mit größter Sorgfalt erstellt, jedoch übernehmen wir keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität."}
					</p>
				</section>
				<section id="datenschutz" className="text-muted-foreground md:text-base text-sm mb-4 text-left mt-12">
					<h4 className=" mb-2">{"Datenschutzerklärung"}</h4>
					<p className="mb-4">
						{"Diese Website verwendet keine eigenen Cookies und erhebt keine personenbezogenen Daten ohne Ihre Zustimmung."}
							: "This website does not use its own cookies and does not collect personal data without your consent."}
					</p>
					<p className="mb-4">
						{"Wir verwenden jedoch eingebettete Inhalte von Drittanbietern, insbesondere den Kalenderdienst Cal.com. Beim Laden dieser Inhalte können durch Cal.com zu Authentifizierungszwecken Cookies gesetzt und personenbezogene Daten verarbeitet werden."}
					</p>
					<p>
						{"Weitere Informationen finden Sie in der Datenschutzerklärung von Cal.com: "}
						<a href="https://cal.com/de/privacy" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">
							https://cal.com/de/privacy
						</a>
					</p>
				</section> */}
			</main>
		</>
	);
}
