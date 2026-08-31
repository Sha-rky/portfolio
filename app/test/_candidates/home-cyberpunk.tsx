"use client";

import React from "react";
import Image from "next/image";
import GlitchTitle from "./glitch-title";
import TextScramble from "@/components/text-scramble";
import { defaultProjects } from "@/data/projects";

const ROLES = ["ML Engineer", "Web Developer", "Python Developer", "Cursor user"];

/**
 * Home — Cyberpunk (candidate).
 *
 * A next-version exploration of the cyberpunk look, styled directly rather
 * than through the registry. Production's cyberpunk theme is untouched by
 * this file; nothing here is imported anywhere else.
 */
export default function HomeCyberpunk() {
	return (
		<div
			className="min-h-screen bg-[#050505] text-[#ededed]"
			style={{ fontFamily: "var(--font-geist-sans)" }}
		>
			<div
				className="pointer-events-none fixed inset-0 -z-10 opacity-40"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.06) 1px, transparent 1px)",
					backgroundSize: "44px 44px",
				}}
			/>

			<section className="flex h-screen flex-col justify-center px-6 md:px-16">
				<p className="mb-6 text-3xl font-light text-[#71717a] md:text-5xl" style={{ fontFamily: "var(--font-orbitron)" }}>
					My name is
				</p>

				<GlitchTitle
					text="Ryan Luo"
					className="text-6xl md:text-8xl"
					fg="#ffffff"
					bg="#050505"
					accentA="#00eaff"
					accentB="#ff2ad4"
				/>

				<p className="mt-6 text-3xl font-light text-[#71717a] md:text-5xl" style={{ fontFamily: "var(--font-orbitron)" }}>
					I am a&nbsp;
					<TextScramble words={ROLES} className="text-[#00eaff]" />
				</p>
			</section>

			<section className="px-6 pb-24 md:px-16">
				<div className="mx-auto max-w-6xl space-y-12">
					<div className="text-center">
						<h2
							className="mb-3 text-4xl font-bold uppercase tracking-widest text-[#00eaff]"
							style={{ fontFamily: "var(--font-dot-gothic-16)", textShadow: "-2px -2px 0 #ff2ad4" }}
						>
							Projects Showcase
						</h2>
						<p className="text-lg text-[#9ca3af]">Explore my latest work and personal projects</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{defaultProjects.map((project) => (
							<div
								key={project.id}
								className="flex h-full flex-col rounded-xl border border-[#00eaff]/20 bg-[#0a0a0a]/60 p-6 transition-colors hover:border-[#00eaff]/50"
							>
								{project.imageUrl && (
									<div className="mb-4 overflow-hidden rounded-lg bg-black/60">
										<Image
											src={project.imageUrl}
											alt={project.title}
											width={800}
											height={450}
											className="h-auto w-full object-contain"
										/>
									</div>
								)}
								<h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
								<p className="mb-4 text-[#9ca3af]">{project.description}</p>
								{project.technologies && (
									<div className="mt-auto flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="rounded-full bg-[#00eaff]/10 px-2 py-1 font-mono text-sm text-[#00eaff]"
											>
												{tech}
											</span>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
