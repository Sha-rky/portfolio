"use client";

import React from "react";
import { useThemeMode } from "@/components/use-theme-mode";
import { CustomContainer } from "@/components/custom-container";
import { CustomHeroGlitchTitle } from "@/components/custom-hero-glitch-title";
import { CustomTextScramble } from "@/components/custom-text-scramble";
import { customHeroVariants } from "@/components/variants/custom-hero";

export interface CustomHeroProps {
    className?: string;
}

export function CustomHero({ className = "" }: CustomHeroProps) {
    const { theme } = useThemeMode();

    const {
        container,
        wrapper,
        intro,
        title,
        role,
        scramble
    } = customHeroVariants({ theme });

    const isVanilla = theme === "vanilla";

    return (
        <section className={container({ className })}>
            <CustomContainer className={wrapper()}>
                <p className={intro()}>
                    My name is
                </p>

                {isVanilla ? (
                    <h1 className={title()}>
                        Ryan Luo
                    </h1>
                ) : (
                    <CustomHeroGlitchTitle text="Ryan Luo" />
                )}

                <div className={role()}>
                    <span>I am a&nbsp;</span>
                    <CustomTextScramble 
                        words={[
                            "ML Engineer",
                            "Web Developer",
                            "Python Developer",
                            "Cursor user"
                        ]}
                        className={scramble()}
                    />
                </div>
            </CustomContainer>
        </section>
    );
}

export default CustomHero;
