"use client";

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

export type FAQItem = {
  _id: string;
  question?: string;
  title?: string;
  answer?: string;
  category?: string;
};

export default function FAQTabs({ faqs }: { faqs: FAQItem[] }) {
  const [activeTab, setActiveTab] = useState<"regular" | "startups">("regular");

  // Filter FAQs based on category. If no category exists, default to regular.
  const regularFAQs = faqs.filter(f => !f.category || f.category.toLowerCase() === "regular");
  const startupsFAQs = faqs.filter(f => f.category?.toLowerCase() === "startups");

  const currentFAQs = activeTab === "regular" ? regularFAQs : startupsFAQs;

  return (
    <>
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
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="space-y-8"
      >
        {currentFAQs.length === 0 ? (
          <div className="text-center text-gray-500 py-12 font-medium">
            No FAQs found for this category yet. Add some in your Wix CMS!
          </div>
        ) : (
          currentFAQs.map((faq, i) => (
            <motion.div 
              key={faq._id || i} 
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
                  <h3 className="text-xl sm:text-2xl font-bold text-cyc-navy mb-3 sm:mb-4 leading-tight">
                    {faq.question || faq.title || "Untitled Question"}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
                    {faq.answer || "No answer provided yet."}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </>
  );
}
