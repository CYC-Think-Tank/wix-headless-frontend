"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* About Us (Left Column) */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy mb-6 tracking-tight leading-tight">
            About Us
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              We help young Canadians find their passions and give them an opportunity to reach their fullest potential. More than ever, youth are driving the change of society, and it is crucial to nurture their interests and provide them with the confidence to make positive changes.
            </p>
            <p>
              Through various events, initiatives, and programs, we allow them to explore a variety of different and unique experiences that will help them grow personally and professionally.
            </p>
          </div>
        </motion.div>

        {/* Photo (Right Column) */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,37,64,0.15)] border border-gray-100 bg-gray-50"
        >
          <Image
            src="/new2.jpeg"
            alt="CYC Community Event Group Photo"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </motion.div>

      </div>
    </section>
  );
}
