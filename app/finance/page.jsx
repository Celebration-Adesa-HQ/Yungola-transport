import FinancePageComponent from "@/components/page/FinancePageComponent";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Vehicle Repair Financing | Flexible Payment Plans in Lagos & Ibadan",
  description:
    "Access vehicle repair financing from Yungola Transport. Fix your tricycle, motorcycle, or car and repay with flexible instalments designed for transport operators in Lagos and Ibadan.",
  keywords: [
    "vehicle repair financing Nigeria",
    "car repair finance Lagos",
    "motorcycle repair finance Nigeria",
    "tricycle repair loan Lagos",
    "keke repair finance",
    "okada repair financing",
    "vehicle maintenance financing",
    "transport operator finance Nigeria",
    "repair now pay later Nigeria",
    "Yungola Transport",
    "Youngola Group",
  ],
  url: "https://yungolatransport.com/finance",
  image: "https://yungolatransport.com/logo.png",
});

export default function Page() {
  return <FinancePageComponent />;
}
