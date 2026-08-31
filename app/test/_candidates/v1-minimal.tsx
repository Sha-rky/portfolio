"use client";

import React from "react";

// =========================================================================
// SHARED PROFILE DATA
// =========================================================================
const profile = {
    name: "Ryan Luo",
    title: "AI / ML Engineer & Web Developer",
    bio: "Building intelligent systems and modern web experiences. Passionate about retro tech, neural networks, and clean code.",
    tags: ["PyTorch", "Next.js", "Python", "TypeScript"]
};

// =========================================================================
// VERSION 1: MINIMAL RETRO GEEK (Original Baseline with Orbitron)
// =========================================================================
const Version1RetroGeek = () => (
    <div className="max-w-2xl mx-auto py-12">
        <div className="bg-[#140f19] border-2 border-[#b388ff] rounded-lg overflow-hidden shadow-[0_8px_30px_rgba(179,136,255,0.25)]">
            {/* Retro Window Header */}
            <div className="bg-gradient-to-r from-[#b388ff] to-[#ff85c2] px-4 py-2 flex items-center justify-between">
                <span className="font-mono text-black font-bold text-xs tracking-wider">
                    ryan@terminal:~/profile$
                </span>
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-black/40"></div>
                    <div className="w-3 h-3 rounded-full bg-black/40"></div>
                    <div className="w-3 h-3 rounded-full bg-black/40"></div>
                </div>
            </div>

            {/* Window Content */}
            <div className="p-6 md:p-8">
                <h2 className="font-cyberpunk text-3xl md:text-4xl text-[#ff85c2] tracking-wider uppercase mb-2 drop-shadow-[0_0_10px_rgba(255,133,194,0.6)]">
                    {profile.name}
                </h2>
                <p className="font-mono text-sm text-[#80deea] mb-4 flex items-center gap-2">
                    <span className="text-[#b388ff]">❯</span> {profile.title}
                </p>
                <p className="font-sans text-[#fce4ec]/90 leading-relaxed mb-6 text-sm md:text-base">
                    {profile.bio}
                </p>
                <div className="flex gap-2.5 flex-wrap">
                    {profile.tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="font-cyberpunk text-xs tracking-wider text-[#140f19] bg-[#80deea] px-3.5 py-1 rounded-full font-bold shadow-[0_0_10px_rgba(128,222,234,0.4)]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Version1RetroGeek;
