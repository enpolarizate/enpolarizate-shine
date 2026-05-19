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
                    <svg
                      viewBox="0 0 300 300"
                      className="relative w-full h-auto drop-shadow-[0_20px_40px_hsl(39_70%_44%/0.45)]"
                      role="img"
                      aria-label="Insignia de 8 años de garantía"
                    >
                      <defs>
                        <radialGradient id="goldRing" cx="50%" cy="40%" r="65%">
                          <stop offset="0%" stopColor="hsl(47, 95%, 78%)" />
                          <stop offset="55%" stopColor="hsl(43, 88%, 56%)" />
                          <stop offset="100%" stopColor="hsl(36, 75%, 35%)" />
                        </radialGradient>
                        <radialGradient id="goldRingInner" cx="50%" cy="40%" r="65%">
                          <stop offset="0%" stopColor="hsl(47, 95%, 80%)" />
                          <stop offset="100%" stopColor="hsl(38, 80%, 42%)" />
                        </radialGradient>
                        <radialGradient id="centerDark" cx="50%" cy="40%" r="70%">
                          <stop offset="0%" stopColor="hsl(0, 0%, 18%)" />
                          <stop offset="100%" stopColor="hsl(0, 0%, 4%)" />
                        </radialGradient>
                        <linearGradient id="numberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="hsl(47, 95%, 80%)" />
                          <stop offset="100%" stopColor="hsl(38, 85%, 50%)" />
                        </linearGradient>
                        <path id="topArc" d="M 40,150 A 110,110 0 0 1 260,150" fill="none" />
                        <path id="bottomArc" d="M 50,150 A 100,100 0 0 0 250,150" fill="none" />
                      </defs>

                      <circle cx="150" cy="150" r="145" fill="url(#goldRing)" />
                      <circle cx="150" cy="150" r="125" fill="hsl(0, 0%, 6%)" />
                      <circle cx="150" cy="150" r="118" fill="url(#goldRingInner)" />
                      <circle cx="150" cy="150" r="92" fill="url(#centerDark)" />
                      <circle cx="150" cy="150" r="92" fill="none" stroke="hsl(43, 88%, 56%)" strokeWidth="2" />

                      <text fill="hsl(0, 0%, 6%)" fontSize="17" fontWeight="900" letterSpacing="3" fontFamily="Montserrat, Arial, sans-serif">
                        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                          GARANTÍA DE 8 AÑOS
                        </textPath>
                      </text>

                      <text fill="hsl(0, 0%, 6%)" fontSize="13" fontWeight="800" letterSpacing="6" fontFamily="Montserrat, Arial, sans-serif">
                        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
                          CERTIFICADA
                        </textPath>
                      </text>

                      <g fill="hsl(47, 95%, 78%)">
                        <polygon points="150,68 152.5,75 160,75 154,80 156.5,87 150,82.5 143.5,87 146,80 140,75 147.5,75" />
                        <polygon points="122,76 124,81.5 130,81.5 125,85.5 127,91 122,87.5 117,91 119,85.5 114,81.5 120,81.5" />
                        <polygon points="178,76 180,81.5 186,81.5 181,85.5 183,91 178,87.5 173,91 175,85.5 170,81.5 176,81.5" />
                      </g>

                      <text x="150" y="178" textAnchor="middle" fill="url(#numberGrad)" fontSize="82" fontWeight="900" fontFamily="Montserrat, Arial Black, sans-serif" stroke="hsl(38, 80%, 35%)" strokeWidth="1">
                        8
                      </text>

                      <text x="150" y="208" textAnchor="middle" fill="hsl(47, 90%, 75%)" fontSize="18" fontWeight="800" letterSpacing="6" fontFamily="Montserrat, Arial, sans-serif">
                        AÑOS
                      </text>

                      <line x1="78" y1="202" x2="103" y2="202" stroke="hsl(43, 88%, 56%)" strokeWidth="2" />
                      <line x1="197" y1="202" x2="222" y2="202" stroke="hsl(43, 88%, 56%)" strokeWidth="2" />

                      <ellipse cx="120" cy="100" rx="55" ry="20" fill="hsl(47, 100%, 90%)" opacity="0.18" />
                    </svg>
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
