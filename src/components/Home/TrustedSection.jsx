import { AiOutlineCar, AiOutlineSmile, AiOutlineStar } from "react-icons/ai";
import Container from "../common/Container";

const TrustedSection = () => {
  return (
    <Container className="w-full flex justify-center px-4 ">
      <div className="bg-radial-[at_50%_250%] from-info  to-neutral to-60% py-10 text-white w-full rounded-2xl space-y-12 shadow-lg p-8 md:p-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-center ">
          Trusted by over <span className="font-bold">6K+</span> customers
        </h2>

        {/* Grid Items */}
        <div className="flex items-center  md:justify-evenly flex-row flex-wrap gap-8 ">
          {/* Premium Products */}
          <div className="flex gap-4 items-center">
            <div className=" rounded-full bg-white p-2">
              <AiOutlineStar size={30} color="black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl">Premium</h3>
              <p className="text-md md:text-lg text-gray-200">Products</p>
            </div>
          </div>

          {/* Google Reviews */}
          <div className="flex gap-4 items-center">
            <div className=" rounded-full bg-white p-2">
              <AiOutlineSmile size={30} color="black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl">4000+</h3>
              <p className="text-md md:text-lg text-gray-200">Google Review</p>
            </div>
          </div>

          {/* Delivery */}
          <div className="flex gap-4 items-center">
            <div className=" rounded-full bg-white p-2">
              <AiOutlineCar size={30} color="black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl">Delivery</h3>
              <p className="text-md md:text-lg text-gray-200">Across India</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrustedSection;
