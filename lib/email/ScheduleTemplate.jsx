import { createBaseEmailTemplate } from "./BaseTemplate";
import { escapeHtml } from "./escape-html";

export function appointmentAdminTemplate({
  name,
  email,
  phone,
  location,
  vehicleType,
  date,
  time,
  message,
}) {
  return createBaseEmailTemplate({
    title: "New Appointment Request",
    preheader: `Appointment request from ${name}`,
    intro: "You’ve received a new appointment request from your website.",
    sectionTitle: "Customer Details",
    sectionContent: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Location:</strong> ${escapeHtml(location)}</p>
      <p><strong>Vehicle Type:</strong> ${escapeHtml(vehicleType || "Not specified")}</p>
      <p><strong>Date:</strong> ${escapeHtml(date)}</p>
      <p><strong>Time:</strong> ${escapeHtml(time)}</p>
    `,
    bodyContent: `
      <p style="font-weight:bold;color:#92400e;">Additional Message:</p>
      <div style="background:#fefce8;padding:15px;border-radius:6px;border:1px solid #fde68a;color:#374151;">
        ${escapeHtml(message || "No additional message").replace(/\n/g, "<br />")}
      </div>
    `,
    ctaText: "Reply to Customer",
    ctaUrl: `mailto:${email}`,
  });
}

export function appointmentCustomerTemplate({
  name,
  email,
  phone,
  location,
  vehicleType,
  date,
  time,
  message,
}) {
  return createBaseEmailTemplate({
    title: "Your Appointment Request Was Received",
    preheader: "Yungola Transport has received your appointment request",
    intro: `Hi ${escapeHtml(
      name,
    )},<br/><br/>Thank you for scheduling with <strong>Yungola Transport</strong>. Your appointment request has been received and our team will confirm it shortly.`,
    sectionTitle: "Appointment Summary",
    sectionContent: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Location:</strong> ${escapeHtml(location)}</p>
      <p><strong>Vehicle Type:</strong> ${escapeHtml(vehicleType || "Not specified")}</p>
      <p><strong>Date:</strong> ${escapeHtml(date)}</p>
      <p><strong>Time:</strong> ${escapeHtml(time)}</p>
    `,
    bodyContent: `
      <p style="font-weight:bold;color:#92400e;">Additional Note:</p>
      <div style="background:#fefce8;padding:15px;border-radius:6px;border:1px solid #fde68a;color:#374151;">
        ${escapeHtml(message || "No additional note").replace(/\n/g, "<br />")}
      </div>
    `,
    ctaText: "Visit Our Website",
    ctaUrl: "https://yungolatransport.com",
    footerNote: "If you need to make changes, simply reply to this email.",
  });
}
