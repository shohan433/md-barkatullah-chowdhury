import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. BarkatUllah Chowdhury | Frontend Developer Portfolio",
  description: "Explore the personal portfolio of Md. BarkatUllah Chowdhury, a frontend developer specializing in building fast, scalable, and interactive web applications with Next.js.",
  keywords: ["Next.js", "React", "ASP.NET Core", "Frontend Developer", "Web Developer Portfolio", "JavaScript"],
  authors: [{ name: "Md. BarkatUllah Chowdhury" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" style={{ scrollBehavior: "smooth" }}>
      <body>
        {/* Ambient Mesh Glows (Absolute background panels) */}
        <div className="ambient-bg">
          <div className="mesh-glow-1"></div>
          <div className="mesh-glow-2"></div>
        </div>

        {/* Coding lifestyle ambient backgrounds */}
        <div className="code-grid-bg"></div>
        <div className="scanline-overlay"></div>
        
        {children}
      </body>
    </html>
  );
}
