"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Users, TrendingUp, Building, Rocket, ChevronDown } from "lucide-react";

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

export default function InnovationHubPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/innovationhub.jpg')" }}
        >
          <div className="absolute inset-0 bg-slate-950/85"></div>
        </div>

        {/* Background Elements */}
        <div className="hidden md:block absolute top-0 right-0 w-[800px] h-[800px] bg-cyc-yellow/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/4 z-10"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyc-teal/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4 z-10"></div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-start text-left max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-cyc-yellow/20 text-cyc-yellow font-bold rounded-full text-sm uppercase tracking-wider mb-8">
              <Rocket className="w-4 h-4" />
              Summer 2026 Initiative
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl lg:text-7xl text-white tracking-tighter leading-[1.05] mb-6 font-black drop-shadow-md">
              CYC<br />Innovation Hub
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium tracking-tight leading-relaxed">
              Empowering aspiring and current business owners to launch and scale their ideas with professional resources and direct access to investors.
            </motion.p>
            <motion.a variants={fadeUp} whileHover={{ y: -4 }} href="mailto:events@thecyc.org" className="flex items-center justify-center gap-3 px-8 py-4 bg-cyc-yellow hover:bg-yellow-400 text-cyc-navy font-bold text-lg rounded-xl transition-colors duration-300">
              Register Interest
              <ArrowRight className="w-5 h-5" />
            </motion.a>
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
      <section className="w-full py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">Everything You Need to Succeed</h2>
            <p className="text-gray-500 mt-6 text-xl leading-relaxed">
              The Innovation Hub provides a complete ecosystem for founders.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { Icon: Building, title: "Professional Workspace", desc: "Access to a fully equipped, professional working space designed to help you focus and collaborate with other driven founders.", color: "bg-blue-50 text-blue-600" },
              { Icon: Users, title: "Expert Mentorship", desc: "Receive professional mentorship and direct guidance from industry leaders who have successfully built and scaled businesses.", color: "bg-cyc-teal/10 text-cyc-teal" },
              { Icon: TrendingUp, title: "Venture Capital", desc: "Gain exclusive access to our network of investors and venture capital funds to help seed and accelerate your startup.", color: "bg-cyc-yellow/20 text-yellow-600" },
            ].map((feature, i) => (
              <motion.div key={i} variants={scaleIn} className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 rounded-[2rem] p-10 relative z-0 hover:z-10 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-400 ease-out group">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <feature.Icon className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl text-cyc-navy mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="w-full py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="bg-gray-50 p-12 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyc-teal via-cyc-navy to-cyc-yellow group-hover:h-3 transition-all duration-300"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-cyc-navy mb-4">More Information Coming Soon!</h2>
            <p className="text-xl text-gray-600">We are actively developing the Progenics Innovation Hub and will be sharing more details, floor plans, and application forms shortly.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
