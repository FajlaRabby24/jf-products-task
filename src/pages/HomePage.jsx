import AgriculturalProducts from "../components/Home/AgriculturalProducts";
import Hero from "../components/Home/Hero";
import LandscapeProducts from "../components/Home/LandscapeProducts";
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
    </div>
  );
};

export default HomePage;
