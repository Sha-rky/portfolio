"use client";

import React from "react";
import { useThemeMode } from "@/lib/hooks/use-theme-mode";
import { Container } from "@/components/container";
import { HeroGlitchTitle } from "@/components/hero-glitch-title";
import { TextScramble } from "@/components/text-scramble";
import { heroVariants } from "@/components/variants/hero";

export interface HeroProps {
	className?: string;
}

const ROLES = ["ML Engineer", "Web Developer", "Python Developer", "Cursor user"];

export function Hero({ className = "" }: HeroProps) {
	// Structural-only: the glitch treatment is an effect the vanilla theme opts
	// out of entirely. Colours and type come from the token layer.
	const { theme } = useThemeMode();
	const useGlitchTitle = theme !== "vanilla";

	const { container, wrapper, intro, title, role, scramble } = heroVariants();

	return (
		<section className={container({ className })}>
			<Container className={wrapper()}>
				<p className={intro()}>My name is</p>

				{useGlitchTitle ? (
					<HeroGlitchTitle text="Ryan Luo" />
				) : (
					<h1 className={title()}>Ryan Luo</h1>
				)}

				<div className={role()}>
					<span>I am a&nbsp;</span>
					<TextScramble words={ROLES} className={scramble()} />
				</div>
			</Container>
		</section>
	);
}

export default Hero;
