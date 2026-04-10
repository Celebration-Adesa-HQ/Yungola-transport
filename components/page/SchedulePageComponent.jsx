"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  CalendarDays,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

// ─── Animation Variants ────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const checkmarkCircle = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.1 },
  },
};

const checkmarkIcon = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.35 },
  },
};

const successText = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.4 + i * 0.1, ease: "easeOut" },
  }),
};

const formFieldVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Magnetic Button (hover spring effect) ─────────────────────────────────

function MagneticButton({ children, className, ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// ─── Animated Info Card ─────────────────────────────────────────────────────

function InfoCard({
  children,
  custom,
}) {
  return (
    <motion.div
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      custom={custom}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(180,100,0,0.12)" }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100"
    >
      {children}
    </motion.div>
  );
}

// ─── Animated Form Field ────────────────────────────────────────────────────

function FormField({
  custom,
  children,
}) {
  return (
    <motion.div
      variants={formFieldVariant}
      initial="hidden"
      animate="visible"
      custom={custom}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────

const offices = [
  {
    id: "lagos",
    name: "Lagos Office",
    address: "5, Ayanleye Street, Ogba, Lagos State",
    phone: "+234 907 1518 988 YUNGOLA",
  },
];

const timeSlots = [
  "9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
  "12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM",
  "3:00 PM","3:30 PM","4:00 PM","4:30 PM",
];

// ─── Main Component ─────────────────────────────────────────────────────────

export default function SchedulePageComponent() {
  const [date, setDate] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scheduleForm, setScheduleForm] = useState({
    name: "", email: "", phone: "", location: "",
    vehicleType: "", time: "", message: "",
  });

  const isSunday = (d) => d.getDay() === 0;

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    if (!scheduleForm.name || !scheduleForm.email || !scheduleForm.phone ||
        !scheduleForm.location || !date || !scheduleForm.time) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-amber-50 overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative text-white overflow-hidden">
        <Image
          src="/Yungola mockup.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Animated overlay shimmer */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(120,53,15,0.92) 0%, rgba(146,64,14,0.82) 50%, rgba(161,98,7,0.72) 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Subtle animated gradient orb */}
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full z-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(234,179,8,0.18) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-yellow-100"
            >
              Book Your Visit
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl font-black tracking-tight sm:text-5xl"
            >
              Schedule a Visit
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg"
            >
              Book an appointment to visit our office, inspect available
              vehicles, and speak with our team about your preferred payment
              plan.
            </motion.p>
          </div>
        </div>

        {/* Bottom wave separator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 Q360 0 720 20 Q1080 40 1440 0 L1440 40 Z" fill="rgb(255,251,235)" />
          </svg>
        </motion.div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">

            {/* ── Left Info Panel ── */}
            <div className="lg:col-span-1 space-y-6">
              <InfoCard custom={0}>
                <motion.h2
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-4 text-xl font-bold text-amber-900"
                >
                  Visit Our Offices
                </motion.h2>

                <div className="space-y-4">
                  {offices.map((office, i) => (
                    <motion.div
                      key={office.id}
                      variants={scaleIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-xl bg-yellow-50 p-4 ring-1 ring-yellow-100 cursor-default"
                    >
                      <div className="mb-2 flex items-center">
                        <motion.div
                          animate={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <MapPin className="mr-2 h-5 w-5 text-yellow-600" />
                        </motion.div>
                        <h3 className="font-semibold text-amber-900">{office.name}</h3>
                      </div>
                      <p className="text-sm leading-6 text-amber-700">{office.address}</p>
                      <p className="mt-2 inline-flex items-center text-sm text-amber-600">
                        <Phone className="mr-1 h-4 w-4" />
                        {office.phone}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </InfoCard>

              <InfoCard custom={1}>
                <h2 className="mb-4 text-xl font-bold text-amber-900">Office Hours</h2>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl bg-amber-100 p-4"
                >
                  <div className="mb-2 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Clock className="mr-2 h-5 w-5 text-amber-700" />
                    </motion.div>
                    <h3 className="font-semibold text-amber-900">Operating Hours</h3>
                  </div>
                  <p className="text-sm leading-6 text-amber-700">
                    Monday to Saturday: 9:00 AM to 5:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </motion.div>
              </InfoCard>

              <InfoCard custom={2}>
                <h2 className="mb-4 text-xl font-bold text-amber-900">What To Expect</h2>
                <div className="space-y-3 text-sm text-amber-800">
                  {[
                    "Meet with our team for guidance on available plans",
                    "Inspect vehicles that match your budget and needs",
                    "Get help with documents and next steps",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-2"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 + i * 0.1 }}
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 text-yellow-600" />
                      </motion.div>
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </div>
              </InfoCard>
            </div>

            {/* ── Right Form Panel ── */}
            <motion.div
              className="lg:col-span-2"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={0}
            >
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100 sm:p-8">
                <motion.div
                  className="mb-6 flex items-center gap-2"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  <motion.div
                    animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <CalendarDays className="h-6 w-6 text-yellow-500" />
                  </motion.div>
                  <h2 className="text-xl font-bold text-amber-900">Book an Appointment</h2>
                </motion.div>

                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    // ── Success State ──
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="py-14 text-center"
                    >
                      {/* Ripple rings behind checkmark */}
                      <div className="relative mx-auto mb-4 w-20 h-20">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="absolute inset-0 rounded-full bg-green-100"
                            initial={{ scale: 1, opacity: 0.6 }}
                            animate={{ scale: 2 + i * 0.4, opacity: 0 }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              delay: i * 0.5,
                              ease: "easeOut",
                            }}
                          />
                        ))}
                        <motion.div
                          variants={checkmarkCircle}
                          initial="hidden"
                          animate="visible"
                          className="absolute inset-0 flex items-center justify-center rounded-full bg-green-100"
                        >
                          <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="#16a34a" strokeWidth="3">
                            <motion.path
                              d="M10 21 L17 28 L30 13"
                              variants={checkmarkIcon}
                              initial="hidden"
                              animate="visible"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      <motion.h3
                        variants={successText}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="mb-2 text-2xl font-bold text-amber-900"
                      >
                        Appointment Scheduled!
                      </motion.h3>

                      <motion.p
                        variants={successText}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="mx-auto max-w-md text-amber-700"
                      >
                        Your appointment has been booked for{" "}
                        <span className="font-semibold">
                          {date ? format(date, "PPP") : ""}
                        </span>{" "}
                        at{" "}
                        <span className="font-semibold">{scheduleForm.time}</span>
                        . We&apos;ll contact you shortly to confirm the details.
                      </motion.p>

                      <motion.div
                        variants={successText}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                      >
                        <MagneticButton
                          type="button"
                          className="mt-6 inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-2.5 font-bold text-amber-900 hover:bg-yellow-400 transition-colors"
                          onClick={() => {
                            setFormSubmitted(false);
                            setDate(undefined);
                            setScheduleForm({
                              name: "", email: "", phone: "", location: "",
                              vehicleType: "", time: "", message: "",
                            });
                          }}
                        >
                          Book Another Appointment
                        </MagneticButton>
                      </motion.div>
                    </motion.div>
                  ) : (
                    // ── Form ──
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleScheduleSubmit}
                      className="space-y-6"
                    >
                      {/* Row 1 */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField custom={0}>
                          <label className="mb-2 block font-medium text-amber-900">Full Name *</label>
                          <motion.div whileFocus={{ scale: 1.01 }} whileHover={{ scale: 1.005 }}>
                            <Input
                              required
                              value={scheduleForm.name}
                              onChange={(e) => setScheduleForm({ ...scheduleForm, name: e.target.value })}
                              placeholder="Enter your full name"
                              className="border-amber-200 focus-visible:ring-yellow-500 text-black transition-shadow"
                            />
                          </motion.div>
                        </FormField>

                        <FormField custom={1}>
                          <label className="mb-2 block font-medium text-amber-900">Email Address *</label>
                          <Input
                            type="email"
                            required
                            value={scheduleForm.email}
                            onChange={(e) => setScheduleForm({ ...scheduleForm, email: e.target.value })}
                            placeholder="your@email.com"
                            className="border-amber-200 focus-visible:ring-yellow-500 text-black"
                          />
                        </FormField>
                      </div>

                      {/* Row 2 */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField custom={2}>
                          <label className="mb-2 block font-medium text-amber-900">Phone Number *</label>
                          <Input
                            required
                            value={scheduleForm.phone}
                            onChange={(e) => setScheduleForm({ ...scheduleForm, phone: e.target.value })}
                            placeholder="+234 XXX XXX XXXX"
                            className="border-amber-200 focus-visible:ring-yellow-500 text-black"
                          />
                        </FormField>

                        <FormField custom={3}>
                          <label className="mb-2 block font-medium text-amber-900">Preferred Location *</label>
                          <Select
                            value={scheduleForm.location}
                            onValueChange={(value) => setScheduleForm({ ...scheduleForm, location: value })}
                          >
                            <SelectTrigger className="border-amber-200 text-black focus:ring-yellow-500">
                              <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ibadan" className="text-amber-900 hover:bg-amber-100">Ibadan Office</SelectItem>
                              <SelectItem value="lagos" className="text-amber-900 hover:bg-amber-100">Lagos Office</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormField>
                      </div>

                      {/* Row 3 */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField custom={4}>
                          <label className="mb-2 block font-medium text-amber-900">Interested Vehicle Type</label>
                          <Select
                            value={scheduleForm.vehicleType}
                            onValueChange={(value) => setScheduleForm({ ...scheduleForm, vehicleType: value })}
                          >
                            <SelectTrigger className="border-amber-200 focus:ring-yellow-500 text-black">
                              <SelectValue placeholder="Select vehicle type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tricycle" className="text-amber-900 hover:bg-amber-100">Tricycle (Keke)</SelectItem>
                              <SelectItem value="motorcycle" className="text-amber-900 hover:bg-amber-100">Motorcycle</SelectItem>
                              <SelectItem value="car" className="text-amber-900 hover:bg-amber-100">Car (Corolla)</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormField>

                        <FormField custom={5}>
                          <label className="mb-2 block font-medium text-amber-900">Preferred Date *</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                <Button
                                  type="button"
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start border-amber-200 text-left font-normal hover:bg-amber-50",
                                    !date && "text-muted-foreground",
                                    "text-black",
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? format(date, "PPP") : "Pick a date"}
                                </Button>
                              </motion.div>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 text-black" align="start">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                disabled={(d) => isSunday(d) || d < new Date()}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                        </FormField>
                      </div>

                      {/* Time */}
                      <FormField custom={6}>
                        <label className="mb-2 block font-medium text-amber-900">Preferred Time *</label>
                        <Select
                          value={scheduleForm.time}
                          onValueChange={(value) => setScheduleForm({ ...scheduleForm, time: value })}
                        >
                          <SelectTrigger className="border-amber-200 focus:ring-yellow-500 text-black">
                            <SelectValue placeholder="Choose a time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot} className="text-amber-900 hover:bg-amber-100">
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormField>

                      {/* Notes */}
                      <FormField custom={7}>
                        <label className="mb-2 block font-medium text-amber-900">Additional Notes</label>
                        <Textarea
                          rows={4}
                          value={scheduleForm.message}
                          onChange={(e) => setScheduleForm({ ...scheduleForm, message: e.target.value })}
                          placeholder="Tell us more about the vehicle or payment plan you're interested in..."
                          className="border-amber-200 focus-visible:ring-yellow-500"
                        />
                      </FormField>

                      {/* Submit */}
                      <FormField custom={8}>
                        <motion.div
                          whileHover={{ scale: 1.015 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-yellow-500 font-bold text-amber-900 hover:bg-yellow-400 relative overflow-hidden group"
                          >
                            {/* Shimmer sweep on hover */}
                            <motion.span
                              className="absolute inset-0 translate-x-[-100%] bg-white/20 skew-x-[-20deg] pointer-events-none"
                              whileHover={{ translateX: "200%" }}
                              transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                            Schedule Appointment
                          </Button>
                        </motion.div>
                      </FormField>
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