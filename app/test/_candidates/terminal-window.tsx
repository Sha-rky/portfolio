"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

export interface TerminalWindowProps {
    title?: string;
    image?: string | { src: string; alt?: string };
    description?: string | ReactNode;
    tags?: string[];
    children?: ReactNode;
    className?: string;
    hoverScale?: boolean;
    variant?: "auto" | "cyberpunk" | "citypop" | "citypop-light";
    isDark?: boolean;
}

/**
 * City Pop, light mode.
 *
 * Restores the palette from the archived components/archived/citypop-light.css
 * (deleted in 1372af9 for being unused) — a lilac-canvas, ink-violet,
 * coral-shadow counterpart to the black-canvas "citypop" variant below. It was
 * defined as CSS custom properties but never actually consumed by a
 * component; this is that missing consumer.
 */
const CITYPOP_LIGHT = {
    border: "#1e1035",
    shadow: "#e95b9e",
    canvas: "#ece5f6",
    titlebar: "#9e62de",
    titlebarText: "#1e1035",
    glyph: "#fde047",
    textMain: "#271342",
    textMuted: "#6b21a8",
    btnMin: "#4bc8df",
    btnMax: "#c89df2",
    btnClose: "#e95b9e",
};

export function TerminalWindow({
    title,
    image,
    description,
    tags,
    children,
    className = "",
    hoverScale = true,
    variant = "auto",
    isDark = true
}: TerminalWindowProps) {
    if (variant === "citypop-light") {
        return (
            <div
                className={`select-none relative flex flex-col border-2 transition-all duration-300 ease-out ${
                    hoverScale ? "hover:scale-[1.015] hover:-translate-y-1 cursor-default" : ""
                } ${className}`}
                style={{
                    borderColor: CITYPOP_LIGHT.border,
                    backgroundColor: CITYPOP_LIGHT.canvas,
                    boxShadow: `6px 6px 0px ${CITYPOP_LIGHT.shadow}`,
                }}
            >
                <div
                    className="flex shrink-0 items-center justify-between border-b-2 px-3 py-1.5 font-mono text-xs"
                    style={{ borderColor: CITYPOP_LIGHT.border, backgroundColor: CITYPOP_LIGHT.titlebar }}
                >
                    <span
                        className="text-xs font-extrabold tracking-wider"
                        style={{ color: CITYPOP_LIGHT.titlebarText }}
                    >
                        &lt;/&gt;
                    </span>
                    <div className="flex items-center gap-1.5">
                        <span
                            className="h-[18px] w-[18px] border"
                            style={{ backgroundColor: CITYPOP_LIGHT.btnMin, borderColor: CITYPOP_LIGHT.border }}
                        />
                        <span
                            className="h-[18px] w-[18px] border"
                            style={{ backgroundColor: CITYPOP_LIGHT.btnMax, borderColor: CITYPOP_LIGHT.border }}
                        />
                        <span
                            className="flex h-[18px] w-[18px] items-center justify-center border font-bold text-[11px] leading-none"
                            style={{
                                backgroundColor: CITYPOP_LIGHT.btnClose,
                                borderColor: CITYPOP_LIGHT.border,
                                color: CITYPOP_LIGHT.border,
                            }}
                        >
                            ✕
                        </span>
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6" style={{ color: CITYPOP_LIGHT.textMain }}>
                    {(typeof image === "string" ? image : image?.src) && (
                        <div
                            className="relative mb-4 aspect-video w-full shrink-0 overflow-hidden rounded border-2 md:h-52"
                            style={{ borderColor: CITYPOP_LIGHT.border }}
                        >
                            <Image
                                src={typeof image === "string" ? image : image!.src}
                                alt={(typeof image === "string" ? title : image?.alt || title) || "Terminal preview"}
                                width={800}
                                height={450}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}

                    {title && (
                        <h3
                            className="mb-2.5 text-xl font-bold tracking-wide md:text-2xl"
                            style={{ color: CITYPOP_LIGHT.border, fontFamily: "var(--font-orbitron)" }}
                        >
                            {title}
                        </h3>
                    )}

                    {description && (
                        <div
                            className="mb-4 text-xs leading-relaxed md:text-sm"
                            style={{ color: CITYPOP_LIGHT.textMuted }}
                        >
                            {description}
                        </div>
                    )}

                    {tags && tags.length > 0 && (
                        <div className="mt-auto flex flex-wrap gap-2.5 pt-1">
                            {tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="rounded-sm border px-2.5 py-0.5 font-mono text-xs font-bold"
                                    style={{
                                        borderColor: CITYPOP_LIGHT.border,
                                        backgroundColor: CITYPOP_LIGHT.btnMax,
                                        color: CITYPOP_LIGHT.border,
                                        boxShadow: `2px 2px 0px ${CITYPOP_LIGHT.border}`,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {children && (
                        <div className="mt-4 border-t pt-4" style={{ borderColor: `${CITYPOP_LIGHT.border}33` }}>
                            {children}
                        </div>
                    )}
                </div>
            </div>
        );
    }

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

export default TerminalWindow;
