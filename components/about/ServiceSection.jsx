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
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServiceSection() {
  return (
    <main className="pt-20 pb-16 px-4 sm:px-6 md:px-12 lg:px-24 mx-auto  bg-amber-950 text-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden rounded-2xl md:rounded-4xl bg-amber-900 mb-16 md:mb-24 min-h-[420px] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Yungola Fleet"
            src="/Service-image.png"
            fill
            className="object-cover object-right opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-amber-900/80 to-transparent" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 md:px-12 py-16 md:py-20 w-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold tracking-tight leading-none"
          >
            <span className="text-yellow-400 block text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              OUR
            </span>
            <span className="text-white block text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              SERVICES
            </span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            className="mt-6 flex flex-wrap gap-3 sm:gap-4"
          >
            <motion.div
              variants={item}
              className="bg-amber-800/60 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-yellow-500/20 flex items-center gap-2"
            >
              <Bus className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-bold">
                Institutional Fleet
              </span>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-amber-800/60 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-yellow-500/20 flex items-center gap-2"
            >
              <Truck className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-bold">
                Logistics Solutions
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-12 gap-4 sm:gap-6"
      >
        {/* INVESTMENT */}
        <motion.section
          variants={item}
          className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-xl bg-amber-900 p-5 sm:p-6 md:p-10 border border-yellow-500/10"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6">
            <TrendingUp className="text-yellow-400 w-6 h-6 sm:w-8 sm:h-8" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Investment Opportunities
            </h3>
          </div>

          <p className="text-amber-100 text-sm sm:text-base md:text-lg max-w-md mb-6">
            Yungola Transport offers structured investment opportunities,
            enabling investors to participate in the growing transport market.
          </p>

          <Link
            href="/investors"
            className="flex items-center gap-2 text-yellow-400 font-bold text-sm sm:text-base hover:gap-3 transition"
          >
            View Investments <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>

        {/* AUTO FINANCE */}
        <motion.section
          variants={item}
          className="col-span-12 lg:col-span-4 rounded-xl bg-amber-900/80 p-5 sm:p-6 md:p-8 border border-yellow-500/10"
        >
          <CreditCard className="text-yellow-400 w-6 h-6 sm:w-8 sm:h-8 mb-4" />

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
            Auto-Finance
          </h3>

          <p className="text-amber-100 text-sm sm:text-base">
            Structured financing with transparent terms and repayment plans.
          </p>

          <Link
            href="/finance"
            className="flex items-center gap-2 mt-4 text-yellow-400 font-bold text-sm sm:text-base hover:gap-3 transition"
          >
            View Auto-Finance <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>

        {/* CARDS */}
        <ServiceCard
          icon={<CheckCircle className="text-yellow-400 w-5 h-5" />}
          title="Car Hire Purchase"
          desc="Flexible solutions for ride-hailing vehicles."
          tag="Ownership track"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ_tfHK3Uri5K3t1dBMmncU7w_MLzb_9INrDNj684hFW7XZfB7Bm_l9UgJokgIn6jZnOyMRdO95NqAH66v6zuNoinIBGlXjyR8JMM6NMIxY8i3p8a-Bv97Oz4FiU3rLCkQ9yNZZkbuDzamhUlaQ7CueSbkEQEPJbE7GXkR9o69x1nq5hRUL7NiZMHu57AJJhIx9TVfgPF53-LcAKuVGSWs69DG6ROsN7Zlf--nFwVZHma92pqAyb4Az_omCYKWAjrc0yHQ7fwKdpw"
        />

        <ServiceCard
          icon={<Zap className="text-yellow-400 w-5 h-5" />}
          title="Motorcycle Hire Purchase"
          desc="Flexible daily or weekly payment plans."
          tag="Low Entry"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDTPaB4P5C8YFzOWFjlNGzjtn0DxrllR4MFCzx8H8kbTqpmfCsgMggBpXYS6kWcDADivIW4_Tlz9b1IXXO-PB7eRLa0MV_TLVzJmlUllwnwx9v87JNjRqarsm3yJlLZLg1nyH3ko5qbFcOZkg67TYVCI-c6j4MKkcUmQV6i6s8DhIQfV4EHY_UecSCtv3bHM1_SgsZ7KUdMRCd_sOrbXXmVloeZgLevO8wMjgHO1jo_8-FJ8p6abVVZY7zvU5A2I5SZobVkQyLTgas"
        />

        <ServiceCard
          icon={<Users className="text-yellow-400 w-5 h-5" />}
          title="Tricycle Hire Purchase"
          desc="Affordable acquisition plans for transport entrepreneurs."
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
      whileHover={{ y: -4 }}
      className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl bg-amber-900/80 p-5 sm:p-6 md:p-8 border border-yellow-500/10"
    >
      <div className="h-32 sm:h-40 mb-6 overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="mb-2">{icon}</div>

      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>

      <p className="text-amber-100 text-sm mb-4">{desc}</p>

      <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">
        {tag}
      </span>
    </motion.section>
  );
}
