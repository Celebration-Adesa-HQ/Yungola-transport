import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schema/zod";
import {
  contactAdminTemplate,
  contactCustomerTemplate,
} from "@/lib/email/ContactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: {
            name: fieldErrors.name?.[0] || "",
            email: fieldErrors.email?.[0] || "",
            phone: fieldErrors.phone?.[0] || "",
            message: fieldErrors.message?.[0] || "",
          },
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = result.data;

    await resend.emails.send({
      from: "Yungola Transport <contact@yungolatransport.com>",
      to: ["contact@yungolatransport.com"],
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: contactAdminTemplate({ name, email, phone, message }),
    });

    await resend.emails.send({
      from: "Yungola Transport <contact@yungolatransport.com>",
      to: [email],
      subject: "We received your message",
      html: contactCustomerTemplate({ name, email, phone, message }),
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}