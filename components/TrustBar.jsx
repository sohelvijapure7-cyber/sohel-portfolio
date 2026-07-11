"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Briefcase, Zap, Search, MonitorSmartphone } from "lucide-react";

function CountUp({ target, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  {
    icon: <Briefcase className="w-5 h-5 text-gold shrink-0" />,
    label: "Live Projects",
    value: 5,
    suffix: "+",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />,
    label: "Internship at MagicalDigi",
    value: 6,
    suffix: "-Month",
  },
  {
    icon: <Zap className="w-5 h-5 text-gold shrink-0" />,
    label: "Performance Focused",
    value: 90,
    suffix: "+ Lighthouse",
  },
  {
    icon: <Search className="w-5 h-5 text-gold shrink-0" />,
    label: "SEO Optimized",
    value: null,
    badge: "Every Build",
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5 text-gold shrink-0" />,
    label: "Responsive Design",
    value: null,
    badge: "320px → 1920px",
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust indicators"
      className="relative py-10 md:py-12 bg-transparent pointer-events-none"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group w-full sm:w-[240px] lg:w-auto lg:flex-1 flex items-center gap-3 px-5 py-3.5 min-h-[72px] rounded-full border border-white/10 bg-black/40 backdrop-blur-xl hover:border-gold/40 hover:bg-black/60 hover:scale-[1.02] transition-all duration-300 cursor-default"
            >
              {m.icon}
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-sm font-heading">
                  {m.value !== null ? (
                    <>
                      <CountUp target={m.value} suffix={m.suffix} />
                    </>
                  ) : (
                    <span className="text-gold">{m.badge}</span>
                  )}
                </span>
                <span className="text-gray-400 text-xs tracking-wide uppercase">
                  {m.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
