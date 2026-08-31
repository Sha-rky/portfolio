import { tv, type VariantProps } from "tailwind-variants";

/**
 * Navbar styling. Theme-agnostic — see `app/globals.css`.
 */
export const navbarVariants = tv({
	slots: {
		nav: "fixed top-0 w-full px-6 py-3.5 z-[1000] border-b border-border bg-background/70 blur-surface shadow-control transition-all duration-300",
		container: "max-w-6xl mx-auto flex items-center justify-between gap-4",
		brand: "font-mono font-bold text-sm tracking-wider flex items-center gap-2 text-secondary",
		links: "flex items-center gap-6",
		link: "font-mono font-bold uppercase text-xs tracking-wider select-none cursor-pointer text-accent hover:text-secondary transition-all duration-200",
	},
});

export type NavbarVariants = VariantProps<typeof navbarVariants>;
