import type { Metadata } from "next";
import { Orbitron, DotGothic16, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomNavbar } from "@/components/custom-navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-geist-sans",
	display: "swap",
	style: "normal",
	preload: true,
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-geist-mono",
	display: "swap",
});

const orbitron = Orbitron({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-orbitron",
	display: "swap",
	style: "normal",
	preload: true,
});

const dotGothic16 = DotGothic16({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
	variable: "--font-dot-gothic-16",
	preload: true,
});

export const metadata: Metadata = {
	title: "Ryan - Portfolio",
	description: "Portfolio by Ryan Luo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geist.className} ${orbitron.variable} ${dotGothic16.variable} ${geistMono.variable} min-h-screen transition-colors duration-500`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="cyberpunk"
					themes={["cyberpunk", "citypop", "vanilla"]}
					enableSystem={false}
				>
					<CustomNavbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}