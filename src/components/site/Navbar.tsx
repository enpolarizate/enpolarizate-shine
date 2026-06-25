import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full z-40 bg-transparent"
    >
      <div className="container-pro flex items-center justify-center py-3 md:py-4 px-6">
        <a href="#inicio" className="flex items-center" aria-label="Inicio" />
      </div>
    </motion.header>
  );
}

