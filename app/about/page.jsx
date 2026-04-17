import AboutPageComponent from "@/components/page/AboutPageComponent ";
import { generateSEO } from "@/lib/seo";

// Page-specific metadata
export const metadata = generateSEO({
  title: "About Yungola Transport | Vehicle Hire Purchase & Financing",
  description:
    "Learn about Yungola Transport and our mission to make vehicle ownership accessible through flexible hire purchase plans for tricycles, motorcycles, and cars in Lagos and Ibadan.",
  keywords: [
    "about Yungola Transport",
    "Youngola Group",
    "vehicle hire purchase Nigeria",
    "transport financing company Nigeria",
    "hire purchase Lagos",
    "hire purchase Ibadan",
    "vehicle ownership Nigeria",
    "CNG tricycle finance",
    "electric motorcycle finance",
    "ride to own car Nigeria",
  ],
  url: "https://yungolatransport.com/about",
  image: "https://yungolatransport.com/logo.png",
});

export default function Page() {
  return <AboutPageComponent />;
}
