"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, Rocket, Megaphone, Briefcase, GraduationCap, Users, Trophy, ArrowRight, Calendar, Star, Presentation, Handshake, ChevronDown } from "lucide-react";
import { RegisterButton } from "@/components/RegisterButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const expand: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
  },
};

export default function HighSchoolProgramPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/high-school.jpg')" }}
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
              High School<br />Program
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium tracking-tight leading-relaxed">
              A semester-based innovation and leadership initiative designed to empower students to create meaningful, community-focused solutions to real-world challenges.
            </motion.p>
            <motion.div variants={fadeUp} whileHover={{ y: -4 }}>
              <RegisterButton className="flex items-center justify-center gap-3 px-8 py-4 bg-cyc-teal hover:bg-[#00cce6] text-cyc-navy font-bold text-lg rounded-xl transition-colors duration-300">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </RegisterButton>
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

      {/* Stats Bar */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="w-full bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "20+", label: "Teams per Semester" },
            { value: "4–6", label: "Students per Team" },
            { value: "20hrs", label: "Community Involvement Hours" },
            { value: "3", label: "Semesters per Year" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center">
              <span className="text-4xl font-black text-cyc-navy tracking-tight">{stat.value}</span>
              <span className="text-sm text-gray-500 font-medium mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="w-full py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-32">

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
                <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">About the Program</h2>
              </div>
            </motion.div>
            <motion.div variants={stagger} className="md:col-span-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <motion.p variants={fadeUp}>
                Since Winter 2020, the program has operated every Fall, Winter, and Spring semester, building a growing community of student leaders, innovators, and changemakers across disciplines.
              </motion.p>
              <motion.p variants={fadeUp}>
                The program brings together interdisciplinary student teams to collaborate on impactful projects under the mentorship of industry professionals, academics, and public leaders. Each semester, approximately 20 teams of 4–6 students work together to develop projects that address pressing societal issues while gaining hands-on experience in leadership, strategy, communication, and innovation.
              </motion.p>
              <motion.p variants={fadeUp}>
                Throughout the program, students receive mentorship, professional development opportunities, and practical experience working within structured project teams. One full CYC term is equivalent to <strong className="text-cyc-navy">20 community involvement hours</strong>, and meets eligibility requirements from the Ontario Ministry of Education.
              </motion.p>
              <motion.div variants={scaleIn} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mt-8">
                <h3 className="font-bold text-cyc-navy text-xl mb-4">Team Structure</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Every team is led by a <strong className="text-cyc-navy">Team Lead</strong> — a returning alumnus of the CYC program who takes on a larger mentorship and leadership role. In addition, each team designates three specialized &quot;captains&quot; responsible for overseeing the program&apos;s three core pillars: STEM, Marketing, and Business. Other team members contribute as assistants or officers.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px", amount: 0.3 }}
            variants={expand}
            className="flex flex-col gap-16"
          >
            <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto flex flex-col items-center">
              <div className="w-10 h-1.5 bg-cyc-yellow rounded-full mb-5"></div>
              <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">Three Core Pillars</h2>
              <p className="text-gray-500 mt-5 text-lg leading-relaxed">
                Every CYC project is built upon three interdisciplinary pillars, encouraging students to consider how projects can be realistically developed, communicated, and sustained.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
              {[
                { Icon: Rocket, title: "STEM", sub: "Strategy & Innovation", desc: "Focused on technical development, research, problem-solving, and implementation strategy.", color: "bg-cyc-teal/10 text-cyc-teal", subColor: "text-cyc-teal" },
                { Icon: Megaphone, title: "Marketing", sub: "Promotion & Outreach", desc: "Focused on communications, branding, awareness campaigns, and audience engagement.", color: "bg-cyc-yellow/20 text-yellow-600", subColor: "text-yellow-600" },
                { Icon: Briefcase, title: "Business", sub: "Financing & Feasibility", desc: "Focused on budgeting, sustainability, operational planning, and real-world feasibility.", color: "bg-blue-50 text-blue-600", subColor: "text-blue-600" },
              ].map((pillar, i) => (
                <motion.div key={i} variants={scaleIn} className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 rounded-[2rem] p-10 relative z-0 hover:z-10 hover:scale-[1.15] hover:-translate-y-4 hover:shadow-[0_40px_70px_rgb(0,0,0,0.15)] transition-all duration-400 ease-out group cursor-default">
                  <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-125 transition-transform duration-400 ease-out`}>
                    <pillar.Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-3xl text-cyc-navy mb-2">{pillar.title}</h3>
                  <p className={`text-base ${pillar.subColor} font-bold mb-5 uppercase tracking-wide`}>{pillar.sub}</p>
                  <p className="text-gray-600 text-lg leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Semester Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px", amount: 0.3 }}
            variants={expand}
            className="grid grid-cols-1 md:grid-cols-12 gap-16"
          >
            <motion.div variants={fadeUp} className="md:col-span-4">
              <div className="sticky top-32">
                <div className="w-10 h-1.5 bg-blue-500 rounded-full mb-5"></div>
                <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">How a Semester Works</h2>
                <p className="text-gray-500 mt-5 pr-8 text-lg leading-relaxed">
                  Each semester follows a structured progression designed to take you from an idea to a fully realized, competition-ready project.
                </p>
              </div>
            </motion.div>
            <div className="md:col-span-8">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100"></div>
                <motion.div variants={stagger} className="space-y-8">
                  {[
                    { Icon: Calendar, color: "bg-cyc-teal/10 text-cyc-teal", step: "01", title: "Onboarding & Team Formation", desc: "Students are assigned to interdisciplinary teams of 4–6, matched with a Team Lead and their three pillar captains." },
                    { Icon: Star, color: "bg-cyc-yellow/20 text-yellow-600", step: "02", title: "Bi-Weekly Sessions & Mentorship", desc: "Every two weeks, teams meet for mentorship sessions with industry professionals, receiving guidance and feedback on their projects." },
                    { Icon: Rocket, color: "bg-blue-50 text-blue-600", step: "03", title: "Project Development", desc: "Teams develop their community-focused projects across the three core pillars — STEM, Marketing, and Business." },
                    { Icon: Presentation, color: "bg-purple-50 text-purple-600", step: "04", title: "Final Competition", desc: "At the end of the semester, all teams present their work to a panel of professional judges in an in-person showcase." },
                    { Icon: Handshake, color: "bg-green-50 text-green-600", step: "05", title: "Recognition & Next Steps", desc: "Top three teams receive awards. High performers are invited to return as Team Leads and eventually Program Executives." },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-8 relative group">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
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
          </motion.div>

          {/* Project Focus Areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px", amount: 0.3 }}
            variants={expand}
            className="grid grid-cols-1 md:grid-cols-12 gap-16"
          >
            <motion.div variants={fadeUp} className="md:col-span-4">
              <div className="sticky top-32">
                <div className="w-10 h-1.5 bg-green-500 rounded-full mb-5"></div>
                <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">Project Focus Areas</h2>
              </div>
            </motion.div>
            <motion.div variants={stagger} className="md:col-span-8">
              <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-8 leading-relaxed">
                All projects developed within the CYC program must address at least one of the following focus areas. Projects are designed not only to propose innovative ideas, but also to create practical, scalable, and socially impactful solutions.
              </motion.p>
              <div className="space-y-4">
                {[
                  "Environmental Sustainability",
                  "Civic Engagement and Political Awareness",
                  "Public Service and Community Development"
                ].map((area, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-center gap-5 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 rounded-2xl border border-gray-100 hover:border-cyc-teal/30 hover:shadow-[0_8px_30px_rgb(12,183,196,0.1)] transition-all duration-300">
                    <CheckCircle2 className="w-7 h-7 text-cyc-teal flex-shrink-0" />
                    <span className="font-bold text-cyc-navy text-lg">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Mentorship */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px", amount: 0.3 }}
            variants={expand}
            className="grid grid-cols-1 md:grid-cols-12 gap-16"
          >
            <motion.div variants={fadeUp} className="md:col-span-4">
              <div className="sticky top-32">
                <div className="w-10 h-1.5 bg-purple-500 rounded-full mb-5"></div>
                <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">Mentorship</h2>
              </div>
            </motion.div>
            <motion.div variants={stagger} className="md:col-span-8 text-lg text-gray-600 leading-relaxed">
              <motion.p variants={fadeUp} className="mb-10">
                Students participate in bi-weekly mentorship sessions with accomplished professionals from a wide range of industries and disciplines. These sessions provide guidance, feedback, networking opportunities, and exposure to real-world leadership and innovation.
              </motion.p>
              <motion.h3 variants={fadeUp} className="font-bold text-cyc-navy text-xl mb-6">Past mentors and speakers include:</motion.h3>
              <motion.ul variants={stagger} className="divide-y divide-gray-100 border-y border-gray-100">
                {[
                  { name: "Hugh Liu", role: "Aerospace Professor at the University of Toronto" },
                  { name: "Tim Hodgson", role: "Federal Minister of Energy and Natural Resources, former CEO of Goldman Sachs Canada" },
                  { name: "Tim Kwan", role: "Chair of the Mon Sheong Foundation" },
                  { name: "Glenn Rowe", role: "Professor at the Ivey Business School" },
                  { name: "Minh Tran", role: "Leader at Deloitte" }
                ].map((mentor, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center py-5 gap-1 sm:gap-8">
                    <strong className="text-cyc-navy sm:w-52 flex-shrink-0 text-base">{mentor.name}</strong>
                    <span className="text-gray-500 text-base">{mentor.role}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Leadership Pathway */}
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
                <h2 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight leading-tight">Leadership Pathway & Internships</h2>
              </div>
            </motion.div>
            <motion.div variants={stagger} className="md:col-span-8 text-lg text-gray-600 leading-relaxed space-y-6">
              <motion.p variants={fadeUp}>
                The CYC program is designed to provide students with long-term leadership and professional development opportunities beyond a single semester.
              </motion.p>
              <motion.p variants={fadeUp}>
                Participants who demonstrate strong leadership and initiative may return in future semesters as Team Leads, where they mentor newer students and oversee project teams. Following their experience as a Team Lead, selected students are invited to become Program Executives.
              </motion.p>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-6 mt-10">
                <motion.div variants={scaleIn} className="bg-cyc-navy text-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  <div className="w-14 h-14 bg-cyc-teal/20 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-cyc-teal" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Program Executives</h3>
                  <p className="text-blue-50/80 text-base leading-relaxed">
                    Taking on a more direct role in managing and operating the CYC program — assisting with planning, mentorship coordination, operations, outreach, and recruitment.
                  </p>
                </motion.div>
                <motion.div variants={scaleIn} className="bg-cyc-teal text-cyc-navy p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  <div className="w-14 h-14 bg-white/30 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="w-7 h-7 text-cyc-navy" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Paid Internships</h3>
                  <p className="text-cyc-navy/80 text-base leading-relaxed">
                    After serving in executive leadership roles, students gain access to guaranteed paid internship opportunities organized through the CYC network.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Final Competition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleIn}
            className="bg-cyc-navy text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative"
          >
            <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-cyc-teal/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-5%] w-64 h-64 bg-cyc-yellow/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                >
                  <motion.div variants={fadeUp} className="w-20 h-20 bg-cyc-yellow/20 text-cyc-yellow rounded-3xl flex items-center justify-center mb-8">
                    <Trophy className="w-10 h-10" />
                  </motion.div>
                  <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6 leading-tight">The Final Competition</motion.h2>
                  <motion.p variants={fadeUp} className="text-blue-50/80 text-lg leading-relaxed mb-8">
                    At the conclusion of each semester, all teams participate in an in-person Final Competition, where they present their projects to a panel of professional judges. Teams are evaluated on innovation, feasibility, impact, teamwork, and presentation quality, with the top three teams receiving recognition and awards.
                  </motion.p>
                  <motion.p variants={fadeUp} className="text-blue-50/60 leading-relaxed">
                    The Final Competition serves as both a celebration of student achievement and an opportunity for participants to showcase their work to industry leaders, mentors, and members of the broader community.
                  </motion.p>
                </motion.div>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-4"
              >
                {[
                  "Innovation & Creativity",
                  "Feasibility & Real-World Impact",
                  "Teamwork & Collaboration",
                  "Presentation Quality",
                ].map((criteria, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10 hover:bg-white/15 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-cyc-teal/20 text-cyc-teal flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-bold text-white">{criteria}</span>
                  </motion.div>
                ))}
                
                <motion.div variants={fadeUp} className="relative w-full aspect-video rounded-3xl overflow-hidden mt-8 shadow-2xl border border-white/10 hidden md:block">
                  <Image src="/presentation.jpg" alt="Student Presentation" fill className="object-cover" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Bottom CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="w-full bg-gray-50 border-t border-gray-100 py-24 px-6 lg:px-8 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-cyc-navy mb-4 tracking-tight">
            Ready to get started?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 mb-10">
            Join the next semester of the CYC High School Program and start building your future today.
          </motion.p>
          <motion.div variants={fadeUp} whileHover={{ y: -4 }}>
            <RegisterButton className="inline-flex items-center gap-3 px-10 py-5 bg-cyc-teal hover:bg-[#00cce6] text-cyc-navy font-black text-xl rounded-2xl transition-colors duration-300">
              Apply for the Program
              <ArrowRight className="w-6 h-6" />
            </RegisterButton>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
