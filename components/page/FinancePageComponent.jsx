"use client";

import { useState, useRef, useMemo } from "react";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  CreditCard,
  ShieldCheck,
  Wrench,
  Clock3,
  ArrowRight,
  Zap,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";

// ─── Zod Schema ───────────────────────────────────────────────────────────────

const repairFinanceSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .regex(/^[+\d\s\-()]+$/, "Phone number contains invalid characters"),
  vehicleType: z.enum(["motorcycle", "tricycle", "car"], {
    required_error: "Please select a vehicle type",
  }),
  repairCost: z
    .string()
    .min(1, "Repair cost is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Repair cost must be a positive number",
    }),
  description: z
    .string()
    .min(20, "Please provide at least 20 characters describing the repair"),
});

// ─── Constants ────────────────────────────────────────────────────────────────

const requirements = ["Valid ID", "2 Passport Photos", "2 Guarantors"];

// ─── Email Sender Integration ─────────────────────────────────────────────────

async function sendRepairFinanceEmail(data) {
  // TODO: plug in your email sender here
  // const res = await fetch("/api/repair-finance", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) throw new Error("Failed to send email");
  await new Promise((resolve) => setTimeout(resolve, 1200));
}

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeSlideUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeSlideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Reusable animated section wrapper ───────────────────────────────────────

function RevealSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeSlideUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated card with hover lift ───────────────────────────────────────────

function HoverCard({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      whileHover={{
        y: -8,
        scale: 1.025,
        boxShadow: "0 24px 48px -8px rgba(180,120,0,0.18)",
        transition: { duration: 0.28, ease: "easeOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Floating particle background ────────────────────────────────────────────

function HeroParticles() {
  const [particles] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 4,
      drift: Math.random() * 20 - 10,
    })),
  );

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-yellow-300/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Animated number counter for step circles ────────────────────────────────

function StepCircle({ number, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 relative overflow-hidden"
      initial={{ scale: 0, rotate: -180 }}
      animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0 bg-yellow-300 rounded-full"
        initial={{ scale: 0 }}
        animate={inView ? { scale: [0, 1.5, 0] } : {}}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
      />
      <span className="relative text-lg font-black text-amber-900">
        {number}
      </span>
    </motion.div>
  );
}

// ─── Animated form field wrapper ─────────────────────────────────────────────

function FormField({ children, error, delay = 0 }) {
  return (
    <motion.div variants={fadeSlideLeft} custom={delay} className="space-y-1">
      {children}
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -6, height: 0 }}
            transition={{ duration: 0.22 }}
            className="text-xs text-red-500 font-medium"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FinancePageComponent() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Parallax hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const smoothY = useSpring(heroY, { stiffness: 80, damping: 20 });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(repairFinanceSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      vehicleType: undefined,
      repairCost: "",
      description: "",
    },
  });

  const { field: vehicleTypeField } = useController({
    name: "vehicleType",
    control,
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await sendRepairFinanceEmail(data);
      setFormSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong while submitting your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setSubmitError(null);
    reset();
  };

  return (
    <div className="min-h-screen bg-amber-50 overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative text-white overflow-hidden min-h-full flex items-center"
      >
        {/* Parallax image */}
        <motion.div
          
          className="absolute inset-0 z-0"
        >
          <Image
            src="/Yungola mockup.jpg"
            alt="Background"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-900/92 via-amber-800/82 to-yellow-600/70 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Floating particles */}
        <HeroParticles />

     

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 w-full"
        >
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.p
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-yellow-100 border border-white/15"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Zap className="h-3.5 w-3.5 text-yellow-300" />
              Repair Financing
            </motion.p>

            {/* Title — letter-by-letter reveal */}
            <div className="">
              <motion.h1
                className="text-5xl font-black tracking-tight sm:text-6xl leading-[1.05]"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Repair Now.{" "}
                <motion.span
                  className="text-yellow-400"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.75, duration: 0.5, ease: "backOut" }}
                >
                  Pay Later.
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              className="mt-5 max-w-xl text-base text-white/80 sm:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Get your vehicle repaired now and repay in convenient weekly
              instalments with a simple approval process and competitive rates.
            </motion.p>

            {/* CTA arrow hint */}
            <motion.div
              className="mt-8 flex items-center gap-2 text-yellow-300 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <span>Apply below</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Info Cards ───────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white relative overflow-hidden">
        {/* Subtle background orb */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-yellow-100/60 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: <Wrench className="h-8 w-8 text-yellow-600" />,
                title: "Repair on Credit",
                body: "Access funding for urgent repairs on motorcycles, tricycles, and cars without paying the full cost upfront.",
              },
              {
                icon: <CreditCard className="h-8 w-8 text-yellow-600" />,
                title: "Flexible Repayment",
                body: "Choose a repayment duration from 1 to 12 weeks and spread your repair cost over manageable weekly payments.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-yellow-600" />,
                title: "Basic Requirements",
                isRequirements: true,
              },
            ].map((card, i) => (
              <HoverCard
                key={card.title}
                delay={i * 0.08}
                className="rounded-2xl border border-amber-200 bg-amber-50 p-6 cursor-default"
              >
                <div className="mb-4 flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h2 className="text-lg font-bold text-amber-900">
                    {card.title}
                  </h2>
                </div>
                {card.isRequirements ? (
                  <div className="space-y-2 text-sm text-amber-700">
                    {requirements.map((item, j) => (
                      <motion.div
                        key={item}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.1 }}
                      >
                        <CheckCircle className="h-4 w-4 text-yellow-600 shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm leading-6 text-amber-700">
                    {card.body}
                  </p>
                )}
              </HoverCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────────── */}
      <section className="py-16 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-amber-100 relative overflow-hidden">
              {/* Decorative corner accent */}
              <motion.div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-yellow-400/10 pointer-events-none"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="mb-8 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <CreditCard className="h-6 w-6 text-yellow-500" />
                </motion.div>
                <h2 className="text-xl font-bold text-amber-900">
                  How It Works
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3 relative">
                {/* Connecting line between steps */}
                <motion.div
                  className="hidden md:block absolute top-7 left-[calc(33%-10px)] right-[calc(33%-10px)] h-[2px] bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {[
                  {
                    n: "1",
                    title: "Submit Request",
                    body: "Enter your vehicle details, repair cost, and financing request.",
                  },
                  {
                    n: "2",
                    title: "Get Reviewed",
                    body: "Our team reviews your application and confirms repayment terms.",
                  },
                  {
                    n: "3",
                    title: "Repair and Repay",
                    body: "Fix your vehicle and repay in weekly instalments over your selected duration.",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={step.n}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.18,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <StepCircle number={step.n} delay={i * 0.2} />
                    <h3 className="mb-1 font-semibold text-amber-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-amber-600">{step.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Request Form ─────────────────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <motion.div
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100 sm:p-8 relative overflow-hidden"
              whileInView={{
                boxShadow: [
                  "0 1px 3px rgba(0,0,0,0.06)",
                  "0 20px 60px -10px rgba(180,120,0,0.12)",
                ],
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Background shimmer */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{
                  background:
                    "linear-gradient(135deg, transparent 0%, rgba(250,204,21,0.03) 50%, transparent 100%)",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <motion.div
                className="mb-6 flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Wrench className="h-6 w-6 text-yellow-500" />
                </motion.div>
                <h2 className="text-xl font-bold text-amber-900">
                  Submit a Repair Finance Request
                </h2>
              </motion.div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  // ── Success State ─────────────────────────────────────────
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="py-14 text-center"
                  >
                    <motion.div
                      className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 relative"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.1,
                      }}
                    >
                      {/* Ripple rings */}
                      {[1, 2, 3].map((ring) => (
                        <motion.div
                          key={ring}
                          className="absolute inset-0 rounded-full border-2 border-green-300"
                          initial={{ scale: 1, opacity: 0.8 }}
                          animate={{ scale: 1 + ring * 0.4, opacity: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: ring * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                      <CheckCircle className="h-12 w-12 text-green-600 relative z-10" />
                    </motion.div>

                    <motion.h3
                      className="mb-2 text-2xl font-bold text-amber-900"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Request Submitted!
                    </motion.h3>
                    <motion.p
                      className="mx-auto max-w-md text-amber-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.55 }}
                    >
                      Our team will review your repair financing request and
                      contact you shortly with the next steps.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Button
                        type="button"
                        className="mt-6 bg-yellow-500 text-amber-900 hover:bg-yellow-400"
                        onClick={handleReset}
                      >
                        Submit Another Request
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  // ── Form ─────────────────────────────────────────────────
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                    className="space-y-5"
                  >
                    {/* Full Name */}
                    <FormField error={errors.name?.message} delay={0}>
                      <label className="mb-2 block font-medium text-amber-900">
                        Full Name *
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="relative"
                      >
                        <Input
                          {...register("name")}
                          placeholder="Enter your full name"
                          className="border-amber-200 text-black placeholder:text-black/50 focus-visible:ring-yellow-500 transition-shadow duration-200"
                        />
                      </motion.div>
                    </FormField>

                    {/* Email + Phone */}
                    <motion.div
                      variants={fadeSlideLeft}
                      custom={1}
                      className="grid gap-4 sm:grid-cols-2"
                    >
                      <FormField error={errors.email?.message}>
                        <label className="mb-2 block font-medium text-amber-900">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          {...register("email")}
                          placeholder="your@email.com"
                          className="border-amber-200 text-black placeholder:text-black/50 focus-visible:ring-yellow-500"
                        />
                      </FormField>
                      <FormField error={errors.phone?.message}>
                        <label className="mb-2 block font-medium text-amber-900">
                          Phone Number *
                        </label>
                        <Input
                          {...register("phone")}
                          placeholder="+234 XXX XXX XXXX"
                          className="border-amber-200 text-black placeholder:text-black/50 focus-visible:ring-yellow-500"
                        />
                      </FormField>
                    </motion.div>

                    {/* Vehicle Type + Repair Cost */}
                    <motion.div
                      variants={fadeSlideLeft}
                      custom={2}
                      className="grid gap-4 sm:grid-cols-2"
                    >
                      <FormField error={errors.vehicleType?.message}>
                        <label className="mb-2 block font-medium text-amber-900">
                          Vehicle Type *
                        </label>
                        <Select
                          value={vehicleTypeField.value ?? ""}
                          onValueChange={vehicleTypeField.onChange}
                        >
                          <SelectTrigger className="border-amber-200 focus:ring-yellow-500 text-black">
                            <SelectValue placeholder="Select vehicle" />
                          </SelectTrigger>
                          <SelectContent className="bg-white text-black">
                            <SelectItem
                              value="motorcycle"
                              className="text-black hover:bg-yellow-100"
                            >
                              Motorcycle
                            </SelectItem>
                            <SelectItem
                              value="tricycle"
                              className="text-black hover:bg-yellow-100"
                            >
                              Tricycle (Keke)
                            </SelectItem>
                            <SelectItem
                              value="car"
                              className="text-black hover:bg-yellow-100"
                            >
                              Car
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormField>

                      <FormField error={errors.repairCost?.message}>
                        <label className="mb-2 block font-medium text-amber-900">
                          Repair Cost (₦) *
                        </label>
                        <Input
                          type="number"
                          {...register("repairCost")}
                          placeholder="e.g. 50000"
                          className="border-amber-200 text-black placeholder:text-black/50 focus-visible:ring-yellow-500"
                        />
                      </FormField>
                    </motion.div>

                    {/* Repair Description */}
                    <FormField error={errors.description?.message} delay={3}>
                      <motion.div variants={fadeSlideLeft} custom={3}>
                        <label className="mb-2 block font-medium text-amber-900">
                          Repair Details *
                        </label>
                        <Textarea
                          rows={5}
                          {...register("description")}
                          placeholder="Describe the repair issue, affected parts, and any useful details about the vehicle condition..."
                          className="border-amber-200 text-black placeholder:text-black/50 focus-visible:ring-yellow-500 resize-none"
                        />
                      </motion.div>
                    </FormField>

                    {/* Disclaimer */}
                    <motion.div
                      variants={fadeSlideLeft}
                      custom={4}
                      className="rounded-xl bg-amber-100 p-4"
                      whileHover={{ backgroundColor: "rgb(254 243 199)" }}
                    >
                      <div className="flex items-start gap-2 text-sm text-amber-800">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 2,
                          }}
                        >
                          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                        </motion.div>
                        <p>
                          Requests are reviewed as quickly as possible. Final
                          approval, repayment terms, and disbursement are
                          subject to document verification and internal review.
                        </p>
                      </div>
                    </motion.div>

                    {/* Server error */}
                    <AnimatePresence>
                      {submitError && (
                        <motion.p
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="text-sm text-red-600 font-medium"
                        >
                          {submitError}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Submit button */}
                    <motion.div variants={fadeSlideLeft} custom={5}>
                      <motion.div
                        whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full bg-yellow-500 font-bold text-amber-900 hover:bg-yellow-400 disabled:opacity-60 relative overflow-hidden"
                        >
                          <AnimatePresence mode="wait">
                            {isSubmitting ? (
                              <motion.span
                                key="submitting"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-2"
                              >
                                <motion.div
                                  className="h-4 w-4 rounded-full border-2 border-amber-900/40 border-t-amber-900"
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                />
                                Submitting…
                              </motion.span>
                            ) : (
                              <motion.span
                                key="submit"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-2"
                              >
                                Submit Request
                                <motion.span
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                  }}
                                >
                                  <ArrowRight className="h-4 w-4" />
                                </motion.span>
                              </motion.span>
                            )}
                          </AnimatePresence>

                          {/* Button shine sweep */}
                          {!isSubmitting && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                              initial={{ x: "-100%" }}
                              animate={{ x: "200%" }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatDelay: 2,
                              }}
                            />
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
