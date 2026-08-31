"use client";

import { useThemeMode } from "@/components/use-theme-mode";

const themes = [
    { id: "cyberpunk", label: "Cyberpunk" },
    { id: "citypop", label: "City Pop" },
    { id: "vanilla", label: "Vanilla" }
];

export function ThemeToggle() {
    const { theme, setTheme, mounted } = useThemeMode();

    if (!mounted) {
        return (
            <div className="flex items-center gap-1.5 p-1 rounded-lg border border-white/10 bg-black/20 text-xs font-mono">
                <span className="px-2 py-1 opacity-50">Theme...</span>
            </div>
        );
    }

    const isVanilla = theme === "vanilla";
    const isCityPop = theme === "citypop";

    return (
        <div 
            className={`flex items-center gap-1 p-1 rounded-lg border transition-all duration-300 font-mono text-xs ${
                isVanilla 
                    ? "bg-zinc-100 border-zinc-200 text-zinc-800" 
                    : isCityPop
                        ? "bg-[#140e24] border-[#b388ff]/40 shadow-[2px_2px_0px_#ff85c2]"
                        : "bg-black/60 border-white/15 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            }`}
        >
            {themes.map((t) => {
                const isActive = theme === t.id;
                let activeClasses = "";
                if (isActive) {
                    if (isVanilla) {
                        activeClasses = "bg-white text-zinc-900 shadow-xs font-semibold border border-zinc-200";
                    } else if (isCityPop) {
                        activeClasses = "bg-[#ff85c2] text-[#090414] font-bold shadow-[1px_1px_0px_#090414]";
                    } else {
                        activeClasses = "bg-pink-600/90 text-white font-bold drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]";
                    }
                } else {
                    if (isVanilla) {
                        activeClasses = "text-zinc-500 hover:text-zinc-900";
                    } else if (isCityPop) {
                        activeClasses = "text-[#80deea] hover:text-white";
                    } else {
                        activeClasses = "text-zinc-400 hover:text-zinc-200";
                    }
                }

                return (
                    <button
                        key={t.id}
                        type="button"
                        onClick={() => setTheme(t.id)}
                        className={`px-2.5 py-1 rounded transition-all duration-200 capitalize cursor-pointer select-none ${activeClasses}`}
                    >
                        {t.label}
                    </button>
                );
            })}
        </div>
    );
}
