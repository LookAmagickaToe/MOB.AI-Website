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
import { cn } from "@/lib/utils";

export default function Contact() {
	const { language } = useLanguage();
	const [calendlyLoaded, setCalendlyLoaded] = useState(false);

	// Load Calendly only if cookie consent is given
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "isar-ai" });
			cal("ui", { theme: "dark", cssVarsPerTheme: { light: { "cal-brand": "#000" }, dark: { "cal-brand": "#fff" } }, hideEventTypeDetails: false, layout: "month_view" });
		})();
	}, []);

	return (
		<div id="contact">
			<Section
				small
				preheading={null}
				heading={language === "en" ? "Get in Touch" : "Kontakt aufnehmen"}
				subheading={
					language === "en" ? "Schedule your free 30-minute intro call – no strings attached." : "Schreiben Sie uns oder buchen Sie ein unverbindliches 30-minütiges Erstgespräch"
				}
			>
				<div className="mx-auto text-center border-y p-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 bg-muted/20">
					<span className="text-accent-foreground flex gap-2 items-center">
						<Mail className="size-4" />
						info@isarai.de
					</span>

					<span className="text-accent-foreground flex gap-2 items-center">
						<Phone className="size-4" />
						+49 174 624 78 15
					</span>
				</div>
				<div className="p-8">
					<Cal namespace="isar-ai" calLink="bruno-polster/isar-ai" style={{ width: "100%", height: "100%", overflow: "scroll" }} config={{ layout: "month_view", theme: "dark" }} />
				</div>
				<div className="mx-auto text-center border-t p-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 bg-muted/20">
					<span className="text-accent-foreground flex gap-2 items-center">
						<Mail className="size-4" />
						info@isarai.de
					</span>

					<span className="text-accent-foreground flex gap-2 items-center">
						<Phone className="size-4" />
						+49 174 624 78 15
					</span>
				</div>
			</Section>
		</div>
	);
}

function Section({ preheading, heading, subheading, children, small = false }: { preheading: string | null; heading: string; subheading: string | null; small?: boolean; children: React.ReactNode }) {
	return (
		<section className="section-with-lines">
			<div className={cn("px-4 md:px-6 py-6 sm:py-20 ", { "py-10": small })}>
				<div className="max-w-3xl mx-auto text-center">
					{preheading && (
						<div className="mb-2">
							<span className="relative uppercase text-accent-foreground sm:text-base text-xs">{preheading}</span>
						</div>
					)}
					<h2 className="text-center">{heading}</h2>
					{subheading && <h4 className="mt-10 text-center text-muted-foreground">{subheading}</h4>}
				</div>
			</div>
			<div className="">{children}</div>
		</section>
	);
}
