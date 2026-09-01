import Hero from "@/components/sections/hero";
import ProjectGrid from "@/components/sections/project-grid";
import NeonBackground from "@/components/effects/neon-background";

export default function Home() {
	return (
		<main>
			<Hero />
			<NeonBackground />
			<ProjectGrid />
		</main>
	);
}
