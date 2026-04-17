import HeroSection from "@/components/HeroSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import FeaturedProjects from "@/components/FeaturedProjects";
import InteractiveArchitecture from "@/components/InteractiveArchitecture";
import LiveDashboard from "@/components/LiveDashboard";
import SkillsTimeline from "@/components/SkillsTimeline";
import ContactSection from "@/components/ContactSection";

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ImpactMetrics />
      <FeaturedProjects />
      <InteractiveArchitecture />
      <LiveDashboard />
      <SkillsTimeline />
      <ContactSection />
    </main>
  );
}
