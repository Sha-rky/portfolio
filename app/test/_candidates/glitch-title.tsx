"use client";

import React from "react";

export interface GlitchTitleProps {
	text: string;
	className?: string;
	/** Colours are passed in, not read from the theme registry — candidates
	 * style directly and each home-* candidate explores its own palette. */
	fg: string;
	bg: string;
	accentA: string;
	accentB: string;
}

/**
 * Glitch title, parameterized.
 *
 * Shared across the home-* candidates the same way terminal-window.tsx is
 * shared across the spec candidates: it's exploration scaffolding, not a
 * promoted component, so it takes its colours as props instead of pulling
 * `components/hero-glitch-title.tsx`, which is wired to the single
 * production theme in the registry.
 */
export default function GlitchTitle({ text, className = "", fg, bg, accentA, accentB }: GlitchTitleProps) {
	return (
		<>
			<h1
				className={`glitch-title relative font-bold ${className}`}
				data-text={text}
				style={
					{
						"--glitch-fg": fg,
						"--glitch-bg": bg,
						"--glitch-a": accentA,
						"--glitch-b": accentB,
					} as React.CSSProperties
				}
			>
				{text}
			</h1>

			<style jsx>{`
				.glitch-title::before,
				.glitch-title::after {
					content: attr(data-text);
					position: absolute;
					top: 0;
					color: var(--glitch-fg);
					background: var(--glitch-bg);
					overflow: hidden;
				}

				.glitch-title::before {
					left: -2px;
					text-shadow: 2px 0 var(--glitch-a);
					animation: noise-anim 2s infinite linear alternate-reverse;
				}

				.glitch-title::after {
					left: 2px;
					text-shadow: -2px 0 var(--glitch-b);
					animation: noise-anim-2 3s infinite linear alternate-reverse;
				}

				@keyframes noise-anim {
					0% { clip-path: inset(40% 0 61% 0); }
					20% { clip-path: inset(92% 0 1% 0); }
					40% { clip-path: inset(43% 0 1% 0); }
					60% { clip-path: inset(25% 0 58% 0); }
					80% { clip-path: inset(54% 0 7% 0); }
					100% { clip-path: inset(58% 0 43% 0); }
				}

				@keyframes noise-anim-2 {
					0% { clip-path: inset(1% 0 40% 0); }
					20% { clip-path: inset(1% 0 92% 0); }
					40% { clip-path: inset(1% 0 43% 0); }
					60% { clip-path: inset(58% 0 25% 0); }
					80% { clip-path: inset(7% 0 54% 0); }
					100% { clip-path: inset(43% 0 58% 0); }
				}
			`}</style>
		</>
	);
}
