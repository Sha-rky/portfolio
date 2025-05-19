import HeroGlitchTitle from "./fragments/hero-glitch-title";
import HeroScrambleText from "./fragments/ScrambleText";
import Container from "./container";
export default function Hero() {
    return (
        <Container className="font-cyberpunk h-screen flex flex-col justify-center">
            <div>
                <p className="text-zinc-500 text-5xl mb-8 font-light">
                    My name is
                </p>
                <HeroGlitchTitle text="Ryan Luo"/>
                <p className="text-zinc-500 text-5xl mt-8 font-light">
                    I am a&nbsp;
                    <HeroScrambleText words={[
                        'ML Engineer',
                        'Web Developer',
                        'Python Developer',
                        'Cursor user',
                    ]} className="text-pink-500"/>
                </p>

            </div>
        </Container>
    );
}