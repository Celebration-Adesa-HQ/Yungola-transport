"use client";

import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, isSunday, isBefore, startOfToday } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

// ─── ZOD SCHEMA ────────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+\d\s\-()]+$/, "Please enter a valid phone number"),
  location: z.string().min(1, "Please select a preferred location"),
  vehicleType: z.string().optional(),
  date: z
    .date({ required_error: "Please select a preferred date" })
    .refine((d) => !isSunday(d), "We are closed on Sundays")
    .refine((d) => !isBefore(d, startOfToday()), "Please select a future date"),
  time: z.string().min(1, "Please choose a preferred time"),
  message: z.string().optional(),
});

// ─── DATA ───────────────────────────────────────────────────────────────────────
const offices = [
  {
    id: "lagos",
    name: "Lagos Office",
    address: "5, Ayanleye Street, Ogba, Lagos State",
    phone: "+234 907 1518 988",
  },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];

const vehicleOptions = [
  { value: "tricycle", label: "Tricycle (Keke)" },
  { value: "motorcycle", label: "Motorcycle" },
  { value: "car", label: "Car (Corolla)" },
];

// ─── ANIMATION VARIANTS ─────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── REUSABLE COMPONENTS ────────────────────────────────────────────────────────
function FloatingLabel({ children, error, required }) {
  return (
    <label className="mb-1.5 block text-sm font-semibold tracking-wide text-amber-900/80 uppercase">
      {children}
      {required && <span className="ml-1 text-yellow-500">*</span>}
      {error && (
        <motion.span
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-2 text-xs font-medium normal-case text-red-500 tracking-normal"
        >
          — {error}
        </motion.span>
      )}
    </label>
  );
}

function StyledInput({ error, ...props }) {
  return (
    <motion.input
      whileFocus={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      {...props}
      className={`w-full rounded-xl border-2 bg-amber-50/60 px-4 py-3 text-sm text-amber-950 placeholder-amber-400 outline-none transition-all duration-200
        focus:bg-white focus:border-yellow-400 focus:shadow-[0_0_0_4px_rgba(234,179,8,0.12)]
        ${error ? "border-red-300 bg-red-50/50" : "border-amber-200 hover:border-amber-300"}`}
    />
  );
}

function SelectDropdown({ value, onChange, options, placeholder, error }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <motion.button
        type="button"
        whileFocus={{ scale: 1.01 }}
        onClick={() => setOpen((p) => !p)}
        className={`flex w-full items-center justify-between rounded-xl border-2 bg-amber-50/60 px-4 py-3 text-sm outline-none transition-all duration-200
          hover:border-amber-300 focus:bg-white focus:border-yellow-400 focus:shadow-[0_0_0_4px_rgba(234,179,8,0.12)]
          ${error ? "border-red-300 bg-red-50/50" : "border-amber-200"}
          ${value ? "text-amber-950" : "text-amber-400"}`}
      >
        <span>
          {value ? options.find((o) => o.value === value)?.label : placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="h-4 w-4 text-amber-500" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-amber-100 bg-white shadow-xl shadow-amber-100/50"
          >
            {options.map((opt, i) => (
              <motion.li
                key={opt.value}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => handleSelect(opt.value)}
                className={`cursor-pointer px-4 py-2.5 text-sm transition-colors hover:bg-yellow-50 hover:text-amber-900
                  ${value === opt.value ? "bg-yellow-50 font-semibold text-amber-900" : "text-amber-700"}`}
              >
                {opt.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────────
export default function SchedulePageComponent() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-60px" });
  const formInView = useInView(formRef, { once: true, margin: "-60px" });

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const watchedDate = watch("date");

  const onSubmit = async (data) => {
    // ── Standby integration point ──────────────────────────────────────────────
    // TODO: Replace the block below with your email sender integration.
    // `data` contains all validated fields: name, email, phone, location,
    // vehicleType, date, time, message.
    //
    // Example (EmailJS):
    //   await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    //     to_name: data.name,
    //     to_email: data.email,
    //     date: format(data.date, "PPP"),
    //     time: data.time,
    //     ...data,
    //   });
    //
    // Example (Resend / custom API route):
    //   await fetch("/api/send-appointment", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ ...data, date: format(data.date, "PPP") }),
    //   });
    // ──────────────────────────────────────────────────────────────────────────

    await new Promise((r) => setTimeout(r, 800)); // remove when wiring real sender
    setSubmittedData(data);
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setSubmittedData(null);
    reset();
  };

  return (
    <div className="min-h-screen bg-[#fdf8ef] font-sans">
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden text-white">
        {/* Background Image */}
        <Image
          src="/Yungola mockup.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Gradient overlay on top of image */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-amber-950/90 via-amber-800/80 to-yellow-600/70" />

        {/* Decorative animated rings */}
        {[160, 280, 420, 580].map((size, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.06 + i * 0.015, scale: 1 }}
            transition={{
              duration: 2 + i * 0.4,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            style={{ width: size, height: size }}
            className="absolute right-[-60px] top-[-60px] z-[2] rounded-full border border-white/40"
          />
        ))}

        {/* Floating sparkle dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -12, 0] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${10 + i * 11}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: 4 + (i % 3) * 2,
              height: 4 + (i % 3) * 2,
            }}
            className="absolute z-[2] rounded-full bg-yellow-300/60"
          />
        ))}

        <div className="relative z-[3] mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow-200"
          >
            <Sparkles className="h-3.5 w-3.5" /> Book Your Visit
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            Schedule a{" "}
            <span className="relative inline-block">
              Visit
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-1 left-0 h-1.5 w-full origin-left rounded-full bg-yellow-400"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 max-w-xl text-base text-white/75 sm:text-lg"
          >
            Book an appointment to inspect vehicles, explore payment plans, and
            speak directly with our team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-6"
          >
            {[
              "Mon–Fri: 9 AM – 5 PM",
              "Saturdays: Closed",
              "Sundays: Closed",
            ].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-sm text-white/60"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-green-400" : "bg-red-400"}`}
                />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN GRID ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            {/* ── LEFT INFO PANEL ───────────────────────────────────────── */}
            <motion.div
              ref={infoRef}
              variants={staggerContainer}
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              className="space-y-6 lg:col-span-2"
            >
              {/* Offices */}
              <motion.div
                variants={slideLeft}
                custom={0}
                className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-amber-100 ring-1 ring-amber-100"
              >
                <div className="border-b border-amber-100 bg-gradient-to-r from-amber-50 to-yellow-50 px-6 py-4">
                  <h2 className="text-base font-bold uppercase tracking-widest text-amber-900">
                    Our Offices
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  {offices.map((office) => (
                    <motion.div
                      key={office.id}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-4 rounded-xl bg-amber-50 p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20">
                        <MapPin className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-bold text-amber-900">
                          {office.name}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-amber-700">
                          {office.address}
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-amber-500">
                          <Phone className="h-3.5 w-3.5" />
                          {office.phone}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                variants={slideLeft}
                custom={1}
                className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-amber-100 ring-1 ring-amber-100"
              >
                <div className="border-b border-amber-100 bg-gradient-to-r from-amber-50 to-yellow-50 px-6 py-4">
                  <h2 className="text-base font-bold uppercase tracking-widest text-amber-900">
                    Office Hours
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 rounded-xl bg-amber-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20">
                      <Clock className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="text-sm text-amber-700 leading-relaxed">
                      <p className="font-semibold text-amber-900">
                        Monday – Friday
                      </p>
                      <p>9:00 AM – 5:00 PM</p>
                      <p className="mt-1 font-semibold text-amber-900">
                        Saturday – Sunday
                      </p>
                      <p>Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* What to Expect */}
              <motion.div
                variants={slideLeft}
                custom={2}
                className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-amber-100 ring-1 ring-amber-100"
              >
                <div className="border-b border-amber-100 bg-gradient-to-r from-amber-50 to-yellow-50 px-6 py-4">
                  <h2 className="text-base font-bold uppercase tracking-widest text-amber-900">
                    What to Expect
                  </h2>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    "Meet our team for guidance on available payment plans",
                    "Inspect vehicles that match your budget and needs",
                    "Get help with documentation and next steps",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={infoInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                        <CheckCircle className="h-3.5 w-3.5 text-yellow-600" />
                      </div>
                      <p className="text-sm text-amber-700">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── FORM PANEL ────────────────────────────────────────────── */}
            <motion.div
              ref={formRef}
              variants={fadeUp}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              className="lg:col-span-3"
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-amber-100 ring-1 ring-amber-100">
                {/* Form header */}
                <div className="border-b border-amber-100 bg-gradient-to-r from-amber-50 to-yellow-50 px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/20">
                      <CalendarDays className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-amber-900">
                        Book an Appointment
                      </h2>
                      <p className="text-xs text-amber-500">
                        Fields marked * are required
                      </p>
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    /* ── SUCCESS STATE ──────────────────────────────────── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col items-center py-20 px-8 text-center"
                    >
                      {/* Animated success ring */}
                      <div className="relative mb-6">
                        {[1, 2, 3].map((ring) => (
                          <motion.div
                            key={ring}
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1 + ring * 0.25, opacity: 0 }}
                            transition={{
                              duration: 1.2,
                              delay: ring * 0.2,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                            className="absolute inset-0 rounded-full border-2 border-green-400"
                          />
                        ))}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 14,
                            delay: 0.1,
                          }}
                          className="relative flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
                        >
                          <CheckCircle className="h-10 w-10 text-green-600" />
                        </motion.div>
                      </div>

                      <motion.h3
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-black text-amber-900"
                      >
                        Appointment Booked!
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mx-auto mt-3 max-w-md text-sm text-amber-700"
                      >
                        Your appointment is set for{" "}
                        <span className="font-bold text-amber-900">
                          {submittedData?.date
                            ? format(submittedData.date, "PPPP")
                            : ""}
                        </span>{" "}
                        at{" "}
                        <span className="font-bold text-amber-900">
                          {submittedData?.time}
                        </span>
                        . We&apos;ll reach out shortly to confirm.
                      </motion.p>

                      <motion.button
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        type="button"
                        onClick={handleReset}
                        className="mt-8 flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-amber-950 shadow-md shadow-yellow-200 hover:bg-yellow-300 transition-colors"
                      >
                        Book Another Appointment
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </motion.div>
                  ) : (
                    /* ── FORM STATE ──────────────────────────────────────── */
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="p-8 space-y-6"
                    >
                      {/* Row 1 — Name + Email */}
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid gap-5 md:grid-cols-2"
                      >
                        <motion.div variants={fadeUp} custom={0}>
                          <FloatingLabel error={errors.name?.message} required>
                            Full Name
                          </FloatingLabel>
                          <StyledInput
                            {...register("name")}
                            placeholder="Enter your full name"
                            error={errors.name}
                          />
                        </motion.div>

                        <motion.div variants={fadeUp} custom={1}>
                          <FloatingLabel error={errors.email?.message} required>
                            Email Address
                          </FloatingLabel>
                          <StyledInput
                            {...register("email")}
                            type="email"
                            placeholder="your@email.com"
                            error={errors.email}
                          />
                        </motion.div>
                      </motion.div>

                      {/* Row 2 — Phone + Location */}
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid gap-5 md:grid-cols-2"
                      >
                        <motion.div variants={fadeUp} custom={0}>
                          <FloatingLabel error={errors.phone?.message} required>
                            Phone Number
                          </FloatingLabel>
                          <StyledInput
                            {...register("phone")}
                            placeholder="+234 XXX XXX XXXX"
                            error={errors.phone}
                          />
                        </motion.div>

                        <motion.div variants={fadeUp} custom={1}>
                          <FloatingLabel
                            error={errors.location?.message}
                            required
                          >
                            Preferred Location
                          </FloatingLabel>
                          <Controller
                            name="location"
                            control={control}
                            render={({ field }) => (
                              <SelectDropdown
                                value={field.value}
                                onChange={field.onChange}
                                options={[
                                  { value: "ibadan", label: "Ibadan Office" },
                                  { value: "lagos", label: "Lagos Office" },
                                ]}
                                placeholder="Select location"
                                error={errors.location}
                              />
                            )}
                          />
                        </motion.div>
                      </motion.div>

                      {/* Row 3 — Vehicle + Date */}
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid gap-5 md:grid-cols-2"
                      >
                        <motion.div variants={fadeUp} custom={0}>
                          <FloatingLabel>Interested Vehicle</FloatingLabel>
                          <Controller
                            name="vehicleType"
                            control={control}
                            render={({ field }) => (
                              <SelectDropdown
                                value={field.value}
                                onChange={field.onChange}
                                options={vehicleOptions}
                                placeholder="Select vehicle type"
                              />
                            )}
                          />
                        </motion.div>

                        <motion.div variants={fadeUp} custom={1}>
                          <FloatingLabel error={errors.date?.message} required>
                            Preferred Date
                          </FloatingLabel>
                          <Controller
                            name="date"
                            control={control}
                            render={({ field }) => (
                              <div className="relative">
                                <motion.button
                                  type="button"
                                  whileFocus={{ scale: 1.01 }}
                                  onClick={() => setCalendarOpen((p) => !p)}
                                  className={`flex w-full items-center justify-between rounded-xl border-2 bg-amber-50/60 px-4 py-3 text-sm outline-none transition-all duration-200
                                    hover:border-amber-300 focus:bg-white focus:border-yellow-400 focus:shadow-[0_0_0_4px_rgba(234,179,8,0.12)]
                                    ${errors.date ? "border-red-300 bg-red-50/50" : "border-amber-200"}
                                    ${field.value ? "text-amber-950" : "text-amber-400"}`}
                                >
                                  <span>
                                    {field.value
                                      ? format(field.value, "PPP")
                                      : "Pick a date"}
                                  </span>
                                  <motion.span
                                    animate={{ rotate: calendarOpen ? 180 : 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    <ChevronDown className="h-4 w-4 text-amber-500" />
                                  </motion.span>
                                </motion.button>

                                <AnimatePresence>
                                  {calendarOpen && (
                                    <motion.div
                                      initial={{
                                        opacity: 0,
                                        y: -8,
                                        scale: 0.96,
                                      }}
                                      animate={{ opacity: 1, y: 0, scale: 1 }}
                                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                                      transition={{
                                        duration: 0.22,
                                        ease: [0.22, 1, 0.36, 1],
                                      }}
                                      className="absolute z-50 mt-2 overflow-hidden rounded-xl border border-amber-100 bg-white p-3 shadow-xl shadow-amber-100/60"
                                    >
                                      <DayPicker
                                        mode="single"
                                        selected={field.value}
                                        onSelect={(d) => {
                                          field.onChange(d);
                                          setCalendarOpen(false);
                                        }}
                                        disabled={[
                                          { dayOfWeek: [0, 6] },
                                          { before: startOfToday() },
                                        ]}
                                        styles={{
                                          day_selected: {
                                            backgroundColor: "#eab308",
                                            color: "#422006",
                                          },
                                          day_today: {
                                            fontWeight: "bold",
                                            color: "#d97706",
                                          },
                                        }}
                                        classNames={{
                                          selected:
                                            "!bg-yellow-400 !text-amber-950 font-bold rounded-lg",
                                          today: "text-yellow-600 font-bold",
                                          day: "text-amber-900 hover:bg-yellow-50 transition-colors rounded-lg",
                                          disabled:
                                            "opacity-30 cursor-not-allowed",
                                          month: "text-amber-900",
                                          button_next:
                                            "text-amber-900 hover:bg-yellow-50 transition-colors",
                                          button_previous:
                                            "text-amber-900 hover:bg-yellow-50 transition-colors",
                                          button:
                                            "rounded-lg hover:bg-yellow-50 transition-colors",
                                        }}
                                      />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            )}
                          />
                        </motion.div>
                      </motion.div>

                      {/* Time */}
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                      >
                        <FloatingLabel error={errors.time?.message} required>
                          Preferred Time
                        </FloatingLabel>
                        <Controller
                          name="time"
                          control={control}
                          render={({ field }) => (
                            <SelectDropdown
                              value={field.value}
                              onChange={field.onChange}
                              options={timeSlots.map((s) => ({
                                value: s,
                                label: s,
                              }))}
                              placeholder="Choose a time"
                              error={errors.time}
                            />
                          )}
                        />
                      </motion.div>

                      {/* Message */}
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                      >
                        <FloatingLabel>Additional Notes</FloatingLabel>
                        <motion.textarea
                          {...register("message")}
                          rows={4}
                          whileFocus={{ scale: 1.005 }}
                          transition={{ duration: 0.2 }}
                          placeholder="Tell us more about the vehicle or payment plan you're interested in..."
                          className="w-full resize-none rounded-xl border-2 border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-950 placeholder-amber-400 outline-none transition-all duration-200 hover:border-amber-300 focus:border-yellow-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(234,179,8,0.12)]"
                        />
                      </motion.div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full overflow-hidden rounded-xl bg-yellow-400 py-4 text-sm font-black uppercase tracking-widest text-amber-950 shadow-md shadow-yellow-200/70 transition-colors hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.span
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center gap-2"
                            >
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 0.8,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="inline-block h-4 w-4 rounded-full border-2 border-amber-950/30 border-t-amber-950"
                              />
                              Scheduling…
                            </motion.span>
                          ) : (
                            <motion.span
                              key="idle"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center gap-2"
                            >
                              Schedule Appointment
                              <ArrowRight className="h-4 w-4" />
                            </motion.span>
                          )}
                        </AnimatePresence>

                        {/* Shimmer on hover */}
                        <motion.span
                          initial={{ x: "-100%", opacity: 0.4 }}
                          whileHover={{ x: "200%", opacity: 0 }}
                          transition={{ duration: 0.6 }}
                          className="pointer-events-none absolute inset-0 -skew-x-12 bg-white/20"
                        />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
