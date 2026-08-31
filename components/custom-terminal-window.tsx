"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

export interface CustomTerminalWindowProps {
    title?: string;
    image?: string | { src: string; alt?: string };
    description?: string | ReactNode;
    tags?: string[];
    children?: ReactNode;
    className?: string;
    hoverScale?: boolean;
    variant?: "auto" | "cyberpunk" | "citypop";
    isDark?: boolean;
}

export function CustomTerminalWindow({
    title,
    image,
    description,
    tags,
    children,
    className = "",
    hoverScale = true,
    variant = "auto",
    isDark = true
}: CustomTerminalWindowProps) {
    const isCyberpunk = variant === "cyberpunk" || variant === "citypop" || (variant === "auto" && isDark);

    const imageSrc = typeof image === "string" ? image : image?.src;
    const imageAlt = (typeof image === "string" ? title : image?.alt || title) || "Terminal preview";

    return (
        <div 
            className={`select-none relative transition-all duration-300 ease-out flex flex-col ${
                isCyberpunk
                    ? "border-2 border-[#b388ff] bg-[#0e0919] shadow-[6px_6px_0px_#ff85c2]"
                    : "border-2 border-zinc-300 bg-white shadow-[6px_6px_0px_rgba(0,0,0,0.1)]"
            } ${
                hoverScale 
                    ? isCyberpunk 
                        ? "hover:scale-[1.015] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#ff85c2] cursor-default" 
                        : "hover:scale-[1.015] hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-default"
                    : ""
            } ${className}`}
        >
            {/* Title Bar */}
            <div 
                className={`px-3 py-1.5 flex items-center justify-between font-mono text-xs select-none border-b-2 shrink-0 ${
                    isCyberpunk 
                        ? "bg-[#140e24] border-[#b388ff]" 
                        : "bg-zinc-100 border-zinc-300"
                }`}
            >
                <div className="flex items-center gap-2 overflow-hidden mr-2">
                    <span 
                        className={`font-extrabold text-xs tracking-wider font-mono select-none ${
                            isCyberpunk ? "text-[#80deea] drop-shadow-[0_0_6px_#80deea]" : "text-zinc-700"
                        }`}
                    >
                        &lt;/&gt;
                    </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 pointer-events-none select-none">
                    <div 
                        className={`w-[18px] h-[18px] flex items-center justify-center ${
                            isCyberpunk 
                                ? "bg-[#80deea] border border-[#090414] shadow-[1px_1px_0px_#090414] text-[#090414]" 
                                : "bg-zinc-200 border border-zinc-400 text-zinc-700"
                        }`}
                    >
                        <span className={`w-2 h-[2px] translate-y-1 ${isCyberpunk ? "bg-[#090414]" : "bg-zinc-700"}`}></span>
                    </div>

                    <div 
                        className={`w-[18px] h-[18px] flex items-center justify-center ${
                            isCyberpunk 
                                ? "bg-[#b388ff] border border-[#090414] shadow-[1px_1px_0px_#090414] text-[#090414]" 
                                : "bg-zinc-200 border border-zinc-400 text-zinc-700"
                        }`}
                    >
                        <span className={`w-2 h-2 border-[1.5px] ${isCyberpunk ? "border-[#090414]" : "border-zinc-700"}`}></span>
                    </div>

                    <div 
                        className={`w-[18px] h-[18px] flex items-center justify-center ${
                            isCyberpunk 
                                ? "bg-[#ff85c2] border border-[#090414] shadow-[1px_1px_0px_#090414] text-[#090414]" 
                                : "bg-pink-400 border border-zinc-400 text-white"
                        }`}
                    >
                        <span className="font-bold text-[11px] leading-none">✕</span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div 
                className={`p-5 md:p-6 flex flex-col flex-1 transition-colors duration-300 ${
                    isCyberpunk ? "bg-[#0e0919] text-[#e0d6ed]" : "bg-white text-zinc-800"
                }`}
            >
                {imageSrc && (
                    <div 
                        className={`w-full aspect-video md:h-52 rounded border-2 overflow-hidden mb-4 relative shrink-0 ${
                            isCyberpunk 
                                ? "border-[#b388ff]/50 bg-black shadow-[2px_2px_0px_#090414]" 
                                : "border-zinc-200 bg-zinc-100"
                        }`}
                    >
                        <Image 
                            src={imageSrc} 
                            alt={imageAlt}
                            width={800}
                            height={450}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {title && (
                    <h3 
                        className={`font-cyberpunk text-xl md:text-2xl font-bold tracking-wide mb-2.5 ${
                            isCyberpunk 
                                ? "text-white drop-shadow-[0_0_10px_rgba(255,133,194,0.4)]" 
                                : "text-zinc-900"
                        }`}
                    >
                        {title}
                    </h3>
                )}

                {description && (
                    <div 
                        className={`font-sans text-xs md:text-sm leading-relaxed mb-4 ${
                            isCyberpunk ? "text-[#cbd5e1]" : "text-zinc-600"
                        }`}
                    >
                        {description}
                    </div>
                )}

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2.5 pt-1 mt-auto">
                        {tags.map((tag, idx) => (
                            <span 
                                key={idx} 
                                className="px-2.5 py-0.5 rounded-sm border border-[#80deea] bg-[#140e24] text-[#80deea] font-mono text-xs font-bold shadow-[2px_2px_0px_#000000] cursor-default select-none"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {children && (
                    <div className="mt-4 pt-4 border-t border-zinc-200/20">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomTerminalWindow;
