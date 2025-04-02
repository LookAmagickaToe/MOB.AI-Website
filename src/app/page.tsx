import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Team from "@/components/sections/Team";
import UseCases from "@/components/sections/Cases";
import Contact from "@/components/sections/Contact";
import Approach from "@/components/sections/Approach";
import Mission from "@/components/sections/Mission";

export default function Home() {
	return (
		<div className="relative divide-y divide-dashed">
			<Hero />
			<Problem />
			<Mission />
			<Approach />
			<Team />
			<UseCases />
			<Contact />
		</div>
	);
}
