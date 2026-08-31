import { tv, type VariantProps } from "tailwind-variants";

/**
 * Card styling.
 *
 * Theme-agnostic: every colour, radius and shadow resolves through the token
 * layer in `app/globals.css`. Switching themes changes the CSS variables, not
 * these classes.
 */
export const cardVariants = tv({
	slots: {
		container:
			"flex flex-col h-full select-none p-6 rounded-card border-theme border-border bg-surface blur-surface shadow-card transition-all duration-300 hover:border-border-strong hover:shadow-card-hover",
		imageWrapper:
			"w-full aspect-video overflow-hidden shrink-0 mb-4 rounded-card border-theme border-border bg-background",
		title: "font-display font-bold text-xl mb-2 tracking-wide text-foreground",
		description: "font-sans text-sm leading-relaxed mb-4 text-muted",
		tagList: "flex flex-wrap gap-2 pt-2 mt-auto",
		tag: "text-xs font-mono px-2.5 py-0.5 cursor-default transition-all duration-150 rounded-tag border-theme border-border bg-surface-raised text-muted hover:text-foreground",
	},
});

export type CardVariants = VariantProps<typeof cardVariants>;
