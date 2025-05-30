"use client";

import { ReactNode } from "react";
import { Bot, Calendar, Construction, GraduationCap, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/providers/language";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
	{
		title: "Kundenservice & Support",
		description: "Automate customer service and support with AI-driven solutions.",
		icon: <Bot className="size-6 text-accent-foreground" />,
	},
	{
		title: "Wissens-Management",
		description: "Organisieren, zentralisieren und entsperren Sie das Wissen Ihres Unternehmens - KI-Agenten helfen, Informationen effizient zu erfassen, zu strukturieren und abzurufen.",
		icon: <GraduationCap className="size-6 text-accent-foreground" />,
	},
	{
		title: "Datenbankpflege",
		description: "Automatisieren Sie Dateneingabe-, Bereinigungs- und Wartungsaufgaben, um Datenqualität und -konsistenz sicherzustellen.",
		icon: <Construction className="size-6 text-accent-foreground" />,
	},
	{
		title: "Termin-management",
		description: "Automatisierte Terminplanung und -erinnerungen, um Ausfälle zu reduzieren und die Kundenzufriedenheit zu verbessern.",
		icon: <Calendar className="size-6 text-accent-foreground" />,
	},
	{
		title: "Marketing & Content-Erstellung",
		description: "Automatisierte Erstellung von personalisierten Marketing-Inhalten, Verwaltung von Social Media und Automatisierung von Content-Erstellung.",
		icon: <Palette className="size-6 text-accent-foreground" />,
	},
];

const firstRow = reviews.slice(0, reviews.length);

const CaseCard = ({ title, description, icon }: { title: string; description: string; icon: ReactNode }) => {
	return (
		<Card key={title} className="flex-shrink-0 w-[300px] md:w-[400px] bg-card border border-dashed p-6 justify-start flex flex-col">
			<div className="flex flex-row items-center gap-4">
				<div className="flex items-center justify-center rounded-full size-14 bg-sky-300/10 border-2 border-sky-500 max-h-14 max-w-14 min-h-14 min-w-14">{icon}</div>
				<h4>{title}</h4>
			</div>

			<CardContent className="p-2 mt-2">
				<p className="text-muted-foreground">{description}</p>
			</CardContent>
		</Card>
	);
};

export default function UseCases() {
	const { language } = useLanguage();

	return (
		<section className="section-with-lines">
			<div className="overflow-hidden">
				<div className="flex justify-between items-center my-10 px-4">
					<h2>Unsere Plug-and-Play Lösungen</h2>
				</div>

				<Marquee>
					<span>Next.js</span>
					<span>React</span>
					<span>TypeScript</span>
					<span>Tailwind CSS</span>
				</Marquee>

				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-10">
					<Marquee pauseOnHover className="[--duration:20s]">
						{firstRow.map((review) => (
							<CaseCard key={review.title} {...review} />
						))}
					</Marquee>

					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
				</div>
			</div>
		</section>
	);
}
