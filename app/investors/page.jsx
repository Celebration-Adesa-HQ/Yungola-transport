import InvestorsPageComponent from "@/components/page/InvestorsPageComponent";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Invest With Yungola | Investor Relations Nigeria",
  description:
    "Partner with Yungola Transport to support vehicle financing and participate in an asset-backed transport business in Nigeria.",
  keywords: [
    "Yungola Transport investors",
    "vehicle financing Nigeria",
    "transport investment Nigeria",
    "asset-backed investments Lagos",
  ],
  url: "https://yungolatransport.com/investors",
});

export default function Page() {
  return <InvestorsPageComponent />;
}
