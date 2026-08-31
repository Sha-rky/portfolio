"use client";

import React, { useEffect, useRef, useState } from "react";
import type { Theme } from "./ui/theme-provider";

/**
 * Every sandbox view, flat.
 *
 * Themes only affect the home composition, so rather than carrying a separate
 * theme control, each themed home is simply its own view. Demo variants are
 * top-level entries too — there is no nesting anywhere in this menu.
 */
export const SANDBOX_VIEWS = [
	{ id: "home-cyberpunk", group: "Home", label: "Cyberpunk", theme: "cyberpunk" },
	{ id: "home-citypop", group: "Home", label: "City Pop", theme: "citypop" },
	{ id: "home-vanilla", group: "Home", label: "Vanilla", theme: "vanilla" },
	{ id: "v1", group: "Demos", label: "v1 · Minimal" },
	{ id: "v2", group: "Demos", label: "v2 · Enterprise" },
	{ id: "v3", group: "Demos", label: "v3 · Accents" },
	{ id: "v4", group: "Demos", label: "v4 · Playground" },
	{ id: "v6", group: "Demos", label: "v6 · City Pop Spec" },
	{ id: "retro-geek", group: "Specs", label: "Retro Geek" },
	{ id: "dreamy-magical", group: "Specs", label: "Dreamy Magical" },
	{ id: "legacy", group: "Specs", label: "Legacy Test" },
] as const satisfies readonly {
	id: string;
	group: string;
	label: string;
	theme?: Theme;
}[];

export type SandboxView = (typeof SANDBOX_VIEWS)[number]["id"];

const GROUPS = ["Home", "Demos", "Specs"] as const;

export interface SandboxMenuProps {
	view: SandboxView;
	onViewChange: (view: SandboxView) => void;
}

/**
 * Sandbox control menu.
 *
 * The sandbox has no navigation bar of its own — the only chrome on /test is
 * the production navbar. Choosing a view collapses into this single floating
 * button, so each test page renders at full bleed with no layout offset.
 *
 * Styling here is intentionally fixed and theme-independent: this is a control
 * surface, not content, so it must stay legible and in the same place while
 * the themed views change underneath it.
 */
export function SandboxMenu({ view, onViewChange }: SandboxMenuProps) {
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

	return (
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
							{SANDBOX_VIEWS.filter((item) => item.group === group).map((item) => (
								<button
									key={item.id}
									type="button"
									role="menuitem"
									onClick={() => {
										onViewChange(item.id);
										setOpen(false);
									}}
									className={`w-full text-left px-2.5 py-1.5 rounded font-mono text-xs transition-colors ${
										view === item.id
											? "bg-[#ff85c2] text-[#0a0510] font-bold"
											: "text-zinc-400 hover:text-white hover:bg-white/10"
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
	);
}

export default SandboxMenu;
