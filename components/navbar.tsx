"use client";

import React from "react";
import { navbarVariants } from "@/components/variants/navbar";

const LINKS = ["home"];

export function Navbar() {
	const { nav, list, link } = navbarVariants();

	return (
		<nav className={nav()}>
			<div className={list()}>
				{LINKS.map((label) => (
					<a key={label} href={`./${label}#`} className={link()}>
						{label}
					</a>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
