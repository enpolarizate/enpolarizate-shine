import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./motion";

const levels = [
  { value: 5, label: "Máxima privacidad", sub: "(el más oscuro)", opacity: 0.85 },
  { value: 20, label: "Equilibrio perfecto", sub: "entre visibilidad y protección", opacity: 0.55 },
  { value: 35, label: "Más claro", sub: "para mínima intervención visual", opacity: 0.3 },
];

export default function TintOptions() {
  const [tint, setTint] = useState(20);
  const current = levels.reduce((a, b) => (Math.abs(b.value - tint) < Math.abs(a.value - tint) ? b : a));
  const opacity = 0.05 + ((40 - Math.min(40, Math.max(5, tint))) / 35) * 0.85;

  return (
    <section className="relative section-padding bg-gradient-to-b from-background via-surface to-background overflow-hidden">
      <div aria-hidden className="ambient-glow bg-gold/25 top-10 left-1/2 -translate-x-1/2 h-[400px] w-[700px]" />

      <div className="container-pro relative">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Personaliza tu nivel</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            OPCIONES DISPONIBLES <span className="text-gold">DEL PRODUCTO</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Elige el nivel de oscuridad que mejor se adapte a tu estilo, tu necesidad y tu nivel de privacidad.
          </p>
          <p className="mt-2 text-sm text-gold-light/90 font-medium">
            En menos de 2 minutos puedes saber cuál es el ideal para ti.
          </p>
        </Reveal>

        <div className="divider-gold mt-14 mb-14" />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Interactive preview */}
          <Reveal className="lg:col-span-3">
            <div className="relative rounded-3xl overflow-hidden border border-border bg-black shadow-[var(--shadow-elegant)]">
              {/* Faux scenery behind glass */}
              <div className="aspect-[16/10] relative">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#1c2630_0%,#0e1418_55%,#1a1410_100%)]" />
                {/* skyline */}
                <div className="absolute inset-x-0 top-1/3 h-px bg-white/10" />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                {/* lights */}
                <div className="absolute bottom-1/4 left-[15%] h-2 w-2 rounded-full bg-gold-light/80 blur-[1px] shadow-[0_0_30px_8px_hsl(47_86%_71%/0.4)]" />
                <div className="absolute bottom-1/3 left-[35%] h-1.5 w-1.5 rounded-full bg-white/70 blur-[1px] shadow-[0_0_20px_6px_white/0.3]" />
                <div className="absolute bottom-1/4 right-[20%] h-2 w-2 rounded-full bg-gold/80 blur-[1px] shadow-[0_0_30px_8px_hsl(39_70%_44%/0.5)]" />
                <div className="absolute bottom-1/2 right-[40%] h-1 w-1 rounded-full bg-white/80 blur-[1px]" />
                {/* sun */}
                <div className="absolute top-[18%] right-[12%] h-12 w-12 rounded-full bg-gold-light/70 blur-md" />

                {/* Tint overlay */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0"
                  animate={{ backgroundColor: `rgba(0,0,0,${opacity})` }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Window frame */}
                <div className="absolute inset-4 rounded-2xl border border-white/10 pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/80 to-transparent" />

                {/* Live label */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur border border-gold/40 text-xs font-semibold text-gold-light">
                  Vista previa: {tint}%
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-gold/15 backdrop-blur border border-gold/40 text-xs font-semibold text-gold-light">
                  {current.label}
                </div>
              </div>

              {/* Slider */}
              <div className="p-6 md:p-7 bg-surface-2 border-t border-border">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  <span>Más oscuro</span>
                  <span>Más claro</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={35}
                  step={1}
                  value={tint}
                  onChange={(e) => setTint(parseInt(e.target.value))}
                  aria-label="Nivel de polarizado"
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-black via-[hsl(var(--dark-gray))] to-silver
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-gold-light [&::-webkit-slider-thumb]:to-gold [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_hsl(0_0%_4%),var(--shadow-gold)] [&::-webkit-slider-thumb]:cursor-grab
                    [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gold [&::-moz-range-thumb]:border-0"
                />
                <div className="mt-4 flex justify-between gap-2">
                  {levels.map((l) => (
                    <button
                      key={l.value}
                      onClick={() => setTint(l.value)}
                      className={`flex-1 px-3 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                        tint === l.value
                          ? "bg-gradient-to-r from-gold to-gold-light text-[hsl(var(--gold-foreground))] shadow-[var(--shadow-gold)]"
                          : "bg-background border border-border text-foreground/70 hover:border-gold/60 hover:text-foreground"
                      }`}
                    >
                      {l.value}%
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Options list */}
          <div className="lg:col-span-2 space-y-4">
            {levels.map((l, i) => (
              <Reveal key={l.value} delay={i}>
                <button
                  onClick={() => setTint(l.value)}
                  className={`w-full text-left rounded-2xl p-5 md:p-6 border transition-all duration-500 ${
                    tint === l.value
                      ? "border-gold bg-gradient-to-br from-gold/15 to-transparent shadow-[var(--shadow-gold)]"
                      : "border-border bg-surface-2 hover:border-gold/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 h-14 w-14 rounded-xl flex items-center justify-center font-extrabold text-lg ${
                      tint === l.value
                        ? "bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))]"
                        : "bg-background border border-border text-gold-light"
                    }`}>
                      {l.value}%
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{l.label}</div>
                      <div className="text-sm text-muted-foreground">{l.sub}</div>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
