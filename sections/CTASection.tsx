'use client'
import { motion } from "motion/react";
import { Download, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
    return (
        <motion.div
            className="max-w-5xl mx-4 sm:mx-6 md:mx-auto my-16 sm:my-20 md:my-24 py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-20 text-center rounded-2xl sm:rounded-[2.5rem] relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50 border border-gray-200"
            initial={{ y: 50, opacity: 0, scale: 0.98 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Subtle gradient orbs */}
            <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gray-200/50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gray-300/50 rounded-full blur-3xl" />

            {/* Floating decorative elements - hidden on mobile */}
            <motion.div
                className="hidden sm:block absolute top-8 left-12 w-3 h-3 bg-gray-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="hidden sm:block absolute top-16 right-16 w-2 h-2 bg-gray-500 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="hidden sm:block absolute bottom-12 left-20 w-2 h-2 bg-gray-400 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
                {/* Badge */}
                <motion.div
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100 border border-gray-200 mb-6 sm:mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <Sparkles size={14} className="sm:w-4 sm:h-4 text-gray-600" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Available for new projects</span>
                </motion.div>

                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0a0a0a] mb-4 sm:mb-6"
                    style={{ fontFamily: 'var(--font-outfit)', letterSpacing: '-0.02em' }}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Let's Work Together
                </motion.h2>
                <motion.p
                    className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-lg mx-auto leading-relaxed px-4 sm:px-0"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Ready to build your next project? I offer custom API development, AI/ML solutions, and web applications.
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.a
                        href="#contact"
                        className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#0a0a0a] text-white rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10"
                        whileHover={{ scale: 1.03, y: -3, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                        Hire Me
                        <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                        href="/Portfoio/JENISH_cr.pdf"
                        download
                        className="px-6 sm:px-8 py-3 sm:py-4 text-gray-700 bg-white border border-gray-200 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:border-gray-300 hover:bg-gray-50 transition"
                        whileHover={{ scale: 1.03, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                        Download CV
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    );
}