import type { Metadata } from "next";
import { Orbitron, DotGothic16, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geist = Geist({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-geist-sans',
	display: 'swap',
	style: 'normal',
	preload: true,
})

const geistMono = Geist_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-geist-mono',
	display: 'swap',
})

const orbitron = Orbitron({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-orbitron',
	display: 'swap',
	style: 'normal',
	preload: true,
})

const dotGothic16 = DotGothic16({
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-dot-gothic-16',
	preload: true,
})


export const metadata: Metadata = {
	title: "Ryan",
	description: "Portfolio by Ryan",
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
    return (
		<html lang="en">
			<body className={`${geist.className} ${orbitron.variable} ${dotGothic16.variable} ${geistMono.variable}`}>
				<Navbar/>
				{children}
			</body>
		</html>
	);
}