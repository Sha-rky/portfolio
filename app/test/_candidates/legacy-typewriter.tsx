"use client";

import React, { useEffect, useState } from "react";

/**
 * Legacy typewriter effect + blinking-cursor animation.
 *
 * Copied (not extracted) from `legacy.tsx`'s typing `useEffect` and its
 * `.typewriter` / `@keyframes blink` rules — that file is being kept in full
 * for now, so this duplicates rather than removes anything from it. Scoped
 * under `.legacy-typewriter-specimen` and the keyframes renamed
 * `legacy-blink` so nothing here leaks onto the rest of the page.
 */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  .legacy-typewriter-specimen .typewriter {
    display: inline-block;
    font-family: 'VT323', monospace;
    font-size: 2rem;
    color: #80deea;
    border-right: 3px solid #ff85c2;
    white-space: nowrap;
    overflow: hidden;
    animation: legacy-blink 0.8s step-end infinite;
    padding-right: 5px;
    min-height: 2.5rem;
  }
  @keyframes legacy-blink { 50% { border-color: transparent; } }
`;

export function LegacyTypewriter() {
	const [typedText, setTypedText] = useState("");

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

	return (
		<div className="legacy-typewriter-specimen">
			<style dangerouslySetInnerHTML={{ __html: styles }} />
			<div className="typewriter">{typedText}</div>
		</div>
	);
}

export default LegacyTypewriter;
