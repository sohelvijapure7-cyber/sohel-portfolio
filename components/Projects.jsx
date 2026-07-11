"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "MagicalDigi",
    category: "Professional Business Website",
    desc: "A high-performance corporate platform engineered for maximum conversion, SEO visibility, and modern UI.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/projects/magicaldigi-hero.webp",
    url: "https://magicaldigi.com/",
    color: "from-gold/20 to-yellow-700/20",
    caseStudy: {
      overview:
        "A full corporate website for MagicalDigi, a digital marketing agency, built to establish authority, drive leads and showcase their services with a premium feel.",
      businessGoal:
        "Increase credibility and inbound inquiries from potential clients searching for digital marketing services.",
      contribution:
        "Led the entire frontend build — architecture, component design, SEO implementation, performance tuning, and Vercel deployment.",
      keyFeatures: [
        "Animated hero with scroll-triggered reveals",
        "Service showcase with glass card UI",
        "Conversion-optimised contact form",
        "Fully responsive across all devices",
      ],
      performance: "Lighthouse 90+ · LCP < 2.5s · CLS < 0.1",
      seo: "Meta tags, OG images, XML sitemap, robots.txt, semantic HTML",
      deployment: "Vercel with custom domain & SSL",
      challenges:
        "Balancing heavy animations with performance targets on lower-end mobile devices — solved via reduced-motion detection and lazy loading.",
      outcome:
        "Live production site serving real clients with measurable improvements in enquiry volume and time-on-site.",
    },
  },
  {
    title: "Pearlsee",
    category: "Ecommerce Platform",
    desc: "Premium ecommerce architecture with a seamless product experience and responsive design.",
    tech: ["React", "Tailwind CSS", "REST API", "Hostinger"],
    image: "/projects/pearlsee-hero.png",
    url: "https://pearlsee.com/",
    color: "from-gray-700/20 to-gray-900/20",
    caseStudy: {
      overview:
        "A full-featured ecommerce storefront for Pearlsee, built for a seamless end-to-end shopping journey from product discovery to checkout.",
      businessGoal:
        "Provide a trustworthy, fast and visually compelling online store to increase product sales and customer retention.",
      contribution:
        "Built the full product listing, cart, and checkout frontend; integrated with the REST API; optimised images and lazy loaded product grids.",
      keyFeatures: [
        "Product catalogue with filters and search",
        "Cart and checkout with API integration",
        "Mobile-first layout with touch-friendly UX",
        "Performance-optimised image loading",
      ],
      performance: "Optimised images · Infinite scroll lazy load · Minimal JS bundle",
      seo: "Product schema markup, canonical URLs, dynamic meta per product page",
      deployment: "Hostinger shared hosting with manual FTP deployment",
      challenges:
        "Handling large product catalogues without performance degradation — solved with virtualised lists and staggered loading.",
      outcome:
        "Live ecommerce store with real transactions, improved page speed versus previous platform, and positive user feedback on UX.",
    },
  },
  {
    title: "Personal Portfolio",
    category: "Senior Video Editor Portfolio",
    desc: "An award-winning interactive portfolio focusing on personal branding, UI/UX, and responsive experience.",
    tech: ["Next.js 15", "Tailwind CSS", "Framer Motion", "Three.js"],
    image: "/projects/yasinfaras-hero.png",
    url: "https://yasin-faras.netlify.app/",
    color: "from-gold/30 to-black/40",
    caseStudy: {
      overview:
        "A cinematic, motion-rich personal portfolio site designed to showcase a creative developer's identity with immersive 3D and scroll-based animations.",
      businessGoal:
        "Stand out from generic developer portfolios and convert visitors into clients or interview callbacks through a memorable first impression.",
      contribution:
        "Designed and developed the entire experience — 3D canvas integration, scroll-based animation system, responsive layout, and Netlify deployment.",
      keyFeatures: [
        "WebGL 3D centerpiece with interactive controls",
        "Scroll-triggered reveal animations throughout",
        "Case study-style project presentations",
        "Lighthouse 90+ with no CLS issues",
      ],
      performance: "Lighthouse 91 · Zero CLS · Preloaded critical 3D assets",
      seo: "Structured data, OG images, semantic headings, meta descriptions",
      deployment: "Netlify with automatic Git deploy on push",
      challenges:
        "Maintaining 60 FPS on the 3D canvas while scroll animations ran simultaneously — solved with RAF-based rendering and reduced-motion fallbacks.",
      outcome:
        "Live portfolio attracting consistent organic traffic with strong dwell time indicating high engagement.",
    },
  },
];

function CaseStudy({ cs }) {
  const rows = [
    { label: "Overview", value: cs.overview },
    { label: "Business Goal", value: cs.businessGoal },
    { label: "My Contribution", value: cs.contribution },
    {
      label: "Key Features",
      value: (
        <ul className="list-none space-y-1">
          {cs.keyFeatures.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      ),
    },
    { label: "Performance", value: cs.performance },
    { label: "SEO", value: cs.seo },
    { label: "Deployment", value: cs.deployment },
    { label: "Challenges", value: cs.challenges },
    { label: "Outcome", value: cs.outcome },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <div className="border-t border-white/10 p-6 md:p-10 lg:p-16 bg-black/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`${row.label === "Overview" || row.label === "Key Features" ? "md:col-span-2" : ""} border-b border-white/5 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0`}
            >
              <p className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
                {row.label}
              </p>
              {typeof row.value === "string" ? (
                <p className={`text-sm font-light leading-relaxed ${row.label === "Outcome" ? "text-gold/90 font-medium" : "text-gray-400"}`}>
                  {row.value}
                </p>
              ) : (
                row.value
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative bg-transparent pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pointer-events-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-gold block" />
              Selected Works
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white drop-shadow-xl">
              Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 font-normal italic pr-2">
                Showcase
              </span>
            </h3>
          </motion.div>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-black/60 backdrop-blur-xl"
            >
              {/* Image + Info Row */}
              <div className="flex flex-col lg:flex-row min-h-[360px] md:min-h-[460px]">
                {/* Image side */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live website`}
                  className="group/image block w-full lg:w-[55%] relative overflow-hidden bg-gradient-to-br from-[#111] to-[#000] h-[200px] sm:h-[260px] md:h-[400px] lg:h-auto lg:min-h-[460px] cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} website hero section preview`}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    loading="lazy"
                    className="object-cover object-top opacity-90 transition-transform duration-500 group-hover/image:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`}
                  />
                  <div className="absolute inset-0 z-20 flex items-end justify-between gap-4 border-r border-white/10 bg-gradient-to-t from-black/80 via-black/15 to-transparent p-6 md:p-8">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
                        Live Preview
                      </div>
                      <div className="text-2xl md:text-3xl font-heading font-bold text-white drop-shadow-lg">
                        {project.title}
                      </div>
                    </div>
                    <div className="hidden sm:inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md group-hover/image:border-gold group-hover/image:text-gold transition-colors duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </a>

                {/* Content side */}
                <div className="w-full lg:w-[45%] p-6 md:p-10 lg:p-14 flex flex-col justify-center relative z-20">
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live website`}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      <ArrowUpRight size={24} />
                    </a>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold font-bold mb-4 md:mb-6">
                      {project.category}
                    </div>
                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4 group-hover:text-gold transition-colors duration-500 drop-shadow-md">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed mb-6 text-base md:text-lg">
                      {project.desc}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 border border-white/20 rounded-full text-[11px] text-white uppercase tracking-tight bg-white/5 backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action row */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-colors duration-300 cursor-pointer"
                      >
                        Live Demo
                        <ArrowUpRight size={14} />
                      </a>
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                        className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer bg-transparent ${openIndex === index ? "border-gold text-gold hover:bg-gold/10" : "border-white/20 text-gray-300 hover:border-gold/40 hover:text-gold"}`}
                      >
                        {openIndex === index ? "Close Case Study" : "View Case Study"}
                        {openIndex === index ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Accordion */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <CaseStudy key="case" cs={project.caseStudy} />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
