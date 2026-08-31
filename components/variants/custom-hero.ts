import { tv } from "tailwind-variants";

export const customHeroVariants = tv({
    slots: {
        container: "h-screen flex flex-col justify-center select-none",
        wrapper: "max-w-4xl",
        intro: "transition-colors duration-300",
        title: "",
        role: "transition-colors duration-300 flex items-center flex-wrap",
        scramble: "transition-all duration-300"
    },
    variants: {
        theme: {
            cyberpunk: {
                intro: "font-cyberpunk text-3xl md:text-5xl mb-6 font-light text-zinc-400",
                role: "font-cyberpunk text-3xl md:text-5xl mt-6 font-light text-zinc-400",
                scramble: "text-[#ff007f] drop-shadow-[0_0_12px_#ff007f] font-bold"
            },
            citypop: {
                intro: "font-cyberpunk text-3xl md:text-5xl mb-6 font-light text-[#80deea] drop-shadow-[0_0_8px_rgba(128,222,234,0.6)]",
                role: "font-cyberpunk text-3xl md:text-5xl mt-6 font-light text-[#80deea] drop-shadow-[0_0_8px_rgba(128,222,234,0.6)]",
                scramble: "text-[#ff85c2] drop-shadow-[0_0_10px_#ff85c2] font-bold"
            },
            vanilla: {
                intro: "font-sans text-2xl md:text-3xl mb-2 font-normal text-zinc-500",
                title: "font-sans text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 my-2",
                role: "font-sans text-2xl md:text-3xl mt-4 font-normal text-zinc-600",
                scramble: "text-zinc-900 font-semibold underline decoration-zinc-300 underline-offset-4"
            }
        }
    },
    defaultVariants: {
        theme: "cyberpunk"
    }
});
