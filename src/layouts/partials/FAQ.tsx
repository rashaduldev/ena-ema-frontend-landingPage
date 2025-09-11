"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "How long does it take?", answer: "5 days from start to finish - design, development, and deployment included." },
  { question: "Do you provide revisions?", answer: "Yes, unlimited revisions until you're 100% satisfied with the final result." },
  { question: "What’s the payment process?", answer: "50% upfront to get started, 50% after final delivery and your approval." },
  { question: "Can you deploy on my hosting?", answer: "Absolutely! Deployment is included in every package, on your hosting or ours." },
  { question: "Why are your prices so affordable compared to agencies?", answer: "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-[960px] mx-auto my-10 space-y-6">
      <h2 className="text-3xl md:text-5xl font-medium mb-12 text-center">Got Questions? We’ve Got Answers.</h2>
      {faqs.map((faq, i) => (
        <div key={i} className="bg-[#192420] rounded-xl text-left overflow-hidden">
          {/* Ellipse icon above question */}
          <div className="flex justify-start pl-6 mt-4">
            <span className="w-3 h-3 bg-primary rounded-full"></span>
          </div>

          <button
            onClick={() => toggle(i)}
            className="w-full text-left px-6 py-4 cursor-pointer"
          >
            <span className="font-bold text-2xl tracking-[-1px]">{faq.question}</span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="px-8 pb-6 overflow-hidden text-lg text-text"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
