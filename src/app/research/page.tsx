"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cpu, Brain, Flame, LineChart, FileText, ArrowLeft, Play, RotateCcw, AlertTriangle } from "lucide-react";

export default function ResearchPage() {
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(1.42);
  const [accuracy, setAccuracy] = useState(0.35);
  const [training, setTraining] = useState(false);
  const [logs, setLogs] = useState<string[]>(["[System] Neural network initialized.", "[System] Model loaded: Transformer-v2 (12 layers, 512-hidden)."]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (training && epoch < 100) {
      interval = setInterval(() => {
        setEpoch((prev) => {
          const nextEpoch = prev + 1;
          // Math formulas to simulate realistic training convergence curves
          const nextLoss = Math.max(0.08, (1.35 * Math.exp(-nextEpoch * 0.05) + 0.07).toFixed(4) as any);
          const nextAcc = Math.min(0.98, (0.35 + 0.63 * (1 - Math.exp(-nextEpoch * 0.04))).toFixed(4) as any);
          
          setLoss(nextLoss);
          setAccuracy(nextAcc);
          
          // Generate realistic epoch train metrics logs
          if (nextEpoch % 5 === 0 || nextEpoch === 100) {
            setLogs((prevLogs) => [
              ...prevLogs,
              `Epoch ${nextEpoch}/100 - loss: ${nextLoss} - accuracy: ${nextAcc}`
            ]);
          }
          
          if (nextEpoch === 100) {
            setTraining(false);
            setLogs((prevLogs) => [...prevLogs, "[System] Model training completed successfully! Weights saved."]);
          }
          
          return nextEpoch;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [training, epoch]);

  const handleStartTraining = () => {
    if (epoch >= 100) {
      setEpoch(0);
      setLoss(1.42);
      setAccuracy(0.35);
      setLogs(["[System] Resetted weights. Re-initializing model..."]);
    }
    setTraining(true);
  };

  const handleStopTraining = () => {
    setTraining(false);
  };

  const researchTopics = [
    {
      icon: <Brain size={24} />,
      title: "Deep Sequence & Transformer Models",
      desc: "Investigating spatial attention mechanisms in multi-modal generative sound and token models, optimizing key-value cache computations.",
      model: "Transformer-v2"
    },
    {
      icon: <Cpu size={24} />,
      title: "Real-time Edge Computer Vision",
      desc: "Optimizing Deep Convolutional Neural Networks (CNNs) for latency-critical device inference, implementing spatial distillation networks.",
      model: "DistilResNet"
    },
    {
      icon: <Flame size={24} />,
      title: "Robust Reinforcement Learning",
      desc: "Designing secure, policy-gradient neural structures to control autonomous simulated agents under hostile environments.",
      model: "PPO-Secure"
    }
  ];

  const publications = [
    {
      title: "Optimized Multi-Modal Attention Networks for High-Fidelity Audio Synthesis",
      journal: "IEEE Transactions on Neural Networks and Learning Systems (2025)",
      desc: "Presents a novel dual-stream transformer layout that reduces latent parameter computations by 42% while retaining high-fidelity sound synthesis scores.",
      doi: "10.1109/TNNLS.2025.109283"
    },
    {
      title: "Edge-centric CNN Compressions via Deep Layer-Distillation Filters",
      journal: "Journal of Machine Learning Research (Preprint, 2026)",
      desc: "Introduces layer-wise structural compression routines, allowing dense convolutional backbones to execute in sub-10ms intervals on microcontrollers.",
      doi: "10.48550/arXiv.2604.14882"
    }
  ];

  return (
    <>
      <Header />
      
      <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "100vh" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          
          {/* Back Navigation Bar */}
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

          {/* Page Title Header */}
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", marginBottom: "16px" }}>
              Machine Learning & <span className="gradient-text">Deep Learning Research</span>
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto 24px", lineHeight: 1.7 }}>
              Exploring complex neural network topologies, transformer attention matrices, and compressed device inferencing routines to bridge abstract mathematical theories with production-ready code.
            </p>
            <div style={{
              width: "60px",
              height: "4px",
              background: "var(--accent-gradient)",
              margin: "0 auto",
              borderRadius: "2px"
            }}></div>
          </div>

          {/* Research Topic Focuses Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            marginTop: "20px"
          }}>
            {researchTopics.map((topic, idx) => (
              <div
                key={idx}
                className="glass"
                style={{
                  padding: "32px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  border: "1px solid var(--border-glass)"
                }}
              >
                <div style={{
                  color: "var(--accent-primary)",
                  background: "var(--border-glass)",
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {topic.icon}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ fontSize: "1.3rem" }}>{topic.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {topic.desc}
                  </p>
                </div>
                <div style={{ marginTop: "auto", display: "inline-flex", alignSelf: "flex-start", background: "var(--border-glass)", fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", color: "var(--text-subtle)" }}>
                  Focus Backbone: {topic.model}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Neural Network Training Panel */}
          <div className="glass" style={{
            padding: "40px",
            borderRadius: "24px",
            border: "1px solid var(--border-glass)",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "48px",
            alignItems: "center"
          }} id="training-dashboard">
            {/* Left Column: Interactive Graph & Parameters */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <h3 style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <LineChart size={24} style={{ color: "var(--accent-secondary)" }} /> Neural Network Training Sandbox
                </h3>
                <p style={{ color: "var(--text-subtle)", fontSize: "0.9rem", marginTop: "6px" }}>
                  Simulate dynamic optimization steps. Observe standard loss reduction and model accuracy convergence curves in real time.
                </p>
              </div>

              {/* Training Parameters Meter */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                <div style={{ background: "rgba(0,0,0,0.1)", padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-subtle)", fontWeight: 700, textTransform: "uppercase" }}>Epoch Progress</div>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, marginTop: "4px" }}>{epoch}%</div>
                </div>
                <div style={{ background: "rgba(0,0,0,0.1)", padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-subtle)", fontWeight: 700, textTransform: "uppercase" }}>Validation Loss</div>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#f87171", marginTop: "4px" }}>{loss}</div>
                </div>
                <div style={{ background: "rgba(0,0,0,0.1)", padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-subtle)", fontWeight: 700, textTransform: "uppercase" }}>Accuracy Score</div>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#4ade80", marginTop: "4px" }}>{accuracy}</div>
                </div>
              </div>

              {/* Dynamic Curves visualization (HTML5 native bars) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: 600 }}>
                    <span style={{ color: "var(--text-muted)" }}>Loss Curve (Descending)</span>
                    <span>{loss} / 1.42</span>
                  </div>
                  <div style={{ width: "100%", height: "8px", background: "var(--border-solid)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{
                      width: `${(loss / 1.42) * 100}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #f87171, #ef4444)",
                      transition: "width 0.2s linear"
                    }}></div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: 600 }}>
                    <span style={{ color: "var(--text-muted)" }}>Accuracy Curve (Ascending)</span>
                    <span>{(accuracy * 100).toFixed(0)}%</span>
                  </div>
                  <div style={{ width: "100%", height: "8px", background: "var(--border-solid)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{
                      width: `${accuracy * 100}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #4ade80, #22c55e)",
                      transition: "width 0.2s linear"
                    }}></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "12px" }}>
                {training ? (
                  <button onClick={handleStopTraining} className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <RotateCcw size={16} /> Pause Training
                  </button>
                ) : (
                  <button onClick={handleStartTraining} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <Play size={16} fill="white" /> {epoch >= 100 ? "Re-run Optimizer" : "Simulate Optimizer Loop"}
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Training Console Logs */}
            <div style={{
              background: "rgba(3, 0, 20, 0.4)",
              borderRadius: "16px",
              border: "1px solid var(--border-glass)",
              overflow: "hidden"
            }}>
              {/* Header */}
              <div style={{
                background: "rgba(0,0,0,0.15)",
                padding: "12px 20px",
                fontSize: "0.8rem",
                color: "var(--text-subtle)",
                fontFamily: "var(--font-mono)",
                borderBottom: "1px solid var(--border-glass)"
              }}>
                ✓ transformer_attention_logs.txt
              </div>
              {/* Console Logs Box */}
              <div style={{
                padding: "24px",
                height: "280px",
                overflowY: "auto",
                fontFamily: "Courier New, Courier, monospace",
                fontSize: "0.8rem",
                lineHeight: 1.6,
                color: "#9ece6a",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }} className="console-logs">
                {logs.map((log, index) => {
                  let logColor = "#a9b1d6";
                  if (log.includes("[System]")) logColor = "#22d3ee";
                  else if (log.includes("Completed")) logColor = "#4ade80";
                  return (
                    <div key={index} style={{ color: logColor }}>
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Publications & Preprints */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "20px" }}>
            <h2 style={{ fontSize: "2rem", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <FileText size={28} style={{ color: "var(--accent-primary)" }} /> Selected Publications
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {publications.map((pub, idx) => (
                <div
                  key={idx}
                  className="glass pub-card"
                  style={{
                    padding: "32px",
                    borderRadius: "20px",
                    border: "1px solid var(--border-glass)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    transition: "var(--transition-smooth)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: 700, maxWidth: "780px" }}>
                      {pub.title}
                    </h3>
                    <span style={{ fontSize: "0.8rem", background: "var(--border-glass)", padding: "6px 12px", borderRadius: "8px", color: "var(--text-subtle)", fontWeight: 700, height: "fit-content" }}>
                      {pub.journal}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {pub.desc}
                  </p>
                  <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-primary)", borderTop: "1px solid var(--border-glass)", paddingTop: "16px" }}>
                    <span>DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>{pub.doi}</a></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .back-link:hover {
          color: var(--text-main) !important;
          transform: translateX(-4px);
        }
        .pub-card:hover {
          border-color: var(--accent-primary);
          box-shadow: var(--shadow-md);
        }
        @media (max-width: 992px) {
          #training-dashboard {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
