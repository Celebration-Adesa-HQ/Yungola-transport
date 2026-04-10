"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  TrendingUp,
  CreditCard,
  CheckCircle,
  Zap,
  Users,
  ArrowRight,
  Bus,
  Truck,
} from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServiceSection() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-amber-950 text-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden rounded-4xl bg-amber-900 mb-24 min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Yungola Fleet"
            src="/Service-image.png"
            fill
            className="object-cover object-right opacity-40"
          />

          <div className="absolute inset-0 bg-linear-to-r from-amber-950 via-amber-900/80 to-transparent" />
        </div>

        <div className="relative z-10 px-8 md:px-16 py-20 w-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
          >
            <span className="text-yellow-400 block">OUR</span>
            <span className="text-white block">SERVICES</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.div
              variants={item}
              className="bg-amber-800/60 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-500/20 flex items-center gap-2"
            >
              <Bus className="text-yellow-400 w-5 h-5" />
              <span className="text-white font-bold text-sm">
                Institutional Fleet
              </span>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-amber-800/60 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-500/20 flex items-center gap-2"
            >
              <Truck className="text-yellow-400 w-5 h-5" />
              <span className="text-white font-bold text-sm">
                Logistics Solutions
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-700/20 blur-[120px]" />
      </section>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-12 gap-6"
      >
        {/* INVESTMENT */}
        <motion.section
          variants={item}
          className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl bg-amber-900 p-8 md:p-12 border border-yellow-500/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <TrendingUp className="text-yellow-400 w-8 h-8" />
            <h3 className="text-3xl font-bold text-white">
              Investment Opportunities
            </h3>
          </div>

          <p className="text-amber-100 text-lg max-w-md mb-8">
            Yungola Transport offers structured investment opportunities,
            enabling investors to participate in the growing transport market.
            Our diverse portfolio of vehicles and hire-purchase products
            provides a range of profitable and sustainable channels for both
            individual and institutional investors.
          </p>

          <Link
            href="/investors"
            className="flex items-center gap-2 text-yellow-400 font-bold hover:gap-3 transition"
          >
            View Prospectus <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="absolute -right-12 -bottom-12 w-1/2 h-full opacity-30 pointer-events-none">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqynfjtxL0gn_jhHF6BV8tbXZR7cJYX4uWCt_ayYBJl8jL-NKh2NkMpDeBrrB-AWg2JMtaaeQPpOHK8bz4polA3H6mwidDNErEnQRQwFr0Uu4acHU31Ywi1Sy3ur4gB4yEj1oO9UuoOs-hNCFMxHUSAWhBqvbeD7LbFCtzVS2FjInLaZ0b_5K3tzquDbiz2bs6NreyODozscr1nfN6abOpX_JDKMTj027VAtPIghPiGV27XE2lDrv1WW8l0PvrZLWxOstFfkLFxs"
              alt="Investment"
              fill
              className="object-cover rounded-tl-[100px]"
            />
          </div>
        </motion.section>

        {/* AUTO FINANCE */}
        <motion.section
          variants={item}
          className="col-span-12 lg:col-span-4 rounded-xl bg-amber-900/80 p-8 border border-yellow-500/10"
        >
          <CreditCard className="text-yellow-400 w-8 h-8 mb-6" />

          <h3 className="text-2xl font-bold text-white mb-4">Auto-Finance</h3>

          <p className="text-amber-100">
            Structured financing with transparent terms and repayment plans
            tailored to your financial capacity.
          </p>
          <Link
            href="/finance"
            className="flex items-center gap-2 mt-4 text-yellow-400 font-bold hover:gap-3 transition"
          >
            View Prospectus <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>

        {/* CARDS */}
        <ServiceCard
          icon={<CheckCircle className="text-yellow-400 w-6 h-6" />}
          title="Car Hire Purchase"
          desc="Flexible solutions for ride-hailing vehicles. A smart, modern path to vehicle ownership and financial independence."
          tag="Ownership track"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ_tfHK3Uri5K3t1dBMmncU7w_MLzb_9INrDNj684hFW7XZfB7Bm_l9UgJokgIn6jZnOyMRdO95NqAH66v6zuNoinIBGlXjyR8JMM6NMIxY8i3p8a-Bv97Oz4FiU3rLCkQ9yNZZkbuDzamhUlaQ7CueSbkEQEPJbE7GXkR9o69x1nq5hRUL7NiZMHu57AJJhIx9TVfgPF53-LcAKuVGSWs69DG6ROsN7Zlf--nFwVZHma92pqAyb4Az_omCYKWAjrc0yHQ7fwKdpw"
        />

        <ServiceCard
          icon={<Zap className="text-yellow-400 w-6 h-6" />}
          title="Motorcycle Hire Purchase"
          desc="Flexible daily or weekly payment plans designed around commercial riders' income cycles. Own your Okada, keep more of your earnings."
          tag="Low Entry"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDTPaB4P5C8YFzOWFjlNGzjtn0DxrllR4MFCzx8H8kbTqpmfCsgMggBpXYS6kWcDADivIW4_Tlz9b1IXXO-PB7eRLa0MV_TLVzJmlUllwnwx9v87JNjRqarsm3yJlLZLg1nyH3ko5qbFcOZkg67TYVCI-c6j4MKkcUmQV6i6s8DhIQfV4EHY_UecSCtv3bHM1_SgsZ7KUdMRCd_sOrbXXmVloeZgLevO8wMjgHO1jo_8-FJ8p6abVVZY7zvU5A2I5SZobVkQyLTgas"
        />

        <ServiceCard
          icon={<Users className="text-yellow-400 w-6 h-6" />}
          title="Tricycle Hire Purchase"
          desc="Affordable acquisition plans that make Keke ownership a realistic goal for aspiring transport entrepreneurs."
          tag="Community"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ciphrvTp-_y-cQVKN9XdkZ9Oifh6QUrUUPCeBiT75ZwzoDdYAFKMtHhyBpjDQYn-SgWXsA-rJzDacxTouE-cGSOcYAryFjhdElDdliOiLZ1ceJ3rIvXLySqz3aq8Pj1Bv9G5sOLo0mKxomqrzRgRqq1pJkV5KkopURX87ZfvjDn8ui-Z5ipvruCgM6hUsrGO78p58jsuns4Xku_cyN26D1kI4iPzmEm3OjNF1u3lJJdutpJksMQKDeNPOZghM-5gGoQkqvsGiDs"
        />
      </motion.div>
    </main>
  );
}

function ServiceCard({ icon, title, desc, tag, img }) {
  return (
    <motion.section
      variants={item}
      whileHover={{ y: -6 }}
      className="col-span-12 md:col-span-6 lg:col-span-4 group rounded-xl bg-amber-900/80 p-8 border border-yellow-500/10"
    >
      <div className="h-40 mb-8 overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="mb-3">{icon}</div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      <p className="text-amber-100 text-sm mb-6">{desc}</p>

      <div className="flex justify-between text-xs font-bold text-yellow-400 uppercase tracking-widest">
        <span>{tag}</span>
      </div>
    </motion.section>
  );
}
