import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/common/StatsBar";
import CapacityLineupSection from "@/components/home/CapacityLineupSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import StrengthContactSection from "@/components/common/StrengthContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <CapacityLineupSection />
      <ProjectsSection />
      <SolutionsSection />
      <WhyUsSection />
      <StrengthContactSection />
    </>
  );
}
