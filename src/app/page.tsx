"use client";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Team from "@/components/sections/Team";
import UseCases from "@/components/sections/Cases";
import Contact from "@/components/sections/Contact";
import Approach from "@/components/sections/Approach";
import Mission from "@/components/sections/Mission";
import { LanguageProvider } from "@/providers/language";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<LanguageProvider>
			<Header />

			<div className="max-w-screen-2xl mx-auto grid min-h-dvh justify-center grid-cols-[1rem_minmax(0,_1fr)_1rem] sm:grid-cols-[2rem_minmax(0,_1fr)_2rem] overflow-x-hidden no-scrollbar">
				<div className="bg-dashes-grid border-x"></div>
				<div className="">
					<Hero />
					<Problem />
					<Mission />
					<UseCases />
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
