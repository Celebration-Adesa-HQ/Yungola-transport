import SchedulePageComponent from "@/components/page/SchedulePageComponent";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Schedule a Visit | Vehicle Hire Purchase Consultation",
  description:
    "Book a visit to Yungola Transport to inspect vehicles and discuss flexible hire purchase plans for CNG tricycles, electric motorcycles, and ride-hailing cars in Lagos and Ibadan.",
  keywords: [
    "schedule visit Yungola Transport",
    "vehicle inspection Lagos",
    "hire purchase consultation Nigeria",
    "vehicle finance consultation Lagos",
    "book appointment vehicle finance",
    "CNG tricycle inspection Lagos",
    "electric motorcycle inspection",
    "ride to own car consultation",
    "Yungola Transport Lagos",
    "Yungola Transport Ibadan",
  ],
  url: "https://yungolatransport.com/schedule",
  image: "https://yungolatransport.com/logo.png",
});

export default function SchedulePageWrapper() {
  return <SchedulePageComponent />;
}
