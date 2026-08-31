"use client";

import React from "react";
import { Project, defaultProjects } from "@/data/projects";
import { Container } from "@/app/test/_components/ui/container";
import { Card } from "@/app/test/_components/ui/card";
import { gridVariants } from "@/app/test/_components/ui/variants/grid";

export interface GridProps {
	projects?: Project[];
	className?: string;
}

export function Grid({ projects = defaultProjects, className = "" }: GridProps) {
	const { container, header, title, subtitle, grid } = gridVariants();

	return (
		<section className={container({ className })}>
			<Container>
				<div className={header()}>
					<h2 className={title()}>Projects Showcase</h2>
					<p className={subtitle()}>Explore my latest work and personal projects</p>
				</div>

				<div id="projects-grid" className={grid()}>
					{projects.map((project) => (
						<Card key={project.id} project={project} />
					))}
				</div>
			</Container>
		</section>
	);
}

export default Grid;
