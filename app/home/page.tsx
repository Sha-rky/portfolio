"use client"

import Hero from "@/components/hero";
import ProjectGrid from "@/components/project-grid";
import NeonBackground from "@/components/neon-background";

export default function Home() {
	return (
		<>
			<Hero />
			<NeonBackground />
			<ProjectGrid />
		</>
	);
}
