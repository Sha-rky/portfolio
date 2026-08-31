"use client";

import React from "react";
import { useThemeMode } from "@/app/test/_components/ui/theme-provider";
import { Container } from "@/app/test/_components/ui/container";
import { HeroGlitchTitle } from "@/app/test/_components/ui/hero-glitch-title";
import { TextScramble } from "@/app/test/_components/ui/text-scramble";
import { heroVariants } from "@/app/test/_components/ui/variants/hero";

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
