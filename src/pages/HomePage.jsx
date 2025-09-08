import AgriculturalProducts from "../components/Home/AgriculturalProducts";
import Hero from "../components/Home/Hero";

const HomePage = () => {
  return (
    <div className="space-y-32">
      <Hero />
      <AgriculturalProducts />
    </div>
  );
};

export default HomePage;
