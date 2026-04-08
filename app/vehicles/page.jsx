import VehiclesPageComponent from "@/components/page/VehiclesPageComponent";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Our Vehicles | Yungola Transport",
  description:
    "Explore motorcycles, tricycles, and cars with flexible payment plans, clear pricing, and simple requirements.",
  keywords: [
    "Yungola Transport",
    "car hire Lagos",
    "motorcycle hire Lagos",
    "tricycle hire Lagos",
    "vehicle financing Lagos",
  ],
  url: "https://yungolatransport.com/vehicles",
});

export default function VehiclesPage() {
  return <VehiclesPageComponent />;
}