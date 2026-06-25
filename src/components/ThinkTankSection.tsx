"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, ArrowRight, X } from "lucide-react";
import Image from "next/image";

export default function ThinkTankSection() {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="inline-block px-4 py-1.5 bg-cyc-yellow/20 text-yellow-700 font-bold rounded-full text-sm uppercase tracking-wider">
            Think Tank
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-cyc-navy tracking-tight leading-tight">
            Research & Innovation
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The CYC Think Tank is an initiative dedicated to exploring new ideas, developing policy recommendations, and researching solutions to community challenges. Join our network of young leaders and industry experts to shape the future.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 text-cyc-navy font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mt-4"
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </button>
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

      {/* Learn More Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white p-10 rounded-[2rem] shadow-2xl border border-gray-100"
            >
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-cyc-navy hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 bg-cyc-teal/10 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-cyc-teal" />
              </div>
              <h3 className="text-2xl font-black text-cyc-navy mb-4">Driving Change</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We actively involve youth in critical discussions on environmental sustainability, economic development, and civic engagement. Our think tank bridges the gap between young minds and seasoned professionals.
              </p>
              <ul className="space-y-3 font-medium text-gray-700 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyc-yellow"></div>
                  Policy Recommendations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyc-teal"></div>
                  Community Research
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Industry Partnerships
                </li>
              </ul>

              <a
                href="https://thinktank.thecyc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 px-8 py-4 bg-cyc-teal hover:bg-[#00cce6] text-cyc-navy font-bold rounded-xl hover:-translate-y-1 transition-all duration-300"
              >
                Visit the Think Tank
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
