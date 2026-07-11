"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Search,
  Zap,
  Accessibility,
  Smartphone,
  Gauge,
  ShieldCheck,
  Globe2,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-gold" />,
    title: "Responsive Design",
    desc: "Perfect layout from 320px mobile to 4K displays.",
  },
  {
    icon: <Search className="w-6 h-6 text-gold" />,
    title: "Technical SEO",
    desc: "Meta tags, structured data, sitemap & robots.txt built-in.",
  },
  {
    icon: <Zap className="w-6 h-6 text-gold" />,
    title: "Performance Optimization",
    desc: "90+ Lighthouse score via lazy loading & code splitting.",
  },
  {
    icon: <Accessibility className="w-6 h-6 text-gold" />,
    title: "Accessibility",
    desc: "ARIA labels, keyboard navigation & WCAG-compliant contrast.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-gold" />,
    title: "Mobile First",
    desc: "Designed mobile-first, enhanced progressively upward.",
  },
  {
    icon: <Gauge className="w-6 h-6 text-gold" />,
    title: "Fast Loading",
    desc: "Optimised assets, CDN-ready & minimal render-blocking.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    title: "Secure Contact Form",
    desc: "Validation, honeypot & reCAPTCHA-ready form handling.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-gold" />,
    title: "Cross Browser Support",
    desc: "Tested on Chrome, Firefox, Safari & Edge without breaks.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-gold" />,
    title: "Production Ready",
    desc: "Deployed, versioned and ready for real traffic from day one.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Includes() {
  return (
    <section
      id="includes"
      className="py-20 md:py-32 relative bg-transparent pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pointer-events-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex justify-center items-center gap-4">
            <span className="w-8 h-[1px] bg-gold block" />
            Quality Guarantee
            <span className="w-8 h-[1px] bg-gold block" />
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-lg">
            Every Website{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 font-normal italic pr-2">
              Includes
            </span>
          </h3>
          <p className="mt-4 text-gray-400 text-base md:text-lg font-light max-w-xl mx-auto">
            Every project I deliver comes with these standards built in — not as
            add-ons.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 hover:border-gold/40 hover:-translate-y-[1px] transition-all duration-500 shadow-xl cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex items-start gap-4">
                {/* Icon with checkmark overlay */}
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-xl border border-gold/30 bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold font-heading text-base mb-1.5 group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
