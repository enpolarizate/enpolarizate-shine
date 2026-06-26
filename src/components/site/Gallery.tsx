import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./motion";

import corvette from "@/assets/gallery/car-corvette.jpg.asset.json";
import maserati from "@/assets/gallery/car-maserati.jpg.asset.json";
import jaguar from "@/assets/gallery/car-jaguar.jpg.asset.json";
import jetour from "@/assets/gallery/car-jetour.jpg.asset.json";
import byd from "@/assets/gallery/car-byd.jpg.asset.json";

const images = [
  { src: corvette.url, label: "Chevrolet Corvette", tint: "Nano Blindex 5%" },
  { src: maserati.url, label: "Maserati Ghibli", tint: "Nano Blindex 20%" },
  { src: jaguar.url, label: "Jaguar F-Pace", tint: "Nano Blindex 20%" },
  { src: jetour.url, label: "Jetour SUV", tint: "Nano Blindex 15%" },
  { src: byd.url, label: "BYD Yuan Plus", tint: "Nano Blindex 20%" },
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Move from 0% to roughly -(N-1)/N * 100% so the last card lands in view.
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-78%"]);

  return (
    <section className="relative bg-background">
      {/* Header */}
      <div className="container-pro pt-14 md:pt-20 pb-6">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Galería</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            TRABAJOS <span className="text-gold">REALES EN LA CALLE</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Mira algunos de nuestros polarizados Nano Blindex Americano instalados en carros de nuestros clientes.
          </p>
        </Reveal>
      </div>

      {/* Desktop: horizontal scroll on scroll */}
      <div ref={trackRef} className="relative hidden md:block h-[220vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 pl-[6vw] will-change-transform">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative shrink-0 w-[70vw] lg:w-[55vw] xl:w-[48vw] aspect-[16/10] rounded-2xl overflow-hidden border border-gold/30 bg-black shadow-[var(--shadow-elegant)]"
              >
                <img
                  src={img.src}
                  alt={`Polarizado ${img.label}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-xl font-bold text-foreground">{img.label}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 border border-gold/40 text-gold-light">
                      {img.tint}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: native horizontal snap scroll */}
      <div className="md:hidden pb-14">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[85vw] aspect-[4/3] rounded-2xl overflow-hidden border border-gold/30 bg-black shadow-[var(--shadow-elegant)] snap-center"
            >
              <img
                src={img.src}
                alt={`Polarizado ${img.label}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 to-transparent">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-base font-bold text-foreground">{img.label}</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gold/15 border border-gold/40 text-gold-light">
                    {img.tint}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
