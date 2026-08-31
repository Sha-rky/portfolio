"use client";

import React, { useState } from "react";
import ComponentsDemo from "./_components/components-demo";
import MagicalDemo from "./_components/components-demo-magical";
import Demos from "./_components/demos";
import LegacyTest from "./_components/legacy-test";
import HomePreview from "./_components/home-preview";
import {
	SandboxMenu,
	type SandboxView,
	type DemoVersion,
} from "./_components/sandbox-menu";

/**
 * Sandbox shell.
 *
 * No navigation bar of its own: the production navbar from the root layout is
 * the only chrome, and every sandbox control lives in the floating
 * `SandboxMenu`. That keeps each view rendering at full bleed, exactly as it
 * would on a real page.
 */
export default function TestSPAPage() {
	const [view, setView] = useState<SandboxView>("home");
	const [demoVersion, setDemoVersion] = useState<DemoVersion>(6);

	return (
		<div className="min-h-screen">
			<SandboxMenu
				view={view}
				onViewChange={setView}
				demoVersion={demoVersion}
				onDemoVersionChange={setDemoVersion}
			/>

			{view === "home" && <HomePreview />}
			{view === "demos" && <Demos activeVersion={demoVersion} />}
			{view === "components" && <ComponentsDemo />}
			{view === "magical" && <MagicalDemo />}
			{view === "legacy" && <LegacyTest />}
		</div>
	);
}
