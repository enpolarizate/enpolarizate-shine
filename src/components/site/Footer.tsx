import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP_URL } from "./FloatingWhatsApp";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "/politica-privacidad", label: "política de privacidad — enpolarízate" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-border/60 pt-16 pb-8 px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="container-pro">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="ENPOLARÍZATE" className="h-12 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Protege tu camino y Enpolarízate. Polarizado Nano Blindex con instalación profesional y garantía de 8 años.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Navegación</h4>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-gold-light transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Síguenos</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" aria-label="Red social" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-surface-2 text-muted-foreground hover:border-gold hover:text-gold-light hover:bg-gold/10 transition-all duration-300">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">Bogotá, Colombia · Cl. 185 #56-14</p>
          </div>
        </div>

        <div className="divider-gold mt-12" />

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} ENPOLARÍZATE. Todos los derechos reservados.</span>
          <span className="italic text-gold-light/80">Protege tu camino y Enpolarízate</span>
        </div>
      </div>
    </footer>
  );
}
