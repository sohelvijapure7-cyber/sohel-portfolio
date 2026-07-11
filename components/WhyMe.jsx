"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Palette,
  MonitorSmartphone,
  ScanEye,
  MessageSquare,
  BookOpen,
  Gauge,
} from "lucide-react";

const reasons = [
  {
    icon: <TrendingUp className="w-8 h-8 text-gold mb-6" />,
    title: "Business-First Mindset",
    desc: "Every decision is driven by business goals — not just aesthetics. I build websites that convert.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: <Palette className="w-8 h-8 text-gold mb-6" />,
    title: "Premium UI",
    desc: "Pixel-perfect interfaces that make visitors trust and engage with your brand instantly.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-gold mb-6" />,
    title: "Responsive Development",
    desc: "Flawless from 320px to 1920px — every breakpoint tested and polished.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: <ScanEye className="w-8 h-8 text-gold mb-6" />,
    title: "Attention to Detail",
    desc: "Micro-animations, spacing, contrast — the small things that make a big difference.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-gold mb-6" />,
    title: "Reliable Communication",
    desc: "Clear updates, realistic timelines and rapid response during the entire project lifecycle.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-gold mb-6" />,
    title: "Continuous Learning",
    desc: "Always adopting the latest tools, patterns and best practices to keep your product competitive.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: <Gauge className="w-8 h-8 text-gold mb-6" />,
    title: "Performance Focus",
    desc: "Lighthouse 90+ on every delivery. Fast sites rank higher, convert better and retain users longer.",
    colSpan: "lg:col-span-2",
  },
];

export default function WhyMe() {
  return (
    <section
      id="why-me"
      className="py-20 md:py-32 relative bg-transparent pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pointer-events-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex justify-center items-center gap-4">
              <span className="w-8 h-[1px] bg-gold block" />
              The Difference
              <span className="w-8 h-[1px] bg-gold block" />
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-lg leading-[1.1] tracking-tight">
              Why Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 font-normal italic pr-2">
                With Me
              </span>
            </h3>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-10 hover:border-gold/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(202,138,4,0.1)] ${reason.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 origin-left">
                  {reason.icon}
                </div>
                <h4 className="text-2xl font-heading font-bold text-white mb-4 drop-shadow-sm group-hover:text-gold transition-colors duration-500">
                  {reason.title}
                </h4>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
