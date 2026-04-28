import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP_URL } from "./FloatingWhatsApp";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-pro flex items-center justify-between py-3 md:py-4 px-6">
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="ENPOLARÍZATE" className="h-9 md:h-11 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:scale-x-0 after:bg-gradient-to-r after:from-gold after:to-gold-light after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold hidden sm:inline-flex !py-2.5 !px-5 text-sm">
            Cotizar por WhatsApp
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/60"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-foreground/85 hover:text-gold-light">
                  {l.label}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-2 w-full">
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
