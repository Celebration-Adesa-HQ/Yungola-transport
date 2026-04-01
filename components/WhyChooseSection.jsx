"use client";

import { Car, Bike, TrendingUp, MapPin, Calculator, Users } from "lucide-react";
import Layout from "./Layout";

const features = [
  {
    icon: Calculator,
    title: "Flexible Finance",
    desc: "Pay on credit with competitive interest rates",
  },
  {
    icon: TrendingUp,
    title: "Affordable Rates",
    desc: "Hire purchase plans from 6 months to 3 years",
  },
  {
    icon: MapPin,
    title: "Ibadan & Lagos",
    desc: "Operating in Nigeria's two largest cities",
  },
  {
    icon: Users,
    title: "Trusted Team",
    desc: "Experienced professionals to guide your purchase",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12">
          Why Choose Youngola Transport?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <f.icon className="h-7 w-7 text-yellow-600" />
              </div>

              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>

              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
