import SchedulePageComponent from "@/components/page/SchedulePageComponent";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Schedule a Visit | Yungola Transport",
  description:
    "Book an appointment to visit our Lagos office, inspect vehicles, and consult with our team about your preferred payment plan.",
  keywords: [
    "schedule appointment Lagos",
    "visit Yungola Transport",
    "book vehicle inspection",
    "Yungola Transport Lagos",
  ],
  url: "https://yungolatransport.com/schedule",
});

export default function SchedulePageWrapper() {
  return <SchedulePageComponent />;
}