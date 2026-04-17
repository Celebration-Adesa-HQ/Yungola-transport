import VehiclesPageComponent from "@/components/page/VehiclesPageComponent";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Our Vehicles | CNG Tricycles, Electric Motorcycles & Cars",
  description:
    "Explore Yungola Transport vehicles available on flexible hire purchase plans, including CNG tricycles, electric motorcycles, and ride-hailing cars in Lagos and Ibadan.",
  keywords: [
    "Yungola Transport",
    "Youngola Group",
    "vehicles hire purchase Nigeria",
    "CNG tricycle hire purchase",
    "keke hire purchase Lagos",
    "electric motorcycle hire purchase",
    "okada finance Nigeria",
    "ride to own car Lagos",
    "Corolla hire purchase",
    "vehicle financing Lagos",
    "vehicle financing Ibadan",
    "transport vehicles Nigeria",
  ],
  url: "https://yungolatransport.com/vehicles",
  image: "https://yungolatransport.com/logo.png",
});

export default function VehiclesPage() {
  return <VehiclesPageComponent />;
}
