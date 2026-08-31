"use client";

import React from "react";
import Image from "next/image";
import { useThemeMode } from "@/app/test/_components/ui/theme-provider";
import { Project } from "@/data/projects";
import { cardVariants } from "@/app/test/_components/ui/variants/card";

export interface CardProps {
	project: Project;
	className?: string;
}

export function Card({ project, className = "" }: CardProps) {
	// Structural-only: the retro window chrome is extra DOM that exists in the
	// citypop theme and nowhere else. All *colours* come from the token layer.
	const { theme } = useThemeMode();
	const showWindowChrome = theme === "citypop";

	const { container, imageWrapper, title, description, tagList, tag } = cardVariants();

	return (
		<div className={container({ className })}>
			{showWindowChrome && (
				<div className="px-3 py-1.5 flex items-center justify-between font-mono text-xs select-none border-b-2 border-border bg-surface-raised -mx-5 -mt-5 mb-4 shrink-0">
					<span className="font-extrabold text-xs tracking-wider text-secondary glow-accent">
						&lt;/&gt;
					</span>
					<div className="flex items-center gap-1.5 shrink-0 pointer-events-none">
						<div className="w-4 h-4 flex items-center justify-center bg-secondary border border-background shadow-[1px_1px_0px_var(--theme-bg)]">
							<span className="w-1.5 h-[2px] bg-background translate-y-0.5" />
						</div>
						<div className="w-4 h-4 flex items-center justify-center bg-border border border-background shadow-[1px_1px_0px_var(--theme-bg)]">
							<span className="w-1.5 h-1.5 border-[1.5px] border-background" />
						</div>
						<div className="w-4 h-4 flex items-center justify-center bg-accent border border-background shadow-[1px_1px_0px_var(--theme-bg)]">
							<span className="font-bold text-[10px] text-accent-foreground leading-none">✕</span>
						</div>
					</div>
				</div>
			)}

			{project.imageUrl && (
				<div className={imageWrapper()}>
					<Image
						src={project.imageUrl}
						alt={project.title}
						width={800}
						height={450}
						className="w-full h-full object-cover"
					/>
				</div>
			)}

			<h3 className={title()}>{project.title}</h3>

			<p className={description()}>{project.description}</p>

			{project.technologies && project.technologies.length > 0 && (
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

export default Card;
