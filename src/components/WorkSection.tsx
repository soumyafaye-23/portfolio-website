'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: 'Neon Ecommerce',
        category: 'Next.js / Stripe',
        description: 'A futuristic shopping experience with 3D product previews.',
        image: '/images/neon-ecommerce.png',
    },
    {
        title: 'Fintech Dashboard',
        category: 'React / D3.js',
        description: 'Real-time financial data visualization platform.',
        image: '/images/fintech-dashboard.png',
    },
    {
        title: 'AI Chat Interface',
        category: 'TypeScript / OpenAI',
        description: 'Minimalist chat UI with generative AI capabilities.',
        image: '/images/ai-chat.png',
    },
];

export default function WorkSection() {
    return (
        <section id="work" className="min-h-screen py-20 bg-black">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 font-outfit text-white"
                >
                    Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Works</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
                        >
                            <div className="h-48 w-full overflow-hidden relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="p-6">
                                <div className="text-xs font-mono text-purple-300 mb-2">{project.category}</div>
                                <h3 className="text-2xl font-bold mb-2 font-outfit">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6">{project.description}</p>

                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 text-sm text-white hover:text-purple-400 transition-colors">
                                        <Github size={16} /> Code
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-white hover:text-purple-400 transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
