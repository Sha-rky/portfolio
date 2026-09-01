"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project, defaultProjects } from "@/data/projects";

/**
 * Home Remake — sandbox duplicate of `app/home/page.tsx`.
 *
 * A copy of the production home surface exactly as it stands today: Hero,
 * NeonBackground and ProjectGrid, plus the Container, Card, GlitchText and
 * ScrambleText pieces they compose. Nothing here is imported from
 * `components/` — every part is inlined so this page can be reshaped freely
 * without any edit reaching production.
 *
 * Per AGENTS.md §2B the styling is written as inline Tailwind rather than
 * through `tv()` variants files. The class lists below are the resolved
 * contents of hero.variants.ts, project-grid.variants.ts and
 * card.variants.ts, so this renders identically to /home at the starting
 * point; they are plain strings now, free to diverge as the design moves.
 *
 * Semantic theme tokens (text-subtle, bg-surface, rounded-card…) are the
 * starting point precisely because they are what production uses — swap any
 * of them for literal values as soon as a change wants to leave the registry
 * behind.
 */

/* ---------------------------------------------------------------- effects */

interface GlitchTextProps {
	text: string;
	className?: string;
}

/** Copy of components/effects/glitch-text.tsx. */
function GlitchText({ text, className = "" }: GlitchTextProps) {
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

const SCRAMBLE_CHARS =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const SCRAMBLE_INTERVAL = 2000;
const FLICKER_DURATION = 0.1; // 閃爍間隔時間（秒）
const MAX_DECODE_TIME = 1; // 最大解碼時間（秒）

interface CharState {
	decoded: boolean;
	startTime: number;
	nextFlickerTime: number;
}

interface ScrambleTextProps {
	words: string[];
	interval?: number;
	chars?: string;
	className?: string;
}

const randomChar = (chars: string): string => chars[Math.floor(Math.random() * chars.length)];

const generateScrambledText = (word: string, charStates: CharState[], chars: string): string =>
	word
		.split("")
		.map((char, index) => (charStates[index].decoded ? char : randomChar(chars)))
		.join("");

const initializeCharStates = (word: string): CharState[] => {
	const now = Date.now();
	return word.split("").map(() => ({
		decoded: false,
		startTime: now + Math.random() * MAX_DECODE_TIME * 1000,
		nextFlickerTime: now,
	}));
};

/** Copy of components/effects/scramble-text.tsx. */
function ScrambleText({
	words,
	interval = SCRAMBLE_INTERVAL,
	chars = SCRAMBLE_CHARS,
	className = "",
}: ScrambleTextProps) {
	const [display, setDisplay] = useState<string>(words[0]);
	const wordIndex = useRef<number>(0);
	const timeline = useRef<gsap.core.Timeline | null>(null);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const state = useRef<{ charStates: CharState[]; currentWord: string }>({
		charStates: initializeCharStates(words[0]),
		currentWord: words[0],
	});

	useEffect(() => {
		const revealWord = (word: string, onComplete: () => void): void => {
			state.current = { charStates: initializeCharStates(word), currentWord: word };

			if (timeline.current) timeline.current.kill();
			timeline.current = gsap.timeline({ onComplete });

			const updateDisplay = (): void => {
				const { charStates } = state.current;
				let allDecoded = true;
				const now = Date.now();

				charStates.forEach((charState) => {
					if (!charState.decoded) {
						// 10% 的機率解碼
						if (now >= charState.startTime && Math.random() < 0.1) {
							charState.decoded = true;
						}
						allDecoded = false;
					}
				});

				setDisplay(generateScrambledText(word, charStates, chars));

				if (!allDecoded) {
					timeline.current?.add(gsap.delayedCall(FLICKER_DURATION, updateDisplay));
				}
			};

			updateDisplay();
		};

		const animate = (): void => {
			revealWord(words[wordIndex.current], () => {
				timeoutRef.current = setTimeout(() => {
					wordIndex.current = (wordIndex.current + 1) % words.length;
					animate();
				}, interval);
			});
		};

		animate();

		return () => {
			if (timeline.current) timeline.current.kill();
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [chars, interval, words]);

	return <span className={className}>{display}</span>;
}

/**
 * Copy of components/effects/neon-background.tsx.
 *
 * The two element ids are prefixed `remake-` so this page's background and
 * scroll trigger never collide with production's if both ever render.
 */
function NeonBackground() {
	const animationRef = useRef<gsap.core.Tween | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// 背景模糊光淡入。如果已經有動畫在運行，先殺掉它。
		const fade = (opacity: number, duration: number, ease: string) => () => {
			if (animationRef.current) animationRef.current.kill();
			animationRef.current = gsap.to("#remake-neon-bg", { opacity, duration, ease });
		};

		const trigger = ScrollTrigger.create({
			trigger: "#remake-projects-grid",
			start: "top center",
			end: "bottom center",
			onEnter: fade(1, 2, "circ.in"),
			onEnterBack: fade(1, 2, "circ.in"),
			onLeave: fade(0, 0.5, "power2.out"),
			onLeaveBack: fade(0, 0.5, "power2.out"),
		});

		return () => {
			if (animationRef.current) animationRef.current.kill();
			trigger.kill();
		};
	}, []);

	return (
		<div
			id="remake-neon-bg"
			className="pointer-events-none fixed top-0 left-0 -z-10 h-full w-full opacity-0"
			style={{
				background: `
					radial-gradient(ellipse at 30% 40%, rgba(0,255,255,0.15), transparent 35%),
					radial-gradient(ellipse at 70% 60%, rgba(255,0,255,0.1), transparent 45%),
					radial-gradient(circle at 45% 55%, rgba(0,255,255,0.08), transparent 25%),
					radial-gradient(ellipse at 55% 45%, rgba(255,0,255,0.05), transparent 30%)
				`,
				filter: "blur(30px)",
			}}
		/>
	);
}

/* ------------------------------------------------------------------- card */

/** Copy of components/ui/card.tsx + card.variants.ts, classes inlined. */
function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-all duration-300">
			<div className="mb-4 overflow-hidden rounded-media bg-media">
				{project.imageUrl ? (
					<Image
						src={project.imageUrl}
						alt={project.title}
						width={800}
						height={450}
						className="h-auto w-full object-contain"
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center text-muted">
						Project Image
					</div>
				)}
			</div>

			<h3 className="mb-2 text-xl font-semibold text-emphasis">{project.title}</h3>
			<p className="mb-4 text-muted">{project.description}</p>

			{project.technologies && (
				<div className="mb-4 flex flex-wrap gap-2">
					{project.technologies.map((tech) => (
						<span
							key={tech}
							className="rounded-tag bg-surface-raised px-2 py-1 font-mono text-sm text-tag"
						>
							{tech}
						</span>
					))}
				</div>
			)}
		</div>
	);
}

/* --------------------------------------------------------------- sections */

const ROLES = ["ML Engineer", "Web Developer", "Python Developer", "Cursor user"];

/** Copy of components/sections/hero.tsx + hero.variants.ts, classes inlined. */
function Hero() {
	return (
		<div className="container mx-auto flex h-screen max-w-7xl flex-col justify-center font-display">
			<div>
				<p className="mb-8 text-5xl font-light text-subtle">My name is</p>

				<h1>
					<GlitchText
						text="Ryan Luo"
						className="relative text-6xl font-bold text-emphasis md:text-8xl"
					/>
				</h1>

				<p className="mt-8 text-5xl font-light text-subtle">
					I am a&nbsp;
					<ScrambleText words={ROLES} className="text-accent" />
				</p>
			</div>
		</div>
	);
}

/** Copy of components/sections/project-grid.tsx + its variants, inlined. */
function ProjectGrid({ projects = defaultProjects }: { projects?: Project[] }) {
	return (
		<div className="container mx-auto min-h-screen max-w-7xl">
			<div className="space-y-12">
				<div className="text-center font-pixel">
					<h2 className="mb-4 text-4xl font-bold text-highlight heading-emboss">
						Projects Showcase
					</h2>
					<p className="mt-4 text-lg text-muted">
						Explore my latest work and personal projects
					</p>
				</div>

				<div
					id="remake-projects-grid"
					className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3"
				>
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}

/* ------------------------------------------------------------------- page */

export default function HomeRemake() {
	return (
		<main>
			<Hero />
			<NeonBackground />
			<ProjectGrid />
		</main>
	);
}
