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
    <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
              <h1 className="mb-3 inline-flex rounded-full bg-amber-900 px-4 py-1 text-sm font-medium text-yellow-100">
              Yungola Transport
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Affordable vehicle ownership for hardworking drivers
            </h2>
            <p className="text-lg text-amber-800 mb-8">
              Small transport company helping operators in Ibadan and Lagos
              purchase keke, bike, and Corolla car options through a flexible
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
          <div className="hidden md:block">
            <Image
              src="/yungola_office.png"
              alt="Cars available for purchase"
              className="rounded-2xl shadow-2xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
