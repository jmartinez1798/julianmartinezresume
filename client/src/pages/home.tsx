import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { TestimonialsSection } from "@/components/testimonials-section";
import { LoadingSpinner } from "@/components/loading-spinner";
import { FloatingActionButton } from "@/components/floating-action-button";
import { AIAssistantPopup } from "@/components/ai-assistant-popup";

export default function Home() {
  return (
    <>
      <LoadingSpinner />
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
        <FloatingActionButton />
        <AIAssistantPopup />
      </div>
    </>
  );
}
