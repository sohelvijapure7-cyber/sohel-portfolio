"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Gmail/Email SVG Icon
const GmailIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

// GitHub SVG Icon
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    if (data.botcheck) {
      setErrorMsg("Spam detected.");
      return;
    }
    
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "New Message from Portfolio",
          from_name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMsg("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pointer-events-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex justify-center items-center gap-4">
            <span className="w-8 h-[1px] bg-gold block" />
            Get In Touch
            <span className="w-8 h-[1px] bg-gold block" />
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight drop-shadow-2xl tracking-tight">
            Let's Build Something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600 italic font-normal pr-2">
              Great Together
            </span>
          </h3>
          <p className="mt-6 text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto">
            Available for remote frontend roles and freelance projects. Respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Whether you're a recruiter looking for a dedicated remote frontend developer,
              or a business ready to launch a premium website — I'd love to hear from you.
            </p>

            <div className="space-y-4 md:space-y-6">
              <a
                href="mailto:sohelvijapure7@gmail.com"
                className="group flex items-center gap-4 md:gap-6 p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-colors w-fit cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-300 shadow-lg">
                  <GmailIcon className="text-gold group-hover:text-red-500 transition-colors duration-300" size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Email Me</div>
                  <div className="text-white text-base md:text-lg font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] transition-all duration-300">
                    sohelvijapure7@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/919226907396"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 md:gap-6 p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-colors w-fit cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500/10 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300 shadow-lg">
                  <WhatsAppIcon className="text-gold group-hover:text-green-500 transition-colors duration-300" size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">WhatsApp</div>
                  <div className="text-white text-base md:text-lg font-medium group-hover:text-green-400 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all duration-300">
                    +91 9226907396
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/sohelvijapure7-cyber?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 md:gap-6 p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-[#161b22] transition-all duration-300 w-fit cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-[#21262d] flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-300 shadow-lg">
                  <GithubIcon className="text-white group-hover:text-black transition-colors duration-300" size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">GitHub</div>
                  <div className="text-gray-300 text-base md:text-lg font-medium group-hover:text-white transition-all duration-300">
                    sohelvijapure7-cyber
                  </div>
                </div>
              </a>
            </div>

            {/* Availability badge */}
            <div className="mt-8 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-gray-300 font-medium">
                Available for Remote Roles
              </span>
            </div>

            {/* Premium Download Resume Button */}
            <div className="mt-2">
              <a 
                href="/Sohel_Amar_Vijapure_Resume.pdf" 
                download="Sohel_Amar_Vijapure_Resume.pdf"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-yellow-600 text-black font-bold uppercase tracking-widest overflow-hidden rounded-xl cursor-pointer shadow-[0_0_20px_rgba(202,138,4,0.3)] hover:shadow-[0_0_30px_rgba(202,138,4,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-bounce">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/50 backdrop-blur-xl border border-white/10 p-6 md:p-10 lg:p-14 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Internal subtle glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            {isSuccess ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="h-full flex flex-col items-center justify-center text-center py-20 relative z-10">
                <CheckCircle2 className="text-gold mb-6" size={64} />
                <h3 className="text-3xl font-heading font-bold text-white mb-4">Message Sent</h3>
                <p className="text-gray-300 font-light">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 relative z-10">
                <input type="checkbox" className="hidden" style={{ display: 'none' }} {...register("botcheck")} />
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-widest text-gold mb-3">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    {...register("name", { required: true })}
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-gold transition-all duration-200 font-light text-lg placeholder-gray-600"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1.5 block">Name is required</span>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-widest text-gold mb-3">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-gold transition-all duration-200 font-light text-lg placeholder-gray-600"
                    placeholder="john@company.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1.5 block">Valid email is required</span>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-widest text-gold mb-3">
                    Message Details
                  </label>
                  <textarea
                    id="contact-message"
                    {...register("message", { required: true })}
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-gold transition-all duration-200 font-light text-lg min-h-[120px] resize-none placeholder-gray-600"
                    placeholder="Tell me about your project or role opportunity..."
                  />
                  {errors.message && <span className="text-red-500 text-xs mt-1.5 block">Message is required</span>}
                </div>

                {errorMsg && (
                  <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-md p-3">
                    {errorMsg}
                  </div>
                )}

                  <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-5 bg-gold text-black font-bold uppercase tracking-widest overflow-hidden rounded-xl flex justify-center items-center cursor-pointer disabled:opacity-70 shadow-[0_0_20px_rgba(202,138,4,0.15)] hover:shadow-[0_0_30px_rgba(202,138,4,0.3)] transition-shadow duration-300"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
