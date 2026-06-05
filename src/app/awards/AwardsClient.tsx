"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Trophy, Globe, Heart, Users, Shield, ArrowRight, UserCheck, ChevronDown, Star } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconMap: Record<string, any> = {
  Globe, Shield, Heart, Users, Trophy, Star
};

const themeMap: Record<string, { color: string, bgColor: string, border: string }> = {
  red: { color: "text-red-600", bgColor: "bg-red-50", border: "border-red-100" },
  teal: { color: "text-cyc-teal", bgColor: "bg-cyc-teal/10", border: "border-cyc-teal/20" },
  pink: { color: "text-pink-600", bgColor: "bg-pink-50", border: "border-pink-100" },
  purple: { color: "text-purple-600", bgColor: "bg-purple-50", border: "border-purple-100" },
  yellow: { color: "text-cyc-yellow", bgColor: "bg-cyc-yellow/10", border: "border-cyc-yellow/20" },
};

export default function AwardsClient({ initialData }: { initialData: Record<string, any[]> }) {
  const years = Object.keys(initialData).sort((a, b) => parseInt(b) - parseInt(a));
  // If 2026 is missing, let's keep it around since it's the current "Apply Now" state, or we can just let it be dynamic
  if (!years.includes("2026")) years.unshift("2026");

  const [activeYear, setActiveYear] = useState(years[0] || "2026");

  // Helper to resolve icon and theme from dynamic strings if they don't have them as components already
  const processedDataByYear = Object.keys(initialData).reduce((acc, year) => {
    acc[year] = initialData[year].map(award => {
      let icon = award.icon;
      if (typeof award.iconName === 'string' && iconMap[award.iconName]) {
        icon = iconMap[award.iconName];
      }
      
      let themeClasses = { color: award.color, bgColor: award.bgColor, border: award.border };
      if (typeof award.theme === 'string' && themeMap[award.theme]) {
        themeClasses = themeMap[award.theme];
      }

      return { ...award, icon, ...themeClasses };
    });
    return acc;
  }, {} as Record<string, any[]>);

  const currentAwards = processedDataByYear[activeYear];

  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/awards.jpg')" }}
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
              CYC Champion<br />Awards
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium tracking-tight leading-relaxed">
              Celebrating exceptional individuals and leaders who have made a profound, lasting impact on our society, breaking barriers and inspiring the next generation.
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
      <section className="w-full py-24 px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-5xl mx-auto space-y-24">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px", amount: 0.1 }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-cyc-navy tracking-tight leading-tight">Honoring Role Models Across Canada</h2>
            <p className="text-gray-500 mt-5 text-lg leading-relaxed">
              Originally founded and supported by visionary Chinese Canadian leaders to provide mentorship and opportunities, CYC has grown into a vibrant, multicultural organization open to all Canadians. The Champion Awards are divided into five distinct sub-categories to capture the full spectrum of leadership across the nation.
            </p>
          </motion.div>

          {/* Awards Photo Gallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
          >
            <motion.div variants={scaleIn} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image src="/ceremony.jpg" alt="Award Ceremony" fill className="object-cover" />
            </motion.div>
            <motion.div variants={scaleIn} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg md:translate-y-8">
              <Image src="/awardsduo.jpg" alt="Award Winners" fill className="object-cover" />
            </motion.div>
            <motion.div variants={scaleIn} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image src="/ceremony2.jpg" alt="Award Ceremony Audience" fill className="object-cover" />
            </motion.div>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4 border-b border-gray-100 pb-8">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeYear === year
                    ? "bg-cyc-navy text-white shadow-lg"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-cyc-teal hover:text-cyc-teal"
                }`}
              >
                {year} Awards
              </button>
            ))}
          </div>

          {activeYear === "2026" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              className="bg-cyc-teal/10 border border-cyc-teal/30 rounded-3xl p-12 text-center max-w-3xl mx-auto"
            >
              <Trophy className="w-16 h-16 text-cyc-teal mx-auto mb-6" />
              <h3 className="text-3xl font-black text-cyc-navy mb-4">2026 Awards</h3>
              <p className="text-xl text-cyc-navy/80 font-medium">
                Applications are now open. Submit your nomination to <a href="mailto:awards@thecyc.org" className="text-cyc-teal hover:underline font-bold">awards@thecyc.org</a>
              </p>
            </motion.div>
          )}

          {activeYear !== "2026" && !currentAwards && (
             <motion.div
               initial="hidden"
               animate="visible"
               variants={scaleIn}
               className="text-center py-20"
             >
               <h3 className="text-2xl font-bold text-gray-400">Award recipients for {activeYear} will be updated soon.</h3>
             </motion.div>
          )}

          {activeYear !== "2026" && currentAwards && (
            <div className="space-y-16 w-full">
              {currentAwards.map((award, index) => {
                const IconComponent = award.icon || Trophy;
                return (
                <motion.div
                  key={award.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px", amount: 0.05 }}
                  variants={scaleIn}
                  className={`bg-white rounded-[2rem] border ${award.border} shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-400`}
                >
                  <div className="p-10 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                      <div className="flex-1">
                        <div className={`w-16 h-16 ${award.bgColor} ${award.color} rounded-2xl flex items-center justify-center mb-6`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="font-black text-3xl md:text-4xl text-cyc-navy mb-6 tracking-tight">{award.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 whitespace-pre-line">
                          {award.desc}
                        </p>
                        
                        {/* Featured Presenters (With Images) rendered inline */}
                        {award.presenters && award.presenters.some((p: any) => p.image) && (
                          <div className="mt-12">
                            <h4 className="font-bold text-cyc-navy text-xl mb-8 flex items-center gap-2 border-b border-gray-100 pb-4">
                              <UserCheck className="w-6 h-6 text-cyc-teal" />
                              Featured Award Presenters
                            </h4>
                            <div className="flex flex-wrap justify-center gap-6">
                              {award.presenters.map((presenter: any, pIndex: number) => (
                                <div key={pIndex} className="flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
                                  <div className="relative w-full aspect-[4/5] bg-gray-100 flex items-center justify-center">
                                    {presenter.image ? (
                                      <Image src={presenter.image} alt={presenter.name} fill className="object-cover object-top" />
                                    ) : (
                                      <span className="text-gray-400 font-bold text-sm">Image Unavailable</span>
                                    )}
                                  </div>
                                  <div className="p-4 flex flex-col items-center text-center">
                                    <h5 className="font-black text-base text-gray-900 mb-1 tracking-tight">{presenter.name}</h5>
                                    <p className="text-[10px] font-bold text-cyc-teal mb-3 uppercase tracking-wider">{presenter.title}</p>
                                    <div className="text-[11px] text-gray-600 space-y-2 leading-relaxed font-medium">
                                      {presenter.desc?.split('\n\n').map((paragraph: string, pIdx: number) => (
                                        <p key={pIdx}>{paragraph}</p>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
  
                        {/* Featured Award Winners (With Images) */}
                        {award.winners && award.winners.length > 0 && (
                          <div className="mt-12">
                            <h4 className="font-bold text-cyc-navy text-xl mb-8 flex items-center gap-2 border-b border-gray-100 pb-4">
                              <Trophy className="w-6 h-6 text-cyc-yellow" />
                              Award Winners
                            </h4>
                            <div className="flex flex-wrap justify-center gap-6">
                              {award.winners.map((winner: any, wIndex: number) => (
                                <div key={wIndex} className="flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
                                  <div className="relative w-full aspect-[4/5] bg-gray-100 flex items-center justify-center">
                                    {winner.image ? (
                                      <Image src={winner.image} alt={winner.name} fill className="object-cover object-top" />
                                    ) : (
                                      <span className="text-gray-400 font-bold text-sm">Image Unavailable</span>
                                    )}
                                  </div>
                                  <div className="p-4 flex flex-col items-center text-center">
                                    <h5 className="font-black text-base text-gray-900 mb-1 tracking-tight">{winner.name}</h5>
                                    <p className="text-[10px] font-bold text-cyc-teal mb-3 uppercase tracking-wider">{winner.title}</p>
                                    <div className="text-[11px] text-gray-600 space-y-2 leading-relaxed font-medium">
                                      {winner.desc?.split('\n\n').map((paragraph: string, pIdx: number) => (
                                        <p key={pIdx}>{paragraph}</p>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
  
                      {/* Standard Presenters Sidebar (Text Only) */}
                      {award.presenters && award.presenters.length > 0 && !award.presenters.some((p: any) => p.image) && (
                        <div className="md:w-[350px] shrink-0 bg-gray-50 p-8 rounded-3xl border border-gray-100 h-fit">
                          <h4 className="font-bold text-cyc-navy text-lg mb-6 flex items-center gap-2">
                            <UserCheck className="w-5 h-5 text-cyc-teal" />
                            Award Presenters
                          </h4>
                          <ul className="space-y-5">
                            {award.presenters.map((presenter: any, pIndex: number) => (
                              <li key={pIndex} className="flex flex-col">
                                <span className="font-bold text-gray-900">{presenter.name}</span>
                                <span className="text-sm text-gray-500 mt-0.5">{presenter.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
