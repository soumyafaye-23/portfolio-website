'use client';

import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="min-h-[50vh] py-20 bg-gradient-to-t from-purple-900/10 to-black flex flex-col items-center justify-center">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-8 font-outfit"
                >
                    Let's create something <br />
                    <span className="text-gradient neon-glow">Exceptional</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 mb-12 max-w-lg mx-auto"
                >
                    Ready to elevate your digital presence? I'm currently available for freelance projects and collaborations.
                </motion.p>

                <motion.a
                    href="mailto:hello@soumyafaye.dev"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors mb-16"
                >
                    <Mail /> Get in Touch
                </motion.a>

                <div className="flex justify-center gap-8">
                    {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            whileHover={{ y: -5, color: '#a855f7' }}
                            className="text-gray-500 transition-colors"
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </div>

                <footer className="mt-20 text-gray-600 text-sm">
                    © {new Date().getFullYear()} Soumya Faye. All rights reserved.
                </footer>
            </div>
        </section>
    );
}
