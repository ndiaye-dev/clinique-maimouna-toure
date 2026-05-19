import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutClinicSection } from "@/components/sections/about-clinic-section";
import { DoctorsSection } from "@/components/sections/doctors-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutClinicSection />
      <DoctorsSection />
    </>
  );
}
