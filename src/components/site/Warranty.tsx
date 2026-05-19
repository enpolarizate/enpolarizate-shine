import { ShieldCheck, ArrowRight, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";
import warrantyBadge from "@/assets/warranty-badge.png";
import { WHATSAPP_URL } from "./FloatingWhatsApp";

const covers = ["Craquelado (quiebre de la película)", "Aparición de burbujas", "Decoloración"];

export default function Warranty() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div aria-hidden className="ambient-glow bg-gold/25 top-0 left-1/2 -translate-x-1/2 h-[460px] w-[760px]" />

      <div className="container-pro relative">
        <Reveal>
          <div className="relative rounded-3xl border border-gold/30 bg-gradient-to-br from-surface-2 via-surface to-black p-8 md:p-14 shadow-[var(--shadow-elegant)] overflow-hidden">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(39_70%_44%/0.18),transparent_55%)]" />
            <div className="relative">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))] shadow-[var(--shadow-gold-lg)]">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h2 className="mt-6 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
                  🔒 GARANTÍA <span className="text-gold">BLINDADA</span>
                </h2>
              </div>

              <div className="divider-gold mt-12" />

              <div className="grid md:grid-cols-2 gap-10 md:gap-12 mt-12 items-center">
                {/* Warranty badge / insignia */}
                <div className="flex justify-center">
                  <div className="relative w-64 md:w-80">
                    <div aria-hidden className="absolute -inset-6 rounded-full bg-gold/30 blur-3xl" />
                    <img
                      src={warrantyBadge}
                      alt="Insignia de 8 años de garantía"
                      className="relative w-full h-auto drop-shadow-[0_20px_40px_hsl(39_70%_44%/0.45)]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* What's covered */}
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold">¿QUÉ CUBRE ESTA GARANTÍA?</h3>
                  <Stagger className="mt-5 space-y-3">
                    {covers.map((c) => (
                      <StaggerItem key={c}>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-background/60 border border-border/60 hover:border-gold/50 transition-colors duration-500">
                          <Check className="h-5 w-5 text-gold-light mt-0.5 flex-shrink-0" strokeWidth={3} />
                          <span className="text-foreground/90">{c}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  Cotizar mi Polarizado! <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
