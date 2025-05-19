"use client"
import Container from "./container";
import { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="bg-transparent border border-white/10 rounded-xl p-6 transition-all duration-300 h-full flex flex-col">
            <div className="bg-black/60 rounded-lg mb-4 overflow-hidden">
                {project.imageUrl ? (
                    <Image 
                        src={project.imageUrl} 
                        alt={project.title} 
                        width={800}
                        height={450}
                        className="w-full h-auto object-contain"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Project Image
                    </div>
                )}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            
            {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="font-mono px-2 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            {/* <div className="font-sans flex gap-4 mt-auto"> // TODO
                {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors">
                        GitHub
                    </Link>
                )}
                {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors">
                        Live Demo
                    </Link>
                )}
            </div> */}
        </div>
    );
};

export default function ProjectGrid() {
    const projects = [
        {
            id: "project-1",
            title: "News Recommender System",
            description: "A news recommender system based on the NRMS-BERT model, following the methodology presented in the paper arXiv:2104.07413.",
            imageUrl: "/tsne.png",
            technologies: ["PyTorch", "HuggingFace"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: "project-2",
            title: "Snake RL",
            description: "Using reinforcement learning to train on the Snake game.",
            imageUrl: "/snake.gif",
            technologies: ["PyTorch", "Pygame", "Gymnasium"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: "project-3",
            title: "Automation Bot",
            description: "Built an automation bot deployed on Azure, using Discord and Line APIs for job scraping, music playback.",
            imageUrl: "/chickpt.png",
            technologies: ["Selenium", "Discord.py", "Line-bot-sdk", "Azure"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: "project-4",
            title: "GraphRAG Chatbot for Podcast QA",
            description: "Trained a GraphRAG-based chatbot on the Gooaye(股癌) Podcast Transcripts to enable contextual Q&A, referencing arXiv:2404.16130.",
            imageUrl: "/graphrag.png",
            technologies: ["GraphRAG", "Selenium", "OpenAI API", "Whisper"],
            githubUrl: "#",
            liveUrl: "#"
        }
    ];

    return (
        <Container className="min-h-screen">
            <div className="space-y-12">
                <div className="font-pixel text-center">
                    <h2
                        className="text-4xl font-bold mb-4"
                        style={{
                            color: '#00eaff',
                            letterSpacing: '0.05em',
                            textShadow: '-2px -2px 0 #ff4f9a'
                        }}
                    >
                        Projects Showcase
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        Explore my latest work and personal projects
                    </p>
                </div>
                
                <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}