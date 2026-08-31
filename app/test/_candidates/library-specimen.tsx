"use client";

import React from "react";

/**
 * Shared chrome for the two Library pages (current-components.tsx and
 * candidate-components.tsx). Kept here so both pages categorize and lay out
 * specimens identically instead of drifting apart.
 */

export function LibraryPage({
	eyebrow,
	title,
	description,
	children,
}: {
	eyebrow: string;
	title: string;
	description: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-[#0a0a0a] px-4 py-20 md:px-10">
			<div className="mx-auto max-w-5xl space-y-12">
				<header className="space-y-2 border-b border-white/10 pb-6">
					<p className="font-mono text-[11px] uppercase tracking-widest text-[#ff85c2]">
						{eyebrow}
					</p>
					<h1 className="font-display text-3xl font-bold uppercase tracking-widest text-white md:text-4xl">
						{title}
					</h1>
					<p className="max-w-2xl text-sm leading-relaxed text-zinc-400">{description}</p>
				</header>

				{children}
			</div>
		</div>
	);
}

/** Groups specimens under a named category, in category order. */
export function Category({ name, children }: { name: string; children: React.ReactNode }) {
	return (
		<div className="space-y-8">
			<div className="flex items-center gap-3">
				<h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
					{name}
				</h2>
				<div className="h-px flex-1 bg-white/10" />
			</div>
			<div className="space-y-8">{children}</div>
		</div>
	);
}

export function Specimen({
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
				<h3 className="font-mono text-sm font-semibold tracking-wider text-[#80deea]">
					{name}
				</h3>
				<code className="font-mono text-[11px] text-zinc-500">{source}</code>
			</div>
			<div className="rounded-lg border border-white/10 bg-black/40 p-6">{children}</div>
		</section>
	);
}

/** Specimen variant for pieces where the background itself is part of what's
 * being kept — the demo box carries that exact background rather than the
 * neutral bg-black/40 above. */
export function SwatchSpecimen({
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
				<h3 className="font-mono text-sm font-semibold tracking-wider text-[#ff85c2]">
					{name}
				</h3>
				<code className="font-mono text-[11px] text-zinc-500">{source}</code>
			</div>
			<div className="rounded-lg border border-white/10 p-6" style={{ backgroundColor: background }}>
				{children}
			</div>
		</section>
	);
}
