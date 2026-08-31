"use client";

import React from "react";
import Image from "next/image";
import TextScramble from "@/components/text-scramble";
import { defaultProjects } from "@/data/projects";

const ROLES = ["ML Engineer", "Web Developer", "Python Developer"];

/**
 * Home — Vanilla (candidate).
 *
 * A clean, minimal exploration: no glitch effect, no neon — that's a
 * structural choice for this look, not a stylistic toggle, so there's simply
 * no glitch component here at all. Styled directly; not wired into
 * production.
 */
export default function HomeVanilla() {
	return (
		<div className="min-h-screen bg-white text-zinc-900">
			<section className="flex h-screen flex-col justify-center px-6 md:px-16">
				<p className="mb-2 text-2xl font-normal text-zinc-500 md:text-3xl">My name is</p>

				<h1 className="my-2 text-6xl font-bold tracking-tight text-zinc-900 md:text-7xl">
					Ryan Luo
				</h1>

				<p className="mt-4 text-2xl font-normal text-zinc-600 md:text-3xl">
					I am a&nbsp;
					<TextScramble
						words={ROLES}
						className="font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4"
					/>
				</p>
			</section>

			<section className="px-6 pb-24 md:px-16">
				<div className="mx-auto max-w-6xl space-y-12">
					<div className="text-center">
						<h2 className="mb-3 text-4xl font-bold tracking-tight text-zinc-900">
							Projects Showcase
						</h2>
						<p className="text-lg text-zinc-500">Explore my latest work and personal projects</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{defaultProjects.map((project) => (
							<div
								key={project.id}
								className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
							>
								{project.imageUrl && (
									<div className="mb-4 overflow-hidden rounded-md bg-zinc-100">
										<Image
											src={project.imageUrl}
											alt={project.title}
											width={800}
											height={450}
											className="h-auto w-full object-contain"
										/>
									</div>
								)}
								<h3 className="mb-2 text-xl font-semibold tracking-tight text-zinc-900">
									{project.title}
								</h3>
								<p className="mb-4 text-zinc-600">{project.description}</p>
								{project.technologies && (
									<div className="mt-auto flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="rounded bg-zinc-100 px-2 py-1 font-mono text-sm text-zinc-700"
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
