"use client";

import React, { useState } from "react";

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

export default Version2Enterprise;
