import { tv, type VariantProps } from "tailwind-variants";

/**
 * Hero section styling. Theme-agnostic — see `app/globals.css`.
 *
 * `font-display` resolves to Orbitron in the cyberpunk/citypop themes and to
 * the sans stack in vanilla, so the typographic shift needs no branch here.
 */
export const heroVariants = tv({
	slots: {
		container: "h-screen flex flex-col justify-center select-none",
		wrapper: "max-w-4xl",
		intro: "font-display text-3xl md:text-5xl mb-6 font-light text-muted transition-colors duration-300",
		title: "font-display text-6xl md:text-8xl font-bold tracking-wider text-foreground",
		role: "font-display text-3xl md:text-5xl mt-6 font-light text-muted flex items-center flex-wrap transition-colors duration-300",
		scramble: "font-bold text-accent glow-accent transition-all duration-300",
	},
});

export type HeroVariants = VariantProps<typeof heroVariants>;
