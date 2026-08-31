"use client";

import React, { useState } from "react";
import TerminalWindow from "./terminal-window";

// Alias kept from the original spec naming.
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

export default Version3V2Spec;
