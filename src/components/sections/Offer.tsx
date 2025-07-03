"use client";
import Image from "next/image";
import { PlugZap, Sliders, ShieldCheck, FileTextIcon, BellIcon, CalendarIcon, Share2Icon, CircleSlash2, TrendingUp, Signpost, Construction, GraduationCap, ChevronRight } from "lucide-react";
import { useLanguage } from "@/providers/language";
import SectionWithMiddleHeading from "../section-top-middle-heading";
import { BentoGrid, BentoCard } from "../magicui/bento-grid-offer";

export default function Offer() {
	const features = [
		{
			Icon: Signpost,
			name: "Technische Beratung",
			description: (
				<>
					<p>
						<ChevronRight className="size-3 inline-flex items-center mr-2" />
						Ausführliche Analyse Ihres Vorhabens aus technischer & strategischer Sicht
					</p>
					<p>
						<ChevronRight className="size-3 inline-flex items-center mr-2" />
						Fest definierter Zeitraum
					</p>
				</>
			),
			footer: "Machbarkeitsstudie, Proof-of-Concept und Handlungsempfehlungen.",
			className: "col-span-3 lg:col-span-1",
			background: <img className="absolute -right-20 -top-20 opacity-60" />,
		},
		{
			Icon: Construction,
			name: "Entwicklungsprojekt",
			description: (
				<>
					<p>
						<ChevronRight className="size-3 inline-flex items-center mr-2" />
						Design, Entwicklung & Implementierung von individuellen KI-Lösungen oder Individualisierung unserer Plug-and-Play Agenten
					</p>
					<p>
						<ChevronRight className="size-3 inline-flex items-center mr-2" />
						Deploymentzyklen in agilen Sprints
					</p>
				</>
			),
			footer: "Signifikante Zeiteinsparungen und höhere Effektivtät durch produktive Agents.",
			className: "col-span-3 lg:col-span-1",
			background: <img className="absolute -right-20 -top-20 opacity-60" />,
		},
		{
			Icon: GraduationCap,
			name: "KI Schulung",
			description: (
				<>
					<p>
						<ChevronRight className="size-3 inline-flex items-center mr-2" />
						Interaktiver Workshop zum richtigen Einsatz von KI in der alltäglichen Arbeit
					</p>
					<p>
						<ChevronRight className="size-3 inline-flex items-center mr-2" />
						Halbtags-Workshop für Ihre Mitarbeitenden
					</p>
				</>
			),
			footer: "Mitarbeitende sind geschult in der praktischen Anwendung von State-of-the-Art KI praktiken.",
			className: "col-span-3 lg:col-span-1",
			background: <img className="absolute -right-20 -top-20 opacity-60" />,
		},
	];

	return (
		<div id="offer">
			<SectionWithMiddleHeading preheading={"Unser Angebot"} heading={"So bringen wir KI mit echtem Mehrwert in Ihr Unternehmen"} subheading={null}>
				<BentoGrid>
					{features.map((feature, idx) => (
						<BentoCard key={idx} {...feature} />
					))}
				</BentoGrid>
			</SectionWithMiddleHeading>
		</div>
	);
}
