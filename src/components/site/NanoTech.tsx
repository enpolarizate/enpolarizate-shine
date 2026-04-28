import { Check, ArrowRight } from "lucide-react";
import car from "@/assets/nano-blindex-car.jpg";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { WHATSAPP_URL } from "./FloatingWhatsApp";

const checks = [
  "Estructura laminada de alta resistencia",
  "Interlámina PVB (no se fragmenta al romperse)",
  "Mantiene la integridad del vidrio",
  "Difícil de atravesar",
  "Filtra hasta 99% de rayos UV",
  "Reduce decoloración interior",
  "Aislamiento térmico y acústico",
  "Mayor confort al conducir",
  "Fabricación con presión y temperatura controladas",
  'Unión tipo "sándwich" ultra resistente',
  "Tecnología usada en parabrisas automotrices",
  "Mayor protección frente a impactos",
];

export default function NanoTech() {
  return (
    <section id="tecnologia" className="relative section-padding bg-surface-2 overflow-hidden">
      <div aria-hidden className="ambient-glow bg-gold/30 -top-20 right-0 h-[420px] w-[420px]" />

      <div className="container-pro relative">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Tecnología de alto nivel</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            TECNOLOGÍA <span className="text-gold">NANO BLINDEX</span>
          </h2>
          <div className="mt-6 space-y-1 text-muted-foreground text-lg">
            <p>Más que un polarizado…</p>
            <p>Es una capa de protección inteligente para tu vehículo.</p>
            <p className="text-foreground/90 font-medium">Seguridad real basada en tecnología de alto nivel.</p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-14 relative rounded-3xl overflow-hidden border border-gold/30 shadow-[var(--shadow-elegant)]">
            <img src={car} alt="Vehículo premium con polarizado Nano Blindex" loading="lazy" width={1920} height={1080} className="w-full h-[280px] md:h-[440px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-14 max-w-xl">
                <p className="eyebrow">Premium</p>
                <h3 className="mt-3 font-display text-2xl md:text-4xl font-bold">
                  Una <span className="text-gold">capa inteligente</span> sobre tu vidrio.
                </h3>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            ¿POR QUÉ <span className="text-gold">NANO BLINDEX</span> ES DIFERENTE?
          </h3>
        </Reveal>

        <Stagger className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-4">
          {checks.map((c, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-background/50 transition-colors duration-500">
                <span className="flex-shrink-0 mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))] shadow-md">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-foreground/90 leading-relaxed">{c}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Cotizar mi Polarizado! <ArrowRight className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
