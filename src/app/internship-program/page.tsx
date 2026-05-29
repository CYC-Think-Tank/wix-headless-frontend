"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, Building, Star, Target, ChevronDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const expand: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 80 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", staggerChildren: 0.15 }
  },
};

export default function InternshipProgramPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/internship.jpg')" }}
        >
          <div className="absolute inset-0 bg-slate-950/85"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <motion.h1 variants={fadeUp} className="text-6xl lg:text-7xl text-white tracking-tighter leading-[1.05] mb-6 font-black drop-shadow-md">
              Internship<br />Program
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium tracking-tight leading-relaxed">
              Gain hands-on experience, develop the CYC program, and learn directly from leaders in the private and public sectors.
            </motion.p>
            <motion.a variants={fadeUp} href="/register" className="flex items-center justify-center gap-3 px-8 py-4 bg-cyc-teal hover:bg-[#00cce6] text-cyc-navy font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:-translate-y-1 transition-all duration-300">
              Apply Formal Request
              <ArrowRight className="w-5 h-5" />
            </motion.a>
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

      {/* Main Content */}
      <section className="w-full py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px", amount: 0.3 }}
            variants={expand}
            className="grid grid-cols-1 md:grid-cols-12 gap-16"
          >
            <motion.div variants={fadeUp} className="md:col-span-4">
              <div className="sticky top-32">
                <div className="w-10 h-1.5 bg-cyc-teal rounded-full mb-5"></div>
                <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">About the Internship</h2>
                <p className="text-gray-500 mt-5 pr-8 text-lg leading-relaxed">
                  All CYC members are automatically considered for an internship position, but external applicants must apply formally.
                </p>
              </div>
            </motion.div>
            <motion.div variants={stagger} className="md:col-span-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <motion.p variants={fadeUp}>
                The CYC Internship Program runs seasonally. Interns work to develop the CYC program for high school students and create new project concepts and program materials. 
              </motion.p>
              <motion.p variants={fadeUp}>
                In addition, interns can work directly with CYC’s affiliated companies to get hands-on, real-world experience in running a real business with over 150 employees. This direct business involvement provides a critical bridge between academic learning and career readiness.
              </motion.p>
              <motion.div variants={scaleIn} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mt-8 shadow-sm">
                <h3 className="font-bold text-cyc-navy text-xl mb-4 flex items-center gap-3">
                  <Star className="w-6 h-6 text-cyc-teal" />
                  Personal Reflection Journey
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Through this program, interns choose from a variety of diverse options for community involvement. They participate in leadership panels with private sector, public sector, and non-profit leaders. Through this mentorship, strength-finding exercises, and a personal reflection journey, students learn directly from experts in business, government, and community groups.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Key Responsibilities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px", amount: 0.3 }}
            variants={expand}
            className="flex flex-col gap-16"
          >
            <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto flex flex-col items-center">
              <div className="w-10 h-1.5 bg-cyc-yellow rounded-full mb-5"></div>
              <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">What You Will Do</h2>
              <p className="text-gray-500 mt-5 text-lg leading-relaxed">
                Take on real responsibilities and make a tangible impact in our community.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
              {[
                { Icon: Target, title: "Program Development", desc: "Work to develop the CYC program for high school students, creating engaging content.", color: "bg-cyc-teal/10 text-cyc-teal" },
                { Icon: Building, title: "Business Operations", desc: "Work with CYC’s affiliated companies and learn hands-on experience in running a real business.", color: "bg-cyc-yellow/20 text-yellow-600" },
                { Icon: GraduationCap, title: "Learn & Grow", desc: "Participate in leadership panels and strength-finding exercises with industry experts.", color: "bg-blue-50 text-blue-600" },
              ].map((role, i) => (
                <motion.div key={i} variants={scaleIn} className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 rounded-[2rem] p-10 relative z-0 hover:z-10 hover:scale-[1.15] hover:-translate-y-4 hover:shadow-[0_40px_70px_rgb(0,0,0,0.15)] transition-all duration-400 ease-out group cursor-default">
                  <div className={`w-16 h-16 ${role.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-125 transition-transform duration-400 ease-out`}>
                    <role.Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-2xl text-cyc-navy mb-4">{role.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{role.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-cyc-navy py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyc-teal/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyc-yellow/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">Ready to gain real-world experience?</h2>
          <p className="text-xl text-blue-50/80 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Join the CYC Internship Program today and start your journey of personal and professional reflection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/register" className="w-full sm:w-auto px-8 py-4 bg-cyc-teal text-cyc-navy font-black text-lg rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.25)] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all duration-300">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
