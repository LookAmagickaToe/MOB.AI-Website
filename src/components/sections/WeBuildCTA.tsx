"use client";
import Image from "next/image";
import { PlugZap, Sliders, ShieldCheck, FileTextIcon, BellIcon, CalendarIcon, Share2Icon, CircleSlash2 } from "lucide-react";
import { useLanguage } from "@/providers/language";
import { title } from "process";
import SectionWithMiddleHeading from "../section-top-middle-heading";
import { Card, CardContent } from "../ui/card";
import { BentoGrid, BentoCard } from "../magicui/bento-grid";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/button";

export default function WeBuildCTA() {
	const { language } = useLanguage();

	const words = ["Research", "Buchhaltungs", "Einkaufs", "Sales"];

	return (
		<section className="section-with-lines py-40">
			<div className="flex items-center justify-center gap-4">
				<h2>Wir bauen deinen</h2>
				<div className="w-[26rem] border-dashed border p-4 bg-sky-500/5 border-sky-500 ">
					<h2>
						<FlipWords words={words} className="text-sky-500" />
					</h2>
				</div>
				<h2> Agenten</h2>
			</div>
			{/* <div className="flex items-center justify-center pt-20">
				<Button>Kontakt aufnehmen</Button>
			</div> */}
		</section>
	);
}
