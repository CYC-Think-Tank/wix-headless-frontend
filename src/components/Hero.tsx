"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatedCounter } from "@/components/Statistics";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden">

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/85"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">

        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-2xl"
        >
          {/* Headline */}
          <h1 className="text-6xl lg:text-7xl text-white tracking-tighter leading-[1.05] mb-6 font-black drop-shadow-md">
            We help young Canadians
            <br />
            <span className="text-cyc-yellow inline-block hover:scale-105 transition-transform cursor-default">shape their future.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium tracking-tight leading-relaxed">
            CYC has helped thousands of Canadian teens maximize their potential by inviting industry experts and uniting passionate students to make an impact.
          </p>

          {/* Social Proof / Statistics Inline */}
          <div className="w-full border-y-2 border-cyc-teal/50 py-6 mb-12 flex flex-row items-center justify-between gap-4">

            <div className="flex flex-col items-start">
              <div className="text-3xl lg:text-4xl font-black text-white tracking-tighter mb-1">
                <AnimatedCounter value={200} suffix="+" />
              </div>
              <div className="text-xs lg:text-sm text-gray-300 font-medium">high schools</div>
            </div>

            <div className="w-px h-12 bg-white/20"></div>

            <div className="flex flex-col items-start">
              <div className="text-3xl lg:text-4xl font-black text-white tracking-tighter mb-1">
                <AnimatedCounter value={12000} suffix="+" />
              </div>
              <div className="text-xs lg:text-sm text-gray-300 font-medium">program alumni</div>
            </div>

            <div className="w-px h-12 bg-white/20"></div>

            <div className="flex flex-col items-start">
              <div className="text-3xl lg:text-4xl font-black text-white tracking-tighter mb-1">
                <AnimatedCounter value={1.8} prefix="$" suffix="M+" decimals={1} />
              </div>
              <div className="text-xs lg:text-sm text-gray-300 font-medium leading-tight whitespace-nowrap">in scholarships and opportunities</div>
            </div>

          </div>

          {/* CTA */}
          <div className="flex flex-col items-start mt-4">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-cyc-teal hover:bg-[#00cce6] text-cyc-navy font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:-translate-y-1 transition-all duration-300">
              Register Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-300 font-medium mt-4 ml-2">
              Join a community of driven youth.
            </span>
          </div>

        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 z-20"
      >
        <ChevronDown className="w-10 h-10" />
      </motion.div>
    </section>
  );
}
