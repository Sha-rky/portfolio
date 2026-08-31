import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve Tailwind class conflicts.
 * Later classes win, so a caller's `className` reliably overrides a
 * component's own base classes.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
