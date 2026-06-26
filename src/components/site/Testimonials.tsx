import { Quote } from "lucide-react";
import { Reveal } from "./motion";

const textTestimonials = [
  { name: "Andrés M.", vehicle: "Mazda CX-5", text: "Quedé impresionado con la calidad. La instalación fue impecable y el calor bajó muchísimo." },
  { name: "Carolina P.", vehicle: "Toyota Corolla", text: "Llegaron a mi casa, súper profesionales. Ahora viajo con mucha más privacidad y comodidad." },
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

        <div className="mt-14 flex flex-col items-center gap-10">
          {/* Video testimonial (YouTube Shorts) - centered */}
          <Reveal className="flex justify-center">
            <div className="relative w-full max-w-[380px]">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/40 via-transparent to-[hsl(0_0%_60%/0.3)] blur-2xl opacity-70" />
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-black shadow-[var(--shadow-gold-lg)]">
                <div className="aspect-[9/16] w-full">
                  <iframe
                    src="https://www.youtube.com/embed/qWDARZ8qjRk?rel=0"
                    title="Testimonio cliente ENPOLARÍZATE"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text testimonials */}
          <div className="w-full max-w-3xl grid sm:grid-cols-2 gap-6 md:gap-8">
            {textTestimonials.map((t, i) => (
              <Reveal key={i}>
                <article className="premium-card h-full flex flex-col p-6">
                  <Quote className="h-7 w-7 text-gold mb-3" />
                  <p className="text-base text-foreground/85 leading-relaxed flex-1">{t.text}</p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <div className="text-foreground font-bold">{t.name}</div>
                    <div className="text-xs text-gold-light">{t.vehicle}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
