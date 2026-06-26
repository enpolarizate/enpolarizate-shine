import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Sun, Shield, Eye, Snowflake, Sparkles, Building2, Home, Hotel,
  Briefcase, Store, Stethoscope, Layers, CheckCircle2, ChevronDown,
  MessageCircle, Award, Ruler, FileText,
  CalendarCheck, ShieldCheck, Zap, Palette, MonitorSmartphone, PaintBucket,
} from "lucide-react";
import logo from "@/assets/arquitectonico/logo.png";
import heroImg from "@/assets/arquitectonico/hero.jpg";
import tintsImg from "@/assets/arquitectonico/tints.jpg";
import installImg from "@/assets/arquitectonico/install.jpg";
import buildingImg from "@/assets/arquitectonico/building.jpg";

const WHATSAPP_URL = "https://wa.link/yjf1m1";
const WA_DEFAULT = WHATSAPP_URL;
const WA_WHOLESALE = WHATSAPP_URL;

/* ---------------- Reveal on scroll ---------------- */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------------- Buttons ---------------- */
function CtaButton({ href = WA_DEFAULT, children, variant = "gold", className = "" }: { href?: string; children: ReactNode; variant?: "gold" | "outline"; className?: string }) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-sm md:text-base font-bold tracking-wide uppercase transition-all duration-300 will-change-transform";
  const styles =
    variant === "gold"
      ? "btn-gold btn-gold-hover hover:-translate-y-0.5"
      : "border border-[oklch(0.82_0.14_85/0.5)] text-foreground hover:bg-[oklch(0.82_0.14_85/0.1)] hover:border-[var(--gold)]";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <MessageCircle className="h-4 w-4" />
      {children}
    </a>
  );
}

function SupportLine({ text = "Instalación a nivel nacional", className = "" }: { text?: string; className?: string }) {
  return (
    <p className={`mt-3 flex items-center gap-2 text-xs md:text-sm text-muted-foreground ${className}`}>
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
      {text}
    </p>
  );
}

/* ============================================================== */

export default function PeliculasArquitectonicas() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "ENPOLARÍZATE — Películas de seguridad y control solar premium";
    return () => { document.title = prevTitle; };
  }, []);
  return (
    <div className="arq-page min-h-screen bg-background text-foreground overflow-x-hidden">
      <StickyWhatsApp />
      <AlertBar />
      <Header />
      <Hero />
      <Tints />
      <Tech />
      <Protection />
      <InstallSection />
      <Testimonials />
      <Warranty />
      <Experience />
      <Coverage />
      <Wholesale />
      <Offer />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ---------------- Sticky WhatsApp ---------------- */
function StickyWhatsApp() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="arq-glow fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-[0_10px_40px_-5px_oklch(0.65_0.16_150/0.6)] transition-transform hover:scale-110 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--gold)] opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--gold)]" />
      </span>
    </a>
  );
}

/* ---------------- 1. Alert bar ---------------- */
function AlertBar() {
  return (
    <div className="relative overflow-hidden border-b border-[oklch(0.82_0.14_85/0.25)] bg-[linear-gradient(90deg,oklch(0.13_0.012_50),oklch(0.18_0.02_50),oklch(0.13_0.012_50))]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center">
        <p className="text-[11px] md:text-sm font-medium tracking-wide text-[var(--gold-soft)]">
          🚨 <span className="font-bold">Atención:</span> Dueños de Inmuebles residenciales o establecimientos comerciales <span className="text-white font-bold">SIN PELÍCULA DE SEGURIDAD</span>… Esto es para ti! 🚨
        </p>
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[oklch(1_0_0/0.06)] bg-[oklch(0.11_0.012_50/0.75)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="ENPOLARÍZATE" className="h-9 md:h-11 w-auto" />
        </a>
        <CtaButton className="hidden sm:inline-flex !px-5 !py-2.5 !text-xs">Asesoría WhatsApp</CtaButton>
      </div>
    </header>
  );
}

/* ---------------- 2. Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative bg-hero overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,oklch(1_0_0/0.04)_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-14 md:py-20">
        <Reveal>
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-[oklch(0.82_0.14_85/0.3)] bg-[oklch(0.82_0.14_85/0.08)] px-3 py-1 text-xs font-medium text-[var(--gold-soft)]">
            <Sparkles className="h-3.5 w-3.5" /> Tecnología Nanocerámica Americana
          </span>
        </Reveal>

        <Reveal delay={100} className="w-full">
          <h1 className="mx-auto mt-5 max-w-[24ch] text-center text-3xl font-extrabold leading-[1.1] md:text-4xl lg:text-5xl">
            Descubre cómo una <span className="text-gradient-gold">película de seguridad</span> en los cristales de tu inmueble reduce el calor, mejora la privacidad y protege tu espacio.
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-5 max-w-2xl text-center text-base md:text-lg text-muted-foreground">
            Estética moderna, seguridad, lugar fresco y control de rayos UV — sin remodelaciones costosas.
          </p>
        </Reveal>

        <Reveal delay={200} className="w-full max-w-4xl">
          <div className="mt-10 w-full md:mt-12">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-gold)] opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-[oklch(1_0_0/0.1)] shadow-[var(--shadow-card)]">
                <div className="aspect-video w-full bg-black">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/pWVwVaYAVlM"
                    title="ENPOLARÍZATE — Película de seguridad arquitectónica"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-8 flex flex-col items-center">
            <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
            <SupportLine className="justify-center" />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-4">
            {[
              { n: "16+", l: "Años" },
              { n: "8 años", l: "Garantía" },
              { n: "Nacional", l: "Cobertura" },
            ].map((s) => (
              <div key={s.l} className="glass-card rounded-xl p-3 text-center">
                <div className="text-lg md:text-xl font-extrabold text-gradient-gold">{s.n}</div>
                <div className="mt-0.5 text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 3. Tints ---------------- */
function Tints() {
  const opts = [
    { p: "35%", title: "El más oscuro", desc: "Ideal si quieres privacidad, mínima visibilidad desde afuera.", shade: "oklch(0.18 0.005 250)" },
    { p: "50%", title: "Equilibrio perfecto", desc: "Entre visibilidad y protección. (La más elegida)", shade: "oklch(0.42 0.02 80)", badge: "Más elegida" },
    { p: "70%", title: "El más claro", desc: "Mantiene el espacio muy iluminado. Ideal para máxima seguridad sin perder luz.", shade: "oklch(0.78 0.015 80)" },
  ];
  return (
    <section className="relative bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Privacidad e iluminación</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Tonalidades y niveles de privacidad</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Tú eliges qué tan claro u oscuro quieres tu espacio. Las películas arquitectónicas se manejan por porcentajes de visibilidad:
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {opts.map((o, i) => (
            <Reveal key={o.p} delay={i * 120}>
              <div className="group relative overflow-hidden glass-card rounded-2xl transition-transform duration-500 hover:-translate-y-1">
                {o.badge && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-[var(--gradient-gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ink)]">{o.badge}</span>
                )}
                <div className="relative h-44 overflow-hidden" style={{ background: o.shade }}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(1_0_0/0.18),transparent_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">{o.p}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-[oklch(0_0_0/0.06)]">
            <img src={tintsImg} alt="Comparación visual de niveles de tonalidad 35%, 50% y 70%" width={1920} height={1080} loading="lazy" className="w-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 max-w-3xl mx-auto text-center space-y-2 text-muted-foreground">
            <p className="text-lg italic">"No se trata de elegir el más oscuro…"</p>
            <p className="text-base">Se trata de encontrar el equilibrio ideal entre <span className="font-bold text-foreground">privacidad, iluminación y protección.</span></p>
            <p className="text-base">Y para eso te asesoramos según tu espacio y exposición al sol.</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 rounded-2xl bg-[var(--ink)] p-8 md:p-10 text-center">
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              Descubre cuál es la película ideal para tu espacio y recibe asesoría profesional según tu necesidad.
            </p>
            <div className="mt-6 flex flex-col items-center">
              <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
              <SupportLine />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4. Tech ---------------- */
function Tech() {
  const benefits = [
    { i: Eye, t: "Mantén tus vistas sin sacrificar la comodidad" },
    { i: Zap, t: "Ahorro energético del 5 al 15 % con láminas para ventanas" },
    { i: Palette, t: "Añade privacidad o diseño sin reemplazar tus ventanas" },
    { i: Shield, t: "Reduce daños accidentales" },
    { i: Sun, t: "Protege tu piel contra rayos UV" },
    { i: Snowflake, t: "Rechazo avanzado de calor" },
    { i: PaintBucket, t: "Rechaza rayos que deterioran muebles, pisos y objetos" },
    { i: MonitorSmartphone, t: "Reduce deslumbramiento en pantallas y equipos" },
    { i: ShieldCheck, t: "Evita daños costosos como grafitis y vandalismo" },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.82_0.14_85/0.15),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Premium</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
                Tecnología <span className="text-gradient-gold">Nanocerámica Americana</span>
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                La película Nanocerámica Americana te permite pasar la mayor parte del tiempo cómodo, seguro y relajado, tanto si prefieres una película casi transparente que conserva el aspecto natural de tu ventana, como si optas por opciones reflectantes, tintadas o decorativas que aportan privacidad y un estilo moderno.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-[var(--gradient-gold)] opacity-15 blur-3xl" />
              <img src={buildingImg} alt="Fachada arquitectónica con películas de control solar" width={1920} height={1080} loading="lazy" className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={i * 70}>
              <div className="group glass-card flex h-full items-start gap-4 rounded-xl p-5 transition-all duration-300 hover:border-[oklch(0.82_0.14_85/0.4)] hover:-translate-y-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--gradient-gold)] text-[var(--ink)]">
                  <b.i className="h-5 w-5" />
                </div>
                <p className="text-sm md:text-[15px] leading-snug text-foreground/90">{b.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. Protection ---------------- */
function Protection() {
  const items = [
    { icon: "☀️", t: "Sol intenso durante el día" },
    { icon: "🌊", t: "Ambientes cercanos a playa o alta humedad" },
    { icon: "🌧️", t: "Lluvias constantes" },
    { icon: "💨", t: "Viento y cambios climáticos" },
    { icon: "👦", t: "Niños y alto tráfico en interiores" },
  ];
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Protección integral</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Protección real para tu espacio</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">Diseñada para espacios expuestos a:</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 100}>
              <div className="group h-full glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
                <div className="text-4xl">{it.icon}</div>
                <p className="mt-4 text-sm font-semibold">{it.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center">
            <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
            <SupportLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 6. Install ---------------- */
function InstallSection() {
  return (
    <section className="bg-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-gold)] opacity-15 blur-2xl" />
              <img src={installImg} alt="Instalación profesional de película arquitectónica" width={1920} height={1280} loading="lazy" className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Versatilidad</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Instalación en <span className="text-gradient-gold">interiores y exteriores</span></h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground">La Película Nanocerámica Americana puede instalarse:</p>
              <ul className="mt-5 space-y-3">
                {["Por dentro del vidrio", "O por fuera del inmueble", "Dependiendo del tipo de espacio y exposición solar."].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" /> <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-foreground/80">Esto permite:</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {["Mayor durabilidad", "Mejor rendimiento térmico", "Protección más eficiente según el proyecto"].map((t, i) => (
                  <Reveal key={t} delay={i * 100}>
                    <div className="glass-card rounded-xl p-4 text-sm font-semibold">{t}</div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8">
                <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
                <SupportLine />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. Testimonials ---------------- */
function Testimonials() {
  const videos = [
    { id: "pWVwVaYAVlM", name: "Carolina M.", role: "Apartamento — Bogotá" },
    { id: "pWVwVaYAVlM", name: "Andrés R.", role: "Oficina corporativa" },
    { id: "pWVwVaYAVlM", name: "Laura G.", role: "Casa residencial" },
  ];
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Testimonios reales</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Esto es lo que dicen nuestros clientes</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="overflow-hidden glass-card rounded-2xl transition-transform hover:-translate-y-1">
                <div className="aspect-video bg-black">
                  <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${v.id}`} title={`Testimonio ${v.name}`} allowFullScreen />
                </div>
                <div className="p-5">
                  <p className="font-bold">{v.name}</p>
                  <p className="text-sm text-muted-foreground">{v.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. Warranty ---------------- */
function Warranty() {
  const covers = ["Craquelado", "Soplado", "Cristalización", "Desprendimiento en esquinas", "Decoloración prematura"];
  return (
    <section className="relative overflow-hidden bg-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.82_0.14_85/0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-[var(--ink)] shadow-[var(--shadow-gold)]">
              <Award className="h-8 w-8" />
            </div>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold">Garantía profesional</h2>
            <p className="mt-4 text-xl md:text-2xl text-gradient-gold font-bold">Garantía de 4 a 8 años</p>
            <p className="mt-1 text-muted-foreground">según el espacio y aplicación</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 glass-card rounded-2xl p-6 md:p-10">
            <p className="text-center text-lg font-semibold">Nuestra garantía cubre:</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {covers.map((c, i) => (
                <Reveal key={c} delay={i * 80}>
                  <div className="flex items-center gap-3 rounded-xl border border-[oklch(1_0_0/0.08)] bg-[oklch(1_0_0/0.03)] p-4">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)]" />
                    <span className="text-sm font-medium">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center italic text-muted-foreground">
              Porque un trabajo profesional debe durar y mantenerse en el tiempo.
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center">
            <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
            <SupportLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 9. Experience ---------------- */
function Experience() {
  const cats = [
    { i: Home, t: "Casas" }, { i: Building2, t: "Apartamentos" }, { i: Briefcase, t: "Oficinas" },
    { i: Store, t: "Locales comerciales" }, { i: Building2, t: "Edificios" }, { i: Hotel, t: "Hoteles" },
    { i: Stethoscope, t: "Consultorios" }, { i: Layers, t: "Fachadas en vidrio" }, { i: Sparkles, t: "Proyectos especiales" },
  ];
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Trayectoria</p>
            <h2 className="mt-3 text-4xl md:text-6xl font-extrabold">
              <span className="text-gradient-gold">16 años</span> de experiencia
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Instalación profesional de control solar, privacidad y protección para:
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {cats.map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="group flex items-center gap-4 glass-card rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-[var(--gold)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[oklch(1_0_0/0.06)] text-[var(--gold)] group-hover:bg-[var(--gradient-gold)] group-hover:text-[var(--ink)] transition-colors">
                  <c.i className="h-6 w-6" />
                </div>
                <span className="font-bold">{c.t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 10. Coverage ---------------- */
function Coverage() {
  const steps = [
    { i: Ruler, t: "El cliente envía las medidas del espacio" },
    { i: FileText, t: "Realizamos la cotización personalizada" },
    { i: CalendarCheck, t: "Se agenda la instalación profesional" },
  ];
  return (
    <section className="bg-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Cobertura</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Suministro e instalación <span className="text-gradient-gold">a nivel nacional</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">Instalamos en toda Colombia</p>
            <p className="mt-2 text-xl font-bold">¿Cómo funciona?</p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 150}>
              <div className="relative glass-card rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-[oklch(0.82_0.14_85/0.4)]">
                <div className="absolute -top-5 left-7 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-[var(--ink)] font-extrabold shadow-[var(--shadow-gold)]">
                  {i + 1}
                </div>
                <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(1_0_0/0.06)] text-[var(--gold)]">
                  <s.i className="h-6 w-6" />
                </div>
                <p className="mt-5 text-base md:text-lg font-semibold leading-snug">{s.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-10 text-center text-muted-foreground">Servicio disponible a nivel nacional.</p>
          <div className="mt-6 flex flex-col items-center">
            <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
            <SupportLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 11. Wholesale ---------------- */
function Wholesale() {
  const items = [
    "Películas de seguridad arquitectónica",
    "Control solar y privacidad",
    "Venta al por mayor con o sin instalación",
    "Cobertura nacional",
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--ink)] to-[oklch(0.11_0.012_50)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.14_85/0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="rounded-3xl border border-[oklch(0.82_0.14_85/0.25)] bg-[oklch(0.13_0.012_50/0.6)] p-8 md:p-14 backdrop-blur-xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.82_0.14_85/0.3)] bg-[oklch(0.82_0.14_85/0.08)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--gold-soft)]">
                B2B · Proyectos
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
                Películas arquitectónicas <span className="text-gradient-gold">al por mayor</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">Películas arquitectónicas premium para proyectos y distribuidores</p>
              <p className="mt-6 max-w-3xl mx-auto text-foreground/85">
                Ofrecemos suministro e instalación de películas arquitectónicas de alto rendimiento para oficinas, edificios, hogares y proyectos comerciales.
              </p>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {items.map((it, i) => (
                <Reveal key={it} delay={i * 100}>
                  <div className="flex items-center gap-3 rounded-xl border border-[oklch(1_0_0/0.08)] bg-[oklch(1_0_0/0.03)] px-5 py-4">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] shrink-0" />
                    <span className="font-medium">{it}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <CtaButton href={WA_WHOLESALE}>Cotizar proyecto al por mayor</CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 12. Offer ---------------- */
function Offer() {
  const items = [
    { i: MessageCircle, t: "Asesoría personalizada gratuita" },
    { i: ShieldCheck, t: "Instalación profesional de Nano Cerámica" },
    { i: Building2, t: "Domicilio gratis en Bogotá o instalación a nivel nacional" },
    { i: Award, t: "Garantía de hasta 8 años" },
  ];
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Tu servicio incluye</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">¿Qué obtendrás con nuestro servicio de polarizado?</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 100}>
              <div className="group relative overflow-hidden glass-card rounded-2xl p-6 md:p-7 transition-all hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--gradient-gold)] opacity-10 blur-2xl group-hover:opacity-25 transition-opacity" />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[oklch(1_0_0/0.06)] text-[var(--gold)]">
                    <it.i className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-bold leading-snug">{it.t}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 13. FAQ ---------------- */
function Faq() {
  const items = [
    { q: "¿Necesito hacer remodelaciones o cambiar los vidrios?", a: "No. La película se instala directamente sobre el vidrio existente, evitando obras, cambios estructurales o remodelaciones costosas." },
    { q: "¿La película arquitectónica realmente reduce el calor?", a: "Sí. La Película Nanocerámica Americana está diseñada para reducir significativamente la sensación térmica causada por la exposición solar directa, ayudando a mantener espacios más frescos y cómodos." },
    { q: "¿La película arquitectónica ayuda con la privacidad?", a: "Sí. Dependiendo del porcentaje elegido, ayuda a reducir significativamente la visibilidad desde el exterior durante el día, generando mayor privacidad en casas, oficinas y espacios comerciales." },
    { q: "¿Voy a perder iluminación natural?", a: "No. La idea no es \"encerrar\" el espacio, sino reducir calor, reflejos y exposición sin perder la sensación de amplitud e iluminación." },
    { q: "¿La película oscurece completamente el espacio?", a: "No necesariamente. Manejamos diferentes niveles de tonalidad como 35%, 50% y 70%, dependiendo del nivel de privacidad y claridad que quieras mantener. Tú eliges qué tan claro u oscuro quieres tu espacio." },
    { q: "¿Cuánto dura el efecto de reducción de calor?", a: "La Película Nanocerámica Americana mantiene su rendimiento térmico durante toda su vida útil, respaldada por nuestra garantía de hasta 8 años." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[var(--ink)]">
      <div className="mx-auto max-w-4xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Resolvemos tus dudas</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Preguntas frecuentes</h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <Reveal key={it.q} delay={i * 60}>
                <div className={`glass-card overflow-hidden rounded-xl transition-colors ${active ? "border-[oklch(0.82_0.14_85/0.4)]" : ""}`}>
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 md:px-7 py-5 text-left"
                  >
                    <span className="text-base md:text-lg font-semibold pr-4">{it.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--gold)] transition-transform duration-300 ${active ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-7 pb-6 text-muted-foreground leading-relaxed">{it.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 14. Final CTA ---------------- */
function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.14_85/0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 md:py-32 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.82_0.14_85/0.3)] bg-[oklch(0.82_0.14_85/0.08)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--gold-soft)]">
            <Sparkles className="h-3.5 w-3.5" /> Da el siguiente paso
          </span>
          <h2 className="mt-5 text-3xl md:text-6xl font-extrabold leading-[1.05]">
            Solicita tu cotización personalizada <span className="text-gradient-gold">por WhatsApp</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cuál es la película ideal para tu espacio y recibe asesoría profesional según tu necesidad.
          </p>
          <div className="mt-10 flex flex-col items-center">
            <CtaButton className="!px-9 !py-5 !text-base">Recibir asesoría por WhatsApp</CtaButton>
            <SupportLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}



/* ---------------- 15. Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-[oklch(1_0_0/0.06)] bg-[oklch(0.09_0.012_50)]">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <img src={logo} alt="ENPOLARÍZATE" className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Protege tu camino y Enpolarízate. Películas arquitectónicas premium para hogares, oficinas y comercios.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Navegación</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Tonalidades", "#"],
                ["Tecnología Nanocerámica", "#"],
                ["Garantía", "#"],
                ["Al por mayor", "#"],
                ["Preguntas frecuentes", "#"],
              ].map(([t, h]) => (
                <li key={t}>
                  <a href={h} className="text-muted-foreground transition-colors hover:text-[var(--gold)]">{t}</a>
                </li>
              ))}
              <li>
                <Link to="/politica-privacidad" className="text-muted-foreground transition-colors hover:text-[var(--gold)]">
                  política de privacidad — enpolarízate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Contacto</p>
            <div className="mt-4">
              <CtaButton className="!px-5 !py-3 !text-xs">WhatsApp</CtaButton>
              <p className="mt-3 text-xs text-muted-foreground">Instalación a nivel nacional · Colombia</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[oklch(1_0_0/0.06)] pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ENPOLARÍZATE. Todos los derechos reservados.</p>
          <p>Protege tu camino y Enpolarízate.</p>
        </div>
      </div>
    </footer>
  );
}
