import { tv, type VariantProps } from "tailwind-variants";

/**
 * Navbar styling. Theme-agnostic — every value resolves through the theme
 * registry in `app/globals.css`.
 */
export const navbarVariants = tv({
	slots: {
		nav: "fixed top-0 w-full p-4 backdrop-blur z-[1000]",
		list: "flex justify-center gap-8 flex-wrap",
		link: "uppercase text-sm tracking-widest text-link transition duration-300 hover:text-link-hover hover:link-glow",
	},
});

export type NavbarVariants = VariantProps<typeof navbarVariants>;
