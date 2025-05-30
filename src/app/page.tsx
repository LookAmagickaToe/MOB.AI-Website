"use client";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Team from "@/components/sections/Team";
import UseCases1 from "@/components/sections/Cases";
import UseCases2 from "@/components/sections/Cases2";

import Contact from "@/components/sections/Contact";
import Approach1 from "@/components/sections/Approach";
import { Approach } from "@/components/sections/Approach2";
import Mission1 from "@/components/sections/Mission";
import { Mission } from "@/components/sections/Mission3";
import { LanguageProvider } from "@/providers/language";
import WeBuildCTA from "@/components/sections/WeBuildCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mission2 from "@/components/sections/Mission2";

export default function Home() {
	return (
		<LanguageProvider>
			<Header />

			<div className="max-w-screen-2xl mx-auto grid min-h-dvh justify-center grid-cols-[1rem_minmax(0,_1fr)_1rem] sm:grid-cols-[2rem_minmax(0,_1fr)_2rem] overflow-x-hidden no-scrollbar">
				<div className="bg-dashes-grid border-x"></div>
				<div className="">
					<Hero />
					<Problem />
					{/* <Mission1 /> */}
					<Mission2 />
					{/* <Mission /> */}
					{/* <UseCases1 /> */}
					<WeBuildCTA />
					<UseCases2 />
					{/* <Approach1 /> */}
					<Approach />
					<Team />

					<Contact />
				</div>
				<div className="bg-dashes-grid border-x"></div>
			</div>
			<Footer />
		</LanguageProvider>
	);
}
