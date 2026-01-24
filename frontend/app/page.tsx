import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import TestimonialSection from "@/sections/TestimonialSection";
import CTASection from "@/sections/CTASection";
// import ContactSection from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CTASection />
      {/* <ContactSection /> */}
    </div>
  );
}
