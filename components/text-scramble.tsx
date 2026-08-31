"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const DEFAULT_WORDS = ["ML Engineer", "Web Developer", "Python Developer", "Cursor user"];
const DEFAULT_INTERVAL = 2000;
const FLICKER_DURATION = 0.1;
const MAX_DECODE_TIME = 1;

export interface TextScrambleProps {
    words?: string[];
    interval?: number;
    chars?: string;
    className?: string;
    style?: React.CSSProperties;
}

interface CharState {
    decoded: boolean;
    startTime: number;
    nextFlickerTime: number;
}

interface AnimationState {
    charStates: CharState[];
    currentWord: string;
}

const randomChar = (chars: string): string => chars[Math.floor(Math.random() * chars.length)];

const generateScrambledText = (word: string, charStates: CharState[], chars: string): string => {
    return word
        .split("")
        .map((char, index) => {
            const state = charStates[index];
            return state?.decoded ? char : randomChar(chars);
        })
        .join("");
};

const initializeCharStates = (word: string): CharState[] => {
    const now = Date.now();
    return word.split("").map(() => ({
        decoded: false,
        startTime: now + Math.random() * MAX_DECODE_TIME * 1000,
        nextFlickerTime: now
    }));
};

export function TextScramble({
    words = DEFAULT_WORDS,
    interval = DEFAULT_INTERVAL,
    chars = DEFAULT_CHARS,
    className = "",
    style
}: TextScrambleProps) {
    const [display, setDisplay] = useState<string>(words[0] || "");
    const wordIndex = useRef<number>(0);
    const timeline = useRef<gsap.core.Timeline | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const state = useRef<AnimationState>({
        charStates: initializeCharStates(words[0] || ""),
        currentWord: words[0] || ""
    });

    useEffect(() => {
        if (!words || words.length === 0) return;

        const revealWord = (word: string, onComplete: () => void): void => {
            state.current = {
                charStates: initializeCharStates(word),
                currentWord: word
            };

            if (timeline.current) {
                timeline.current.kill();
            }

            timeline.current = gsap.timeline({
                onComplete
            });

            const updateDisplay = (): void => {
                const { charStates } = state.current;
                let allDecoded = true;
                const now = Date.now();

                charStates.forEach((charState) => {
                    if (!charState.decoded) {
                        if (now >= charState.startTime) {
                            if (Math.random() < 0.1) {
                                charState.decoded = true;
                            }
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
            const word = words[wordIndex.current % words.length];
            revealWord(word, () => {
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

    return (
        <span className={className} style={style}>
            {display}
        </span>
    );
}

export default TextScramble;
