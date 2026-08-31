"use client";

import React from "react";
import { useThemeMode } from "@/components/use-theme-mode";
import { CustomHero } from "@/components/custom-hero";
import { CustomGrid } from "@/components/custom-grid";
import { CustomNeonBackground } from "@/components/custom-neon-background";

export default function HomePage() {
    const { theme } = useThemeMode();

    return (
        <main 
            className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden pt-14 ${
                theme === "vanilla"
                    ? "bg-white text-zinc-900 font-sans"
                    : theme === "citypop"
                        ? "bg-[#090414] text-[#f8fafc]"
                        : "bg-black text-[#f8fafc]"
            }`}
        >
            {/* Ambient Background Effect for Cyberpunk / CityPop */}
            {theme !== "vanilla" && <CustomNeonBackground />}

            <div className="relative z-10">
                <CustomHero />
                <CustomGrid />
            </div>
        </main>
    );
}
