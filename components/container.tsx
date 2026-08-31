import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Layout-only wrapper: width and horizontal centring, no colour or type.
 *
 * Renders a plain <div>. It used to render <main>, which meant a page
 * composing two Containers emitted two <main> landmarks — invalid HTML. The
 * single <main> now lives in the page.
 */
export default function Container({
	children,
	className,
	...props
}: ComponentPropsWithoutRef<"div">) {
	return (
		<div {...props} className={cn("container mx-auto max-w-7xl", className)}>
			{children}
		</div>
	);
}
