import { NextResponse } from "next/server";
import { format, isBefore, isSunday, startOfToday } from "date-fns";
import { z } from "zod";
import { Resend } from "resend";
import {
  appointmentAdminTemplate,
  appointmentCustomerTemplate,
} from "@/lib/email/ScheduleTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const scheduleApiSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+\d\s\-()]+$/, "Please enter a valid phone number"),
  location: z.string().min(1, "Please select a preferred location"),
  vehicleType: z.string().optional(),
  date: z.coerce
    .date({
      required_error: "Please select a preferred date",
      invalid_type_error: "Invalid date",
    })
    .refine((d) => !isSunday(d), "We are closed on Sundays")
    .refine((d) => !isBefore(d, startOfToday()), "Please select a future date"),
  time: z.string().min(1, "Please choose a preferred time"),
  message: z.string().optional(),
});

export async function POST(req) {
  try {
    const body = await req.json();

    const result = scheduleApiSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: {
            name: fieldErrors.name?.[0] || "",
            email: fieldErrors.email?.[0] || "",
            phone: fieldErrors.phone?.[0] || "",
            location: fieldErrors.location?.[0] || "",
            vehicleType: fieldErrors.vehicleType?.[0] || "",
            date: fieldErrors.date?.[0] || "",
            time: fieldErrors.time?.[0] || "",
            message: fieldErrors.message?.[0] || "",
          },
        },
        { status: 400 },
      );
    }

    const { name, email, phone, location, vehicleType, date, time, message } =
      result.data;

    const formattedDate = format(date, "PPP");

    const adminEmail = await resend.emails.send({
      from: "Appointments <contact@yungolatransport.com>",
      to: ["contact@yungolatransport.com"],
      replyTo: email,
      subject: `New Appointment Request - ${name}`,
      html: appointmentAdminTemplate({
        name,
        email,
        phone,
        location,
        vehicleType,
        date: formattedDate,
        time,
        message,
      }),
    });

    if (adminEmail.error) {
      console.error("Resend admin email error:", adminEmail.error);

      return NextResponse.json(
        { success: false, message: "Failed to send appointment request" },
        { status: 500 },
      );
    }

    const customerEmail = await resend.emails.send({
      from: "Yungola Transport <contact@yungolatransport.com>",
      to: [email],
      subject: "We received your appointment request",
      html: appointmentCustomerTemplate({
        name,
        email,
        phone,
        location,
        vehicleType,
        date: formattedDate,
        time,
        message,
      }),
    });

    if (customerEmail.error) {
      console.error("Resend customer email error:", customerEmail.error);

      return NextResponse.json(
        {
          success: false,
          message:
            "Appointment request was received, but confirmation email could not be sent.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Appointment request sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Schedule API error:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 },
    );
  }
}
