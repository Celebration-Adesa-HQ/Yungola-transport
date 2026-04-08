"use client";

import { Briefcase, ShieldCheck, Users, User } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Okanlawon Olatunde",
    role: "CEO/Founder of Yungola transport",
    image: "/team/ceo-of-yungola.jpg",
    bio: "Leads Yungola’s vision for making vehicle ownership and transport support more accessible, practical, and reliable for everyday customers.",
  },
  {
    name: "Ojo Oluwaseun",
    image: "/team/VP Operations.jpg",
    role: "VP Operations",
    bio: "Oversees daily operations, service coordination, and internal processes to ensure customers receive smooth and timely support.",
  },
  {
    name: "Olawole Olamide",
    role: "Office Manager",
    image: "/team/Yungola Office Manager.jpg",
    bio: "Manages office administration, client coordination, and front-facing support that keeps the team responsive and organised.",
  },
];

const values = [
  {
    icon: Users,
    title: "People First",
    description:
      "We focus on building trust with customers through helpful guidance, clear communication, and dependable support.",
  },
  {
    icon: Briefcase,
    title: "Operational Excellence",
    description:
      "Our team works with structure and discipline to keep our services efficient, responsive, and professional.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "We are committed to honest processes, transparent requirements, and a customer experience people can count on.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-yellow-100">
              Meet the Team
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Our Team
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Meet the dedicated professionals behind Yungola Transport’s
              mission to make vehicle access, support, and financing more
              practical for more people.
            </p>
          </div>
        </div>
      </section>

      {/* Intro / Values */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-black text-amber-900">
              Built Around Service
            </h2>
            <p className="mt-3 text-gray-600">
              Our team combines leadership, operations, and customer support to
              help people move forward with confidence. We are focused on clear
              processes, responsive communication, and dependable service at
              every stage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                    <Icon className="h-6 w-6 text-yellow-700" />
                  </div>

                  <h3 className="text-lg font-bold text-amber-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-amber-900">
              Leadership Team
            </h2>
            <p className="mt-2 text-gray-600">
              The people guiding our operations, customer experience, and
              long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-amber-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">
                  {member.image ? (
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="h-24 w-24 rounded-full object-cover"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-amber-900 px-6 py-10 text-white sm:px-10">
            <h2 className="text-2xl font-black sm:text-3xl">
              A Team Focused on Results
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Behind every vehicle inquiry, financing request, or office visit
              is a team working to make the process simple, transparent, and
              worthwhile for our customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
