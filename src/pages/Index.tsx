import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TintOptions from "@/components/site/TintOptions";
import NanoTech from "@/components/site/NanoTech";
import Benefits from "@/components/site/Benefits";
import Testimonials from "@/components/site/Testimonials";
import Coverage from "@/components/site/Coverage";
import WhatYouGet from "@/components/site/WhatYouGet";
import Warranty from "@/components/site/Warranty";
import Wholesale from "@/components/site/Wholesale";
import Stats from "@/components/site/Stats";
import FAQ from "@/components/site/FAQ";
import ContactForm from "@/components/site/ContactForm";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

const Index = () => {
  useEffect(() => {
    document.title = "ENPOLARÍZATE — Polarizado Nano Blindex | Privacidad, UV y Seguridad";
    const desc = "Polarizado Nano Blindex con asesoría gratuita, domicilio en Bogotá y 8 años de garantía. Privacidad, protección UV y rechazo de calor.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <TintOptions />
      <NanoTech />
      <Benefits />
      <Testimonials />
      <Warranty />
      <Wholesale />
      <Coverage />
      <WhatYouGet />
      <Stats />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
