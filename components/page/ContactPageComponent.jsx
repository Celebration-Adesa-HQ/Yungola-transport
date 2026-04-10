"use client";

import { useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    content: "5, Ayanleye Street, Ogba, Lagos State",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "09071518988",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "contact@yungolatransport.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon – Fri: 9:00 AM – 5:00 PM",
  },
];

export default function ContactPageComponent() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      return;
    }

    setFormSubmitted(true);
  };

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
        <div className="absolute inset-0 bg-linear-to-br from-amber-900/90 via-amber-800/80 to-yellow-600/70 z-10" />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-yellow-100">
              Contact Us
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Contact Yungola Transport
            </h1>

            <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Reach out to ask questions, make enquiries, or submit your hire
              purchase application. Our team is ready to guide you through the
              next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100 sm:p-8">
                <div className="mb-6 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-xl font-bold text-amber-900">
                    Send Us a Message
                  </h2>
                </div>

                {formSubmitted ? (
                  <div className="py-14 text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>

                    <h3 className="mb-2 text-2xl font-bold text-amber-900">
                      Application Submitted!
                    </h3>

                    <p className="mx-auto max-w-md text-amber-700">
                      Thank you for reaching out. Our team will review your
                      message and get back to you as soon as possible.
                    </p>

                    <Button
                      type="button"
                      className="mt-6"
                      onClick={() => {
                        setFormSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
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
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Enter your full name"
                        className="border-amber-200 text-black focus-visible:ring-yellow-500"
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
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="your@email.com"
                          className="border-amber-200 text-black focus-visible:ring-yellow-500"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block font-medium text-amber-900">
                          Phone Number *
                        </label>
                        <Input
                          required
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          placeholder="0907 151 8988"
                          className="border-amber-200 text-black focus-visible:ring-yellow-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block font-medium text-amber-900">
                        Description *
                      </label>
                      <Textarea
                        rows={5}
                        required
                        placeholder="Tell us about the vehicle you're interested in, your preferred payment plan, or any questions you have..."
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="border-amber-200 text-black focus-visible:ring-yellow-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-yellow-500 font-bold text-amber-900 hover:bg-yellow-400"
                    >
                      Submit Application
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
                <h2 className="mb-5 text-xl font-bold text-amber-900">
                  Get in Touch
                </h2>

                <div className="space-y-4">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-xl bg-amber-50 p-4 ring-1 ring-amber-100"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                            <Icon className="h-5 w-5 text-amber-800" />
                          </div>

                          <div>
                            <p className="font-semibold text-amber-900">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl bg-amber-900 p-6 text-white shadow-sm">
                <h3 className="text-xl font-bold text-yellow-500">
                  We’re Here to Help
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Whether you want to apply for hire purchase, ask about vehicle
                  availability, or understand our process better, our team is
                  ready to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
