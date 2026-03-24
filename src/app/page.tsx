import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { CoursesSection } from "@/components/sections/courses";
import { ResultsSection } from "@/components/sections/results";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ResultsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
