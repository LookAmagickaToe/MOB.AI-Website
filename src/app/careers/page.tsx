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
					{/* <p className="text-muted-foreground md:text-lg text-sm mb-4 md:text-center text-justify">
						Die aktuellen Teammitglieder verfügen über Hintergründe in Informatik, Wirtschaft und Statistik. Wir haben Medaillen im Judo gewonnen. Auch außerhalb der Arbeit
						erbringen unsere Kolleginnen und Kollegen Spitzenleistungen – etwa im Judo oder im Schach.
					</p> */}
				</section>
			</main>
		</>
	);
}
