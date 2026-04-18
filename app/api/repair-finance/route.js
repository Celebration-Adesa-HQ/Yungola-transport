import { repairFinanceSchema } from "@/lib/schema/zod";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  repairFinanceAdminTemplate,
  repairFinanceCustomerTemplate,
} from "@/lib/email/FinanceTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const result = repairFinanceSchema.safeParse(body);

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
            vehicleType: fieldErrors.vehicleType?.[0] || "",
            repairCost: fieldErrors.repairCost?.[0] || "",
            description: fieldErrors.description?.[0] || "",
          },
        },
        { status: 400 },
      );
    }

    const { name, email, phone, vehicleType, repairCost, description } =
      result.data;

    const formattedCost = Number(repairCost).toLocaleString();

    const adminEmail = await resend.emails.send({
      from: "Finance <contact@yungolatransport.com>",
      to: ["contact@yungolatransport.com"],
      replyTo: email,
      subject: `Repair Finance Request - ${name}`,
      html: repairFinanceAdminTemplate({
        name,
        email,
        phone,
        vehicleType,
        repairCost: formattedCost,
        description,
      }),
    });

    if (adminEmail.error) {
      console.error("Resend admin email error:", adminEmail.error);

      return NextResponse.json(
        { success: false, message: "Failed to send finance request" },
        { status: 500 },
      );
    }

    const customerEmail = await resend.emails.send({
      from: "Yungola Transport <contact@yungolatransport.com>",
      to: [email],
      subject: "We received your repair finance request",
      html: repairFinanceCustomerTemplate({
        name,
        email,
        phone,
        vehicleType,
        repairCost: formattedCost,
        description,
      }),
    });

    if (customerEmail.error) {
      console.error("Resend customer email error:", customerEmail.error);
    }

    return NextResponse.json(
      { success: true, message: "Request submitted successfully" },
      { status: 200 },
    );
  } catch (err) {
    console.error("Repair finance API error:", err);

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 },
    );
  }
}
