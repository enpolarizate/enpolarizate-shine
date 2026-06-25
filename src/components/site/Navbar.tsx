import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const links = [
  { href: "#tecnologia", label: "Tecnología" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-9 md:top-10 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-pro flex items-center justify-between py-3 md:py-4 px-6">
        <a href="#inicio" className="flex items-center" aria-label="Inicio" />


        <nav className="flex items-center gap-8">
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
      </div>
    </motion.header>
  );
}
