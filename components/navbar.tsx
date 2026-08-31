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

<<<<<<< HEAD
export default Navbar;
=======

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full p-4 backdrop-blur z-[1000]">
            <div className="flex justify-center gap-8 flex-wrap">
                {["other"].map((label) => (
                    <NavLink key={label} label={label} href={`./${label}#`} />
                ))}
            </div>
        </nav>
    );
};
>>>>>>> 3f1045ed57181ec6fdbbb04d4d440f5419db5442
