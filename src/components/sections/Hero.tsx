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
			title: <h1 className="text-3xl sm:text-7xl">Leverage the Agentic AI Revolution</h1>,
			description: "We implement the latest AI technology directly from university into your business processes, dramatically increasing your efficiency.",
			buttonText: "Get in Touch",
			supportedBy: "Supported by",
		},
		de: {
			title: <h1 className="text-3xl sm:text-7xl break-words whitespace-pre-wrap">Machen Sie KI Agenten zu Ihrem Wettbwerbsvorteil</h1>,
			description: "Wir implementieren neueste KI-Technologie direkt von der Uni in Ihren Geschäftsabläufen und steigern so drastisch Ihre Effizienz.",
			buttonText: "Kontakt aufnehmen",
			supportedBy: "Unterstützt von",
		},
	};
	const { title, description, buttonText, supportedBy } = text[language];

	return (
		<>
			{/* <section className="w-full pt-4 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 px-4"></section> */}
			<section className="w-full sm:h-[calc(100vh-100px)] bg-muted/10 p-4 sm:p-6">
				<div className="p-4 sm:p-6 mx-auto border rounded bg-card">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start sm:items-center sm:h-[calc(100vh-100px-6rem)] w-full ">
						<div className="flex flex-col space-y-6">
							<div>{title}</div>
							<p className="text-xl text-muted-foreground  max-w-[600px]">{description}</p>
							<div className="pt-4">
								<button onClick={scrollToContact} className="uppercase group relative px-8 py-2 text-lg sm:w-auto w-full text-sky-400">
									<span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30"></span>
									{buttonText}
								</button>
							</div>
						</div>

						<div className="rounded overflow-hidden border sm:p-6 bg-dashes-grid">
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
					<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 px-4">
						<Image src="/unternehmertum.svg" alt="Unternehmertum" height={0} width={90} className="object-contain" />
						<Image src="/manage-and-more.svg" alt="Manage and More" height={0} width={240} className="object-contain" />
						<Image src="/tu-muenchen.svg" alt="TUM" height={0} width={80} className="object-contain" />
					</div>
				</div>
			</section>
		</>
	);
}
