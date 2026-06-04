"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { ArrowRight, BookOpen, Presentation, Users, Briefcase, Lightbulb, TrendingUp, ChevronDown } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-slate-950/85"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-start text-left max-w-3xl"
          >
            <motion.h1 variants={fadeUp} className="text-6xl lg:text-7xl text-white tracking-tighter leading-[1.05] mb-6 font-black drop-shadow-md">
              Our Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium tracking-tight leading-relaxed">
              The CYC offers a range of services for people of all ages, as we believe that anyone can find their purpose!
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-12 h-12 text-white/60" strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="w-full py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          
          {/* Educational Programs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 lg:order-1">
              <div className="w-12 h-1.5 bg-cyc-teal rounded-full mb-6"></div>
              <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight mb-6">
                Education & Internships
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Designed to support youth through every stage of their journey—offering foundational educational programs for high schoolers and hands-on internships for university students.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  { icon: BookOpen, text: "Virtual classroom learning" },
                  { icon: Presentation, text: "Guest speakers with extensive professional experience" },
                  { icon: Users, text: "Volunteering opportunities where they can apply learned skills!" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                    <div className="w-12 h-12 rounded-xl bg-cyc-teal/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-cyc-teal" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/high-school-program" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-cyc-navy text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:-translate-y-1">
                  High School Program
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/internship-program" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-cyc-teal/10 text-cyc-navy font-bold rounded-xl hover:bg-cyc-teal/20 transition-all duration-300 hover:-translate-y-1">
                  University Program
                </Link>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="order-1 lg:order-2 bg-cyc-teal/5 border border-cyc-teal/20 rounded-[2rem] p-12 lg:p-16 flex items-center justify-center min-h-[400px]">
              <div className="relative">
                <div className="absolute inset-0 bg-cyc-teal/20 blur-3xl rounded-full scale-150"></div>
                <BookOpen className="w-48 h-48 text-cyc-teal relative z-10 drop-shadow-xl" strokeWidth={1} />
              </div>
            </motion.div>
          </motion.div>


          {/* Innovation Hub */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={scaleIn} className="bg-cyc-yellow/5 border border-cyc-yellow/20 rounded-[2rem] p-12 lg:p-16 flex items-center justify-center min-h-[400px]">
              <div className="relative">
                <div className="absolute inset-0 bg-cyc-yellow/20 blur-3xl rounded-full scale-150"></div>
                <Lightbulb className="w-48 h-48 text-yellow-500 relative z-10 drop-shadow-xl" strokeWidth={1} />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="">
              <div className="w-12 h-1.5 bg-cyc-yellow rounded-full mb-6"></div>
              <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight mb-6">
                Innovation Hub
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Empowering aspiring and current business owners to launch and scale their ideas.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  { icon: Briefcase, text: "A professional working space" },
                  { icon: Users, text: "Professional mentorship and guidance from industry leaders" },
                  { icon: TrendingUp, text: "Access to investors and venture capital" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                    <div className="w-12 h-12 rounded-xl bg-cyc-yellow/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>

              <Link href="/startups-2026" className="inline-flex items-center gap-2 px-8 py-4 bg-cyc-navy text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:-translate-y-1">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
