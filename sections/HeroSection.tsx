'use client'
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "motion/react";

// Smooth spring animations
const smoothSpring = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 0.5,
};

export default function HeroSection() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden pt-20 pb-10 md:pt-0 md:pb-0">

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
                {/* Main Headline */}
                <motion.h1
                    className="hero-title text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0a0a0a] mb-4 sm:mb-6"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontFamily: 'var(--font-outfit)', letterSpacing: '-0.03em' }}
                >
                    Hi, I'm Jenish M
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto font-light px-4 sm:px-0"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    style={{ lineHeight: 1.5 }}
                >
                    Freelance Backend Developer | Building APIs, AI Solutions & Web Applications
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <motion.a
                        href="#projects"
                        className="btn-primary w-full sm:w-auto text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        href="/Portfoio/JENISH_cr.pdf"
                        download
                        className="btn-secondary w-full sm:w-auto justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Download size={18} />
                        Download CV
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn-secondary w-full sm:w-auto justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Mail size={18} />
                        Contact Me
                    </motion.a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    className="flex items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-16"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                >
                    {[
                        { icon: Github, href: "https://github.com/Jenish5039", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/jenish-m-b225171a9/", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:jenishlogesh@gmail.com", label: "Email" },
                    ].map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target={social.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-[#0a0a0a] hover:text-gray-600 transition-colors p-2.5 sm:p-3 rounded-full border border-gray-200 hover:border-gray-400 bg-white shadow-sm icon-bounce"
                            whileHover={{ y: -3, scale: 1.05 }}
                            aria-label={social.label}
                        >
                            <social.icon size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}