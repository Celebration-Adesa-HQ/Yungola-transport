"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const members = [
  {
    name: "Olatunde Okanlawon",
    role: "CEO/Founder of Yungola transport",
    image: "/team/ceo-of-yungola.jpg",
    bio: "Leads Yungola’s vision for making vehicle ownership and transport support more accessible, practical, and reliable for everyday customers.",
  },
  {
    name: "Oluwaseun Ojo",
    role: "VP Operations",
    image: "/team/VP Operations.jpg",
    bio: "Oversees daily operations, service coordination, and internal processes to ensure customers receive smooth and timely support.",
  },
  {
    name: "Olamide Olawole",
    role: "Office Manager",
    image: "/team/Yungola Office Manager.jpg",
    bio: "Manages office administration, client coordination, and front-facing support that keeps the team responsive and organised.",
  },
];

export default function TeamMember() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-black text-amber-900">
            Leadership Team
          </h2>
          <p className="mt-2 text-gray-600">
            The people guiding operations, customer experience, and growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="rounded-2xl border border-amber-200 bg-white p-8 text-center shadow-sm"
            >
              <div className="relative mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full bg-amber-100">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <User className="h-12 w-12 text-amber-700" />
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {member.name}
              </h3>

              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-yellow-700">
                {member.role}
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}