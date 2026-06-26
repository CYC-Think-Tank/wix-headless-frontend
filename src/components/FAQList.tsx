"use client";

import { motion, Variants } from "framer-motion";

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

export default function FAQList({ faqs }: { faqs: FAQItem[] }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="space-y-8"
    >
      {faqs.length === 0 ? (
        <div className="text-center text-gray-500 py-12 font-medium">
          No FAQs found for this category yet. Add some in your Wix CMS!
        </div>
      ) : (
        faqs.map((faq, i) => (
          <motion.div
            key={faq._id || i}
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
  );
}
