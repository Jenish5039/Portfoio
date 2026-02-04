'use client'
import { footerData } from "@/data/footer";
import { GithubIcon, LinkedinIcon, MailIcon, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { IFooterLink } from "@/types";

export default function Footer() {
    return (
        <motion.footer
            className="border-t border-gray-100 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
        >
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap justify-between gap-8 sm:gap-10 md:gap-12">
                <motion.div
                    className="space-y-3 sm:space-y-4 text-center sm:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2
                        className="text-lg sm:text-xl font-bold text-[#0a0a0a]"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                        whileHover={{ scale: 1.02 }}
                    >
                        Jenish M
                    </motion.h2>
                    <p className="text-gray-500 text-xs sm:text-sm max-w-xs mx-auto sm:mx-0">
                        Backend Developer building scalable APIs with Python & FastAPI
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                        {[
                            { icon: GithubIcon, href: "https://github.com/Jenish5039", label: "GitHub" },
                            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/jenish-m-b225171a9/", label: "LinkedIn" },
                            { icon: MailIcon, href: "mailto:jenishlogesh@gmail.com", label: "Email" },
                        ].map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#0a0a0a] transition"
                                aria-label={social.label}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ y: -3, scale: 1.2 }}
                            >
                                <social.icon className="size-4 sm:size-5" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <div className="flex flex-wrap justify-center sm:justify-end gap-8 sm:gap-10 md:gap-12">
                    {footerData.map((section, index) => (
                        <motion.div
                            key={index}
                            className="text-center sm:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <p className="font-semibold text-[#0a0a0a] text-xs sm:text-sm mb-3 sm:mb-4">{section.title}</p>
                            <ul className="space-y-2 sm:space-y-3">
                                {section.links.map((link: IFooterLink, linkIndex: number) => (
                                    <motion.li
                                        key={linkIndex}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-gray-500 hover:text-[#0a0a0a] text-xs sm:text-sm transition animated-underline"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                className="max-w-6xl mx-auto mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-100 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
            >
                <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-1">
                    &copy; {new Date().getFullYear()} Jenish M. Made with
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        <Heart size={12} className="sm:w-[14px] sm:h-[14px] fill-red-500 text-red-500" />
                    </motion.span>
                </p>
            </motion.div>
        </motion.footer>
    );
}