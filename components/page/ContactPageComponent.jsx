"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  CheckCircle,
  ArrowRight,
  Loader2,
  Sparkles,
} from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(100, "Full name is too long"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sectionCard = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactPageComponent() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const isFormValid = useMemo(() => {
    return contactSchema.safeParse(form).success;
  }, [form]);

  const handleChange = (field, value) => {
    const nextForm = { ...form, [field]: value };
    setForm(nextForm);

    const result = contactSchema.safeParse(nextForm);
    if (result.success) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
      return;
    }

    const fieldErrors = result.error.flatten().fieldErrors;
    setErrors((prev) => ({
      ...prev,
      [field]: fieldErrors[field]?.[0] || "",
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitError("");

  const result = contactSchema.safeParse(form);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    setErrors({
      name: fieldErrors.name?.[0] || "",
      email: fieldErrors.email?.[0] || "",
      phone: fieldErrors.phone?.[0] || "",
      message: fieldErrors.message?.[0] || "",
    });
    return;
  }

  try {
    setIsSubmitting(true);
    setErrors({});

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    const data = await response.json();

    if (!response.ok) {
      if (data?.errors) {
        setErrors(data.errors);
      }

      throw new Error(data?.message || "Unable to submit your message right now.");
    }

    setFormSubmitted(true);
    setForm(initialForm);
    setErrors({});
  } catch (error) {
    setSubmitError(
      error instanceof Error ? error.message : "Something went wrong."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-yellow-50">
      {/* Hero */}
      <section className="relative ">
        <Image
          src="/Yungola mockup.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/90 via-amber-800/80 to-yellow-600/70" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.p
              variants={item}
              className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-yellow-100 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4" />
              Contact Us
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl font-black tracking-tight text-white sm:text-5xl"
            >
              Contact Yungola Transport
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg"
            >
              Reach out to ask questions, make enquiries, or submit your hire
              purchase application. Our team is ready to guide you through the
              next steps.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Main */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            {/* Form column */}
            <motion.div
              variants={sectionCard}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="rounded-[28px] border border-amber-100 bg-white p-6 shadow-[0_18px_50px_rgba(120,53,15,0.08)] sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-yellow-100 p-3">
                    <MessageSquare className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-amber-900">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-amber-700/80">
                      Fill in your details and we’ll get back to you.
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      className="py-10 text-center"
                    >
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                      </div>

                      <h3 className="mb-2 text-2xl font-bold text-amber-900">
                        Message Submitted
                      </h3>

                      <p className="mx-auto max-w-md text-amber-700">
                        Thank you for reaching out. Our team will review your
                        message and contact you as soon as possible.
                      </p>

                      <Button
                        type="button"
                        className="mt-6"
                        onClick={() => {
                          setFormSubmitted(false);
                          setForm(initialForm);
                          setErrors({});
                          setSubmitError("");
                        }}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      <div>
                        <label className="mb-2 block text-sm font-medium text-amber-900">
                          Full Name *
                        </label>
                        <Input
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          className={`text-black focus-visible:ring-yellow-500 ${
                            errors.name
                              ? "border-red-400 ring-1 ring-red-200"
                              : "border-amber-200"
                          }`}
                        />
                        {errors.name ? (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.name}
                          </p>
                        ) : null}
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-amber-900">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                            placeholder="your@email.com"
                            className={`text-black focus-visible:ring-yellow-500 ${
                              errors.email
                                ? "border-red-400 ring-1 ring-red-200"
                                : "border-amber-200"
                            }`}
                          />
                          {errors.email ? (
                            <p className="mt-2 text-sm text-red-600">
                              {errors.email}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-amber-900">
                            Phone Number *
                          </label>
                          <Input
                            value={form.phone}
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                            placeholder="0907 151 8988"
                            className={`text-black focus-visible:ring-yellow-500 ${
                              errors.phone
                                ? "border-red-400 ring-1 ring-red-200"
                                : "border-amber-200"
                            }`}
                          />
                          {errors.phone ? (
                            <p className="mt-2 text-sm text-red-600">
                              {errors.phone}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-amber-900">
                          Description *
                        </label>
                        <Textarea
                          rows={6}
                          value={form.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          placeholder="Tell us about the vehicle you're interested in, your preferred payment plan, or any questions you have..."
                          className={`text-black focus-visible:ring-yellow-500 ${
                            errors.message
                              ? "border-red-400 ring-1 ring-red-200"
                              : "border-amber-200"
                          }`}
                        />
                        {errors.message ? (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.message}
                          </p>
                        ) : null}
                      </div>

                      {submitError ? (
                        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          {submitError}
                        </div>
                      ) : null}

                      <motion.div
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.995 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting || !isFormValid}
                          className="w-full bg-yellow-500 font-bold text-amber-900 hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <span className="inline-flex items-center gap-2">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Submitting...
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-2">
                              Submit Application
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Info column */}
            <motion.div
              variants={sectionCard}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-[28px] border border-amber-100 bg-white p-6 shadow-[0_18px_50px_rgba(120,53,15,0.08)]">
                <h2 className="mb-5 text-xl font-bold text-amber-900">
                  Get in Touch
                </h2>

                <div className="space-y-4">
                  {contactDetails.map((itemData, index) => {
                    const Icon = itemData.icon;

                    return (
                      <motion.div
                        key={itemData.title}
                        initial={{ opacity: 0, x: 18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.45 }}
                        whileHover={{ y: -2 }}
                        className="rounded-2xl border border-amber-100 bg-amber-50 p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100">
                            <Icon className="h-5 w-5 text-amber-800" />
                          </div>

                          <div>
                            <p className="font-semibold text-amber-900">
                              {itemData.title}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              {itemData.content}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[28px] bg-amber-900 p-6 text-white shadow-[0_18px_50px_rgba(120,53,15,0.14)]"
              >
                <h3 className="text-xl font-bold text-yellow-400">
                  We’re Here to Help
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Whether you want to apply for hire purchase, ask about vehicle
                  availability, or understand our process better, our team is
                  ready to assist you.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
