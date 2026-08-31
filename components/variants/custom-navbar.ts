import { tv } from "tailwind-variants";

export const customNavbarVariants = tv({
    slots: {
        nav: "fixed top-0 w-full px-6 py-3.5 backdrop-blur-md z-[1000] border-b transition-all duration-300",
        container: "max-w-6xl mx-auto flex items-center justify-between gap-4",
        links: "flex items-center gap-6",
        link: "uppercase text-xs tracking-wider transition-all duration-200 select-none cursor-pointer"
    },
    variants: {
        theme: {
            cyberpunk: {
                nav: "bg-black/50 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]",
                link: "font-mono font-bold text-[#ff85c2] hover:text-[#80deea] hover:drop-shadow-[0_0_10px_#80deea]"
            },
            citypop: {
                nav: "bg-[#0e0919]/80 border-[#b388ff]/30 shadow-[0_4px_16px_rgba(179,136,255,0.15)]",
                link: "font-mono font-bold text-[#b388ff] hover:text-[#ff85c2] hover:drop-shadow-[0_0_8px_#ff85c2]"
            },
            vanilla: {
                nav: "bg-white/80 border-zinc-200 shadow-xs",
                link: "font-sans font-medium text-zinc-600 hover:text-zinc-950"
            }
        }
    },
    defaultVariants: {
        theme: "cyberpunk"
    }
});
