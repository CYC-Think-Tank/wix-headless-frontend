"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, Users, HeartPulse, Stethoscope, Handshake, Network, ChevronDown } from "lucide-react";

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

export default function CollaborationsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/collaboration.png')" }}
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
              Our<br />Partnerships
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium tracking-tight leading-relaxed">
              We collaborate with top universities and leading agencies to provide students with real work experience, mentorship, and impactful career paths.
            </motion.p>
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
          
          {/* University Co-Ops */}
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
                <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">University Co-Ops</h2>
                <p className="text-gray-500 mt-5 pr-8 text-lg leading-relaxed">
                  Partnered with Waterloo Co-Op and McMaster Co-Op programs to help university students get real work experience while they are in school.
                </p>
              </div>
            </motion.div>
            <motion.div variants={stagger} className="md:col-span-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <motion.p variants={fadeUp}>
                Canadian Youth Champions (CYC) works with the <strong className="text-cyc-navy">University of Waterloo</strong> and <strong className="text-cyc-navy">McMaster University</strong> through their Co-op programs. 
              </motion.p>
              <motion.p variants={fadeUp}>
                Students work with CYC to learn new skills, help with important community projects, and get advice from business leaders. At the same time, these students help CYC by bringing new ideas to the group. This partnership is a great way to help young workers in Canada prepare for their future jobs.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  { Icon: Briefcase, title: "Real Work Experience", desc: "Students get to work on real, everyday tasks and big projects at CYC to build their skills." },
                  { Icon: Handshake, title: "Mentorship and Guidance", desc: "University students receive helpful advice and training from experienced leaders and mentors." },
                  { Icon: Users, title: "Community Impact", desc: "Students use what they learn in school to help develop and support local community programs." },
                  { Icon: Network, title: "Future Opportunities", desc: "This program helps students build a professional network and prepares them for their future careers." },
                ].map((feature, i) => (
                  <motion.div key={i} variants={scaleIn} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-cyc-teal">
                      <feature.Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-cyc-navy text-xl mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="w-full h-px bg-gray-200"></div>

          {/* Healthcare Agency */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px", amount: 0.3 }}
            variants={expand}
            className="grid grid-cols-1 md:grid-cols-12 gap-16"
          >
            <motion.div variants={fadeUp} className="md:col-span-4">
              <div className="sticky top-32">
                <div className="w-10 h-1.5 bg-cyc-yellow rounded-full mb-5"></div>
                <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight break-words [word-break:break-word]">HealthcareJob<wbr/>.Agency</h2>
                <p className="text-gray-500 mt-5 pr-8 text-lg leading-relaxed">
                  A leading company that provides workers for long-term care, retirement homes, and home care.
                </p>
              </div>
            </motion.div>
            <motion.div variants={stagger} className="md:col-span-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <motion.p variants={fadeUp}>
                Canadian Youth Champions (CYC) partners with this agency to show students career paths in the healthcare field. Through this teamwork, young people learn how professional and kind care helps support local communities.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  { Icon: Stethoscope, title: "Healthcare Career Paths", desc: "The partnership introduces students to jobs and future work opportunities in the medical field." },
                  { Icon: HeartPulse, title: "Learning Professional Care", desc: "Young people learn how to give professional and high-quality service to people who need help." },
                ].map((feature, i) => (
                  <motion.div key={i} variants={scaleIn} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-cyc-yellow">
                      <feature.Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-cyc-navy text-xl mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-cyc-navy py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyc-teal/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyc-yellow/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">Interested in partnering with us?</h2>
          <p className="text-xl text-blue-50/80 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Contact us to learn how your organization can collaborate with Canadian Youth Champions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:events@thecyc.org" className="w-full sm:w-auto px-8 py-4 bg-cyc-teal text-cyc-navy font-black text-lg rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.25)] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
