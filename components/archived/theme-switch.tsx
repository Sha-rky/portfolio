"use client";

import React from "react";
import { useTheme } from "./theme-context";

interface ThemeSwitchProps {
    theme?: "dark" | "light";
    onToggle?: () => void;
    className?: string;
}

export default function ThemeSwitch({ 
    theme: propTheme, 
    onToggle: propOnToggle, 
    className = "" 
}: ThemeSwitchProps) {
    const context = useTheme();
    const activeTheme = propTheme || context.theme;
    const toggle = propOnToggle || context.toggleTheme;
    const isDark = activeTheme === "dark";

    return (
        <button
            onClick={toggle}
            aria-label={`Switch to ${isDark ? "City Pop Light" : "Cyberpunk Dark"} mode`}
            className={`group inline-flex items-center gap-2.5 px-4 py-2 rounded-full font-mono text-xs font-bold transition-all duration-200 select-none cursor-pointer ${
                isDark
                    ? "bg-[#0e0919] text-[#80deea] border-2 border-[#b388ff] shadow-[3px_3px_0px_#ff85c2] hover:shadow-[5px_5px_0px_#ff85c2] hover:-translate-y-0.5"
                    : "bg-white text-[#6b21a8] border-2 border-[#1e1035] shadow-[3px_3px_0px_#e95b9e] hover:shadow-[5px_5px_0px_#e95b9e] hover:-translate-y-0.5"
            } ${className}`}
        >
            <span className="text-sm transition-transform duration-300 group-hover:scale-125">
                {isDark ? "⚡" : "🌸"}
            </span>
            <span className="tracking-wider uppercase font-cyberpunk text-xs">
                {isDark ? "CYBERPUNK" : "CITY POP"}
            </span>
            <span className={`w-2 h-2 rounded-full ${isDark ? "bg-[#05ffa1] shadow-[0_0_8px_#05ffa1] animate-pulse" : "bg-[#e95b9e]"}`} />
        </button>
    );
}
