"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
  Clock3,
} from "lucide-react";
import Image from "next/image";

// ─── Zod Schema ──────────────────────────────────────────────────────────────

const repairFinanceSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .regex(/^[+\d\s\-()]+$/, "Phone number contains invalid characters"),
  vehicleType: z.enum(["motorcycle", "tricycle", "car"], {
    required_error: "Please select a vehicle type",
  }),
  repairCost: z
    .string()
    .min(1, "Repair cost is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Repair cost must be a positive number",
    }),
  description: z
    .string()
    .min(20, "Please provide at least 20 characters describing the repair"),
});


// ─── Constants ────────────────────────────────────────────────────────────────

const requirements = ["Valid ID", "2 Passport Photos", "2 Guarantors"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

// ─── Email Sender Integration ─────────────────────────────────────────────────
// Replace this function body with your preferred email sender (Resend, EmailJS,
// Nodemailer via API route, etc.). The `data` object is fully typed.

async function sendRepairFinanceEmail(data) {
  // TODO: plug in your email sender here
  // Example using a Next.js API route:
  //
  // const res = await fetch("/api/repair-finance", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) throw new Error("Failed to send email");

  // Simulated delay for now
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FinancePageComponent() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(repairFinanceSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      vehicleType: undefined,
      repairCost: "",
      description: "",
    },
  });

  // useController gives Radix Select a stable controlled interface — avoids
  // the infinite re-render loop that occurs when using watch() + setValue()
  // with a custom SelectTrigger that spreads props onto Radix primitives.
  const {
    field: vehicleTypeField,
  } = useController({ name: "vehicleType", control });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await sendRepairFinanceEmail(data);
      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(
        "Something went wrong while submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setSubmitError(null);
    reset();
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
                  Enter your vehicle details, repair cost, and financing request.
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
                  Our team reviews your application and confirms repayment terms.
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

      {/* Request Form */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
                  Our team will review your repair financing request and contact
                  you shortly with the next steps.
                </p>
                <Button type="button" className="mt-6" onClick={handleReset}>
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="mb-2 block font-medium text-amber-900">
                    Full Name *
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="Enter your full name"
                    className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email + Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-medium text-amber-900">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      {...register("email")}
                      placeholder="your@email.com"
                      className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-amber-900">
                      Phone Number *
                    </label>
                    <Input
                      {...register("phone")}
                      placeholder="+234 XXX XXX XXXX"
                      className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Vehicle Type + Repair Cost */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-medium text-amber-900">
                      Vehicle Type *
                    </label>
                    <Select
                      value={vehicleTypeField.value ?? ""}
                      onValueChange={vehicleTypeField.onChange}
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
                    {errors.vehicleType && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.vehicleType.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-amber-900">
                      Repair Cost (₦) *
                    </label>
                    <Input
                      type="number"
                      {...register("repairCost")}
                      placeholder="e.g. 50000"
                      className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                    />
                    {errors.repairCost && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.repairCost.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Repair Description */}
                <div>
                  <label className="mb-2 block font-medium text-amber-900">
                    Repair Details *
                  </label>
                  <Textarea
                    rows={5}
                    {...register("description")}
                    placeholder="Describe the repair issue, affected parts, and any useful details about the vehicle condition..."
                    className="border-amber-200 text-black placeholder:text-black focus-visible:ring-yellow-500"
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Disclaimer */}
                <div className="rounded-xl bg-amber-100 p-4">
                  <div className="flex items-start gap-2 text-sm text-amber-800">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <p>
                      Requests are reviewed as quickly as possible. Final
                      approval, repayment terms, and disbursement are subject to
                      document verification and internal review.
                    </p>
                  </div>
                </div>

                {/* Server-side error */}
                {submitError && (
                  <p className="text-sm text-red-600">{submitError}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 font-bold text-amber-900 hover:bg-yellow-400 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting…" : "Submit Request"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}