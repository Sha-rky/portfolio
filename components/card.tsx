"use client";

import React from "react";
import Image from "next/image";
import { useThemeMode } from "@/components/use-theme-mode";
import { Project } from "@/data/projects";
import { cardVariants } from "@/components/variants/card";

export interface CardProps {
    project: Project;
    className?: string;
}

export function Card({ project, className = "" }: CardProps) {
    const { theme } = useThemeMode();

    const {
        container,
        imageWrapper,
        title,
        description,
        tagList,
        tag
    } = cardVariants({ theme });

    const isCityPop = theme === "citypop";

    return (
        <div className={container({ className })}>
            {/* CityPop Theme Window Titlebar Decorator */}
            {isCityPop && (
                <div className="px-3 py-1.5 flex items-center justify-between font-mono text-xs select-none border-b-2 bg-[#140e24] border-[#b388ff] -mx-5 -mt-5 mb-4 shrink-0">
                    <span className="font-extrabold text-xs tracking-wider text-[#80deea] drop-shadow-[0_0_6px_#80deea]">
                        &lt;/&gt;
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0 pointer-events-none">
                        <div className="w-[16px] h-[16px] flex items-center justify-center bg-[#80deea] border border-[#090414] shadow-[1px_1px_0px_#090414]">
                            <span className="w-1.5 h-[2px] bg-[#090414] translate-y-0.5"></span>
                        </div>
                        <div className="w-[16px] h-[16px] flex items-center justify-center bg-[#b388ff] border border-[#090414] shadow-[1px_1px_0px_#090414]">
                            <span className="w-1.5 h-1.5 border-[1.5px] border-[#090414]"></span>
                        </div>
                        <div className="w-[16px] h-[16px] flex items-center justify-center bg-[#ff85c2] border border-[#090414] shadow-[1px_1px_0px_#090414]">
                            <span className="font-bold text-[10px] text-[#090414] leading-none">✕</span>
                        </div>
                    </div>
                </div>
            )}

            {/* 1. Image */}
            {project.imageUrl && (
                <div className={imageWrapper()}>
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* 2. Title */}
            <h3 className={title()}>
                {project.title}
            </h3>

            {/* 3. Description */}
            <p className={description()}>
                {project.description}
            </p>

            {/* 4. Tags */}
            {project.technologies && project.technologies.length > 0 && (
                <div className={tagList()}>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className={tag()}>
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Card;
