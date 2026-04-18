import { z } from "zod";
import { isBefore, isSunday, startOfToday } from "date-fns";

export const contactSchema = z.object({
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


export const repairFinanceSchema = z.object({
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

export const scheduleSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+\d\s\-()]+$/, "Please enter a valid phone number"),
  location: z.string().min(1, "Please select a preferred location"),
  vehicleType: z.enum(["motorcycle", "tricycle", "car"]).optional(),
  message: z.string().max(1000, "Message is too long").optional(),
  date: z
    .date({ required_error: "Please select a preferred date" })
    .refine((d) => !isSunday(d), "We are closed on Sundays")
    .refine((d) => !isBefore(d, startOfToday()), "Please select a future date"),
  time: z.string().min(1, "Please choose a preferred time"),
});