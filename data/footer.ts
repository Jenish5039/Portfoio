import { IFooter } from "@/types";

export const footerData: IFooter[] = [
    {
        title: "Navigation",
        links: [
            { name: "Home", href: "/" },
            { name: "Skills", href: "/#skills" },
            { name: "Projects", href: "/#projects" },
            { name: "Experience", href: "/#experience" },
        ]
    },
    {
        title: "Projects",
        links: [
            { name: "Spinal Vision", href: "https://github.com/jenishM" },
            { name: "Room Designer", href: "https://github.com/jenishM" },
            { name: "AI Advisor", href: "https://github.com/jenishM" },
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Email", href: "mailto:jenishlogesh@gmail.com" },
            { name: "LinkedIn", href: "https://linkedin.com/in/jenishM" },
            { name: "GitHub", href: "https://github.com/jenishM" },
        ]
    }
];