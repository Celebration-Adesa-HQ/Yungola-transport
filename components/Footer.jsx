"use client";

import { Car, Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-amber-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/logo.png" // change to your path
              alt="Yungola Transport"
              width={36}
              height={36}
              className="rounded-md object-contain"
              priority
            />
            <span className="ml-2 text-xl font-bold text-yellow-500">
              Yungola
            </span>
            <span className="ml-1 text-lg font-semibold">Transport</span>
          </div>
          <p className="text-amber-200 text-sm">
            Empowering Nigerians with affordable vehicle financing solutions.
          </p>
        </div>

        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-amber-200">
            <li>
              <Link href="/vehicles" className="hover:text-yellow-500">
                Vehicles
              </Link>
            </li>
            <li>
              <Link href="/schedule" className="hover:text-yellow-500">
                Schedule
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-yellow-500">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/investors" className="hover:text-yellow-500">
                Investors
              </Link>
            </li>
          </ul>
        </div>

        {/* <div>
          <h4 className="text-yellow-500 font-semibold mb-4">Locations</h4>
          <ul className="space-y-2 text-amber-200">
            <li className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" /> Ibadan, Oyo State
            </li>
            <li className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" /> Lagos, Lagos State
            </li>
          </ul>
        </div> */}

        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-amber-200">
            <li className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 mt-1 shrink-0" />
              <span>
                Plot 75, Block 3B, Ogunnusi Road, Grammar School Bus Stop, Ojodu, Lagos State
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2" /> +234 907 1518 988 YUNGOLA
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2" /> contact@yungolatransport.com
            </li>
            <li className="flex items-center">
              <Clock className="h-4 w-4 mr-2" /> Mon – Fri: 9:00 AM – 5:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-300 text-sm">
        <p>&copy; 2026 Yungola Transport. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
