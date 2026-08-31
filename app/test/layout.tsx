import { ThemeProvider } from "./_components/ui/theme-provider";

/**
 * Sandbox layout.
 *
 * Theme switching is scoped to `/test` only — the production surface under the
 * root layout is a single fixed theme, and the root layout is left exactly as
 * it is on main. The provider applies `data-theme` to a wrapper inside this
 * subtree, which is what activates the token layer in `app/globals.css`.
 */
export default function TestLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <ThemeProvider defaultTheme="cyberpunk">{children}</ThemeProvider>;
}
