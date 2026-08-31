"use client";

import React, { useEffect, useRef, useState } from "react";
import { useThemeMode, THEMES, type Theme } from "./ui/theme-provider";

export const SANDBOX_VIEWS = [
	{ id: "home", label: "Home Preview" },
	{ id: "demos", label: "Demos" },
	{ id: "components", label: "Components Demo" },
	{ id: "magical", label: "Magical Demo" },
	{ id: "legacy", label: "Legacy Test" },
] as const;

export type SandboxView = (typeof SANDBOX_VIEWS)[number]["id"];

export const DEMO_VERSIONS = [
	{ id: 1, label: "Minimal" },
	{ id: 2, label: "Enterprise" },
	{ id: 3, label: "Accents" },
	{ id: 4, label: "Playground" },
	{ id: 6, label: "City Pop Spec" },
] as const;

export type DemoVersion = (typeof DEMO_VERSIONS)[number]["id"];

const THEME_LABELS: Record<Theme, string> = {
	cyberpunk: "Cyberpunk",
	citypop: "City Pop",
	vanilla: "Vanilla",
};

export interface SandboxMenuProps {
	view: SandboxView;
	onViewChange: (view: SandboxView) => void;
	demoVersion: DemoVersion;
	onDemoVersionChange: (version: DemoVersion) => void;
}

/**
 * Sandbox control menu.
 *
 * The sandbox deliberately has no navigation bar of its own — the only chrome
 * on /test is the production navbar. Everything needed to drive the sandbox
 * (which view, which demo version, which theme) collapses into this single
 * floating button, so each test page renders at full bleed with no layout
 * offset to account for.
 *
 * Styling here is intentionally fixed and theme-independent: this is a control
 * surface, not content, so it must stay legible and in the same place while
 * you switch themes underneath it.
 */
export function SandboxMenu({
	view,
	onViewChange,
	demoVersion,
	onDemoVersionChange,
}: SandboxMenuProps) {
	const [open, setOpen] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);
	const { theme, setTheme } = useThemeMode();

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

	const itemClass = (active: boolean) =>
		`w-full text-left px-2.5 py-1.5 rounded font-mono text-xs transition-colors ${
			active
				? "bg-[#ff85c2] text-[#0a0510] font-bold"
				: "text-zinc-400 hover:text-white hover:bg-white/10"
		}`;

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
					<section>
						<p className="px-2.5 pb-1 font-mono text-[10px] uppercase tracking-wider text-[#80deea]/70">
							View
						</p>
						{SANDBOX_VIEWS.map((item) => (
							<button
								key={item.id}
								type="button"
								role="menuitem"
								onClick={() => {
									onViewChange(item.id);
									setOpen(false);
								}}
								className={itemClass(view === item.id)}
							>
								{item.label}
							</button>
						))}
					</section>

					{view === "demos" && (
						<section className="border-t border-white/10 pt-2">
							<p className="px-2.5 pb-1 font-mono text-[10px] uppercase tracking-wider text-[#80deea]/70">
								Demo Version
							</p>
							{DEMO_VERSIONS.map((item) => (
								<button
									key={item.id}
									type="button"
									role="menuitem"
									onClick={() => {
										onDemoVersionChange(item.id);
										setOpen(false);
									}}
									className={itemClass(demoVersion === item.id)}
								>
									<span className="text-[#80deea]">[v{item.id}]</span> {item.label}
								</button>
							))}
						</section>
					)}

					<section className="border-t border-white/10 pt-2">
						<p className="px-2.5 pb-1 font-mono text-[10px] uppercase tracking-wider text-[#80deea]/70">
							Theme
						</p>
						{THEMES.map((id) => (
							<button
								key={id}
								type="button"
								role="menuitem"
								onClick={() => setTheme(id)}
								className={itemClass(theme === id)}
							>
								{THEME_LABELS[id]}
							</button>
						))}
					</section>
				</div>
			)}
		</div>
	);
}

export default SandboxMenu;
