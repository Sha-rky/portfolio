"use client";

import React from "react";

/**
 * Vim Cursor — blinking block cursor after a command.
 *
 * Extracted from the deleted `v4-playground.tsx` candidate (item C) when the
 * sandbox was cleared.
 */
export function VimCursor() {
	return (
		<div className="p-5 bg-white border border-slate-200 rounded-lg flex flex-col">
			<div className="flex-1 flex items-center justify-center text-lg font-mono text-black">
				<span className="font-bold">sudo exec</span>
				<span className="inline-block w-2.5 h-5 bg-pink-500 ml-[1px] animate-pulse"></span>
			</div>
		</div>
	);
}

export default VimCursor;
