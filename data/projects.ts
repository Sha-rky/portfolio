export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    content?: string;
    technologies?: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export const defaultProjects: Project[] = [
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

export const projects = defaultProjects;