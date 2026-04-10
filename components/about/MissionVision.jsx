"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";

export default function MissionVision({ BRAND, FadeSection }) {
  const items = [
    {
      label: "Mission",
      icon: <Target size={40} color={BRAND.gold} />,
      title: "Our Mission",
      body: "Operating and providing flexible and affordable vehicle solutions that empower commercial riders and first-time vehicle owners to build self-sustaining transport businesses.",
    },
    {
      label: "Vision",
      icon: <Lightbulb size={40} color={BRAND.gold} />,
      title: "Our Vision",
      body: "Become Africa's leading transport company recognised for transforming lives through exceptional customer service and unwavering integrity.",
    },
  ];

  return (
    <section
      style={{
        background: BRAND.darkBrown,
        padding: "100px 24px",
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
          transform: "translate(-50%,-50%)",
          fontSize: "20vw",
          fontWeight: 900,
          color: "rgba(255,255,255,0.02)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
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
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          position: "relative",
          zIndex: 1,
        }}
      >
        {items.map((item, i) => (
          <FadeSection
            key={i}
            direction={i === 0 ? "left" : "right"}
            delay={i * 0.2}
          >
            <motion.div
              whileHover={{
                y: -8,
                boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,166,35,0.2)",
                borderRadius: 4,
                padding: "48px 40px",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 24 }}>{item.icon}</div>

              <p
                style={{
                  color: BRAND.gold,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {item.label}
              </p>

              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#FFFDF5",
                  marginBottom: 20,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "rgba(255,253,245,0.65)",
                }}
              >
                {item.body}
              </p>
            </motion.div>
          </FadeSection>
        ))}
      </div>
    </section>
  );
}
