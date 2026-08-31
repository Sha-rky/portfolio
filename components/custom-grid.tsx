"use client";

import React from "react";
import { useThemeMode } from "@/components/use-theme-mode";
import { Project, defaultProjects } from "@/data/projects";
import { CustomContainer } from "@/components/custom-container";
import { Card } from "@/components/card";
import { customGridVariants } from "@/components/variants/custom-grid";

export interface CustomGridProps {
    projects?: Project[];
    className?: string;
}

export function CustomGrid({
    projects = defaultProjects,
    className = ""
}: CustomGridProps) {
    const { theme } = useThemeMode();

    const {
        container,
        header,
        title,
        subtitle,
        grid
    } = customGridVariants({ theme });

    return (
        <section className={container({ className })}>
            <CustomContainer>
                {/* Section Header */}
                <div className={header()}>
                    <h2 className={title()}>
                        Projects Showcase
                    </h2>
                    <p className={subtitle()}>
                        Explore my latest work and personal projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div id="projects-grid" className={grid()}>
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </CustomContainer>
        </section>
    );
}

export default CustomGrid;
