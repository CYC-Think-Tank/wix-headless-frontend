"use client";

import { motion } from "framer-motion";

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
          <div className="inline-block px-4 py-1.5 bg-cyc-teal/10 text-cyc-teal font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
            Who We Are
          </div>
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

        {/* Our Mission (Right Column) */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-cyc-navy rounded-3xl p-10 lg:p-12 shadow-[0_20px_50px_rgba(10,37,64,0.15)] relative overflow-hidden"
        >
          {/* Decorative background glow inside the card */}
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-cyc-teal/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-cyc-teal rounded-2xl flex items-center justify-center mb-8 shadow-lg text-cyc-navy">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">
              Our Mission and Vision
            </h2>
            <p className="text-xl text-blue-50/90 leading-relaxed font-medium">
              Our mission is to help youth find their purpose, passions & place in our community through learning opportunities & experiences. We believe that everyone can make a difference in our community!
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
