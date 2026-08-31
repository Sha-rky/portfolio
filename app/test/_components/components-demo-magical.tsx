"use client";

import React, { useState } from "react";

// =========================================================================
// 1. Dreamy Magical Terminal Window Component (Windows Style x Magical Geek)
// =========================================================================
interface TerminalWindowProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "highlight" | "minimal";
    badge?: string;
}

const MagicalTerminalWindow = ({
    title,
    children,
    className = "",
    variant = "default",
    badge
}: TerminalWindowProps) => {
    return (
        <div 
            className={`bg-[#120822]/90 border rounded-xl overflow-hidden backdrop-blur-2xl transition-all duration-300 ${
                variant === "highlight"
                    ? "border-[#ff85c2]/70 shadow-[0_8px_35px_rgba(255,133,194,0.25)] hover:shadow-[0_12px_45px_rgba(255,133,194,0.4)] hover:border-[#ff85c2]"
                    : "border-[#b388ff]/40 shadow-[0_6px_28px_rgba(179,136,255,0.18)] hover:border-[#ffa8d5]/70 hover:shadow-[0_8px_32px_rgba(255,168,213,0.3)]"
            } ${className}`}
        >
            {/* Windows Window Title Bar with Dreamy Magical Pastel Accents */}
            <div className="px-3.5 py-2 bg-gradient-to-r from-[#1b0d33] via-[#21113d] to-[#1b0d33] border-b border-[#b388ff]/30 flex items-center justify-between select-none">
                {/* Left: Sparkle Icon + Title */}
                <div className="flex items-center gap-2.5 overflow-hidden mr-2">
                    <div className="w-4 h-4 flex items-center justify-center text-[#ff85c2] font-mono text-[11px] border border-[#ff85c2]/60 rounded bg-[#10061e] shadow-[0_0_8px_rgba(255,133,194,0.5)] shrink-0">
                        ✧
                    </div>
                    <span className="font-mono text-xs text-[#fce4ec] tracking-wide font-medium truncate flex items-center gap-1.5">
                        <span className="text-[#b388ff]">~</span>{title}
                    </span>
                </div>

                {/* Right: Badge + Windows Action Controls */}
                <div className="flex items-center gap-2.5 shrink-0">
                    {badge && (
                        <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#ff85c2]/15 border border-[#ff85c2]/50 text-[#ffa8d5] shadow-[0_0_8px_rgba(255,133,194,0.3)]">
                            ✦ {badge} ✦
                        </span>
                    )}
                    <div className="flex items-center -mr-1">
                        {/* Minimize */}
                        <div className="w-7 h-6 flex items-center justify-center text-[#b388ff]/70 hover:bg-[#b388ff]/20 hover:text-white transition-colors cursor-pointer rounded-sm">
                            <span className="w-2.5 h-[1.5px] bg-current inline-block"></span>
                        </div>
                        {/* Maximize */}
                        <div className="w-7 h-6 flex items-center justify-center text-[#b388ff]/70 hover:bg-[#b388ff]/20 hover:text-white transition-colors cursor-pointer rounded-sm">
                            <span className="w-2.5 h-2.5 border border-current inline-block"></span>
                        </div>
                        {/* Close with Magical Rose-Pink Hover */}
                        <div className="w-7 h-6 flex items-center justify-center text-[#b388ff]/70 hover:bg-[#ff85c2] hover:text-[#120822] transition-colors cursor-pointer rounded-sm font-bold">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M1 1L9 9M9 1L1 9" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Window Body */}
            <div className="p-6 md:p-8">
                {children}
            </div>
        </div>
    );
};

// =========================================================================
// Main Components Showcase: Dreamy Magical Geek x Orbitron (Version B)
// =========================================================================
export default function MagicalComponentsDemoPage() {
    const [cliInput, setCliInput] = useState("");
    const [cliOutput, setCliOutput] = useState<string | null>(null);

    const handleCliSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = cliInput.trim().toLowerCase();
        if (cmd === "help") {
            setCliOutput("✧ AVAILABLE MAGICAL COMMANDS ✧\n  profile   - Domain of intelligence & craft\n  skills    - Neural & engineering alchemy\n  metrics   - Quantified breakthrough milestones\n  contact   - Transmission frequencies\n  clear     - Refresh terminal buffer");
        } else if (cmd === "profile") {
            setCliOutput("RYAN LUO // AI & MACHINE LEARNING ARCHITECT ♡\nBlending rigorous mathematical models with creative cyber aesthetics. Specializing in RecSys (NRMS-BERT) & GraphRAG.");
        } else if (cmd === "skills") {
            setCliOutput("CORE STACK ✦\n  • PyTorch, Transformers, GraphRAG, Whisper, DQN\n  • Python, FastAPI, Azure Cloud, Selenium, Docker\n  • Next.js 15, TypeScript, Tailwind CSS");
        } else if (cmd === "metrics") {
            setCliOutput("QUANTIFIED RESULTS ✧\n  ♡ RecSys CTR AUC Improvement: +18.4%\n  ♡ Context Hallucination Drop: -42.0%\n  ♡ Ingestion Throughput: 10,000+ docs/day");
        } else if (cmd === "contact") {
            setCliOutput("TRANSMIT TO ♡:\n  Email: ryan.luo@workspaces.io\n  GitHub: github.com/RyanLuo\n  LinkedIn: linkedin.com/in/ryan-luo");
        } else if (cmd === "clear") {
            setCliOutput(null);
        } else if (cmd) {
            setCliOutput(`✦ magic_sh: unknown spell "${cmd}". Try typing "help" for spellbook.`);
        }
        setCliInput("");
    };

    return (
        <div className="min-h-screen bg-[#0c051a] text-[#fce4ec] relative selection:bg-[#ff85c2] selection:text-black py-16 px-4 md:px-10 overflow-hidden">
            {/* Dreamy Ambient Nebula Lights */}
            <div className="fixed top-0 right-1/4 w-96 h-96 bg-[#ff85c2]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="fixed bottom-1/3 left-10 w-96 h-96 bg-[#b388ff]/15 rounded-full blur-[130px] pointer-events-none"></div>
            <div className="fixed bottom-0 right-10 w-80 h-80 bg-[#80deea]/10 rounded-full blur-[110px] pointer-events-none"></div>

            {/* Subtle CRT Scanline */}
            <div 
                className="fixed inset-0 pointer-events-none z-50 opacity-[0.06]"
                style={{
                    background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)",
                    backgroundSize: "100% 3px"
                }}
            />

            {/* Dreamy Pastel Retro Grid */}
            <div 
                className="fixed inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: "linear-gradient(rgba(255, 133, 194, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(179, 136, 255, 0.12) 1px, transparent 1px)",
                    backgroundSize: "50px 50px"
                }}
            />

            <div className="max-w-5xl mx-auto relative z-10 space-y-16">
                
                {/* Version Switcher Navigation Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#170c2d]/80 border border-[#b388ff]/40 rounded-xl backdrop-blur-md">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#ff85c2]">
                        <span>✧ SPEC EXPLORER:</span>
                        <span className="text-[#fce4ec] font-semibold">STYLE VARIANTS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <a 
                            href="/components-demo" 
                            className="font-mono text-xs px-3.5 py-1.5 rounded-lg border border-[#b388ff]/30 text-[#b388ff] hover:bg-[#b388ff]/10 hover:text-white transition-all"
                        >
                            💼 Version A: Enterprise Retro Geek
                        </a>
                        <span className="font-mono text-xs px-3.5 py-1.5 rounded-lg bg-[#ff85c2]/20 border border-[#ff85c2] text-[#ff85c2] font-semibold shadow-[0_0_12px_rgba(255,133,194,0.4)]">
                            ✧ Version B: Dreamy Magical Geek (Current)
                        </span>
                    </div>
                </div>

                {/* Header Info */}
                <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b0d33] border border-[#ff85c2]/40 shadow-[0_0_20px_rgba(255,133,194,0.3)]">
                        <span className="w-2 h-2 rounded-full bg-[#ff85c2] animate-pulse"></span>
                        <span className="font-mono text-[11px] text-[#ffa8d5] tracking-widest font-semibold uppercase">
                            ✧ DREAMY MAGICAL GEEK EDITION ✧
                        </span>
                    </div>
                    <h1 className="font-cyberpunk text-3xl md:text-5xl text-white tracking-[0.14em] uppercase font-bold">
                        <span className="text-[#ff85c2] drop-shadow-[0_0_18px_rgba(255,133,194,0.6)]">Magical</span>
                        <span className="text-[#b388ff] font-light ml-3">x Orbitron</span>
                    </h1>
                    <p className="font-sans text-xs md:text-sm text-[#fce4ec]/80 max-w-2xl mx-auto leading-relaxed">
                        夢幻少女調性（Magical Girl & CityPop Synthwave）：保留扎實的 AI/ML 工程師量化成果與嚴謹架構，注入星光浮光（✧）、柔美粉紫光暈與圓角毛玻璃美學。
                    </p>
                </div>


                {/* ============================================================== */}
                {/* 01. TYPOGRAPHY & DREAMY IDENTITY                               */}
                {/* ============================================================== */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#ff85c2]">
                        <span className="tracking-wider">✧ [01] IDENTITY MANIFEST & HERO WINDOW</span>
                        <span className="text-[#b388ff]">ORBITRON + DREAMY PASTELS</span>
                    </div>

                    <MagicalTerminalWindow title="ryan@magical-core:~/identity.sh" variant="highlight" badge="OPEN FOR WORK">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#80deea] bg-[#80deea]/10 px-3 py-1 rounded-full border border-[#80deea]/30">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#05ffa1] animate-pulse"></span>
                                    <span>STATUS: OPEN_FOR_AI_OPPORTUNITIES ♡</span>
                                </div>

                                <div>
                                    <h2 className="font-cyberpunk text-3xl md:text-5xl text-white tracking-[0.08em] uppercase font-bold drop-shadow-[0_0_20px_rgba(255,133,194,0.6)]">
                                        Ryan Luo <span className="text-[#ff85c2] text-2xl md:text-3xl font-light">✧</span>
                                    </h2>
                                    <p className="font-mono text-sm md:text-base text-[#ffa8d5] mt-2 flex items-center gap-2">
                                        <span className="text-[#80deea]">✦</span>
                                        <span>AI / Machine Learning Engineer & Creative Developer</span>
                                    </p>
                                </div>

                                <p className="font-sans text-sm text-[#fce4ec]/90 leading-relaxed max-w-xl">
                                    將嚴謹的類神經網路研究（Neural Research）轉化為優雅的真實系統。專注於長文本脈絡感知（GraphRAG）、新聞推薦系統（NRMS-BERT）與高併發自動化工程。
                                </p>

                                <div className="flex gap-3 pt-2">
                                    <button className="font-cyberpunk text-xs tracking-wider uppercase px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff85c2] to-[#b388ff] text-[#0c051a] font-bold shadow-[0_0_20px_rgba(255,133,194,0.5)] hover:shadow-[0_0_30px_rgba(255,133,194,0.8)] hover:scale-105 transition-all">
                                        ♡ Download Resume (.pdf)
                                    </button>
                                    <button className="font-mono text-xs tracking-wider uppercase px-6 py-2.5 rounded-full border border-[#ffa8d5]/50 text-[#ffa8d5] hover:bg-[#ff85c2]/15 hover:border-[#ff85c2] transition-all">
                                        ✧ Explore Architecture
                                    </button>
                                </div>
                            </div>

                            {/* Summary Metric Chips in Magical Pastel Style */}
                            <div className="lg:col-span-4 bg-[#180d30]/80 border border-[#ff85c2]/30 rounded-xl p-5 space-y-4 shadow-[inset_0_0_20px_rgba(255,133,194,0.1)]">
                                <div className="font-mono text-[11px] text-[#ffa8d5] uppercase tracking-wider border-b border-[#ff85c2]/20 pb-2 flex items-center justify-between">
                                    <span>✦ CORE IMPACT</span>
                                    <span className="text-[#80deea]">METRICS</span>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <div className="font-cyberpunk text-2xl text-[#80deea] font-semibold drop-shadow-[0_0_8px_rgba(128,222,234,0.5)]">+18.4%</div>
                                        <div className="font-sans text-xs text-[#fce4ec]/70">RecSys CTR AUC Improvement</div>
                                    </div>
                                    <div>
                                        <div className="font-cyberpunk text-2xl text-[#ff85c2] font-semibold drop-shadow-[0_0_8px_rgba(255,133,194,0.5)]">-42.0%</div>
                                        <div className="font-sans text-xs text-[#fce4ec]/70">GraphRAG Hallucination Reduction</div>
                                    </div>
                                    <div>
                                        <div className="font-cyberpunk text-2xl text-[#b388ff] font-semibold drop-shadow-[0_0_8px_rgba(179,136,255,0.5)]">10,000+</div>
                                        <div className="font-sans text-xs text-[#fce4ec]/70">Daily Autonomous Pipelines</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MagicalTerminalWindow>
                </section>


                {/* ============================================================== */}
                {/* 02. CAREER TIMELINE WITH DREAMY GLOWING TRACK                  */}
                {/* ============================================================== */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#ff85c2]">
                        <span className="tracking-wider">✧ [02] CAREER PATH & EXPERIENCE TIMELINE</span>
                        <span className="text-[#b388ff]">PINK GLOW TRACK & STAR NODES</span>
                    </div>

                    <div className="relative pl-6 md:pl-10 border-l-2 border-[#ff85c2]/60 shadow-[0_0_15px_rgba(255,133,194,0.4)] space-y-6">
                        {/* Glowing Star Node */}
                        <div className="absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-[#0c051a] border-2 border-[#ff85c2] shadow-[0_0_15px_rgba(255,133,194,0.9)] flex items-center justify-center">
                            <span className="text-[9px] text-[#ff85c2]">✦</span>
                        </div>

                        {/* Experience Card */}
                        <MagicalTerminalWindow 
                            title="career@universe:~/experiences/01_ml_engineer.log"
                            badge="STAR METHOD"
                        >
                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 border-b border-[#ff85c2]/20 pb-3">
                                    <div>
                                        <span className="font-mono text-xs text-[#ff85c2] font-semibold">2024.03 — PRESENT ✦</span>
                                        <h3 className="font-cyberpunk text-xl text-white tracking-wide mt-0.5">
                                            AI / Machine Learning Engineer
                                        </h3>
                                        <div className="font-mono text-xs text-[#80deea]">
                                            @ Intelligence Systems Lab
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-[#ffa8d5] bg-[#ff85c2]/10 border border-[#ff85c2]/30 px-2.5 py-1 rounded-full">
                                        Taipei, Taiwan (Hybrid)
                                    </div>
                                </div>

                                <ul className="space-y-2.5 font-sans text-xs md:text-sm text-[#fce4ec]/90 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#ff85c2] font-mono text-xs mt-0.5">♡</span>
                                        <span>
                                            <strong className="text-white font-medium">推薦系統演算法重構 (NRMS-BERT)</strong>：結合多頭自注意力機制與雙塔表徵架構，提升冷啟動與長尾文章預測 AUC 達 <span className="text-[#80deea] font-mono font-bold">+18.4%</span>。
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#ff85c2] font-mono text-xs mt-0.5">♡</span>
                                        <span>
                                            <strong className="text-white font-medium">知識圖譜增強問答系統 (GraphRAG)</strong>：萃取實體拓撲關聯構建圖譜檢索管道，將跨集數音訊文稿的幻覺率降低 <span className="text-[#ff85c2] font-mono font-bold">-42%</span>。
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#ff85c2] font-mono text-xs mt-0.5">♡</span>
                                        <span>
                                            <strong className="text-white font-medium">雲端非同步自動化管線</strong>：整合 Azure Functions、Selenium 與通訊軟體 Webhook，每日自主清洗並排程逾萬筆即時產業情報。
                                        </span>
                                    </li>
                                </ul>

                                <div className="flex gap-2 flex-wrap pt-2 border-t border-[#ff85c2]/15">
                                    {["PyTorch", "HuggingFace", "BERT", "GraphRAG", "Azure", "Docker"].map((tech) => (
                                        <span key={tech} className="font-mono text-[11px] text-[#fce4ec] bg-[#1d1038] border border-[#ff85c2]/30 px-3 py-1 rounded-full hover:border-[#80deea] transition-colors">
                                            ✧ {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </MagicalTerminalWindow>
                    </div>
                </section>


                {/* ============================================================== */}
                {/* 03. SKILLS MATRIX (DREAMY ALCHEMY MODULES)                     */}
                {/* ============================================================== */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#ff85c2]">
                        <span className="tracking-wider">✧ [03] SKILLS & ALCHEMY MATRIX</span>
                        <span className="text-[#b388ff]">PASTEL CHIP MODULES</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <MagicalTerminalWindow title="spellbook@ai:~/machine_learning.json">
                            <div className="space-y-3">
                                <div className="font-cyberpunk text-xs tracking-wider text-[#ff85c2] flex items-center gap-2 uppercase font-semibold">
                                    <span>✧</span>
                                    AI & Machine Learning Alchemy
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {[
                                        "PyTorch", "HuggingFace", "NRMS-BERT", 
                                        "GraphRAG", "DQN Reinforcement", "Whisper", 
                                        "Vector Databases", "LangChain", "Scikit-Learn"
                                    ].map(skill => (
                                        <span key={skill} className="font-mono text-xs text-[#ffa8d5] bg-[#1d0e36] border border-[#ff85c2]/40 px-3 py-1.5 rounded-full hover:border-[#80deea] hover:text-[#80deea] transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </MagicalTerminalWindow>

                        <MagicalTerminalWindow title="spellbook@cloud:~/systems_backend.json">
                            <div className="space-y-3">
                                <div className="font-cyberpunk text-xs tracking-wider text-[#80deea] flex items-center gap-2 uppercase font-semibold">
                                    <span>✦</span>
                                    Backend & Cloud Infrastructure
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {[
                                        "Python (FastAPI)", "Next.js 15", "TypeScript", 
                                        "Azure Cloud", "Docker Containers", "Selenium Scraping", 
                                        "RESTful APIs", "Line / Discord Bots", "Git / GitHub"
                                    ].map(skill => (
                                        <span key={skill} className="font-mono text-xs text-[#c499ff] bg-[#1d0e36] border border-[#b388ff]/40 px-3 py-1.5 rounded-full hover:border-[#ffa8d5] hover:text-[#ffa8d5] transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </MagicalTerminalWindow>
                    </div>
                </section>


                {/* ============================================================== */}
                {/* 04. FEATURED PROJECTS (WINDOW CARDS)                           */}
                {/* ============================================================== */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#ff85c2]">
                        <span className="tracking-wider">✧ [04] FEATURED ARTIFACTS & RESEARCH</span>
                        <span className="text-[#80deea]">ARXIV-BACKED CODEBASES</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <MagicalTerminalWindow 
                            title="craft@projects:~/graphrag_podcast_qa"
                            badge="RESEARCH"
                            className="flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="relative w-full h-44 rounded-lg overflow-hidden border border-[#ff85c2]/40 bg-[#160b2b]">
                                    <img
                                        src="/graphrag.png"
                                        alt="GraphRAG Podcast QA"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute top-2 right-2 font-mono text-[10px] bg-black/80 text-[#80deea] px-2.5 py-0.5 rounded-full border border-[#80deea]/40 shadow-sm">
                                        ✧ arXiv:2404.16130
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-cyberpunk text-base text-white tracking-wide">
                                        GraphRAG Chatbot for Podcast QA
                                    </h4>
                                    <p className="font-sans text-xs text-[#fce4ec]/85 mt-1.5 leading-relaxed">
                                        結合 Whisper 音訊自動轉錄與 GraphRAG 實體拓撲知識圖譜，實現《股癌》Podcast 跨集數概念鏈結之深度脈絡感知問答。
                                    </p>
                                </div>

                                <div className="flex gap-1.5 flex-wrap">
                                    {["GraphRAG", "Whisper", "OpenAI API", "Selenium"].map((tech) => (
                                        <span key={tech} className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#ff85c2]/15 text-[#ffa8d5] border border-[#ff85c2]/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 mt-4 border-t border-[#ff85c2]/20 flex items-center justify-between font-mono text-xs">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#ff85c2] hover:underline flex items-center gap-1">
                                    <span>[GitHub Repo]</span>
                                </a>
                                <a href="https://arxiv.org/abs/2404.16130" target="_blank" rel="noopener noreferrer" className="text-[#80deea] hover:underline flex items-center gap-1">
                                    <span>[Read Paper ↗]</span>
                                </a>
                            </div>
                        </MagicalTerminalWindow>

                        {/* Project 2 */}
                        <MagicalTerminalWindow 
                            title="craft@projects:~/nrms_news_recsys"
                            badge="ALGORITHM"
                            className="flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="relative w-full h-44 rounded-lg overflow-hidden border border-[#b388ff]/40 bg-[#160b2b]">
                                    <img
                                        src="/tsne.png"
                                        alt="News Recommender System"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute top-2 right-2 font-mono text-[10px] bg-black/80 text-[#80deea] px-2.5 py-0.5 rounded-full border border-[#80deea]/40 shadow-sm">
                                        ✧ arXiv:2104.07413
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-cyberpunk text-base text-white tracking-wide">
                                        News Recommender System (NRMS-BERT)
                                    </h4>
                                    <p className="font-sans text-xs text-[#fce4ec]/85 mt-1.5 leading-relaxed">
                                        以神經推薦架構結合 BERT 語意萃取新聞多頭注意力特徵，精準建模使用者點擊傾向，並附帶 T-SNE 降維空間視覺化。
                                    </p>
                                </div>

                                <div className="flex gap-1.5 flex-wrap">
                                    {["PyTorch", "HuggingFace", "BERT", "RecSys"].map((tech) => (
                                        <span key={tech} className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#b388ff]/15 text-[#c499ff] border border-[#b388ff]/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 mt-4 border-t border-[#b388ff]/20 flex items-center justify-between font-mono text-xs">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#ff85c2] hover:underline flex items-center gap-1">
                                    <span>[GitHub Repo]</span>
                                </a>
                                <a href="https://arxiv.org/abs/2104.07413" target="_blank" rel="noopener noreferrer" className="text-[#80deea] hover:underline flex items-center gap-1">
                                    <span>[T-SNE Demo ↗]</span>
                                </a>
                            </div>
                        </MagicalTerminalWindow>
                    </div>
                </section>


                {/* ============================================================== */}
                {/* 05. MAGICAL INTERACTIVE TERMINAL & CONTACT                     */}
                {/* ============================================================== */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#ff85c2]">
                        <span className="tracking-wider">✧ [05] INTERACTIVE CONSOLE & FREQUENCIES</span>
                        <span className="text-[#80deea]">MAGICAL CLI V2.4</span>
                    </div>

                    <MagicalTerminalWindow title="guest@terminal:~/cosmic_transmission.sh" variant="minimal">
                        <div className="space-y-4 font-mono text-xs md:text-sm">
                            <div className="text-[#ffa8d5]">
                                ✧ Welcome to Ryan&apos;s Transmission Terminal. Type <span className="text-[#80deea] underline font-semibold">help</span>, <span className="text-[#80deea] underline font-semibold">profile</span>, <span className="text-[#80deea] underline font-semibold">metrics</span> to interact.
                            </div>

                            {cliOutput && (
                                <div className="p-3.5 bg-[#0c051a] rounded-xl border border-[#ff85c2]/30 text-[#fce4ec] whitespace-pre-wrap leading-relaxed shadow-[inset_0_0_15px_rgba(255,133,194,0.1)]">
                                    {cliOutput}
                                </div>
                            )}

                            <form onSubmit={handleCliSubmit} className="flex items-center gap-2 bg-[#170c2d] px-3.5 py-2 rounded-xl border border-[#ff85c2]/30">
                                <span className="text-[#ff85c2] font-bold">♡</span>
                                <input
                                    type="text"
                                    value={cliInput}
                                    onChange={(e) => setCliInput(e.target.value)}
                                    placeholder="Type a spell (e.g. metrics, profile)..."
                                    className="bg-transparent border-none outline-none text-[#ffa8d5] placeholder-purple-400/60 flex-1 font-mono text-xs md:text-sm"
                                />
                                <button type="submit" className="text-xs px-3.5 py-1 rounded-lg bg-gradient-to-r from-[#ff85c2] to-[#b388ff] text-[#0c051a] font-bold hover:opacity-90 transition-opacity font-mono">
                                    CAST
                                </button>
                            </form>

                            <div className="pt-5 border-t border-[#ff85c2]/20 flex flex-col md:flex-row items-center justify-between text-xs text-[#b388ff]/80 gap-4">
                                <div className="font-mono text-[11px]">
                                    COSMIC_AUTH // © 2026 RYAN LUO. CRAFTED WITH NEXT.JS 15 ♡
                                </div>
                                <div className="flex gap-5 text-[#ffa8d5] font-mono">
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                        [GITHUB ✧]
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                        [LINKEDIN ✦]
                                    </a>
                                    <a href="mailto:ryan@workspaces.io" className="hover:text-white transition-colors">
                                        [EMAIL ♡]
                                    </a>
                                </div>
                            </div>
                        </div>
                    </MagicalTerminalWindow>
                </section>

            </div>
        </div>
    );
}
