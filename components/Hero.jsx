"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const headline = "BUILDING DIGITAL EXPERIENCES THAT HELP BUSINESSES GROW".split(" ");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start pointer-events-auto mt-10 lg:mt-20">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-gray-300 font-medium">Sohel Vijapure • Frontend Developer | React & Next.js</span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-medium text-white leading-tight md:leading-tight mb-6 drop-shadow-2xl max-w-4xl text-left tracking-tight">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: "easeOut" }}
              className="inline-block mr-3 lg:mr-4 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md text-left"
        >
          I design and develop modern websites, ecommerce platforms, and high-performance digital experiences focused on driving results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3.5 bg-white text-black font-medium text-sm rounded-md overflow-hidden transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
          >
            <span className="relative z-10">Services</span>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3.5 border border-white/20 text-white font-medium text-sm rounded-md hover:border-white/50 hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm shadow-none hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-10 flex flex-col items-start gap-2 pointer-events-none hidden md:flex"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative mt-2">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-white will-change-transform"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
