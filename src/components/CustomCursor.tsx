'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsHovering(true);
        const handleMouseUp = () => setIsHovering(false);

        // Add magnetic effect to specific elements
        const handleLinkHover = () => setIsHovering(true);
        const handleLinkLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Attach to all interactive elements
        const updateListeners = () => {
            const clickables = document.querySelectorAll('a, button, input, .clickable');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', handleLinkHover);
                el.addEventListener('mouseleave', handleLinkLeave);
            });
        };

        updateListeners();

        // Mutation observer to handle dynamically added elements
        const observer = new MutationObserver(updateListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            observer.disconnect();
        };
    }, [cursorX, cursorY, isVisible]);

    if (typeof window !== 'undefined' && window.innerWidth < 768) return null; // Hide on mobile

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[100]"
            style={{
                x: cursorX,
                y: cursorY,
                opacity: isVisible ? 1 : 0
            }}
        >
            <motion.div
                animate={{
                    scale: isHovering ? 0.9 : 1,
                    rotate: isHovering ? -15 : 0
                }}
                transition={{ duration: 0.2 }}
            >
                {/* Metallic Arrow SVG */}
                <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
                >
                    <defs>
                        <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="30%" stopColor="#e0e0e0" />
                            <stop offset="50%" stopColor="#8a8a8a" />
                            <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M2 2L10.5 29L15.5 18L26.5 29.5L29.5 26.5L18 15.5L29 10.5L2 2Z"
                        fill="url(#metal-gradient)"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </motion.div>
    );
}
