"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "MagicalDigi Client",
      role: "Business Owner",
      quote: "Sohel delivered a website that completely transformed our digital presence. The performance and attention to detail were exceptional.",
    },
    {
      name: "Pearlsee",
      role: "Ecommerce Director",
      quote: "The ecommerce architecture provided was robust, scalable, and visually stunning. Truly a premium experience for our customers.",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative bg-transparent pointer-events-none">
      <div className="max-w-6xl mx-auto px-6 md:px-12 pointer-events-auto">
        
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex justify-center items-center gap-4">
              <span className="w-8 h-[1px] bg-gold block"></span>
              Client Feedback
              <span className="w-8 h-[1px] bg-gold block"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-md tracking-tight">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 font-normal italic pr-2">Validation</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-10 lg:p-14 shadow-2xl overflow-hidden group hover:border-gold/20 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 text-gold/30 font-heading text-6xl md:text-8xl leading-none font-bold group-hover:text-gold/40 transition-colors duration-500 pointer-events-none">"</div>
              
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8 md:mb-10 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-black font-bold font-heading text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold tracking-wider uppercase text-sm mb-1">{testimonial.name}</div>
                    <div className="text-gold text-xs tracking-widest uppercase">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
