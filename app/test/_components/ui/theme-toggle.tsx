"use client";

import { useThemeMode, THEMES } from "@/app/test/_components/ui/theme-provider";
import { themeToggleVariants } from "@/app/test/_components/ui/variants/theme-toggle";

const THEME_LABELS: Record<string, string> = {
	cyberpunk: "Cyberpunk",
	citypop: "City Pop",
	vanilla: "Vanilla",
};

export function ThemeToggle() {
	const { theme, setTheme, mounted } = useThemeMode();
	const { container } = themeToggleVariants();

	if (!mounted) {
		return (
			<div className={container()}>
				<span className="px-2 py-1 opacity-50">Theme...</span>
			</div>
		);
	}

	return (
		<div className={container()}>
			{THEMES.map((id) => (
				<button
					key={id}
					type="button"
					onClick={() => setTheme(id)}
					className={themeToggleVariants({ active: theme === id }).button()}
				>
					{THEME_LABELS[id] ?? id}
				</button>
			))}
		</div>
	);
}

export default ThemeToggle;
