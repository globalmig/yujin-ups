import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/common/StatsBar";
import WhyUsSection from "@/components/home/WhyUsSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import StrengthContactSection from "@/components/common/StrengthContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhyUsSection />
      <SolutionsSection />
      <ProjectsSection />
      <StrengthContactSection />
    </>
  );
}
