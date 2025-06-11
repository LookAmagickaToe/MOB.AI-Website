"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/providers/language";
import { link } from "fs";
import SectionWithMiddleHeading from "../section-top-middle-heading";
import Link from "next/link";

export default function Team() {
	const { language } = useLanguage();
	const founders = [
		{
			name: "Maxime Christian",
			role: "AI Engineering",
			biogerman:
				"Maxime ist Informatikstudent an der TUM und der Universität Cambridge UK. Er hat als Freelancer an mehreren Projekten für KMU gearbeitet, insbesondere im Bereich der Digitalisierung von Geschäftsprozessen.",
			bio: "Maxime is a computer science student at TUM and Cambridge University UK. He has been working as Freelancer on several projects for SME's especially in the field of Business process digitization.",
			image: "/maxime.png",
			linkedin: "https://www.linkedin.com/in/maxime-christian-33189116b/",
			logos: ["/tum.png", "/cambridge.png"],
		},
		{
			name: "Oliver Sommer",
			role: "AI Engineering",
			biogerman:
				"Oliver studiert Software Systems an der Uni Zürich, ist leidenschaftlicher Entwickler und war zuvor CTO bei peeker.ai. Er hat bereits mehrere Unternehmen als Freelancer bei Software & KI Projekten unterstützt.",
			bio: "Oliver is studying Software Systems at the University of Zurich, is a passionate developer, and previously served as CTO at peeka.ai. He has already supported several companies as a freelancer on software and AI projects.",
			image: "/oliver2.jpg",
			linkedin: "https://www.linkedin.com/in/oli-sommer/",
			logos: ["/uzh.png", "/lmu.png"],
		},
		{
			name: "Bruno Polster",
			role: "Project Management",
			biogerman:
				"Bruno hat an der LMU und am King’s College in London studiert und sich hierbei auf die Schnittstelle zwischen Business und KI fokussiert. Parallel hat er bei mehreren Top-Startups in München im Product Management gearbeitet.",
			bio: "Bruno studied at LMU and King’s College London, focusing on the intersection of business and artificial intelligence. Alongside his studies, he worked in product management at several top startups in Munich.",
			image: "/bruno.jpg",
			linkedin: "https://www.linkedin.com/in/bruno-polster/",
			logos: ["/lmu.png", "/kingscollege.png"],
		},
	];

	return (
		<div id="team">
			<SectionWithMiddleHeading small preheading={null} heading={language === "en" ? "Meet the Team" : "Das Team"} subheading={null}>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 ">
					{founders.map((founder, index) => (
						<div key={index} className="flex flex-col bg-card overflow-hidden border rounded-lg mx-auto w-full ">
							<div className="relative h-80 w-auto m-4 rounded overflow-hidden">
								<Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover object-top" />
							</div>

							<div className="p-6 flex flex-col grow">
								<div className="flex flex-col items-center justify-between mb-1">
									<h3>{founder.name}</h3>
									<div className="mx-auto">
										<span className="text-center">{founder.role}</span>
									</div>
									<div className="flex items-center gap-3 mt-auto pt-2">
										{founder.logos?.map((logo, index) => (
											<div key={index} className="h-6 w-auto">
												<Image
													src={logo}
													alt="Affiliation logo"
													className="h-full w-auto object-contain"
													width={0} // required to avoid layout shift in Next.js 13+
													height={0}
													sizes="32px"
												/>
											</div>
										))}
									</div>
								</div>

								<p className="my-5 text-xs md:text-base grow text-muted-foreground text-center md:text-left">{language === "en" ? founder.bio : founder.biogerman}</p>

								<Button variant="ghost" className="w-full" asChild>
									<Link href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="w-full">
										Linkedin
										<ArrowUpRight className="size-4" />
									</Link>
								</Button>
							</div>
						</div>
					))}
				</div>
			</SectionWithMiddleHeading>
		</div>
	);
}
