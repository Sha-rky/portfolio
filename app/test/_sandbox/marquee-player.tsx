"use client";

import React from "react";

/**
 * Marquee Player — scrolling "now playing" ticker.
 *
 * Extracted from the deleted `v4-playground.tsx` candidate (item E) when the
 * sandbox was cleared. Self-contained: the marquee keyframe travels with it
 * rather than depending on a page-level <style> block.
 */
export function MarqueePlayer() {
	return (
		<div className="p-5 bg-black border border-slate-700 rounded-lg flex flex-col">
			<div className="flex items-center">
				<div className="text-cyan-400 text-lg mr-3 animate-pulse">▶</div>
				<div className="overflow-hidden whitespace-nowrap w-full border border-gray-800 p-2 rounded bg-gray-900">
					<div className="inline-block animate-[marquee_6s_linear_infinite] text-pink-500 font-mono text-xs font-bold tracking-widest">
						NOW PLAYING: Plastic Love - Mariya Takeuchi (1984)
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes marquee {
					0% { transform: translateX(100%); }
					100% { transform: translateX(-100%); }
				}
			`}</style>
		</div>
	);
}

export default MarqueePlayer;
