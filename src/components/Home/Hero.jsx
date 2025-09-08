import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg1 from "../../assets/images/banner1.png";
import bannerImg2 from "../../assets/images/banner2.png";

const bannerContent = [
  {
    id: 1,
    image: bannerImg1,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 2,
    image: bannerImg2,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 3,
    image: bannerImg1,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 4,
    image: bannerImg2,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 5,
    image: bannerImg1,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 6,
    image: bannerImg2,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 7,
    image: bannerImg1,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 8,
    image: bannerImg2,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 9,
    image: bannerImg1,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 10,
    image: bannerImg2,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 11,
    image: bannerImg1,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
  {
    id: 12,
    image: bannerImg2,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
  },
];

const Hero = () => {
  return (
    <section>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 1.5 },
        }}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        className="relative"
        modules={[Autoplay, Pagination, Navigation]}
      >
        {bannerContent.map((content) => (
          <SwiperSlide key={content.id} className=" ">
            <div className="p-6 rounded-lg bg-secondary   gap-6 flex flex-col md:flex-row lg:items-center ">
              <div
                className="flex-2 p-6  rounded-3xl bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] 
             [background-size:8px_8px]"
              >
                <img
                  src={content.image}
                  alt={content.title + "image"}
                  className="w-full"
                />{" "}
              </div>
              <div className="flex-2 space-y-2">
                <h1 className="text-3xl lg:text-4xl font-semibold">
                  {content.title}
                </h1>
                <p className="text-md">{content.description}</p>
                <button className="btn btn-primary rounded-full px-10 mt-3 text-black">
                  Shop
                </button>
              </div>
              {/* navigation buttons  */}
            </div>
          </SwiperSlide>
        ))}
        <button className="prev-btn  p-2 rounded-full absolute left-[5%] md:left-[15%] z-20 top-1/2 bg-primary text-black cursor-pointer">
          <BsArrowLeft size={18} />
        </button>
        <button className="next-btn p-2 absolute top-1/2 right-[5%] md:right-[15%] z-20 rounded-full bg-primary text-black cursor-pointer">
          <BsArrowRight size={18} />
        </button>

        {/* Custom navigation buttons */}
      </Swiper>
    </section>
  );
};

export default Hero;
