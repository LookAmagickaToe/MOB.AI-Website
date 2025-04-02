"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChartIcon as ChartBar, TrendingUp, AlertCircle } from "lucide-react";
import { useLanguage } from "@/providers/language";
import SectionWithLeftHeading from "../section-with-left-heading";
import Link from "next/link";

export default function ProblemStatement() {
	const { language } = useLanguage();
	const stats = [
		{
			eyecatcher: "40%",
			valuegerman: "Leistungssteigerung",
			labelgerman: "KI kann die Leistung hochqualifizierter Arbeitskräfte um fast 40% steigern im Vergleich zu Mitarbeitern, die sie nicht nutzen",
			value: "performance boost",
			label: "AI can boost the performance of highly skilled workers by nearly 40% compared to employees who do not use it.",
			icon: <TrendingUp className="size-12 text-muted" />,
			source: "– Harvard Business School –",
			link: "https://mitsloan.mit.edu/ideas-made-to-matter/how-generative-ai-can-boost-highly-skilled-workers-productivity",
		},
		{
			eyecatcher: "70%",
			valuegerman: "Know-How als Hürde bei 70% der KMUs",
			labelgerman: "70% der KMUs in Deutschland nennen fehlendes technisches Know-how als größtes Hindernis bei der KI-Einführung.",
			value: "of SMEs cite Know-How as Hurdle",
			label: "in Germany cite a lack of technical expertise as the biggest obstacle to adopting AI.",
			icon: <AlertCircle className="size-12 text-muted" />,
			source: "– Harvard Business School –",
			link: "https://www.mittelstand-digital.de/MD/Redaktion/DE/Publikationen/ki-Studie-2023.pdf?__blob=publicationFile&v=4",
		},
	];

	const rightSide = (
		<div className="h-full p-8 gap-8 grid grid-rows-2">
			{stats.map((stat, index) => (
				<Link key={index} href={stat.link} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-[1.02]">
					<Card key={index} className="h-full w-full flex items-center justify-center border-dashed ">
						<CardContent className="flex items-center justify-end">
							{/* <div className="flex items-center justify-center gap-4">{stat.icon}</div> */}
							<div className="flex flex-col items-center justify-center gap-4">
								<h1 className="text-7xl font-heading">{stat.eyecatcher}</h1>
								<h3 className="text-4xl font-heading">{language === "en" ? stat.value : stat.valuegerman}</h3>

								{/* <p className="text-muted-foreground">{language === "en" ? stat.label : stat.labelgerman}</p> */}
								{/* <p className="text-sm text-muted-foregrouund/20 mt-1 italic">{stat.source}</p> */}
							</div>
						</CardContent>
					</Card>
				</Link>
			))}
		</div>
	);

	return (
		<SectionWithLeftHeading
			heading={language === "en" ? "The Cost Advantage of AI Is Too Great to Ignore" : "Der Kostenvorteil durch KI ist zu groß, um ignoriert zu werden."}
			subheading={""}
			rightSide={rightSide}
		>
			<div className="space-y-6 text-muted-foreground">
				<p className="text-lg">
					{language === "en"
						? "Small and medium-sized enterprises (SMEs) face a decisive challenge: the integration of Artificial Intelligence (AI) is no longer optional but increasingly vital for survival."
						: "Der Mittelstand steht vor einer entscheidenden Herausforderung: Die Integration von Künstlicher Intelligenz (KI) ist nicht mehr optional, sondern zunehmend überlebenswichtig. "}
				</p>
				<p className="text-lg">
					{language === "en"
						? "However, the costs of hiring specialized AI professionals are too high for most SMEs – creating an innovation gap that threatens the middle class."
						: "Jedoch sind die Kosten für die Einstellung spezialisierter KI-Fachkräfte für die meisten kleinen Unternehmen zu hoch – das schafft eine Innovationslücke die den Mittelstand Gefährden."}
				</p>
				<p className="text-lg">
					{language === "en"
						? "Without accessible AI solutions, SMEs risk falling behind in efficiency, customer experience, and market competitiveness in an increasingly AI-driven economy."
						: "Ohne zugängliche KI-Lösungen drohen KMUs in einer zunehmend KI-getriebenen Wirtschaft in den Bereichen Effizienz, Kundenerlebnis und Wettbewerbsfähigkeit zurückzufallen."}
				</p>
			</div>
		</SectionWithLeftHeading>
	);
}
