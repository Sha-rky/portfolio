'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Portfolio() {
  const [typedText, setTypedText] = useState('');
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 1. 打字機特效 Hook
  useEffect(() => {
    const textToType = "> Loading Profile... Designer / Geek / Dreamer ✧";
    let index = 0;
    let currentString = "";

    const type = () => {
      if (index < textToType.length) {
        currentString += textToType.charAt(index);
        setTypedText(currentString);
        index++;
        setTimeout(type, Math.random() * 100 + 50);
      }
    };

    const timeoutId = setTimeout(type, 800);
    return () => clearTimeout(timeoutId);
  }, []);

  // 2. 滾動顯示特效 (Intersection Observer) Hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      currentRefs.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <>
      {/* 內嵌全域樣式，確保單檔複製即可執行 */}
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      <main className="portfolio-container">
        {/* Hero Section */}
        <section className="hero">
          <h1>K.T. STUDIO</h1>
          <div className="typewriter">{typedText}</div>
          <div className="scroll-down">♡ SCROLL TO EXPLORE ♡</div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <h2 className="section-title">~/.portfolio/timeline.sh</h2>

          <div className="timeline">
            {/* 專案 1 */}
            <div
              className="timeline-item left"
              ref={(el) => { itemRefs.current[0] = el; }}
            >
              <div className="project-card">
                <div className="card-header">
                  <span>kt@magical-girl:~/cloud-art$</span>
                  <div className="window-dots">
                    <span /><span /><span />
                  </div>
                </div>
                <div className="card-image">
                  <img
                    src="https://placehold.co/800x400/2a1b38/ff85c2?text=Digital+Illustration+Gallery"
                    alt="數位插畫與雲端擴充"
                  />
                </div>
                <div className="card-body">
                  <span className="date">2026.05 - Present</span>
                  <h3>數位插畫與高階雲端擴充計畫</h3>
                  <p>升級建置高達 5TB 的進階雲端儲存架構，全面優化專業數位插畫（Digital Illustration）的創作流程。打造極致可愛且高效的資產管理與跨裝置備份系統。</p>
                  <div className="tags">
                    <span className="tag">Cloud Storage</span>
                    <span className="tag">Illustration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 專案 2 */}
            <div
              className="timeline-item right"
              ref={(el) => { itemRefs.current[1] = el; }}
            >
              <div className="project-card">
                <div className="card-header">
                  <span>kt@magical-girl:~/mind-map$</span>
                  <div className="window-dots">
                    <span /><span /><span />
                  </div>
                </div>
                <div className="card-image">
                  <img
                    src="https://placehold.co/800x400/2a1b38/80deea?text=Cognitive+MindMap+Viz"
                    alt="認知心理學數位視覺化"
                  />
                </div>
                <div className="card-body">
                  <span className="date">2025.11</span>
                  <h3>認知心理學數位視覺化</h3>
                  <p>導入數位化架構，整合並建構認知心理學領域的全方位心智圖（Mind Maps）。將生硬的學科結構，轉化為帶有霓虹科技感的互動式檢索指南。</p>
                  <div className="tags">
                    <span className="tag">Psychology</span>
                    <span className="tag">Data Viz</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 專案 3 */}
            <div
              className="timeline-item left"
              ref={(el) => { itemRefs.current[2] = el; }}
            >
              <div className="project-card">
                <div className="card-header">
                  <span>kt@magical-girl:~/simulation$</span>
                  <div className="window-dots">
                    <span /><span /><span />
                  </div>
                </div>
                <div className="card-image">
                  <img
                    src="https://placehold.co/800x400/2a1b38/b388ff?text=Simulation+Game+UI"
                    alt="互動式模擬遊戲 UI/UX"
                  />
                </div>
                <div className="card-body">
                  <span className="date">2025.10</span>
                  <h3>互動式模擬遊戲 UI/UX</h3>
                  <p>參與數位娛樂專案，將復古像素風格結合現代流暢的互動機制，設計出適合經營模擬遊戲的 UI 介面，帶來沉浸式的遊玩體驗。</p>
                  <div className="tags">
                    <span className="tag">Game UI</span>
                    <span className="tag">Interaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 專案 4 */}
            <div
              className="timeline-item right"
              ref={(el) => { itemRefs.current[3] = el; }}
            >
              <div className="project-card">
                <div className="card-header">
                  <span>kt@magical-girl:~/e-commerce$</span>
                  <div className="window-dots">
                    <span /><span /><span />
                  </div>
                </div>
                <div className="card-image">
                  <img
                    src="https://placehold.co/800x400/2a1b38/ff85c2?text=Cyber+Cosplay+Store"
                    alt="Cyber-Cosplay 獨立電商平台"
                  />
                </div>
                <div className="card-body">
                  <span className="date">2025.01 - 2025.12</span>
                  <h3>Cyber-Cosplay 獨立電商平台</h3>
                  <p>經營與維護專屬的線上數位店鋪，提供特殊主題角色制服（Cosplay）、造型假髮的展示、列表與交流交易服務，支援便利商店物流串接。</p>
                  <div className="tags">
                    <span className="tag">E-Commerce</span>
                    <span className="tag">Web Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ==========================================
// CSS Styles (嵌入確保單檔執行)
// ==========================================
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=VT323&family=Noto+Sans+TC:wght@400;700&display=swap');

  :root {
    --bg-dark: #000000;
    --grid-neon: rgba(255, 133, 194, 0.15);
    --text-cyan: #80deea;
    --text-pink: #ff85c2;
    --text-purple: #b388ff;
    --window-bg: rgba(20, 15, 25, 0.85);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background-color: var(--bg-dark);
    background-image: 
        linear-gradient(transparent 95%, var(--grid-neon) 95%),
        linear-gradient(90deg, transparent 95%, var(--grid-neon) 95%);
    background-size: 50px 50px;
    font-family: 'Noto Sans TC', sans-serif;
    color: #fce4ec;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body::after {
    content: " ";
    display: block;
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%);
    z-index: 999;
    background-size: 100% 3px;
    pointer-events: none;
  }

  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: var(--bg-dark); }
  ::-webkit-scrollbar-thumb { background: var(--text-purple); border-radius: 5px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--text-pink); }

  .hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .hero h1 {
    font-family: 'VT323', monospace;
    font-size: 5rem;
    color: var(--text-pink);
    text-shadow: 2px 2px 0px var(--text-purple), 0 0 20px rgba(255, 133, 194, 0.6);
    margin-bottom: 20px;
    letter-spacing: 3px;
  }

  .typewriter {
    font-family: 'VT323', monospace;
    font-size: 2rem;
    color: var(--text-cyan);
    border-right: 3px solid var(--text-pink);
    white-space: nowrap;
    overflow: hidden;
    animation: blink 0.8s step-end infinite;
    padding-right: 5px;
    min-height: 2.5rem;
  }

  .scroll-down {
    position: absolute;
    bottom: 50px;
    font-family: 'VT323', monospace;
    color: var(--text-purple);
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }

  .timeline-section {
    padding: 150px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-family: 'VT323', monospace;
    font-size: 3rem;
    color: var(--text-cyan);
    text-align: center;
    margin-bottom: 100px;
    text-shadow: 0 0 15px rgba(128, 222, 234, 0.5);
  }

  .timeline {
    position: relative;
    padding-bottom: 100px;
  }

  .timeline::after {
    content: '';
    position: absolute;
    width: 4px;
    background: var(--text-pink);
    top: 0; bottom: 0; left: 50%;
    margin-left: -2px;
    box-shadow: 0 0 15px var(--text-pink);
    border-radius: 2px;
  }

  .timeline-item {
    padding: 20px 60px 80px 60px;
    position: relative;
    width: 50%;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .timeline-item.left { left: 0; }
  .timeline-item.right { left: 50%; }

  .timeline-item::after {
    content: '';
    position: absolute;
    width: 24px; height: 24px;
    right: -12px;
    background-color: var(--bg-dark);
    border: 4px solid var(--text-purple);
    top: 40px;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 15px var(--text-purple);
    transition: background-color 0.3s;
  }

  .timeline-item:hover::after {
    background-color: var(--text-pink);
    border-color: var(--text-pink);
    box-shadow: 0 0 20px var(--text-pink);
  }

  .timeline-item.right::after { left: -12px; }

  .project-card {
    background: var(--window-bg);
    border: 2px solid var(--text-purple);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(179, 136, 255, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(255, 133, 194, 0.3);
    border-color: var(--text-pink);
  }

  .card-header {
    background: linear-gradient(90deg, var(--text-purple), var(--text-pink));
    color: #000;
    padding: 8px 16px;
    font-family: 'VT323', monospace;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .window-dots span {
    display: inline-block;
    width: 10px; height: 10px;
    border-radius: 50%;
    margin-left: 6px;
    background: #000;
    opacity: 0.5;
  }

  .card-image {
    width: 100%; height: 250px;
    background-color: #2a1b38;
    overflow: hidden;
    position: relative;
    border-bottom: 2px solid var(--text-purple);
  }

  .card-image img {
    width: 100%; height: 100%;
    object-fit: cover;
    opacity: 0.85;
    transition: opacity 0.3s, transform 0.5s;
  }

  .project-card:hover .card-image img {
    opacity: 1;
    transform: scale(1.05);
  }

  .card-body { padding: 30px; }
  .date { font-family: 'VT323', monospace; color: var(--text-pink); font-size: 1.4rem; margin-bottom: 12px; display: block; }
  h3 { font-size: 1.6rem; color: #fff; margin-bottom: 15px; letter-spacing: 1px; }
  p { font-size: 1.05rem; line-height: 1.8; color: #e0e0e0; }
  
  .tags { margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; }
  .tag {
    font-family: 'VT323', monospace; font-size: 1rem; color: var(--bg-dark);
    background: var(--text-cyan); padding: 4px 12px; border-radius: 20px; font-weight: bold;
  }

  @media screen and (max-width: 900px) {
    .hero h1 { font-size: 3.5rem; }
    .typewriter { font-size: 1.5rem; }
    .timeline::after { left: 40px; }
    .timeline-item { width: 100%; padding: 20px 20px 60px 80px; }
    .timeline-item.left, .timeline-item.right { left: 0; }
    .timeline-item.left::after, .timeline-item.right::after { left: 28px; }
    .card-image { height: 200px; }
  }

  @keyframes blink { 50% { border-color: transparent; } }
  @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-15px); } 60% { transform: translateY(-7px); } }
`;