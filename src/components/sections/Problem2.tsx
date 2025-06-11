"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChartIcon as ChartBar, TrendingUp, AlertCircle, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/providers/language";
import SectionWithLeftHeading from "../section-with-left-heading";
import Link from "next/link";
import Text from "../Text";
import { cn } from "@/lib/utils";

export default function ProblemStatement() {
	const { language } = useLanguage();
	const stats = [
		{
			positive: false,
			eyecatcher: "70%",
			valuegerman: "der KMUs zitieren Mangel an Know-How als größte Hürde",
			value: "of SMEs cite Know-How as biggest Hurdle",
			icon: <AlertCircle className="size-12 text-muted" />,
			source: "Mittelstand Digital, 2023",
			link: "https://www.mittelstand-digital.de/MD/Redaktion/DE/Publikationen/ki-Studie-2023.pdf?__blob=publicationFile&v=4",
		},
	];

	const side = (
		<div className="h-full p-2 md:p-6 bg-muted/20 border-t ">
			{stats.map((stat, index) => (
				<Card key={index} className="h-full w-full flex items-center justify-center relative py-8">
					<CardContent className="flex items-center justify-center flex-col text-muted-foreground gap-4 sm:py-0 sm:px-10">
						{stat.positive ? <h1 className="text-accent-foreground">{stat.eyecatcher}</h1> : <h1 className="text-red-400">{stat.eyecatcher}</h1>}
						<span className={"text-sm sm:max-w-sm pb-4 text-center"}>{stat.valuegerman}</span>
						<Link key={index} href={stat.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2">
							<span className="text-xs text-muted-foreground/50 flex items-center gap-1">
								{stat.source}
								<ArrowUpRight className="size-4" />
							</span>
						</Link>
					</CardContent>
				</Card>
			))}
		</div>
	);

	const text = {
		en: {
			title: <>The Cost Advantage of AI Is Now Too Great to Ignore.</>,
			description: [
				<>
					{"Small and medium-sized enterprises (SMEs) face a decisive challenge: "}
					<mark>
						the integration of <mark>AI</mark> is no longer optional
					</mark>
					{" but increasingly vital for survival."}
				</>,
				<>However, the costs of hiring specialized AI professionals are too high for most SMEs – creating an innovation gap that threatens the middle class.</>,
				<>Without accessible AI solutions, SMEs risk falling behind in efficiency, customer experience, and market competitiveness in an increasingly AI-driven economy.</>,
			],
			buttonText: "Learn More",
			supportedBy: "Supported by",
		},
		de: {
			title: <>Können Sie mithalten?</>,
			description: [
				<>
					Große Konzerne können es sich leisten, ganze Abteilungen von KI-Ingenieure einzustellen und realisieren erhebliche Effizienzpotentiale. Währenddessen werden kleine und
					mittelständische Unternehmen durch die rasante Geschwindigkeit der <mark>KI-Fortschritte</mark> abgehängt.
					<br />
				</>,
			],
			buttonText: "Mehr erfahren",
			supportedBy: "Unterstützt von",
		},
	};

	const { title, description, buttonText, supportedBy } = text[language];

	return (
		<div id="content">
			<SectionWithLeftHeading heading={title} subheading={"DER RICHTIGE MOMENT IST JETZT"} leftSide={side}>
				<div className="text-muted-foreground ">
					{description.map((paragraph, index) => (
						<Text key={index}>{paragraph}</Text>
					))}
				</div>
			</SectionWithLeftHeading>
		</div>
	);
}
