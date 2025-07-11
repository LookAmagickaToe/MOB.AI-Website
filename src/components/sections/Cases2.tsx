"use client";

import { ReactNode } from "react";
import { ArrowRight, Bot, Calendar, Construction, GraduationCap, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/providers/language";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "../ui/button";
import { SpinningText } from "../magicui/spinning-text";

const mcps = [
	{
		title: "RAG",
		description: "Automatisierte Erfassung, Analyse und Generierung von Antworten auf Basis externer Datenquellen.",
	},
	{
		title: "SQL",
		description: "Abfragen, Analysen und Bearbeitung strukturierter Daten mit SQL oder natürlicher Sprache.",
	},
	{
		title: "Scraper",
		description: "Automatisches Extrahieren strukturierter Informationen aus Webseiten und Online-Quellen.",
	},
	{
		title: "Code Sandbox",
		description: "Isolierte Umgebung zur Ausführung, Entwicklung und Überprüfung von Code-Snippets.",
	},
	{
		title: "Inbox",
		description: "Zentrale Sammlung eingehender Inhalte zur weiteren Verarbeitung und Analyse.",
	},
];

const agents = [
	{
		title: "Research-Agent",
		description: "Sammelt, analysiert und fasst Informationen aus verschiedenen Quellen zusammen.",
	},
	{
		title: "Einkaufs-Agent",
		description: "Identifiziert Produkte, vergleicht Preise und unterstützt bei der automatisierten Kaufentscheidung.",
	},
	{
		title: "Email-Assistant-Agent",
		description: "Analysiert E-Mails, formuliert Antworten und priorisiert eingehende Nachrichten.",
	},
	{
		title: "Sales-Agent",
		description: "Unterstützt im Vertriebsprozess durch Lead-Analyse, Kommunikation und Automatisierung von Aufgaben.",
	},
];

const CaseCard = ({ title, description, icon, reverse }: { title: string; description: ReactNode; icon: string; reverse: boolean }) => {
	return (
		<Card key={title} className="shrink-0 w-[300px] md:w-[400px] bg-card border p-4 md:p-6 justify-start flex flex-col">
			<div className="flex flex-row items-center gap-4">
				{/* <div className="flex items-center justify-center rounded-full size-14 bg-sky-300/10 border-2 border-sky-500 max-h-14 max-w-14 min-h-14 min-w-14">{icon}</div> */}
				<div className="flex items-center justify-center rounded-full size-14 bg-sky-300/10 border-2 border-sky-500  relative">
					<SpinningText className="text-xs absolute inset-0 text-sky-500 font-bold" duration={5} radius={2.5} reverse={reverse}>
						{icon}
					</SpinningText>
				</div>
				<h4>{title}</h4>
			</div>

			<CardContent className="p-2 mt-2">
				<p className="text-muted-foreground text-xs md:text-base">{description}</p>
			</CardContent>
		</Card>
	);
};

export default function UseCases() {
	return (
		<section className="section-with-lines">
			<div className="overflow-hidden">
				<div className="flex flex-row text-center lg:text-left justify-center lg:justify-between items-center my-10 px-6 gap-6">
					<h2>Unsere Plug-and-Play Lösungen</h2>
					<Button size={"lg"} className="sm:flex hidden">
						KONTAKT AUFNEHMEN <ArrowRight className="size-4 " />
					</Button>
				</div>

				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-10">
					<Marquee pauseOnHover className="[--duration:20s]" reverse>
						{agents.map((e) => (
							<CaseCard key={e.title} {...e} icon={"AGENT • AGENT •"} reverse={true} />
						))}
					</Marquee>
					<Marquee pauseOnHover className="[--duration:20s]">
						{mcps.map((e) => (
							<CaseCard key={e.title} {...e} icon={"MCP • MCP • MCP •"} reverse={false} />
						))}
					</Marquee>

					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background"></div>
					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background"></div>
				</div>
			</div>
			<div className="text-center py-10 border-t px-6">
				{/* <span>Wir entwickeln laufend neue Tools und Automationen</span> */}
				<Button size={"lg"} className="sm:hidden flex w-full mt-6">
					KONTAKT AUFNEHMEN <ArrowRight className="size-4 " />
				</Button>
			</div>
		</section>
	);
}
