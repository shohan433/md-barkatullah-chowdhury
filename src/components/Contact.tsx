"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle, Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");
    // Simulate API request call
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  const contactInfoItems = [
    { icon: <Mail size={20} />, label: "Email Me", value: "shohanchowdhury433510@gmail.com", href: "shohanchowdhury433510@gmail.com" },
    { icon: <Phone size={20} />, label: "Call Me", value: "+8801647374315", href: "tel:+8801647374315" },
    { icon: <MapPin size={20} />, label: "Location", value: "Dhaka, Bangladesh", href: "#" }
  ];

  return (
    <section id="contact" style={{ padding: "100px 0", position: "relative" }} ref={sectionRef}>
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ color: "var(--text-subtle)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 24px" }}>
            Have a project in mind or want to collaborate? Reach out and let's craft something remarkable.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "60px" } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            style={{
              height: "4px",
              background: "var(--accent-gradient)",
              margin: "0 auto",
              borderRadius: "2px"
            }}
          />
        </motion.div>

        <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "60px",
          alignItems: "start"
        }}>
          {/* Info Column — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <h3 style={{ fontSize: "1.6rem" }}>Contact Information</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              Feel free to contact me via email or phone. I'm always open to discussing new products, creative ideas, or frontend design systems.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "4px" }}>
              {contactInfoItems.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  className="glass info-row"
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 6, borderColor: "var(--accent-primary)" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "20px",
                    borderRadius: "16px",
                    border: "1px solid var(--border-glass)",
                  }}
                >
                  <div style={{
                    color: "var(--accent-primary)",
                    background: "var(--border-glass)",
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)", fontWeight: 600 }}>{info.label}</div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)", marginTop: "4px" }}>{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form Column — slides in from right */}
          <motion.div
            className="glass"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "40px", borderRadius: "24px", border: "1px solid var(--border-glass)" }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                style={{
                  textAlign: "center",
                  padding: "40px 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 16 }}
                  style={{ color: "#22c55e", background: "rgba(34, 197, 94, 0.1)", padding: "16px", borderRadius: "50%", display: "flex", alignItems: "center" }}
                >
                  <CheckCircle size={48} />
                </motion.div>
                <h3 style={{ fontSize: "1.8rem" }}>Message Sent!</h3>
                <p style={{ color: "var(--text-muted)", maxWidth: "340px", margin: "0 auto", lineHeight: 1.6 }}>
                  Thank you for reaching out. Your message has been received. I'll get back to you within 24 hours!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-secondary"
                  style={{ marginTop: "12px", padding: "10px 24px" }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <MessageSquare size={24} style={{ color: "var(--accent-primary)" }} /> Send a Message
                </h3>

                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <label htmlFor="name" style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    style={{
                      padding: "14px 18px",
                      borderRadius: "12px",
                      border: "2px solid var(--border-solid)",
                      background: "var(--bg-app)",
                      color: "var(--text-main)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      outline: "none",
                      transition: "var(--transition-fast)"
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-primary)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "var(--border-solid)"}
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <label htmlFor="email" style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter your email"
                    style={{
                      padding: "14px 18px",
                      borderRadius: "12px",
                      border: "2px solid var(--border-solid)",
                      background: "var(--bg-app)",
                      color: "var(--text-main)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      outline: "none",
                      transition: "var(--transition-fast)"
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-primary)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "var(--border-solid)"}
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <label htmlFor="message" style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    style={{
                      padding: "14px 18px",
                      borderRadius: "12px",
                      border: "2px solid var(--border-solid)",
                      background: "var(--bg-app)",
                      color: "var(--text-main)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      outline: "none",
                      transition: "var(--transition-fast)",
                      resize: "none"
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-primary)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "var(--border-solid)"}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary"
                  whileHover={status !== "sending" ? { scale: 1.02, y: -2 } : {}}
                  whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                  style={{
                    width: "100%",
                    padding: "14px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "1rem",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    opacity: status === "sending" ? 0.7 : 1
                  }}
                >
                  {status === "sending" ? (
                    <>Sending Message...</>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .info-row {
          transition: var(--transition-smooth);
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
