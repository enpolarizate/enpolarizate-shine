import { ArrowRight, Check, Truck, Package } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { WHATSAPP_URL } from "./FloatingWhatsApp";
import nanoBlindex from "@/assets/wholesale-nano-blindex.jpg";
import nanoceramic from "@/assets/wholesale-nanoceramic.jpg";

const products = [
  {
    title: "Nano Blindex Americano",
    description:
      "Película de seguridad laminada con tecnología americana, máxima resistencia y protección premium.",
    image: nanoBlindex,
  },
  {
    title: "Polarizado Nanocerámico HD",
    description:
      "Alto rechazo de calor y rayos UV con claridad HD. Tecnología cerámica de última generación.",
    image: nanoceramic,
  },
];

const extras = [
  { icon: Package, text: "Venta con instalación o solo suministro de material" },
  { icon: Truck, text: "Envíos a nivel nacional" },
];

export default function Wholesale() {
  return (
    <section className="relative section-padding bg-surface-2 overflow-hidden">
      <div aria-hidden className="ambient-glow bg-gold/25 top-10 left-0 h-[420px] w-[420px]" />

      <div className="container-pro relative">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">B2B · Mayoristas</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            POLARIZADO AUTOMOTRIZ <span className="text-gold">AL POR MAYOR</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/90 font-medium">
            Distribución e instalación de polarizados al por mayor
          </p>
          <p className="mt-4 text-muted-foreground">
            Trabajamos con talleres, distribuidores, instaladores y negocios del sector automotriz
            que buscan materiales premium con respaldo y calidad profesional.
          </p>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <span className="eyebrow">Disponemos de</span>
        </Reveal>

        <Stagger className="mt-8 grid md:grid-cols-2 gap-6 md:gap-8">
          {products.map((p) => (
            <StaggerItem key={p.title}>
              <div className="premium-card overflow-hidden h-full flex flex-col group">
                <div className="relative overflow-hidden h-56 md:h-64">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  <h3 className="font-display text-xl md:text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{p.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {extras.map((e) => (
            <StaggerItem key={e.text}>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-gold/10 to-transparent border border-gold/25">
                <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))] shadow-md">
                  <e.icon className="h-5 w-5" />
                </span>
                <span className="text-foreground/90 leading-relaxed pt-1.5">{e.text}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Solicitar precios al por mayor <ArrowRight className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
