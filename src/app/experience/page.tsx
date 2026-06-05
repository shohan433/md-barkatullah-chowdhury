"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Briefcase, GraduationCap, Calendar, ArrowLeft, ArrowUpRight, Award, Compass } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TimelineCard({ node, isSelected, isEven }: {
  node: { role: string; org: string; desc: string; details: string[]; icon: React.ReactNode; year: string };
  isSelected: boolean;
  isEven: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="glass"
      style={{
        padding: "32px",
        borderRadius: "20px",
        border: isSelected ? "1px solid var(--accent-primary)" : "1px solid var(--border-glass)",
        boxShadow: isSelected ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transition: "border-color 0.3s, box-shadow 0.3s",
        width: "100%"
      }}
    >
      <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "14px" }}>
        <span style={{
          color: "var(--accent-primary)",
          background: "var(--border-glass)",
          padding: "8px",
          borderRadius: "10px",
          display: "inline-flex"
        }}>
          {node.icon}
        </span>
        <div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{node.role}</h3>
          <span style={{ fontSize: "0.85rem", color: "var(--text-subtle)", fontWeight: 600 }}>{node.org}</span>
        </div>
      </div>

      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" }}>
        {node.desc}
      </p>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        borderTop: "1px solid var(--border-glass)",
        paddingTop: "16px",
      }}>
        {node.details.map((detail, idx) => (
          <div key={idx} style={{ display: "flex", gap: "8px", fontSize: "0.85rem", color: "var(--text-subtle)", alignItems: "start" }}>
            <span style={{ color: "var(--accent-secondary)", fontSize: "1rem", lineHeight: "1" }}>✦</span>
            <span>{detail}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const timelineData = [
    {
      year: "2026 - Present",
      role: "Frontend Developer",
      org: "JEVXO",
      type: "industry",
      icon: <Briefcase size={20} />,
      desc: "Frontend Developer with expertise in building modern, responsive, and SEO-friendly web applications using Next.js and React. Experienced in creating scalable user interfaces, integrating APIs, optimizing application performance, and delivering seamless user experiences. Passionate about clean code, problem-solving, and developing innovative digital solutions.",
      details: ["Developed responsive web interfaces using Next.js", "Integrated RESTful APIs and third-party services", "Optimized application performance and user experience"]
    },
    {
      year: "2025 (4 month's Internship)",
      role: "AI Engineer (Intern)",
      org: "GAO RFID Inc.",
      type: "industry",
      icon: <GraduationCap size={20} />,
      desc: "Working as an AI Engineer at GAO RFID Inc. Working on developing AI-powered solutions for RFID systems.",
      details: [""]
    },
    {
      year: "2025 - 2026",
      role: "President",
      org: "ISU IT Club",
      type: "academic",
      icon: <Briefcase size={20} />,
      desc: "Leading the Information Technology Club at Idaho State University, fostering a collaborative environment for students to explore emerging technologies, participate in hackathons, and develop professional skills in software engineering, data science, and artificial intelligence.",
      details: [""]
    },
    {
      year: "2024 - 2025",
      role: "Joint- Secretary of Robotics Wing",
      org: "ISU IT Club",
      type: "academic",
      icon: <GraduationCap size={20} />,
      desc: "Graduated with Highest Honors. Focused curriculum on artificial intelligence, deep learning backbones, advanced discrete mathematics, and secure software engineering methodologies.",
      details: [""]
    }
  ];

  return (
    <>
      <Header />

      <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "100vh" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "60px" }}>

          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "var(--accent-primary)",
              alignSelf: "flex-start",
              transition: "var(--transition-fast)"
            }} className="back-link">
              <ArrowLeft size={16} /> Back to Homepage
            </Link>
          </motion.div>

          {/* Title area */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: "center" }}
          >
            <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", marginBottom: "16px" }}>
              Professional &amp; <span className="gradient-text">Academic Journey</span>
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 24px", lineHeight: 1.7 }}>
              A career narrative built at the intersection of production software engineering and abstract machine learning research.
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={isHeaderInView ? { width: "60px" } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              style={{
                height: "4px",
                background: "var(--accent-gradient)",
                margin: "0 auto",
                borderRadius: "2px"
              }}
            />
          </motion.div>

          {/* Interactive Timeline Layout */}
          <div style={{
            position: "relative",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px 0"
          }}>
            {/* Animated center connector line */}
            <motion.div
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                bottom: "0",
                width: "2px",
                background: "var(--border-solid)",
                transform: "translateX(-50%)",
                zIndex: 1,
                transformOrigin: "top"
              }} className="timeline-line"
            />

            {/* Timeline nodes */}
            <div style={{ display: "flex", flexDirection: "column", gap: "60px", position: "relative", zIndex: 2 }}>
              {timelineData.map((node, index) => {
                const isEven = index % 2 === 0;
                const isSelected = selectedMilestone === index;

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      cursor: "pointer",
                    }}
                    className={`timeline-row ${isEven ? "even-row" : "odd-row"}`}
                  >
                    {/* Left Side */}
                    <div style={{ width: "45%", display: "flex", justifyContent: isEven ? "flex-end" : "flex-start" }} className="timeline-card-wrapper">
                      {isEven && (
                        <TimelineCard node={node} isSelected={isSelected} isEven={true} />
                      )}
                    </div>

                    {/* Timeline Node — glows when selected */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.15, type: "spring", stiffness: 400, damping: 18 }}
                      whileHover={{ scale: 1.2 }}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: isSelected ? "var(--accent-gradient)" : "var(--bg-card)",
                        border: "4px solid var(--border-solid)",
                        boxShadow: isSelected ? "0 0 20px var(--accent-glow)" : "var(--shadow-sm)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 3,
                        transition: "background 0.3s, box-shadow 0.3s",
                        color: isSelected ? "white" : "var(--text-muted)"
                      }} className="timeline-node"
                    >
                      <Calendar size={14} />
                    </motion.div>

                    {/* Right Side */}
                    <div style={{ width: "45%", display: "flex", justifyContent: isEven ? "flex-start" : "flex-end" }} className="timeline-card-wrapper">
                      {!isEven && (
                        <TimelineCard node={node} isSelected={isSelected} isEven={false} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginTop: "20px"
            }}
          >
            <Link href="/#contact" className="btn-secondary">
              Let's Collaborate
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .back-link:hover {
          color: var(--text-main) !important;
          transform: translateX(-4px);
        }
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-row {
            flex-direction: row-reverse !important;
            gap: 20px !important;
            justify-content: flex-start !important;
          }
          .timeline-node {
            width: 36px !important;
            height: 36px !important;
            margin-left: 2px !important;
          }
          .timeline-card-wrapper {
            width: calc(100% - 60px) !important;
          }
          .timeline-card-wrapper > div {
            width: 100% !important;
          }
          .even-row .timeline-card-wrapper {
            display: flex !important;
          }
          .even-row .timeline-card-wrapper > div {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
