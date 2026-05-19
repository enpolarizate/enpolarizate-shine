import { ArrowRight, Eye, ShieldCheck, Sun, Snowflake, Sparkles, Wrench } from "lucide-react";
import privacy from "@/assets/benefit-privacy.jpg";
import security from "@/assets/benefit-security.jpg";
import uv from "@/assets/benefit-uv.jpg";
import heat from "@/assets/benefit-heat.jpg";
import aesthetic from "@/assets/benefit-aesthetic.jpg";
import warranty from "@/assets/benefit-warranty.jpg";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { WHATSAPP_URL } from "./FloatingWhatsApp";

const benefits = [
  { icon: Eye, title: "Privacidad dentro del vehículo", img: privacy },
  { icon: ShieldCheck, title: "Seguridad ante riesgos externos", img: security },
  { icon: Sun, title: "Protección contra rayos UV", img: uv },
  { icon: Snowflake, title: "Rechazo de calor (más confort)", img: heat },
  { icon: Sparkles, title: "Mejora estética del vehículo", img: aesthetic },
  { icon: Wrench, title: "Instalación profesional certificada", img: warranty },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative section-padding">
      <div className="container-pro">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Beneficios reales</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            BENEFICIOS <span className="text-gold">PRINCIPALES</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">No es polarizado. Es esto:</p>
        </Reveal>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <StaggerItem key={i} className={i === 4 ? "lg:col-start-2" : ""}>
              <article className="group premium-card overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img src={b.img} alt={b.title} loading="lazy" width={800} height={550} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))] shadow-[var(--shadow-gold)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <b.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex items-center">
                  <h3 className="font-display text-lg md:text-xl font-bold leading-snug">{b.title}</h3>
                </div>
              </article>
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
