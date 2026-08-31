import { tv } from "tailwind-variants";

export const cardVariants = tv({
    slots: {
        container: "flex flex-col h-full transition-all duration-300 select-none",
        imageWrapper: "w-full aspect-video overflow-hidden shrink-0 mb-4",
        title: "font-bold mb-2 tracking-wide",
        description: "text-sm leading-relaxed mb-4",
        tagList: "flex flex-wrap gap-2 pt-2 mt-auto",
        tag: "text-xs font-mono px-2.5 py-0.5 cursor-default transition-all duration-150"
    },
    variants: {
        theme: {
            cyberpunk: {
                container: "bg-black/40 backdrop-blur-xs border border-white/10 rounded-xl p-6 hover:border-white/25 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(0,255,255,0.15)]",
                imageWrapper: "rounded-lg bg-black/80 border border-white/10",
                title: "font-cyberpunk text-xl text-white",
                description: "font-sans text-gray-400",
                tag: "rounded-full bg-white/10 text-gray-300 border border-white/10 hover:bg-white/20 hover:text-white"
            },
            citypop: {
                container: "bg-[#0e0919] border-2 border-[#b388ff] p-5 shadow-[6px_6px_0px_#ff85c2] hover:scale-[1.015] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#ff85c2]",
                imageWrapper: "rounded border-2 border-[#b388ff]/50 bg-black shadow-[2px_2px_0px_#090414]",
                title: "font-cyberpunk text-xl text-white drop-shadow-[0_0_10px_rgba(255,133,194,0.4)]",
                description: "font-sans text-[#cbd5e1]",
                tag: "rounded-sm border border-[#80deea] bg-[#140e24] text-[#80deea] shadow-[2px_2px_0px_#000000] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000000]"
            },
            vanilla: {
                container: "bg-white border border-zinc-200 rounded-lg p-6 shadow-xs hover:border-zinc-300 hover:shadow-md",
                imageWrapper: "rounded-md bg-zinc-100 border border-zinc-200",
                title: "font-sans text-xl text-zinc-900 font-semibold tracking-tight",
                description: "font-sans text-zinc-600",
                tag: "rounded bg-zinc-100 text-zinc-700 border border-zinc-200 hover:bg-zinc-200 font-sans"
            }
        }
    },
    defaultVariants: {
        theme: "cyberpunk"
    }
});
