'use client'
import { useEffect, useState } from 'react'

export default function HeroGlitchTitle({ text }: { text: string }) {
    const [, setNoiseAnim] = useState(false)

    useEffect(() => {
        // 為了避免 SSR mismatch animation，延遲掛載動畫
        setNoiseAnim(true)
    }, [])

    return (
        <>
            <h1 className="glitch-title relative text-6xl md:text-8xl font-bold text-white" data-text={text}>
                {text}
            </h1>

            <style jsx>{`
                .glitch-title::before,
                .glitch-title::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    color: #ffffff;
                    background: #0a0a0a;
                    overflow: hidden;
                }

                .glitch-title::before {
                    left: -2px;
                    text-shadow: 2px 0 #ff2a6d;
                    animation: noise-anim 2s infinite linear alternate-reverse;
                }

                .glitch-title::after {
                    left: 2px;
                    text-shadow: -2px 0 #ff1f71;
                    animation: noise-anim-2 3s infinite linear alternate-reverse;
                }

                @keyframes noise-anim {
                    0% {
                    clip-path: inset(40% 0 61% 0);
                    }
                    20% {
                    clip-path: inset(92% 0 1% 0);
                    }
                    40% {
                    clip-path: inset(43% 0 1% 0);
                    }
                    60% {
                    clip-path: inset(25% 0 58% 0);
                    }
                    80% {
                    clip-path: inset(54% 0 7% 0);
                    }
                    100% {
                    clip-path: inset(58% 0 43% 0);
                    }
                }

                @keyframes noise-anim-2 {
                    0% {
                    clip-path: inset(1% 0 40% 0);
                    }
                    20% {
                    clip-path: inset(1% 0 92% 0);
                    }
                    40% {
                    clip-path: inset(1% 0 43% 0);
                    }
                    60% {
                    clip-path: inset(58% 0 25% 0);
                    }
                    80% {
                    clip-path: inset(7% 0 54% 0);
                    }
                    100% {
                    clip-path: inset(43% 0 58% 0);
                    }
                }
                `}
            </style>
        </>
    )
}
