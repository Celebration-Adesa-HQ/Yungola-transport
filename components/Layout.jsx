"use client";
import Link from "next/link";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>

    <section className="bg-yellow-600 py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Ready to Get Started?
        </h2>

        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Apply now and get on the road in as little as 48 hours
        </p>

        <Link
          href="/contact"
          className="inline-block bg-white text-yellow-700 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg"
        >
          Apply Now
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Layout;
