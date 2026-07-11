"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Understanding business goals, target audience, and project scope through a structured brief.",
    },
    {
      num: "02",
      title: "Planning",
      desc: "Defining technical architecture, sitemap, component structure and project timeline.",
    },
    {
      num: "03",
      title: "Development",
      desc: "Engineering high-performance code with Next.js, React and modern web standards.",
    },
    {
      num: "04",
      title: "Testing",
      desc: "Cross-browser testing, responsive QA from 320px to 1920px, and accessibility review.",
    },
    {
      num: "05",
      title: "SEO",
      desc: "Implementing meta tags, Open Graph, schema markup, sitemap and performance tuning.",
    },
    {
      num: "06",
      title: "Deployment",
      desc: "Deploying to Vercel or cPanel with custom domain, SSL, and environment configuration.",
    },
    {
      num: "07",
      title: "Support",
      desc: "Post-launch support, monitoring, and revisions to keep everything running smoothly.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section
      id="process"
      className="relative bg-obsidian border-t border-white/5 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-gold block" />
            Inside My Development Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
            From Concept to{" "}
            <span className="text-gray-600 font-normal italic">Reality</span>
          </h3>
        </motion.div>

        {/* Responsive Grid with Premium Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] group relative rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(202,138,4,0.15)] overflow-hidden cursor-pointer"
            >
              {/* Liquid Glass Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              {/* Number/Icon */}
              <div className="mb-6 flex justify-between items-start relative z-10">
                <div className="text-5xl font-heading font-bold text-white/10 group-hover:text-gold/20 transition-colors duration-300">
                  {step.num}
                </div>
                {/* Small indicator dot */}
                <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-gold transition-colors duration-300 shadow-[0_0_0_rgba(202,138,4,0)] group-hover:shadow-[0_0_10px_rgba(202,138,4,0.8)] mt-2" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
