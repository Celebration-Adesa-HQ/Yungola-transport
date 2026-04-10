"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhoWeServe() {

    
  return (
    <main className="pb-24 bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#3D1409] px-6 pt-12 pb-20">
        <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#FFB800] opacity-5" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="relative z-10 max-w-lg"
        >
          <motion.h1
            variants={fadeUp}
            className="mb-4 text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFB800]"
          >
            WHO DO WE SERVE
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xs text-base md:text-lg font-medium leading-relaxed text-white/70"
          >
            Structured ownership model for transport operators and new entrants.
          </motion.p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <div className="relative z-20 -mt-10 space-y-10 px-6 max-w-6xl mx-auto">
        {/* CARD 1 */}
        <motion.article
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="overflow-hidden bg-white shadow-md rounded-xl"
        >
          <div className="grid md:grid-cols-2">
            {/* IMAGE */}
            <div className="h-56 md:h-full overflow-hidden">
              <Image
                src="/Bikeman-YUNGOLA-TRANSPORT.jpeg"
                alt="Commercial Rider"
                width={700}
                height={500}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>

            {/* TEXT */}
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <span className="mb-5 w-fit bg-[#FFB800]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FFB800]">
                Professional Tier
              </span>

              <motion.h2
                variants={fadeUp}
                className="mb-3 text-2xl md:text-3xl font-bold text-[#3D1409]"
              >
                Individual Commercial Riders
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mb-6 text-sm md:text-base leading-relaxed text-gray-600"
              >
                Motorcycle(Okada) and Tricycle(Keke) operators seeking to own
                their vehicles rather than renting, enabling them to keep more
                of their daily earnings and build long-term financial stability.
              </motion.p>

              <motion.div
                variants={fadeUp}
                whileHover={{ x: 5 }}
                className="w-fit"
              >
                <Link
                  href="/schedule"
                  className="flex items-center gap-2 font-bold uppercase tracking-widest text-[#FFB800] text-sm"
                >
                  View Ownership Paths
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.article>

        {/* CARD 2 */}
        <motion.article
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="overflow-hidden rounded-xl bg-[#3D1409] shadow-md"
        >
          <div className="grid md:grid-cols-2">
            {/* TEXT */}
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <motion.h2
                variants={fadeUp}
                className="mb-3 text-2xl md:text-3xl font-bold text-[#FFB800]"
              >
                First-Time Vehicle Owners
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mb-6 text-sm md:text-base leading-relaxed text-white/80"
              >
                Individuals with little or no prior vehicle ownership experience
                who want an affordable, low-risk entry point into the commercial
                transport sector.
              </motion.p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#FFB800] bg-white/5 p-4">
                  <div className="text-lg md:text-xl font-black text-[#FFB800]">
                    0%
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                    Entry Burden
                  </div>
                </div>

                <div className="border-l-2 border-[#FFB800] bg-white/5 p-4">
                  <div className="text-lg md:text-xl font-black text-[#FFB800]">
                    100%
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                    Support Coverage
                  </div>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.03 }} className="w-fit">
                <Link
                  href="/shedule"
                  className="inline-block rounded-md bg-[#FFB800] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#271900]"
                >
                  Start Your Journey
                </Link>
              </motion.div>
            </div>

            {/* IMAGE */}
            <div className="h-56 md:h-full overflow-hidden">
              <Image
                src="/Buy-YUNGOLA-TRANSPORT.jpeg"
                alt="Ownership concept"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.article>

        {/* FOOTER */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 py-12 text-center"
        >
          <CheckCircle className="mx-auto mb-4 text-[#FFB800]" size={40} />

          <h3 className="mb-2 text-xl md:text-2xl font-bold text-[#3D1409]">
            Built on Trust
          </h3>

          <p className="mx-auto max-w-xs text-sm text-gray-600">
            5,000+ operators already active in structured ownership programs.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
