import { tv, type VariantProps } from "tailwind-variants";

/**
 * Theme switcher styling. Theme-agnostic — see `app/globals.css`.
 *
 * `active` is a real variant here (it is per-button state, not per-theme), so
 * it stays in the variant table.
 */
export const themeToggleVariants = tv({
	slots: {
		container:
			"flex items-center gap-1 p-1 font-mono text-xs rounded-control theme-border border-border bg-surface-raised shadow-control transition-all duration-300",
		button:
			"px-2.5 py-1 rounded-control capitalize cursor-pointer select-none transition-all duration-200",
	},
	variants: {
		active: {
			true: {
				button: "bg-accent text-accent-foreground font-bold glow-accent",
			},
			false: {
				button: "text-muted hover:text-foreground",
			},
		},
	},
	defaultVariants: {
		active: false,
	},
});

export type ThemeToggleVariants = VariantProps<typeof themeToggleVariants>;
