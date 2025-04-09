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
					<div className="flex items-center gap-2 sm:gap-4">
						<button onClick={scrollToContact} className="uppercase group relative px-2 sm:px-8 text-xs sm:text-base text-sky-400 h-9">
							<span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30"></span>
							{language === "en" ? "Get in Touch" : "Kontakt aufnehmen"}
						</button>

						<Button variant="secondary" onClick={toggleLanguage} size={"sm"}>
							{language === "en" ? "DE" : "EN"}
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
