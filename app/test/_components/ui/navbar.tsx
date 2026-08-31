"use client";

import React from "react";
import Link from "next/link";
import { navbarVariants } from "@/app/test/_components/ui/variants/navbar";

/**
 * Themed navbar for the token-driven component set.
 *
 * Carries no theme switcher: the production surface is fixed-theme, and in the
 * sandbox the theme is decided by which home view you select.
 */
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
			</div>
		</header>
	);
}

export default Navbar;
