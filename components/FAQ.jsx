"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical website project take?",
    a: "Most business websites are completed in 2–4 weeks. Ecommerce platforms and complex projects can take 4–8 weeks depending on scope. I always provide a clear timeline before starting.",
  },
  {
    q: "What technologies do you work with?",
    a: "I specialise in Next.js, React, Tailwind CSS, and Framer Motion for the frontend. I'm comfortable working with REST APIs, Vercel deployments, and integrating with CMS platforms like Sanity and Contentful.",
  },
  {
    q: "Do you handle deployment and hosting setup?",
    a: "Yes. I manage deployment on Vercel, Netlify, or cPanel depending on the project. I also configure custom domains, SSL certificates, and environment variables.",
  },
  {
    q: "Can you work remotely with international clients or teams?",
    a: "Absolutely. I'm set up for remote-first work with async communication via email and WhatsApp, and synchronous collaboration via Google Meet or Zoom across time zones.",
  },
  {
    q: "Are you available for full-time remote frontend roles?",
    a: "Yes — actively looking for remote frontend developer opportunities. I bring real-world production experience from my internship at MagicalDigi and proven deliverables across multiple live projects.",
  },
  {
    q: "Do you offer revisions after delivery?",
    a: "Yes. I include up to 3 rounds of revisions in every project. My goal is your satisfaction — I don't close a project until you're happy with the result.",
  },
  {
    q: "What makes your approach different from other developers?",
    a: "I treat every website as a business asset, not just a design exercise. I focus on performance, SEO, and conversion from the start — so your site works hard even after launch.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-white/10 last:border-0"
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 py-5 px-4 -mx-4 rounded-xl text-left group cursor-pointer transition-colors duration-300 ${isOpen ? "bg-white/5" : "hover:bg-white/5"}`}
        aria-expanded={isOpen}
      >
        <span className={`text-base md:text-lg font-medium transition-colors duration-200 leading-snug ${isOpen ? "text-gold" : "text-white group-hover:text-gold"}`}>
          {item.q}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-200">
          {isOpen ? (
            <Minus className="w-4 h-4 text-gold" />
          ) : (
            <Plus className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors duration-200" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 font-light leading-relaxed text-sm md:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-20 md:py-32 relative bg-transparent pointer-events-none"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 pointer-events-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex justify-center items-center gap-4">
            <span className="w-8 h-[1px] bg-gold block" />
            Common Questions
            <span className="w-8 h-[1px] bg-gold block" />
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-lg tracking-tight">
            Frequently{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 font-normal italic pr-2">
              Asked
            </span>
          </h3>
        </motion.div>

        {/* Accordion */}
        <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl px-8 md:px-12 py-4 shadow-2xl">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-10 text-gray-500 text-sm font-light"
        >
          Still have questions?{" "}
          <a
            href="#contact"
            className="text-gold hover:underline cursor-pointer"
          >
            Let's talk directly →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
