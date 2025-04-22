"use client";

import { useState, useEffect } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/providers/language";
import SectionWithMiddleHeading from "../section-top-middle-heading";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Contact() {
	const { language } = useLanguage();
	const [calendlyLoaded, setCalendlyLoaded] = useState(false);

	// Load Calendly only if cookie consent is given
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "isar-ai" });
			cal("ui", { theme: "dark", cssVarsPerTheme: { light: { "cal-brand": "#000" }, dark: { "cal-brand": "#fff" } }, hideEventTypeDetails: true, layout: "month_view" });
		})();
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
		<div id="contact">
			<SectionWithMiddleHeading
				small
				preheading={null}
				heading={language === "en" ? "Get in Touch" : "Kontakt aufnehmen"}
				subheading={language === "en" ? "Schedule your free 30-minute intro call – no strings attached." : "Buchen Sie ein unverbindliches 30-minütiges Erstgespräch"}
			>
				<div className="grid grid-cols-1 lg:grid-cols-1 gap-12 p-8">
					{/* <div>
					<h3 className="mb-9 ">{language === "en" ? "Contact Information" : "Kontaktinformation"}</h3>
					<div className="space-y-4">
						<Card className="bg-card border border-dashed  ">
							<CardContent className="p-6 flex items-start space-x-4">
								<Mail className="h-6 w-6  mt-1" />
								<div>
									<h4>Email</h4>
									<p className="overflow-auto whitespace-nowrap">info@isarai.de</p>
								</div>
							</CardContent>
						</Card>

						<Card className="bg-card border border-dashed  ">
							<CardContent className="p-6 flex items-start space-x-4">
								<Phone className="h-6 w-6 mt-1" />
								<div>
									<h4>{language === "en" ? "Phone" : "Telefon"}</h4>
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
									<h4>{language === "en" ? "Mail Address" : "Anschrift"}</h4>
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
				</div> */}

					<div className="">
						{/* <h3 className=" mb-8 ">{language === "en" ? "Schedule a Meeting" : "Buche ein Treffen"}</h3> */}
						<Cal
							namespace="isar-ai"
							calLink="sommertime/isar-ai"
							style={{ width: "100%", height: "100%", overflow: "scroll" }}
							config={{ layout: "month_view", theme: "dark" }}
						/>
					</div>
				</div>
				<div className="mx-auto text-center border-t p-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10">
					<span className="text-accent-foreground flex gap-2 items-center">
						<Mail className="size-4" />
						info@isarai.de
					</span>

					<span className="text-accent-foreground flex gap-2 items-center">
						<Phone className="size-4" />
						+49 174 624 78 15
					</span>
				</div>
			</SectionWithMiddleHeading>
		</div>
	);
}
