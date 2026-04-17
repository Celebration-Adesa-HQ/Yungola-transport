import InvestorsPageComponent from "@/components/page/InvestorsPageComponent";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Invest in Vehicle Financing | Yungola Transport Nigeria",
  description:
    "Invest with Yungola Transport and participate in an asset-backed vehicle financing business. Support hire purchase for tricycles, motorcycles, and cars while earning from Nigeria’s growing transport sector.",
  keywords: [
    "Yungola Transport investors",
    "invest in vehicle financing Nigeria",
    "transport investment Nigeria",
    "asset backed investment Nigeria",
    "hire purchase investment",
    "vehicle finance investment Lagos",
    "mobility investment Nigeria",
    "fleet investment Nigeria",
    "tricycle investment Lagos",
    "okada investment Nigeria",
    "ride hailing car investment",
    "Youngola Group investors",
  ],
  url: "https://yungolatransport.com/investors",
  image: "https://yungolatransport.com/logo.png",
});

export default function Page() {
  return <InvestorsPageComponent />;
}
