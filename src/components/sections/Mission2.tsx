"use client";
import Image from "next/image";
import { PlugZap, Sliders, ShieldCheck, FileTextIcon, BellIcon, CalendarIcon, Share2Icon, CircleSlash2, TrendingUp } from "lucide-react";
import { useLanguage } from "@/providers/language";
import SectionWithMiddleHeading from "../section-top-middle-heading";
import { BentoGrid, BentoCard } from "../magicui/bento-grid";

export default function Mission2() {
	const features = [
		{
			Icon: PlugZap,
			name: "Ihr Technologie-Partner",
			description: "Wir helfen Ihnen, Hype von Realität zu unterscheiden und KI mit echtem Mehrwert zu implementieren.",
			href: "#",
			cta: "Kontakt aufnnehmen",
			className: "col-span-3 lg:col-span-1",
			background: <img className="absolute -right-20 -top-20 opacity-60" />,
		},
		{
			Icon: TrendingUp,
			name: "Human-AI Augmentation Ansatz",
			description: "Wir wollen Mitarbeitende nicht ersetzen, sondern sie durch KI zu höherer Leistung befähigen.",
			href: "#",
			cta: "Kontakt aufnnehmen",
			className: "col-span-3 lg:col-span-2",
			background: <img className="absolute -right-20 -top-20 opacity-60" />,
		},
		{
			Icon: Sliders,
			name: "Branchenspezifische Anpassung",
			description: "Unsere AI Agents können für Ihre spezifischen Branchenanforderungen angepasst werden.",
			href: "#",
			cta: "Kontakt aufnnehmen",
			className: "col-span-3 lg:col-span-2",
			background: <img className="absolute -right-20 -top-20 opacity-60" />,
		},
		{
			Icon: ShieldCheck,
			name: "DSGVO-konform und sicher",
			description:
				"Wir legen höchsten Wert auf Datenschutz, sodass Sie die Vorteile künstlicher Intelligenz nutzen können, ohne die Privatsphäre Ihrer Kunden oder die Sicherheit Ihrer Daten zu gefährden.",
			href: "#",
			cta: "Kontakt aufnnehmen",
			className: "col-span-3 lg:col-span-1",
			background: <img className="absolute -right-20 -top-20 opacity-60" />,
		},
		// {
		// 	Icon: CircleSlash2,
		// 	name: "Zero-Risk Modell",
		// 	description: "Nutzen Sie unser Venture-Client-Modell: Testen Sie den Mehrwert der Lösung, bevor Sie investieren.",
		// 	className: "col-span-3 lg:col-span-1",
		// 	href: "#",
		// 	cta: "Kontakt aufnnehmen",
		// 	background: <img className="absolute -right-20 -top-20 opacity-60" />,
		// },
	];

	// subheading={
	// 				language === "en"
	// 					? "We focus on AI Agents – intelligent digital assistants that take over repetitive tasks, freeing up your employees to concentrate on value-creating activities."
	// 					: "Wir konzentrieren uns auf AI Agents – intelligente digitale Assistenten, die wiederkehrende Aufgaben übernehmen und Ihre Mitarbeiter entlasten, damit sie sich auf wertschöpfende Tätigkeiten konzentrieren können."
	// 			}

	return (
		<div id="mission">
			<SectionWithMiddleHeading
				preheading={"Unsere Mission"}
				heading={"Wir schließen diese Innovationslücke für Sie –  technisch fundiert, verständlich und kollaborativ."}
				subheading={""}
			>
				<BentoGrid>
					{features.map((feature, idx) => (
						<BentoCard key={idx} {...feature} />
					))}
				</BentoGrid>
			</SectionWithMiddleHeading>
		</div>
	);
}
