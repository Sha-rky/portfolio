"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export const THEMES = ["cyberpunk", "citypop", "vanilla"] as const;
export type Theme = (typeof THEMES)[number];

export const DEFAULT_THEME: Theme = "cyberpunk";
const STORAGE_KEY = "sandbox-theme";

const isTheme = (value: unknown): value is Theme =>
	typeof value === "string" && (THEMES as readonly string[]).includes(value);

interface ThemeContextValue {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	/** False during the first client render, while the stored theme is unknown. */
	mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Sandbox-scoped theme provider.
 *
 * Deliberately does NOT use next-themes: that writes `data-theme` onto
 * <html>, which the root layout owns and which the production surface must
 * never inherit. Here the attribute goes on a wrapper inside /test, so the
 * token layer in globals.css activates for this subtree only — and the root
 * layout needs no suppressHydrationWarning.
 *
 * The wrapper uses `display: contents`, so it participates in no layout while
 * still passing its custom properties down by normal CSS inheritance.
 */
export function ThemeProvider({
	children,
	defaultTheme = DEFAULT_THEME,
}: {
	children: React.ReactNode;
	defaultTheme?: Theme;
}) {
	const [theme, setThemeState] = useState<Theme>(defaultTheme);
	const [mounted, setMounted] = useState(false);

	// Read the stored preference after mount so server and client agree on the
	// first paint.
	useEffect(() => {
		setMounted(true);
		try {
			const stored = window.localStorage.getItem(STORAGE_KEY);
			if (isTheme(stored)) {
				setThemeState(stored);
			}
		} catch {
			// localStorage can throw in private mode — fall back to the default.
		}
	}, []);

	const setTheme = (next: Theme) => {
		setThemeState(next);
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {
			// Persisting is best-effort; the in-memory choice still applies.
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme, mounted }}>
			<div data-theme={theme} className="contents">
				{children}
			</div>
		</ThemeContext.Provider>
	);
}

/**
 * Read the sandbox theme. Only legitimate for *structural* decisions — whether
 * a piece of DOM or an effect exists at all. Colours, radii, shadows and the
 * display font all come from the token layer; never branch on theme for those.
 */
export function useThemeMode() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useThemeMode must be used inside the sandbox <ThemeProvider>");
	}

	return context;
}

export default ThemeProvider;
