"use client";

import { useRef } from "react";
import Image from "next/image";
import { Bot, Calendar, ChevronLeft, ChevronRight, Construction, GraduationCap, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/providers/language";

export default function UseCases() {
	const { language } = useLanguage();
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const isMobile = useMobile();

	const useCases = [
		{
			title: "Customer Service & Support",
			titleGerman: "Kundenservice & Support",
			description: "Automate customer service and support with AI-driven solutions.",
			descriptionGerman: "Automatisieren Sie den Kundenservice und -support mit KI-gestützten Lösungen.",
			image: <Bot className="size-14 text-accent-foreground" strokeWidth={1} />,
		},
		{
			title: "Knowledge Management",
			titleGerman: "Wissens-Management",
			descriptionGerman:
				"Organisieren, zentralisieren und entsperren Sie das Wissen Ihres Unternehmens - KI-Agenten helfen, Informationen effizient zu erfassen, zu strukturieren und abzurufen.",
			description: "Organize, centralize, and unlock your company’s knowledge — AI agents help capture, structure, and retrieve information efficiently.",
			image: <GraduationCap className="size-14 text-accent-foreground" strokeWidth={1} />,
		},
		{
			title: "Database Maintenance",
			titleGerman: "Datenbankpflege",
			descriptionGerman: "Automatisieren Sie Dateneingabe-, Bereinigungs- und Wartungsaufgaben, um Datenqualität und -konsistenz sicherzustellen.",
			description: "Automate data entry, cleaning, and maintenance tasks to ensure data quality and consistency.",
			image: <Construction className="size-14 text-accent-foreground" strokeWidth={1} />,
		},
		{
			title: "Appointment Scheduling",
			titleGerman: "Termin-management",
			descriptionGerman: "Automatisierte Terminplanung und -erinnerungen, um Ausfälle zu reduzieren und die Kundenzufriedenheit zu verbessern.",
			description: "Automate appointment scheduling and reminders to reduce no-shows and improve customer satisfaction.",
			image: <Calendar className="size-14 text-accent-foreground" strokeWidth={1} />,
		},
		{
			title: "Marketing & Content Creation",
			titleGerman: "Marketing & Content-Erstellung",
			descriptionGerman: "Autoatisierte erstellung von personalisierten Marketing-Inhalten, Verwaltung von Social Media und Automatisierung von Content-Erstellung.",
			description: "Generate personalized marketing content, manage social media, and automate content creation.",
			image: <Palette className="size-14 text-accent-foreground" strokeWidth={1} />,
		},
	];

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const { current } = scrollContainerRef;
			const scrollAmount = direction === "left" ? -current.offsetWidth / 2 : current.offsetWidth / 2;
			current.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	return (
		<section className="section-with-lines">
			<div className="overflow-hidden">
				<div className="flex justify-between items-center my-10 px-4">
					<h2>{language === "en" ? "Example Use Cases" : "Beispiel Anwendungen"}</h2>
					{!isMobile && (
						<div className="flex space-x-2">
							<Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Scroll left">
								<ChevronLeft className="h-6 w-6" />
							</Button>
							<Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Scroll right">
								<ChevronRight className="h-6 w-6" />
							</Button>
						</div>
					)}
				</div>

				<div
					ref={scrollContainerRef}
					className="flex overflow-x-auto space-x-4 py-4 -mx-4 px-8 bg-muted/20  border-t scrollbar-hide no-scrollbar"
					style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
				>
					{useCases.map((useCase, index) => (
						<Card key={index} className="shrink-0 w-[300px] md:w-[400px] bg-card border p-4 justify-start flex flex-col">
							<div className="relative mx-auto text-muted-foreground">{useCase.image}</div>
							<CardContent className="p-6">
								<h3>{language === "en" ? useCase.title : useCase.titleGerman}</h3>
								<p className="mt-4 text-muted-foreground sm:text-justify">{language === "en" ? useCase.description : useCase.descriptionGerman}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
