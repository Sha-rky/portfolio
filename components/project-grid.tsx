import Container from "@/components/container";
import Card from "@/components/card";
import { Project, defaultProjects } from "@/data/projects";
import { projectGridVariants } from "@/components/variants/project-grid";

export interface ProjectGridProps {
	projects?: Project[];
}

export default function ProjectGrid({ projects = defaultProjects }: ProjectGridProps) {
	const { section, header, title, subtitle, grid } = projectGridVariants();

<<<<<<< HEAD
	return (
		<Container className="min-h-screen">
			<div className={section()}>
				<div className={header()}>
					<h2 className={title()}>Projects Showcase</h2>
					<p className={subtitle()}>Explore my latest work and personal projects</p>
				</div>
=======
const prefix = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export default function ProjectGrid() {
    const projects = [
        {
            id: "project-1",
            title: "News Recommender System",
            description: "A news recommender system based on the NRMS-BERT model, following the methodology presented in the paper arXiv:2104.07413.",
            imageUrl: `${prefix}/tsne.png`,
            technologies: ["PyTorch", "HuggingFace"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: "project-2",
            title: "Snake RL",
            description: "Using reinforcement learning to train on the Snake game.",
            imageUrl: `${prefix}/snake.gif`,
            technologies: ["PyTorch", "Pygame", "Gymnasium"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: "project-3",
            title: "Automation Bot",
            description: "Built an automation bot deployed on Azure, using Discord and Line APIs for job scraping, music playback.",
            imageUrl: `${prefix}/chickpt.png`,
            technologies: ["Selenium", "Discord.py", "Line-bot-sdk", "Azure"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: "project-4",
            title: "GraphRAG Chatbot for Podcast QA",
            description: "Trained a GraphRAG-based chatbot on the Gooaye(股癌) Podcast Transcripts to enable contextual Q&A, referencing arXiv:2404.16130.",
            imageUrl: `${prefix}/graphrag.png`,
            technologies: ["GraphRAG", "Selenium", "OpenAI API", "Whisper"],
            githubUrl: "#",
            liveUrl: "#"
        }
    ];
>>>>>>> 3f1045ed57181ec6fdbbb04d4d440f5419db5442

				<div id="projects-grid" className={grid()}>
					{projects.map((project) => (
						<Card key={project.id} project={project} />
					))}
				</div>
			</div>
		</Container>
	);
}
