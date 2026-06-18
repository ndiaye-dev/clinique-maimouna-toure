import { HeroSection } from "@/components/sections/hero-section";
import { AboutClinicSection } from "@/components/sections/about-clinic-section";
import { VideoSection } from "@/components/sections/video-section";
import { ServicesSection } from "@/components/sections/services-section";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { FaqSection } from "@/components/sections/faq-section";
import { TestimonialsLocationSection } from "@/components/sections/testimonials-location-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutClinicSection />
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <GallerySection />
      <VideoSection />
      <FaqSection />
      <TestimonialsLocationSection />
    </>
  );
}
