import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// 常量配置
const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
const DEFAULT_WORDS = ['Apple', 'Banana', 'Cake'];
const DEFAULT_INTERVAL = 2000;
const FLICKER_DURATION = 0.1;  // 閃爍間隔時間（秒）
const MAX_DECODE_TIME = 1;     // 最大解碼時間（秒）

// 類型定義
interface ScrambleTextProps {
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

// 工具函數
const randomChar = (chars: string): string => chars[Math.floor(Math.random() * chars.length)];

const generateScrambledText = (word: string, charStates: CharState[], chars: string): string => {
	return word.split('').map((char, index) => {
		const state = charStates[index];
		return state.decoded ? char : randomChar(chars);
	}).join('');
};

const initializeCharStates = (word: string): CharState[] => {
	const now = Date.now();
	return word.split('').map(() => ({
		decoded: false,
		startTime: now + Math.random() * MAX_DECODE_TIME * 1000,
		nextFlickerTime: now
	}));
};

export default function HeroScrambleText({
	words = DEFAULT_WORDS,
	interval = DEFAULT_INTERVAL,
	chars = DEFAULT_CHARS,
	className = '',
}: ScrambleTextProps) {
	// 狀態管理
	const [display, setDisplay] = useState<string>(words[0]);
	const wordIndex = useRef<number>(0);
	const timeline = useRef<gsap.core.Timeline | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const state = useRef<AnimationState>({
		charStates: initializeCharStates(words[0]),
		currentWord: words[0],
	});

	useEffect(() => {
		// 動畫核心邏輯
		const revealWord = (word: string, onComplete: () => void): void => {
			// 重置狀態
			state.current = {
				charStates: initializeCharStates(word),
				currentWord: word,
			};

			// 清理之前的動畫
			if (timeline.current) {
				timeline.current.kill();
			}

			// 創建新的時間軸
			timeline.current = gsap.timeline({
				onComplete,
			});

			const updateDisplay = (): void => {
				const { charStates } = state.current;
				let allDecoded = true;
				const now = Date.now();

				// 更新每個字母的狀態
				charStates.forEach((charState) => {
					if (!charState.decoded) {
						if (now >= charState.startTime) {
							// 隨機決定是否解碼
							if (Math.random() < 0.1) { // 10% 的機率解碼
								charState.decoded = true;
							}
						}
						allDecoded = false;
					}
				});

				// 更新顯示
				setDisplay(generateScrambledText(word, charStates, chars));

				// 如果還有未解碼的字母，繼續動畫
				if (!allDecoded) {
					timeline.current?.add(gsap.delayedCall(FLICKER_DURATION, updateDisplay));
				}
			};

			updateDisplay();
		};

		// 動畫循環控制
		const animate = (): void => {
			const word = words[wordIndex.current];
			revealWord(word, () => {
				timeoutRef.current = setTimeout(() => {
					wordIndex.current = (wordIndex.current + 1) % words.length;
					animate();
				}, interval);
			});
		};

		// 啟動動畫
		animate();

		// 清理函數
		return () => {
			if (timeline.current) timeline.current.kill();
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [chars, interval, words]); // 使用 useRef 管理狀態，無需依賴

	return (
		<span className={className}>
			{display}
		</span>
	);
}