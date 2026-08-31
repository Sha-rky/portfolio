import Hero from "@/components/hero";
import ProjectGrid from "@/components/project-grid";
import NeonBackground from "@/components/neon-background";

export default function Home() {
	return (
		<main>
			<Hero />
			<NeonBackground />
			<ProjectGrid />
		</main>
	);
}
