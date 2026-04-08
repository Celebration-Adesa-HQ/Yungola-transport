"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  BarChart3,
  CheckCircle,
  DollarSign,
  Handshake,
  Heart,
  Mail,
  Phone,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Vehicles Financed", icon: Award },
  { value: "98%", label: "Repayment Rate", icon: Shield },
  { value: "2", label: "Cities", icon: Users },
  { value: "₦200M+", label: "Assets Managed", icon: DollarSign },
];

const highlights = [
  {
    icon: TrendingUp,
    title: "High Return Potential",
    description:
      "Earn competitive returns from structured hire purchase and transport-linked financing operations.",
  },
  {
    icon: Shield,
    title: "Asset-Backed Structure",
    description:
      "Investments are tied to real vehicles and operating assets that support recovery and value retention.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Receive periodic performance updates and financial reporting for better visibility into operations.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We work with investors through flexible partnership models aligned with growth and sustainability.",
  },
];

const reasons = [
  {
    title: "Asset-Backed Investments",
    description:
      "Every investment is connected to tangible transport assets, helping reduce exposure and improve confidence.",
  },
  {
    title: "Growing Market Demand",
    description:
      "Transportation remains a daily necessity in Nigeria, creating ongoing demand for vehicle financing and mobility support.",
  },
  {
    title: "Proven Operating Model",
    description:
      "Our business is built around practical financing, repayment discipline, and service delivery in real market conditions.",
  },
  {
    title: "Social and Economic Impact",
    description:
      "Investors support mobility, entrepreneurship, and income generation while participating in a scalable business model.",
  },
];

const financialSnapshot = [
  {
    icon: DollarSign,
    label: "Revenue",
    value: "₦250M",
    growth: "↑ 35% YoY",
  },
  {
    icon: TrendingUp,
    label: "Net Profit",
    value: "₦45M",
    growth: "↑ 28% YoY",
  },
  {
    icon: Users,
    label: "New Clients",
    value: "350",
    growth: "↑ 42% YoY",
  },
];

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-yellow-100">
              Investor Relations
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Invest With Yungola
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Partner with us to support vehicle financing, expand access to
              transportation, and participate in a business built on real assets
              and real market demand.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-white text-amber-900 px-5 py-7 hover:bg-white/90"
              >
                <Link href="/contact">Contact Our Team</Link>
              </Button>

              <a
                href="mailto:contact@yungolatransport.com"
                className="inline-flex items-center rounded-lg border border-white px-5 py-3 font-medium text-white transition-colors hover:bg-white hover:text-amber-900"
              >
                <Mail className="mr-2 h-5 w-5" />
                contact@yungolatransport.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center shadow-sm"
                >
                  <Icon className="mx-auto mb-3 h-10 w-10 text-yellow-600" />
                  <p className="text-3xl font-black text-amber-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-amber-700">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-amber-900">
              Investment Highlights
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Our investor model is built around asset-backed financing,
              disciplined operations, and a clear opportunity within Nigeria’s
              transport economy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                    <Icon className="h-6 w-6 text-yellow-700" />
                  </div>

                  <h3 className="text-lg font-bold text-amber-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-amber-50 p-8 shadow-sm ring-1 ring-amber-100">
              <div className="mb-5 flex items-center gap-2">
                <Target className="h-6 w-6 text-yellow-500" />
                <h2 className="text-xl font-bold text-amber-900">
                  Why Invest With Us?
                </h2>
              </div>

              <div className="space-y-5">
                {reasons.map((reason) => (
                  <div key={reason.title} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                    <div>
                      <h3 className="font-semibold text-amber-900">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-amber-700">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-amber-900 p-8 text-white shadow-sm">
              <h2 className="text-2xl font-black text-yellow-500">
                Built for Long-Term Growth
              </h2>
              <p className="mt-4 leading-7 text-white/80">
                We are building a transport-focused financing business designed
                around practical demand, asset visibility, and structured
                repayment systems. Our model is intended to serve both customers
                and investors through sustainable expansion.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm text-yellow-200">Market Focus</p>
                  <p className="mt-1 font-semibold text-white">
                    Vehicle access and mobility financing
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm text-yellow-200">Structure</p>
                  <p className="mt-1 font-semibold text-white">
                    Real asset-backed business model
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm text-yellow-200">Operations</p>
                  <p className="mt-1 font-semibold text-white">
                    Structured repayment and reporting approach
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm text-yellow-200">Opportunity</p>
                  <p className="mt-1 font-semibold text-white">
                    Scalable transport demand in key cities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Snapshot */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-amber-100">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-black text-amber-900">
                Financial Snapshot (2023)
              </h2>
              <p className="mt-2 text-gray-600">
                A quick overview of key performance indicators.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {financialSnapshot.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-yellow-50 p-6 text-center"
                  >
                    <Icon className="mx-auto mb-3 h-10 w-10 text-yellow-500" />
                    <p className="text-sm text-amber-600">{item.label}</p>
                    <p className="mt-1 text-2xl font-bold text-amber-900">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-green-600">
                      {item.growth}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-amber-900 px-6 py-10 text-center text-white shadow-sm sm:px-10">
            <Heart className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
            <h2 className="text-2xl font-black text-yellow-500 sm:text-3xl">
              Ready to Partner With Us?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Our investor relations team can provide more information about our
              business model, reporting structure, and partnership
              opportunities.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@yungolatransport.com"
                className="inline-flex items-center rounded-lg bg-yellow-500 px-6 py-4 font-semibold text-amber-900 transition-colors hover:bg-yellow-400"
              >
                <Mail className="mr-2 h-5 w-5" />
                contact@yungolatransport.com
              </a>

              <a
                href="tel:+2349071518988 "
                className="inline-flex items-center rounded-lg bg-white px-6 py-4 font-semibold text-amber-900 transition-colors hover:bg-amber-50"
              >
                <Phone className="mr-2 h-5 w-5" />
                +234 907 1518 988 YUNGOLA
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
