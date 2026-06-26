"use client";

import { motion } from "framer-motion";

export default function AnimatedFAQHero({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our programs, volunteering, and workspace.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-md"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl lg:text-2xl text-gray-300 font-medium"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
