import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import customer1 from "../../assets/images/customer1.jpg";
import customer2 from "../../assets/images/customer2.jpg";
import customer3 from "../../assets/images/customer3.jpg";
import customer4 from "../../assets/images/customer4.jpg";
import customer5 from "../../assets/images/customer5.jpg";

const testimonials = [
  {
    id: 1,
    name: "Samuel Varughese",
    comment:
      "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast (400ft). Value for money and easy to install. Happy with the product.",
    image: customer1,
  },
  {
    id: 2,
    name: "Anita Sharma",
    comment:
      "Amazing service! The team was super professional and the installation was quick and smooth. Highly recommend them.",
    image: customer2,
  },
  {
    id: 3,
    name: "David Johnson",
    comment:
      "Great experience overall. Product quality is excellent and support team was always available for help.",
    image: customer3,
  },
  {
    id: 4,
    name: "Carlo Ancolotti",
    comment:
      "Great experience overall. Product quality is excellent and support team was always available for help.",
    image: customer4,
  },
  {
    id: 5,
    name: "Fajla Rabby",
    comment:
      "Great experience overall. Product quality is excellent and support team was always available for help.",
    image: customer5,
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const testimonial = testimonials[current];

  return (
    <section className="max-w-5xl mx-auto px-3 py-10">
      <h2 className="section-title text-center mb-6">
        Why Customers Love ❤️ Us?
      </h2>

      <div className="flex flex-col-reverse sm:flex-row gap-4  items-stretch">
        {/* Left: Comment Box */}
        <div className="bg-secondary w-full md:w-2/3 flex flex-col justify-between rounded-xl p-3 sm:p-6 shadow-sm relative">
          <div>
            <FaQuoteLeft className="text-primary mb-4" size={40} />
            <p className="text-gray-700 text-lg md:text-xl font-medium mb-6">
              {testimonial.comment}
            </p>
          </div>

          <div
            className="flex justify-between items-center  bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] 
             [background-size:5px_5px] bg-white rounded-xl p-3 sm:p-5"
          >
            <span className="font-semibold text-xl md:text-2xl text-gray-900">
              – {testimonial.name}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2 border rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={next}
                className="p-2 border rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex  w-full md:w-1/3 bg-secondary  rounded-2xl justify-center p-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-2xl shadow-md  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
