'use client'
import SectionTitle from "@/components/SectionTitle";
import { experienceData, IExperience } from "@/data/experience";
import { GraduationCap, Briefcase, FileText, MapPin, Calendar } from "lucide-react";
import { motion } from "motion/react";

const getIcon = (type: string) => {
    switch (type) {
        case "service":
            return <Briefcase className="size-4 sm:size-5" />;
        case "certification":
            return <GraduationCap className="size-4 sm:size-5" />;
        case "project":
            return <FileText className="size-4 sm:size-5" />;
        default:
            return <Briefcase className="size-4 sm:size-5" />;
    }
};

const getTypeLabel = (type: string) => {
    switch (type) {
        case "service":
            return "Service";
        case "certification":
            return "Certification";
        case "project":
            return "Project";
        default:
            return type;
    }
};

export default function ExperienceSection() {
    return (
        <div id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50/50">
            <SectionTitle text1="Experience" text2="My Journey" text3="Education, work experience, and achievements that shaped my career." />

            <motion.div
                className="max-w-3xl mx-auto space-y-4 sm:space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
            >
                {experienceData.map((exp: IExperience, index: number) => (
                    <motion.div
                        key={index}
                        className={`card hover-lift group p-4 sm:p-6 ${exp.type === 'project' ? 'border-l-4 border-l-[#0a0a0a]' : ''}`}
                        initial={{ x: -60, opacity: 0, scale: 0.95 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        whileHover={{
                            x: 10,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                        }}
                    >
                        <div className="flex flex-wrap items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <motion.div
                                className="p-2 sm:p-2.5 rounded-lg bg-gray-100 text-[#0a0a0a] group-hover:bg-gray-200 transition-colors"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                            >
                                {getIcon(exp.type)}
                            </motion.div>
                            <div className="flex-1 min-w-0">
                                <motion.span
                                    className="text-xs text-gray-500 uppercase tracking-wider font-medium"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {getTypeLabel(exp.type)}
                                </motion.span>
                                <h3 className="text-base sm:text-lg font-semibold text-[#0a0a0a] mt-1 break-words">{exp.title}</h3>
                                <p className="text-gray-500 text-sm sm:text-base">{exp.organization}</p>
                            </div>
                        </div>

                        <motion.div
                            className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="flex items-center gap-1 sm:gap-1.5">
                                <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                                {exp.date}
                            </span>
                            {exp.location && (
                                <span className="flex items-center gap-1 sm:gap-1.5">
                                    <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
                                    {exp.location}
                                </span>
                            )}
                        </motion.div>

                        <ul className="space-y-1.5 sm:space-y-2">
                            {exp.description.map((desc, i) => (
                                <motion.li
                                    key={i}
                                    className="text-gray-600 text-xs sm:text-sm flex items-start gap-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <span className="text-gray-400 mt-0.5">•</span>
                                    {desc}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}