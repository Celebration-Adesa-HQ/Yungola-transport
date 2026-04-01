import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import OperatingCities from "@/components/OperatingCities";
import VehiclesSection from "@/components/VehiclesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import YoungolaWebsiteDesign from "@/components/YoungolaWebsiteDesign";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OperatingCities />
      <VehiclesSection />
      <WhyChooseSection />
      {/* <YoungolaWebsiteDesign /> */}
    </>
  );
}
