"use client";

import React, { useEffect, useRef, useState } from "react";
import Library from "./_candidates/library";
import V1Minimal from "./_candidates/v1-minimal";
import V2Enterprise from "./_candidates/v2-enterprise";
import V3Accents from "./_candidates/v3-accents";
import V4Playground from "./_candidates/v4-playground";
import V6CityPopSpec from "./_candidates/v6-citypop-spec";
import RetroGeek from "./_candidates/retro-geek";
import DreamyMagical from "./_candidates/dreamy-magical";
import Legacy from "./_candidates/legacy";

const CANDIDATES = [
	{ id: "library", group: "Library", label: "Kept Components", Component: Library },
	{ id: "v1", group: "Demos", label: "v1 · Minimal", Component: V1Minimal },
	{ id: "v2", group: "Demos", label: "v2 · Enterprise", Component: V2Enterprise },
	{ id: "v3", group: "Demos", label: "v3 · Accents", Component: V3Accents },
	{ id: "v4", group: "Demos", label: "v4 · Playground", Component: V4Playground },
	{ id: "v6", group: "Demos", label: "v6 · City Pop Spec", Component: V6CityPopSpec },
	{ id: "retro-geek", group: "Specs", label: "Retro Geek", Component: RetroGeek },
	{ id: "dreamy-magical", group: "Specs", label: "Dreamy Magical", Component: DreamyMagical },
	{ id: "legacy", group: "Specs", label: "Legacy Test", Component: Legacy },
] as const;

type CandidateId = (typeof CANDIDATES)[number]["id"];

const GROUPS = ["Library", "Demos", "Specs"] as const;

/**
 * Sandbox shell.
 *
 * `app/test` holds only this file and `_candidates/`. There is no navigation
 * bar of its own — the production navbar is the only chrome, and candidate
 * selection collapses into the floating button below, so every candidate
 * renders at full bleed exactly as it would on a real page.
 *
 * The menu is inlined here rather than extracted: it is shell, not a
 * candidate, and `_candidates/` is reserved for pages that are in the running.
 */
export default function TestSPAPage() {
	const [active, setActive] = useState<CandidateId>("library");
	const [open, setOpen] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpen(false);
		};
		const onPointerDown = (event: MouseEvent) => {
			if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
		};

		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("mousedown", onPointerDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("mousedown", onPointerDown);
		};
	}, [open]);

	const Active = CANDIDATES.find((item) => item.id === active)!.Component;

	return (
		<div className="min-h-screen">
			{/* Control surface: fixed styling on purpose, so it stays put and
			    legible whatever the candidate underneath it looks like. */}
			<div ref={rootRef} className="fixed top-16 right-3 z-[900]">
				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					aria-expanded={open}
					aria-haspopup="menu"
					aria-label="Sandbox controls"
					title="Sandbox controls"
					className="flex h-7 w-7 items-center justify-center rounded border border-[#b388ff]/40 bg-[#0e0919]/90 text-[#b388ff] backdrop-blur-md transition-colors hover:border-[#ff85c2] hover:text-[#ff85c2]"
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						aria-hidden="true"
					>
						<line x1="4" y1="8" x2="20" y2="8" />
						<line x1="4" y1="16" x2="20" y2="16" />
						<circle cx="9" cy="8" r="2.2" fill="#0e0919" />
						<circle cx="15" cy="16" r="2.2" fill="#0e0919" />
					</svg>
				</button>

				{open && (
					<div
						role="menu"
						className="absolute right-0 top-full mt-1.5 w-52 space-y-3 rounded-lg border border-[#b388ff]/30 bg-[#0e0919]/97 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
					>
						{GROUPS.map((group, index) => (
							<section
								key={group}
								className={index > 0 ? "border-t border-white/10 pt-2" : undefined}
							>
								<p className="px-2.5 pb-1 font-mono text-[10px] uppercase tracking-wider text-[#80deea]/70">
									{group}
								</p>
								{CANDIDATES.filter((item) => item.group === group).map((item) => (
									<button
										key={item.id}
										type="button"
										role="menuitem"
										onClick={() => {
											setActive(item.id);
											setOpen(false);
										}}
										className={`w-full rounded px-2.5 py-1.5 text-left font-mono text-xs transition-colors ${
											active === item.id
												? "bg-[#ff85c2] font-bold text-[#0a0510]"
												: "text-zinc-400 hover:bg-white/10 hover:text-white"
										}`}
									>
										{item.label}
									</button>
								))}
							</section>
						))}
					</div>
				)}
			</div>

			<Active />
		</div>
	);
}
