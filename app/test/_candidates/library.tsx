"use client";

import React from "react";
import Card from "@/components/card";
import Container from "@/components/container";
import HeroGlitchTitle from "@/components/hero-glitch-title";
import TextScramble from "@/components/text-scramble";
import { defaultProjects } from "@/data/projects";

/**
 * Library — the components that made the cut.
 *
 * Everything shown here lives in `components/` and is styled through the
 * theme registry, so this page is the honest view of what production
 * actually renders. Unlike the other candidates it deliberately imports
 * rather than reimplements: if a component regresses, it regresses here too.
 *
 * The page chrome itself is styled directly, per the sandbox convention —
 * only the specimens use variants.
 */

function Specimen({
	name,
	source,
	children,
}: {
	name: string;
	source: string;
	children: React.ReactNode;
}) {
	return (
		<section className="space-y-3">
			<div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2">
				<h2 className="font-mono text-sm font-semibold tracking-wider text-[#80deea]">
					{name}
				</h2>
				<code className="font-mono text-[11px] text-zinc-500">{source}</code>
			</div>
			<div className="rounded-lg border border-white/10 bg-black/40 p-6">{children}</div>
		</section>
	);
}

export default function Library() {
	return (
		<div className="min-h-screen bg-[#0a0a0a] px-4 py-20 md:px-10">
			<div className="mx-auto max-w-5xl space-y-12">
				<header className="space-y-2 border-b border-white/10 pb-6">
					<p className="font-mono text-[11px] uppercase tracking-widest text-[#ff85c2]">
						Component Library
					</p>
					<h1 className="font-display text-3xl font-bold uppercase tracking-widest text-white md:text-4xl">
						Kept Components
					</h1>
					<p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
						Live specimens imported straight from{" "}
						<code className="font-mono text-[#80deea]">components/</code>. These are
						theme-driven, so they render exactly as the production surface does.
					</p>
				</header>

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

				<Specimen name="Card" source="components/card.tsx">
					<div className="grid gap-6 md:grid-cols-2">
						{defaultProjects.slice(0, 2).map((project) => (
							<Card key={project.id} project={project} />
						))}
					</div>
				</Specimen>

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

				<Specimen name="NeonBackground" source="components/neon-background.tsx">
					<p className="font-mono text-xs text-zinc-500">
						Scroll-driven ambient wash, bound to <code>#projects-grid</code>. It has
						no standalone appearance — see the Home route.
					</p>
				</Specimen>
			</div>
		</div>
	);
}
