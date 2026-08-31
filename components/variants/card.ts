import { tv, type VariantProps } from "tailwind-variants";

/**
 * Project card styling. Theme-agnostic — see the theme registry in
 * `app/globals.css`.
 */
export const cardVariants = tv({
	slots: {
		container:
			"bg-surface border border-border rounded-card p-6 transition-all duration-300 h-full flex flex-col",
		mediaWrapper: "bg-media rounded-media mb-4 overflow-hidden",
		mediaPlaceholder: "w-full h-full flex items-center justify-center text-muted",
		title: "text-xl font-semibold text-emphasis mb-2",
		description: "text-muted mb-4",
		tagList: "flex flex-wrap gap-2 mb-4",
		tag: "font-mono px-2 py-1 bg-surface-raised rounded-tag text-sm text-tag",
	},
});

export type CardVariants = VariantProps<typeof cardVariants>;
