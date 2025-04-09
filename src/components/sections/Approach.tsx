"use client";
import { useLanguage } from "@/providers/language";
import { MessagesSquare, Brain, Plug } from "lucide-react";
import SectionWithMiddleHeading from "../section-top-middle-heading";

export default function OurApproach() {
	const { language } = useLanguage();

	const benefits = [
		{
			number: "1",
			titlegerman: "Erstgespräch",
			textgerman:
				"Wir beginnen mit einem unverbindlichen Gespräch, um Ihre aktuelle Situation zu verstehen und herauszufinden, wo der Einsatz von AI Agents in Ihrem Unternehmen sinnvoll wäre.",
			title: "Initial Consultation",
			text: "We start with a non-binding conversation to understand your current situation and identify where the use of AI agents would make the most sense in your company.",
			icon: <MessagesSquare className="size-14  text-accent-foreground" strokeWidth={1} />,
		},
		{
			number: "2",
			titlegerman: "Workshop",
			textgerman: "Gemeinsam nehmen wir Ihre Geschäftsprozesse genau unter die Lupe und entwickeln auf Basis der Analyse einen optimierten Zielprozess mit maßgeschneiderten Lösungen.",
			title: "Workshop",
			text: "Together, we take a close look at your business processes and, based on this analysis, develop an optimized target process with tailored solutions.",
			icon: <Brain className="size-14  text-accent-foreground" strokeWidth={1} />,
		},
		{
			number: "3",
			titlegerman: "Umsetzung",
			textgerman: "Nach Ihrer Freigabe setzen wir die Lösungen schrittweise um, entwickeln die benötigen Agents und implementieren sie  – immer in enger Abstimmung mit Ihnen.",
			title: "Implementation",
			text: "Once approved, we implement the solutions step by step, develop the necessary agents, and integrate them into your operations – always in close coordination with you.",
			icon: <Plug className="size-14  text-accent-foreground" strokeWidth={1} />,
		},
	];

	return (
		<SectionWithMiddleHeading
			preheading={language === "en" ? "Our Approach" : "Unser Ansatz"}
			heading={
				language === "en"
					? "We don't just build solutions for you — we build them with you, every step of the way."
					: "Wir entwickeln unser Lösungen nicht an Ihnen vorbei, sondern gemeinsam mit Ihnen."
			}
			subheading={null}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t bg-muted/10 gap-4 p-4">
				{benefits.map((benefit, index) => (
					<div key={index} className="p-8 rounded border border-dotted bg-card flex flex-col items-center justify-start gap-2">
						<div className="mb-4">{benefit.icon}</div>
						<div className="flex justify-center items-center gap-2 mb-4">
							<h3>{language === "en" ? benefit.title : benefit.titlegerman}</h3>
						</div>
						<p className="text-muted-foreground  ">{language === "en" ? benefit.text : benefit.textgerman}</p>
					</div>
				))}
			</div>
		</SectionWithMiddleHeading>
	);
}
