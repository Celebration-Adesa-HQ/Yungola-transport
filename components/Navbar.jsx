"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Car, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [mobileMenuOpen]);

  const navItems = [
    { page: "/", label: "Home" },
    { page: "/about", label: "About" },
    { page: "/vehicles", label: "Vehicles" },
    { page: "/schedule", label: "Schedule" },
    { page: "/finance", label: "Repair Finance" },
    { page: "/team", label: "Team" },
    { page: "/investors", label: "Investors" },
    { page: "/contact", label: "Contact" },
  ];

  const navigateTo = (path) => {
    router.push(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 shadow-lg transition-colors ${
        isScrolled ? "bg-yellow-500" : "bg-yellow-500"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigateTo("/")}
          >
            <div className="w-8 h-8 rounded-md bg-amber-100 flex items-center justify-center">

            <Image
              src="/logo.png" // change to your path
              alt="Yungola Transport"
              width={36}
              height={36}
              className="rounded-md object-contain"
              priority
            />
            </div>
            <span className="ml-2 text-2xl font-bold text-amber-900">
              Yungola
            </span>
            <span className="ml-1 text-xl font-semibold text-white">
              Transport
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigateTo(item.page)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.page
                    ? "bg-amber-900 text-white"
                    : "text-amber-900 hover:bg-yellow-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-amber-900" />
            ) : (
              <Menu className="h-6 w-6 text-amber-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-yellow-400 pb-4">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigateTo(item.page)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium ${
                pathname === item.page
                  ? "bg-amber-900 text-white"
                  : "text-amber-900 hover:bg-yellow-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
