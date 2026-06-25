import { motion } from "framer-motion";

export default function AttentionBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 w-full text-center py-2 px-4"
    >
      <p className="text-xs md:text-sm leading-snug text-foreground/90 font-bold">
        <span aria-hidden>🚨</span>{" "}
        <span className="font-bold text-gold">Atención:</span>{" "}
        <span>Dueños de Carros, Camionetas, Pickups, Camiones ó Mulas </span>
        <span className="font-bold text-foreground">SIN POLARIZAR...</span>{" "}
        <span className="text-gold-light">Esto es para ti</span>{" "}
        <span aria-hidden>🚨</span>
      </p>
    </motion.div>
  );
}
