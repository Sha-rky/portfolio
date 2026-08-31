"use client";

import React from "react";

/**
 * Dreamy Magical window chrome + project card.
 *
 * Extracted from the deleted `dreamy-magical.tsx` candidate when the sandbox
 * was cleared — kept for the gradient titlebar and sparkle-accented chrome,
 * distinct from both terminal-window.tsx and retro-geek-card.tsx. Not
 * promoted to components/; sandbox history preserved on the Library page.
 */
export interface DreamyMagicalWindowProps {
	title: string;
	children: React.ReactNode;
	className?: string;
	variant?: "default" | "highlight";
	badge?: string;
}

export function DreamyMagicalWindow({
	title,
	children,
	className = "",
	variant = "default",
	badge,
}: DreamyMagicalWindowProps) {
	return (
		<div
			className={`bg-[#120822]/90 border rounded-xl overflow-hidden backdrop-blur-2xl transition-all duration-300 ${
				variant === "highlight"
					? "border-[#ff85c2]/70 shadow-[0_8px_35px_rgba(255,133,194,0.25)] hover:shadow-[0_12px_45px_rgba(255,133,194,0.4)] hover:border-[#ff85c2]"
					: "border-[#b388ff]/40 shadow-[0_6px_28px_rgba(179,136,255,0.18)] hover:border-[#ffa8d5]/70 hover:shadow-[0_8px_32px_rgba(255,168,213,0.3)]"
			} ${className}`}
		>
			<div className="px-3.5 py-2 bg-gradient-to-r from-[#1b0d33] via-[#21113d] to-[#1b0d33] border-b border-[#b388ff]/30 flex items-center justify-between select-none">
				<div className="flex items-center gap-2.5 overflow-hidden mr-2">
					<div className="w-4 h-4 flex items-center justify-center text-[#ff85c2] font-mono text-[11px] border border-[#ff85c2]/60 rounded bg-[#10061e] shadow-[0_0_8px_rgba(255,133,194,0.5)] shrink-0">
						✧
					</div>
					<span className="font-mono text-xs text-[#fce4ec] tracking-wide font-medium truncate flex items-center gap-1.5">
						<span className="text-[#b388ff]">~</span>
						{title}
					</span>
				</div>

				<div className="flex items-center gap-2.5 shrink-0">
					{badge && (
						<span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#ff85c2]/15 border border-[#ff85c2]/50 text-[#ffa8d5] shadow-[0_0_8px_rgba(255,133,194,0.3)]">
							✦ {badge} ✦
						</span>
					)}
					<div className="flex items-center -mr-1">
						<div className="w-7 h-6 flex items-center justify-center text-[#b388ff]/70 hover:bg-[#b388ff]/20 hover:text-white transition-colors cursor-pointer rounded-sm">
							<span className="w-2.5 h-[1.5px] bg-current inline-block"></span>
						</div>
						<div className="w-7 h-6 flex items-center justify-center text-[#b388ff]/70 hover:bg-[#b388ff]/20 hover:text-white transition-colors cursor-pointer rounded-sm">
							<span className="w-2.5 h-2.5 border border-current inline-block"></span>
						</div>
						<div className="w-7 h-6 flex items-center justify-center text-[#b388ff]/70 hover:bg-[#ff85c2] hover:text-[#120822] transition-colors cursor-pointer rounded-sm font-bold">
							<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
								<path d="M1 1L9 9M9 1L1 9" />
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className="p-6 md:p-8">{children}</div>
		</div>
	);
}

export function DreamyMagicalProjectCard() {
	return (
		<DreamyMagicalWindow
			title="craft@projects:~/graphrag_podcast_qa"
			badge="RESEARCH"
			className="flex flex-col justify-between"
		>
			<div className="space-y-4">
				<div className="relative w-full h-44 rounded-lg overflow-hidden border border-[#ff85c2]/40 bg-[#160b2b]">
					{/* eslint-disable-next-line @next/next/no-img-element */}
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
						<span
							key={tech}
							className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#ff85c2]/15 text-[#ffa8d5] border border-[#ff85c2]/30"
						>
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
		</DreamyMagicalWindow>
	);
}

export default DreamyMagicalWindow;
