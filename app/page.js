import MissionVision from "@/components/about/MissionVision";
import ServiceSection from "@/components/about/ServiceSection";
import WhoWeServe from "@/components/about/WhoWeServe";
import { HeroSection } from "@/components/HeroSection";
import OperatingCities from "@/components/OperatingCities";
import VehiclesSection from "@/components/VehiclesSection";
import WhyChooseSection from "@/components/WhyChooseSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <OperatingCities />
      <VehiclesSection />
      <ServiceSection />
      <WhoWeServe />
      <WhyChooseSection />
    </>
  );
}
