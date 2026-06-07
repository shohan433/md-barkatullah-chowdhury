"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

// Stagger container - boots children one by one like terminal lines
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const lineUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const titles = ["Frontend Developer", "Aspiring Full-Stack", "Creative Developer"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = titles[titleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(activeWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(activeWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === activeWord.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}>
          {/* Left Column: Hero Text — Terminal Boot Sequence */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <motion.div variants={lineUp}>
              <div
                className="glass float-animation"
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--accent-primary)",
                  border: "1px solid var(--border-glass)",
                }}
              >
                <Sparkles size={14} /> Available for new opportunities
              </div>
            </motion.div>

            <motion.h1 variants={lineUp} style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", lineHeight: 1.1, fontWeight: 800 }}>
              Crafting Digital <br />
              <span className="gradient-text" style={{ position: "relative" }}>
                Masterpieces
              </span>
            </motion.h1>

            <motion.p variants={lineUp} style={{
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              fontWeight: 500,
              color: "var(--text-muted)",
              minHeight: "40px"
            }}>
              I am a <span className="typing-cursor" style={{ color: "var(--text-main)", fontWeight: 700 }}>{typedText}</span>
            </motion.p>

            <motion.p variants={lineUp} style={{
              fontSize: "1.05rem",
              color: "var(--text-subtle)",
              maxWidth: "540px",
              lineHeight: 1.7
            }}>
              Specializing in high-performance Next.js architectures, sleek fluid animations, and standard-compliant user experiences that leave a lasting impression.
            </motion.p>

            <motion.div variants={lineUp} style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "12px" }}>
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </motion.div>

            {/* Quick Tech Badges — stagger in like autocomplete results */}
            <motion.div
              variants={lineUp}
              style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "24px" }}
            >
              {["Next.js", "React.js", "ASP.NET Core", "SQL Server", "Bootstrap 5"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.08, duration: 0.35, ease: "backOut" }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    background: "var(--border-glass)",
                    border: "1px solid var(--border-glass)",
                    cursor: "default"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}
          >
            {/* Ambient Back Glow */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.22, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                width: "320px",
                height: "320px",
                background: "var(--accent-gradient)",
                borderRadius: "50%",
                filter: "blur(80px)",
                zIndex: -1,
              }}
            />

            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid var(--border-glass)",
                boxShadow: "var(--shadow-lg)",
                marginBottom: "24px",
                position: "relative"
              }}
            >
              <img
                src="/Barkat.PNG"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.45 }}
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                fontWeight: 500,
                marginBottom: "16px",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              Developer in{" "}
              <span style={{ color: "var(--accent-primary)", fontWeight: 700 }}>JEVXO</span>
              {" "}&amp;{" "}
              <span style={{ color: "var(--text-main)", fontWeight: 600 }}>Researcher</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ display: "flex", gap: "20px" }}
            >
              {[
                { href: "https://scholar.google.com/citations?hl=en&user=DIXt0QgAAAAJ", icon: <GraduationCap size={20} /> },
                { href: "https://www.linkedin.com/in/md-barkatullah-chowdhury-15a630231/", icon: <LinkedinIcon size={20} /> },
                { href: "https://github.com/shohan433", icon: <GithubIcon size={20} /> },
                { href: "https://x.com/ShohanChowdhry", icon: <TwitterIcon size={20} /> },
              ].map(({ href, icon }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  className="social-icon"
                  whileHover={{ y: -4, color: "var(--accent-primary)" }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .social-icon {
          color: var(--text-main);
          transition: var(--transition-fast);
          display: inline-flex;
        }
        .social-icon:hover {
          color: var(--accent-primary);
          transform: translateY(-2px);
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .hero-grid div {
            align-items: center !important;
            justify-content: center !important;
            align-self: center !important;
          }
          .hero-grid p {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}