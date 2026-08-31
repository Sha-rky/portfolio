"use client";

import React from "react";
import TerminalWindow from "./terminal-window";
import { RetroGeekProjectCard } from "./retro-geek-card";
import { DreamyMagicalProjectCard } from "./dreamy-magical-card";
import MarqueePlayer from "./marquee-player";
import VimCursor from "./vim-cursor";
import { LibraryPage, Category, SwatchSpecimen } from "./library-specimen";

/**
 * Candidate Components — sandbox pieces kept from a cleared /test.
 *
 * None of these style through the registry and none are wired into
 * production; they're preserved here rather than lost when their source
 * candidate was deleted. Card specimens render against their own kept
 * background colour ("底色") rather than a neutral one, since the
 * background is part of what's being kept for those.
 */
export default function CandidateComponents() {
	return (
		<LibraryPage
			eyebrow="Component Library"
			title="Candidate Components"
			description={
				<>
					Pieces kept from candidates that were otherwise deleted in a full{" "}
					<code className="font-mono text-[#80deea]">/test</code> clear-out. Styled
					directly, not through the theme registry, and not wired into production —
					see <code className="font-mono text-[#80deea]">current-components.tsx</code>{" "}
					for what actually is.
				</>
			}
		>
			<Category name="UI Elements">
				<SwatchSpecimen name="Marquee Player" source="was: v4-playground.tsx" background="#000000">
					<MarqueePlayer />
				</SwatchSpecimen>

				<SwatchSpecimen name="Vim Cursor" source="was: v4-playground.tsx" background="#ffffff">
					<VimCursor />
				</SwatchSpecimen>
			</Category>

			<Category name="Project Cards">
				<SwatchSpecimen
					name="City Pop Card — Dark"
					source="was: v6-citypop-spec.tsx"
					background="#000000"
				>
					<TerminalWindow
						variant="citypop"
						image="/graphrag.png"
						title="GraphRAG Chatbot for Podcast QA"
						description="結合 Whisper 語音轉錄與微軟 GraphRAG 實體拓撲知識圖譜架構，於萬小時語音文庫中實現跨集數概念鏈結之深度脈絡問答。"
						tags={["Whisper", "GraphRAG", "KnowledgeGraph", "Python"]}
					/>
				</SwatchSpecimen>

				<SwatchSpecimen
					name="City Pop Card — Light"
					source="was: v7-citypop-light-spec.tsx"
					background="#ece5f6"
				>
					<TerminalWindow
						variant="citypop-light"
						image="/graphrag.png"
						title="GraphRAG Chatbot for Podcast QA"
						description="結合 Whisper 語音轉錄與微軟 GraphRAG 實體拓撲知識圖譜架構，於萬小時語音文庫中實現跨集數概念鏈結之深度脈絡問答。"
						tags={["Whisper", "GraphRAG", "KnowledgeGraph", "Python"]}
					/>
				</SwatchSpecimen>

				<SwatchSpecimen name="Retro Geek Card" source="was: retro-geek.tsx" background="#090414">
					<div className="max-w-md">
						<RetroGeekProjectCard />
					</div>
				</SwatchSpecimen>

				<SwatchSpecimen
					name="Dreamy Magical Card"
					source="was: dreamy-magical.tsx"
					background="#0c051a"
				>
					<div className="max-w-md">
						<DreamyMagicalProjectCard />
					</div>
				</SwatchSpecimen>
			</Category>
		</LibraryPage>
	);
}
