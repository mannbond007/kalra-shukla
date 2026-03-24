import { AboutSection } from "@/components/sections/about";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { ResultsSection } from "@/components/sections/results";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutSection />
      <ResultsSection />
      <WhyChooseUsSection />
    </div>
  );
}
