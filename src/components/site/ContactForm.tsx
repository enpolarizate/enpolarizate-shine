import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { Reveal } from "./motion";
import { WHATSAPP_URL } from "./FloatingWhatsApp";
import { toast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "¡Solicitud enviada!", description: "Te contactaremos muy pronto por WhatsApp." });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  const inputCls =
    "w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_4px_hsl(39_70%_44%/0.15)]";

  return (
    <section id="contacto" className="relative section-padding overflow-hidden">
      <div aria-hidden className="ambient-glow bg-gold/30 top-10 left-1/2 -translate-x-1/2 h-[440px] w-[700px]" />

      <div className="container-pro relative">
        <Reveal>
          <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-surface-2 via-surface to-black shadow-[var(--shadow-elegant)] overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 p-8 md:p-12 bg-[radial-gradient(circle_at_top_left,hsl(39_70%_44%/0.18),transparent_55%)] border-b lg:border-b-0 lg:border-r border-border">
                <span className="eyebrow">Contacto</span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold leading-tight">
                  Protege lo que <span className="text-gold">más te importa.</span>
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Confort, privacidad y seguridad en cada viaje. Cotiza ahora y recibe asesoría gratuita.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8">
                  Cotizar mi Polarizado! <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="lg:col-span-3 p-8 md:p-12">
                <h3 className="font-display text-xl md:text-2xl font-bold">Escríbenos y te contactamos</h3>
                <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
                  <input required name="nombre" placeholder="Nombre completo" className={`${inputCls} sm:col-span-2`} />
                  <input required name="telefono" placeholder="Teléfono / WhatsApp" className={inputCls} />
                  <input required type="email" name="email" placeholder="Correo electrónico" className={inputCls} />
                  <input required name="ciudad" placeholder="Ciudad" className={inputCls} />
                  <input required name="modelo" placeholder="Modelo de vehículo" className={inputCls} />
                  <select required name="nivel" defaultValue="" className={`${inputCls} sm:col-span-2`}>
                    <option value="" disabled>Nivel de polarizado de interés</option>
                    <option value="5">5% — Máxima privacidad</option>
                    <option value="20">20% — Equilibrio perfecto</option>
                    <option value="35">35% — Más claro</option>
                    <option value="asesoria">Necesito asesoría</option>
                  </select>
                  <textarea name="mensaje" rows={4} placeholder="Mensaje" className={`${inputCls} sm:col-span-2 resize-none`} />
                  <button type="submit" disabled={sending} className="btn-gold sm:col-span-2 disabled:opacity-70">
                    {sending ? "Enviando..." : (<>Enviar solicitud <Send className="h-5 w-5" /></>)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
