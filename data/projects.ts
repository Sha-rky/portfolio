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

export const projects: Project[] = [
    {
        id: "project-1",
        title: "專案一",
        description: "這是專案一的描述。您可以在此加入更多詳細資訊。",
        imageUrl: "/images/projects/project1.jpg",
        content: "專案一的詳細內容...",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/yourusername/project1",
        liveUrl: "https://project1.com"
    },
    {
        id: "project-2",
        title: "專案二",
        description: "這是專案二的描述。您可以在此加入更多詳細資訊。",
        imageUrl: "/images/projects/project2.jpg",
        content: "專案二的詳細內容...",
        technologies: ["Next.js", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/yourusername/project2",
        liveUrl: "https://project2.com"
    }
    // 您可以繼續添加更多專案...
]; 