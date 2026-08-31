"use client";

import React from "react";

/**
 * Retro Geek window chrome + project card.
 *
 * Extracted from the deleted `retro-geek.tsx` candidate when the sandbox was
 * cleared — kept specifically because the windowed title-bar treatment (with
 * badge and Windows-style min/max/close controls) reads differently from the
 * other window chromes (terminal-window.tsx's boxier controls, the Dreamy
 * Magical gradient titlebar). Not promoted to components/; this is sandbox
 * history preserved on the Library page, not production.
 */
export interface RetroGeekWindowProps {
	title: string;
	children: React.ReactNode;
	className?: string;
	variant?: "default" | "highlight";
	badge?: string;
}

export function RetroGeekWindow({
	title,
	children,
	className = "",
	variant = "default",
	badge,
}: RetroGeekWindowProps) {
	return (
		<div
			className={`bg-[#0e0919]/95 border rounded-lg overflow-hidden backdrop-blur-xl transition-all duration-300 ${
				variant === "highlight"
					? "border-[#ff85c2]/60 shadow-[0_4px_30px_rgba(255,133,194,0.18)] hover:border-[#ff85c2] hover:shadow-[0_8px_35px_rgba(255,133,194,0.28)]"
					: "border-[#b388ff]/30 shadow-[0_4px_24px_rgba(13,2,33,0.8)] hover:border-[#80deea]/60 hover:shadow-[0_6px_28px_rgba(128,222,234,0.18)]"
			} ${className}`}
		>
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

			<div className="p-6 md:p-7">{children}</div>
		</div>
	);
}

export function RetroGeekProjectCard() {
	return (
		<RetroGeekWindow
			title="repo@projects:~/graphrag_podcast_qa"
			badge="RAG PIPELINE"
			className="flex flex-col justify-between"
		>
			<div className="space-y-4">
				<div className="relative w-full h-44 rounded overflow-hidden border border-[#b388ff]/30 bg-[#140e24]">
					{/* eslint-disable-next-line @next/next/no-img-element */}
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
						<span
							key={tech}
							className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#80deea]/10 text-[#80deea] border border-[#80deea]/25"
						>
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
		</RetroGeekWindow>
	);
}

export default RetroGeekWindow;
