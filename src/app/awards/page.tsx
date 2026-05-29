"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Trophy, Globe, Heart, Users, Shield, ArrowRight, UserCheck, ChevronDown } from "lucide-react";

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



const awardsData = [
  {
    id: "canadian",
    title: "Canadian Champions Award",
    icon: Globe,
    color: "text-red-600",
    bgColor: "bg-red-50",
    border: "border-red-100",
    desc: "In its 5th year, Canadian Youth Champions (CYC) started the first Canadian Champions Award. This award is for great Canadians who help our communities in important ways. CYC is a group for all Canadians, but it was started by Chinese Canadian leaders. These leaders came together to help and guide young people in Canada. Today, this award honors these great people. Their hard work and leadership help and inspire young people across the country. Also, this award honors a very important helper of CYC, the late Honourable John McCallum (1950–2025) whose legacy continues to guide and inspire us.",
    presenters: [
      {
        name: "Minister Tim Hodgson",
        title: "Minister of Energy and Natural Resources of Canada",
        image: "/timhodgson2.jpg",
        desc: "The Honourable Tim Hodgson is the Minister of Energy and Natural Resources and the newly elected Member of Parliament for Markham-Thornhill in 2025.\n\nA proud Ivey Business School alumnus, Mr. Hodgson is the former Chair of Hydro One and previously served as CEO of Goldman Sachs Canada. He also served as an Advisor to the Bank of Canada, bringing with him decades of leadership experience across both the public and private sectors."
      },
      {
        name: "Mayor Frank Scarpitti",
        title: "Mayor of Markham, Ontario",
        image: "/frankscarpitti.jpeg",
        desc: "His Worship Frank Scarpitti has served as the Mayor of Markham since 2006, making him the city's longest-serving mayor.\n\nBeyond civic leadership, Mayor Scarpitti is deeply committed to community and charitable work. He co-chaired the Markham Stouffville Hospital Capital Campaign, successfully raising over $50 million."
      }
    ]
  },
  {
    id: "asian",
    title: "Asian Champions Award",
    icon: Shield,
    color: "text-cyc-teal",
    bgColor: "bg-cyc-teal/10",
    border: "border-cyc-teal/20",
    desc: "The Asian Champions Award is designed to honor outstanding individuals of Asian heritage who have demonstrated exceptional leadership, professional excellence, and a steadfast commitment to community service. This award recognizes role models within the Asian Canadian community who break barriers, foster cultural understanding, and pave the way for future generations. By celebrating their accomplishments in fields such as business, arts, public service, and philanthropy, CYC aims to inspire young people to embrace their heritage while making meaningful contributions to the broader Canadian society.",
    presenters: [
      { name: "Honourable Dr. Vivienne Poy", title: "Businesswoman, author and philanthropist" },
      { name: "Mary Ng", title: "Minister of Export Promotion, International Trade and Economic Development" },
      { name: "Harjit Sajjan", title: "Minister of Emergency Preparedness of Canada" },
      { name: "Winnie Chan", title: "Vice President of Sales Management at Tridel" },
      { name: "Li Zhiping", title: "Founder of the Toronto Chinese Artist Center" },
      { name: "Justin Poy", title: "Founder of the Justin Poy Agency and Philanthropist" },
      { name: "Rebecca Pang", title: "Vice President of RBC" }
    ]
  },
  {
    id: "women",
    title: "Women Champions Award",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    border: "border-pink-100",
    desc: "This award honors great women who help Canadian society even when they face many hard problems. It recognizes women who work for equal rights, start charity groups, and make important positive changes in our communities. Through this award, CYC thanks these leaders for their service and makes sure people across the country know about their success. These incredible women serve as strong leaders and guides, helping young women grow and making the community a better place for future female leaders.",
    presenters: [
      { name: "Vivienne Poy", title: "Former Canadian Senator" },
      { name: "Doris Chan", title: "First Vice-Chair of Mon Sheong Foundation" },
      { name: "Rosa Chan", title: "Founder of RC Communications" },
      { name: "Piera Ip", title: "Founder of Progenics" },
      { name: "Adda Li", title: "Chain Restaurateur" },
      { name: "Yuen May", title: "Cantonese period music opera lyricist" },
      { name: "Nancy M Siew", title: "Citizenship Judge" },
      { name: "Emily Wong", title: "VP of Chinese Cultural Centre of Greater Toronto" }
    ]
  },
  {
    id: "diversity",
    title: "Diversity and Inclusion Champions Award",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    border: "border-purple-100",
    desc: "The Diversity and Inclusion Champions Award recognizes individuals, organizations, and community advocates who have made outstanding contributions toward fostering a truly inclusive and equitable society. As a multicultural organization, CYC values the unique backgrounds of all Canadians. This award honors those who actively work to eliminate discrimination, champion equal access, promote inclusive practices, and bring diverse communities together through shared understanding and mutual respect.",
    presenters: [
      { name: "Helena Jaczek", title: "House of Commons of Canada" },
      { name: "Michael Parsa", title: "Provincial Parliament of Ontario" },
      { name: "Aldrin Fernando", title: "School Principal" }
    ]
  },
  {
    id: "black",
    title: "Black Champions Award",
    icon: Trophy,
    color: "text-cyc-yellow",
    bgColor: "bg-cyc-yellow/10",
    border: "border-cyc-yellow/20",
    desc: "The Black Champions Award is dedicated to honoring Black Canadians who have exhibited exemplary leadership, driven social change, and achieved excellence across various industries. This award seeks to amplify the voices and accomplishments of Black leaders who serve as vital role models for youth. By celebrating their success and dedication to social justice, entrepreneurship, and community development, CYC emphasizes the critical importance of uplifting Black excellence and nurturing the next generation of changemakers.",
    presenters: [
      { name: "Greg Fergus", title: "Speaker of the House of Commons of Canada" },
      { name: "David Smith", title: "Provincial Parliament of Ontario" },
      { name: "Sandy Hudson", title: "Co-founder of BLM Canada" }
    ]
  }
];

export default function AwardsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 z-20"
        >
          <ChevronDown className="w-10 h-10" />
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

          <div className="space-y-16 w-full">
            {awardsData.map((award, index) => (
              <motion.div
                key={award.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-100px", amount: 0.2 }}
                variants={scaleIn}
                className={`bg-white rounded-[2rem] border ${award.border} shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-400`}
              >
                <div className="p-10 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="flex-1">
                      <div className={`w-16 h-16 ${award.bgColor} ${award.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <award.icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-black text-3xl md:text-4xl text-cyc-navy mb-6 tracking-tight">{award.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {award.desc}
                      </p>
                      
                      {/* Featured Presenters (With Images) rendered inline */}
                      {award.presenters.some((p: any) => p.image) && (
                        <div className="mt-12">
                          <h4 className="font-bold text-cyc-navy text-xl mb-8 flex items-center gap-2 border-b border-gray-100 pb-4">
                            <UserCheck className="w-6 h-6 text-cyc-teal" />
                            Featured Award Presenters
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {award.presenters.map((presenter: any, pIndex) => (
                              <div key={pIndex} className="flex flex-col bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
                                <div className="relative w-full h-[340px]">
                                  <Image src={presenter.image} alt={presenter.name} fill className="object-cover object-top" />
                                </div>
                                <div className="p-8">
                                  <h5 className="font-black text-2xl text-gray-900 mb-2 tracking-tight">{presenter.name}</h5>
                                  <p className="text-sm font-bold text-cyc-teal mb-6 uppercase tracking-wider">{presenter.title}</p>
                                  <div className="text-sm text-gray-600 space-y-4 leading-relaxed font-medium">
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
                    </div>

                    {/* Standard Presenters Sidebar (Text Only) */}
                    {!award.presenters.some((p: any) => p.image) && (
                      <div className="md:w-[350px] shrink-0 bg-gray-50 p-8 rounded-3xl border border-gray-100 h-fit">
                        <h4 className="font-bold text-cyc-navy text-lg mb-6 flex items-center gap-2">
                          <UserCheck className="w-5 h-5 text-cyc-teal" />
                          Award Presenters
                        </h4>
                        <ul className="space-y-5">
                          {award.presenters.map((presenter: any, pIndex) => (
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
            ))}
          </div>



        </div>
      </section>

      <Footer />
    </main>
  );
}
