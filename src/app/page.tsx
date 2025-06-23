/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-[var(--background)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/[0.1] to-[var(--accent)]/[0.1] pointer-events-none" />
        <div className="container px-4 sm:px-6 relative z-10 max-w-full">
          <motion.div
            className="flex flex-col items-center space-y-6 text-center"
            {...fadeIn}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-poppins bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              NET FUNNEL TEST
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
              <Link
                href="/docs"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-[var(--primary-foreground)] shadow-lg hover:bg-[var(--primary)]/[0.9] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                START
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
