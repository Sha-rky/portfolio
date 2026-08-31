"use client";

import React, { useState, useEffect } from "react";
import { TerminalWindow } from "@/app/test/_components/ui/terminal-window";

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

// =========================================================================
// VERSION 2: ENTERPRISE RETRO GEEK (Sleek Windows Title Bar & Metrics)
// =========================================================================
interface V2WindowProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "highlight" | "minimal";
    badge?: string;
}

const V2TerminalWindow = ({
    title,
    children,
    className = "",
    variant = "default",
    badge
}: V2WindowProps) => (


    <div 
        className={`bg-[#0e0919]/95 border rounded-lg overflow-hidden backdrop-blur-xl transition-all duration-300 ${
            variant === "highlight"
                ? "border-[#ff85c2]/60 shadow-[0_4px_30px_rgba(255,133,194,0.18)] hover:border-[#ff85c2]"
                : "border-[#b388ff]/30 shadow-[0_4px_24px_rgba(13,2,33,0.8)] hover:border-[#80deea]/60"
        } ${className}`}
    >
        {/* Windows Window Title Bar */}
        <div className="px-3 py-1.5 bg-[#140e24] border-b border-[#b388ff]/20 flex items-center justify-between select-none">
            <div className="flex items-center gap-2 overflow-hidden mr-2">
                <div className="w-4 h-4 flex items-center justify-center text-[#ff85c2] font-mono text-[10px] border border-[#ff85c2]/40 rounded-sm bg-[#090414] shrink-0">
                    &gt;_
                </div>
                <span className="font-mono text-xs text-[#b388ff]/90 tracking-wide font-medium truncate">
                    {title}
                </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
                {badge && (
                    <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#80deea]/10 border border-[#80deea]/30 text-[#80deea]">
                        {badge}
                    </span>
                )}
                <div className="flex items-center -mr-1">
                    <div className="w-7 h-6 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                        <span className="w-2.5 h-[1.5px] bg-current inline-block"></span>
                    </div>
                    <div className="w-7 h-6 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                        <span className="w-2.5 h-2.5 border border-current inline-block"></span>
                    </div>
                    <div className="w-7 h-6 flex items-center justify-center text-gray-400 hover:bg-[#e81123] hover:text-white transition-colors cursor-pointer">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M1 1L9 9M9 1L1 9" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-6 md:p-7">
            {children}
        </div>
    </div>
);

const Version2Enterprise = () => {
    const [cliInput, setCliInput] = useState("");
    const [cliOutput, setCliOutput] = useState<string | null>(null);

    const handleCliSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = cliInput.trim().toLowerCase();
        if (cmd === "help") {
            setCliOutput("COMMANDS: profile, skills, metrics, contact, clear");
        } else if (cmd === "profile") {
            setCliOutput("RYAN LUO // AI & MACHINE LEARNING ENGINEER\nSpecializing in RecSys (NRMS-BERT) & GraphRAG pipelines.");
        } else if (cmd === "metrics") {
            setCliOutput("METRICS:\n  • RecSys CTR AUC: +18.4%\n  • Hallucination Reduction: -42.0%\n  • Pipeline Throughput: 10,000+ docs/day");
        } else if (cmd === "contact") {
            setCliOutput("EMAIL: ryan@workspaces.io | GITHUB: github.com/RyanLuo");
        } else if (cmd === "clear") {
            setCliOutput(null);
        } else if (cmd) {
            setCliOutput(`bash: command not found: ${cmd}`);
        }
        setCliInput("");
    };

    return (
        <div className="space-y-12 py-4">
            {/* Identity Hero */}
            <V2TerminalWindow title="ryan@workstation:~/identity_manifest.sh" variant="highlight">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-8 space-y-4">
                        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#05ffa1]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#05ffa1]"></span>
                            <span>STATUS: READY_FOR_PRODUCTION</span>
                        </div>

                        <div>
                            <h2 className="font-cyberpunk text-3xl md:text-5xl text-white tracking-[0.08em] uppercase font-bold drop-shadow-[0_0_15px_rgba(255,133,194,0.4)]">
                                Ryan Luo
                            </h2>
                            <p className="font-mono text-sm md:text-base text-[#80deea] mt-2 flex items-center gap-2">
                                <span className="text-[#ff85c2]">❯</span>
                                <span>AI / Machine Learning Engineer & Backend Architect</span>
                            </p>
                        </div>

                        <p className="font-sans text-sm text-[#e0d6ed] leading-relaxed max-w-xl">
                            專注於深度學習演算法研究與系統工程落地的交會點。主導新聞推薦系統（NRMS-BERT）與知識圖譜問答管道（GraphRAG）之端到端架構研發，擅長以嚴謹的量化指標推動業務成長與自動化管線建置。
                        </p>

                        <div className="flex gap-3 pt-2">
                            <button className="font-cyberpunk text-xs tracking-wider uppercase px-5 py-2.5 rounded bg-[#ff85c2] text-[#090414] font-bold shadow-[0_0_15px_rgba(255,133,194,0.4)] hover:scale-105 transition-all">
                                Download Resume (.pdf)
                            </button>
                            <button className="font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded border border-[#80deea]/50 text-[#80deea] hover:bg-[#80deea]/10 transition-all">
                                Explore Architecture ➔
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#140e24] border border-[#b388ff]/20 rounded-lg p-5 space-y-4">
                        <div className="font-mono text-[11px] text-[#b388ff] uppercase tracking-wider border-b border-[#b388ff]/20 pb-2">
                            CORE ENGINEERING METRICS
                        </div>
                        <div className="space-y-3">
                            <div>
                                <div className="font-cyberpunk text-2xl text-[#80deea] font-semibold">+18.4%</div>
                                <div className="font-sans text-xs text-gray-400">RecSys CTR AUC Improvement</div>
                            </div>
                            <div>
                                <div className="font-cyberpunk text-2xl text-[#ff85c2] font-semibold">-42.0%</div>
                                <div className="font-sans text-xs text-gray-400">GraphRAG Hallucination Drop</div>
                            </div>
                            <div>
                                <div className="font-cyberpunk text-2xl text-[#05ffa1] font-semibold">10,000+</div>
                                <div className="font-sans text-xs text-gray-400">Daily Ingestion Throughput</div>
                            </div>
                        </div>
                    </div>
                </div>
            </V2TerminalWindow>

            {/* Timeline Experience */}
            <div className="relative pl-6 md:pl-10 border-l border-[#ff85c2]/40 space-y-6">
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#090414] border-2 border-[#ff85c2] shadow-[0_0_12px_rgba(255,133,194,0.8)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff85c2] absolute inset-0 m-auto"></span>
                </div>

                <V2TerminalWindow title="career@enterprise:~/work_experience/01_ml_engineer.log" badge="FULL-TIME">
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 border-b border-[#b388ff]/15 pb-3">
                            <div>
                                <span className="font-mono text-xs text-[#ff85c2] font-semibold">2024.03 — PRESENT</span>
                                <h3 className="font-cyberpunk text-xl text-white tracking-wide mt-0.5">
                                    AI / Machine Learning Engineer
                                </h3>
                                <div className="font-mono text-xs text-[#80deea]">
                                    @ Intelligence Systems Lab
                                </div>
                            </div>
                            <div className="text-xs font-mono text-gray-400">
                                Taipei, Taiwan (Hybrid)
                            </div>
                        </div>

                        <ul className="space-y-2 font-sans text-xs md:text-sm text-[#e0d6ed] leading-relaxed">
                            <li className="flex items-start gap-2">
                                <span className="text-[#80deea] font-mono text-xs mt-0.5">▹</span>
                                <span>
                                    <strong className="text-white font-medium">推薦系統演算法重構 (NRMS-BERT)</strong>：採用多頭自注意力機制與雙塔架構建模使用者潛在閱讀軌跡，將新聞點擊率預測 AUC 提升 <span className="text-[#80deea] font-mono">18.4%</span>。
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#80deea] font-mono text-xs mt-0.5">▹</span>
                                <span>
                                    <strong className="text-white font-medium">知識圖譜增強問答系統 (GraphRAG)</strong>：結合實體抽取拓撲圖與語意嵌入向量檢索，將跨集數財經語音問答的幻覺率降低 <span className="text-[#ff85c2] font-mono">42%</span>。
                                </span>
                            </li>
                        </ul>

                        <div className="flex gap-2 flex-wrap pt-2 border-t border-[#b388ff]/10">
                            {["PyTorch", "HuggingFace", "BERT", "GraphRAG", "Azure Cloud", "Docker"].map((tech) => (
                                <span key={tech} className="font-mono text-[11px] text-[#80deea] bg-[#140e24] border border-[#80deea]/25 px-2.5 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </V2TerminalWindow>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <V2TerminalWindow title="repo@projects:~/graphrag_podcast_qa" badge="RAG PIPELINE">
                    <div className="space-y-3">
                        <div className="relative w-full h-40 rounded overflow-hidden border border-[#b388ff]/30 bg-[#140e24]">
                            <img src="/graphrag.png" alt="GraphRAG QA" className="w-full h-full object-cover" />
                            <div className="absolute top-2 right-2 font-mono text-[10px] bg-black/80 text-[#80deea] px-2 py-0.5 rounded">
                                arXiv:2404.16130
                            </div>
                        </div>
                        <h4 className="font-cyberpunk text-base text-white">GraphRAG Chatbot for Podcast QA</h4>
                        <p className="font-sans text-xs text-gray-300 leading-relaxed">
                            結合 Whisper 語音轉錄與微軟 GraphRAG 實體拓撲架構，於《股癌》Podcast 音訊文庫中實現跨集數概念鏈結之深度脈絡問答。
                        </p>
                    </div>
                </V2TerminalWindow>

                <V2TerminalWindow title="repo@projects:~/nrms_news_recsys" badge="DEEP LEARNING">
                    <div className="space-y-3">
                        <div className="relative w-full h-40 rounded overflow-hidden border border-[#b388ff]/30 bg-[#140e24]">
                            <img src="/tsne.png" alt="News RecSys" className="w-full h-full object-cover" />
                            <div className="absolute top-2 right-2 font-mono text-[10px] bg-black/80 text-[#80deea] px-2 py-0.5 rounded">
                                arXiv:2104.07413
                            </div>
                        </div>
                        <h4 className="font-cyberpunk text-base text-white">News Recommender System (NRMS-BERT)</h4>
                        <p className="font-sans text-xs text-gray-300 leading-relaxed">
                            基於神經新聞推薦模型（NRMS）結合 BERT 預訓練權重，抽取標題自注意力向量特徵，建構高品質新聞點擊預測與 T-SNE 視覺化。
                        </p>
                    </div>
                </V2TerminalWindow>
            </div>

            {/* Interactive CLI Console */}
            <V2TerminalWindow title="guest@terminal:~/contact_hub.sh" variant="minimal">
                <div className="space-y-3 font-mono text-xs">
                    <div className="text-gray-400">
                        Type <span className="text-[#ff85c2]">help</span>, <span className="text-[#80deea]">metrics</span>, <span className="text-[#80deea]">contact</span> in console.
                    </div>
                    {cliOutput && (
                        <div className="p-3 bg-[#090414] rounded border border-[#b388ff]/20 text-[#f4effa] whitespace-pre-wrap">
                            {cliOutput}
                        </div>
                    )}
                    <form onSubmit={handleCliSubmit} className="flex items-center gap-2 bg-[#140e24] px-3 py-1.5 rounded border border-[#b388ff]/20">
                        <span className="text-[#ff85c2] font-bold">❯</span>
                        <input
                            type="text"
                            value={cliInput}
                            onChange={(e) => setCliInput(e.target.value)}
                            placeholder="Enter command..."
                            className="bg-transparent border-none outline-none text-[#80deea] flex-1 font-mono text-xs"
                        />
                        <button type="submit" className="text-xs px-2.5 py-0.5 rounded bg-[#ff85c2]/20 text-[#ff85c2] border border-[#ff85c2]/40">
                            RUN
                        </button>
                    </form>
                </div>
            </V2TerminalWindow>
        </div>
    );
};

// =========================================================================
// VERSION 3: SERIOUS GEEK + ACCENTS (V2.0 UI Spec)
// =========================================================================
// Alias to the shared component matching UI Spec
const V3TerminalWindow = TerminalWindow;

const Version3V2Spec = () => {
    const [cliInput, setCliInput] = useState("");
    const [cliOutput, setCliOutput] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [trackIndex, setTrackIndex] = useState(0);

    const playlist = [
        { title: "Plastic Love", artist: "Mariya Takeuchi", year: "1984", time: "04:52" },
        { title: "Stay With Me (真夜中のドア)", artist: "Miki Matsubara", year: "1979", time: "04:34" },
        { title: "Midnight Pretenders", artist: "Tomoko Aran", year: "1983", time: "05:45" },
        { title: "Sparkle", artist: "Tatsuro Yamashita", year: "1982", time: "04:18" }
    ];

    const currentTrack = playlist[trackIndex];

    const nextTrack = () => {
        setTrackIndex((prev) => (prev + 1) % playlist.length);
    };

    const handleCliSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = cliInput.trim().toLowerCase();
        if (cmd === "help") {
            setCliOutput("COMMANDS: profile, skills, metrics, contact, clear");
        } else if (cmd === "profile") {
            setCliOutput("RYAN LUO // AI & MACHINE LEARNING ENGINEER\nSpecializing in RecSys (NRMS-BERT) & GraphRAG pipelines.");
        } else if (cmd === "metrics") {
            setCliOutput("[OK] (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ METRICS:\n  • RecSys CTR AUC: +18.4%\n  • Hallucination Drop: -42.0%\n  • Pipeline Throughput: 10k+ docs/day");
        } else if (cmd === "contact") {
            setCliOutput("EMAIL: ryan@workspaces.io | GITHUB: github.com/RyanLuo");
        } else if (cmd === "clear") {
            setCliOutput(null);
        } else if (cmd) {
            setCliOutput(`[ERR] ( ´•̥̥̥ω•̥̥̥ ) bash: command not found: ${cmd}`);
        }
        setCliInput("");
    };

    return (
        <div className="space-y-8 py-4">
            {/* Retro City Pop Marquee Music Player */}
            <div className="bg-[#120a1c]/85 border border-[#c4b5fd]/30 rounded-xl p-2.5 md:p-3 backdrop-blur-xl shadow-[0_4px_25px_rgba(196,181,253,0.12)] flex flex-col sm:flex-row items-center justify-between gap-3 overflow-hidden">
                {/* Deck & Play status */}
                <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-center">
                    <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-8 h-8 rounded-lg bg-[#f472b6]/20 border border-[#f472b6]/50 text-[#f472b6] flex items-center justify-center hover:bg-[#f472b6] hover:text-[#090414] transition-all shadow-[0_0_10px_rgba(244,114,182,0.3)] cursor-pointer"
                        title={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? "❚❚" : "▶"}
                    </button>
                    <button 
                        onClick={nextTrack}
                        className="w-8 h-8 rounded-lg bg-[#80deea]/10 border border-[#80deea]/30 text-[#80deea] flex items-center justify-center hover:bg-[#80deea]/20 transition-all cursor-pointer font-bold text-xs"
                        title="Next Track"
                    >
                        ⏭
                    </button>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090414] border border-[#c4b5fd]/20">
                        <span className="font-mono text-[10px] text-[#f472b6] font-bold">CASSETTE DECK</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#05ffa1] animate-pulse"></span>
                    </div>
                </div>

                {/* Animated Marquee Strip */}
                <div className="flex-1 w-full bg-[#090414]/90 border border-[#c4b5fd]/15 rounded-lg px-3 py-1.5 overflow-hidden flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#80deea] shrink-0 font-bold flex items-center gap-1">
                        <span>FM 84.5</span>
                        <span className="text-gray-500">|</span>
                    </span>
                    <div className="overflow-hidden whitespace-nowrap w-full relative">
                        <div className={`inline-block ${isPlaying ? 'animate-[marquee_12s_linear_infinite]' : ''} font-mono text-xs text-[#f8fafc] font-medium`}>
                            <span className="text-[#f472b6] font-bold">NOW PLAYING:</span> {currentTrack.title} — {currentTrack.artist} ({currentTrack.year}) <span className="text-gray-500 mx-2">{"///"}</span> <span className="text-[#80deea]">SIDE-A STEREO HI-FI</span> <span className="text-gray-500 mx-2">{"///"}</span> 80s CITY POP BEATS
                        </div>
                    </div>
                </div>

                {/* Cassette Time Code */}
                <div className="hidden md:flex items-center gap-2 shrink-0 font-mono text-xs text-[#c4b5fd]/80 bg-[#090414] px-2.5 py-1.5 rounded border border-[#c4b5fd]/20">
                    <span className="text-gray-500">TRACK 0{trackIndex + 1}/04</span>
                    <span className="text-[#05ffa1]">{isPlaying ? "PLAY" : "PAUSE"}</span>
                </div>
            </div>

            {/* Identity Hero */}
            <V3TerminalWindow 
                title="ryan@workstation:~/identity_manifest.sh" 
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-8 space-y-4">
                        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#05ffa1]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#05ffa1] shadow-[0_0_8px_#05ffa1]"></span>
                            <span>STATUS: READY_FOR_PRODUCTION</span>
                        </div>

                        <div>
                            <h2 className="font-cyberpunk text-3xl md:text-5xl text-white tracking-[0.08em] uppercase font-bold drop-shadow-[0_0_15px_rgba(255,133,194,0.4)]">
                                Ryan Luo
                            </h2>
                            <p className="font-mono text-sm md:text-base text-[#80deea] mt-2 flex items-center gap-2">
                                <span className="text-[#f472b6]">❯</span>
                                <span>AI / Machine Learning Engineer & Backend Architect</span>
                            </p>
                        </div>

                        <p className="font-sans text-sm text-[#f8fafc] leading-relaxed max-w-xl">
                            專注於深度學習演算法研究與系統工程落地的交會點。主導新聞推薦系統（NRMS-BERT）與知識圖譜問答管道（GraphRAG）之端到端架構研發，擅長以嚴謹的量化指標推動業務成長與自動化管線建置。
                        </p>

                        <div className="flex gap-3 pt-2">
                            <button className="font-cyberpunk text-xs tracking-wider uppercase px-5 py-2.5 rounded bg-[#f472b6] text-[#090414] font-bold shadow-[0_0_15px_rgba(244,114,182,0.4)] hover:scale-105 transition-all">
                                Download Resume (.pdf)
                            </button>
                            <button className="font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded border border-[#80deea]/50 text-[#80deea] hover:bg-[#80deea]/10 transition-all">
                                Explore Architecture ➔
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#140e24] border border-[#c4b5fd]/20 rounded-lg p-5 space-y-4 relative overflow-hidden group">
                        <div className="font-mono text-[11px] text-[#c4b5fd] uppercase tracking-wider border-b border-[#c4b5fd]/20 pb-2">
                            CORE ENGINEERING METRICS
                        </div>
                        <div className="space-y-3 relative z-10">
                            <div>
                                <div className="font-cyberpunk text-2xl text-[#80deea] font-semibold">+18.4%</div>
                                <div className="font-sans text-xs text-gray-400">RecSys CTR AUC Improvement</div>
                            </div>
                            <div>
                                <div className="font-cyberpunk text-2xl text-[#f472b6] font-semibold">-42.0%</div>
                                <div className="font-sans text-xs text-gray-400">GraphRAG Hallucination Drop</div>
                            </div>
                            <div>
                                <div className="font-cyberpunk text-2xl text-[#05ffa1] font-semibold">10,000+</div>
                                <div className="font-sans text-xs text-gray-400">Daily Ingestion Throughput</div>
                            </div>
                        </div>
                        {/* subtle grid background in the metric card */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:16px_16px] transition-opacity group-hover:opacity-20"></div>
                    </div>
                </div>
            </V3TerminalWindow>

            {/* Timeline Experience */}
            <div className="relative pl-6 md:pl-10 border-l border-[#f472b6]/40 space-y-6">
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#090414] border-2 border-[#f472b6] shadow-[0_0_12px_rgba(244,114,182,0.6)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f472b6] absolute inset-0 m-auto"></span>
                </div>

                <V3TerminalWindow 
                    title="career@enterprise:~/work_experience/01_ml_engineer.log" 
                >
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 border-b border-[#c4b5fd]/15 pb-3">
                            <div>
                                <span className="font-mono text-xs text-[#f472b6] font-semibold">2024.03 — PRESENT</span>
                                <h3 className="font-cyberpunk text-xl text-white tracking-wide mt-0.5">
                                    AI / Machine Learning Engineer
                                </h3>
                                <div className="font-mono text-xs text-[#80deea]">
                                    @ Intelligence Systems Lab
                                </div>
                            </div>
                            <div className="text-xs font-mono text-gray-400">
                                Taipei, Taiwan (Hybrid)
                            </div>
                        </div>

                        <ul className="space-y-2 font-sans text-xs md:text-sm text-[#f8fafc] leading-relaxed">
                            <li className="flex items-start gap-2">
                                <span className="text-[#80deea] font-mono text-xs mt-0.5">▹</span>
                                <span>
                                    <strong className="text-white font-medium">推薦系統演算法重構 (NRMS-BERT)</strong>：採用多頭自注意力機制與雙塔架構建模使用者潛在閱讀軌跡，將新聞點擊率預測 AUC 提升 <span className="text-[#80deea] font-mono">18.4%</span>。
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#80deea] font-mono text-xs mt-0.5">▹</span>
                                <span>
                                    <strong className="text-white font-medium">知識圖譜增強問答系統 (GraphRAG)</strong>：結合實體抽取拓撲圖與語意嵌入向量檢索，將跨集數財經語音問答的幻覺率降低 <span className="text-[#f472b6] font-mono">42%</span>。
                                </span>
                            </li>
                        </ul>

                        <div className="flex gap-2 flex-wrap pt-2 border-t border-[#c4b5fd]/10">
                            {["PyTorch", "HuggingFace", "BERT", "GraphRAG", "Azure Cloud", "Docker"].map((tech) => (
                                <span key={tech} className="font-mono text-[11px] text-[#80deea] bg-[#140e24] border border-[#80deea]/25 px-2.5 py-1 rounded hover:border-[#80deea] transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </V3TerminalWindow>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <V3TerminalWindow 
                    title="repo@projects:~/graphrag_podcast_qa" 
                >
                    <div className="space-y-3">
                        <div className="relative w-full h-40 rounded overflow-hidden border border-[#c4b5fd]/30 bg-[#140e24] group">
                            <img src="/graphrag.png" alt="GraphRAG QA" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute top-2 right-2 font-mono text-[10px] bg-black/80 text-[#80deea] px-2 py-0.5 rounded border border-[#80deea]/30">
                                arXiv:2404.16130
                            </div>
                        </div>
                        <h4 className="font-cyberpunk text-base text-white group-hover:text-[#80deea] transition-colors">GraphRAG Chatbot for Podcast QA</h4>
                        <p className="font-sans text-xs text-gray-300 leading-relaxed">
                            結合 Whisper 語音轉錄與微軟 GraphRAG 實體拓撲架構，於《股癌》Podcast 音訊文庫中實現跨集數概念鏈結之深度脈絡問答。
                        </p>
                    </div>
                </V3TerminalWindow>

                <V3TerminalWindow title="repo@projects:~/nrms_news_recsys">
                    <div className="space-y-3">
                        <div className="relative w-full h-40 rounded overflow-hidden border border-[#c4b5fd]/30 bg-[#140e24] group">
                            <img src="/tsne.png" alt="News RecSys" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute top-2 right-2 font-mono text-[10px] bg-black/80 text-[#80deea] px-2 py-0.5 rounded border border-[#80deea]/30">
                                arXiv:2104.07413
                            </div>
                        </div>
                        <h4 className="font-cyberpunk text-base text-white group-hover:text-[#80deea] transition-colors">News Recommender System (NRMS-BERT)</h4>
                        <p className="font-sans text-xs text-gray-300 leading-relaxed">
                            基於神經新聞推薦模型（NRMS）結合 BERT 預訓練權重，抽取標題自注意力向量特徵，建構高品質新聞點擊預測與 T-SNE 視覺化。
                        </p>
                    </div>
                </V3TerminalWindow>
            </div>

            {/* Interactive CLI Console */}
            <V3TerminalWindow title="guest@terminal:~/contact_hub.sh">
                <div className="space-y-3 font-mono text-xs">
                    <div className="text-gray-400">
                        Type <span className="text-[#f472b6]">help</span>, <span className="text-[#80deea]">metrics</span>, <span className="text-[#80deea]">contact</span> in console.
                    </div>
                    {cliOutput && (
                        <div className="p-3 bg-[#090414] rounded border border-[#c4b5fd]/20 text-[#f8fafc] whitespace-pre-wrap shadow-inner">
                            {cliOutput}
                        </div>
                    )}
                    <form onSubmit={handleCliSubmit} className="flex items-center gap-2 bg-[#140e24] px-3 py-1.5 rounded border border-[#c4b5fd]/20 focus-within:border-[#80deea]/50 transition-colors">
                        <span className="text-[#f472b6] font-bold animate-pulse">❯</span>
                        <input
                            type="text"
                            value={cliInput}
                            onChange={(e) => setCliInput(e.target.value)}
                            placeholder="Enter command..."
                            className="bg-transparent border-none outline-none text-[#80deea] flex-1 font-mono text-xs"
                        />
                        <button type="submit" className="text-xs px-2.5 py-0.5 rounded bg-[#f472b6]/20 text-[#f472b6] border border-[#f472b6]/40 hover:bg-[#f472b6] hover:text-[#090414] transition-colors font-bold">
                            RUN
                        </button>
                    </form>
                </div>
            </V3TerminalWindow>
        </div>
    );
};

// =========================================================================
// VERSION 4: ACCENTS PLAYGROUND (12 Demo Elements)
// =========================================================================
const Version4Sandbox = () => {
    const [gachaResult, setGachaResult] = useState<string | null>(null);
    const [konamiActivated, setKonamiActivated] = useState(false);
    
    // konami code hook
    useEffect(() => {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    setKonamiActivated(true);
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const rollGacha = () => {
        const skills = ["SSR: Machine Learning", "SR: React Next.js", "R: TailwindCSS", "UR: GraphRAG Architecture"];
        setGachaResult(skills[Math.floor(Math.random() * skills.length)]);
    };

    return (
        <div className={`p-6 md:p-10 rounded-xl transition-all duration-1000 ${konamiActivated ? 'bg-black text-[#05ffa1] shadow-[0_0_50px_#05ffa1]' : 'bg-[#f8fafc] text-slate-800 shadow-2xl'} relative overflow-hidden font-sans border-4 ${konamiActivated ? 'border-red-500' : 'border-white'}`}>
            
            <div className="text-center mb-10 border-b border-slate-200 pb-6">
                <h2 className="text-3xl font-black mb-2 tracking-tight">UI Elements Playground</h2>
                <p className="text-slate-500 text-sm font-medium">12 Accents Demo on a Blank Canvas (Try the Konami Code!)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* A. ASCII Art */}
                <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xs mb-4 text-slate-400 tracking-wider">A. ASCII ART (NEOFETCH)</h3>
                    <pre className="font-mono text-[10px] leading-[10px] text-pink-500 font-bold whitespace-pre flex justify-center">
{`   .----.
 _.'__    '.
| .--.     |
| |__|     |
|        _.|
|      '   |
'----'---'
 RYAN OS`}
                    </pre>
                </div>

                {/* B. Win95 Error */}
                <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col hover:shadow-md transition-shadow relative overflow-hidden">
                    <h3 className="font-bold text-xs mb-4 text-slate-400 tracking-wider z-10">B. WIN95 ERROR</h3>
                    <div className="w-full bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-gray-800 border-r-gray-800 p-[2px] z-10 shadow-lg">
                        <div className="bg-[#000080] text-white px-1.5 py-0.5 text-[10px] font-bold flex justify-between">
                            <span>Error</span>
                            <button className="bg-[#c0c0c0] text-black w-3.5 h-3.5 flex items-center justify-center border-t border-l border-white border-b border-gray-800">×</button>
                        </div>
                        <div className="p-3 flex gap-3 items-center">
                            <div className="text-red-600 text-2xl drop-shadow">✖</div>
                            <div className="text-[10px] font-serif leading-tight text-black">發生嚴重錯誤：正在修復時空裂縫</div>
                        </div>
                        <div className="flex justify-center pb-2">
                            <button className="bg-[#c0c0c0] text-black px-4 py-0.5 text-[10px] border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-gray-800 border-r-gray-800 active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">OK</button>
                        </div>
                    </div>
                    {/* subtle pattern bg */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[size:4px_4px]"></div>
                </div>

                {/* C. Vim Cursor */}
                <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xs mb-4 text-slate-400 tracking-wider">C. VIM CURSOR</h3>
                    <div className="flex-1 flex items-center justify-center text-lg font-mono text-black">
                        <span className="font-bold">sudo exec</span>
                        <span className="inline-block w-2.5 h-5 bg-pink-500 ml-[1px] animate-pulse"></span>
                    </div>
                </div>

                {/* D. Neon Matrix */}
                <div className="p-5 bg-gray-900 border border-slate-200 rounded-lg shadow-sm text-white hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xs mb-4 text-gray-500 tracking-wider">D. NEON GITHUB GRAPH</h3>
                    <div className="grid grid-cols-8 gap-1.5 justify-center">
                        {Array.from({length: 32}).map((_, i) => {
                            const rand = Math.random();
                            let colorClass = 'bg-gray-800';
                            if (rand > 0.8) colorClass = 'bg-[#f472b6] shadow-[0_0_8px_#f472b6]';
                            else if (rand > 0.5) colorClass = 'bg-[#80deea] shadow-[0_0_8px_#80deea]';
                            return <div key={i} className={`w-3.5 h-3.5 rounded-sm ${colorClass}`}></div>
                        })}
                    </div>
                </div>

                {/* E. Marquee Player */}
                <div className="p-5 bg-black border border-slate-200 rounded-lg shadow-sm flex flex-col hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xs mb-4 text-gray-600 tracking-wider">E. MARQUEE PLAYER</h3>
                    <div className="flex-1 flex items-center">
                        <div className="text-cyan-400 text-lg mr-3 animate-pulse">▶</div>
                        <div className="overflow-hidden whitespace-nowrap w-full border border-gray-800 p-2 rounded bg-gray-900">
                            <div className="inline-block animate-[marquee_6s_linear_infinite] text-pink-500 font-mono text-xs font-bold tracking-widest">
                                NOW PLAYING: Plastic Love - Mariya Takeuchi (1984)
                            </div>
                        </div>
                    </div>
                </div>

                {/* F. Glitch Hover */}
                <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xs mb-4 text-slate-400 tracking-wider">F. GLITCH HOVER</h3>
                    <div className="flex-1 flex items-center justify-center">
                        <button className="relative group px-6 py-2 bg-black text-white font-black uppercase tracking-widest overflow-hidden text-sm">
                            <span className="relative z-10 group-hover:opacity-0 transition-opacity">HOVER ME</span>
                            {/* Glitch layers visible on hover */}
                            <span className="absolute inset-0 z-10 hidden group-hover:flex items-center justify-center bg-black text-white mix-blend-screen">HOVER ME</span>
                            <span className="absolute inset-0 z-0 hidden group-hover:flex items-center justify-center bg-black text-red-500 -ml-1 mix-blend-screen">HOVER ME</span>
                            <span className="absolute inset-0 z-0 hidden group-hover:flex items-center justify-center bg-black text-cyan-500 ml-1 mix-blend-screen">HOVER ME</span>
                        </button>
                    </div>
                </div>

                {/* G. VHS Timestamp */}
                <div className="p-5 bg-black border border-slate-200 rounded-lg shadow-sm flex flex-col hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px] pointer-events-none z-20"></div>
                    <h3 className="font-bold text-xs mb-4 text-gray-600 tracking-wider relative z-10">G. VHS TIMESTAMP</h3>
                    <div className="flex-1 flex items-center justify-center relative z-10">
                        <div className="font-mono text-xl text-white tracking-[0.2em] drop-shadow-[2px_0_0_rgba(255,0,0,0.8)]" style={{fontFamily: "'Courier New', Courier, monospace"}}>
                            <span className="text-2xl animate-[pulse_2s_infinite]">PLAY ►</span><br/>
                            <span className="text-sm">AUG-29 20:28</span>
                        </div>
                    </div>
                </div>

                {/* H. EVA Typography */}
                <div className="p-5 bg-black border border-slate-200 rounded-lg shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xs mb-4 text-gray-600 tracking-wider">H. EVA TYPOGRAPHY</h3>
                    <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="w-full h-2 bg-[repeating-linear-gradient(45deg,#000_0,#000_10px,#eab308_10px,#eab308_20px)] mb-3 border-y border-[#eab308]"></div>
                        <h1 className="font-black text-3xl text-red-600 tracking-tighter" style={{transform: "scaleY(1.3)"}}>絕對領域</h1>
                        <h2 className="font-black text-xl text-white tracking-[0.3em] mt-3">CAUTION</h2>
                        <div className="w-full h-2 bg-[repeating-linear-gradient(-45deg,#000_0,#000_10px,#eab308_10px,#eab308_20px)] mt-3 border-y border-[#eab308]"></div>
                    </div>
                </div>

                {/* I. Tamagotchi Pet */}
                <div className="p-5 bg-pink-50 border border-slate-200 rounded-lg shadow-sm flex flex-col hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xs mb-4 text-pink-300 tracking-wider">I. TAMAGOTCHI PET</h3>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center animate-bounce shadow-md border-[3px] border-black">
                            <div className="font-mono text-[9px] font-black text-black">^・ω・^</div>
                        </div>
                        <div className="mt-3 font-mono text-[9px] text-pink-500 font-bold tracking-wider">DIGITAL PET ZzZ</div>
                    </div>
                </div>

                {/* J. Gacha Button */}
                <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xs mb-4 text-slate-400 tracking-wider">J. GACHA ROLL</h3>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <button onClick={rollGacha} className="bg-yellow-400 text-yellow-900 border-b-4 border-yellow-600 font-black rounded px-4 py-2 hover:translate-y-1 hover:border-b-0 transition-all active:bg-yellow-500 text-xs">
                            ROLL FOR SKILL 🎲
                        </button>
                        {gachaResult && (
                            <div className="mt-3 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded shadow-[0_0_10px_rgba(236,72,153,0.5)] text-[10px] text-center w-full animate-pulse">
                                {gachaResult}
                            </div>
                        )}
                    </div>
                </div>

                {/* K. Power Level Scouter */}
                <div className="p-5 bg-gray-900 border border-slate-200 rounded-lg shadow-sm flex flex-col hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xs mb-4 text-gray-500 tracking-wider">K. POWER SCOUTER</h3>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative border border-green-500 p-3 rounded-md bg-green-900/20 text-center w-full">
                            <div className="absolute -top-2 left-2 bg-gray-900 px-1 text-green-500 text-[9px] font-mono font-bold tracking-wider">TARGET ACQUIRED</div>
                            <div className="text-3xl font-black text-green-400 animate-pulse font-mono tracking-tighter mt-1">
                                &gt;9000!
                            </div>
                        </div>
                    </div>
                </div>

                {/* L. Konami Code */}
                <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xs mb-4 text-slate-400 tracking-wider">L. KONAMI CODE</h3>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <div className="font-mono text-xs text-slate-600 bg-slate-100 px-2 py-1.5 rounded border border-slate-200 shadow-inner">
                            ↑ ↑ ↓ ↓ ← → ← → B A
                        </div>
                        {konamiActivated ? (
                            <div className="mt-3 text-red-600 font-black animate-bounce text-xs tracking-widest">
                                🔥 GOD MODE 🔥
                            </div>
                        ) : (
                            <div className="mt-3 text-slate-400 font-medium text-[10px]">
                                Type anywhere...
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Embedded styles for animations */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `}} />
        </div>
    );
};

// =========================================================================
// VERSION 6: CITY POP RETRO WINDOW (BLACK CANVAS & HIGH-CHROMA PASTELS)
// =========================================================================
const Version6WindowDemo = () => {
    return (
        <div className="space-y-10 py-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-8">
                <div className="inline-block px-3 py-1 rounded bg-window-shadow/20 border border-window-shadow text-window-shadow font-mono text-xs font-semibold">
                    UNIFIED CONTENT SPEC // 1. Image ➔ 2. Title ➔ 3. Description ➔ 4. Tags
                </div>
                <h3 className="font-cyberpunk text-2xl text-white">Standardized Terminal Window</h3>
                <p className="font-sans text-xs text-gray-300">
                    視窗內容標準化規格：依序由上至下展示 <strong>Image ➔ Title ➔ Description ➔ Tags</strong>，風格高度統一且支援 Hover 縮放動畫。
                </p>
            </div>

            {/* 1. Standard Project Showcase Window (Unified Spec) */}
            <TerminalWindow 
                image="/graphrag.png"
                title="GraphRAG Chatbot for Podcast QA"
                description="結合 Whisper 語音轉錄與微軟 GraphRAG 實體拓撲知識圖譜架構，於萬小時語音文庫中實現跨集數概念鏈結之深度脈絡問答，跨集數檢索幻覺率降低 42.0%。"
                tags={["Whisper", "GraphRAG", "KnowledgeGraph", "Python", "Neo4j", "FastAPI"]}
            />

            {/* 2. Second Project Showcase Window (Unified Spec) */}
            <TerminalWindow 
                image="/tsne.png"
                title="News Recommender System (NRMS-BERT)"
                description="基於神經新聞推薦模型（NRMS）結合 BERT 預訓練權重，抽取標題多頭自注意力向量特徵，建模使用者長期閱讀軌跡，新聞點擊率預測 AUC 顯著提升 18.4%。"
                tags={["PyTorch", "BERT", "MultiHead-Attention", "RecSys", "T-SNE", "Azure Cloud"]}
            />
        </div>
    );
};

// =========================================================================
// MAIN SPA ROUTE: /demos (Version 1, 2, 3, 4, 6 Switcher)
// =========================================================================
export interface DemosProps {
    /** Controlled by the sandbox menu; this component owns no version state. */
    activeVersion: 1 | 2 | 3 | 4 | 6;
}

export default function DemosSPAPage({ activeVersion }: DemosProps) {
    const versionMeta = {
        1: {
            title: "Version 1: Minimal Retro Geek",
            subtitle: "原始輕量極客基準版 (Minimal Profile Card with Orbitron + CityPop Colors)",
            tag: "MINIMAL BASELINE"
        },
        2: {
            title: "Version 2: Enterprise Retro Geek",
            subtitle: "專業工程師調校版 (Windows Title Bar + Quantified Metrics + STAR Timeline)",
            tag: "PROFESSIONAL SPEC"
        },
        3: {
            title: "Version 3: Serious Geek + City Pop Night",
            subtitle: "UI Spec v2.0 實作版 (底端城市星空大圖 + 毛玻璃視窗 + 數位貼紙 + 顏文字 CLI)",
            tag: "V2.0 UI SPEC"
        },
        4: {
            title: "Version 4: Accents Playground",
            subtitle: "白紙沙盒：12 種次文化元素展示 (Geek, Retro, Citypop, Anime)",
            tag: "BLANK SLATE DEMO"
        },
        6: {
            title: "Version 6: City Pop Retro Window (Black Canvas)",
            subtitle: "黑色網頁底色 (Black Page Background) + 經典 City Pop 復古柔彩視窗 (Lilac Canvas & Bold Shadow)",
            tag: "CITY POP RETRO"
        }
    };

    return (
        <div className="min-h-screen bg-black text-[#1a0f2e] relative selection:bg-[#ff85c2] selection:text-black pt-20 pb-16 px-4 md:px-8 overflow-x-hidden">
            {/* Citypop Moon Sea Reflection Background (Only for Version 3) */}
            {activeVersion === 3 && (
                <div 
                    className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 opacity-95"
                    style={{
                        backgroundImage: "url('/citypop_moon_sea_asymmetric.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "top right",
                        backgroundColor: "#000000"
                    }}
                >
                    {/* Subtle bottom fade to blend smoothly into page content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent 40% to-[#0a0510]/80" />
                </div>
            )}

            {/* Retro Grid Background (for non-v3) */}
            {activeVersion !== 3 && (
                <div 
                    className="fixed inset-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage: "linear-gradient(rgba(179, 136, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128, 222, 234, 0.1) 1px, transparent 1px)",
                        backgroundSize: "48px 48px"
                    }}
                />
            )}

            <div className="max-w-5xl mx-auto relative z-10 space-y-10">

                {/* Active version label. The switcher itself lives in the
                    sandbox menu, so this only identifies what is on screen. */}
                <div className="text-center space-y-1 border-b border-cyberpunk-purple/15 pb-4">
                    <div className="font-cyberpunk text-lg text-white flex items-center justify-center gap-2">
                        {versionMeta[activeVersion].title}
                    </div>
                    <div className="font-sans text-xs text-gray-400">
                        {versionMeta[activeVersion].subtitle}
                    </div>
                </div>

                {/* Version Content Display */}
                <div className="transition-all duration-300">
                    {activeVersion === 1 && <Version1RetroGeek />}
                    {activeVersion === 2 && <Version2Enterprise />}
                    {activeVersion === 3 && <Version3V2Spec />}
                    {activeVersion === 4 && <Version4Sandbox />}
                    {activeVersion === 6 && <Version6WindowDemo />}
                </div>

            </div>
        </div>
    );
}
