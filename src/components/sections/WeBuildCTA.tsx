"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FlipWords } from "../ui/flip-words";
import { WordRotate } from "../magicui/word-rotate";

export default function WeBuildCTA() {
	const words = ["Research", "Buchhaltungs", "Einkaufs", "Sales"];

	const scrollToContact = () => {
		const section = document.getElementById("contact");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="section-with-lines md:p-6 p-2 bg-muted/20">
			<div className="overflow-hidden p-6 border rounded bg-card grid lg:grid-cols-2 items-center gap-2">
				<div className="flex items-center lg:items-start justify-center gap-2 flex-col ">
					{/* <span className="md:text-lg text-xs relative uppercase text-muted-foreground -mb-0">Wir bauen</span> */}
					<h2>Wir bauen Ihren</h2>
					<div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
						<div className=" bg-sky-500/10 border border-sky-500 rounded-lg overflow-hidden px-2 lg:px-4 lg:py-2 w-full lg:w-96">
							<WordRotate className="text-2xl md:text-6xl text-sky-500" words={words} duration={1500} />
						</div>
						<h2>Agenten</h2>
					</div>
				</div>
				<div className="lg:block hidden ml-auto mr-12">
					<Button size={"lg"} onClick={scrollToContact}>
						KONTAKT AUFNEHMEN <ArrowRight className="size-4 " />
					</Button>
				</div>
				<div className="lg:hidden block mt-4">
					<Button onClick={scrollToContact} className="w-full" size={"lg"}>
						KONTAKT <ArrowRight className="size-4 " />
					</Button>
				</div>
			</div>
		</section>
	);
}
