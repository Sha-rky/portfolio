"use client";

import React from "react";
import Image from "next/image";
import GlitchTitle from "./glitch-title";
import TextScramble from "@/components/text-scramble";
import { defaultProjects } from "@/data/projects";

const ROLES = ["ML Engineer", "Web Developer", "Python Developer", "Cursor user"];

/**
 * Home — City Pop (candidate).
 *
 * A retro-synthwave exploration of the home layout: lilac/pink palette,
 * hard offset shadows, a moon-over-sea backdrop. Styled directly; not wired
 * into production.
 */
export default function HomeCityPop() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-[#090414] text-[#f8fafc]">
			<div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
				<Image
					src="/citypop_moon_sea_asymmetric.jpg"
					alt=""
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-[#090414]/40 via-transparent to-[#090414]" />
			</div>

			<section className="flex h-screen flex-col justify-center px-6 md:px-16">
				<p className="mb-6 text-3xl font-light text-[#80deea] md:text-5xl" style={{ fontFamily: "var(--font-orbitron)" }}>
					My name is
				</p>

				<GlitchTitle
					text="Ryan Luo"
					className="text-6xl md:text-8xl"
					fg="#ffffff"
					bg="#090414"
					accentA="#ff85c2"
					accentB="#80deea"
				/>

				<p className="mt-6 text-3xl font-light text-[#80deea] md:text-5xl" style={{ fontFamily: "var(--font-orbitron)" }}>
					I am a&nbsp;
					<TextScramble words={ROLES} className="text-[#ff85c2]" />
				</p>
			</section>

			<section className="px-6 pb-24 md:px-16">
				<div className="mx-auto max-w-6xl space-y-12">
					<div className="text-center">
						<h2
							className="mb-3 text-4xl font-bold uppercase tracking-widest text-white drop-shadow-[0_0_12px_rgba(255,133,194,0.5)]"
							style={{ fontFamily: "var(--font-orbitron)" }}
						>
							Projects Showcase
						</h2>
						<p className="text-lg text-[#cbd5e1]">Explore my latest work and personal projects</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{defaultProjects.map((project) => (
							<div
								key={project.id}
								className="flex h-full flex-col border-2 border-[#b388ff] bg-[#0e0919] p-5 shadow-[6px_6px_0px_#ff85c2] transition-transform hover:-translate-y-1"
							>
								<div className="mb-4 flex items-center justify-between border-b-2 border-[#b388ff] pb-1.5 font-mono text-xs">
									<span className="font-extrabold tracking-wider text-[#80deea]">&lt;/&gt;</span>
									<div className="flex items-center gap-1.5">
										<span className="h-3.5 w-3.5 border border-[#090414] bg-[#80deea]" />
										<span className="h-3.5 w-3.5 border border-[#090414] bg-[#b388ff]" />
										<span className="h-3.5 w-3.5 border border-[#090414] bg-[#ff85c2]" />
									</div>
								</div>

								{project.imageUrl && (
									<div className="mb-4 overflow-hidden border-2 border-[#b388ff]/50 bg-black">
										<Image
											src={project.imageUrl}
											alt={project.title}
											width={800}
											height={450}
											className="h-auto w-full object-contain"
										/>
									</div>
								)}
								<h3 className="mb-2 text-xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,133,194,0.4)]">
									{project.title}
								</h3>
								<p className="mb-4 text-[#cbd5e1]">{project.description}</p>
								{project.technologies && (
									<div className="mt-auto flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="border border-[#80deea] bg-[#140e24] px-2 py-1 font-mono text-sm text-[#80deea] shadow-[2px_2px_0px_#000000]"
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
