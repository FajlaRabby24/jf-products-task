import { BiNetworkChart } from "react-icons/bi";
import { BsPersonGear } from "react-icons/bs";
import { TbAward } from "react-icons/tb";
import Container from "../common/Container";

const WhyUsInfos = [
  {
    id: 1,
    title: `Unmatched Durability with Corrosion-Free Technology`,
    description:
      "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.",
    icon: TbAward,
  },
  {
    id: 2,
    title: `Customer-Centric Approach`,
    description:
      "At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.",
    icon: BsPersonGear,
    bgDark: true,
  },
  {
    id: 3,
    title: `Innovative and Diverse Product Range`,
    description:
      "We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.",
    icon: BiNetworkChart,
  },
];

const WhyUs = () => {
  return (
    <Container className="w-full py-12 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto  mb-8 md:mb-20">
        <h2 className="section-title mb-2">Why Us</h2>
        <p className="text-gray-600">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With a focus on quality and trust, we help secure
          spaces across industries and communities.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
        {WhyUsInfos.map((wu) => {
          const isBgDark = wu?.bgDark;
          return (
            <div
              key={wu.id}
              className={`${
                isBgDark
                  ? "bg-radial-[at_100%_-150%] from-info  to-neutral to-70% md:relative md:-mt-16 md:mb-10"
                  : "bg-radial-[at_100%_-100%] from-info from-30% to-secondary to-60%"
              } rounded-xl shadow-md p-6  hover:shadow-lg transition`}
            >
              <wu.icon size={40} color={isBgDark ? "#b0dd1d" : "black"} />
              <h3
                className={`${
                  isBgDark ? "text-white" : "text-black"
                } font-bold text-lg mb-4  mt-6`}
              >
                {wu.title}
              </h3>
              <p
                className={`${
                  isBgDark ? "text-white" : "text-gray-600"
                } text-sm`}
              >
                {wu.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Contact Button */}
      <div className="flex justify-center mt-10">
        <button className="btn btn-primary text-black rounded-full px-10">
          Contact Us
        </button>
      </div>
    </Container>
  );
};

export default WhyUs;
