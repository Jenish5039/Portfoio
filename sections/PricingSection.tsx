'use client'
import SectionTitle from "@/components/SectionTitle"
import { projectsData, IProject } from "@/data/projects";
import { Github, ArrowUpRight, Star } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectsSection() {
    return (
        <div id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Projects" text2="What I've Built" text3="Real-world applications showcasing my skills in backend development, AI, and full-stack solutions." />

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
            >
                {projectsData.map((project: IProject, index: number) => (
                    <motion.div
                        key={index}
                        className={`card hover-lift flex flex-col group p-4 sm:p-6 ${project.featured ? 'border-2 border-gray-300 bg-gradient-to-br from-gray-50/50 to-white' : ''}`}
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{
                            y: -12,
                            scale: 1.02,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                        }}
                    >
                        {project.featured && (
                            <motion.span
                                className="inline-flex items-center gap-1 sm:gap-1.5 text-xs font-medium text-[#0a0a0a] uppercase tracking-wider mb-2 sm:mb-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.3 }}
                            >
                                <Star size={12} className="sm:w-[14px] sm:h-[14px] fill-gray-600" />
                                Featured Project
                            </motion.span>
                        )}
                        <h3 className="font-semibold text-base sm:text-lg text-[#0a0a0a] mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                            {project.description}
                        </p>

                        <div className="space-y-3 sm:space-y-4">
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">Tech Stack</p>
                                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                    {project.techStack.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            className="text-xs bg-gray-100 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded group-hover:bg-gray-200 transition-colors"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: 0.4 + i * 0.05 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="w-full py-2 sm:py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 bg-[#0a0a0a] text-white text-xs sm:text-sm hover:bg-gray-800 transition group/btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Github size={14} className="sm:w-4 sm:h-4" />
                                View on GitHub
                                <ArrowUpRight size={12} className="sm:w-[14px] sm:h-[14px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}