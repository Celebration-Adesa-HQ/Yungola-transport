"use client";

import Link from "next/link";
import { Car, Bike, Truck, ChevronRight } from "lucide-react";
import Image from "next/image";

const vehicles = [
  {
    icon: Truck,
    name: "Keke (Tricycle)",
    desc: "Perfect for commercial transport in busy cities",
    price: "₦850,000",
    image: "/vehicles/keke-yungola.png",
  },
  {
    icon: Bike,
    name: "Motorcycle",
    desc: "Fast, affordable and easy to maintain",
    price: "₦350,000",
    image: "/vehicles/motocycle-yungola.png",
  },
  {
    icon: Car,
    name: "Toyota Corolla",
    desc: "Reliable sedan for ride-hailing and personal use",
    price: "₦4,500,000",
    image: "/vehicles/corolla-yungola.png",
  },
];

export default function VehiclesSection() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">
          Our Vehicles
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">
          Select the vehicle that fits your business or personal needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
                 <Link key={v.name} href="/vehicles" className="block">
              <div className="relative h-48 bg-amber-100 ">
                <Image
                  src={v.image}
                  alt={v.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={800}
                  height={400}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <v.icon className="h-6 w-6 text-yellow-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">{v.name}</h3>
                </div>

                <p className="text-gray-600 text-sm mb-4">{v.desc}</p>

                <p className="text-yellow-700 font-bold text-lg mb-4">
                  {v.price}
                </p>

                <div className="flex items-center text-yellow-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Explore <ChevronRight className="h-5 w-5 ml-1" />
                </div>
              </div>
          </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/vehicles"
            className="inline-block bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 rounded-lg font-bold"
          >
            View All Vehicles
          </Link>
        </div>
      </div>
    </section>
  );
}
