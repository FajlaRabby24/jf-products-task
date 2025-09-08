import AgriculturalProducts from "../components/Home/AgriculturalProducts";
import Hero from "../components/Home/Hero";
import LandscapeProducts from "../components/Home/LandscapeProducts";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <AgriculturalProducts />
      <LandscapeProducts />
    </div>
  );
};

export default HomePage;
