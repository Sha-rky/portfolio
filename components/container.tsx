import { type ComponentPropsWithoutRef } from 'react'

export default function Container(props: ComponentPropsWithoutRef<'main'>) {
	const { children, className } = props
	return (
		<main {...props} className={`container mx-auto max-w-7xl ${className}`}>
			{children}
		</main>
	)
};