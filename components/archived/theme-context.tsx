"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeMode = "dark" | "light";
export type AestheticMode = "cyberpunk" | "citypop";

interface ThemeContextType {
    theme: ThemeMode;
    aesthetic: AestheticMode;
    toggleTheme: () => void;
    setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<ThemeMode>("dark");

    useEffect(() => {
        // Load stored theme if available
        try {
            const savedTheme = localStorage.getItem("portfolio_theme") as ThemeMode | null;
            if (savedTheme === "dark" || savedTheme === "light") {
                setThemeState(savedTheme);
            }
        } catch {
            // Ignore localStorage errors
        }
    }, []);

    const setTheme = (newTheme: ThemeMode) => {
        setThemeState(newTheme);
        try {
            localStorage.setItem("portfolio_theme", newTheme);
        } catch {
            // Ignore localStorage errors
        }
    };

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const aesthetic: AestheticMode = theme === "dark" ? "cyberpunk" : "citypop";

    return (
        <ThemeContext.Provider value={{ theme, aesthetic, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        // Fallback default if used outside Provider
        return {
            theme: "dark" as ThemeMode,
            aesthetic: "cyberpunk" as AestheticMode,
            toggleTheme: () => {},
            setTheme: () => {}
        };
    }
    return context;
}
