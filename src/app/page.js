import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Identify from "@/components/Identify";
import AboutSection from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <WhyChooseUs />
                <Identify />
                <AboutSection />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFab />
        </>
    );
}
