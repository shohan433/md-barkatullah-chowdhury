"use client";

import { useState } from "react";
import { User, Cpu, Award, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Reusable animated skill bar that triggers on scroll-into-view
function AnimatedSkillBar({ name, proficiency }: { name: string; proficiency: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: "flex", flexDirection: "column", gap: "6px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", fontWeight: 600 }}>
        <span style={{ color: "var(--text-muted)" }}>{name}</span>
        <span style={{ color: "var(--accent-primary)" }}>{proficiency}%</span>
      </div>
      <div style={{ width: "100%", height: "8px", background: "var(--border-solid)", borderRadius: "4px", overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : {}}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: "100%",
            background: "var(--accent-gradient)",
            borderRadius: "4px",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "database" | "tools" | "expertise" | "leadership">("all");

  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const skills = [
    { name: "Next.js (App Router, SSR, SSG)", category: "frontend", proficiency: 95 },
    { name: "React.js", category: "frontend", proficiency: 92 },
    { name: "HTML5, CSS3, JavaScript (ES6+)", category: "frontend", proficiency: 95 },
    { name: "Bootstrap 5", category: "frontend", proficiency: 90 },
    { name: "Responsive & Mobile-First UI", category: "frontend", proficiency: 96 },
    { name: "Component-based architecture", category: "frontend", proficiency: 94 },
    { name: "ASP.NET Core (C#)", category: "backend", proficiency: 88 },
    { name: "RESTful API Development", category: "backend", proficiency: 92 },
    { name: "Auth & Auth (JWT)", category: "backend", proficiency: 85 },
    { name: "Server-side architecture", category: "backend", proficiency: 85 },
    { name: "SQL Server", category: "database", proficiency: 82 },
    { name: "Relational DB design", category: "database", proficiency: 85 },
    { name: "Git & GitHub", category: "tools", proficiency: 90 },
    { name: "Visual Studio / VS Code", category: "tools", proficiency: 95 },
    { name: "REST API integration", category: "tools", proficiency: 92 },
    { name: "Basic DevOps", category: "tools", proficiency: 75 },
    { name: "Full-Stack Web Dev", category: "expertise", proficiency: 88 },
    { name: "SEO-friendly architecture", category: "expertise", proficiency: 85 },
    { name: "Performance optimization", category: "expertise", proficiency: 85 },
    { name: "UI/UX focused dev", category: "expertise", proficiency: 90 },
    { name: "Project & product dev", category: "expertise", proficiency: 88 },
    { name: "Project planning & req analysis", category: "leadership", proficiency: 90 },
    { name: "Technical leadership", category: "leadership", proficiency: 88 },
    { name: "President of ISU IT Club", category: "leadership", proficiency: 95 },
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const stats = [
    { icon: <Award size={20} />, value: "5+", label: "Years Experience" },
    { icon: <CheckCircle size={20} />, value: "40+", label: "Projects Completed" },
    { icon: <User size={20} />, value: "20+", label: "Happy Clients" },
  ];

  return (
    <section id="about" style={{ padding: "100px 0", position: "relative" }} ref={sectionRef}>
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
            About <span className="gradient-text">Myself</span>
          </h2>
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

        <div className="about-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "60px",
          alignItems: "start"
        }}>
          {/* Biography & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <h3 style={{ fontSize: "1.6rem", display: "flex", alignItems: "center", gap: "12px" }}>
              <User size={24} style={{ color: "var(--accent-primary)" }} /> Who am I?
            </h3>

            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              I'm a Frontend Developer focused on building fast, scalable, and highly interactive web applications using Next.js and modern JavaScript ecosystems. I enjoy crafting performance-driven frontend experiences with clean UI architecture, reusable components, and optimized user flows.
            </p>

            <p style={{ color: "var(--text-subtle)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              On the backend, I work with ASP.NET Core (C#) to build secure and efficient APIs, connecting robust server-side logic with modern frontend systems. I also work across the full development lifecycle—from UI design to deployment—ensuring end-to-end product quality.
            </p>

            <p style={{ color: "var(--text-subtle)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              Currently, I'm actively expanding my expertise in Next.js App Router, server components, performance optimization, and full-stack architecture patterns, while continuously building projects that push my technical boundaries.
            </p>

            {/* Achievements Stats Container */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginTop: "16px"
            }}>
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="glass"
                  initial={{ opacity: 0, y: 20, scale: 0.92 }}
                  animate={isSectionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1, ease: "backOut" }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  style={{
                    padding: "20px",
                    borderRadius: "16px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "default"
                  }}
                >
                  <div style={{ color: "var(--accent-primary)", background: "var(--border-glass)", padding: "10px", borderRadius: "50%", display: "flex", alignItems: "center" }}>
                    {stat.icon}
                  </div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800 }}>{stat.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)", fontWeight: 500 }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Skill Grid — slides in from right */}
          <motion.div
            className="glass"
            initial={{ opacity: 0, x: 40 }}
            animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "32px", borderRadius: "24px", border: "1px solid var(--border-glass)" }}
          >
            <h3 style={{ fontSize: "1.6rem", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
              <Cpu size={24} style={{ color: "var(--accent-secondary)" }} /> Stack &amp; Expertise
            </h3>

            {/* Category Selectors */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "32px",
              padding: "4px",
              background: "var(--border-glass)",
              borderRadius: "12px"
            }}>
              {(["all", "frontend", "backend", "database", "tools", "expertise", "leadership"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    flex: 1,
                    minWidth: "75px",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "none",
                    background: activeCategory === cat ? "var(--bg-app)" : "transparent",
                    color: activeCategory === cat ? "var(--text-main)" : "var(--text-muted)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    boxShadow: activeCategory === cat ? "var(--shadow-sm)" : "none",
                    transition: "var(--transition-fast)",
                    textTransform: "capitalize"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Animated Skills — each bar animates fill on scroll, simulating compilation */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", minHeight: "340px" }}>
              {filteredSkills.map((skill) => (
                <AnimatedSkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
