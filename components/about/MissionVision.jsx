"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";

export default function MissionVision({ BRAND, FadeSection }) {
  const items = [
    {
      label: "Mission",
      Icon: Target,
      title: "Our Mission",
      body: "Operating and providing flexible and affordable vehicle solutions that empower commercial riders and first-time vehicle owners to build self-sustaining transport businesses.",
    },
    {
      label: "Vision",
      Icon: Lightbulb,
      title: "Our Vision",
      body: "Become Africa's leading transport company recognised for transforming lives through exceptional customer service and unwavering integrity.",
    },
  ];

  return (
    <section
      style={{
        background: BRAND.darkBrown,
        padding: "clamp(56px, 8vw, 100px) clamp(16px, 4vw, 24px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* background word */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(56px, 18vw, 220px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.02)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          textAlign: "center",
          width: "100%",
          padding: "0 12px",
        }}
      >
        YUNGOLA
      </div>

      {/* grid */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(20px, 4vw, 60px)",
          position: "relative",
          zIndex: 1,
          alignItems: "stretch",
        }}
      >
        {items.map((item, i) => {
          const Icon = item.Icon;

          return (
            <FadeSection
              key={i}
              direction={i === 0 ? "left" : "right"}
              delay={i * 0.15}
            >
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
                }}
                transition={{ duration: 0.25 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(245,166,35,0.2)",
                  borderRadius: 12,
                  padding: "clamp(24px, 5vw, 48px) clamp(20px, 4vw, 40px)",
                  height: "100%",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              >
                <div style={{ marginBottom: "clamp(16px, 3vw, 24px)" }}>
                  <Icon
                    size={window?.innerWidth < 640 ? 30 : 40}
                    color={BRAND.gold}
                  />
                </div>

                <p
                  style={{
                    color: BRAND.gold,
                    fontSize: "clamp(10px, 1.8vw, 11px)",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {item.label}
                </p>

                <h3
                  style={{
                    fontSize: "clamp(22px, 4vw, 26px)",
                    fontWeight: 700,
                    color: "#FFFDF5",
                    marginBottom: "clamp(14px, 2.5vw, 20px)",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "clamp(15px, 2.4vw, 16px)",
                    lineHeight: 1.8,
                    color: "rgba(255,253,245,0.72)",
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </motion.div>
            </FadeSection>
          );
        })}
      </div>
    </section>
  );
}
