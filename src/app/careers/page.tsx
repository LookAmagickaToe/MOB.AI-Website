import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
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
				<section className="mb-16">
					<h1 className="text-center mb-2">Karriere</h1>
					<p className="text-muted-foreground md:text-lg text-sm mb-4 md:text-center text-justify">
						Wir sind begeistert davon, Code zu schreiben, der das Leben von Millionen von Menschen beeinflusst und sich auf Milliarden von Euros auswirkt. Wenn du genauso
						denkst, freuen wir uns darauf, von dir zu hören:
					</p>
					<p className="mb-6 text-center text-sky-500">
						<a href="mailto:jobs@isarai.de" className=" hover:underline font-medium">
							info@isarai.de
						</a>
					</p>
					<p className="text-muted-foreground md:text-lg text-sm mb-4 md:text-center text-justify">
						Wir bringen fundierte Kenntnisse aus Informatik, Wirtschaft und Statistik mit. Wir liefern zuverlässig ab, geben stets Vollgas und fordern uns gegenseitig heraus –
						genauso wie wir uns gegenseitig unterstützen und fördern. Wir glauben an das, was wir tun, und stehen zu unserem Wort. Fehler nehmen wir offen an und lernen
						kontinuierlich daraus. Gleichzeitig genießen wir die Freiheit, echten Mehrwert zu schaffen, und übernehmen die Verantwortung, dies richtig umzusetzen. Auch
						außerhalb der Arbeit streben wir nach Spitzenleistungen: sei es im Judo, im Fitnessstudio oder auf der Couch beim Fußballschauen.
					</p>
					<p className="text-muted-foreground md:text-lg text-sm mb-4 md:text-center text-justify">
						Werde Teil eines Teams, das mit großer Leidenschaft an unserer gemeinsamen Vision arbeitet.
					</p>
				</section>
			</main>
		</>
	);
}
