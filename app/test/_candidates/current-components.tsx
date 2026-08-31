"use client";

import React from "react";
import Card from "@/components/card";
import Container from "@/components/container";
import HeroGlitchTitle from "@/components/hero-glitch-title";
import TextScramble from "@/components/text-scramble";
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
				<Specimen name="HeroGlitchTitle" source="components/hero-glitch-title.tsx">
					<HeroGlitchTitle text="Ryan Luo" />
				</Specimen>

				<Specimen name="TextScramble" source="components/text-scramble.tsx">
					<p className="font-display text-3xl font-light text-subtle">
						I am a&nbsp;
						<TextScramble
							words={["ML Engineer", "Web Developer", "Python Developer"]}
							className="text-accent"
						/>
					</p>
				</Specimen>
			</Category>

			<Category name="Content">
				<Specimen name="Card" source="components/card.tsx">
					<div className="grid gap-6 md:grid-cols-2">
						{defaultProjects.slice(0, 2).map((project) => (
							<Card key={project.id} project={project} />
						))}
					</div>
				</Specimen>
			</Category>

			<Category name="Layout">
				<Specimen name="Container" source="components/container.tsx">
					<Container className="border border-dashed border-[#b388ff]/50 py-4 text-center font-mono text-xs text-zinc-400">
						container mx-auto max-w-7xl
					</Container>
				</Specimen>

				<Specimen name="Navbar" source="components/navbar.tsx">
					<p className="font-mono text-xs text-zinc-500">
						Fixed to the viewport, so it is already rendered at the top of this page
						by the root layout rather than duplicated here.
					</p>
				</Specimen>
			</Category>

			<Category name="Effects">
				<Specimen name="NeonBackground" source="components/neon-background.tsx">
					<p className="font-mono text-xs text-zinc-500">
						Scroll-driven ambient wash, bound to <code>#projects-grid</code>. It has
						no standalone appearance — see the Home route.
					</p>
				</Specimen>
			</Category>
		</LibraryPage>
	);
}
