import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

/**
 * Layout-only wrapper: width and horizontal rhythm, no colour or type.
 */
export function Container({ children, className }: ContainerProps) {
	return (
		<div className={cn("max-w-6xl mx-auto px-4 md:px-8 w-full", className)}>
			{children}
		</div>
	);
}

export default Container;
