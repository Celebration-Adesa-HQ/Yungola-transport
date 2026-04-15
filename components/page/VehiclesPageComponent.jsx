"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bike,
  Car,
  Calculator,
  CheckCircle,
  Truck,
  Sparkles,
  Zap,
  Gauge,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const vehicleData = [
  {
    icon: Truck,
    type: "Tricycle (CNG/Electric)",
    slug: "keke-cng-electric",
    image: "/vehicles/keke-yungola.png",
    brands: [
      {
        name: "TVS King CNG",
        price: 4800000,
        image: "/vehicles/keke-cng.png",
        details: [
          "Factory-fitted CNG system",
          "Lower daily fueling cost",
          "Commercial passenger transport ready",
          "Durable frame for urban routes",
        ],
      },
      {
        name: "Bajaj RE CNG",
        price: 4550000,
        image: "/vehicles/bajaj-re-cng.png",
        details: [
          "Efficient engine performance",
          "Reliable for intra-city operations",
          "Simple maintenance structure",
          "Strong income potential for operators",
        ],
      },
      {
        name: "Electric Passenger Tricycle",
        price: 5200000,
        image: "/vehicles/electric-keke.png",
        details: [
          "Battery-powered urban mobility",
          "Quiet and clean daily operation",
          "Ideal for short commercial routes",
          "Lower running and servicing costs",
        ],
      },
    ],
    upfrontFrom: "₦550,000",
    processing: "₦25,000",
    monthlyFrom: "₦420,000",
    description:
      "A cost-saving commercial tricycle built for daily transport business. Available in both CNG and electric options, it helps operators reduce running costs, improve efficiency, and maintain strong earnings across busy city routes.",
    features: [
      "Available in CNG and electric options",
      "Lower running cost for daily transport business",
      "Great for commercial passenger operations",
      "Easy maintenance and strong long-term value",
    ],
    stats: [
      { label: "Energy Type", value: "CNG/Electric", icon: Zap },
      { label: "Use Case", value: "Commercial", icon: Gauge },
      { label: "Strength", value: "Low Running Cost", icon: ShieldCheck },
    ],
  },
  {
    icon: Bike,
    type: "Electric Motorcycle",
    slug: "electric-motorcycle",
    image: "/vehicles/motocycle-yungola.png",
    brands: [
      {
        name: "Yadea Electric Bike",
        price: 2100000,
        image: "/vehicles/electric-bike.png",
        details: [
          "Battery-powered mobility",
          "Quiet and clean operation",
          "Ideal for delivery and short urban trips",
          "Lower servicing cost than petrol bikes",
        ],
      },
      {
        name: "TailG Electric Motorcycle",
        price: 2350000,
        image: "/vehicles/tailg-electric-bike.png",
        details: [
          "Modern electric drive system",
          "Smooth acceleration",
          "Efficient for logistics and dispatch",
          "Reduced dependence on fuel",
        ],
      },
    ],
    upfrontFrom: "₦180,000",
    processing: "₦15,000",
    monthlyFrom: "₦175,000",
    description:
      "A clean, modern mobility option for dispatch riders, personal movement, and short-distance logistics. Electric motorcycles offer quiet performance and lower operating costs.",
    features: [
      "Battery-powered mobility",
      "Low maintenance profile",
      "Excellent for dispatch business",
      "Quiet and eco-friendly operation",
    ],
    stats: [
      { label: "Energy Type", value: "Electric", icon: Zap },
      { label: "Use Case", value: "Delivery & Personal", icon: Gauge },
      { label: "Strength", value: "Low Maintenance", icon: ShieldCheck },
    ],
  },
  {
    icon: Car,
    type: "Ride-Only Vehicles",
    slug: "car",
    image: "/vehicles/corolla-yungola.png",
    brands: [
      {
        name: "Toyota Corolla",
        price: 9500000,
        image: "/vehicles/corolla-yungola.png",
        details: [
          "Ride-hailing ready",
          "Reliable engine and transmission",
          "Comfortable cabin for passengers",
          "Strong resale value in the market",
        ],
      },
      {
        name: "Toyota Camry",
        price: 11800000,
        image: "/vehicles/camry-yungola.png",
        details: [
          "Premium comfort for ride services",
          "Solid road performance",
          "Durable and trusted brand reputation",
          "Good long-term ownership value",
        ],
      },
    ],
    upfrontFrom: "₦800,000",
    processing: "₦50,000",
    monthlyFrom: "₦800,000",
    description:
      "A reliable car for ride-hailing, business, and personal use with strong durability, comfort, and resale value.",
    features: [
      "Ride-hailing ready",
      "Comfortable interior",
      "Reliable engine",
      "Good resale value",
    ],
    stats: [
      { label: "Energy Type", value: "Petrol", icon: Zap },
      { label: "Use Case", value: "Ride-Hailing", icon: Gauge },
      { label: "Strength", value: "Comfort & Resale", icon: ShieldCheck },
    ],
  },
];
const requirements = ["Valid ID", "2 Passport Photos", "2 Guarantors"];

const interestRates = {
  12: 12,
  24: 18,
  36: 24,
};

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const staggerWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function VehiclesPageComponent() {
  const [selectedVehicleType, setSelectedVehicleType] = useState("keke-cng");
  const [selectedBrand, setSelectedBrand] = useState("TVS King CNG");
  const [downPayment, setDownPayment] = useState(20);
  const [loanDuration, setLoanDuration] = useState(12);

  const groupedVehicles = useMemo(() => {
    return {
      "keke-cng":
        vehicleData.find((item) => item.slug === "keke-cng")?.brands ?? [],
      "electric-motorcycle":
        vehicleData.find((item) => item.slug === "electric-motorcycle")
          ?.brands ?? [],
      car: vehicleData.find((item) => item.slug === "car")?.brands ?? [],
    };
  }, []);

  const currentVehicleGroup = useMemo(() => {
    return vehicleData.find((item) => item.slug === selectedVehicleType);
  }, [selectedVehicleType]);

  const selectedVehicle = useMemo(() => {
    return groupedVehicles[selectedVehicleType]?.find(
      (vehicle) => vehicle.name === selectedBrand,
    );
  }, [groupedVehicles, selectedBrand, selectedVehicleType]);

  const loanCalculation = useMemo(() => {
    if (!selectedVehicle) return null;

    const vehiclePrice = selectedVehicle.price;
    const downPaymentAmount = (vehiclePrice * downPayment) / 100;
    const financedAmount = vehiclePrice - downPaymentAmount;
    const interestRate = interestRates[loanDuration] ?? 12;
    const totalInterest = (financedAmount * interestRate) / 100;
    const totalAmount = financedAmount + totalInterest;
    const monthlyPayment = totalAmount / loanDuration;

    return {
      downPayment: downPaymentAmount,
      financedAmount,
      interestRate,
      totalInterest,
      totalAmount,
      monthlyPayment,
    };
  }, [selectedVehicle, downPayment, loanDuration]);

  const vehicleTypeCards = [
    {
      key: "keke-cng",
      label: "Keke (CNG)",
      icon: Truck,
      accent: "CNG Powered",
    },
    {
      key: "electric-motorcycle",
      label: "Electric Motorcycle",
      icon: Bike,
      accent: "Battery Powered",
    },
    {
      key: "car",
      label: "Car",
      icon: Car,
      accent: "Ride-Only",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-white to-yellow-50">
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <Image
          src="/Yungola mockup.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/95 via-amber-800/85 to-yellow-600/75" />

        {/* Animated background blobs */}
        <motion.div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"
          animate={{
            x: [0, 30, -10, 0],
            y: [0, 20, -20, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-24 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl"
          animate={{
            x: [0, -40, 10, 0],
            y: [0, -30, 15, 0],
            scale: [1, 0.95, 1.06, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          animate={{
            y: [0, -25, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-yellow-100 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4" />
              Hire Purchase Made Simple
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
            >
              Our Vehicle Collection, Reimagined
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg"
            >
              Explore CNG keke options, electric motorcycles, and dependable
              ride-only cars with flexible payment plans, simple requirements,
              and modern presentation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                asChild
                className="rounded-full bg-white px-6 text-amber-900 hover:bg-yellow-100"
              >
                <Link href="/schedule">Apply Now</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 px-6 text-white backdrop-blur-md hover:bg-white/20"
              >
                <Link href="#vehicles">Explore Vehicles</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto -mt-8 mb-8 flex max-w-5xl flex-wrap items-center justify-center gap-4 rounded-3xl border border-amber-200/60 bg-white/80 px-6 py-5 text-sm text-amber-900 shadow-2xl backdrop-blur-xl"
      >
        <span className="font-bold">Requirements:</span>
        {requirements.map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * index, duration: 0.45 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5"
          >
            <CheckCircle className="h-4 w-4 text-yellow-600" />
            {item}
          </motion.span>
        ))}
      </motion.div>

      {/* Interactive Section */}
      <section id="calculator" className="py-16 hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-black text-amber-900 sm:text-4xl">
              Choose and Calculate
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Pick a category, choose a model, and get an instant financing
              estimate with a premium animated experience.
            </p>
          </motion.div>

          {/* Vehicle Type Selection */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 rounded-[2rem] border border-amber-100 bg-white/90 p-6 shadow-[0_25px_80px_rgba(120,53,15,0.12)] backdrop-blur-xl"
          >
            <h3 className="mb-5 text-xl font-bold text-amber-900">
              Select Vehicle Type
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              {vehicleTypeCards.map((item) => {
                const Icon = item.icon;
                const active = selectedVehicleType === item.key;

                return (
                  <motion.button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setSelectedVehicleType(item.key);
                      setSelectedBrand(
                        groupedVehicles[item.key]?.[0]?.name || "",
                      );
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative overflow-hidden rounded-[1.6rem] border p-5 text-left transition-all ${
                      active
                        ? "border-yellow-400 bg-gradient-to-br from-yellow-100 to-amber-50 shadow-2xl"
                        : "border-amber-200 bg-white hover:border-yellow-300"
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-300/0 via-white/50 to-yellow-300/0"
                      animate={{ x: active ? ["-100%", "100%"] : "-100%" }}
                      transition={{
                        duration: 1.6,
                        repeat: active ? Infinity : 0,
                        ease: "linear",
                        repeatDelay: 1,
                      }}
                    />

                    <div className="relative z-10">
                      <div
                        className={`mb-4 inline-flex rounded-2xl p-3 ${
                          active ? "bg-white shadow-lg" : "bg-amber-50"
                        }`}
                      >
                        <Icon
                          className={`h-7 w-7 ${
                            active ? "text-yellow-600" : "text-amber-700"
                          }`}
                        />
                      </div>

                      <p
                        className={`text-lg font-bold ${
                          active ? "text-amber-900" : "text-amber-800"
                        }`}
                      >
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-amber-700/80">
                        {item.accent}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            {/* Available Brands */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="mb-4 text-xl font-bold text-amber-900">
                Available Models
              </h3>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {groupedVehicles[selectedVehicleType]?.map(
                    (vehicle, index) => {
                      const active = selectedBrand === vehicle.name;

                      return (
                        <motion.button
                          key={vehicle.name}
                          layout
                          initial={{ opacity: 0, y: 24, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -16, scale: 0.96 }}
                          transition={{
                            duration: 0.45,
                            delay: index * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          type="button"
                          onClick={() => setSelectedBrand(vehicle.name)}
                          whileHover={{ y: -6 }}
                          className={`w-full overflow-hidden rounded-[1.8rem] border bg-white text-left shadow-sm transition-all ${
                            active
                              ? "border-yellow-400 shadow-[0_20px_60px_rgba(234,179,8,0.18)]"
                              : "border-amber-100 hover:border-yellow-200 hover:shadow-lg"
                          }`}
                        >
                          <div className="grid gap-4 md:grid-cols-[170px_1fr]">
                            <div className="relative flex min-h-[160px] items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100">
                              {vehicle.image ? (
                                <motion.div
                                  whileHover={{ scale: 1.08, rotate: -1 }}
                                  transition={{ duration: 0.4 }}
                                >
                                  <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    width={150}
                                    height={110}
                                    className="object-contain"
                                  />
                                </motion.div>
                              ) : (
                                <Car className="h-12 w-12 text-amber-800" />
                              )}
                            </div>

                            <div className="p-5">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                  <h4 className="text-lg font-black text-amber-900">
                                    {vehicle.name}
                                  </h4>
                                  <p className="mt-1 text-lg font-bold text-yellow-700">
                                    {formatCurrency(vehicle.price)}
                                  </p>
                                </div>

                                {active && (
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700"
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                    Selected
                                  </motion.div>
                                )}
                              </div>

                              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                                {vehicle.details.map((detail) => (
                                  <div
                                    key={detail}
                                    className="flex items-start gap-2 text-sm text-gray-700"
                                  >
                                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
                                    <span>{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      );
                    },
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_30px_90px_rgba(120,53,15,0.16)]"
            >
              <motion.div
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-200/30 blur-3xl"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-amber-200/30 blur-2xl"
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-yellow-100 p-3">
                    <Calculator className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">
                      Financing Calculator
                    </h3>
                    <p className="text-sm text-gray-600">
                      Dynamic estimate based on selected model
                    </p>
                  </div>
                </div>

                {selectedVehicle ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedVehicle.name}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="mb-6 rounded-[1.5rem] bg-gradient-to-r from-yellow-50 to-amber-50 p-5 ring-1 ring-yellow-100">
                        <p className="text-sm text-amber-700">
                          Selected Vehicle
                        </p>
                        <p className="text-xl font-black text-amber-900">
                          {selectedVehicle.name}
                        </p>
                        <p className="mt-1 text-2xl font-bold text-yellow-700">
                          {formatCurrency(selectedVehicle.price)}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="mb-2 block font-medium text-amber-900">
                            Down Payment: {downPayment}% (
                            {formatCurrency(
                              (selectedVehicle.price * downPayment) / 100,
                            )}
                            )
                          </label>
                          <input
                            type="range"
                            min="10"
                            max="50"
                            value={downPayment}
                            onChange={(e) =>
                              setDownPayment(Number(e.target.value))
                            }
                            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-yellow-200"
                          />
                          <div className="mt-1 flex justify-between text-sm text-amber-600">
                            <span>10%</span>
                            <span>50%</span>
                          </div>
                        </div>

                        <div>
                          <label className="mb-2 block font-medium text-amber-900">
                            Loan Duration
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {[12, 24, 36].map((months) => (
                              <motion.button
                                key={months}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setLoanDuration(months)}
                                className={`rounded-xl p-3 font-medium transition-all ${
                                  loanDuration === months
                                    ? "bg-yellow-500 text-amber-950 shadow-lg"
                                    : "bg-amber-100 text-amber-700 hover:bg-yellow-300"
                                }`}
                              >
                                {months} months
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {loanCalculation && (
                        <motion.div
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.45 }}
                          className="mt-8 border-t border-amber-200 pt-6"
                        >
                          <h3 className="mb-4 font-bold text-amber-900">
                            Payment Breakdown
                          </h3>

                          <div className="space-y-3">
                            <div className="flex justify-between border-b border-amber-100 py-2">
                              <span className="text-amber-700">
                                Down Payment
                              </span>
                              <span className="font-semibold text-amber-900">
                                {formatCurrency(loanCalculation.downPayment)}
                              </span>
                            </div>
                            <div className="flex justify-between border-b border-amber-100 py-2">
                              <span className="text-amber-700">
                                Financed Amount
                              </span>
                              <span className="font-semibold text-amber-900">
                                {formatCurrency(loanCalculation.financedAmount)}
                              </span>
                            </div>
                            <div className="flex justify-between border-b border-amber-100 py-2">
                              <span className="text-amber-700">
                                Interest Rate
                              </span>
                              <span className="font-semibold text-amber-900">
                                {loanCalculation.interestRate}% p.a.
                              </span>
                            </div>
                            <div className="flex justify-between border-b border-amber-100 py-2">
                              <span className="text-amber-700">
                                Total Interest
                              </span>
                              <span className="font-semibold text-amber-900">
                                {formatCurrency(loanCalculation.totalInterest)}
                              </span>
                            </div>
                            <div className="flex justify-between border-b border-yellow-300 py-2">
                              <span className="text-amber-700">
                                Total Payable
                              </span>
                              <span className="font-bold text-amber-900">
                                {formatCurrency(loanCalculation.totalAmount)}
                              </span>
                            </div>
                          </div>

                          <motion.div
                            animate={{
                              boxShadow: [
                                "0 0 0 rgba(234,179,8,0.0)",
                                "0 0 30px rgba(234,179,8,0.24)",
                                "0 0 0 rgba(234,179,8,0.0)",
                              ],
                            }}
                            transition={{
                              duration: 2.6,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="mt-5 rounded-[1.4rem] bg-yellow-500 p-5"
                          >
                            <p className="text-sm font-medium text-amber-950">
                              Monthly Payment
                            </p>
                            <p className="text-3xl font-black text-amber-950">
                              {formatCurrency(loanCalculation.monthlyPayment)}
                            </p>
                            <p className="text-sm text-amber-900">
                              for {loanDuration} months
                            </p>
                          </motion.div>

                          <Button className="mt-6 w-full rounded-xl bg-amber-900 py-6 text-base font-semibold text-white hover:bg-amber-800">
                            Schedule a Visit
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="py-12 text-center">
                    <Car className="mx-auto mb-4 h-16 w-16 text-amber-300" />
                    <p className="text-amber-600">
                      Select a vehicle model to see financing options
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Cards */}
      <section id="vehicles" className="bg-white py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-black text-amber-900 sm:text-4xl">
              Vehicle Categories
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Compare categories, strengths, use cases, and financing entry
              points at a glance.
            </p>
          </motion.div>

          {vehicleData.map((vehicle, index) => {
            const VehicleIcon = vehicle.icon;

            return (
              <motion.div
                key={vehicle.type}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-[0_22px_70px_rgba(120,53,15,0.10)] md:flex"
              >
                <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 p-10 md:w-80">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.3,
                    }}
                  />

                  {vehicle.image ? (
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: -2 }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10"
                    >
                      <Image
                        src={vehicle.image}
                        alt={vehicle.type}
                        width={220}
                        height={160}
                        className="rounded-xl object-contain"
                      />
                    </motion.div>
                  ) : (
                    <VehicleIcon className="relative z-10 h-24 w-24 text-amber-900" />
                  )}
                </div>

                <div className="flex-1 p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-black text-amber-900">
                      {vehicle.type}
                    </h3>
                  </div>

                  <p className="mt-4 max-w-3xl text-gray-700">
                    {vehicle.description}
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {vehicle.stats.map((stat) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className="rounded-2xl border border-amber-200 bg-white/80 p-4"
                        >
                          <div className="mb-2 inline-flex rounded-xl bg-yellow-50 p-2">
                            <StatIcon className="h-4 w-4 text-yellow-600" />
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                            {stat.label}
                          </p>
                          <p className="mt-1 font-bold text-amber-900">
                            {stat.value}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-bold text-amber-900">
                      Key Features
                    </h4>
                    <div className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                      {vehicle.features.map((feature) => (
                        <motion.div
                          key={feature}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-yellow-600" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild className="rounded-full">
                      <Link href="/schedule">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
