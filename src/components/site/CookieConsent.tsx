import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // pequeño delay para animar la entrada
      const t = setTimeout(() => {
        setVisible(true);
        setMounted(true);
      }, 600);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setVisible(false);
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimiento de cookies"
      className={`fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-[120%]"
      }`}
    >
      <div className="container-pro">
        <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-black/90 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

          <div className="flex flex-col md:flex-row md:items-center gap-5 p-5 md:p-6">
            <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/30">
              <Cookie className="h-6 w-6 text-gold-light" />
            </div>

            <div className="flex-1 text-sm leading-relaxed text-muted-foreground">
              <p>
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación,
                analizar el tráfico y personalizar contenido. Al continuar navegando, aceptas nuestra{" "}
                <a
                  href="/politica-privacidad"
                  className="font-semibold text-gold-light underline-offset-4 hover:text-gold hover:underline transition-colors"
                >
                  política de privacidad
                </a>{" "}
                y el tratamiento de tus datos.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={accept}
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold tracking-wide text-[hsl(var(--gold-foreground))] bg-[image:var(--gradient-gold)] shadow-[var(--shadow-gold)] hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
              >
                Aceptar
              </button>
              <button
                onClick={accept}
                aria-label="Cerrar"
                className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-gold-light hover:border-gold transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
