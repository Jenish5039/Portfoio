'use client'
import SectionTitle from "@/components/SectionTitle";
import { MailIcon, UserIcon, Phone, MapPin, Github, Linkedin, Send, CheckCircle, XCircle } from "lucide-react";
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

export default function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await emailjs.sendForm(
                'service_9nqmicm',
                'template_eu8poyj',
                formRef.current,
                'd9lEFxvX8DrNdF73A'
            );
            setSubmitStatus('success');
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: <MailIcon className="size-4 sm:size-5" />, label: "Email", value: "jenishlogesh@gmail.com", href: "mailto:jenishlogesh@gmail.com" },
        { icon: <Phone className="size-4 sm:size-5" />, label: "Phone", value: "+91 7904440223", href: "tel:+917904440223" },
        { icon: <MapPin className="size-4 sm:size-5" />, label: "Location", value: "Coimbatore, India", href: null },
    ];

    const socialLinks = [
        { icon: <Github className="size-4 sm:size-5" />, label: "GitHub", href: "https://github.com/Jenish5039" },
        { icon: <Linkedin className="size-4 sm:size-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/jenish-m-b225171a9/" },
    ];

    return (
        <div id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50/50">
            <SectionTitle text1="Contact" text2="Get in Touch" text3="Interested in collaborating? Let's connect and discuss opportunities." />

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                {/* Contact Info */}
                <motion.div
                    className="space-y-4 sm:space-y-6"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0a0a0a] mb-4 sm:mb-6">Contact Information</h3>

                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 sm:gap-4 group"
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.15, duration: 0.4 }}
                            whileHover={{ x: 5 }}
                        >
                            <motion.div
                                className="p-2.5 sm:p-3 rounded-lg bg-gray-100 text-[#0a0a0a] group-hover:bg-gray-200 transition-colors"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                            >
                                {info.icon}
                            </motion.div>
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm text-gray-400">{info.label}</p>
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        className="text-sm sm:text-base text-[#0a0a0a] hover:text-gray-600 transition animated-underline font-medium break-all"
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-sm sm:text-base text-[#0a0a0a] font-medium">{info.value}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        className="pt-4 sm:pt-6 border-t border-gray-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Connect with me</p>
                        <div className="flex gap-2 sm:gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 sm:p-3 rounded-lg bg-gray-100 text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition"
                                    aria-label={social.label}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-3 sm:space-y-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                    >
                        <label className="block text-xs sm:text-sm font-medium text-[#0a0a0a] mb-1.5 sm:mb-2">Your name</label>
                        <div className="flex items-center px-3 sm:px-4 rounded-xl border border-gray-200 bg-white focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                            <UserIcon className="size-4 sm:size-5 text-gray-400 flex-shrink-0" />
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Enter your name"
                                className="w-full p-2.5 sm:p-3 outline-none bg-transparent text-sm sm:text-base text-[#0a0a0a] placeholder:text-gray-400"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                    >
                        <label className="block text-xs sm:text-sm font-medium text-[#0a0a0a] mb-1.5 sm:mb-2">Email</label>
                        <div className="flex items-center px-3 sm:px-4 rounded-xl border border-gray-200 bg-white focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                            <MailIcon className="size-4 sm:size-5 text-gray-400 flex-shrink-0" />
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full p-2.5 sm:p-3 outline-none bg-transparent text-sm sm:text-base text-[#0a0a0a] placeholder:text-gray-400"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 }}
                    >
                        <label className="block text-xs sm:text-sm font-medium text-[#0a0a0a] mb-1.5 sm:mb-2">Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            placeholder="Enter your message"
                            className="resize-none w-full p-3 sm:p-4 outline-none rounded-xl border border-gray-200 bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all text-sm sm:text-base text-[#0a0a0a] placeholder:text-gray-400"
                        />
                    </motion.div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl"
                        >
                            <CheckCircle size={18} />
                            <span className="text-sm font-medium">Message sent successfully!</span>
                        </motion.div>
                    )}

                    {submitStatus === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl"
                        >
                            <XCircle size={18} />
                            <span className="text-sm font-medium">Failed to send. Please try again.</span>
                        </motion.div>
                    )}

                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-[#0a0a0a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium hover:bg-gray-800 transition group disabled:opacity-70 disabled:cursor-not-allowed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Send Message
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
}