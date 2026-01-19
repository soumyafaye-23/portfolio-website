'use client';

import SplineScene from '@/components/SplineScene';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import TechMarquee from '@/components/TechMarquee';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <SplineScene />

        {/* Content Overlay */}

      </section>


      {/* Scrollable Content */}
      <div className="relative z-20 bg-black">
        <TechMarquee />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </div>
    </main>
  );
}
