import { tv, type VariantProps } from "tailwind-variants";

/**
 * Project grid styling. Theme-agnostic — see the theme registry in
 * `app/globals.css`.
 */
export const projectGridVariants = tv({
	slots: {
		section: "space-y-12",
		header: "font-pixel text-center",
		title: "text-4xl font-bold mb-4 text-highlight heading-emboss",
		subtitle: "mt-4 text-muted text-lg",
		grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch",
	},
});

export type ProjectGridVariants = VariantProps<typeof projectGridVariants>;
