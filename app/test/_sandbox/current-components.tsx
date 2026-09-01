"use client";

import React from "react";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import GlitchText from "@/components/effects/glitch-text";
import ScrambleText from "@/components/effects/scramble-text";
import { defaultProjects } from "@/data/projects";
import { LibraryPage, Category, Specimen } from "./library-specimen";

/**
 * Current Components — what's actually live in components/.
 *
 * Every specimen here is imported straight from production, never
 * reimplemented, so a regression there shows up here too. Theme-driven, so
 * it renders exactly as the production surface does.
 */
export default function CurrentComponents() {
	return (
		<LibraryPage
			eyebrow="Component Library"
			title="Current Components"
			description={
				<>
					Live specimens imported straight from{" "}
					<code className="font-mono text-[#80deea]">components/</code>. These are
					theme-driven, so they render exactly as the production surface does.
				</>
			}
		>
			<Category name="Typography">
				<Specimen name="GlitchText" source="components/effects/glitch-text.tsx">
					<GlitchText text="Ryan Luo" className="relative text-6xl md:text-8xl font-bold text-emphasis" />
				</Specimen>

				<Specimen name="ScrambleText" source="components/effects/scramble-text.tsx">
					<p className="font-display text-3xl font-light text-subtle">
						I am a&nbsp;
						<ScrambleText
							words={["ML Engineer", "Web Developer", "Python Developer"]}
							className="text-accent"
						/>
					</p>
				</Specimen>
			</Category>

			<Category name="Content">
				<Specimen name="Card" source="components/ui/card.tsx">
					<div className="grid gap-6 md:grid-cols-2">
						{defaultProjects.slice(0, 2).map((project) => (
							<Card key={project.id} project={project} />
						))}
					</div>
				</Specimen>
			</Category>

			<Category name="Layout">
				<Specimen name="Container" source="components/ui/container.tsx">
					<Container className="border border-dashed border-[#b388ff]/50 py-4 text-center font-mono text-xs text-zinc-400">
						container mx-auto max-w-7xl
					</Container>
				</Specimen>

				<Specimen name="Navbar" source="components/ui/navbar.tsx">
					<p className="font-mono text-xs text-zinc-500">
						Fixed to the viewport, so it is already rendered at the top of this page
						by the root layout rather than duplicated here.
					</p>
				</Specimen>
			</Category>

			<Category name="Effects">
				<Specimen name="NeonBackground" source="components/effects/neon-background.tsx">
					<p className="font-mono text-xs text-zinc-500">
						Scroll-driven ambient wash, bound to <code>#projects-grid</code>. It has
						no standalone appearance — see the Home route.
					</p>
				</Specimen>
			</Category>
		</LibraryPage>
	);
}
