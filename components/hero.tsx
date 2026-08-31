import Container from "@/components/container";
import HeroGlitchTitle from "@/components/hero-glitch-title";
import TextScramble from "@/components/text-scramble";
import { heroVariants } from "@/components/variants/hero";

const ROLES = ["ML Engineer", "Web Developer", "Python Developer", "Cursor user"];

export default function Hero() {
	const { section, intro, role, scramble } = heroVariants();

	return (
		<Container className={section()}>
			<div>
				<p className={intro()}>My name is</p>

				<HeroGlitchTitle text="Ryan Luo" />

				<p className={role()}>
					I am a&nbsp;
					<TextScramble words={ROLES} className={scramble()} />
				</p>
			</div>
		</Container>
	);
}
