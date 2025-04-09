"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChartIcon as ChartBar, TrendingUp, AlertCircle } from "lucide-react";
import { useLanguage } from "@/providers/language";
import SectionWithLeftHeading from "../section-with-left-heading";
import Link from "next/link";
import Text from "../Text";

export default function ProblemStatement() {
	const { language } = useLanguage();
	const stats = [
		{
			eyecatcher: "40%",
			valuegerman: "Effizienzsteigerung von Mitarbeitern, die KI richtig einsetzen",
			value: "Efficiency Boost for Highly Skilled Workers applying AI",
			icon: <TrendingUp className="size-12 text-muted" />,
			source: "Harvard Business School, 2024",
			link: "https://mitsloan.mit.edu/ideas-made-to-matter/how-generative-ai-can-boost-highly-skilled-workers-productivity",
		},
		{
			eyecatcher: "70%",
			valuegerman: "der KMUs zitieren Mangel an Know-How als größte Hürde",
			value: "of SMEs cite Know-How as biggest Hurdle",
			icon: <AlertCircle className="size-12 text-muted" />,
			source: "Mittelstand Digital, 2023",
			link: "https://www.mittelstand-digital.de/MD/Redaktion/DE/Publikationen/ki-Studie-2023.pdf?__blob=publicationFile&v=4",
		},
	];

	const rightSide = (
		<div className="h-full p-4 gap-4 grid grid-rows-2 bg-muted/10 border-t lg:border-none ">
			{stats.map((stat, index) => (
				<Card key={index} className="h-full w-full flex items-center justify-center border-dashed relative py-4">
					<CardContent className="flex items-center justify-center flex-col text-muted-foreground gap-4  sm:py-0">
						<h1 className="text-accent-foreground">{stat.eyecatcher}</h1>
						<span className="text-sm sm:text-xl text-muted-foreground text-center">{language === "en" ? stat.value : stat.valuegerman}</span>
						<Link key={index} href={stat.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2">
							<span className="text-xs sm:text-sm text-muted-foreground/50 ">{stat.source}</span>
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
			title: <>Der Kostenvorteil durch KI ist jetzt zu groß, um ignoriert zu werden.</>,
			description: [
				<>Der Mittelstand steht vor einer entscheidenden Herausforderung:</>,
				<>Wie Studien und Umfragen belegen, ist KI nicht mehr optimal, sondern überlebenswichtig.</>,
				<>KI-Agenten revolutionieren schon heute Arbeitsprozesse in Unternehmen, indem Sie Mitarbeiter nicht ersetzen, sondern um ein vielfaches produktiver machen.</>,
			],
			buttonText: "Mehr erfahren",
			supportedBy: "Unterstützt von",
		},
	};

	const { title, description, buttonText, supportedBy } = text[language];

	return (
		<SectionWithLeftHeading heading={title} subheading={""} rightSide={rightSide}>
			<div className="space-y-6 text-muted-foreground">
				{description.map((paragraph, index) => (
					<Text key={index}>{paragraph}</Text>
				))}
			</div>
		</SectionWithLeftHeading>
	);
}
