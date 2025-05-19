"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function NeonBackground() {
	const animationRef = useRef<gsap.core.Tween | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// 背景模糊光淡入
		const trigger = ScrollTrigger.create({
			trigger: "#projects-grid",
			start: "top center",
			end: "bottom center",
			onEnter: () => {
				// 如果已經有動畫在運行，先殺掉它
				if (animationRef.current) {
					animationRef.current.kill();
				}
				animationRef.current = gsap.to("#neon-bg", {
					opacity: 1,
					duration: 2,
					ease: "circ.in"
				});
			},
			onLeaveBack: () => {
				// 如果已經有動畫在運行，先殺掉它
				if (animationRef.current) {
					animationRef.current.kill();
				}
				animationRef.current = gsap.to("#neon-bg", {
					opacity: 0,
					duration: 0.5,
					ease: "power2.out"
				});
			},
			onEnterBack: () => {
				// 如果已經有動畫在運行，先殺掉它
				if (animationRef.current) {
					animationRef.current.kill();
				}
				animationRef.current = gsap.to("#neon-bg", {
					opacity: 1,
					duration: 2,
					ease: "circ.in"
				});
			},
			onLeave: () => {
				// 如果已經有動畫在運行，先殺掉它
				if (animationRef.current) {
					animationRef.current.kill();
				}
				animationRef.current = gsap.to("#neon-bg", {
					opacity: 0,
					duration: 0.5,
					ease: "power2.out"
				});
			}
		});

		// 清理函數
		return () => {
			if (animationRef.current) {
				animationRef.current.kill();
			}
			trigger.kill();
		};
	}, []);

	return (
		<div
			id="neon-bg"
			className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-0 -z-10"
			style={{
				background: `
					radial-gradient(ellipse at 30% 40%, rgba(0,255,255,0.15), transparent 35%),
					radial-gradient(ellipse at 70% 60%, rgba(255,0,255,0.1), transparent 45%),
					radial-gradient(circle at 45% 55%, rgba(0,255,255,0.08), transparent 25%),
					radial-gradient(ellipse at 55% 45%, rgba(255,0,255,0.05), transparent 30%)
				`,
				filter: 'blur(30px)'
			}}
		/>
	);
} 