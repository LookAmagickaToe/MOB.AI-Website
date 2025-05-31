"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLanguage } from "@/providers/language";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { Marquee } from "../magicui/marquee";
import { ArrowRight } from "lucide-react";

export default function Hero() {
	const { language } = useLanguage();
	const scrollToContact = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToContent = () => {
		const contactSection = document.getElementById("content");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Change the background to a office location (outside of the building, it should be a light background). Change as well our outfits to business casual (everyone should wear very casually a shirt - very imporant: two buttons should be open on each shirt).
	// Object to store text based on language
	const text = {
		en: {
			title: <h1 className="text-3xl sm:text-7xl">Leverage the Agentic AI Revolution</h1>,
			description: "We implement the latest AI technology directly from university into your business processes, dramatically increasing your efficiency.",
			buttonText: "Get in Touch",
			supportedBy: "Supported by",
		},
		de: {
			title: <h1 className="text-4xl sm:text-7xl break-words whitespace-pre-wrap">Machen Sie KI-Agenten zu &shy;Ihrem Wett&shy;be&shy;werbs&shy;vor&shy;teil</h1>,
			description: "Wir implementieren neueste KI-Technologie direkt von der Uni in Ihren Geschäftsabläufen und steigern so drastisch Ihre Effizienz.",
			buttonText: "Kontakt aufnehmen",
			supportedBy: "Unterstützt von",
		},
	};
	const { title, description, buttonText, supportedBy } = text[language];

	return (
		<>
			<section className="w-full sm:h-[calc(100vh)] bg-muted/20 p-2 md:p-6">
				<div className="p-2 sm:p-6 mx-auto border rounded bg-card">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start lg:items-center sm:h-[calc(100vh-100px-0rem)] w-full ">
						<div className="flex flex-col space-y-2 md:space-y-6 ">
							<span className="sm:text-lg text-[0.5rem] relative uppercase text-accent-foreground -mb-0 text">Wir sind ein KI-Agentic Produkt Studio</span>
							<div>{title}</div>
							<p className="text-xs sm:text-xl text-muted-foreground max-w-[600px]">{description}</p>
							<div className="pt-2 md:pt-4 flex items-center gap-4">
								<Button onClick={scrollToContact} className="uppercase w-full md:w-auto">
									{buttonText}
									<ArrowRight className="size-4" />
								</Button>
								<Button variant="secondary" onClick={scrollToContent} className="hidden sm:block uppercase">
									Mehr Erfahren
								</Button>
							</div>
						</div>

						<div className="rounded overflow-hidden border p-2 sm:p-6 bg-dashes-grid">
							{/* <div className="relative h-[400px] lg:h-[600px] rounded overflow-hidden ">
								<Image src="/groupimage.png" alt="Founder Team" fill className="object-cover rounded-sm image-render-pixel" priority />
							</div> */}
							<div className="relative w-full aspect-video rounded overflow-hidden ">
								<Image src="/groupimage.png" alt="Founder Team" fill className="object-cover rounded-lg" priority />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-with-lines py-10 flex flex-col items-center">
				<span className="relative uppercase text-accent-foreground -mb-0">Unterstützt von</span>
				<div className="relative flex w-full max-w-2xl flex-col items-center justify-center overflow-hidden mt-10">
					<Marquee pauseOnHover className="[--duration:20s] [--gap:5rem]">
						<Image src="/unternehmertum.svg" alt="Unternehmertum" height={0} width={90} className="object-contain" />
						<Image src="/manage-and-more.svg" alt="Manage and More" height={0} width={240} className="object-contain" />
						<Image src="/tu-muenchen.svg" alt="TUM" height={0} width={80} className="object-contain" />
					</Marquee>

					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background"></div>
					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background"></div>
				</div>
			</section>
		</>
	);
}
