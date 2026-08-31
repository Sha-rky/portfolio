"use client";

import React from "react";
import { Project, defaultProjects } from "@/data/projects";
import { Container } from "@/components/container";
import { Card } from "@/components/card";
import { gridVariants } from "@/components/variants/grid";

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
