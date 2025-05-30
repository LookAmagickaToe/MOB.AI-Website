"use client";
import Image from "next/image";
import { PlugZap, Sliders, ShieldCheck, FileTextIcon, BellIcon, CalendarIcon, Share2Icon, CircleSlash2 } from "lucide-react";
import { useLanguage } from "@/providers/language";
import { title } from "process";
import SectionWithMiddleHeading from "../section-top-middle-heading";
import { Card, CardContent } from "../ui/card";
import { BentoGrid, BentoCard } from "../magicui/bento-grid";

export default function Mission2() {
	const { language } = useLanguage();
	const valuePoints = [
		{
			titlegerman: "Nahtlose Integration",
			descriptiongerman: " Anders als übliche starre Softwarelösungen lassen sich AI Agents problemlos in Ihre bestehenden Systeme und Abläufe integrieren.",
			title: "Seamless Integration",
			description: "Unlike traditional rigid software solutions, AI agents can be effortlessly integrated into your existing systems and workflows.",
			icon: <PlugZap className="size-14 flex-shrink-0 mt-1 text-accent-foreground" strokeWidth={1} />,
		},
		{
			titlegerman: "Branchenspezifische Anpassung",
			descriptiongerman: "Unsere AI Agents können für Ihre spezifischen Branchenanforderungen angepasst werden.",
			title: "Industry-Specific Customization",
			description: "Our AI agents can be tailored to meet the specific needs and requirements of your industry.",
			icon: <Sliders className="size-14 flex-shrink-0 mt-1 text-accent-foreground" strokeWidth={1} />,
		},
		{
			titlegerman: "DSGVO-konform und sicher",
			descriptiongerman:
				"Wir legen höchsten Wert auf Datenschutz, sodass Sie die Vorteile künstlicher Intelligenz nutzen können, ohne die Privatsphäre Ihrer Kunden oder die Sicherheit Ihrer Daten zu gefährden.",
			title: "GDPR-Compliant and Secure",
			description:
				"We place the highest priority on data protection, enabling you to harness the benefits of artificial intelligence without compromising your customers' privacy or the security of your data.",
			icon: <ShieldCheck className="size-14 flex-shrink-0 mt-1 text-accent-foreground" strokeWidth={1} />,
		},
	];

	const features = [
		{
			Icon: PlugZap,
			name: "Nahtlose Integration",
			description: "Anders als übliche starre Softwarelösungen lassen sich AI Agents problemlos in Ihre bestehenden Systeme und Abläufe integrieren.",
			href: "#",
			cta: "Kontakt aufnnehmen",
			className: "col-span-3 lg:col-span-1",
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
			className: "col-span-3 lg:col-span-2",
			background: <img className="absolute -right-20 -top-20 opacity-60" />,
		},
		{
			Icon: CircleSlash2,
			name: "Zero-Risk Modell",
			description: "Nutzen Sie unser Venture-Client-Modell: Testen Sie den Mehrwert der Lösung, bevor Sie investieren.",
			className: "col-span-3 lg:col-span-1",
			href: "#",
			cta: "Kontakt aufnnehmen",
			background: <img className="absolute -right-20 -top-20 opacity-60" />,
		},
	];

	return (
		<SectionWithMiddleHeading
			preheading={language == "en" ? "Our Mission" : "Unsere Mission"}
			heading={
				language === "en"
					? "We close this innovation gap for you – practically, accessibley, and affordably."
					: "Wir schließen diese Innovationslücke für Sie – praxisnah, verständlich und bezahlbar."
			}
			subheading={
				language === "en"
					? "We focus on AI Agents – intelligent digital assistants that take over repetitive tasks, freeing up your employees to concentrate on value-creating activities."
					: "Wir konzentrieren uns auf AI Agents – intelligente digitale Assistenten, die wiederkehrende Aufgaben übernehmen und Ihre Mitarbeiter entlasten, damit sie sich auf wertschöpfende Tätigkeiten konzentrieren können."
			}
		>
			<div className="pb-10 px-4 md:px-6 ">
				<BentoGrid>
					{features.map((feature, idx) => (
						<BentoCard key={idx} {...feature} />
					))}
				</BentoGrid>
			</div>
		</SectionWithMiddleHeading>
	);
}
