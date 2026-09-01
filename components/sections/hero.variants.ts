import { tv, type VariantProps } from "tailwind-variants";

/**
 * Hero styling. Theme-agnostic — see the theme registry in `app/globals.css`.
 */
export const heroVariants = tv({
	slots: {
		section: "font-display h-screen flex flex-col justify-center",
		intro: "text-subtle text-5xl mb-8 font-light",
		title: "relative text-6xl md:text-8xl font-bold text-emphasis",
		role: "text-subtle text-5xl mt-8 font-light",
		scramble: "text-accent",
	},
});

export type HeroVariants = VariantProps<typeof heroVariants>;
