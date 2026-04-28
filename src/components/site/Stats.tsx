import { Reveal, CountUp } from "./motion";

const stats = [
  { value: 1500, suffix: "+", label: "Vehículos atendidos" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
  { value: 8, suffix: " años", label: "De garantía" },
  { value: 100, suffix: "%", label: "Cobertura en Bogotá" },
];

export default function Stats() {
  return (
    <section className="relative py-20 md:py-24 px-6 bg-surface-2 border-y border-border/60">
      <div className="container-pro">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {stats.map((s, i) => (
              <div key={i} className="relative">
                {i > 0 && <span aria-hidden className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />}
                <div className="font-display text-4xl md:text-5xl font-extrabold text-gold">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm md:text-base text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
