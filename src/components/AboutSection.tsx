'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-black relative py-20">
            <div className="container mx-auto px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center flex flex-col items-center"
                >
                    {/* Profile Image with Glow */}
                    <div className="relative w-48 h-48 mb-10 rounded-full p-1 bg-gradient-to-r from-purple-500 to-pink-500">
                        <div className="absolute inset-0 rounded-full bg-purple-500 blur-md opacity-50 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black">
                            <Image
                                src="/images/soumya-profile.png"
                                alt="Soumya Faye"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-8 font-outfit text-white">
                        Beyond the <span className="text-purple-400">Pixels</span>
                    </h2>

                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-light">
                        I am a passionate designer and developer with a knack for creating visually stunning and highly functional websites.
                        My work sits at the intersection of <span className="text-white font-medium">artistic direction</span> and <span className="text-white font-medium">engineering precision</span>.
                    </p>

                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        Whether it's a 3D interactive experience or a robust enterprise application, I bring a unique perspective that ensures
                        the final product is not just usable, but memorable.
                    </p>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            </div>
        </section>
    );
}
