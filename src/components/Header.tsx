"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/providers/language";
import { ArrowRight, ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToContact = () => {
		const section = document.getElementById("contact");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToOffer = () => {
		const section = document.getElementById("offer");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	const scrollToTeam = () => {
		const section = document.getElementById("team");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b border-muted backdrop-blur-lg">
			<div className="max-w-(--breakpoint-2xl) mx-auto px-4 md:px-8 ">
				<div className="flex h-16 items-center justify-between">
					{/* Group logo and text together */}
					<div className="flex items-center space-x-2">
						<div className="relative h-6 w-auto aspect-2/1 ">
							<Image src="/isarailogo.png" alt="ISAR AI Logo" fill className="rounded-lg object-contain" priority />
						</div>
						<span className="font-heading h-full flex items-center font-semibold text-sky-400 -mb-0.5 -ml-1 text-[20px] leading-none ">AI</span>
					</div>
					<div className="items-center hidden sm:flex gap-2 lg:gap-4">
						<Button variant="link" onClick={scrollToOffer}>
							UNSER ANGEBOT
						</Button>

						<Button variant="link" onClick={scrollToTeam}>
							ÜBER UNS
						</Button>

						<Button variant="link" asChild>
							<Link href={"/careers"}>KARRIERE</Link>
						</Button>

						{/* <button onClick={scrollToContact} className="uppercase group relative px-2 sm:px-8 text-xs sm:text-base text-sky-400 h-9">
							<span className="absolute inset-0 border border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30"></span>
							{"Kontakt aufnehmen"}
						</button> */}

						<Button variant="default" onClick={scrollToContact} size={"sm"}>
							KONTAKT
							<ArrowRight className="size-4" />
						</Button>

						{/* <Button variant="secondary" onClick={toggleLanguage} size={"sm"}>
							{language === "en" ? "DE" : "EN"}
						</Button> */}
					</div>
					<div className="items-center flex sm:hidden gap-2 ">
						<Button variant="default" onClick={scrollToContact} size={"sm"}>
							KONTAKT
							<ArrowRight className="size-4" />
						</Button>
						<Button size={"sm"} variant="ghost" onClick={toggleMenu}>
							{isMenuOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
						</Button>
					</div>
					{isMenuOpen && (
						<div className="absolute top-16 inset-x-0 bg-card border-b  border-muted w-full p-4 flex flex-col ">
							<Button variant="link" onClick={scrollToOffer}>
								UNSER ANGEBOT
							</Button>
							<Button variant="link" onClick={scrollToTeam}>
								ÜBER UNS
							</Button>
							<Button variant="link" asChild>
								<Link href={"/careers"}>KARRIERE</Link>
							</Button>
							<Button variant="link" asChild>
								<Link href={"/imprint"}>IMPRESSUM</Link>
							</Button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
