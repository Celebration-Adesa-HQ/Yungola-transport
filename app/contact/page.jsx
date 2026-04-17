import ContactPageComponent from "@/components/page/ContactPageComponent";
import { generateSEO } from "@/lib/seo";

// Page-specific metadata
export const metadata = generateSEO({
  title: "Contact Yungola Transport | Vehicle Hire Purchase Support",
  description:
    "Contact Yungola Transport for vehicle hire purchase, ride-to-own options, repair financing, and customer support in Lagos and Ibadan.",
  keywords: [
    "contact Yungola Transport",
    "Yungola Transport Lagos",
    "Yungola Transport Ibadan",
    "vehicle hire purchase Nigeria",
    "hire purchase support Lagos",
    "ride to own car Nigeria",
    "CNG tricycle finance",
    "electric motorcycle finance",
    "vehicle repair financing Nigeria",
    "Youngola Group contact",
  ],
  url: "https://yungolatransport.com/contact",
  image: "https://yungolatransport.com/logo.png",
});

export default function Page() {
  return <ContactPageComponent />;
}
