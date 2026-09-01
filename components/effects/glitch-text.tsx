"use client";

export interface GlitchTextProps {
	text: string;
	className?: string;
}

/**
 * Glitch treatment for arbitrary text.
 *
 * Renders a plain `<span>` — no assumption about heading level or semantics.
 * If the caller needs this to be a page heading, wrap it in the appropriate
 * `<h1>`/`<h2>` themselves; this component only owns the visual effect.
 *
 * The two offset copies are pseudo-elements, so their colours have to come
 * from CSS variables directly rather than utility classes. They still resolve
 * through the theme registry, so this stays theme-agnostic. Sizing/weight is
 * the caller's concern — pass it in via `className`.
 */
export default function GlitchText({ text, className = "" }: GlitchTextProps) {
	return (
		<>
			<span className={`glitch-text ${className}`} data-text={text}>
				{text}
			</span>

			<style jsx>{`
				.glitch-text::before,
				.glitch-text::after {
					content: attr(data-text);
					position: absolute;
					top: 0;
					color: var(--theme-emphasis);
					background: var(--theme-bg);
					overflow: hidden;
				}

				.glitch-text::before {
					left: -2px;
					text-shadow: 2px 0 var(--theme-glitch-a);
					animation: noise-anim 2s infinite linear alternate-reverse;
				}

				.glitch-text::after {
					left: 2px;
					text-shadow: -2px 0 var(--theme-glitch-b);
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
