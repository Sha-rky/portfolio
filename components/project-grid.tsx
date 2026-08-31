import Container from "@/components/container";
import Card from "@/components/card";
import { Project, defaultProjects } from "@/data/projects";
import { projectGridVariants } from "@/components/variants/project-grid";

export interface ProjectGridProps {
	projects?: Project[];
}

export default function ProjectGrid({ projects = defaultProjects }: ProjectGridProps) {
	const { section, header, title, subtitle, grid } = projectGridVariants();

	return (
		<Container className="min-h-screen">
			<div className={section()}>
				<div className={header()}>
					<h2 className={title()}>Projects Showcase</h2>
					<p className={subtitle()}>Explore my latest work and personal projects</p>
				</div>

				<div id="projects-grid" className={grid()}>
					{projects.map((project) => (
						<Card key={project.id} project={project} />
					))}
				</div>
			</div>
		</Container>
	);
}
