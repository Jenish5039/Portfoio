import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InteractiveParticles from "@/components/InteractiveParticles";
import React from "react";

export const metadata = {
    title: "Jenish M | Software Engineer & AI Developer",
    description: "Portfolio of Jenish M - A motivated computer science graduate specializing in backend development with Python, FastAPI, and AI/ML. Open to entry-level software engineering opportunities.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <InteractiveParticles />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}