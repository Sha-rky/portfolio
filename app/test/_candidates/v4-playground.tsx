"use client";

import React, { useState, useEffect } from "react";

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

export default Version4Sandbox;
