"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";

export default function MissionVision({ BRAND, FadeSection }) {
  const items = [
    {
      label: "Mission",
      icon: <Target size={32} color={BRAND.gold} />,
      title: "Our Mission",
      body: "Operating and providing flexible and affordable vehicle solutions that empower commercial riders and first-time vehicle owners to build self-sustaining transport businesses.",
    },
    {
      label: "Vision",
      icon: <Lightbulb size={32} color={BRAND.gold} />,
      title: "Our Vision",
      body: "Become Africa's leading transport company recognised for transforming lives through exceptional customer service and unwavering integrity.",
    },
  ];

  return (
    <section
      style={{
        background: BRAND.darkBrown,
        padding: "80px 16px",
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
          fontSize: "22vw",
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
          gridTemplateColumns: "1fr",
          gap: 24,
          position: "relative",
          zIndex: 1,
        }}
      >
        {items.map((item, i) => (
          <FadeSection key={i} direction="up" delay={i * 0.15}>
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              }}
              transition={{ duration: 0.25 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,166,35,0.2)",
                borderRadius: 6,
                padding: "28px 20px",
              }}
            >
              <div style={{ marginBottom: 16 }}>{item.icon}</div>

              <p
                style={{
                  color: BRAND.gold,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {item.label}
              </p>

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#FFFDF5",
                  marginBottom: 12,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "rgba(255,253,245,0.7)",
                }}
              >
                {item.body}
              </p>
            </motion.div>
          </FadeSection>
        ))}
      </div>

      {/* desktop layout */}
      <style jsx>{`
        @media (min-width: 768px) {
          section {
            padding: 100px 24px;
          }

          div[style*="grid"] {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
          }

          h3 {
            font-size: 26px;
          }

          p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
