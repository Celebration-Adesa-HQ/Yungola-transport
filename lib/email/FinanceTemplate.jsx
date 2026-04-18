import { createBaseEmailTemplate } from "./BaseTemplate";
import { escapeHtml } from "./escape-html";

export function repairFinanceAdminTemplate({
  name,
  email,
  phone,
  vehicleType,
  repairCost,
  description,
}) {
  return createBaseEmailTemplate({
    title: "New Repair Finance Request",
    preheader: `Repair finance request from ${name}`,
    intro: "A new repair finance request has been submitted on your website.",
    sectionTitle: "Applicant Details",
    sectionContent: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Vehicle Type:</strong> ${escapeHtml(vehicleType)}</p>
      <p><strong>Repair Cost:</strong> ₦${escapeHtml(repairCost)}</p>
    `,
    bodyContent: `
      <p style="font-weight:bold;color:#92400e;">Repair Description:</p>
      <div style="background:#fefce8;padding:15px;border-radius:6px;border:1px solid #fde68a;color:#374151;">
        ${escapeHtml(description).replace(/\n/g, "<br />")}
      </div>
    `,
    ctaText: "Reply to Applicant",
    ctaUrl: `mailto:${email}`,
  });
}

export function repairFinanceCustomerTemplate({
  name,
  email,
  phone,
  vehicleType,
  repairCost,
  description,
}) {
  return createBaseEmailTemplate({
    title: "Your Repair Finance Request Was Received",
    preheader: "Yungola Transport has received your repair finance request",
    intro: `Hi ${escapeHtml(
      name,
    )},<br/><br/>Thank you for submitting your repair finance request. Our team will review it and get back to you as soon as possible.`,
    sectionTitle: "Request Summary",
    sectionContent: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Vehicle Type:</strong> ${escapeHtml(vehicleType)}</p>
      <p><strong>Repair Cost:</strong> ₦${escapeHtml(repairCost)}</p>
    `,
    bodyContent: `
      <p style="font-weight:bold;color:#92400e;">Repair Description:</p>
      <div style="background:#fefce8;padding:15px;border-radius:6px;border:1px solid #fde68a;color:#374151;">
        ${escapeHtml(description).replace(/\n/g, "<br />")}
      </div>
    `,
    ctaText: "Visit Our Website",
    ctaUrl: "https://yungolatransport.com",
    footerNote:
      "If you need to update your request, reply directly to this email.",
  });
}
