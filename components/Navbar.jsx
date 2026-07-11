"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const close = (e) => {
      if (!e.target.closest("nav")) setMobileMenuOpen(false);
    };
    document.addEventListener("touchstart", close, { passive: true });
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("touchstart", close);
      document.removeEventListener("mousedown", close);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        transition: "background 0.5s ease, backdrop-filter 0.5s ease, padding 0.3s ease",
        // Transparent glassmorphism when scrolled — NOT solid dark
        background: scrolled
          ? "rgba(8, 6, 18, 0.45)"
          : "transparent",
        backdropFilter: scrolled ? "blur(22px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(22px) saturate(160%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        padding: scrolled ? "10px 0" : "18px 0",
      }}
    >
      <style>{`
        /* Download icon bounce */
        @keyframes dlBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .nav-dl-icon { animation: dlBounce 1.5s ease-in-out infinite; }

        /* Nav link underline slide-in */
        .nav-link-item {
          position: relative;
          color: #9ca3af;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          transition: color 0.25s ease;
          padding-bottom: 3px;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background: linear-gradient(90deg, #A78BFA, #f59e0b);
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link-item:hover {
          color: #ffffff;
        }
        .nav-link-item:hover::after {
          width: 100%;
        }

        /* SV Logo hover — S turns gold, V glows white, slight scale */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 2px;
          text-decoration: none;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 0.08em;
          transition: transform 0.3s ease;
        }
        .nav-logo:hover {
          transform: scale(1.08);
        }
        .nav-logo .s-char {
          color: #d1d5db;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .nav-logo .v-char {
          color: #ffffff;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .nav-logo:hover .s-char {
          color: #A78BFA;
          text-shadow: 0 0 12px rgba(167, 139, 250, 0.8);
        }
        .nav-logo:hover .v-char {
          color: #ffffff;
          text-shadow: 0 0 16px rgba(255,255,255,0.7);
        }

        /* Resume gradient button */
        .nav-resume-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          background: linear-gradient(135deg, #7C3AED 0%, #A78BFA 45%, #f59e0b 100%);
          color: #000;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          box-shadow: 0 0 18px rgba(167,139,250,0.3), 0 0 6px rgba(245,158,11,0.2);
          transition: box-shadow 0.35s ease, transform 0.25s ease, filter 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .nav-resume-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #9061fa 0%, #c4a3fb 45%, #fbbf24 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .nav-resume-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 28px rgba(167,139,250,0.55), 0 0 14px rgba(245,158,11,0.4);
          filter: brightness(1.08);
        }
        .nav-resume-btn:hover::before { opacity: 1; }
        .nav-resume-btn > * { position: relative; z-index: 1; }

        /* Mobile resume button */
        .mob-resume-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 36px;
          background: linear-gradient(135deg, #7C3AED 0%, #A78BFA 45%, #f59e0b 100%);
          color: #000;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          width: 100%;
          box-shadow: 0 0 22px rgba(167,139,250,0.4), 0 0 8px rgba(245,158,11,0.25);
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
          margin-top: 10px;
          user-select: none;
        }

        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-hamburger { display: none !important; }
          .mobile-nav-dropdown { display: none !important; }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo — S turns purple/gold on hover, like footer animation */}
        <a href="#" className="nav-logo">
          <span className="s-char">S</span>
          <span className="v-char">V</span>
        </a>

        {/* Desktop Nav */}
        <div
          style={{ display: "none", alignItems: "center", gap: "28px" }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-item">
              {link.name}
            </a>
          ))}

          {/* Resume — purple-to-gold gradient matching Image 2 */}
          <a
            href="/Sohel_Amar_Vijapure_Resume.pdf"
            download="Sohel_Amar_Vijapure_Resume.pdf"
            className="nav-resume-btn"
          >
            <span className="nav-dl-icon" style={{ display: "flex" }}>
              <Download size={14} />
            </span>
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            padding: "8px",
            borderRadius: "8px",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
            zIndex: 10001,
            minWidth: "44px",
            minHeight: "44px",
          }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="mobile-hamburger"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: mobileMenuOpen ? "600px" : "0px",
          transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease",
          opacity: mobileMenuOpen ? 1 : 0,
          background: "rgba(5, 3, 15, 0.96)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          borderBottom: mobileMenuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        className="mobile-nav-dropdown"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px 20px 28px",
            gap: "6px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#9ca3af",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                padding: "13px 32px",
                borderRadius: "10px",
                width: "100%",
                textAlign: "center",
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
                cursor: "pointer",
                transition: "color 0.15s, background 0.15s",
                display: "block",
                userSelect: "none",
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(167,139,250,0.08)";
              }}
              onTouchEnd={(e) => {
                setTimeout(() => {
                  if (e.currentTarget) {
                    e.currentTarget.style.color = "#9ca3af";
                    e.currentTarget.style.background = "transparent";
                  }
                }, 150);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(167,139,250,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9ca3af";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/Sohel_Amar_Vijapure_Resume.pdf"
            download="Sohel_Amar_Vijapure_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="mob-resume-btn"
          >
            <span className="nav-dl-icon" style={{ display: "flex" }}>
              <Download size={16} />
            </span>
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}