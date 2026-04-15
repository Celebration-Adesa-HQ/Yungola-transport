"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  BarChart3,
  CheckCircle,
  DollarSign,
  Handshake,
  Heart,
  Mail,
  Phone,
  Shield,
  Target,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "500+", label: "Vehicles Financed", icon: Award },
  { value: "98%", label: "Repayment Rate", icon: Shield },
  { value: "2", label: "Cities", icon: Users },
  { value: "₦200M+", label: "Assets Managed", icon: DollarSign },
];

const highlights = [
  {
    icon: TrendingUp,
    title: "High Return Potential",
    description:
      "Earn competitive returns from structured hire purchase and transport-linked financing operations.",
  },
  {
    icon: Shield,
    title: "Asset-Backed Structure",
    description:
      "Investments are tied to real vehicles and operating assets that support recovery and value retention.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Receive periodic performance updates and financial reporting for better visibility into operations.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We work with investors through flexible partnership models aligned with growth and sustainability.",
  },
];

const reasons = [
  {
    title: "Asset-Backed Investments",
    description:
      "Every investment is connected to tangible transport assets, helping reduce exposure and improve confidence.",
  },
  {
    title: "Growing Market Demand",
    description:
      "Transportation remains a daily necessity in Nigeria, creating ongoing demand for vehicle financing and mobility support.",
  },
  {
    title: "Proven Operating Model",
    description:
      "Our business is built around practical financing, repayment discipline, and service delivery in real market conditions.",
  },
  {
    title: "Social and Economic Impact",
    description:
      "Investors support mobility, entrepreneurship, and income generation while participating in a scalable business model.",
  },
];

const financialSnapshot = [
  {
    icon: DollarSign,
    label: "Revenue",
    value: "₦250M",
    growth: "↑ 35% YoY",
  },
  {
    icon: TrendingUp,
    label: "Net Profit",
    value: "₦45M",
    growth: "↑ 28% YoY",
  },
  {
    icon: Users,
    label: "New Clients",
    value: "350",
    growth: "↑ 42% YoY",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.08 * i,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function InvestorsPageComponent() {
  const { scrollY } = useScroll();

  const heroBgY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroContentY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.05]);

  return (
    <div className="min-h-screen bg-amber-50 overflow-hidden">
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <motion.div
          style={{ y: heroBgY, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/Yungola mockup.jpg"
            alt="Background"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/80 to-yellow-600/70 z-10" />

        {/* Extra ambient glow */}
        <motion.div
          animate={{
            opacity: [0.18, 0.35, 0.18],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl z-10"
        />
        <motion.div
          animate={{
            opacity: [0.12, 0.26, 0.12],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl z-10"
        />

        {/* Content */}
        <motion.div
          style={{ y: heroContentY }}
          className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-yellow-100 backdrop-blur-sm"
            >
              Investor Relations
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-black tracking-tight sm:text-5xl"
            >
              Invest With Yungola
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg"
            >
              Partner with us to support vehicle financing, expand access to
              transportation, and participate in a business built on real assets
              and real market demand.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Button
                  asChild
                  className="bg-white text-amber-900 px-5 py-7 hover:bg-white/90"
                >
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </motion.div>

              <motion.a
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                href="mailto:contact@yungolatransport.com"
                className="inline-flex items-center rounded-lg border border-white px-5 py-3 font-medium text-white transition-colors hover:bg-white hover:text-amber-900"
              >
                <Mail className="mr-2 h-5 w-5" />
                contact@yungolatransport.com
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Minimum Investment Section */}
      <section className="relative bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-900 via-amber-800 to-yellow-600 px-6 py-8 text-white shadow-xl sm:px-8"
          >
            <motion.div
              animate={{
                x: [0, 16, 0],
                y: [0, -8, 0],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-white/20 blur-3xl"
            />

            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100 backdrop-blur-sm">
                  Investor Entry Point
                </div>

                <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                  Start investing from ₦1,000,000
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  Our investment program is open to both established and smaller
                  investors. The minimum entry starts at{" "}
                  <span className="font-bold text-yellow-200">₦1M</span>, making
                  it possible to participate in Yungola’s asset-backed transport
                  growth model without needing a very large capital commitment.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm ring-1 ring-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/10 p-3">
                      <DollarSign className="h-6 w-6 text-yellow-200" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-yellow-100/80">
                        Minimum Investment
                      </p>
                      <p className="text-2xl font-black text-white">₦1M</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm ring-1 ring-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/10 p-3">
                      <Sparkles className="h-6 w-6 text-yellow-200" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-yellow-100/80">
                        Accessibility
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Small investors can also invest
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  custom={index}
                  variants={cardVariant}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    transition: {
                      type: "spring",
                      stiffness: 220,
                      damping: 16,
                    },
                  }}
                  className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center shadow-sm"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    }}
                  >
                    <Icon className="mx-auto mb-3 h-10 w-10 text-yellow-600" />
                  </motion.div>
                  <p className="text-3xl font-black text-amber-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-amber-700">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-10 text-center">
              <h2 className="text-3xl font-black text-amber-900">
                Investment Highlights
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                Our investor model is built around asset-backed financing,
                disciplined operations, and a clear opportunity within Nigeria’s
                transport economy.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    custom={index}
                    variants={cardVariant}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      transition: {
                        type: "spring",
                        stiffness: 220,
                        damping: 16,
                      },
                    }}
                    className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm"
                  >
                    <motion.div
                      animate={{ rotate: [0, 2, 0], y: [0, -4, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.12,
                      }}
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100"
                    >
                      <Icon className="h-6 w-6 text-yellow-700" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-amber-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-2"
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-amber-50 p-8 shadow-sm ring-1 ring-amber-100"
            >
              <div className="mb-5 flex items-center gap-2">
                <Target className="h-6 w-6 text-yellow-500" />
                <h2 className="text-xl font-bold text-amber-900">
                  Why Invest With Us?
                </h2>
              </div>

              <div className="space-y-5">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.12 * index,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.18,
                      }}
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-amber-900">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-amber-700">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-amber-900 p-8 text-white shadow-sm"
            >
              <h2 className="text-2xl font-black text-yellow-500">
                Built for Long-Term Growth
              </h2>
              <p className="mt-4 leading-7 text-white/80">
                We are building a transport-focused financing business designed
                around practical demand, asset visibility, and structured
                repayment systems. Our model is intended to serve both customers
                and investors through sustainable expansion.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    label: "Market Focus",
                    value: "Vehicle access and mobility financing",
                  },
                  {
                    label: "Structure",
                    value: "Real asset-backed business model",
                  },
                  {
                    label: "Operations",
                    value: "Structured repayment and reporting approach",
                  },
                  {
                    label: "Opportunity",
                    value: "Scalable transport demand in key cities",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 220,
                        damping: 16,
                      },
                    }}
                    className="rounded-xl bg-white/10 p-4"
                  >
                    <p className="text-sm text-yellow-200">{item.label}</p>
                    <p className="mt-1 font-semibold text-white">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Financial Snapshot */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-amber-100"
          >
            <motion.div variants={fadeUp} className="mb-8 text-center">
              <h2 className="text-3xl font-black text-amber-900">
                Financial Snapshot (2023)
              </h2>
              <p className="mt-2 text-gray-600">
                A quick overview of key performance indicators.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {financialSnapshot.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    custom={index}
                    variants={cardVariant}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      transition: {
                        type: "spring",
                        stiffness: 220,
                        damping: 16,
                      },
                    }}
                    className="rounded-2xl bg-yellow-50 p-6 text-center"
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                    >
                      <Icon className="mx-auto mb-3 h-10 w-10 text-yellow-500" />
                    </motion.div>
                    <p className="text-sm text-amber-600">{item.label}</p>
                    <p className="mt-1 text-2xl font-bold text-amber-900">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-green-600">
                      {item.growth}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-amber-900 px-6 py-10 text-center text-white shadow-sm sm:px-10"
          >
            <motion.div
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
            </motion.div>

            <h2 className="text-2xl font-black text-yellow-500 sm:text-3xl">
              Ready to Partner With Us?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Our investor relations team can provide more information about our
              business model, reporting structure, partnership opportunities,
              and how to get started from a minimum investment of ₦1M.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                href="mailto:contact@yungolatransport.com"
                className="inline-flex items-center rounded-lg bg-yellow-500 px-6 py-4 font-semibold text-amber-900 transition-colors hover:bg-yellow-400"
              >
                <Mail className="mr-2 h-5 w-5" />
                contact@yungolatransport.com
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                href="tel:+2349071518988"
                className="inline-flex items-center rounded-lg bg-white px-6 py-4 font-semibold text-amber-900 transition-colors hover:bg-amber-50"
              >
                <Phone className="mr-2 h-5 w-5" />
                +234 907 1518 988 YUNGOLA
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
