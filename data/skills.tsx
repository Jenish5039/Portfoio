import React from "react";
import { Code2, Server, Wrench } from "lucide-react";

export interface ISkill {
    icon: React.ReactNode;
    title: string;
    description: string;
    skills: string[];
}

export const skillsData: ISkill[] = [
    {
        icon: <Code2 className="size-8 text-[#0a0a0a]" strokeWidth={1.5} />,
        title: "Programming",
        description: "Core programming languages for building robust applications.",
        skills: ["Python", "SQL", "JavaScript"],
    },
    {
        icon: <Server className="size-8 text-[#0a0a0a]" strokeWidth={1.5} />,
        title: "Backend / Web",
        description: "Frameworks and technologies for web and API development.",
        skills: ["FastAPI", "React Native", "HTML/CSS"],
    },
    {
        icon: <Wrench className="size-8 text-[#0a0a0a]" strokeWidth={1.5} />,
        title: "Tools / OS",
        description: "Development tools and operating systems I work with.",
        skills: ["SQLite", "Docker", "Git", "Bash", "Linux", "Mac", "Windows"],
    },
];
