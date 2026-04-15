"use client";

import { motion } from "framer-motion";
import { Leaf, MapPin, Wallet, Wrench, CarFront, Bike } from "lucide-react";

export default function OperatingCities() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.94 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.15 + i * 0.08,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const floatingAnimation = {
    y: [0, -6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const cityVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 18 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.7 + i * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const detailCards = [
    {
      icon: Leaf,
      title: "Cleaner mobility",
      text: "CNG, electric tricycles and electric motorcycles for a smarter transport future.",
    },
    {
      icon: Wallet,
      title: "Flexible repayment",
      text: "Daily and weekly payment plans designed around riders’ earning capacity.",
    },
    {
      icon: MapPin,
      title: "Lagos & Ibadan",
      text: "Focused on high-demand urban routes where transport entrepreneurs can grow faster.",
    },
    {
      icon: CarFront,
      title: "Ride-hailing ready",
      text: "Corolla hire purchase remains the flagship option for professional urban drivers.",
    },
    {
      icon: Bike,
      title: "Path to ownership",
      text: "Move from renting to owning without the pressure of heavy upfront capital.",
    },
    {
      icon: Wrench,
      title: "Repair finance",
      text: "Access credit support for vehicle repairs to keep operations running smoothly.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-amber-900 py-20">
      {/* Ambient background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-0 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            variants={headingVariants}
            className="inline-flex rounded-full border border-yellow-300/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-200"
          >
            Built for transport entrepreneurs who want to own and grow
          </motion.h2>



          <motion.p
            variants={headingVariants}
            className="mt-4 text-sm md:text-base text-yellow-50/85 leading-relaxed"
          >
            From cleaner mobility options to flexible repayment and repair
            support, Yungola gives riders a practical path from daily hustle to
            long-term ownership.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {detailCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                  transition: {
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  },
                }}
                className="group rounded-2xl border border-white/10 bg-white/10 p-5 text-white shadow-xl backdrop-blur-md"
              >
                <motion.div
                  animate={floatingAnimation}
                  transition={{ delay: index * 0.12 }}
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-100 ring-1 ring-inset ring-white/10"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>

                <h3 className="mb-2 text-base font-semibold text-white">
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed text-yellow-50/80">
                  {card.text}
                </p>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-yellow-300/30 via-white/10 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* Cities strip */}
        <motion.div
          variants={headingVariants}
          className="mt-14 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
            <motion.div
              custom={0}
              variants={cityVariants}
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-yellow-100"
            >
              <MapPin className="h-5 w-5 text-yellow-300" />
              <span className="text-sm md:text-base font-semibold">Ibadan</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="hidden md:block text-yellow-300/70 text-xl"
            >
              •
            </motion.div>

            <motion.div
              custom={1}
              variants={cityVariants}
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-yellow-100"
            >
              <MapPin className="h-5 w-5 text-yellow-300" />
              <span className="text-sm md:text-base font-semibold">Lagos</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
