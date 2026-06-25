"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Lightbulb,
  FileText,
  Search,
  Handshake,
  Leaf,
  TrendingUp,
  Landmark,
  Users,
  Target,
  Calendar,
} from "lucide-react";

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

export default function ThinkTankPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/new1.jpeg')" }}
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
              <Lightbulb className="w-4 h-4" />
              CYC Initiative
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-6xl lg:text-7xl text-white tracking-tighter leading-[1.05] mb-6 font-black drop-shadow-md">
              CYC<br />Think Tank
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium tracking-tight leading-relaxed">
              A youth-led initiative dedicated to exploring new ideas, developing policy recommendations, and researching practical solutions to the challenges facing Canadian communities.
            </motion.p>
            <motion.a variants={fadeUp} whileHover={{ y: -4 }} href="https://thinktank.thecyc.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-cyc-teal hover:bg-[#00cce6] text-cyc-navy font-bold text-lg rounded-xl transition-colors duration-300">
              Visit the Think Tank
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

      {/* Mission / Driving Change */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-10 h-1.5 bg-cyc-teal rounded-full mb-5 mx-auto"></div>
            <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">Driving Change</h2>
            <p className="text-gray-500 mt-6 text-xl leading-relaxed">
              We actively involve youth in critical discussions on environmental sustainability, economic development, and civic engagement. Our think tank bridges the gap between young minds and seasoned professionals.
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
              { Icon: FileText, title: "Policy Recommendations", desc: "Teams research pressing issues and draft clear, actionable policy briefs aimed at decision-makers at every level of government.", color: "bg-cyc-yellow/20 text-yellow-600" },
              { Icon: Search, title: "Community Research", desc: "We gather data, run surveys, and document community needs to ground every proposal in real-world evidence.", color: "bg-cyc-teal/10 text-cyc-teal" },
              { Icon: Handshake, title: "Industry Partnerships", desc: "We connect students with academics, public leaders, and industry experts who mentor projects and open doors.", color: "bg-blue-50 text-blue-600" },
            ].map((item, i) => (
              <motion.div key={i} variants={scaleIn} className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 rounded-[2rem] p-10 relative z-0 hover:z-10 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-400 ease-out group">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <item.Icon className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl text-cyc-navy mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="w-full py-32 px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-10 h-1.5 bg-cyc-yellow rounded-full mb-5 mx-auto"></div>
            <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">Our Focus Areas</h2>
            <p className="text-gray-500 mt-6 text-xl leading-relaxed">
              Each cohort selects research tracks that matter most to their generation. Current areas of focus include:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { Icon: Leaf, title: "Environmental Sustainability", desc: "Climate resilience, green infrastructure, and youth-driven sustainability campaigns for Canadian cities.", color: "bg-green-50 text-green-600" },
              { Icon: TrendingUp, title: "Economic Development", desc: "Affordability, the future of work, and pathways that help young Canadians build financial security.", color: "bg-cyc-teal/10 text-cyc-teal" },
              { Icon: Landmark, title: "Civic Engagement", desc: "Boosting youth participation in democracy, from voter education to accessible community consultation.", color: "bg-purple-50 text-purple-600" },
              { Icon: Users, title: "Health & Wellbeing", desc: "Mental health access, digital wellbeing, and community support systems for students across the country.", color: "bg-pink-50 text-pink-600" },
            ].map((item, i) => (
              <motion.div key={i} variants={scaleIn} className="flex gap-6 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 shrink-0 ${item.color} rounded-2xl flex items-center justify-center`}>
                  <item.Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-black text-xl text-cyc-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="w-10 h-1.5 bg-blue-500 rounded-full mb-5 mx-auto"></div>
            <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">How It Works</h2>
            <p className="text-gray-500 mt-6 text-xl leading-relaxed">
              A structured term takes participants from an open question to a published recommendation.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
              className="space-y-8"
            >
              {[
                { Icon: Target, color: "bg-cyc-teal/10 text-cyc-teal", step: "01", title: "Choose a Challenge", desc: "Participants form research pods and select a community issue worth solving." },
                { Icon: Search, color: "bg-cyc-yellow/20 text-yellow-600", step: "02", title: "Research & Consult", desc: "Pods gather evidence, interview stakeholders, and meet with mentors for guidance." },
                { Icon: FileText, color: "bg-blue-50 text-blue-600", step: "03", title: "Draft Recommendations", desc: "Findings are shaped into a concise, well-sourced policy brief." },
                { Icon: Calendar, color: "bg-purple-50 text-purple-600", step: "04", title: "Present & Publish", desc: "Pods present to a panel and share their work with partners and the wider community." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-8 relative group">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 relative z-10 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.Icon className="w-6 h-6" />
                  </div>
                  <div className="pb-2">
                    <span className="text-xs font-black text-gray-300 tracking-widest uppercase">Step {item.step}</span>
                    <h3 className="font-bold text-xl text-cyc-navy mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="text-3xl lg:text-4xl font-black text-cyc-navy mb-4">Join the Conversation</h2>
            <p className="text-xl text-gray-600 mb-8">
              Applications for the next Think Tank cohort open each semester. Visit the Think Tank website to learn how you can contribute your ideas.
            </p>
            <a
              href="https://thinktank.thecyc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyc-teal hover:bg-[#00cce6] text-cyc-navy font-bold text-lg rounded-xl hover:-translate-y-1 transition-all duration-300"
            >
              Visit the Think Tank
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
