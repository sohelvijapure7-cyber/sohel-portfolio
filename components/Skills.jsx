"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let isPaused = false;

    const skills = [
      { name: "Next.js", x: 0, y: 0, vx: 0, vy: 0, radius: 40, mass: 1 },
      { name: "React", x: 0, y: 0, vx: 0, vy: 0, radius: 35, mass: 0.8 },
      { name: "Tailwind CSS", x: 0, y: 0, vx: 0, vy: 0, radius: 45, mass: 1.1 },
      { name: "JavaScript", x: 0, y: 0, vx: 0, vy: 0, radius: 40, mass: 1 },
      { name: "HTML5", x: 0, y: 0, vx: 0, vy: 0, radius: 35, mass: 0.8 },
      { name: "CSS3", x: 0, y: 0, vx: 0, vy: 0, radius: 35, mass: 0.8 },
      { name: "Framer Motion", x: 0, y: 0, vx: 0, vy: 0, radius: 40, mass: 1 },
      { name: "GitHub", x: 0, y: 0, vx: 0, vy: 0, radius: 30, mass: 0.7 },
      { name: "Vercel", x: 0, y: 0, vx: 0, vy: 0, radius: 30, mass: 0.7 },
    ];

    let mouse = { x: null, y: null };

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = window.innerWidth < 768 ? 320 : 500;

      skills.forEach((skill) => {
        skill.x = Math.random() * (canvas.width - skill.radius * 2) + skill.radius;
        skill.y = Math.random() * (canvas.height - skill.radius * 2) + skill.radius;
        skill.vx = (Math.random() - 0.5) * 1;
        skill.vy = (Math.random() - 0.5) * 1;
      });
    };

    // Throttled mousemove — only update at most 60fps
    let lastMouseUpdate = 0;
    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMouseUpdate < 16) return;
      lastMouseUpdate = now;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("resize", resize, { passive: true });
    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", () => { mouse.x = null; mouse.y = null; });

    const drawLine = (p1, p2, distance) => {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(202, 138, 4, ${0.8 - distance / 250})`;
      ctx.lineWidth = 1.5;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.closePath();
    };

    const drawNode = (skill) => {
      let isHovered = false;
      if (mouse.x !== null) {
        const dx = mouse.x - skill.x;
        const dy = mouse.y - skill.y;
        if (Math.sqrt(dx * dx + dy * dy) < skill.radius + 10) isHovered = true;
      }
      const currentRadius = isHovered ? skill.radius * 1.1 : skill.radius;

      if (isHovered) {
        ctx.beginPath();
        ctx.arc(skill.x, skill.y, currentRadius + 15, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(202, 138, 4, 0.2)";
        ctx.fill();
        ctx.closePath();
      }

      ctx.beginPath();
      ctx.arc(skill.x, skill.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? "rgba(0,0,0,0.9)" : "rgba(10,10,10,0.8)";
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = isHovered ? "#FBBF24" : "rgba(202, 138, 4, 0.4)";
      ctx.stroke();
      ctx.closePath();

      ctx.font = `bold ${isHovered ? 14 : 12}px "Inter", sans-serif`;
      ctx.fillStyle = isHovered ? "#FFFFFF" : "#E7E5E4";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(skill.name, skill.x, skill.y);
    };

    const updateNode = (skill) => {
      if (skill.x + skill.radius > canvas.width || skill.x - skill.radius < 0) skill.vx *= -1;
      if (skill.y + skill.radius > canvas.height || skill.y - skill.radius < 0) skill.vy *= -1;

      if (mouse.x !== null) {
        const dx = skill.x - mouse.x;
        const dy = skill.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          skill.vx += (dx / dist) * force * 0.3;
          skill.vy += (dy / dist) * force * 0.3;
        }
      }

      skill.vx *= 0.99;
      skill.vy *= 0.99;

      const speed = Math.sqrt(skill.vx * skill.vx + skill.vy * skill.vy);
      if (speed < 0.2) {
        skill.vx += (Math.random() - 0.5) * 0.1;
        skill.vy += (Math.random() - 0.5) * 0.1;
      }

      skill.x += skill.vx;
      skill.y += skill.vy;
    };

    const animate = () => {
      if (isPaused) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      skills.forEach(updateNode);

      for (let i = 0; i < skills.length; i++) {
        for (let j = i + 1; j < skills.length; j++) {
          const dx = skills[i].x - skills[j].x;
          const dy = skills[i].y - skills[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) drawLine(skills[i], skills[j], dist);
        }
      }

      skills.forEach(drawNode);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Pause when canvas is scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => { isPaused = !entry.isIntersecting; },
      { threshold: 0.01 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    // Pause when tab is hidden
    const handleVisibility = () => { isPaused = document.hidden; };
    document.addEventListener("visibilitychange", handleVisibility);

    resize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section className="py-32 relative bg-transparent pointer-events-none">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pointer-events-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm font-bold tracking-widest text-gold uppercase mb-4 flex justify-center items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-gold block"></span>
            Technical Ecosystem
            <span className="w-12 h-[1px] bg-gold block"></span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white drop-shadow-lg tracking-tight"
          >
            Connected <span className="text-gray-400 italic font-normal">Expertise</span>
          </motion.h3>
        </div>

        {/* Canvas Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
          <canvas
            ref={canvasRef}
            className="w-full h-[320px] md:h-[500px] cursor-crosshair"
          />
        </motion.div>

        <div className="text-center mt-6 text-gray-600 text-sm uppercase tracking-widest font-bold">
          Interact with the nodes
        </div>
      </div>
    </section>
  );
}
