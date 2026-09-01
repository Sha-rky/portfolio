import Container from "@/components/ui/container";
import GlitchText from "@/components/effects/glitch-text";
import ScrambleText from "@/components/effects/scramble-text";
import { heroVariants } from "@/components/sections/hero.variants";

const ROLES = ["ML Engineer", "Web Developer", "Python Developer", "Cursor user"];

export default function Hero() {
	const { section, intro, title, role, scramble } = heroVariants();

	return (
		<Container className={section()}>
			<div>
				<p className={intro()}>My name is</p>

				<h1>
					<GlitchText text="Ryan Luo" className={title()} />
				</h1>

				<p className={role()}>
					I am a&nbsp;
					<ScrambleText words={ROLES} className={scramble()} />
				</p>
			</div>
		</Container>
	);
}
