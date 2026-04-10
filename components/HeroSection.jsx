"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Truck,
  ShieldCheck,
  Clock,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  const { scrollY } = useScroll();

  // Parallax effect for background image
  const yBackground = useTransform(scrollY, [0, 500], [0, 150]);
  const yContent = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityOverlay = useTransform(scrollY, [0, 300], [0.4, 0.7]);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Yungola mockup.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center z-0 transform-gpu will-change-transform"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h1 className="mb-3 inline-flex rounded-full bg-amber-900 px-4 py-1 text-sm font-medium text-yellow-100">
              Yungola Transport
            </h1>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Affordable vehicle ownership for hardworking drivers
            </h2>

            <p className="text-lg text-gray-200 mb-8">
              Yungola transport company helping operators in Ibadan and Lagos
              purchase keke, bike(motocycle), and Ride-Only vehicles options through a flexible
              hire purchase model.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/vehicles"
                className="bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors flex items-center"
              >
                View Vehicles <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/schedule"
                className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Schedule Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
