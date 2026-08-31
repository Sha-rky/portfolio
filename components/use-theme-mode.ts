"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export type ThemeType = "cyberpunk" | "citypop" | "vanilla";
export const VALID_THEMES: ThemeType[] = ["cyberpunk", "citypop", "vanilla"];

/**
 * useThemeMode Hook
 * Safely resolves current theme with SSR hydration protection:
 * - Prior to client mounting, always returns default 'cyberpunk' to match SSR HTML.
 * - After mounting, reads and validates localStorage/active theme against valid themes.
 * - Prevents hydration mismatch caused by obsolete localStorage values (e.g. 'dark', 'light').
 */
export function useThemeMode() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const rawTheme = theme || resolvedTheme;
    const activeTheme: ThemeType = (rawTheme && (VALID_THEMES as string[]).includes(rawTheme))
        ? (rawTheme as ThemeType)
        : "cyberpunk";

    return {
        theme: mounted ? activeTheme : "cyberpunk",
        setTheme,
        mounted
    };
}
