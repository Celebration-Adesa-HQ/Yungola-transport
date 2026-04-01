'use client';

import { MapPin } from "lucide-react";

export default function OperatingCities() {
    return (
      <section className="py-8 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center text-yellow-400">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold">Ibadan</span>
            </div>
            <div className="text-yellow-400 text-2xl">⚬</div>
            <div className="flex items-center text-yellow-400">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold">Lagos</span>
            </div>
          </div>
        </div>
      </section>
    );
}