
import { createBaseEmailTemplate } from "./BaseTemplate";
import { escapeHtml } from "./escape-html";

export function contactAdminTemplate({
  name,
  email,
  phone,
  message,
}) {
  return createBaseEmailTemplate({
    title: "New Contact Message",
    preheader: `New contact form submission from ${name}`,
    intro: "You’ve received a new message from your website.",
    sectionTitle: "Customer Details",
    sectionContent: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    `,
    bodyContent: `
      <p style="font-weight:bold;color:#92400e;">Message:</p>
      <div style="background:#fefce8;padding:15px;border-radius:6px;border:1px solid #fde68a;color:#374151;">
        ${escapeHtml(message).replace(/\n/g, "<br />")}
      </div>
    `,
    ctaText: "Reply to Customer",
    ctaUrl: `mailto:${email}`,
  });
}

export function contactCustomerTemplate({
  name,
  email,
  phone,
  message,
}) {
  return createBaseEmailTemplate({
    title: "We’ve Received Your Message",
    preheader: "Your message has been received by Yungola Transport",
    intro: `Hi ${escapeHtml(
      name
    )},<br/><br/>Thank you for reaching out to <strong>Yungola Transport</strong>. Your message has been successfully received and our team will get back to you shortly.`,
    sectionTitle: "Your Submission Summary",
    sectionContent: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    `,
    bodyContent: `
      <p style="font-weight:bold;color:#92400e;">Your Message:</p>
      <div style="background:#fefce8;padding:15px;border-radius:6px;border:1px solid #fde68a;color:#374151;">
        ${escapeHtml(message).replace(/\n/g, "<br />")}
      </div>
    `,
    ctaText: "Visit Our Website",
    ctaUrl: "https://yungolatransport.com",
    footerNote:
      "If your request is urgent, feel free to reply directly to this email.",
  });
}