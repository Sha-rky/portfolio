"use client";

import React from "react";
import { useThemeMode } from "@/lib/hooks/use-theme-mode";
import { Hero } from "@/components/hero";
import { Grid } from "@/components/grid";
import { NeonBackground } from "@/components/neon-background";

/**
 * HomePreview
 *
 * Snapshot of the themed home layout (hero + project grid), kept runnable in
 * the sandbox while `app/home` is rebuilt on the token layer.
 */
export function HomePreview() {
	// Structural-only: the ambient neon wash is an effect vanilla opts out of.
	const { theme } = useThemeMode();
	const showAmbientGlow = theme !== "vanilla";

	return (
		<div className="relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-500">
			{showAmbientGlow && <NeonBackground />}

			<div className="relative z-10">
				<Hero />
				<Grid />
			</div>
		</div>
	);
}

export default HomePreview;
