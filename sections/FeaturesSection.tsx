'use client'
import SectionTitle from "@/components/SectionTitle";
import { motion } from "motion/react";
import { skillsData, ISkill } from "@/data/skills";

export default function SkillsSection() {
    return (
        <div id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Skills" text2="Core Competencies" text3="Technologies and tools I use to bring ideas to life." />
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
            >
                {skillsData.map((skill: ISkill, index: number) => (
                    <motion.div
                        key={index}
                        className="card hover-lift group p-5 sm:p-6"
                        initial={{ y: 60, opacity: 0, scale: 0.95 }}
                        whileInView={{ y: 0, opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                        }}
                    >
                        <motion.div
                            className="text-[#0a0a0a] mb-3 sm:mb-4"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            {skill.icon}
                        </motion.div>
                        <h3 className="text-base sm:text-lg font-semibold text-[#0a0a0a] mb-2">
                            {skill.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-3 sm:mb-4">
                            {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {skill.skills.map((s, i) => (
                                <motion.span
                                    key={i}
                                    className="text-xs bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-full group-hover:bg-gray-200 transition-colors"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.3 + i * 0.05 }}
                                >
                                    {s}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}