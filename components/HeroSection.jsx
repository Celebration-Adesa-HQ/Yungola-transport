"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  MapPin,
  Wallet,
  Wrench,
  CarFront,
  Bike,
  Truck,
} from "lucide-react";

export const HeroSection = () => {
  const { scrollY } = useScroll();

  const yBackground = useTransform(scrollY, [0, 500], [0, 140]);
  const yContent = useTransform(scrollY, [0, 500], [0, -40]);
  const scaleBackground = useTransform(scrollY, [0, 300], [1, 1.08]);
  const opacityOverlay = useTransform(scrollY, [0, 300], [0.45, 0.68]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.92, rotateX: 8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: 0.2 + i * 0.08,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseGlow = {
    boxShadow: [
      "0 0 0 rgba(245, 158, 11, 0)",
      "0 0 30px rgba(245, 158, 11, 0.18)",
      "0 0 0 rgba(245, 158, 11, 0)",
    ],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
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
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y: yBackground, scale: scaleBackground }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/Yungola mockup.jpg"
          alt="Youngola Transport"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Animated Overlay */}
      <motion.div
        style={{ opacity: opacityOverlay }}
        className="absolute inset-0 bg-black z-10"
      />

      {/* Ambient motion glow - does not change UI layout */}
      <motion.div
        animate={{
          opacity: [0.25, 0.4, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl z-10"
      />
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl z-10"
      />

      {/* Content */}
      <motion.div
        style={{ y: yContent }}
        className="relative z-20 max-w-7xl mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              animate={pulseGlow}
              className="mb-3 inline-flex rounded-full bg-amber-900 px-4 py-1 text-sm font-medium text-yellow-100"
            >
              Yungola Transport
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Affordable ownership of cleaner transport vehicles for hardworking
              riders
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-200 mb-8 max-w-2xl"
            >
              Yungola Transport helps transport entrepreneurs in Lagos and
              Ibadan move from renting to owning through flexible hire purchase
              plans for CNG/electric tricycles, electric motorcycles, and
              ride-hailing cars.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Link
                  href="/vehicles"
                  className="bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors flex items-center"
                >
                  View Vehicles <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Link
                  href="/schedule"
                  className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors  flex items-center"
                >
                  Schedule Visit
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Invisible layout balance to preserve original UI structure */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative h-full min-h-[420px]">
              <motion.div
                animate={{
                  y: [0, -14, 0],
                  rotate: [0, 1.2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 right-10 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-white shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Truck className="h-5 w-5 text-yellow-300" />
                  <span className="font-semibold">Fast Approval</span>
                </div>
                <p className="text-sm text-gray-200 max-w-[220px]">
                  Competitive financing with a practical path to full vehicle
                  ownership.
                </p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -1.2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute bottom-16 left-8 rounded-2xl border border-white/10 bg-amber-900/80 backdrop-blur-md p-5 text-white shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="h-5 w-5 text-yellow-200" />
                  <span className="font-semibold">Sustainable Fleet</span>
                </div>
                <p className="text-sm text-yellow-50 max-w-[220px]">
                  A modern lineup built around cleaner mobility and long-term
                  income growth.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
