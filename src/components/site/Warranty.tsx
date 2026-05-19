import { ShieldCheck, ArrowRight, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";
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
                  <div className="relative">
                    {/* Glow */}
                    <div aria-hidden className="absolute -inset-6 rounded-full bg-gold/25 blur-3xl" />
                    {/* Outer ring */}
                    <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-full bg-gradient-to-br from-gold-light via-gold to-[hsl(var(--gold-deep))] p-1.5 shadow-[var(--shadow-gold-lg)] animate-[spin_40s_linear_infinite]">
                      <div className="h-full w-full rounded-full bg-gradient-to-br from-black via-surface-2 to-black p-2">
                        {/* Inner dashed ring */}
                        <div className="h-full w-full rounded-full border-2 border-dashed border-gold/50 flex items-center justify-center">
                          <div className="h-[82%] w-[82%] rounded-full bg-gradient-to-br from-gold via-gold-light to-[hsl(var(--gold-deep))] flex items-center justify-center shadow-inner">
                            <div className="h-[88%] w-[88%] rounded-full bg-gradient-to-br from-black to-surface-2 flex flex-col items-center justify-center text-center px-4">
                              <ShieldCheck className="h-7 w-7 text-gold-light mb-1" strokeWidth={2.5} />
                              <span className="font-display text-5xl md:text-6xl font-extrabold text-gold leading-none">8</span>
                              <span className="mt-1 text-[10px] md:text-xs font-bold text-gold-light uppercase tracking-[0.2em]">Años</span>
                              <span className="text-[10px] md:text-xs font-semibold text-foreground/80 uppercase tracking-widest">Garantía</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Ribbon */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-md bg-gradient-to-r from-gold to-gold-light text-[hsl(var(--gold-foreground))] text-xs font-extrabold uppercase tracking-widest shadow-[var(--shadow-gold)] whitespace-nowrap">
                      Certificado
                    </div>
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
