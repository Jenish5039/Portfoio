import { IPricing } from "@/types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 500,
        period: "project",
        features: [
            "Simple API development",
            "Up to 5 endpoints",
            "Basic documentation",
            "1 revision round",
            "3 days delivery"
        ],
        mostPopular: false
    },
    {
        name: "Standard",
        price: 1500,
        period: "project",
        features: [
            "Full REST API development",
            "Up to 15 endpoints",
            "Database design & setup",
            "Complete documentation",
            "3 revision rounds",
            "7 days delivery",
            "1 week post-delivery support"
        ],
        mostPopular: true
    },
    {
        name: "Premium",
        price: 3000,
        period: "project",
        features: [
            "Complex API + AI/ML integration",
            "Unlimited endpoints",
            "Advanced database architecture",
            "Docker deployment setup",
            "Unlimited revisions",
            "14 days delivery",
            "1 month post-delivery support"
        ],
        mostPopular: false
    }
];