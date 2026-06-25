import { Home, MapPin, ArrowRight, Check } from "lucide-react";
import { Reveal } from "./motion";
import { WHATSAPP_URL } from "./FloatingWhatsApp";

export default function Coverage() {
  return (
    <section className="relative section-padding bg-surface-2">
      <div className="container-pro">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Cobertura</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            INSTALACIÓN <span className="text-gold">A TU MEDIDA</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Reveal>
            <div className="silver-card p-8 md:p-10 h-full">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-black text-gold-light shadow-md">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl md:text-2xl font-bold text-[hsl(var(--silver-foreground))]">
                🏠 DOMICILIO GRATIS EN BOGOTÁ
              </h3>
              <ul className="mt-6 space-y-3">
                {["Instalación en tu casa o trabajo", "Sin costo adicional", "Mismo estándar profesional", "Con agendamiento previo"].map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[hsl(var(--silver-foreground))]/90">
                    <Check className="h-5 w-5 text-[hsl(var(--gold-deep))] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-[hsl(var(--silver-foreground))]/70 italic">
                Agenda tu horario y nosotros nos encargamos del resto.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="premium-card p-8 md:p-10 h-full">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))] shadow-[var(--shadow-gold)]">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl md:text-2xl font-bold">📍 PUNTOS DE INSTALACIÓN</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                  <a
                    href="https://www.google.com/maps/place/Stilos+Security+Films+Colombia,+Cl.+185+%2356+-+14,+Bogot%C3%A1/@4.7655456,-74.0516357,17z/data=!4m14!1m7!3m6!1s0x8e3f859531263143:0x88150f4e5c6831e7!2sCl.+185+%2356+-+14,+Bogot%C3%A1!8m2!3d4.7655392!4d-74.0516286!16s%2Fg%2F11j3nbzgjk!3m5!1s0x8e3f85edf43173ed:0x6d90ee07236ab04!8m2!3d4.7655456!4d-74.0516357!16s%2Fg%2F11p_7dwb6c?g_ep=Eg1tbF8yMDI2MDUxM18wIOC7DCoASAJQAg%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/90 underline underline-offset-4 decoration-gold/60 hover:decoration-gold hover:text-gold transition-colors"
                  >
                    Cl. 185 #56 - 14 (cerca a Centro Comercial Santa Fe)
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                  <a
                    href="https://www.google.com/maps/place/Centro+Comercial+Puerto+Norte,+01,+Cl.+195+%2321,+Bogot%C3%A1/@4.7727275,-74.0416167,17z/data=!4m6!3m5!1s0x8e3f85f1d7008983:0x959769c8b47236c2!8m2!3d4.7727275!4d-74.0416167!16s%2Fg%2F1pv5xz0jn?g_ep=Eg1tbF8yMDI2MDUxM18wIOC7DCoASAJQAg%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/90 underline underline-offset-4 decoration-gold/60 hover:decoration-gold hover:text-gold transition-colors"
                  >
                    Puerto Norte – entrada 4, local 79
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic">
                Elige si lo quieres a domicilio o en punto físico.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14 text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Cotizar mi Polarizado! <ArrowRight className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
