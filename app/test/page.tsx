"use client";

import React, { useState } from "react";
import RetroGeek from "./_components/components-demo";
import DreamyMagical from "./_components/components-demo-magical";
import Demos from "./_components/demos";
import LegacyTest from "./_components/legacy-test";
import HomePreview from "./_components/home-preview";
import { ThemeProvider } from "./_components/ui/theme-provider";
import { SandboxMenu, SANDBOX_VIEWS, type SandboxView } from "./_components/sandbox-menu";

const DEMO_VERSION_BY_VIEW = {
	v1: 1,
	v2: 2,
	v3: 3,
	v4: 4,
	v6: 6,
} as const;

/**
 * Sandbox shell.
 *
 * No navigation bar of its own: the production navbar from the root layout is
 * the only chrome, and view selection lives in the floating `SandboxMenu`. Each
 * view renders at full bleed, exactly as it would on a real page.
 *
 * Themes apply to the home composition only, so `ThemeProvider` wraps just that
 * view and takes its theme straight from the selected entry.
 */
export default function TestSPAPage() {
	const [view, setView] = useState<SandboxView>("home-cyberpunk");

	const entry = SANDBOX_VIEWS.find((item) => item.id === view)!;
	const demoVersion = DEMO_VERSION_BY_VIEW[view as keyof typeof DEMO_VERSION_BY_VIEW];

	return (
		<div className="min-h-screen">
			<SandboxMenu view={view} onViewChange={setView} />

			{"theme" in entry && (
				<ThemeProvider theme={entry.theme}>
					<HomePreview />
				</ThemeProvider>
			)}

			{demoVersion && <Demos activeVersion={demoVersion} />}
			{view === "retro-geek" && <RetroGeek />}
			{view === "dreamy-magical" && <DreamyMagical />}
			{view === "legacy" && <LegacyTest />}
		</div>
	);
}
