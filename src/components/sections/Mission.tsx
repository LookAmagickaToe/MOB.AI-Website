"use client";
import Image from "next/image";
import { PlugZap, Sliders, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/providers/language";
import { title } from "process";
import SectionWithMiddleHeading from "../section-top-middle-heading";
import { Card, CardContent } from "../ui/card";

export default function Mission() {
	const { language } = useLanguage();
	const valuePoints = [
		{
			titlegerman: "Nahtlose Integration",
			descriptiongerman: " Anders als übliche starre Softwarelösungen lassen sich AI Agents problemlos in Ihre bestehenden Systeme und Abläufe integrieren.",
			title: "Seamless Integration",
			description: "Unlike traditional rigid software solutions, AI agents can be effortlessly integrated into your existing systems and workflows.",
			icon: <PlugZap className="size-14 flex-shrink-0 mt-1" strokeWidth={1} />,
		},
		{
			titlegerman: "Branchenspezifische Anpassung",
			descriptiongerman: "Unsere AI Agents können für Ihre spezifischen Branchenanforderungen angepasst werden.",
			title: "Industry-Specific Customization",
			description: "Our AI agents can be tailored to meet the specific needs and requirements of your industry.",
			icon: <Sliders className="size-14 flex-shrink-0 mt-1" strokeWidth={1} />,
		},
		{
			titlegerman: "DSGVO-konform und sicher",
			descriptiongerman:
				"Wir legen höchsten Wert auf Datenschutz, sodass Sie die Vorteile künstlicher Intelligenz nutzen können, ohne die Privatsphäre Ihrer Kunden oder die Sicherheit Ihrer Daten zu gefährden.",
			title: "GDPR-Compliant and Secure",
			description:
				"We place the highest priority on data protection, enabling you to harness the benefits of artificial intelligence without compromising your customers' privacy or the security of your data.",
			icon: <ShieldCheck className="size-14 flex-shrink-0 mt-1" strokeWidth={1} />,
		},
	];

	return (
		<SectionWithMiddleHeading
			preheading={language === "en" ? "Our mission" : "Unsere Mission"}
			heading={
				language === "en"
					? "To close this innovation gap for you – practical, accessible, and affordable."
					: "Diese Innovationslücke für Sie zu schließen – praxisnah, verständlich und bezahlbar."
			}
			subheading={
				language === "en"
					? "We focus on AI Agents – intelligent digital assistants that take over repetitive tasks, freeing up your employees to concentrate on value-creating activities."
					: "Wir konzentrieren uns auf AI Agents – intelligente digitale Assistenten, die wiederkehrende Aufgaben übernehmen und Ihre Mitarbeiter entlasten, damit sie sich auf wertschöpfende Tätigkeiten konzentrieren können."
			}
		>
			<div className="pb-10 px-4 md:px-6 ">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<div className="">
						{/* Added padding wrapper */}
						<div className="relative w-full  rounded-lg overflow-hidden">
							<Image src="/valueproposition.png" alt="Value Proposition" layout="responsive" width={600} height={600} className="object-contain rounded-lg" />
						</div>
					</div>
					<div className="space-y-4">
						{valuePoints.map((point, index) => (
							<Card key={index} className="h-full w-full border-dashed p-4">
								<CardContent className="flex items-start gap-4">
									{point.icon}
									<div>
										<h3 className=" mb-2 ">{language === "en" ? point.title : point.titlegerman}</h3>
										<p className="text-muted-foreground">{language === "en" ? point.description : point.descriptiongerman}</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</SectionWithMiddleHeading>
	);
}
