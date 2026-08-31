"use client";

import React from "react";
import Link from "next/link";
import { useThemeMode } from "@/components/use-theme-mode";
import { ThemeToggle } from "@/components/theme-toggle";
import { customNavbarVariants } from "@/components/variants/custom-navbar";

export function CustomNavbar() {
    const { theme } = useThemeMode();

    const {
        nav,
        container,
        links,
        link
    } = customNavbarVariants({ theme });

    return (
        <header className={nav()}>
            <div className={container()}>
                {/* Brand / Logo */}
                <Link href="/home" className="font-mono font-bold text-sm tracking-wider flex items-center gap-2">
                    <span className={theme === "vanilla" ? "text-zinc-900" : "text-[#80deea]"}>
                        RYAN.DEV
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav className={links()}>
                    <Link href="/home" className={link()}>
                        Home
                    </Link>
                </nav>

                {/* Interactive Theme Switcher */}
                <div className="flex items-center">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

export default CustomNavbar;
