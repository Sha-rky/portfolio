"use client";

import React from "react";
import TerminalWindow from "./terminal-window";

// =========================================================================
// VERSION 7: CITY POP RETRO WINDOW (LILAC CANVAS, LIGHT MODE)
// -------------------------------------------------------------------------
// Light-mode counterpart to v6's black-canvas window. Restores the palette
// from the archived citypop-light.css (ink-violet frame, coral shadow,
// lilac canvas) that was deleted for being unused — see terminal-window.tsx
// for where it now actually gets consumed.
// =========================================================================
const Version7CityPopLight = () => {
    return (
        <div
            className="min-h-screen py-14"
            style={{ backgroundColor: "#ece5f6" }}
        >
            <div className="mx-auto max-w-4xl space-y-10 px-4">
                <div className="mb-8 space-y-2 text-center">
                    <div
                        className="inline-block rounded border px-3 py-1 font-mono text-xs font-semibold"
                        style={{ borderColor: "#e95b9e", backgroundColor: "#e95b9e33", color: "#9a1e57" }}
                    >
                        UNIFIED CONTENT SPEC // 1. Image ➔ 2. Title ➔ 3. Description ➔ 4. Tags
                    </div>
                    <h3
                        className="text-2xl font-bold"
                        style={{ color: "#1e1035", fontFamily: "var(--font-orbitron)" }}
                    >
                        Standardized Terminal Window — Light
                    </h3>
                    <p className="text-xs" style={{ color: "#6b21a8" }}>
                        視窗內容標準化規格的淺色對照組：藕荷草紫邊框、珊瑚粉陰影、淡紫羅蘭底，取代原本從未被使用過的
                        citypop-light.css 色票。
                    </p>
                </div>

                <TerminalWindow
                    variant="citypop-light"
                    image="/graphrag.png"
                    title="GraphRAG Chatbot for Podcast QA"
                    description="結合 Whisper 語音轉錄與微軟 GraphRAG 實體拓撲知識圖譜架構，於萬小時語音文庫中實現跨集數概念鏈結之深度脈絡問答，跨集數檢索幻覺率降低 42.0%。"
                    tags={["Whisper", "GraphRAG", "KnowledgeGraph", "Python", "Neo4j", "FastAPI"]}
                />

                <TerminalWindow
                    variant="citypop-light"
                    image="/tsne.png"
                    title="News Recommender System (NRMS-BERT)"
                    description="基於神經新聞推薦模型（NRMS）結合 BERT 預訓練權重，抽取標題多頭自注意力向量特徵，建模使用者長期閱讀軌跡，新聞點擊率預測 AUC 顯著提升 18.4%。"
                    tags={["PyTorch", "BERT", "MultiHead-Attention", "RecSys", "T-SNE", "Azure Cloud"]}
                />
            </div>
        </div>
    );
};

export default Version7CityPopLight;
