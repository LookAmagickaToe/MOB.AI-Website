"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/providers/language";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isMobile = useMobile();
	const { language, toggleLanguage } = useLanguage();

	const scrollToContact = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b border-muted backdrop-blur-lg">
			<div className="max-w-screen-2xl mx-auto px-4 md:px-8 ">
				<div className="flex h-16 items-center justify-between">
					{/* Group logo and text together */}
					<div className="flex items-center space-x-2">
						<div className="relative h-8 w-auto aspect-[2/1] ">
							<Image src="/isarailogo.png" alt="ISAR AI Logo" fill className="rounded-lg object-contain" priority />
						</div>
						<span className="h-full flex items-center font-semibold text-sky-400 text-[28px] leading-none ">AI</span>
					</div>
					<div className="flex items-center gap-4">
						<button onClick={scrollToContact} className="uppercase group relative px-8  text text-sky-400 h-8">
							<span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30"></span>
							{language === "en" ? "Get in Touch" : "Kontakt aufnehmen"}
							<svg width="10" height="10" viewBox="0 0 5 5" className="absolute top-[-4.5px] left-[-4.5px]  dark:fill-sky-400">
								<path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
							</svg>
							<svg width="10" height="10" viewBox="0 0 5 5" className="absolute top-[-4.5px] right-[-4.5px]  dark:fill-sky-400">
								<path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
							</svg>
							<svg width="10" height="10" viewBox="0 0 5 5" className="absolute bottom-[-4.5px] left-[-4.5px]  dark:fill-sky-400">
								<path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
							</svg>
							<svg width="10" height="10" viewBox="0 0 5 5" className="absolute bottom-[-4.5px] right-[-4.5px]  dark:fill-sky-400">
								<path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
							</svg>
						</button>

						<Button
							variant="outline"
							onClick={toggleLanguage}
							size={"sm"}
							className="border-muted-foreground text-muted-foreground hover:text-primary-foreground hover:border-primary-foreground"
						>
							{language === "en" ? "DE" : "EN"}
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
