"use client";

import { useRef } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-40px" });

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      style={{
        padding: "60px 0 40px",
        borderTop: "1px solid var(--border-glass)",
        background: "rgba(0, 0, 0, 0.02)",
        position: "relative"
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            textAlign: "center"
          }}
        >
          {/* Brand/Logo */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <a href="#home" style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "-0.03em" }}>
              <motion.span
                whileHover={{ rotate: 10, scale: 1.1 }}
                style={{
                  background: "var(--accent-gradient)",
                  color: "white",
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px var(--accent-glow)",
                  fontSize: "1.1rem"
                }}
              >
                B
              </motion.span>
              <span className="gradient-text">Md. BarkatUllah Chowdhury</span>
            </a>
            <p style={{ color: "var(--text-subtle)", fontSize: "0.9rem", maxWidth: "280px" }}>
              Designing and engineering high-fidelity digital interfaces.
            </p>
          </div>

          {/* Social Links */}
          {/*<div style={{ display: "flex", gap: "16px" }}>
            {[
              {
                icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>,
                href: "https://github.com/shohan433",
                label: "GitHub"
              },
              {
                icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
                href: "https://www.linkedin.com/in/md-barkatullah-chowdhury-15a630231/",
                label: "LinkedIn"
              },
              {
                icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
                href: "https://x.com/ShohanChowdhry",
                label: "Twitter"
              }
            ]
            .map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="glass"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -4, borderColor: "var(--accent-primary)", color: "var(--text-main)" }}
                whileTap={{ scale: 0.9 }}
                style={{
                  color: "var(--text-muted)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--border-glass)",
                  transition: "var(--transition-smooth)"
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright & Up Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderTop: "1px solid var(--border-glass)",
              paddingTop: "28px",
              flexWrap: "wrap",
              gap: "20px"
            }} className="footer-bottom"
          >
            <span style={{ fontSize: "0.85rem", color: "var(--text-subtle)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              © {currentYear} Md. BarkatUllah Chowdhury. Built with passion & Next.js. <Sparkles size={12} style={{ color: "var(--accent-primary)" }} />
            </span>

            <motion.button
              onClick={handleScrollTop}
              className="glass"
              whileHover={{ y: -3, borderColor: "var(--accent-primary)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                border: "1px solid var(--border-glass)",
                background: "var(--bg-glass)",
                color: "var(--text-main)",
                padding: "10px 16px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "var(--transition-smooth)"
              }}
            >
              Back to Top <ArrowUp size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 576px) {
          .footer-bottom {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
