"use client";;
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import CompanyOverview from "../about/CompanyOverview";
import HeroSection from "../about/HeroSection";
import MissionVision from "../about/MissionVision";
import ServiceSection from "../about/ServiceSection";
import WhyChooseSection from "../WhyChooseSection";
import TeamMember from "../team/TeamMember";
import WhoWeServe from "../about/WhoWeServe";

/* ─────────────────────────────────────────────
   BRAND TOKENS
───────────────────────────────────────────── */
const BRAND = {
  gold: "#F5A623",
  darkBrown: "#3B1A06",
  midBrown: "#6B2D0E",
  cream: "#FFF8EE",
  offWhite: "#FAF6F0",
  charcoal: "#1A0A02",
};

/* ─────────────────────────────────────────────
   MAGNETIC BUTTON — cursor-following hover
───────────────────────────────────────────── */
function MagneticButton({ children, className, style, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY, display: "inline-block", ...style }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   COUNTER — animated number on scroll
───────────────────────────────────────────── */
function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const end = start + duration * 1000;
    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   FLOATING PARTICLE
───────────────────────────────────────────── */
function Particle({ duration, delay, size, x, y }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: BRAND.gold,
        opacity: 0.15,
        pointerEvents: "none",
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.25, 0.1],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   SECTION FADE-IN WRAPPER
───────────────────────────────────────────── */
export function FadeSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function AboutPageComponent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

const [particles] = useState(() =>
  Array.from({ length: 14 }, (_, i) => ({
    delay: i * 0.4,
    size: `${4 + (i % 3) * 4}px`,
    x: (i * 37) % 95,
    y: (i * 53) % 90,
    duration: 4 + Math.random() * 3,
  })),
);

  const [activeService, setActiveService] = useState(null);

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Georgia', serif",
        background: BRAND.offWhite,
        color: BRAND.charcoal,
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* ── PROGRESS BAR ── */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 3,
          background: `linear-gradient(90deg, ${BRAND.gold}, #FFD580)`,
          width: progressBar,
          zIndex: 9999,
          transformOrigin: "left",
        }}
      />

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <HeroSection
        BRAND={BRAND}
        particles={particles}
        heroY={heroY}
        heroOpacity={heroOpacity}
        Particle={Particle}
      />

      {/* ══════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════ */}
      <section
        style={{
          background: BRAND.gold,
          padding: "48px 24px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            maxWidth: 960,
            margin: "0 auto",
            gap: 40,
            textAlign: "center",
          }}
        >
          {[
            { val: 500, suf: "+", label: "Vehicles Financed" },
            { val: 3, suf: "+", label: "Vehicle Categories" },
            { val: 100, suf: "%", label: "Ownership Focused" },
            { val: 24, suf: "/7", label: "Customer Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: BRAND.charcoal,
                  lineHeight: 1,
                  fontFamily: "sans-serif",
                }}
              >
                <AnimatedCounter value={stat.val} suffix={stat.suf} />
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: BRAND.darkBrown,
                  fontFamily: "sans-serif",
                  marginTop: 8,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/*  ABOUT / COMPANY OVERVIEW */}
      <CompanyOverview />

      {/* ══════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════ */}
      <MissionVision BRAND={BRAND} FadeSection={FadeSection} />

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <ServiceSection />

      {/* ══════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════ */}
      <WhyChooseSection />

      {/* ══════════════════════════════════════
          WHO WE SERVE
      ══════════════════════════════════════ */}
      <WhoWeServe />

      {/* ══════════════════════════════════════
          TEAM
      ══════════════════════════════════════ */}
      <TeamMember />
    </div>
  );
}
