"use client";

import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/app/test/_components/ui/theme-toggle";
import { navbarVariants } from "@/app/test/_components/ui/variants/navbar";

export function Navbar() {
	const { nav, container, brand, links, link } = navbarVariants();

	return (
		<header className={nav()}>
			<div className={container()}>
				<Link href="/home" className={brand()}>
					RYAN.DEV
				</Link>

				<nav className={links()}>
					<Link href="/home" className={link()}>
						Home
					</Link>
				</nav>

				<div className="flex items-center">
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}

export default Navbar;
