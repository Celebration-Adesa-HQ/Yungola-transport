import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { generateSEO } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateSEO({
  title: "Yungola Transport | Vehicle Hire Purchase in Lagos & Ibadan",
  description:
    "Own a CNG tricycle, electric motorcycle, or ride-hailing Corolla through flexible hire purchase plans in Lagos and Ibadan. Fast approval, affordable repayment, and repair finance support.",
  keywords: [
    "vehicle hire purchase Nigeria",
    "hire purchase Lagos",
    "hire purchase Ibadan",
    "CNG tricycle hire purchase",
    "keke hire purchase Lagos",
    "electric motorcycle hire purchase",
    "okada finance Nigeria",
    "ride to own car Lagos",
    "Corolla hire purchase",
    "transport vehicle financing",
    "vehicle finance Lagos",
    "vehicle finance Ibadan",
    "repair finance for vehicles",
    "Yungola Transport",
  ],
  url: "https://yungolatransport.com",
  image: "https://yungolatransport.com/logo.png",
});

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yungola Transport",
  alternateName: "Youngola Group",
  url: "https://yungolatransport.com",
  logo: "https://yungolatransport.com/logo.png",
  description:
    "Yungola Transport provides flexible hire purchase plans for CNG tricycles, electric motorcycles, and ride-hailing cars in Lagos and Ibadan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 75, Block 3B, Ogunnusi Road, Grammar School Bus Stop, Ojodu",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  areaServed: ["Lagos", "Ibadan"],
  sameAs: [
    "https://facebook.com/yungolatransport",
    "https://twitter.com/yungolatransport",
    "https://instagram.com/yungolatransport",
  ],
};

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Vehicle Hire Purchase and Transport Financing",
  name: "Yungola Transport Hire Purchase",
  provider: {
    "@type": "Organization",
    name: "Yungola Transport",
    url: "https://yungolatransport.com",
  },
  areaServed: ["Lagos", "Ibadan"],
  description:
    "Flexible hire purchase and ride-to-own plans for CNG tricycles, electric motorcycles, and Corolla ride-hailing cars, plus repair financing support.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Layout>{children}</Layout>
        <Analytics />
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
    </html>
  );
}