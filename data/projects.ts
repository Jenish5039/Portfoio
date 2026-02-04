export interface IProject {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    featured: boolean;
}

export const projectsData: IProject[] = [
    {
        title: "Room Designing Application",
        description: "A full-stack application for room design visualization. Used FastAPI and SQLite for backend services, Docker and Linux for local system setup.",
        techStack: ["FastAPI", "SQLite", "Docker", "Linux"],
        githubUrl: "https://github.com/Jenish5039",
        featured: false,
    },
    {
        title: "Spinal Vision – CNN Stenosis Detection",
        description: "Deep learning project for classifying MRI images to detect spinal stenosis. Utilized ResNet50 with Grad-CAM and tuning methods for accurate diagnosis.",
        techStack: ["Python", "ResNet50", "Grad-CAM", "TensorFlow"],
        githubUrl: "https://github.com/Jenish5039",
        featured: true,
    },
    {
        title: "AI Powered Financial Advisor",
        description: "A Streamlit-based advisory tool using yfinance. Analyzes stock trends with RSI and SMA indicators to provide investment recommendations.",
        techStack: ["Python", "Streamlit", "yfinance", "RSI", "SMA"],
        githubUrl: "https://github.com/Jenish5039",
        featured: false,
    },
];
