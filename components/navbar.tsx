"use client";

import React from "react";

const NavLink = ({label, href}: {label: string, href: string}) => {
    return <a
        href={href}
        className="text-pink-400 uppercase text-sm tracking-widest transition duration-300 hover:text-purple-500 hover:drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]"
    >
        {label}
    </a>
}


export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full p-4 backdrop-blur z-[1000]">
            <div className="flex justify-center gap-8 flex-wrap">
                {["other", "about"].map((label) => (
                    <NavLink key={label} label={label} href={`./${label}#`} />
                ))}
            </div>
        </nav>
    );
};