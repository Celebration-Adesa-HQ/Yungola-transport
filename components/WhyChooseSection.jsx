"use client";

import { Car, Zap, ClockFading, Percent } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Fast Approval",
    desc: "Streamlined process for quick decisions and faster onboarding.",
  },
  {
    icon: Percent,
    title: "Low Interest Rates",
    desc: "Rates aligned with commercial transport income flow.",
  },
  {
    icon: ClockFading,
    title: "24/7 Support",
    desc: "End-to-end guidance from application to ownership.",
  },
  {
    icon: Car,
    title: "Wide Vehicle Range",
    desc: "Motorcycles, tricycles, and cars for different business needs.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* background motion stripe */}
      <motion.div
        className="absolute top-0 right-[-200px] w-[600px] h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(245,166,35,0.06) 100%)",
        }}
        animate={{ x: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] font-bold text-yellow-600 uppercase mb-3">
            Why Us
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-amber-900">
            Why Choose Yungola Transport
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="p-8 border-l-4 border-yellow-500 bg-amber-50/40 rounded-sm"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-5">
                <item.icon className="h-6 w-6 text-yellow-600" />
              </div>

              <h3 className="text-lg font-bold text-amber-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-stone-700">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
