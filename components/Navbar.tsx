'use client'
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navlinks } from "@/data/navlinks";
import { INavLink } from "@/types";

// Smooth spring config
const smoothSpring = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 0.5,
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`fixed top-0 z-50 flex items-center justify-between w-full py-3 sm:py-4 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : 'bg-transparent'
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...smoothSpring, delay: 0.1 }}
            >
                <motion.a
                    href="/"
                    className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-[#0a0a0a]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <img
                        src="/logo.jpg"
                        alt="JM Logo"
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-cover"
                    />
                    <span className="hidden xs:inline">Jenish M</span>
                </motion.a>

                <div className="hidden md:flex items-center gap-8">
                    {navlinks.map((link: INavLink, index: number) => (
                        <motion.div
                            key={link.name}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ...smoothSpring, delay: 0.1 + index * 0.05 }}
                        >
                            <Link
                                href={link.href}
                                className="text-gray-600 hover:text-[#0a0a0a] transition text-sm font-medium animated-underline"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.a
                    href="#contact"
                    className="hidden md:block btn-primary text-sm py-2.5 px-5"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ...smoothSpring, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Hire Me
                </motion.a>

                <motion.button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-[#0a0a0a]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <MenuIcon size={26} />
                </motion.button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-100 bg-white flex flex-col items-center justify-center text-lg gap-6 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navlinks.map((link: INavLink, index: number) => (
                            <motion.div
                                key={link.name}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -30, opacity: 0 }}
                                transition={{ ...smoothSpring, delay: index * 0.05 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-medium text-[#0a0a0a] hover:text-gray-600 transition"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 size-12 flex items-center justify-center bg-[#0a0a0a] text-white rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={smoothSpring}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <XIcon size={24} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}