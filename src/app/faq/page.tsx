"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<"regular" | "startups">("regular");

  const regularFAQs = [
    {
      q: "Can I get volunteer hours / service hours by participating in CYC?",
      a: "Yes! CYC offers up to 20 service hours for general members through our 2 hour bi-weekly sessions on Saturdays and 4 hour final competition at the end. After participating in one term, you’re able to return as a team lead and subsequently a program executive in following semesters. Our program also provides 4 hours of service hours for non-participating students that volunteer to judge the final competitions where students present their work. For students in the IB program, your project can count towards CAS hours (assuming approval from your school / relevant program advisors)."
    },
    {
      q: "What will I do in the program, and what do I get from participating?",
      a: "By joining our program, you’ll build a passion project with a team that addresses community needs in environmental sustainability, civic / community involvement, and public service while earning service hours over a 4-month semester. You’ll receive mentorship, develop leadership skills, and grow through a clear pipeline from participant to team lead to exec/organizer, with opportunities to advance into a paid internship. Past members have competed for a range of opportunities and awards, including fully funded summer study programs at the University of Cambridge, paid internships, and OSSD-accredited courses, during our seasonal end-of-term case competition. Program alumni have also gone on to attend prestigious Canadian and American universities, including Cornell, UPenn Wharton, Columbia, WashU, UCLA, UC Berkeley, NYU Stern, and more."
    },
    {
      q: "How does Canadian Youth Champions help youth develop skills?",
      a: "Canadian Youth Champions helps youth develop skills through virtual learning, guest speakers, mentorship, volunteering opportunities, leadership activities, project showcases, and community-based experiences that build confidence, communication, teamwork, and career-ready soft skills."
    }
  ];

  const startupsFAQs = [
    {
      q: "Where is the Progenics Innovation Hub located in Toronto?",
      a: "Our expansive 6900 sqft Innovation Hub is conveniently located in the heart of Toronto near the subway and at the intersection of highways 401 and 404. Step into the future of workspace innovation where convenience meets opportunity."
    },
    {
      q: "What facilities and amenities are available at the Innovation Hub?",
      a: "From dynamic office spaces to large conference rooms and convenient meeting areas, every corner is crafted to foster creativity and collaboration. The Innovation Hub meets all of your needs in one location, including quality equipment, modern amenities, flexible workspaces, guidance from industry professionals, and financing."
    },
    {
      q: "Who can benefit from your coworking spaces?",
      a: "Our coworking spaces provide a professional and productive environment perfect for entrepreneurs, freelancers, remote teams, and all types of businesses. Join our community and experience the benefits of working in a collaborative and inspiring environment."
    }
  ];

  const currentFAQs = activeTab === "regular" ? regularFAQs : startupsFAQs;

  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 lg:px-8 bg-cyc-navy overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyc-navy z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-md"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl lg:text-2xl text-gray-300 font-medium"
          >
            Find answers to common questions about our programs, volunteering, and workspace.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gray-50 flex-grow">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          {/* Tabs */}
          <div className="flex justify-center mb-8 px-2 sm:px-0 w-full">
            <div className="flex w-full sm:inline-flex sm:w-auto bg-gray-200/50 rounded-full p-2 relative">
              <button
                onClick={() => setActiveTab("regular")}
                className={`relative z-10 flex-1 sm:flex-none px-2 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-lg font-bold rounded-full transition-colors duration-300 whitespace-nowrap ${
                  activeTab === "regular" ? "text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Regular Program
              </button>
              <button
                onClick={() => setActiveTab("startups")}
                className={`relative z-10 flex-1 sm:flex-none px-2 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-lg font-bold rounded-full transition-colors duration-300 whitespace-nowrap ${
                  activeTab === "startups" ? "text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Innovation Hub
              </button>

              {/* Animated Tab Indicator */}
              <div 
                className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-cyc-navy rounded-full transition-all duration-300 ease-out z-0`}
                style={{
                  transform: activeTab === "regular" ? "translateX(0)" : "translateX(100%)",
                  left: "8px"
                }}
              />
            </div>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {currentFAQs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-12 h-12 bg-cyc-teal/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-cyc-teal font-black text-xl">Q</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-cyc-navy mb-3 sm:mb-4 leading-tight">{faq.q}</h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
