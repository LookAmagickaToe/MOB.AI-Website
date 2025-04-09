"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLanguage } from "@/providers/language";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

export default function Hero() {
	const { language } = useLanguage();
	const scrollToContact = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Object to store text based on language
	const text = {
		en: {
			title: "Empowering SMEs with AI Solutions",
			description: "We implement the latest AI technology directly from university into your business processes, dramatically increasing your efficiency.",
			buttonText: "Get in Touch",
			supportedBy: "Supported by",
		},
		de: {
			title: "Entfalten Sie das Potential von KI in Ihrem Unternehmen",
			description: "Wir implementieren neueste KI-Technologie direkt von der Uni in Ihren Geschäftsabläufen und steigern so drastisch Ihre Effizienz.",
			buttonText: "Kontakt aufnehmen",
			supportedBy: "Unterstützt von",
		},
	};
	const { title, description, buttonText, supportedBy } = text[language];

	return (
		<>
			<section className="w-full pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 ">
				<div className="px-4 md:px-6 mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full w-full">
						<div className="flex flex-col space-y-6">
							<div>
								<span className="text-accent-foreground">WHY ISARAI?</span>
								<h1>{title}</h1>
							</div>
							<p className="text-xl text-muted-foreground  max-w-[600px]">{description}</p>
							<div className="pt-4">
								<button onClick={scrollToContact} className="uppercase group relative px-8 py-2 text-lg  text-sky-400">
									<span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30"></span>
									{buttonText}
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
							</div>
						</div>

						<div className="rounded overflow-hidden border border-dashed p-4 ">
							<div className="relative h-[400px] lg:h-[600px] rounded overflow-hidden ">
								<Image src="/groupimage.jpg" alt="Founder Team" fill className="object-cover rounded-sm image-render-pixel" priority />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-with-lines py-10">
				<div className="mx-auto text-center">
					<h3 className="mb-10">{supportedBy}</h3>
					<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
						<Image src="/unternehmertum.svg" alt="Unternehmertum" height={0} width={90} className="object-contain" />
						<Image src="/manage-and-more.svg" alt="Manage and More" height={0} width={240} className="object-contain" />
						<Image src="/tu-muenchen.svg" alt="TUM" height={0} width={80} className="object-contain" />
					</div>
				</div>
			</section>
		</>
	);
}
