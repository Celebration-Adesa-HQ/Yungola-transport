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

const offices = [
  // {
  //   id: "ibadan",
  //   name: "Ibadan Office",
  //   address: "123, Ring Road, Challenge, Ibadan, Oyo State",
  //   phone: "+234 800 YUNGOLA",
  // },
  {
    id: "lagos",
    name: "Lagos Office",
    address: "5, Ayanleye Street, Ogba, Lagos State",
    phone: "+234 907 1518 988 YUNGOLA",
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
];

export default function SchedulePageComponent() {
  const [date, setDate] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scheduleForm, setScheduleForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    vehicleType: "",
    time: "",
    message: "",
  });

  const isSunday = (d) => d.getDay() === 0;
  const today = new Date();

  const handleScheduleSubmit = (e) => {
    e.preventDefault();

    if (
      !scheduleForm.name ||
      !scheduleForm.email ||
      !scheduleForm.phone ||
      !scheduleForm.location ||
      !date ||
      !scheduleForm.time
    ) {
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/80 to-yellow-600/70 z-10" />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-yellow-100">
              Book Your Visit
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Schedule a Visit
            </h1>

            <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Book an appointment to visit our office, inspect available
              vehicles, and speak with our team about your preferred payment
              plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Info Panel */}
            <div className="lg:col-span-1 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
                <h2 className="mb-4 text-xl font-bold text-amber-900">
                  Visit Our Offices
                </h2>

                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.id}
                      className="rounded-xl bg-yellow-50 p-4 ring-1 ring-yellow-100"
                    >
                      <div className="mb-2 flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-yellow-600" />
                        <h3 className="font-semibold text-amber-900">
                          {office.name}
                        </h3>
                      </div>

                      <p className="text-sm leading-6 text-amber-700">
                        {office.address}
                      </p>

                      <p className="mt-2 inline-flex items-center text-sm text-amber-600">
                        <Phone className="mr-1 h-4 w-4" />
                        {office.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
                <h2 className="mb-4 text-xl font-bold text-amber-900">
                  Office Hours
                </h2>

                <div className="rounded-xl bg-amber-100 p-4">
                  <div className="mb-2 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-amber-700" />
                    <h3 className="font-semibold text-amber-900">
                      Operating Hours
                    </h3>
                  </div>

                  <p className="text-sm leading-6 text-amber-700">
                    Monday to Friday: 9:00 AM to 5:00 PM
                    <br />
                    Saturday to Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
                <h2 className="mb-4 text-xl font-bold text-amber-900">
                  What To Expect
                </h2>

                <div className="space-y-3 text-sm text-amber-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-yellow-600" />
                    <span>
                      Meet with our team for guidance on available plans
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-yellow-600" />
                    <span>
                      Inspect vehicles that match your budget and needs
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-yellow-600" />
                    <span>Get help with documents and next steps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100 sm:p-8">
                <div className="mb-6 flex items-center gap-2">
                  <CalendarDays className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-xl font-bold text-amber-900">
                    Book an Appointment
                  </h2>
                </div>

                {formSubmitted ? (
                  <div className="py-14 text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>

                    <h3 className="mb-2 text-2xl font-bold text-amber-900">
                      Appointment Scheduled!
                    </h3>

                    <p className="mx-auto max-w-md text-amber-700">
                      Your appointment has been booked for{" "}
                      <span className="font-semibold">
                        {date ? format(date, "PPP") : ""}
                      </span>{" "}
                      at{" "}
                      <span className="font-semibold">{scheduleForm.time}</span>
                      . We’ll contact you shortly to confirm the details.
                    </p>

                    <Button
                      type="button"
                      className="mt-6"
                      onClick={() => {
                        setFormSubmitted(false);
                        setDate(undefined);
                        setScheduleForm({
                          name: "",
                          email: "",
                          phone: "",
                          location: "",
                          vehicleType: "",
                          time: "",
                          message: "",
                        });
                      }}
                    >
                      Book Another Appointment
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleScheduleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-medium text-amber-900">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={scheduleForm.name}
                          onChange={(e) =>
                            setScheduleForm({
                              ...scheduleForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="Enter your full name"
                          className="border-amber-200 focus-visible:ring-yellow-500 text-black"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block font-medium text-amber-900">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={scheduleForm.email}
                          onChange={(e) =>
                            setScheduleForm({
                              ...scheduleForm,
                              email: e.target.value,
                            })
                          }
                          placeholder="your@email.com"
                          className="border-amber-200 focus-visible:ring-yellow-500 text-black"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-medium text-amber-900">
                          Phone Number *
                        </label>
                        <Input
                          required
                          value={scheduleForm.phone}
                          onChange={(e) =>
                            setScheduleForm({
                              ...scheduleForm,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+234 XXX XXX XXXX"
                          className="border-amber-200 focus-visible:ring-yellow-500 text-black"
                        />
                      </div>

                      <div className="text-black">
                        <label className="mb-2 block font-medium text-amber-900">
                          Preferred Location *
                        </label>
                        <Select
                          value={scheduleForm.location}
                          onValueChange={(value) =>
                            setScheduleForm({
                              ...scheduleForm,
                              location: value,
                            })
                          }
                        >
                          <SelectTrigger className="border-amber-200 text-black focus:ring-yellow-500">
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>

                          <SelectContent className="">
                            <SelectItem
                              value="ibadan"
                              className="text-amber-900 hover:bg-amber-100 "
                            >
                              Ibadan Office
                            </SelectItem>
                            <SelectItem
                              value="lagos"
                              className="text-amber-900 hover:bg-amber-100"
                            >
                              Lagos Office
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-medium text-amber-900">
                          Interested Vehicle Type
                        </label>
                        <Select
                          value={scheduleForm.vehicleType}
                          onValueChange={(value) =>
                            setScheduleForm({
                              ...scheduleForm,
                              vehicleType: value,
                            })
                          }
                        >
                          <SelectTrigger className="border-amber-200 focus:ring-yellow-500 text-black">
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              value="tricycle"
                              className="text-amber-900 hover:bg-amber-100"
                            >
                              Tricycle (Keke)
                            </SelectItem>
                            <SelectItem
                              value="motorcycle"
                              className="text-amber-900 hover:bg-amber-100"
                            >
                              Motorcycle
                            </SelectItem>
                            <SelectItem
                              value="car"
                              className="text-amber-900 hover:bg-amber-100"
                            >
                              Car (Corolla)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="mb-2 block font-medium text-amber-900">
                          Preferred Date *
                        </label>

                        <Popover>
                          <PopoverTrigger asChild>
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
                          </PopoverTrigger>

                          <PopoverContent
                            className="w-auto p-0 text-black"
                            align="start"
                          >
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
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block font-medium text-amber-900">
                        Preferred Time *
                      </label>
                      <Select
                        value={scheduleForm.time}
                        onValueChange={(value) =>
                          setScheduleForm({
                            ...scheduleForm,
                            time: value,
                          })
                        }
                      >
                        <SelectTrigger className="border-amber-200 focus:ring-yellow-500 text-black">
                          <SelectValue placeholder="Choose a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem
                              key={slot}
                              value={slot}
                              className="text-amber-900 hover:bg-amber-100"
                            >
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="mb-2 block font-medium text-amber-900">
                        Additional Notes
                      </label>
                      <Textarea
                        rows={4}
                        value={scheduleForm.message}
                        onChange={(e) =>
                          setScheduleForm({
                            ...scheduleForm,
                            message: e.target.value,
                          })
                        }
                        placeholder="Tell us more about the vehicle or payment plan you're interested in..."
                        className="border-amber-200 focus-visible:ring-yellow-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-yellow-500 font-bold text-amber-900 hover:bg-yellow-400"
                    >
                      Schedule Appointment
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
