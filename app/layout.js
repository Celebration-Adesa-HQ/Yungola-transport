import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { generateSEO } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateSEO({
  title: "Yungola Transport | Reliable Car Hire in Lagos",
  description:
    "Affordable car hire, bus rentals, and airport pickups in Lagos. Book your ride online with Yungola Transport.",
  keywords: [
    "car hire Lagos",
    "bus rental Lagos",
    "airport pickup Lagos",
    "Yungola Transport",
  ],
  url: "https://yungolatransport.com",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}