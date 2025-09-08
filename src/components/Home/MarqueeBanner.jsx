import Marquee from "react-fast-marquee";
import marqueeImg from "../../assets/images/marquee.png";
const marqueeInfos = [
  {
    id: 1,
    title: "Quality Product",
  },
  {
    id: 2,
    title: "Shipping Across India",
  },
  {
    id: 3,
    title: "Google Reviews",
  },
  {
    id: 4,
    title: "Quality Product",
  },
  {
    id: 5,
    title: "Shipping Across India",
  },
  {
    id: 6,
    title: "Google Reviews",
  },
];

const MarqueeBanner = () => {
  return (
    <Marquee className="bg-info border-y flex items-center  justify-between -rotate-2 py-4">
      {marqueeInfos.map((marquee) => (
        <div className="flex items-end mr-10   gap-6" key={marquee.id}>
          <img src={marqueeImg} alt="" />
          <h3 className="text-3xl font-semibold">{marquee.title}</h3>
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeBanner;
