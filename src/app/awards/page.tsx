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
        desc: "The Honourable Tim Hodgson is the Minister of Energy and Natural Resources and MP for Markham-Thornhill. He is the former Chair of Hydro One and former CEO of Goldman Sachs Canada, bringing decades of leadership across the public and private sectors."
      },
      {
        name: "Mayor Frank Scarpitti",
        title: "Mayor of Markham, Ontario",
        image: "/frankscarpitti.jpeg",
        desc: "His Worship Frank Scarpitti has served as the Mayor of Markham since 2006, making him the city's longest-serving mayor. He is deeply committed to charitable work, having co-chaired the Markham Stouffville Hospital campaign which raised over $50 million."
      }
    ],
    winners: [
      {
        name: "Tim Kwan",
        title: "Chairman of Mon Sheong Foundation",
        image: "/timkwan.jpg",
        desc: "Mr. Tim Kwan, Chairman of the Mon Sheong Foundation, is a successful STEM entrepreneur and mentor to CYC since its inception. Recipient of the Senate of Canada Sesquicentennial Medal, he receives the Lifelong Contribution Award for his outstanding dedication to both business and community."
      },
      {
        name: "Master Shan 單柏欽",
        title: "Renowned Artist",
        image: "/mastershan.jpg",
        desc: "Master Shan Bai Qin is a highly respected Lingnan School artist in Toronto, known for his excellence in freehand and meticulous brushwork. With works exhibited worldwide, his art beautifully reflects cultural heritage and the harmony of Eastern and Western traditions."
      },
      {
        name: "Tony Chang",
        title: "Global Executive & Community Leader",
        image: "/tonychang.jpg",
        desc: "Tony Chang is a global executive and CPA with extensive leadership experience across North America and Asia, holding senior roles at Tim Hortons and Shoppers Drug Mart. Passionate about healthcare, he has chaired the Yee Hong Board since 2021."
      },
      {
        name: "Stephen Siu",
        title: "President of the Yee Hong Community Wellness Foundation",
        image: "/stephensiu.png",
        desc: "Stephen Siu is President of the Yee Hong Community Wellness Foundation, leading major fundraising efforts to enhance seniors' lives in the GTA. With a strong background in public relations, he is dedicated to promoting quality care and cultural engagement."
      },
      {
        name: "Alan Lam",
        title: "Chairman of Greenvilla Homes",
        image: "/alanlamreplace.jpg",
        desc: "Alan Lam is an engineer and Chairman of Greenvilla Homes, specializing in GTA land development. A dedicated community leader, he has served on the Board of the Chinese Cultural Centre of Greater Toronto since 2000 and is a two-time June Callwood Volunteerism Award recipient."
      },
      {
        name: "Henry Lee",
        title: "Honorary Consul of Malaysia in Toronto",
        image: "/henrylee1.jpg",
        desc: "Henry Leong Bee Lee has served as Honorary Consul of Malaysia in Toronto since 2019. With an extensive background in banking and public service, he actively promotes cultural diplomacy, hospital philanthropy, and international cooperation."
      },
      {
        name: "Stephen Chan",
        title: "Founder of Dapasoft Inc.",
        image: "/stephenchanhd.png",
        desc: "Stephen Chan is the founder and former CEO of Dapasoft Inc., a Toronto healthcare IT firm acquired by Calian Group in 2021. An active angel investor, he also serves as a board member of the Ma'mo'weh Wii'soo'ka'tiwin Foundation, supporting innovation and entrepreneurship."
      },
      {
        name: "Jeffrey Mah",
        title: "Director of the Mon Sheong Foundation",
        image: "/jeffreymah.jpg",
        desc: "Jeffrey Mah is a successful IT entrepreneur and Director of the Mon Sheong Foundation. As a dedicated mentor and judge for CYC since its inception, he has empowered countless young people to reach their full potential."
      },
      {
        name: "Frank Chau",
        title: "President of the Yee Hong Community Wellness Foundation",
        image: "/frankchau.jpg",
        desc: "Frank Chau is a Special Advisor to the Mon Sheong Foundation who led the development of Mississauga Chinatown and helped expand BMO into Asia. His visionary leadership has left a lasting impact on business and the Chinese Canadian community."
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
      {
        name: "Honourable Dr. Vivienne Poy",
        title: "Businesswoman, author and philanthropist",
        image: "/Vivienne_Poy.jpg",
        desc: "Vivienne Poy made history in 1998 as the first Canadian Senator of Asian ancestry and successfully championed the designation of May as \"Asian Heritage Month\". An entrepreneur, author, and former chancellor of the University of Toronto, she has been a lifelong advocate for cultural understanding and education."
      },
      {
        name: "Mary Ng",
        title: "Minister of Export Promotion, International Trade and Economic Development",
        image: "/mary ng.jpeg",
        desc: "Mary Ng is a top-performing public sector leader serving as Canada's Minister of Export Promotion, International Trade, and Economic Development. She represents Markham-Thornhill as a Member of Parliament and previously served in the Prime Minister's Office."
      },
      {
        name: "Harjit Sajjan",
        title: "Minister of Emergency Preparedness of Canada",
        image: "/harjitsajjan.png",
        desc: "Harjit Sajjan is the Minister of Emergency Preparedness for Canada, leading national crisis response efforts. With a strong background in military service and public policy, he is a dedicated advocate for the safety and security of all Canadians."
      },
      {
        name: "Li Zhiping (李治平)",
        title: "Founder of the Toronto Chinese Artist Center",
        image: "/lizhiping.jpg",
        desc: "Li ZiPing is a lifelong musician and highly respected arts advocate. As the founder of the Toronto Chinese Artist Center—the largest professional organization for Chinese artists in North America—he has made a profound and lasting impact on the artistic community."
      },
      {
        name: "Justin Poy",
        title: "Founder of the Justin Poy Agency and Philanthropist",
        image: "/justinpoy.jpg",
        desc: "Justin Poy is an award-winning advertising entrepreneur and dedicated philanthropist. Incorporating lessons from his own life challenges, he has successfully raised millions of dollars to support hospitals, universities, and charitable organizations across Canada."
      },
      {
        name: "Winnie Chan",
        title: "Vice President of Sales Management at Tridel",
        image: "/winniechan.jpg",
        desc: "Winnie Chan is the Vice President at Tridel, overseeing a massive portfolio of sustainable land development projects. She is a recognized industry expert who actively champions diversity, equity, and inclusion within the construction sector."
      },
      {
        name: "Rebecca Pang",
        title: "Vice President of RBC",
        image: "/rebeccapang.jpeg",
        desc: "Rebecca Pang is the Vice President of RBC, bringing global expertise from her previous leadership roles at McKinsey & Company, T-Mobile, and China Netcom. She is a dynamic leader who also serves on multiple strategic boards."
      }
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
                viewport={{ once: true, margin: "-100px", amount: 0.05 }}
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
                      {award.presenters && award.presenters.some((p: any) => p.image) && (
                        <div className="mt-12">
                          <h4 className="font-bold text-cyc-navy text-xl mb-8 flex items-center gap-2 border-b border-gray-100 pb-4">
                            <UserCheck className="w-6 h-6 text-cyc-teal" />
                            Featured Award Presenters
                          </h4>
                          <div className="flex flex-wrap justify-center gap-6">
                            {award.presenters.map((presenter: any, pIndex) => (
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
