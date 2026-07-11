"use client";

import { motion } from "framer-motion";
import { Layout, ShoppingBag, Zap, Search, MonitorSmartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Business Websites",
      desc: "Premium corporate platforms designed to instantly establish credibility and trust.",
      icon: <Layout className="w-8 h-8 text-gold mb-6" />,
      colSpan: "lg:col-span-2",
    },
    {
      title: "Ecommerce Websites",
      desc: "High-conversion storefronts engineered for seamless user checkout and scalability.",
      icon: <ShoppingBag className="w-8 h-8 text-gold mb-6" />,
      colSpan: "lg:col-span-1",
    },
    {
      title: "Landing Pages",
      desc: "Targeted, motion-rich experiences built to capture leads and drive action.",
      icon: <MonitorSmartphone className="w-8 h-8 text-gold mb-6" />,
      colSpan: "lg:col-span-1",
    },
    {
      title: "SEO Optimization",
      desc: "Data-driven architecture ensuring maximum visibility on global search engines.",
      icon: <Search className="w-8 h-8 text-gold mb-6" />,
      colSpan: "lg:col-span-1",
    },
    {
      title: "Performance",
      desc: "Lightning-fast load times through advanced code optimization and modern stacks.",
      icon: <Zap className="w-8 h-8 text-gold mb-6" />,
      colSpan: "lg:col-span-1",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pointer-events-auto">
        <div className="mb-12 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex justify-center items-center gap-4">
              <span className="w-8 h-[1px] bg-gold block"></span>
              Premium Solutions
              <span className="w-8 h-[1px] bg-gold block"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-lg tracking-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 font-normal italic pr-2">Growth</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-10 hover:border-gold/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(202,138,4,0.1)] ${service.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 origin-left">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-heading font-bold text-white mb-4 drop-shadow-sm group-hover:text-gold transition-colors duration-500">
                  {service.title}
                </h4>
                <p className="text-gray-400 font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
