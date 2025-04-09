import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Team from "@/components/sections/Team";
import UseCases from "@/components/sections/Cases";
import Contact from "@/components/sections/Contact";
import Approach from "@/components/sections/Approach";
import Mission from "@/components/sections/Mission";

export default function Home() {
	return (
		<div className="max-w-screen-xl mx-auto grid min-h-dvh justify-center grid-cols-[2.5rem_minmax(0,_1fr)_2.5rem]">
			<div className="bg-dashes-grid border-x"></div>
			<div className="">
				<Hero />
				<Problem />
				<Mission />
				<Approach />
				<Team />
				<UseCases />
				<Contact />
			</div>
			<div className="bg-dashes-grid border-x"></div>
		</div>
	);
}
