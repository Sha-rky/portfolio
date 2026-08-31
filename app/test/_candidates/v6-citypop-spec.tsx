"use client";

import React from "react";
import TerminalWindow from "./terminal-window";

// =========================================================================
// VERSION 6: CITY POP RETRO WINDOW (BLACK CANVAS & HIGH-CHROMA PASTELS)
// =========================================================================
const Version6WindowDemo = () => {
    return (
        <div className="space-y-10 py-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-8">
                <div className="inline-block px-3 py-1 rounded bg-window-shadow/20 border border-window-shadow text-window-shadow font-mono text-xs font-semibold">
                    UNIFIED CONTENT SPEC // 1. Image ➔ 2. Title ➔ 3. Description ➔ 4. Tags
                </div>
                <h3 className="font-cyberpunk text-2xl text-white">Standardized Terminal Window</h3>
                <p className="font-sans text-xs text-gray-300">
                    視窗內容標準化規格：依序由上至下展示 <strong>Image ➔ Title ➔ Description ➔ Tags</strong>，風格高度統一且支援 Hover 縮放動畫。
                </p>
            </div>

            {/* 1. Standard Project Showcase Window (Unified Spec) */}
            <TerminalWindow 
                image="/graphrag.png"
                title="GraphRAG Chatbot for Podcast QA"
                description="結合 Whisper 語音轉錄與微軟 GraphRAG 實體拓撲知識圖譜架構，於萬小時語音文庫中實現跨集數概念鏈結之深度脈絡問答，跨集數檢索幻覺率降低 42.0%。"
                tags={["Whisper", "GraphRAG", "KnowledgeGraph", "Python", "Neo4j", "FastAPI"]}
            />

            {/* 2. Second Project Showcase Window (Unified Spec) */}
            <TerminalWindow 
                image="/tsne.png"
                title="News Recommender System (NRMS-BERT)"
                description="基於神經新聞推薦模型（NRMS）結合 BERT 預訓練權重，抽取標題多頭自注意力向量特徵，建模使用者長期閱讀軌跡，新聞點擊率預測 AUC 顯著提升 18.4%。"
                tags={["PyTorch", "BERT", "MultiHead-Attention", "RecSys", "T-SNE", "Azure Cloud"]}
            />
        </div>
    );
};

export default Version6WindowDemo;
