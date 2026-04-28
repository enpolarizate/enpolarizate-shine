import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./motion";

const faqs = [
  { q: "¿Cuál es el polarizado ideal para mí?", a: "Depende de tu uso, gusto y nivel de privacidad deseado. Te asesoramos sin costo para que elijas entre 5%, 20% o 35% según tu estilo de vida." },
  { q: "¿Qué diferencia hay entre 5%, 20% y 35%?", a: "El 5% es el más oscuro y ofrece máxima privacidad. El 20% mantiene un equilibrio perfecto entre visibilidad y protección. El 35% es más claro, ideal para quienes prefieren mínima intervención visual." },
  { q: "¿El polarizado ayuda a proteger la piel?", a: "Sí. Nuestro Polarizado Nano Blindex filtra hasta el 99% de los rayos UV, protegiendo tu piel y reduciendo la decoloración del interior del vehículo." },
  { q: "¿Hacen instalación a domicilio o en mi ubicación?", a: "Sí. Ofrecemos domicilio gratis en Bogotá con el mismo estándar profesional que en nuestros puntos físicos. Solo necesitas agendar previamente." },
  { q: "¿Cómo puedo cotizar?", a: "Escríbenos por WhatsApp con el botón de la página o llena el formulario de contacto. Te respondemos rápido con tu cotización personalizada." },
  { q: "¿Cuánto tarda la instalación?", a: "La instalación promedio toma entre 2 y 3 horas, dependiendo del tipo y modelo del vehículo." },
  { q: "¿Qué cubre la garantía?", a: "Nuestra garantía de 8 años cubre craquelado (quiebre de la película), aparición de burbujas y decoloración del polarizado." },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative section-padding">
      <div className="container-pro max-w-4xl">
        <Reveal className="text-center mb-12">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            PREGUNTAS <span className="text-gold">FRECUENTES</span>
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-surface-2 px-5 md:px-6 transition-all duration-500 data-[state=open]:border-gold/50 data-[state=open]:shadow-[var(--shadow-card)]">
                <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline py-5 [&[data-state=open]>svg]:text-gold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
