"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { Clock, Award, Users, BookOpen, ChevronDown } from "lucide-react";
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

export default function VolunteerHoursPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/youthevent.jpg')" }}
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
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-cyc-teal/20 text-cyc-teal font-bold rounded-full text-sm uppercase tracking-wider mb-8">
              <Clock className="w-4 h-4" />
              Give Back, Get Rewarded
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl text-white tracking-tighter leading-[1.05] mb-6 font-black drop-shadow-md">
              Earn Volunteer Hours
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl lg:text-2xl text-gray-300 mb-8 font-medium tracking-tight leading-relaxed">
              Make an impact in your community while fulfilling your high school volunteer and service hour requirements.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/register" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyc-teal hover:bg-teal-500 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1">
                Join CYC Today
              </Link>
            </motion.div>
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
      <section className="w-full py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">Ways to Earn Hours</h2>
            <p className="text-gray-500 mt-6 text-xl leading-relaxed">
              Whether you are a general member, a judge, or looking for IB CAS hours, CYC offers multiple pathways to achieve your goals.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* General Members */}
            <motion.div variants={scaleIn} className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-cyc-teal/10 rounded-2xl flex items-center justify-center mb-8">
                <Clock className="w-8 h-8 text-cyc-teal" />
              </div>
              <h3 className="font-black text-3xl text-cyc-navy mb-4">Up to 20 Hours</h3>
              <h4 className="font-bold text-xl text-gray-800 mb-4">General Members</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Earn service hours through our 2-hour bi-weekly sessions on Saturdays and the 4-hour final competition at the end of the term.
              </p>
            </motion.div>

            {/* Judges */}
            <motion.div variants={scaleIn} className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-cyc-yellow/20 rounded-2xl flex items-center justify-center mb-8">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-black text-3xl text-cyc-navy mb-4">4 Hours</h3>
              <h4 className="font-bold text-xl text-gray-800 mb-4">Competition Judges</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our program provides 4 service hours for non-participating students who volunteer to judge the final competitions where students present their work.
              </p>
            </motion.div>

            {/* Leadership */}
            <motion.div variants={scaleIn} className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-black text-3xl text-cyc-navy mb-4">Leadership Progression</h3>
              <h4 className="font-bold text-xl text-gray-800 mb-4">Team Leads & Executives</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                After participating in one term, you’re able to return as a team lead and subsequently a program executive in following semesters, earning even more hours and leadership experience.
              </p>
            </motion.div>

            {/* IB Program */}
            <motion.div variants={scaleIn} className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-black text-3xl text-cyc-navy mb-4">CAS Hours</h3>
              <h4 className="font-bold text-xl text-gray-800 mb-4">IB Students</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                For students in the IB program, your project can count towards CAS (Creativity, Activity, Service) hours, assuming approval from your school or relevant program advisors.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
