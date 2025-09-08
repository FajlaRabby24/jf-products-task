import AgriculturalProducts from "../components/Home/AgriculturalProducts";
import ContactSection from "../components/Home/ContactSection";
import Hero from "../components/Home/Hero";
import LandscapeProducts from "../components/Home/LandscapeProducts";
import MarqueeBanner from "../components/Home/MarqueeBanner";
import TestimonialSection from "../components/Home/TestimonialSection";
import TrustedSection from "../components/Home/TrustedSection";
import WhyUs from "../components/Home/WhyUs";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <AgriculturalProducts />
      <LandscapeProducts />
      <TrustedSection />
      <WhyUs />
      <MarqueeBanner />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
