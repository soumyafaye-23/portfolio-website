import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Soumya Faye | Designer & Developer',
  description: 'Portfolio of Soumya Faye - Bridging the gap between design and code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
        <SmoothScroll />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
