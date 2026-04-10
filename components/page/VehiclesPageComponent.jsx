"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Bike, Car, Calculator, CheckCircle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const vehicleData = [
  {
    icon: Bike,
    type: "Motorcycle",
    slug: "motorcycle",
    image: "/vehicles/motocycle-yungola.png",
    brands: [
      {
        name: "Bajaj Boxer",
        price: 1300000,
        image: "/vehicles/motocycle-yungola.png",
      },
      {
        name: "Honda Ace",
        price: 1450000,
        image: "/vehicles/honda-ace-motocyle-yungola.png",
      },
      {
        name: "TVS HLX",
        price: 1500000,
        image: "/vehicles/tvs-hlx-motocycle-yungola.png",
      },
    ],
    upfrontFrom: "₦80,000",
    processing: "₦10,000",
    monthlyFrom: "₦160,000",
    description:
      "A practical option for dispatch, logistics, and short-distance mobility with lower operating cost.",
    features: [
      "Most affordable option",
      "Fast return on use",
      "Great for delivery business",
      "Low fuel consumption",
    ],
  },
  {
    icon: Truck,
    type: "Tricycle (Keke)",
    image: "/vehicles/keke-yungola.png",
    slug: "tricycle",
    brands: [
      {
        name: "TVS King",
        price: 4500000,
        image: "/vehicles/keke-yungola.png",
      },
      {
        name: "Bajaj RE",
        price: 4300000,
        image: "/vehicles/bajaj-re-motocycle-yungola.png",
      },
      {
        name: "Piaggio Ape",
        price: 4700000,
        image: "/vehicles/piaggio-ape-keke-yungola.png",
      },
    ],
    upfrontFrom: "₦500,000",
    processing: "₦20,000",
    monthlyFrom: "₦440,000",
    description:
      "A dependable commercial vehicle for intra-city transport with strong daily earning potential.",
    features: [
      "Fuel efficient",
      "Easy to maintain",
      "Strong daily income potential",
      "Simple to operate",
    ],
  },
  {
    icon: Car,
    type: "Toyota Corolla (2010)",
    slug: "car",
    image: "/vehicles/corolla-yungola.png",
    brands: [
      {
        name: "Toyota Corolla",
        price: 9500000,
        image: "/vehicles/corolla-yungola.png",
      },
    ],
    upfrontFrom: "₦800,000",
    processing: "₦50,000",
    monthlyFrom: "₦800,000",
    description:
      "A reliable car for ride-hailing, business, and personal use with strong durability and resale value.",
    features: [
      "Ride-hailing ready",
      "Comfortable interior",
      "Reliable engine",
      "Good resale value",
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

export default function VehiclesPageComponent() {
  const [selectedVehicleType, setSelectedVehicleType] = useState("motorcycle");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [downPayment, setDownPayment] = useState(20);
  const [loanDuration, setLoanDuration] = useState(12);

  const groupedVehicles = useMemo(() => {
    return {
      motorcycle:
        vehicleData.find((item) => item.slug === "motorcycle")?.brands ?? [],
      tricycle:
        vehicleData.find((item) => item.slug === "tricycle")?.brands ?? [],
      car: vehicleData.find((item) => item.slug === "car")?.brands ?? [],
    };
  }, []);

  const currentVehicleGroup = useMemo(() => {
    return vehicleData.find((item) => item.slug === selectedVehicleType);
  }, [selectedVehicleType]);

  const selectedVehicle = useMemo(() => {
    return groupedVehicles[selectedVehicleType].find(
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
      key: "motorcycle",
      label: "Motorcycle",
      icon: Bike,
    },
    {
      key: "tricycle",
      label: "Tricycle (Keke)",
      icon: Truck,
    },
    {
      key: "car",
      label: "Car",
      icon: Car,
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Yungola mockup.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/80 to-yellow-600/70 z-10" />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-yellow-100">
              Hire Purchase Made Simple
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Our Vehicles
            </h1>

            <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Explore motorcycles, tricycles, and cars with flexible payment
              plans, simple requirements, and clear pricing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/schedule">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Table */}
      <section className="bg-white py-14 hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-black text-amber-900">
                Vehicle Rates
              </h2>
              <p className="mt-2 text-gray-600">
                Quick overview of starting prices and payment structure.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-amber-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-yellow-600 text-white">
                <tr>
                  <th className="p-4 text-left font-bold">Vehicle</th>
                  <th className="p-4 text-right font-bold">Brands</th>
                  <th className="p-4 text-right font-bold">Starting Price</th>
                  <th className="p-4 text-right font-bold">Upfront</th>
                  <th className="p-4 text-right font-bold">Processing</th>
                  <th className="p-4 text-right font-bold">Monthly</th>
                </tr>
              </thead>
              <tbody>
                {vehicleData.map((vehicle) => (
                  <tr
                    key={vehicle.type}
                    className="border-t border-amber-100 hover:bg-amber-50/70"
                  >
                    <td className="p-4 font-semibold text-amber-900">
                      {vehicle.type}
                    </td>
                    <td className="p-4 text-right text-gray-700">
                      {vehicle.brands.length}
                    </td>
                    <td className="p-4 text-right text-gray-900">
                      {formatCurrency(
                        Math.min(...vehicle.brands.map((brand) => brand.price)),
                      )}
                    </td>
                    <td className="p-4 text-right text-gray-900">
                      {vehicle.upfrontFrom}
                    </td>
                    <td className="p-4 text-right text-gray-900">
                      {vehicle.processing}
                    </td>
                    <td className="p-4 text-right font-bold text-yellow-700">
                      {vehicle.monthlyFrom}/mo
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-amber-900">
            <span className="font-bold">Requirements:</span>
            {requirements.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-yellow-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-14 hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-amber-900">
              Choose and Calculate
            </h2>
            <p className="mt-2 text-gray-600">
              Pick a vehicle type, select a brand, and see an estimated payment
              breakdown instantly.
            </p>
          </div>

          {/* Vehicle Type Selection */}
          <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
            <h3 className="mb-4 text-xl font-bold text-amber-900">
              Select Vehicle Type
            </h3>

            <div className="grid gap-4 sm:grid-cols-3">
              {vehicleTypeCards.map((item) => {
                const Icon = item.icon;
                const active = selectedVehicleType === item.key;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setSelectedVehicleType(item.key);
                      setSelectedBrand("");
                    }}
                    className={`rounded-xl border-2 p-4 transition-all ${
                      active
                        ? "border-yellow-500 bg-yellow-50 shadow-sm"
                        : "border-amber-200 bg-white hover:border-yellow-300"
                    }`}
                  >
                    <Icon
                      className={`mx-auto mb-2 h-8 w-8 ${
                        active ? "text-yellow-600" : "text-amber-700"
                      }`}
                    />
                    <p
                      className={`text-center font-semibold ${
                        active ? "text-yellow-700" : "text-amber-800"
                      }`}
                    >
                      {item.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Available Brands */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-amber-900">
                Available Brands
              </h3>

              <div className="space-y-4">
                {groupedVehicles[selectedVehicleType].map((vehicle) => {
                  const active = selectedBrand === vehicle.name;

                  return (
                    <button
                      key={vehicle.name}
                      type="button"
                      onClick={() => setSelectedBrand(vehicle.name)}
                      className={`w-full overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all ring-1 ${
                        active
                          ? "ring-yellow-500"
                          : "ring-amber-100 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="flex h-28 w-32 items-center justify-center bg-amber-100 text-amber-700">
                          {vehicle.image ? (
                            <Image
                              src={vehicle.image}
                              alt={vehicle.name}
                              width={120}
                              height={90}
                              className="object-cover"
                            />
                          ) : (
                            <Car className="h-12 w-12" />
                          )}
                        </div>

                        <div className="flex-1 p-4">
                          <h4 className="font-bold text-amber-900">
                            {vehicle.name}
                          </h4>
                          <p className="mt-1 font-semibold text-yellow-700">
                            {formatCurrency(vehicle.price)}
                          </p>

                          {active && (
                            <div className="mt-2 inline-flex items-center gap-1 text-sm text-green-600">
                              <CheckCircle className="h-4 w-4" />
                              Selected
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Calculator */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
              <div className="mb-6 flex items-center gap-2">
                <Calculator className="h-6 w-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-amber-900">
                  Financing Calculator
                </h3>
              </div>

              {selectedVehicle ? (
                <div>
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6">
                    <p className="text-amber-700 text-sm">Selected Vehicle</p>
                    <p className="font-bold text-amber-900 text-lg">
                      {selectedVehicle.name}
                    </p>
                    <p className="text-yellow-600 font-semibold text-xl">
                      {formatCurrency(selectedVehicle.price)}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-amber-900 font-medium mb-2">
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
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-amber-600 mt-1">
                        <span>10%</span>
                        <span>50%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-amber-900 font-medium mb-2">
                        Loan Duration
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[12, 24, 36].map((months) => (
                          <button
                            key={months}
                            onClick={() => setLoanDuration(months)}
                            className={`p-3 rounded-lg font-medium transition-colors ${loanDuration === months ? "bg-yellow-500 text-amber-900" : "bg-amber-100 text-amber-700 hover:bg-yellow-300"}`}
                          >
                            {months} months
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {loanCalculation && (
                    <div className="mt-8 border-t border-amber-200 pt-6">
                      <h3 className="font-bold text-amber-900 mb-4">
                        Payment Breakdown
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-amber-100">
                          <span className="text-amber-700">Down Payment</span>
                          <span className="font-semibold text-amber-900">
                            {formatCurrency(loanCalculation.downPayment)}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-amber-100">
                          <span className="text-amber-700">
                            Financed Amount
                          </span>
                          <span className="font-semibold text-amber-900">
                            {formatCurrency(loanCalculation.financedAmount)}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-amber-100">
                          <span className="text-amber-700">Interest Rate</span>
                          <span className="font-semibold text-amber-900">
                            {loanCalculation.interestRate}% p.a.
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-amber-100">
                          <span className="text-amber-700">Total Interest</span>
                          <span className="font-semibold text-amber-900">
                            {formatCurrency(loanCalculation.totalInterest)}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-yellow-400">
                          <span className="text-amber-700">Total Payable</span>
                          <span className="font-bold text-amber-900">
                            {formatCurrency(loanCalculation.totalAmount)}
                          </span>
                        </div>
                        <div className="bg-yellow-500 rounded-lg p-4 mt-4">
                          <p className="text-amber-900 text-sm font-medium">
                            Monthly Payment
                          </p>
                          <p className="text-amber-900 text-3xl font-bold">
                            {formatCurrency(loanCalculation.monthlyPayment)}
                          </p>
                          <p className="text-amber-800 text-sm">
                            for {loanDuration} months
                          </p>
                        </div>
                      </div>
                      <Button className="w-full mt-6 bg-amber-900 text-white py-4 rounded-lg font-semibold hover:bg-amber-800">
                        Schedule a Visit
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Car className="h-16 w-16 text-amber-300 mx-auto mb-4" />
                  <p className="text-amber-600">
                    Select a vehicle brand to see financing options
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Cards */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-amber-900">
              Vehicle Categories
            </h2>
            <p className="mt-2 text-gray-600">
              Compare categories, key strengths, and available brands at a
              glance.
            </p>
          </div>

          {vehicleData.map((vehicle) => (
            <div
              key={vehicle.type}
              className="overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 shadow-sm md:flex"
            >
              <div className="flex items-center justify-center bg-amber-100 p-10 md:w-72">
                {vehicle.image ? (
                  <Image
                    src={vehicle.image}
                    alt={vehicle.type}
                    width={200}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <vehicle.icon className="h-24 w-24 text-amber-900" />
                )}
              </div>

              <div className="flex-1 p-8">
                <h3 className="text-2xl font-black text-amber-900">
                  {vehicle.type}
                </h3>

                <p className="mt-2 font-semibold text-yellow-700">
                  Starting from{" "}
                  {formatCurrency(
                    Math.min(...vehicle.brands.map((brand) => brand.price)),
                  )}
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Upfront: {vehicle.upfrontFrom} · Processing:{" "}
                  {vehicle.processing} · Monthly from: {vehicle.monthlyFrom}
                </p>

                <p className="mt-4 max-w-3xl text-gray-700">
                  {vehicle.description}
                </p>

                <div className="mt-5">
                  <h4 className="mb-2 text-sm font-bold text-amber-900">
                    Available Brands
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.brands.map((brand) => (
                      <span
                        key={brand.name}
                        className="rounded-full border border-amber-200 bg-white px-3 py-1 text-sm text-amber-900"
                      >
                        {brand.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <h4 className="mb-2 text-sm font-bold text-amber-900">
                    Key Features
                  </h4>
                  <div className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                    {vehicle.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/schedule">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
