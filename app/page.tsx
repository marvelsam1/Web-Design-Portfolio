import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";
import { StatsSection } from "./components/StatsSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { WorkSection } from "./components/WorkSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navigation />
      <main className="relative overflow-hidden">
        <HeroSection />
        <WorkSection />
        <StatsSection />
        <TestimonialSection />
        <FooterSection />
      </main>
    </div>
  );
}
