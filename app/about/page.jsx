import AboutPageComponent from "@/components/page/AboutPageComponent ";
import { generateSEO } from "@/lib/seo";

// Page-specific metadata
export const metadata = generateSEO({
  title: "About Yungola Transport | Car Hire Lagos",
  description:
    "Learn about Yungola Transport, a leading car hire service in Lagos. Discover our mission, values, and commitment to providing reliable vehicle rental solutions.",
  keywords: [
    "about Yungola",
    "car hire Lagos",
    "vehicle rental Lagos",
    "Yungola mission",
  ],
  url: "https://yungolatransport.com/about",
});
export default function Page() {
  return <AboutPageComponent />;
}
