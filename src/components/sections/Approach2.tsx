import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Brain, MessagesSquare, Plug } from "lucide-react";
import SectionWithMiddleHeading from "../section-top-middle-heading";

export function Approach() {
	const approach = [
		{
			title: "Erstgespräch",
			icon: <MessagesSquare className="size-6  text-accent-foreground" strokeWidth={1} />,

			content: (
				<p className="text-muted-foreground ">
					Wir beginnen mit einem unverbindlichen Gespräch, um Ihre aktuelle Situation zu verstehen und herauszufinden, wo der Einsatz von AI Agents in Ihrem Unternehmen sinnvoll
					wäre.
				</p>
			),
		},
		{
			title: "Workshop",
			icon: <Brain className="size-6 text-accent-foreground" strokeWidth={1} />,
			content: (
				<p className="text-muted-foreground ">
					Gemeinsam nehmen wir Ihre Geschäftsprozesse genau unter die Lupe und entwickeln auf Basis der Analyse einen optimierten Zielprozess mit maßgeschneiderten Lösungen.
				</p>
			),
		},
		{
			title: "Implementierung",
			icon: <Plug className="size-6 text-accent-foreground" strokeWidth={1} />,
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
