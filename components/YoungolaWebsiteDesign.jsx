"use client";

import { motion } from "framer-motion";
import { Truck, CreditCard, Settings, Tools } from 'lucide-react'; 
export default function YoungolaWebsiteDesign() {
  const vehiclePlans = [
    {
      name: "Motorcycles",
      deposit: "From ₦120,000",
      term: "12–24 months",
      desc: "Affordable mobility plans for dispatch riders, commuters, and micro-entrepreneurs.",
    },
    {
      name: "Tricycles",
      deposit: "From ₦250,000",
      term: "18–30 months",
      desc: "Structured hire-purchase plans designed for commercial intra-city transport operations.",
    },
    {
      name: "Sedans",
      deposit: "From ₦450,000",
      term: "24–48 months",
      desc: "Comfortable and dependable city vehicles for private and fleet-based transportation needs.",
    },
  ];

  const services = [
    {
      title: "Vehicle Selection",
      text: "Browse motorcycles, tricycles, and sedans with transparent purchase terms and business-focused guidance.",
    },
    {
      title: "Long-Term Payment Calculator",
      text: "Estimate monthly repayment plans instantly based on vehicle class, deposit, and repayment duration.",
    },
    {
      title: "Maintenance Financing",
      text: "Access structured support for routine servicing, repairs, and operational upkeep to keep vehicles productive.",
    },
    {
      title: "Scheduling & Operations",
      text: "Manage customer appointments, consultations, and logistics through a simplified digital scheduling workflow.",
    },
  ];

  const steps = [
    "Choose your preferred vehicle category and model.",
    "Adjust deposit and repayment duration to view your plan.",
    "Submit an application and schedule a consultation.",
    "Get approved, onboarded, and supported with maintenance financing.",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-accent-dark bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-12">
          <div className="flex flex-col items-start space-y-2">
            <div className="text-3xl font-extrabold tracking-wide text-accent-dark">
              Yungola Transport
            </div>
            <div className="text-sm font-semibold text-secondary-foreground">
              Affordable Hire-Purchase Transport Solutions
            </div>
          </div>
          <nav className="hidden gap-8 text-lg font-medium md:flex md:space-x-6">
            <a
              href="#services"
              className="transition-all duration-200 hover:text-accent-dark hover:underline"
            >
              Services
            </a>
            <a
              href="#fleet"
              className="transition-all duration-200 hover:text-accent-dark hover:underline"
            >
              Fleet
            </a>
            <a
              href="#calculator"
              className="transition-all duration-200 hover:text-accent-dark hover:underline"
            >
              Calculator
            </a>
            <a
              href="#schedule"
              className="transition-all duration-200 hover:text-accent-dark hover:underline"
            >
              Schedule
            </a>
          </nav>
          <div className="space-x-4">
            <button className="rounded-2xl bg-accent px-6 py-3 font-semibold text-foreground shadow-lg hover:bg-accent-dark transition-all duration-200">
              Apply Now
            </button>
            <button className="rounded-2xl bg-transparent border-2 border-accent text-accent px-6 py-3 font-semibold shadow-sm hover:bg-accent-light transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      <motion.section
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] via-[var(--secondary-background)] to-[var(--background)] opacity-30" />
        <div className="mx-auto max-w-7xl py-16 lg:px-16 px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 flex flex-col">
            <div className="z-10 flex flex-col justify-center space-y-6">
              <motion.span
                className="w-fit rounded-full border border-[var(--accent-dark)] bg-[var(--secondary-background)] px-4 py-2 text-sm font-semibold text-[var(--accent-dark)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Lagos & Ibadan Transport Enterprise
              </motion.span>
              <motion.h1
                className="text-5xl font-extrabold text-[var(--foreground)] leading-tight md:text-7xl"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Flexible vehicle ownership for businesses and drivers alike.
              </motion.h1>
              <motion.p
                className="mt-4 text-lg text-[var(--secondary-foreground)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Yungola Transport offers a wide variety of vehicles to suit your
                needs. From motorcycles to sedans, we provide affordable
                hire-purchase plans and seamless maintenance financing options.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.button
                  className="rounded-2xl bg-[var(--accent)] px-8 py-4 font-semibold text-[var(--foreground)] shadow-md hover:scale-105 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Explore Vehicles
                </motion.button>
                <motion.button
                  className="rounded-2xl border border-[var(--accent-dark)] bg-white px-8 py-4 font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent-light)]"
                  whileHover={{ scale: 1.05 }}
                >
                  Book Consultation
                </motion.button>
              </motion.div>
            </div>

            <div className="relative z-10">
              <motion.div
                className="rounded-2xl border border-[var(--accent-dark)] bg-white shadow-xl p-8"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="bg-[var(--accent)] rounded-2xl p-6 text-white">
                    <div className="text-sm font-semibold uppercase tracking-wider text-[#f5d95a]">
                      Featured Plan
                    </div>
                    <h2 className="mt-3 text-2xl font-bold leading-tight">
                      Own your next vehicle with predictable payments.
                    </h2>
                    <div className="mt-6 rounded-2xl bg-white/20 p-4">
                      <div className="text-sm text-[#f5e7b2]">
                        Estimated monthly from
                      </div>
                      <div className="mt-1 text-4xl font-bold">₦85,000</div>
                      <div className="mt-2 text-sm text-[#f3e6c0]">
                        Based on selected model, deposit, and duration.
                      </div>
                    </div>
                  </div>

                  <div className="bg-[var(--secondary-background)] rounded-2xl p-6">
                    <div className="text-sm font-semibold text-[#946400]">
                      Quick Actions
                    </div>
                    <div className="mt-4 space-y-4 text-sm text-[#5f4733]">
                      <motion.div
                        className="rounded-2xl bg-white p-4 shadow-sm transition hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        Check repayment options
                      </motion.div>
                      <motion.div
                        className="rounded-2xl bg-white p-4 shadow-sm transition hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        Request maintenance financing
                      </motion.div>
                      <motion.div
                        className="rounded-2xl bg-white p-4 shadow-sm transition hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        Schedule onboarding session
                      </motion.div>
                      <motion.div
                        className="rounded-2xl bg-white p-4 shadow-sm transition hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        Speak with an advisor
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-14 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,196,0,0.1),_transparent)] z-[-1]" />
        <div className="mb-8 max-w-2xl z-10">
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#b89745]">
            Core Services
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-[#4b2f1d] md:text-4xl">
            A unique digital platform for transport financing and operations.
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative rounded-3xl border-2 border-[#b97a00] bg-[var(--secondary-background)] p-6 shadow-2xl transition transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#f5c400] opacity-40 animate-pulse"></div>
              <div className="mb-4 h-11 w-11 rounded-2xl bg-[#fff1b1] shadow-md" />
              <h3 className="text-2xl font-extrabold text-[#5b3a1f]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#725843]">
                {service.text}
              </p>
              <div className="absolute bottom-4 left-4 right-4 border-t border-[#b97a00] pt-2 text-xs text-[#6f533f]">
                Learn more
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="fleet" className="bg-[#fff8e6]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#a56d00]">
                Vehicle Categories
              </div>
              <h2 className="mt-3 text-3xl font-black text-[#4b2f1d] md:text-4xl">
                Choose a vehicle that fits your income model.
              </h2>
            </div>
            <div className="rounded-2xl border border-[#e2c983] bg-white px-4 py-2 text-sm font-medium text-[#6b4c2e]">
              Available across Lagos and Ibadan
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {vehiclePlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-[2rem] border border-[#ecd594] bg-white p-6 shadow-sm"
              >
                <div className="mb-5 h-44 rounded-[1.5rem] bg-gradient-to-br from-[#f8dd5d] via-[#fff4c8] to-[#c89b5a]" />
                <h3 className="text-2xl font-bold text-[#5b3a1f]">
                  {plan.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#725843]">
                  {plan.desc}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-[#fff8e5] p-3">
                    <div className="text-[#8d6b4b]">Deposit</div>
                    <div className="font-bold text-[#5b3a1f]">
                      {plan.deposit}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#fff8e5] p-3">
                    <div className="text-[#8d6b4b]">Terms</div>
                    <div className="font-bold text-[#5b3a1f]">{plan.term}</div>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-2xl bg-[#5b3a1f] px-4 py-3 font-semibold text-white transition hover:opacity-95">
                  View Models
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="calculator"
        className="mx-auto max-w-7xl px-6 py-14 lg:px-10"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[#ead7a1] bg-white p-6 shadow-sm lg:p-8">
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#a56d00]">
              Repayment Estimator
            </div>
            <h2 className="mt-3 text-3xl font-black text-[#4b2f1d]">
              Preview a long-term payment plan.
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6b4c2e]">
                  Vehicle Type
                </label>
                <div className="rounded-2xl border border-[#dcc28b] bg-[#fffdf7] px-4 py-3 text-[#5b3a1f]">
                  Tricycle
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6b4c2e]">
                  Model
                </label>
                <div className="rounded-2xl border border-[#dcc28b] bg-[#fffdf7] px-4 py-3 text-[#5b3a1f]">
                  City Cargo Pro
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6b4c2e]">
                  Initial Deposit
                </label>
                <div className="rounded-2xl border border-[#dcc28b] bg-[#fffdf7] px-4 py-3 text-[#5b3a1f]">
                  ₦300,000
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6b4c2e]">
                  Repayment Period
                </label>
                <div className="rounded-2xl border border-[#dcc28b] bg-[#fffdf7] px-4 py-3 text-[#5b3a1f]">
                  24 Months
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-[1.5rem] bg-[#5b3a1f] p-6 text-white">
              <div className="text-sm text-[#f4dd82]">
                Estimated Monthly Repayment
              </div>
              <div className="mt-2 text-4xl font-black">₦128,500</div>
              <div className="mt-3 text-sm leading-7 text-[#f7ecc4]">
                Includes structured financing assumptions, service support, and
                vehicle category-based pricing rules.
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ead7a1] bg-[#fff8e6] p-6 shadow-sm lg:p-8">
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#a56d00]">
              How It Works
            </div>
            <div className="mt-6 space-y-4">
              {steps.map((step, idx) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f5c400] font-bold text-[#4b2f1d]">
                    {idx + 1}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-[#6d533d]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#5b3a1f] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 lg:grid-cols-3 lg:px-10">
          <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5da61]">
              Maintenance Finance
            </div>
            <h3 className="mt-3 text-2xl font-bold">
              Keep your vehicle road-ready.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#f5ead0]">
              Support for repairs, servicing, and upkeep helps customers protect
              their earning capacity and reduce unexpected downtime.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5da61]">
              Operational Scheduling
            </div>
            <h3 className="mt-3 text-2xl font-bold">
              Simplify appointments and logistics.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#f5ead0]">
              Centralized scheduling helps prospects book consultations, manage
              inspections, and coordinate onboarding activities efficiently.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5da61]">
              Built for Local Mobility
            </div>
            <h3 className="mt-3 text-2xl font-bold">
              Focused on Lagos and Ibadan.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#f5ead0]">
              Every user journey is tailored to the realities of urban transport
              demand, financing behavior, and fleet operations in Southwestern
              Nigeria.
            </p>
          </div>
        </div>
      </section>

      <section id="schedule" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#a56d00]">
              Schedule a Session
            </div>
            <h2 className="mt-3 text-3xl font-black text-[#4b2f1d] md:text-4xl">
              Meet with a Youngola advisor.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#70553f]">
              Book consultations for vehicle selection, repayment advisory,
              document onboarding, or maintenance financing support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-[#fff1b8] px-4 py-2 font-medium text-[#7a5200]">
                Lagos office support
              </span>
              <span className="rounded-full bg-[#fff1b8] px-4 py-2 font-medium text-[#7a5200]">
                Ibadan office support
              </span>
              <span className="rounded-full bg-[#fff1b8] px-4 py-2 font-medium text-[#7a5200]">
                Digital booking flow
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ead7a1] bg-white p-6 shadow-sm lg:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6b4c2e]">
                  Full Name
                </label>
                <div className="rounded-2xl border border-[#dcc28b] bg-[#fffdf7] px-4 py-3 text-[#a38974]">
                  Enter full name
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6b4c2e]">
                  Phone Number
                </label>
                <div className="rounded-2xl border border-[#dcc28b] bg-[#fffdf7] px-4 py-3 text-[#a38974]">
                  Enter phone number
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6b4c2e]">
                  Preferred City
                </label>
                <div className="rounded-2xl border border-[#dcc28b] bg-[#fffdf7] px-4 py-3 text-[#5b3a1f]">
                  Lagos
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6b4c2e]">
                  Consultation Type
                </label>
                <div className="rounded-2xl border border-[#dcc28b] bg-[#fffdf7] px-4 py-3 text-[#5b3a1f]">
                  Hire-Purchase Advisory
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-[#6b4c2e]">
                  Preferred Date & Time
                </label>
                <div className="rounded-2xl border border-[#dcc28b] bg-[#fffdf7] px-4 py-3 text-[#a38974]">
                  Select available slot
                </div>
              </div>
            </div>
            <button className="mt-6 w-full rounded-2xl bg-[#f5c400] px-5 py-3 font-semibold text-[#4b2f1d] shadow-sm transition hover:scale-[1.01]">
              Confirm Appointment
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ead7a1] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="text-xl font-extrabold text-[#5b3a1f]">
              Youngola Group
            </div>
            <div className="mt-1 text-sm text-[#7b624c]">
              Transportation enterprise serving Lagos and Ibadan, Nigeria.
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-[#6c513b]">
            <span className="rounded-full bg-[#fff4c6] px-4 py-2">
              Hire-Purchase
            </span>
            <span className="rounded-full bg-[#fff4c6] px-4 py-2">
              Maintenance Financing
            </span>
            <span className="rounded-full bg-[#fff4c6] px-4 py-2">
              Scheduling System
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
