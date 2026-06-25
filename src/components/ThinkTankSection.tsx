"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ThinkTankSection() {
  return (
    <section className="w-full bg-gray-50 py-24 px-6 lg:px-8 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-black text-cyc-navy tracking-tight leading-tight">
            CYC Think Tank
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A youth-led initiative dedicated to exploring new ideas, developing policy recommendations, and researching practical solutions to the challenges facing Canadian communities.
          </p>
          <a
            href="https://thinktank.thecyc.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-3 px-8 py-4 bg-white border border-gray-200 text-cyc-navy font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mt-4"
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100">
            <Image
              src="/new1.jpeg"
              alt="CYC Think Tank Panel Discussion"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
