import FinancePageComponent from "@/components/page/FinancePageComponent";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Repair Financing | Yungola Transport",
  description:
    "Get your vehicle repaired and pay in easy monthly instalments. Simple approval, flexible durations, competitive rates.",
  keywords: [
    "vehicle repair financing",
    "car repair loan",
    "motorcycle repair finance",
    "Yungola Transport",
  ],
  url: "https://yungolatransport.com/finance",
});
export default function Page() {
  return <FinancePageComponent />;
}
