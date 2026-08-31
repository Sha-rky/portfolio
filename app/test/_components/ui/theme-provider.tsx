"use client";

import React, { createContext, useContext } from "react";

export const THEMES = ["cyberpunk", "citypop", "vanilla"] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_LABELS: Record<Theme, string> = {
	cyberpunk: "Cyberpunk",
	citypop: "City Pop",
	vanilla: "Vanilla",
};

const ThemeContext = createContext<Theme | null>(null);

/**
 * Sandbox-scoped theme provider — fully controlled.
 *
 * Themes only apply to the home composition, and which theme you see is
 * decided by which sandbox view you picked, so this holds no state of its own:
 * no switcher, no localStorage, no effects.
 *
 * Deliberately not `next-themes`: that writes its attribute onto <html>, which
 * the root layout owns and which the fixed-theme production surface must never
 * inherit. Here the attribute goes on a wrapper instead. `display: contents`
 * keeps that wrapper out of layout while custom properties still inherit
 * normally, which is what activates the token layer in `app/globals.css`.
 */
export function ThemeProvider({
	theme,
	children,
}: {
	theme: Theme;
	children: React.ReactNode;
}) {
	return (
		<ThemeContext.Provider value={theme}>
			<div data-theme={theme} className="contents">
				{children}
			</div>
		</ThemeContext.Provider>
	);
}

/**
 * Read the active theme. Only legitimate for *structural* decisions — whether
 * a piece of DOM or an effect exists at all. Colours, radii, shadows and the
 * display font all come from the token layer; never branch on theme for those.
 */
export function useThemeMode() {
	const theme = useContext(ThemeContext);

	if (!theme) {
		throw new Error("useThemeMode must be used inside the sandbox <ThemeProvider>");
	}

	return { theme };
}

export default ThemeProvider;
