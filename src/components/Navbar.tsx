'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
        >
            <div className="glass-panel rounded-full px-8 py-4 flex items-center gap-8 shadow-2xl shadow-purple-900/10">
                <Link href="/" className="text-xl font-bold font-outfit tracking-tighter hover:text-purple-300 transition-colors">
                    SF.
                </Link>

                <ul className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-white/70 hover:text-white hover:neon-glow transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}
