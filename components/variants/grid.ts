import { tv, type VariantProps } from "tailwind-variants";

/**
 * Project grid section styling. Theme-agnostic — see `app/globals.css`.
 */
export const gridVariants = tv({
	slots: {
		container: "min-h-screen pb-24 pt-8",
		header: "text-center mb-12 select-none",
		title: "font-display text-3xl md:text-4xl font-bold mb-3 tracking-wider text-foreground glow-accent",
		subtitle: "font-sans text-sm md:text-base leading-relaxed text-muted",
		grid: "grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch",
	},
});

export type GridVariants = VariantProps<typeof gridVariants>;
