"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const images = [
  "/vehicles/corolla-yungola.png",
  "/vehicles/keke-yungola.png",
  "/vehicles/motocycle-yungola.png",
];
export default function CompanyOverview() {
      const [index, setIndex] = useState(0);

      useEffect(() => {
        const t = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(t);
      }, []);
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.25em] font-bold text-yellow-600 uppercase mb-3">
          Who We Are
        </p>

        <h2 className="text-3xl md:text-5xl font-black text-amber-900 uppercase leading-tight">
          Bridging Riders and Ownership
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
            COMPANY OVERVIEW
            <span className="text-yellow-500 ml-2">&gt;&gt;</span>
          </h3>

          <div className="space-y-5 text-base md:text-lg leading-relaxed text-stone-700 font-medium">
            <p>
              <span className="text-yellow-600 font-bold">
                Yungola Transport
              </span>{" "}
              handles acquisition of{" "}
              <span className="text-yellow-600">motorcycles</span>,{" "}
              <span className="text-yellow-600">tricycles (Keke NAPEP)</span>,{" "}
              <span className="text-yellow-600">ride-only vehicles</span> for
              commercial riders and first-time owners.
            </p>

            <p>
              System removes heavy upfront cost barrier and opens access to
              vehicle ownership for income generation and mobility upgrade.
            </p>
          </div>

          <div className="mt-10">
            <div className="relative bg-amber-50 border border-yellow-200 p-6">
              <div className="absolute inset-0 bg-yellow-500 opacity-10 blur-2xl" />

              <motion.div
                className="text-5xl text-center mb-4"
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Image
                  src="/vehicles/keke-yungola.png"
                  alt="Transport overview"
                  width={80}
                  height={80}
                  className={"object-contain mx-auto" }
                />
              </motion.div>

              <blockquote className="text-center italic text-amber-900 text-lg md:text-xl">
                Your Road to Ownership Starts Here.
              </blockquote>

              <div className="mt-4 flex justify-center">
                <span className="w-10 h-[2px] bg-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          {" "}
          <div className="absolute -inset-3 bg-yellow-500 opacity-10 blur-2xl group-hover:opacity-20 transition" />
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt="Transport overview"
                fill
                className={`object-cover rounded-sm shadow-2xl transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-yellow-500 opacity-50" />{" "}
        </div>
      </div>
    </section>
  );
}
