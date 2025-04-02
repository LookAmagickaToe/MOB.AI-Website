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
		<header className="sticky top-0 z-50 w-full border-b border-muted border-dashed backdrop-blur-lg">
			<div className="container mx-auto px-4 md:px-6 ">
				<div className="flex h-16 items-center justify-between">
					{/* Group logo and text together */}
					<div className="flex items-center space-x-2">
						<div className="relative h-8 w-auto aspect-[2/1] ">
							<Image src="/isarailogo.png" alt="ISAR AI Logo" fill className="rounded-lg object-contain" priority />
						</div>
						<span className="h-full flex items-center font-semibold text-blue-500 text-[28px] leading-none ">AI</span>
					</div>
					<div className="flex items-center gap-4">
						<Button className="hidden md:inline-flex bg-foreground hover:bg-foreground/70 " size={"sm"} onClick={scrollToContact}>
							{language === "en" ? "Get in Touch" : "Kontakt aufnehmen"}
						</Button>

						<Button variant="outline" onClick={toggleLanguage} size={"sm"} className="border-foreground">
							{language === "en" ? "DE" : "EN"}
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
