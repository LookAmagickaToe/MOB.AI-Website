"use client";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Problem2 from "@/components/sections/Problem2";
import Team from "@/components/sections/Team";
import UseCases2 from "@/components/sections/Cases2";

import Contact from "@/components/sections/Contact";
import { LanguageProvider } from "@/providers/language";
import WeBuildCTA from "@/components/sections/WeBuildCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mission2 from "@/components/sections/Mission2";
import Offer from "@/components/sections/Offer";

export default function Home() {
	return (
		<LanguageProvider>
			<Header />

			<div className="max-w-(--breakpoint-2xl) mx-auto grid min-h-dvh justify-center grid-cols-[1rem_minmax(0,1fr)_1rem] sm:grid-cols-[2rem_minmax(0,1fr)_2rem] overflow-x-hidden no-scrollbar">
				<div className="bg-dashes-grid border-x"></div>
				<div className="">
					<Hero />
					<WeBuildCTA />

					<Problem />
					<Problem2 />

					<Mission2 />

					<Team />

					<Offer />

					<UseCases2 />

					{/* <Approach /> */}

					<Contact />
				</div>
				<div className="bg-dashes-grid border-x"></div>
			</div>
			<Footer />
		</LanguageProvider>
	);
}
