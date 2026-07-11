"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Plug2,
  ServerCog,
  Gauge,
  Search,
  Users2,
  CheckCircle2,
} from "lucide-react";

const responsibilities = [
  {
    icon: <MonitorSmartphone className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
    title: "Responsive UI Development",
    desc: "Translated Figma designs into pixel-perfect, fully responsive interfaces across all breakpoints.",
  },
  {
    icon: <Plug2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
    title: "API Integration",
    desc: "Connected frontend components to third-party REST APIs and modern headless CMS platforms.",
  },
  {
    icon: <ServerCog className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
    title: "Deployment & DevOps",
    desc: "Deployed production sites on Vercel and cPanel; managed domains, SSL, and environment configs.",
  },
  {
    icon: <Gauge className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
    title: "Performance Optimization",
    desc: "Reduced bundle size, implemented lazy loading and image optimisation to achieve Lighthouse 90+ scores.",
  },
  {
    icon: <Search className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
    title: "SEO Improvements",
    desc: "Implemented meta tags, Open Graph, canonical URLs, XML sitemap and robots.txt for improved rankings.",
  },
  {
    icon: <Users2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
    title: "State & Architecture",
    desc: "Designed scalable frontend architecture with efficient state management for complex UI logic.",
  },
];

const stats = [
  { value: "6", unit: "mo", label: "Duration" },
  { value: "5", unit: "+", label: "Live Projects" },
  { value: "90", unit: "+", label: "Lighthouse" },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 relative bg-transparent pointer-events-none"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 pointer-events-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-gold block" />
            Professional Experience
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-xl leading-[1.1]">
            Where I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 font-normal italic pr-2">
              Proved It
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden shadow-2xl group"
        >
          {/* Hover glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          <div className="relative z-10 p-6 md:p-10 lg:p-14 xl:p-16">
            {/* Company + role header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 md:mb-14">
              <div>
                <div className="inline-flex px-4 py-2 border border-gold/50 text-gold text-xs font-bold uppercase tracking-widest rounded-full mb-4 bg-gold/5">
                  Professional Milestone
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2 group-hover:text-gold transition-colors duration-500 drop-shadow-md">
                  MagicalDigi
                </h3>
                <p className="text-lg md:text-xl text-gray-300 font-light">
                  Frontend Developer Intern
                </p>
                <div className="flex gap-4 items-center mt-4">
                  <span className="w-10 h-[1px] bg-gold block" />
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    6 Months
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                {stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-1 drop-shadow-sm">
                      {s.value}
                      <span className="text-gold text-2xl md:text-3xl">{s.unit}</span>
                    </div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-10 md:mb-14" />

            {/* Responsibilities */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-8">
                Key Responsibilities
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {responsibilities.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="w-10 h-10 rounded-xl border border-gold/30 bg-gold/10 flex items-center justify-center shrink-0 group-hover/item:bg-gold/20 transition-colors duration-300">
                      {r.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-bold font-heading text-sm mb-1 group-hover/item:text-gold transition-colors duration-300">
                        {r.title}
                      </h5>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-12 border-l-2 border-gold/40 pl-5">
              <p className="text-base md:text-lg text-gray-300 font-light italic">
                "Engineered robust business platforms and premium ecommerce experiences,
                bridging the gap between design and high-performance production code."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
