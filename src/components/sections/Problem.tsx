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
			positive: true,
			eyecatcher: "40%",
			valuegerman: "Effizienzsteigerung von Mitarbeitenden, die KI richtig einsetzen",
			value: "Efficiency Boost for Highly Skilled Workers applying AI",
			icon: <TrendingUp className="size-12 text-muted" />,
			source: "Harvard Business School, 2024",
			link: "https://mitsloan.mit.edu/ideas-made-to-matter/how-generative-ai-can-boost-highly-skilled-workers-productivity",
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
			title: <>Der Kostenvorteil durch KI ist jetzt zu groß, um ignoriert zu werden.</>,
			description: [
				// <>Der Mittelstand steht vor einer entscheidenden Herausforderung:</>,
				// <>Wie Studien und Umfragen belegen, ist KI nicht mehr optimal, sondern überlebenswichtig.</>,
				<>
					<mark>KI</mark> ist nicht mehr optional, sondern <mark>überlebenswichtig</mark>. <mark>KI-Agenten & -Workflows</mark> revolutionieren schon heute Arbeitsprozesse in
					Unternehmen, indem sie Mitarbeiter nicht ersetzen, <mark>sondern um ein vielfaches produktiver machen</mark>.
				</>,
			],
			buttonText: "Mehr erfahren",
			supportedBy: "Unterstützt von",
		},
	};

	const { title, description, buttonText, supportedBy } = text[language];

	return (
		<div id="content">
			<SectionWithLeftHeading heading={title} subheading={"ABSEITS DES HYPES"} rightSide={side}>
				<div className="text-muted-foreground ">
					{description.map((paragraph, index) => (
						<Text key={index}>{paragraph}</Text>
					))}
				</div>
			</SectionWithLeftHeading>
		</div>
	);
}
