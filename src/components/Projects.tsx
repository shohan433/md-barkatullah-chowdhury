"use client";

import { useState } from "react";
import { Folder, ExternalLink, Layers, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "backend" | "frontend" | "creative">("all");

  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const projects = [
    {
      title: "Askden E-Commerce",
      desc: "High-performance storefront with advanced search, stripe checkouts, and dynamic dashboard metrics.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "CSS Modules"],
      category: "frontend",
      demo: "https://askden.vercel.app/",
      github: "https://github.com/shohan433/askden",
      glow: "rgba(99, 102, 241, 0.15)"
    },
    {
      title: "ANPR",
      desc: "Futuristic analytics tool featuring highly fluid, real-time data visualizers and dynamic metrics.",
      tech: ["Python", "Opencv", "Deep Learning", "Machine Learning", "Computer Vision", "OCR Systems"],
      category: "backend",
      demo: "#",
      github: "https://github.com/shohan433/ANPR",
      glow: "rgba(34, 211, 238, 0.15)"
    },
    {
      title: "Weather Forecast",
      desc: "Real-time, fully encrypted desktop chat leveraging WebSockets and state-of-the-art secure protocols.",
      tech: ["Python", "CSV", "api"],
      category: "backend",
      demo: "#",
      github: "https://github.com/shohan433/weather-forecast",
      glow: "rgba(168, 85, 247, 0.15)"
    },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: "100px 0", position: "relative" }} ref={sectionRef}>
      <div className="container">
        {/* Title & Caption */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "var(--text-subtle)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 24px" }}>
            A curated collection of digital experiences, combining bleeding-edge technologies with beautiful engineering details.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={isSectionInView ? { width: "60px" } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            style={{
              height: "4px",
              background: "var(--accent-gradient)",
              margin: "0 auto",
              borderRadius: "2px"
            }}
          />
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "48px"
          }}
        >
          {[
            { id: "all", label: "All Works" },
            { id: "backend", label: "Backend" },
            { id: "frontend", label: "Frontend" },
            { id: "creative", label: "Creative Experiments" }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                border: "2px solid",
                borderColor: filter === btn.id ? "var(--accent-primary)" : "var(--border-solid)",
                background: filter === btn.id ? "var(--accent-gradient)" : "transparent",
                color: filter === btn.id ? "white" : "var(--text-muted)",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "var(--transition-smooth)",
                boxShadow: filter === btn.id ? "var(--shadow-sm)" : "none"
              }}
              onMouseEnter={(e) => {
                if (filter !== btn.id) {
                  e.currentTarget.style.borderColor = "var(--accent-primary)";
                  e.currentTarget.style.color = "var(--text-main)";
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== btn.id) {
                  e.currentTarget.style.borderColor = "var(--border-solid)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }
              }}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid — each card animates in like a module loading */}
        <div className="projects-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "32px"
        }}>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="glass"
              layout
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                borderRadius: "20px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--border-glass)",
                cursor: "default"
              }}
            >
              {/* Subtle dynamic backdrop glow */}
              <div style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: project.glow,
                filter: "blur(40px)",
                pointerEvents: "none"
              }} />

              {/* Icon & Category */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <motion.span
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  style={{
                    color: "var(--accent-primary)",
                    background: "var(--border-glass)",
                    padding: "10px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Folder size={20} />
                </motion.span>
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--text-subtle)",
                  letterSpacing: "0.05em"
                }}>
                  {project.category}
                </span>
              </div>

              {/* Text Context */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {project.desc}
                </p>
              </div>

              {/* Tech Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.tech.map((t, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, color: "var(--accent-secondary)" }}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-subtle)",
                      background: "var(--border-glass)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      cursor: "default"
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "auto",
                borderTop: "1px solid var(--border-glass)",
                paddingTop: "20px"
              }}>
                <a
                  href={project.github}
                  style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-main)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Codebase
                </a>

                <a
                  href={project.demo}
                  className="gradient-text"
                  style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.85rem", fontWeight: 700 }}
                >
                  Live Demo <ArrowUpRight size={16} style={{ color: "var(--accent-primary)" }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
