import { Eye, Sun, Thermometer, Wrench } from "lucide-react";
import { Stagger, StaggerItem } from "./motion";

const items = [
  { icon: Eye, title: "Privacidad y seguridad", silver: false },
  { icon: Sun, title: "Protección UV", silver: true },
  { icon: Thermometer, title: "Rechazo de calor", silver: false },
  { icon: Wrench, title: "Instalación profesional", silver: true },
];

export default function Highlights() {
  return (
    <section className="relative section-padding !py-16 md:!py-20">
      <div className="container-pro">
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => (
            <StaggerItem key={i}>
              <div className={`group relative h-full rounded-2xl p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 ${
                it.silver
                  ? "silver-card hover:shadow-[var(--shadow-gold)]"
                  : "bg-surface-2 border border-border/70 hover:border-gold/50"
              }`}>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                  it.silver
                    ? "bg-black/85 text-gold-light"
                    : "bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))]"
                } shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className={`text-base md:text-lg font-bold leading-snug ${it.silver ? "text-[hsl(var(--silver-foreground))]" : "text-foreground"}`}>
                  {it.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
