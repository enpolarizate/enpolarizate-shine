import { MessageCircle, Wrench, Home, ShieldCheck } from "lucide-react";
import advisory from "@/assets/what-you-get-advisory.jpg";
import installation from "@/assets/what-you-get-installation.jpg";
import delivery from "@/assets/what-you-get-delivery.jpg";
import warrantyImg from "@/assets/what-you-get-warranty.jpg";
import { Reveal, Stagger, StaggerItem } from "./motion";

const items = [
  {
    icon: MessageCircle,
    title: "Asesoría personalizada gratuita",
    description:
      "Te guiamos paso a paso para elegir el nivel ideal según tu vehículo, uso y necesidad de privacidad.",
    img: advisory,
  },
  {
    icon: Wrench,
    title: "Instalación profesional de Nano Blindex",
    description:
      "Técnicos certificados con experiencia real. Instalación limpia, precisa y sin burbujas.",
    img: installation,
  },
  {
    icon: Home,
    title: "Domicilio Gratis en Bogotá o en taller de instalación",
    description:
      "Elige comodidad: vamos donde estés sin costo adicional o agenda en nuestros puntos físicos.",
    img: delivery,
  },
  {
    icon: ShieldCheck,
    title: "Garantía de 8 años",
    description:
      "Cobertura completa contra craquelado, burbujas y decoloración. Tranquilidad real a largo plazo.",
    img: warrantyImg,
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative section-padding bg-surface-2 overflow-hidden">
      <div aria-hidden className="ambient-glow bg-gold/20 -bottom-20 right-0 h-[420px] w-[420px]" />

      <div className="container-pro relative">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Valor completo</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            ¿QUÉ <span className="text-gold">OBTENDRÁS</span> CON NUESTRO SERVICIO?
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <StaggerItem key={i}>
              <article className="group premium-card overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={550}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))] shadow-[var(--shadow-gold)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg md:text-xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
