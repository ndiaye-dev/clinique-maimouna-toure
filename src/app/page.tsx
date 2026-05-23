import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutClinicSection } from "@/components/sections/about-clinic-section";
import { TestimonialsLocationSection } from "@/components/sections/testimonials-location-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutClinicSection />
      <ServicesSection />
      <TestimonialsLocationSection />
    </>
  );
}
