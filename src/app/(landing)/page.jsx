import AboutMe from "./_components/about-me";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import HeroBanner from "./_components/hero-banner";
import Skills from "./_components/skills";
import Testimonials from "./_components/testimonials";

export default function Home() {
    return (
        <div>
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}
