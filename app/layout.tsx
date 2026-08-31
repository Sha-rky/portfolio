import type { Metadata } from "next";
import { Orbitron, DotGothic16, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
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
		// Font variables live on <html> so the token layer in globals.css, which
		// is scoped to :root, can resolve them (CSS variables inherit downward).
		<html
			lang="en"
			suppressHydrationWarning
			className={`${geist.variable} ${orbitron.variable} ${dotGothic16.variable} ${geistMono.variable}`}
		>
			<body className="min-h-screen font-sans transition-colors duration-500">
				<ThemeProvider
					attribute="data-theme"
					defaultTheme="cyberpunk"
					themes={["cyberpunk", "citypop", "vanilla"]}
					enableSystem={false}
				>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}