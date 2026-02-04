export interface IExperience {
    type: "service" | "certification" | "project";
    title: string;
    organization: string;
    location?: string;
    date: string;
    description: string[];
}

export const experienceData: IExperience[] = [
    {
        type: "service",
        title: "API Development",
        organization: "Freelance Services",
        date: "Available Now",
        description: [
            "Custom REST API development with Python & FastAPI",
            "Database design, authentication, and deployment",
        ],
    },
    {
        type: "service",
        title: "AI/ML Solutions",
        organization: "Freelance Services",
        date: "Available Now",
        description: [
            "Machine learning model development and integration",
            "Computer vision, NLP, and predictive analytics",
        ],
    },
    {
        type: "service",
        title: "Web Application Backend",
        organization: "Freelance Services",
        date: "Available Now",
        description: [
            "Full-stack backend development for web apps",
            "Docker deployment, CI/CD setup, and cloud hosting",
        ],
    },
];
