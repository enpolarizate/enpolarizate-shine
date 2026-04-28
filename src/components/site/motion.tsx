import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

export const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: any }) {
  const MotionTag: any = (motion as any)[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

export function CountUp({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.floor(v).toLocaleString("es-CO") + suffix);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [display]);

  return <span ref={ref}>0{suffix}</span>;
}
