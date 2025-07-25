import AboutSection from "@/components/layout/about-section";
import ContactSection from "@/components/layout/contact-section";
import Hero from "@/components/layout/hero";
import SkillsSection from "@/components/layout/skills-section";
import BeamsBackground from "@/components/ui/beam-background";

export default function Home() {
    return (
        <div>
            <BeamsBackground>
                <Hero />
                <AboutSection />
                <SkillsSection />
                <ContactSection />
            </BeamsBackground>
        </div>
    );
}
