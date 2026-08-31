import { tv } from "tailwind-variants";

export const customGridVariants = tv({
    slots: {
        container: "min-h-screen pb-24 pt-8",
        header: "text-center mb-12 select-none",
        title: "text-3xl md:text-4xl font-bold mb-3 tracking-wider",
        subtitle: "text-sm md:text-base leading-relaxed",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
    },
    variants: {
        theme: {
            cyberpunk: {
                title: "font-cyberpunk text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]",
                subtitle: "font-sans text-gray-400"
            },
            citypop: {
                title: "font-cyberpunk text-white drop-shadow-[0_0_12px_#ff85c2]",
                subtitle: "font-sans text-[#cbd5e1]"
            },
            vanilla: {
                title: "font-sans text-zinc-900 tracking-tight",
                subtitle: "font-sans text-zinc-500"
            }
        }
    },
    defaultVariants: {
        theme: "cyberpunk"
    }
});
