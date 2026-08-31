"use client";

import React, { useState } from "react";
import ComponentsDemo from "./_components/components-demo";
import MagicalDemo from "./_components/components-demo-magical";
import Demos from "./_components/demos";
import LegacyTest from "./_components/legacy-test";
import HomePreview from "./_components/home-preview";

export default function TestSPAPage() {
    const [activeTab, setActiveTab] = useState<"home" | "demos" | "components" | "magical" | "legacy">("home");

    const tabs = [
        { id: "home", label: "Home Preview" },
        { id: "demos", label: "Demos" },
        { id: "components", label: "Components Demo" },
        { id: "magical", label: "Magical Demo" },
        { id: "legacy", label: "Legacy Test" },
    ] as const;

    return (
        <div className="min-h-screen bg-black/95 text-white flex flex-col">
            {/* Top Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-[#0e0919]/90 backdrop-blur-md border-b border-[#b388ff]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center h-16">
                        <div className="flex space-x-2 md:space-x-4 overflow-x-auto no-scrollbar py-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                                    className={`
                                        px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 font-mono tracking-wider whitespace-nowrap
                                        ${activeTab === tab.id 
                                            ? "bg-gradient-to-r from-[#b388ff]/20 to-[#ff85c2]/20 text-[#ff85c2] border border-[#ff85c2]/50 shadow-[0_0_15px_rgba(255,133,194,0.3)]" 
                                            : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"}
                                    `}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 w-full relative">
                {activeTab === "home" && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <HomePreview />
                    </div>
                )}

                {activeTab === "demos" && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Demos />
                    </div>
                )}
                
                {activeTab === "components" && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <ComponentsDemo />
                    </div>
                )}
                
                {activeTab === "magical" && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <MagicalDemo />
                    </div>
                )}
                
                {activeTab === "legacy" && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
                        <LegacyTest />
                    </div>
                )}
            </main>
        </div>
    );
}
