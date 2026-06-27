import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP_URL } from "./FloatingWhatsApp";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "/peliculas-arquitectonicas", label: "Películas arquitectónicas" },
  { href: "/politica-privacidad", label: "Política de privacidad" },
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
              <a href="https://www.instagram.com/enpolarizatee/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-surface-2 text-muted-foreground hover:border-gold hover:text-gold-light hover:bg-gold/10 transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590645153611" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-surface-2 text-muted-foreground hover:border-gold hover:text-gold-light hover:bg-gold/10 transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@enpolarizatee?_r=1&_t=ZS-97VxBxLnDDG" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-surface-2 text-muted-foreground hover:border-gold hover:text-gold-light hover:bg-gold/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-surface-2 text-muted-foreground hover:border-gold hover:text-gold-light hover:bg-gold/10 transition-all duration-300">
                <MessageCircle className="h-4 w-4" />
              </a>
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
