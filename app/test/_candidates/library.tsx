"use client";

import React from "react";
import Card from "@/components/card";
import Container from "@/components/container";
import HeroGlitchTitle from "@/components/hero-glitch-title";
import TextScramble from "@/components/text-scramble";
import { defaultProjects } from "@/data/projects";
import TerminalWindow from "./terminal-window";
import { RetroGeekProjectCard } from "./retro-geek-card";
import { DreamyMagicalProjectCard } from "./dreamy-magical-card";
import MarqueePlayer from "./marquee-player";
import VimCursor from "./vim-cursor";

/**
 * Library — the components that made the cut.
 *
 * Two kinds of specimen live here, kept honestly distinct:
 *
 * 1. Production components, imported straight from `components/` — these
 *    are theme-driven and render exactly as the production surface does. If
 *    one regresses, it regresses here too.
 * 2. Sandbox pieces kept from candidates that were otherwise deleted in a
 *    full /test clear-out. These style directly (no tv(), no registry) and
 *    are not wired into production — they're preserved here rather than
 *    lost when their source candidate was removed.
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

/** Specimen variant for kept sandbox pieces: the demo box itself carries the
 * specimen's own background ("底色"), rather than the neutral bg-black/40
 * used for production specimens, since the background is part of what's
 * being kept here. */
function SwatchSpecimen({
	name,
	source,
	background,
	children,
}: {
	name: string;
	source: string;
	background: string;
	children: React.ReactNode;
}) {
	return (
		<section className="space-y-3">
			<div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2">
				<h2 className="font-mono text-sm font-semibold tracking-wider text-[#ff85c2]">
					{name}
				</h2>
				<code className="font-mono text-[11px] text-zinc-500">{source}</code>
			</div>
			<div className="rounded-lg border border-white/10 p-6" style={{ backgroundColor: background }}>
				{children}
			</div>
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

				<div className="border-t-2 border-dashed border-white/10 pt-4">
					<p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
						Kept from a cleared sandbox — styled directly, not in{" "}
						<code className="text-zinc-400">components/</code>
					</p>
				</div>

				<Specimen name="Marquee Player" source="was: v4-playground.tsx">
					<MarqueePlayer />
				</Specimen>

				<Specimen name="Vim Cursor" source="was: v4-playground.tsx">
					<VimCursor />
				</Specimen>

				<SwatchSpecimen
					name="City Pop Card — Dark"
					source="was: v6-citypop-spec.tsx"
					background="#000000"
				>
					<TerminalWindow
						variant="citypop"
						image="/graphrag.png"
						title="GraphRAG Chatbot for Podcast QA"
						description="結合 Whisper 語音轉錄與微軟 GraphRAG 實體拓撲知識圖譜架構，於萬小時語音文庫中實現跨集數概念鏈結之深度脈絡問答。"
						tags={["Whisper", "GraphRAG", "KnowledgeGraph", "Python"]}
					/>
				</SwatchSpecimen>

				<SwatchSpecimen
					name="City Pop Card — Light"
					source="was: v7-citypop-light-spec.tsx"
					background="#ece5f6"
				>
					<TerminalWindow
						variant="citypop-light"
						image="/graphrag.png"
						title="GraphRAG Chatbot for Podcast QA"
						description="結合 Whisper 語音轉錄與微軟 GraphRAG 實體拓撲知識圖譜架構，於萬小時語音文庫中實現跨集數概念鏈結之深度脈絡問答。"
						tags={["Whisper", "GraphRAG", "KnowledgeGraph", "Python"]}
					/>
				</SwatchSpecimen>

				<SwatchSpecimen
					name="Retro Geek Card"
					source="was: retro-geek.tsx"
					background="#090414"
				>
					<div className="max-w-md">
						<RetroGeekProjectCard />
					</div>
				</SwatchSpecimen>

				<SwatchSpecimen
					name="Dreamy Magical Card"
					source="was: dreamy-magical.tsx"
					background="#0c051a"
				>
					<div className="max-w-md">
						<DreamyMagicalProjectCard />
					</div>
				</SwatchSpecimen>
			</div>
		</div>
	);
}
