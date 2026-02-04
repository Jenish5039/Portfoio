'use client'
import { SectionTitleProps } from "@/types";
import { motion } from "motion/react";

export default function SectionTitle({ text1, text2, text3 }: SectionTitleProps) {
    return (
        <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
        >
            <motion.p
                className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest mb-3 sm:mb-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
            >
                {text1}
            </motion.p>
            <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-3 sm:mb-4"
                style={{ fontFamily: 'var(--font-outfit)', letterSpacing: '-0.02em' }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {text2}
            </motion.h2>
            <motion.p
                className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base md:text-lg"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {text3}
            </motion.p>
        </motion.div>
    );
}