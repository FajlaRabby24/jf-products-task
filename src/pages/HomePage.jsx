import AgriculturalProducts from "../components/Home/AgriculturalProducts";
import Hero from "../components/Home/Hero";
import LandscapeProducts from "../components/Home/LandscapeProducts";
import TrustedSection from "../components/Home/TrustedSection";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <AgriculturalProducts />
      <LandscapeProducts />
      <TrustedSection />
    </div>
  );
};

export default HomePage;
