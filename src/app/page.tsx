import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Navbar */}
      <Header />

      {/* Main Blocks */}
      <main style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Hero />
        <About />

        <Projects />
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer />
    </>
  );
}
