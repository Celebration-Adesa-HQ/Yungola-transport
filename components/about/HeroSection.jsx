"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection({
  BRAND,
  particles,
  heroY,
  heroOpacity,
  Particle,
}) {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: `linear-gradient(145deg, ${BRAND.charcoal} 0%, ${BRAND.darkBrown} 50%, ${BRAND.midBrown} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "60px 24px",
      }}
    >
      {/* particles */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* circles */}
      <motion.div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: `1px solid rgba(245,166,35,0.12)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: `1px solid rgba(245,166,35,0.08)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* content */}
      <motion.div
        style={{
          y: heroY,
          opacity: heroOpacity,
          textAlign: "center",
          maxWidth: 800,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 32px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Yungola Transport Logo"
            width={40}
            height={40}
          />
        </motion.div>

        {/* brand */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            color: BRAND.gold,
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Yungola Transport
        </motion.p>

        {/* title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 700,
            color: "#FFFDF5",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          Your Road to <br />
          <span style={{ color: BRAND.gold }}>Ownership</span>
          <br />
          Starts Here.
        </motion.h1>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            color: "rgba(255,253,245,0.65)",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto 48px",
          }}
        >
          Hire Purchase Solutions for Motorcycles, Tricycles & Ride-only
          Vehicles.
        </motion.p>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <p style={{ fontSize: 11, opacity: 0.4 }}>Scroll</p>
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, rgba(245,166,35,0.6), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
