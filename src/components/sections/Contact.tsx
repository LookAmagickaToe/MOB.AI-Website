"use client";

import { useState, useEffect } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/providers/language";
import SectionWithMiddleHeading from "../section-top-middle-heading";
import Link from "next/link";

export default function Contact() {
	const { language } = useLanguage();
	const [calendlyLoaded, setCalendlyLoaded] = useState(false);

	// Load Calendly only if cookie consent is given
	useEffect(() => {
		const consent = getCookieConsentValue();

		if (consent === "true" && !document.querySelector("#calendly-script")) {
			const script = document.createElement("script");
			script.id = "calendly-script";
			script.src = "https://assets.calendly.com/assets/external/widget.js";
			script.async = true;
			script.onload = () => setCalendlyLoaded(true);
			document.body.appendChild(script);
		} else if (consent === "true") {
			// Script already loaded previously
			setCalendlyLoaded(true);
		}
	}, []);

	// Initialize Calendly widgets once script is loaded
	useEffect(() => {
		if (calendlyLoaded) {
			const interval = setInterval(() => {
				if ((window as any).Calendly && typeof (window as any).Calendly.initInlineWidgets === "function") {
					(window as any).Calendly.initInlineWidgets();
					clearInterval(interval);
				}
			}, 100);
			// Safety timeout
			setTimeout(() => clearInterval(interval), 3000);
		}
	}, [calendlyLoaded]);

	return (
		<SectionWithMiddleHeading preheading={null} heading={language === "en" ? "Get in Touch" : "Kontakt aufnehmen"} subheading={null}>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
				<div>
					<h3 className="text-4xl font-heading mb-9 ">{language === "en" ? "Contact Information" : "Kontaktinformation"}</h3>
					<div className="space-y-4">
						<Card className="bg-card border border-dashed  ">
							<CardContent className="p-6 flex items-start space-x-4">
								<Mail className="h-6 w-6  mt-1" />
								<div>
									<h4 className="font-medium text-lg ">Email</h4>
									<p className="overflow-auto whitespace-nowrap">kontakt@isarai.de</p>
								</div>
							</CardContent>
						</Card>

						<Card className="bg-card border border-dashed  ">
							<CardContent className="p-6 flex items-start space-x-4">
								<Phone className="h-6 w-6 mt-1" />
								<div>
									<h4 className="font-medium text-lg ">{language === "en" ? "Phone" : "Telefon"}</h4>
									<p className="text-muted-foreground">+49 174 624 78 15</p>
								</div>
							</CardContent>
						</Card>

						<Card
							onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Lichtenbergstraße+6,+85748+Garching+bei+München", "_blank")}
							className="bg-card border border-dashed  "
						>
							<CardContent className="p-4 flex items-start space-x-4">
								<MapPin className="h-6 w-6  mt-1" />
								<div>
									<h4 className="font-medium text-lg ">{language === "en" ? "Mail Address" : "Anschrift"}</h4>
									<p className="text-muted-foreground">Lichtenbergstraße 6, 85748 Garching bei München</p>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="mt-16">
						<Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md w-full" asChild>
							<Link href="mailto:info@isarai.de">{language === "en" ? "Send us a Message" : "Sende uns eine Nachricht"}</Link>
						</Button>
					</div>
				</div>

				<div>
					<h3 className="text-4xl font-heading mb-8 ">{language === "en" ? "Schedule a Meeting" : "Buche ein Treffen"}</h3>

					{getCookieConsentValue() === "true" ? (
						<>
							{/* Calendly script loads inline only after consent */}
							<script id="calendly-inline-script" type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
							<div
								className="calendly-inline-widget bg-card border border-blue-900/30 rounded-2xl p-1 overflow-hidden"
								data-url="https://calendly.com/maxime-christian-manageandmore/30min?hide_event_type_details=1"
								style={{ minWidth: "320px", height: "440px" }}
							/>
						</>
					) : (
						<div className="flex items-center justify-center h-[440px] border border-blue-900/30 bg-card/30 rounded-2xl px-6 text-center text-blue-300">
							{language === "en" ? (
								<>
									To book a meeting, please accept cookies at the bottom of the page.
									<br />
									You may need to refresh the page for the cookies to take effect.
								</>
							) : (
								<>
									Bitte akzeptieren Sie die Cookies, um ein Meeting direkt zu buchen.
									<br />
									Möglicherweise müssen Sie die Seite neu laden damit die Cookies wirksam werden.
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</SectionWithMiddleHeading>
	);
}
