import ContactSection from "@/sections/ContactSection";
import CTASection from "@/sections/CTASection";
import SkillsSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/PricingSection";
import ExperienceSection from "@/sections/TestimonialSection";

export default function Page() {
    return (
        <>
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <CTASection />
            <ContactSection />
        </>
    );
}