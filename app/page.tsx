import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-dark">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}

