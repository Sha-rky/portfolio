import Image from "next/image";
import { Project } from "@/data/projects";
import { cardVariants } from "@/components/variants/card";

export interface CardProps {
	project: Project;
	className?: string;
}

export default function Card({ project, className }: CardProps) {
	const { container, mediaWrapper, mediaPlaceholder, title, description, tagList, tag } =
		cardVariants();

	return (
		<div className={container({ className })}>
			<div className={mediaWrapper()}>
				{project.imageUrl ? (
					<Image
						src={project.imageUrl}
						alt={project.title}
						width={800}
						height={450}
						className="w-full h-auto object-contain"
					/>
				) : (
					<div className={mediaPlaceholder()}>Project Image</div>
				)}
			</div>

			<h3 className={title()}>{project.title}</h3>
			<p className={description()}>{project.description}</p>

			{project.technologies && (
				<div className={tagList()}>
					{project.technologies.map((tech) => (
						<span key={tech} className={tag()}>
							{tech}
						</span>
					))}
				</div>
			)}
		</div>
	);
}
