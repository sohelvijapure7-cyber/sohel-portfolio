"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const timelineItems = [
    {
      step: "01",
      title: "Curious Learner",
      desc: "Discovered a passion for how the web works and began diving deep into code.",
    },
    {
      step: "02",
      title: "BCA Student",
      desc: "Laying the formal foundation in computer science and modern web technologies.",
    },
    {
      step: "03",
      title: "6-Month Internship at MagicalDigi",
      desc: "Transitioned to professional development, building high-performance websites for real-world clients.",
    },
    {
      step: "04",
      title: "Real Projects",
      desc: "Delivered live platforms like the MagicalDigi Business Website and Pearlsee Ecommerce.",
    },
    {
      step: "05",
      title: "Future Global Web Developer",
      desc: "Pushing the boundaries of immersive, high-conversion web experiences on a global scale.",
    },
  ];

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 relative bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Text Story */}
          <motion.div style={{ opacity, y }} className="relative z-10 bg-black/40 backdrop-blur-md p-6 md:p-12 border border-white/10 rounded-2xl shadow-2xl will-change-[opacity,transform]">
            <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-gold block"></span>
              The Journey
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 md:mb-8 leading-tight">
              Modern Developer.<br />
              <span className="text-gray-400">Professional execution.</span>
            </h3>
            
            <div className="space-y-5 md:space-y-6 text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              <p>
                My development approach is driven by a simple belief: code shouldn't just function—it should <span className="text-white font-medium">feel</span> right.
              </p>
              <p>
                During my intensive internship at MagicalDigi, I transitioned from theoretical concepts to engineering robust, scalable solutions for real businesses.
              </p>
              <p>
                Today, I specialize in the intersection of <span className="text-gold">high-performance architecture</span> and <span className="text-white font-medium">premium visual storytelling</span>.
              </p>
            </div>
            
            <div className="mt-8 md:mt-12 grid grid-cols-2 gap-6 md:gap-8 border-t border-white/10 pt-8 md:pt-10">
              <div>
                <div className="text-2xl md:text-4xl font-bold font-heading text-white mb-2 drop-shadow-md">5+</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Live Projects</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold font-heading text-white mb-2 drop-shadow-md">100%</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Animated Timeline */}
          <div className="relative z-10 py-6 md:py-8 bg-gradient-to-r from-black/60 to-transparent backdrop-blur-sm rounded-r-3xl border-l border-white/10">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className="mb-8 md:mb-12 last:mb-0 relative group pl-4 md:pl-12 lg:pl-16"
              >
                {/* Node indicator */}
                <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-black border-2 border-gold rounded-full group-hover:bg-gold transition-colors duration-300 shadow-[0_0_10px_rgba(202,138,4,0)] group-hover:shadow-[0_0_20px_rgba(202,138,4,0.8)]"></div>
                
                {/* Content */}
                <div className="text-gold font-bold tracking-widest text-xs mb-2 uppercase">{item.step}</div>
                <h4 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-md">{item.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base group-hover:text-white transition-colors duration-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
