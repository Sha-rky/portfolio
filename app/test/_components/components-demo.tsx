"use client";

import React, { useState } from "react";

// =========================================================================
// 1. Sleek, Professional Terminal Window Component (Retro Geek x Orbitron)
// =========================================================================
interface TerminalWindowProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "highlight" | "minimal";
    badge?: string;
}

const TerminalWindow = ({
    title,
    children,
    className = "",
    variant = "default",
    badge
}: TerminalWindowProps) => {
    return (
        <div 
            className={`bg-[#0e0919]/95 border rounded-lg overflow-hidden backdrop-blur-xl transition-all duration-300 ${
                variant === "highlight"
                    ? "border-[#ff85c2]/60 shadow-[0_4px_30px_rgba(255,133,194,0.18)] hover:border-[#ff85c2] hover:shadow-[0_8px_35px_rgba(255,133,194,0.28)]"
                    : "border-[#b388ff]/30 shadow-[0_4px_24px_rgba(13,2,33,0.8)] hover:border-[#80deea]/60 hover:shadow-[0_6px_28px_rgba(128,222,234,0.18)]"
            } ${className}`}
        >
            {/* Windows Window Title Bar */}
            <div className="px-3 py-1.5 bg-[#140e24] border-b border-[#b388ff]/20 flex items-center justify-between select-none">
                {/* Left: Icon + Title */}
                <div className="flex items-center gap-2 overflow-hidden mr-2">
                    <div className="w-4 h-4 flex items-center justify-center text-[#ff85c2] font-mono text-[10px] border border-[#ff85c2]/40 rounded-sm bg-[#090414] shrink-0">
                        &gt;_
                    </div>
                    <span className="font-mono text-xs text-[#b388ff]/90 tracking-wide font-medium truncate">
                        {title}
                    </span>
                </div>

                {/* Right: Badge + Windows Action Controls */}
                <div className="flex items-center gap-2 shrink-0">
                    {badge && (
                        <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#80deea]/10 border border-[#80deea]/30 text-[#80deea]">
                            {badge}
                        </span>
                    )}
                    <div className="flex items-center -mr-1">
                        {/* Minimize */}
                        <div className="w-7 h-6 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                            <span className="w-2.5 h-[1.5px] bg-current inline-block"></span>
                        </div>
                        {/* Maximize */}
                        <div className="w-7 h-6 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                            <span className="w-2.5 h-2.5 border border-current inline-block"></span>
                        </div>
                        {/* Close */}
                        <div className="w-7 h-6 flex items-center justify-center text-gray-400 hover:bg-[#e81123] hover:text-white transition-colors cursor-pointer">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M1 1L9 9M9 1L1 9" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Window Body */}
            <div className="p-6 md:p-7">
                {children}
            </div>
        </div>
    );
};

// =========================================================================
// Main Components Showcase: Professional Retro Geek x Orbitron
// =========================================================================
export default function ComponentsDemoPage() {
    const [cliInput, setCliInput] = useState("");
    const [cliOutput, setCliOutput] = useState<string | null>(null);

    const handleCliSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = cliInput.trim().toLowerCase();
        if (cmd === "help") {
            setCliOutput("AVAILABLE COMMANDS:\n  profile   - Summary of engineering domain\n  skills    - Stack & research toolkits\n  metrics   - Key quantitative accomplishments\n  contact   - Direct channels\n  clear     - Reset terminal");
        } else if (cmd === "profile") {
            setCliOutput("RYAN LUO // AI & MACHINE LEARNING ENGINEER\nSpecializing in Recommender Systems (NRMS-BERT), GraphRAG architectures, and autonomous automation pipelines.");
        } else if (cmd === "skills") {
            setCliOutput("CORE STACK:\n  ML/DL: PyTorch, HuggingFace Transformers, GraphRAG, Whisper, DQN\n  Backend: Python (FastAPI), Azure Cloud, Selenium, Docker\n  Web: Next.js 15, TypeScript, Tailwind CSS");
        } else if (cmd === "metrics") {
            setCliOutput("PERFORMANCE METRICS:\n  • RecSys CTR AUC improvement: +18.4%\n  • GraphRAG Context Hallucination reduction: -42%\n  • Automated Pipeline throughput: 10,000+ records/day");
        } else if (cmd === "contact") {
            setCliOutput("CHANNELS:\n  Email: ryan.luo@workspaces.io\n  GitHub: github.com/RyanLuo\n  LinkedIn: linkedin.com/in/ryan-luo");
        } else if (cmd === "clear") {
            setCliOutput(null);
        } else if (cmd) {
            setCliOutput(`sys_sh: command not recognized: "${cmd}". Type "help" for command matrix.`);
        }
        setCliInput("");
    };

    return (
        <div className="min-h-screen bg-[#090414] text-[#f4effa] relative selection:bg-[#ff85c2] selection:text-black py-20 px-4 md:px-10">
            {/* Subtle CRT Scanline Effect (Toned down for elegance) */}
            <div 
                className="fixed inset-0 pointer-events-none z-50 opacity-[0.08]"
                style={{
                    background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)",
                    backgroundSize: "100% 3px"
                }}
            />

            {/* Refined Retro Grid Background */}
            <div 
                className="fixed inset-0 pointer-events-none opacity-15"
                style={{
                    backgroundImage: "linear-gradient(rgba(179, 136, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128, 222, 234, 0.1) 1px, transparent 1px)",
                    backgroundSize: "48px 48px"
                }}
            />

            <div className="max-w-5xl mx-auto relative z-10 space-y-16">
                
                {/* Version Switcher Navigation Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#140e24]/80 border border-[#b388ff]/30 rounded-xl backdrop-blur-md">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#80deea]">
                        <span>⚡ SPEC EXPLORER:</span>
                        <span className="text-[#f4effa] font-semibold">STYLE VARIANTS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-3.5 py-1.5 rounded-lg bg-[#b388ff]/20 border border-[#b388ff] text-white font-semibold shadow-[0_0_12px_rgba(179,136,255,0.4)]">
                            💼 Version A: Enterprise Retro Geek (Current)
                        </span>
                        <a 
                            href="/components-demo-magical" 
                            className="font-mono text-xs px-3.5 py-1.5 rounded-lg border border-[#ff85c2]/40 text-[#ff85c2] hover:bg-[#ff85c2]/15 hover:text-white transition-all"
                        >
                            ✧ Version B: Dreamy Magical Geek ➔
                        </a>
                    </div>
                </div>

                {/* Header Info */}
                <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#140e24] border border-[#b388ff]/30 shadow-[0_0_20px_rgba(179,136,255,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-[#05ffa1] animate-pulse"></span>
                        <span className="font-mono text-[11px] text-[#05ffa1] tracking-widest font-semibold uppercase">
                            SPEC_APPROVED // ENTERPRISE RETRO GEEK
                        </span>
                    </div>
                    <h1 className="font-cyberpunk text-3xl md:text-5xl text-white tracking-[0.12em] uppercase font-bold">
                        <span className="text-[#ff85c2] drop-shadow-[0_0_12px_rgba(255,133,194,0.5)]">Retro Geek</span>
                        <span className="text-[#80deea] font-light ml-3">x Orbitron</span>
                    </h1>
                    <p className="font-sans text-xs md:text-sm text-[#b388ff]/80 max-w-2xl mx-auto leading-relaxed">
                        調校後的專業工程師調性：維持 80 年代終端機的科技靈魂，強化版面結構、排版留白與成果量化指標，滿足一線科技企業與獵頭的嚴格審閱標準。
                    </p>
                </div>


                {/* ============================================================== */}
                {/* 01. TYPOGRAPHY & PROFESSIONAL PROFILE INTRO                    */}
                {/* ============================================================== */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#b388ff]">
                        <span className="tracking-wider">[01] TYPOGRAPHY & IDENTITY SPECIFICATION</span>
                        <span className="text-[#80deea]/70">ORBITRON + GEIST SANS/MONO</span>
                    </div>

                    <TerminalWindow title="ryan@workstation:~/identity_manifest.sh" variant="highlight">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#05ffa1]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#05ffa1]"></span>
                                    <span>SYSTEM_STATUS: AVAILABLE_FOR_OPPORTUNITIES</span>
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
                                    <button className="font-cyberpunk text-xs tracking-wider uppercase px-5 py-2.5 rounded bg-[#ff85c2] text-[#090414] font-bold shadow-[0_0_15px_rgba(255,133,194,0.4)] hover:shadow-[0_0_22px_rgba(255,133,194,0.7)] hover:translate-y-[-1px] transition-all">
                                        Download Resume (.pdf)
                                    </button>
                                    <button className="font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded border border-[#80deea]/50 text-[#80deea] hover:bg-[#80deea]/10 hover:border-[#80deea] transition-all">
                                        Explore Architecture ➔
                                    </button>
                                </div>
                            </div>

                            {/* Summary Metric Chips */}
                            <div className="lg:col-span-4 bg-[#140e24] border border-[#b388ff]/20 rounded-lg p-5 space-y-4">
                                <div className="font-mono text-[11px] text-[#b388ff] uppercase tracking-wider border-b border-[#b388ff]/20 pb-2">
                                    CORE ENGINEERING METRICS
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <div className="font-cyberpunk text-2xl text-[#80deea] font-semibold">18.4%</div>
                                        <div className="font-sans text-xs text-gray-400">RecSys CTR AUC Improvement</div>
                                    </div>
                                    <div>
                                        <div className="font-cyberpunk text-2xl text-[#ff85c2] font-semibold">42.0%</div>
                                        <div className="font-sans text-xs text-gray-400">GraphRAG Hallucination Reduction</div>
                                    </div>
                                    <div>
                                        <div className="font-cyberpunk text-2xl text-[#05ffa1] font-semibold">10K+</div>
                                        <div className="font-sans text-xs text-gray-400">Daily Automated Ingestion Pipeline</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TerminalWindow>
                </section>


                {/* ============================================================== */}
                {/* 02. CAREER TIMELINE (STAR METHOD EXPERIENCE)                   */}
                {/* ============================================================== */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#b388ff]">
                        <span className="tracking-wider">[02] CAREER PATH & EXPERIENCE TIMELINE</span>
                        <span className="text-[#80deea]/70">TRACK-ALIGNMENT & QUANTIFIED RESULTS</span>
                    </div>

                    <div className="relative pl-6 md:pl-10 border-l border-[#ff85c2]/40 space-y-6">
                        {/* Glowing Node Dot */}
                        <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#090414] border-2 border-[#ff85c2] shadow-[0_0_12px_rgba(255,133,194,0.8)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff85c2] absolute inset-0 m-auto"></span>
                        </div>

                        {/* Experience Card */}
                        <TerminalWindow 
                            title="career@enterprise:~/work_experience/01_ml_engineer.log"
                            badge="FULL-TIME"
                        >
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

                                <ul className="space-y-2.5 font-sans text-xs md:text-sm text-[#e0d6ed] leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#80deea] font-mono text-xs mt-0.5">▹</span>
                                        <span>
                                            <strong className="text-white font-medium">推薦系統演算法重構 (NRMS-BERT)</strong>：採用多頭自注意力機制與雙塔架構建模使用者潛在閱讀軌跡，將長尾新聞文章點擊率預測 AUC 提升 <span className="text-[#80deea] font-mono">18.4%</span>。
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#80deea] font-mono text-xs mt-0.5">▹</span>
                                        <span>
                                            <strong className="text-white font-medium">知識圖譜增強問答系統 (GraphRAG)</strong>：結合實體抽取拓撲圖與語意嵌入向量檢索，將跨集數財經語音知識問答的幻覺率降低 <span className="text-[#ff85c2] font-mono">42%</span>。
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#80deea] font-mono text-xs mt-0.5">▹</span>
                                        <span>
                                            <strong className="text-white font-medium">分散式爬蟲與資料自動化</strong>：建構基於 Selenium、Azure Functions 與 Line/Discord API 的自動化排程器，每日穩定處理與清洗逾萬筆即時結構化資料。
                                        </span>
                                    </li>
                                </ul>

                                <div className="flex gap-2 flex-wrap pt-2 border-t border-[#b388ff]/10">
                                    {["PyTorch", "HuggingFace", "BERT", "GraphRAG", "Azure Cloud", "Docker", "FastAPI"].map((tech) => (
                                        <span key={tech} className="font-mono text-[11px] text-[#80deea] bg-[#140e24] border border-[#80deea]/25 px-2.5 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TerminalWindow>
                    </div>
                </section>


                {/* ============================================================== */}
                {/* 03. SKILLS MATRIX (ENGINEERING STACK)                          */}
                {/* ============================================================== */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#b388ff]">
                        <span className="tracking-wider">[03] TECHNICAL MATRIX & COMPETENCIES</span>
                        <span className="text-[#80deea]/70">DISCIPLINE-BASED GROUPING</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <TerminalWindow title="env@stack:~/01_machine_learning.json">
                            <div className="space-y-3">
                                <div className="font-cyberpunk text-xs tracking-wider text-[#ff85c2] flex items-center gap-2 uppercase">
                                    <span className="w-2 h-2 rounded-full bg-[#ff85c2]"></span>
                                    AI & Machine Learning
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {[
                                        "PyTorch", "Transformers", "NRMS-BERT", 
                                        "GraphRAG", "Deep Q-Learning (DQN)", "Whisper", 
                                        "Vector Databases", "Scikit-Learn", "Prompt Engineering"
                                    ].map(skill => (
                                        <span key={skill} className="font-mono text-xs text-[#80deea] bg-[#140e24] border border-[#80deea]/30 px-3 py-1.5 rounded hover:border-[#ff85c2] hover:text-[#ff85c2] transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TerminalWindow>

                        <TerminalWindow title="env@stack:~/02_systems_backend.json">
                            <div className="space-y-3">
                                <div className="font-cyberpunk text-xs tracking-wider text-[#80deea] flex items-center gap-2 uppercase">
                                    <span className="w-2 h-2 rounded-full bg-[#80deea]"></span>
                                    Backend & Cloud Infrastructure
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {[
                                        "Python (FastAPI / Asyncio)", "Next.js 15", "TypeScript", 
                                        "Azure Cloud", "Docker Containers", "Selenium Automation", 
                                        "REST APIs", "Discord / Line SDK", "Git CI/CD"
                                    ].map(skill => (
                                        <span key={skill} className="font-mono text-xs text-[#b388ff] bg-[#140e24] border border-[#b388ff]/30 px-3 py-1.5 rounded hover:border-[#80deea] hover:text-[#80deea] transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TerminalWindow>
                    </div>
                </section>


                {/* ============================================================== */}
                {/* 04. FEATURED RESEARCH & PRODUCTION PROJECTS                    */}
                {/* ============================================================== */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#b388ff]">
                        <span className="tracking-wider">[04] PRODUCTION & RESEARCH PROJECTS</span>
                        <span className="text-[#80deea]/70">ARXIV REPRODUCTION & PIPELINES</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <TerminalWindow 
                            title="repo@projects:~/graphrag_podcast_qa"
                            badge="RAG PIPELINE"
                            className="flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="relative w-full h-44 rounded overflow-hidden border border-[#b388ff]/30 bg-[#140e24]">
                                    <img
                                        src="/graphrag.png"
                                        alt="GraphRAG Podcast QA"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute top-2 right-2 font-mono text-[10px] bg-black/80 text-[#80deea] px-2 py-0.5 rounded border border-[#80deea]/30">
                                        arXiv:2404.16130
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-cyberpunk text-base text-white tracking-wide">
                                        GraphRAG Chatbot for Podcast QA
                                    </h4>
                                    <p className="font-sans text-xs text-gray-300 mt-1.5 leading-relaxed">
                                        結合 Whisper 語音轉錄與微軟 GraphRAG 實體拓撲架構，於《股癌》Podcast 音訊文庫中實現跨集數概念鏈結之深度脈絡問答。
                                    </p>
                                </div>

                                <div className="flex gap-1.5 flex-wrap">
                                    {["GraphRAG", "Whisper", "OpenAI API", "Selenium"].map((tech) => (
                                        <span key={tech} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#80deea]/10 text-[#80deea] border border-[#80deea]/25">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 mt-4 border-t border-[#b388ff]/15 flex items-center justify-between font-mono text-xs">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#ff85c2] hover:underline">
                                    [GitHub Repo]
                                </a>
                                <a href="https://arxiv.org/abs/2404.16130" target="_blank" rel="noopener noreferrer" className="text-[#80deea] hover:underline">
                                    [Research Paper ↗]
                                </a>
                            </div>
                        </TerminalWindow>

                        {/* Project 2 */}
                        <TerminalWindow 
                            title="repo@projects:~/nrms_news_recsys"
                            badge="DEEP LEARNING"
                            className="flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="relative w-full h-44 rounded overflow-hidden border border-[#b388ff]/30 bg-[#140e24]">
                                    <img
                                        src="/tsne.png"
                                        alt="News Recommender System"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute top-2 right-2 font-mono text-[10px] bg-black/80 text-[#80deea] px-2 py-0.5 rounded border border-[#80deea]/30">
                                        arXiv:2104.07413
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-cyberpunk text-base text-white tracking-wide">
                                        News Recommender System (NRMS-BERT)
                                    </h4>
                                    <p className="font-sans text-xs text-gray-300 mt-1.5 leading-relaxed">
                                        基於神經新聞推薦模型（NRMS）結合 BERT 預訓練權重，抽取標題多頭自注意力向量特徵，建構高品質新聞點擊預測與 T-SNE 分群展示。
                                    </p>
                                </div>

                                <div className="flex gap-1.5 flex-wrap">
                                    {["PyTorch", "HuggingFace", "BERT", "RecSys"].map((tech) => (
                                        <span key={tech} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#b388ff]/10 text-[#b388ff] border border-[#b388ff]/25">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 mt-4 border-t border-[#b388ff]/15 flex items-center justify-between font-mono text-xs">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#ff85c2] hover:underline">
                                    [GitHub Repo]
                                </a>
                                <a href="https://arxiv.org/abs/2104.07413" target="_blank" rel="noopener noreferrer" className="text-[#80deea] hover:underline">
                                    [Research Paper ↗]
                                </a>
                            </div>
                        </TerminalWindow>
                    </div>
                </section>


                {/* ============================================================== */}
                {/* 05. INTERACTIVE CLI TERMINAL & CONTACT                         */}
                {/* ============================================================== */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#b388ff]">
                        <span className="tracking-wider">[05] INTERACTIVE TERMINAL & DIRECT CHANNELS</span>
                        <span className="text-[#80deea]/70">CLI CONSOLE V2.4</span>
                    </div>

                    <TerminalWindow title="guest@terminal:~/contact_hub.sh" variant="minimal">
                        <div className="space-y-4 font-mono text-xs md:text-sm">
                            <div className="text-gray-400">
                                ✻ Type <span className="text-[#ff85c2] font-semibold">help</span>, <span className="text-[#80deea] font-semibold">profile</span>, <span className="text-[#80deea] font-semibold">skills</span>, <span className="text-[#80deea] font-semibold">metrics</span> to interact with system.
                            </div>

                            {cliOutput && (
                                <div className="p-3.5 bg-[#090414] rounded border border-[#b388ff]/20 text-[#f4effa] whitespace-pre-wrap leading-relaxed">
                                    {cliOutput}
                                </div>
                            )}

                            <form onSubmit={handleCliSubmit} className="flex items-center gap-2 bg-[#140e24] px-3 py-2 rounded border border-[#b388ff]/20">
                                <span className="text-[#ff85c2] font-bold">❯</span>
                                <input
                                    type="text"
                                    value={cliInput}
                                    onChange={(e) => setCliInput(e.target.value)}
                                    placeholder="Enter command here (e.g. metrics)..."
                                    className="bg-transparent border-none outline-none text-[#80deea] placeholder-gray-600 flex-1 font-mono text-xs md:text-sm"
                                />
                                <button type="submit" className="text-xs px-3 py-1 rounded bg-[#ff85c2]/20 text-[#ff85c2] border border-[#ff85c2]/40 hover:bg-[#ff85c2] hover:text-black transition-colors font-mono">
                                    EXECUTE
                                </button>
                            </form>

                            <div className="pt-5 border-t border-[#b388ff]/15 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
                                <div className="font-mono text-[11px] text-gray-500">
                                    SYS_AUTH // © 2026 RYAN LUO. ALL RIGHTS RESERVED.
                                </div>
                                <div className="flex gap-5 text-[#80deea] font-mono">
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff85c2] transition-colors">
                                        [GITHUB]
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff85c2] transition-colors">
                                        [LINKEDIN]
                                    </a>
                                    <a href="mailto:ryan@workspaces.io" className="hover:text-[#ff85c2] transition-colors">
                                        [EMAIL]
                                    </a>
                                </div>
                            </div>
                        </div>
                    </TerminalWindow>
                </section>

            </div>
        </div>
    );
}
