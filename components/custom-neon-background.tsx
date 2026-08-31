"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CustomNeonBackground() {
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const fadeNeon = (toOpacity: number, duration: number, ease: string) => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
            animationRef.current = gsap.to("#neon-bg", {
                opacity: toOpacity,
                duration,
                ease
            });
        };

        const trigger = ScrollTrigger.create({
            trigger: "#projects-grid",
            start: "top center",
            end: "bottom center",
            onEnter: () => fadeNeon(1, 2, "circ.in"),
            onLeaveBack: () => fadeNeon(0, 0.5, "power2.out"),
            onEnterBack: () => fadeNeon(1, 2, "circ.in"),
            onLeave: () => fadeNeon(0, 0.5, "power2.out")
        });

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
            className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-0 -z-10 transition-opacity"
            style={{
                background: `
                    radial-gradient(ellipse at 30% 40%, rgba(0,255,255,0.15), transparent 35%),
                    radial-gradient(ellipse at 70% 60%, rgba(255,0,255,0.1), transparent 45%),
                    radial-gradient(circle at 45% 55%, rgba(0,255,255,0.08), transparent 25%),
                    radial-gradient(ellipse at 55% 45%, rgba(255,0,255,0.05), transparent 30%)
                `,
                filter: "blur(30px)"
            }}
        />
    );
}

export default CustomNeonBackground;
