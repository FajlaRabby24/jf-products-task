import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Container from "../common/Container";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <div>
      <div className="bg-radial-[at_550%_550%] from-info to-neutral text-white px-3  py-10 rounded-xl">
        <Container className="flex items-start flex-col md:flex-row justify-between   gap-10">
          {/* Left Section - Newsletter */}
          <div className="col-span-4">
            <h2 className="text-2xl font-semibold">Join Our JF Products</h2>
            <p className="text-md text-gray-300 mt-2">
              We’ll tell you about store updates and discounts
            </p>

            <div className="mt-6 ">
              <input
                type="email"
                placeholder="Enter you email.."
                name="email"
                className="input input-bordered w-full bg-[#1a4267] placeholder:text-white"
              />
              <div className="flex items-center mt-4 mb-5 gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span className="text-sm text-gray-300">
                  Yes, subscribe me to your newsletter.
                </span>
              </div>
              <button className="btn btn-block mt-4 rounded-full bg-white text-black hover:bg-gray-200">
                Join Now
              </button>
            </div>
          </div>

          {/* Middle Section - Information */}
          <div className="flex col-span-4 flex-col  space-y-3">
            <h2 className="text-2xl font-semibold">Information</h2>
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Shop
            </a>
            <a href="#" className="hover:underline">
              Our Story
            </a>
            <a href="#" className="hover:underline">
              Blogs
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>

          {/* Right Section - Helpful */}
          <div className="flex col-span-4 flex-col space-y-3">
            <h2 className="text-2xl font-semibold">Helpful</h2>
            <a href="#" className="hover:underline">
              FAQs
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Shipping Policy
            </a>
            <a href="#" className="hover:underline">
              My Account
            </a>
          </div>
        </Container>

        <Container className="flex sm:items-center flex-col gap-4 sm:flex-row justify-between mt-8">
          <div className="flex items-center gap-3 mt-8">
            <Logo />
            <div>
              <h3 className="font-semibold">Our Branches</h3>
              <p className="text-sm text-gray-300">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>
          <button className="btn btn-primary rounded-full px-7 text-black">
            Contact Us
          </button>
        </Container>
      </div>

      {/* Bottom Section */}
      <Container className=" py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-md text-center sm:text-lg">
          Copyright © 2025 JF Products. All rights reserved
        </p>
        <div className="flex items-center  gap-3">
          <a
            className=" p-2 rounded-full bg-neutral"
            target="_blank"
            href="https://github.com/FajlaRabby24"
          >
            <FaGithub size={25} color="white" />
          </a>
          <a
            className=" p-2 rounded-full bg-neutral"
            target="_blank"
            href="https://www.linkedin.com/in/FajlaRabby24"
          >
            <FaLinkedin size={20} color="white" />
          </a>
          <a
            className=" p-2 rounded-full bg-neutral"
            target="_blank"
            href="https://x.com/FajlaRabby24"
          >
            <FaX size={20} color="white" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
