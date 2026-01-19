'use client';

import { motion } from 'framer-motion';

const technologies = [
    'React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Spline', 'Three.js', 'Node.js', 'Figma', 'Stripe'
];

export default function TechMarquee() {
    return (
        <div className="w-full py-10 bg-black overflow-hidden relative z-10">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear"
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-6xl font-black text-transparent stroke-text font-outfit uppercase opacity-30 hover:opacity-100 transition-opacity duration-300 select-none"
                            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop */}
                <motion.div
                    className="flex gap-16 items-center pl-16"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear"
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <span
                            key={`dup-${index}`}
                            className="text-4xl md:text-6xl font-black text-transparent stroke-text font-outfit uppercase opacity-30 hover:opacity-100 transition-opacity duration-300 select-none"
                            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
