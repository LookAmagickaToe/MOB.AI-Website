import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Brain, MessagesSquare, Plug } from "lucide-react";
import SectionWithMiddleHeading from "../section-top-middle-heading";

export function Approach() {
	const data = [
		{
			title: "2024",
			content: (
				<div>
					<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Built and launched Aceternity UI and Aceternity UI Pro from scratch</p>
					<div className="grid grid-cols-2 gap-4">
						<img
							src="https://assets.aceternity.com/templates/startup-1.webp"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="https://assets.aceternity.com/templates/startup-2.webp"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="https://assets.aceternity.com/templates/startup-3.webp"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="https://assets.aceternity.com/templates/startup-4.webp"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
					</div>
				</div>
			),
		},
		{
			title: "Early 2023",
			content: (
				<div>
					<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
						I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
					</p>
					<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
						Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<img
							src="https://assets.aceternity.com/pro/hero-sections.png"
							alt="hero template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="https://assets.aceternity.com/features-section.png"
							alt="feature template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="https://assets.aceternity.com/pro/bento-grids.png"
							alt="bento template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="https://assets.aceternity.com/cards.png"
							alt="cards template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
					</div>
				</div>
			),
		},
		{
			title: "Changelog",
			content: (
				<div>
					<p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Deployed 5 new components on Aceternity today</p>
					<div className="mb-8">
						<div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Card grid component</div>
						<div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Startup template Aceternity</div>
						<div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Random file upload lol</div>
						<div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Himesh Reshammiya Music CD</div>
						<div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Salman Bhai Fan Club registrations open</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<img
							src="https://assets.aceternity.com/pro/hero-sections.png"
							alt="hero template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="https://assets.aceternity.com/features-section.png"
							alt="feature template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="https://assets.aceternity.com/pro/bento-grids.png"
							alt="bento template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="https://assets.aceternity.com/cards.png"
							alt="cards template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
					</div>
				</div>
			),
		},
	];

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

	const approach = [
		{
			title: "Erstgespräch",
			icon: <MessagesSquare className="size-8  text-accent-foreground" />,
			content: (
				<p className="text-muted-foreground ">
					Wir beginnen mit einem unverbindlichen Gespräch, um Ihre aktuelle Situation zu verstehen und herauszufinden, wo der Einsatz von AI Agents in Ihrem Unternehmen sinnvoll
					wäre.
				</p>
			),
		},
		{
			title: "Workshop",
			icon: <Brain className="size-8  text-accent-foreground" />,
			content: (
				<p className="text-muted-foreground ">
					Gemeinsam nehmen wir Ihre Geschäftsprozesse genau unter die Lupe und entwickeln auf Basis der Analyse einen optimierten Zielprozess mit maßgeschneiderten Lösungen.
				</p>
			),
		},
		{
			title: "Implementierung",
			icon: <Plug className="size-8  text-accent-foreground" />,
			content: (
				<p className="text-muted-foreground ">
					Nach Ihrer Freigabe setzen wir die Lösungen schrittweise um, entwickeln die benötigen Agents und implementieren sie – immer in enger Abstimmung mit Ihnen.
				</p>
			),
		},
	];

	return (
		<SectionWithMiddleHeading preheading={"Unser Ansatz"} heading={"Wir entwickeln unser Lösungen nicht an Ihnen vorbei, sondern gemeinsam mit Ihnen."} subheading={null}>
			<div className="relative w-full overflow-clip">
				<Timeline data={approach} />
			</div>
		</SectionWithMiddleHeading>
	);
}
