import { Play, Quote } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";

const items = [
  { name: "Andrés M.", vehicle: "Mazda CX-5", text: "Quedé impresionado con la calidad. La instalación fue impecable y el calor bajó muchísimo." },
  { name: "Carolina P.", vehicle: "Toyota Corolla", text: "Llegaron a mi casa, súper profesionales. Ahora viajo con mucha más privacidad y comodidad." },
  { name: "Juan D.", vehicle: "Chevrolet Tracker", text: "El acabado es perfecto, ni una sola burbuja. La asesoría me ayudó a elegir el porcentaje ideal." },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative section-padding bg-gradient-to-b from-background to-surface">
      <div className="container-pro">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Testimonios</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            ESTO ES LO QUE DICEN <span className="text-gold">NUESTROS CLIENTES</span>
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((t, i) => (
            <StaggerItem key={i}>
              <article className="group premium-card overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-surface-3 via-surface-2 to-black overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,hsl(39_70%_44%/0.25),transparent_60%)]" />
                  <button aria-label="Reproducir testimonio" className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-gold to-gold-light shadow-[var(--shadow-gold-lg)] transition-transform duration-500 group-hover:scale-110">
                      <span className="absolute inset-0 rounded-full animate-ping bg-gold/40" />
                      <Play className="h-7 w-7 text-[hsl(var(--gold-foreground))] fill-current ml-1" />
                    </span>
                  </button>
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="text-foreground font-bold">{t.name}</div>
                    <div className="text-xs text-gold-light">{t.vehicle}</div>
                  </div>
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-gold mb-2" />
                  <p className="text-sm text-foreground/85 leading-relaxed">{t.text}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
