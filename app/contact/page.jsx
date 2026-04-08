import ContactPageComponent from "@/components/page/ContactPageComponent";
import { generateSEO } from "@/lib/seo";

// Page-specific metadata
export const metadata = generateSEO({
  title: "Contact Yungola Transport | Car Hire Lagos",
  description:
    "Reach out to Yungola Transport to book a car hire, bus rental, or airport pickup in Lagos. Our team is ready to assist.",
  keywords: ["contact Yungola", "car hire Lagos", "bus rental Lagos", "airport pickup Lagos"],
  url: "https://yungolatransport.com/contact",
});

export default function Page() {
  return <ContactPageComponent />;
}