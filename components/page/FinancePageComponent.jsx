"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  CreditCard,
  ShieldCheck,
  Wrench,
  Calculator,
  Clock3,
} from "lucide-react";
import Image from "next/image";

// Weekly durations: key = number of weeks, value = interest rate (%)
const repairRates = {
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  6: 12,
  8: 15,
  12: 20,
};

const weekOptions = [1, 2, 3, 4, 6, 8, 12];

const requirements = ["Valid ID", "2 Passport Photos", "2 Guarantors"];

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

function weekLabel(weeks) {
  return weeks === 1 ? "1 week" : `${weeks} weeks`;
}

export default function FinancePageComponent() {
  const [repairFinanceCalculated, setRepairFinanceCalculated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [repairForm, setRepairForm] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    repairCost: "",
    duration: "4", // weeks
    description: "",
  });

  const repairCost = Number(repairForm.repairCost || 0);
  const duration = Number(repairForm.duration || 4); // in weeks

  const repairLoan = useMemo(() => {
    if (!repairCost || repairCost <= 0) return null;

    const interestRate = repairRates[duration] ?? 9;
    const totalInterest = (repairCost * interestRate) / 100;
    const totalAmount = repairCost + totalInterest;
    const weeklyPayment = totalAmount / duration;

    return {
      interestRate,
      totalInterest,
      totalAmount,
      weeklyPayment,
    };
  }, [repairCost, duration]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !repairForm.name ||
      !repairForm.email ||
      !repairForm.phone ||
      !repairForm.vehicleType ||
      !repairForm.repairCost ||
      !repairForm.duration ||
      !repairForm.description
    ) {
      return;
    }

    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <Image
          src="/Yungola mockup.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/80 to-yellow-600/70 z-10" />
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-yellow-100">
              Repair Financing
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Repair Financing
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Get your vehicle repaired now and repay in convenient weekly
              instalments with a simple approval process and competitive rates.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Wrench className="h-8 w-8 text-yellow-600" />
                <h2 className="text-lg font-bold text-amber-900">
                  Repair on Credit
                </h2>
              </div>
              <p className="text-sm leading-6 text-amber-700">
                Access funding for urgent repairs on motorcycles, tricycles, and
                cars without paying the full cost upfront.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <CreditCard className="h-8 w-8 text-yellow-600" />
                <h2 className="text-lg font-bold text-amber-900">
                  Flexible Repayment
                </h2>
              </div>
              <p className="text-sm leading-6 text-amber-700">
                Choose a repayment duration from 1 to 12 weeks and spread your
                repair cost over manageable weekly payments.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-yellow-600" />
                <h2 className="text-lg font-bold text-amber-900">
                  Basic Requirements
                </h2>
              </div>
              <div className="space-y-2 text-sm text-amber-700">
                {requirements.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-amber-100">
            <div className="mb-6 flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-yellow-500" />
              <h2 className="text-xl font-bold text-amber-900">How It Works</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                  <span className="text-lg font-bold text-amber-900">1</span>
                </div>
                <h3 className="mb-1 font-semibold text-amber-900">
                  Submit Request
                </h3>
                <p className="text-sm text-amber-600">
                  Enter your vehicle details, repair cost, and financing
                  request.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                  <span className="text-lg font-bold text-amber-900">2</span>
                </div>
                <h3 className="mb-1 font-semibold text-amber-900">
                  Get Reviewed
                </h3>
                <p className="text-sm text-amber-600">
                  Our team reviews your application and confirms repayment
                  terms.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                  <span className="text-lg font-bold text-amber-900">3</span>
                </div>
                <h3 className="mb-1 font-semibold text-amber-900">
                  Repair and Repay
                </h3>
                <p className="text-sm text-amber-600">
                  Fix your vehicle and repay in weekly instalments over your
                  selected duration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator + Form */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Calculator */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <Calculator className="h-6 w-6 text-yellow-500" />
                <h2 className="text-xl font-bold text-amber-900">
                  Calculate Repair Finance
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block font-medium text-amber-900">
                    Vehicle Type
                  </label>
                  <Select
                    value={repairForm.vehicleType}
                    onValueChange={(value) =>
                      setRepairForm({ ...repairForm, vehicleType: value })
                    }
                  >
                    <SelectTrigger className="border-amber-200 text-black focus:ring-yellow-500">
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black">
                      <SelectItem
                        value="tricycle"
                        className="text-black hover:bg-yellow-300"
                      >
                        Tricycle (Keke)
                      </SelectItem>
                      <SelectItem
                        value="motorcycle"
                        className="text-black hover:bg-yellow-300"
                      >
                        Motorcycle
                      </SelectItem>
                      <SelectItem
                        value="car"
                        className="text-black hover:bg-yellow-300"
                      >
                        Car
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block font-medium text-amber-900">
                    Estimated Repair Cost (₦)
                  </label>
                  <Input
                    type="number"
                    value={repairForm.repairCost}
                    onChange={(e) =>
                      setRepairForm({
                        ...repairForm,
                        repairCost: e.target.value,
                      })
                    }
                    placeholder="e.g. 50000"
                    className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-amber-900">
                    Repayment Duration
                  </label>
                  {/* Interest rate hint */}
                  <p className="mb-3 text-xs text-amber-600">
                    Interest rate varies by duration — shorter durations attract
                    lower rates.
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {weekOptions.map((weeks) => {
                      const active = Number(repairForm.duration) === weeks;
                      const rate = repairRates[weeks];
                      return (
                        <button
                          key={weeks}
                          type="button"
                          onClick={() => {
                            setRepairForm({
                              ...repairForm,
                              duration: String(weeks),
                            });
                            setRepairFinanceCalculated(true);
                          }}
                          className={`rounded-lg p-2 text-center transition-colors ${
                            active
                              ? "bg-yellow-500 text-amber-900"
                              : "bg-amber-100 text-amber-700 hover:bg-yellow-300"
                          }`}
                        >
                          <span className="block text-sm font-semibold">
                            {weekLabel(weeks)}
                          </span>
                          <span
                            className={`block text-xs mt-0.5 ${active ? "text-amber-800" : "text-amber-500"}`}
                          >
                            {rate}% interest
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => setRepairFinanceCalculated(true)}
                  className="w-full bg-yellow-500 text-amber-900 hover:bg-yellow-400"
                >
                  Calculate
                </Button>
              </div>

              {repairFinanceCalculated && repairLoan && repairCost > 0 && (
                <div className="mt-8 border-t border-amber-200 pt-6">
                  <h3 className="mb-4 font-bold text-amber-900">
                    Payment Schedule
                  </h3>
                  <div className="rounded-2xl bg-yellow-50 p-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="rounded-lg bg-white p-4">
                        <p className="text-sm text-amber-600">Repair Cost</p>
                        <p className="text-xl font-bold text-amber-900">
                          {formatCurrency(repairCost)}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-4">
                        <p className="text-sm text-amber-600">Duration</p>
                        <p className="text-xl font-bold text-amber-900">
                          {weekLabel(duration)}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-4">
                        <p className="text-sm text-amber-600">Interest Rate</p>
                        <p className="text-xl font-bold text-amber-900">
                          {repairLoan.interestRate}%
                        </p>
                        <p className="text-xs text-amber-500 mt-0.5">
                          = {formatCurrency(repairLoan.totalInterest)} total
                          interest
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-4">
                        <p className="text-sm text-amber-600">Weekly Payment</p>
                        <p className="text-xl font-bold text-yellow-700">
                          {formatCurrency(repairLoan.weeklyPayment)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl bg-amber-900 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-yellow-300">
                          Total Amount to Repay
                        </span>
                        <span className="text-2xl font-bold text-yellow-500">
                          {formatCurrency(repairLoan.totalAmount)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Button asChild className="flex-1">
                        <Link href="/schedule">Apply for Repair Financing</Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Request Form */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <Wrench className="h-6 w-6 text-yellow-500" />
                <h2 className="text-xl font-bold text-amber-900">
                  Submit a Repair Finance Request
                </h2>
              </div>

              {formSubmitted ? (
                <div className="py-14 text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-amber-900">
                    Request Submitted!
                  </h3>
                  <p className="mx-auto max-w-md text-amber-700">
                    Our team will review your repair financing request and
                    contact you shortly with the next steps.
                  </p>
                  <Button
                    type="button"
                    className="mt-6"
                    onClick={() => {
                      setFormSubmitted(false);
                      setRepairForm({
                        name: "",
                        email: "",
                        phone: "",
                        vehicleType: "",
                        repairCost: "",
                        duration: "4",
                        description: "",
                      });
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block font-medium text-amber-900">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={repairForm.name}
                      onChange={(e) =>
                        setRepairForm({ ...repairForm, name: e.target.value })
                      }
                      placeholder="Enter your full name"
                      className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-medium text-amber-900">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={repairForm.email}
                        onChange={(e) =>
                          setRepairForm({
                            ...repairForm,
                            email: e.target.value,
                          })
                        }
                        placeholder="your@email.com"
                        className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-medium text-amber-900">
                        Phone Number *
                      </label>
                      <Input
                        required
                        value={repairForm.phone}
                        onChange={(e) =>
                          setRepairForm({
                            ...repairForm,
                            phone: e.target.value,
                          })
                        }
                        placeholder="+234 XXX XXX XXXX"
                        className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-medium text-amber-900">
                        Vehicle Type *
                      </label>
                      <Select
                        value={repairForm.vehicleType}
                        onValueChange={(value) =>
                          setRepairForm({ ...repairForm, vehicleType: value })
                        }
                      >
                        <SelectTrigger className="border-amber-200 focus:ring-yellow-500 text-black">
                          <SelectValue placeholder="Select vehicle" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black">
                          <SelectItem
                            value="motorcycle"
                            className="text-black hover:bg-yellow-300"
                          >
                            Motorcycle
                          </SelectItem>
                          <SelectItem
                            value="tricycle"
                            className="text-black hover:bg-yellow-300"
                          >
                            Tricycle (Keke)
                          </SelectItem>
                          <SelectItem
                            value="car"
                            className="text-black hover:bg-yellow-300"
                          >
                            Car
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="mb-2 block font-medium text-amber-900">
                        Repair Cost (₦) *
                      </label>
                      <Input
                        type="number"
                        required
                        value={repairForm.repairCost}
                        onChange={(e) =>
                          setRepairForm({
                            ...repairForm,
                            repairCost: e.target.value,
                          })
                        }
                        placeholder="e.g. 50000"
                        className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-amber-900">
                      Repayment Duration *
                    </label>
                    <Select
                      value={repairForm.duration}
                      onValueChange={(value) =>
                        setRepairForm({ ...repairForm, duration: value })
                      }
                    >
                      <SelectTrigger className="border-amber-200 text-black focus:ring-yellow-500">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-black">
                        {weekOptions.map((weeks) => (
                          <SelectItem
                            key={weeks}
                            value={String(weeks)}
                            className="text-black hover:bg-yellow-300"
                          >
                            {weekLabel(weeks)} — {repairRates[weeks]}% interest
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {/* Live interest rate display */}
                    {repairForm.duration && (
                      <p className="mt-1.5 text-xs text-amber-600">
                        Interest rate for{" "}
                        {weekLabel(Number(repairForm.duration))}:{" "}
                        <span className="font-semibold text-amber-800">
                          {repairRates[Number(repairForm.duration)]}%
                        </span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-amber-900">
                      Repair Details *
                    </label>
                    <Textarea
                      rows={5}
                      required
                      placeholder="Describe the repair issue, affected parts, and any useful details about the vehicle condition..."
                      value={repairForm.description}
                      onChange={(e) =>
                        setRepairForm({
                          ...repairForm,
                          description: e.target.value,
                        })
                      }
                      className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                    />
                  </div>

                  <div className="rounded-xl bg-amber-100 p-4">
                    <div className="flex items-start gap-2 text-sm text-amber-800">
                      <Clock3 className="mt-0.5 h-4 w-4 text-amber-700" />
                      <p>
                        Requests are reviewed as quickly as possible. Final
                        approval, repayment terms, and disbursement are subject
                        to document verification and internal review.
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-yellow-500 font-bold text-amber-900 hover:bg-yellow-400"
                  >
                    Submit Request
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
