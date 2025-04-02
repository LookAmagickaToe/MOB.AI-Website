"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLanguage } from "@/providers/language";
import CookieConsent from "react-cookie-consent";

export default function Hero() {
	const { language } = useLanguage();
	const scrollToContact = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<>
			<section className="container w-full pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 ">
				<div className="px-4 md:px-6 mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="flex flex-col space-y-6">
							<h1 className="text-4xl font-heading md:text-5xl lg:text-6xl tracking-tigh text-foreground">
								{language === "en" ? "Empowering SMEs with AI Solutions" : "Entfalten Sie das Potential von KI in Ihrem Unternehmen"}
							</h1>
							<p className="text-xl text-muted-foreground  max-w-[600px]">
								{language === "en"
									? "We implement the latest AI technology directly from university into your business processes, dramatically increasing your efficiency."
									: "Wir implementieren neueste KI-Technologie direkt von der Uni in Ihren Geschäftsabläufen und steigern so drastisch Ihre Effizienz."}
							</p>
							<div className="pt-4">
								<Button className=" bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md" onClick={scrollToContact}>
									{language === "en" ? "Get in Touch" : "Kontakt aufnehmen"}
								</Button>
							</div>
						</div>
						<div className="rounded overflow-hidden border border-dashed p-4">
							<div className="relative h-[400px] lg:h-[600px] rounded overflow-hidden shadow-lg shadow-white/5">
								<Image src="/groupimage.jpg" alt="Founder Team" fill className="object-cover rounded-sm image-render-pixel" priority />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-10">
				<div className="mb-15 mx-auto text-center">
					<h1 className="text-2xl md:text-4xl font-heading mb-10">{language === "en" ? "Supported by" : "Unterstützt von"}</h1>
					<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-10">
						<Image src="/unternehmertum.svg" alt="Unternehmertum" height={0} width={90} className="object-contain" />
						<Image src="/manage-and-more.svg" alt="Manage and More" height={0} width={240} className="object-contain" />
						<Image src="/tu-muenchen.svg" alt="TUM" height={0} width={80} className="object-contain" />
					</div>
				</div>
			</section>
		</>
	);
}
