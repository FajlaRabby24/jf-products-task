// ContactSection.tsx
import emailjs from "@emailjs/browser";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { toast } from "react-toastify";

import chennai from "../../assets/images/chennai.png";
import coimbatore from "../../assets/images/Coimbatore.png";
import Dhaka from "../../assets/images/Dhaka.png";
import goa from "../../assets/images/goa.png";
import hyderabad from "../../assets/images/hyderabad.png";
import kochi from "../../assets/images/kochi.png";
import Mumbai from "../../assets/images/Mumbai.png";

// Fix leaflet default marker issue
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Container from "../common/Container";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const branches = [
  {
    id: 0,
    name: "Dhaka",
    coords: [23.69805, 90.4571],
    address: "Rayerbag, Dhaka, Bangladesh",
    image: Dhaka,
  },
  {
    id: 1,
    name: "Coimbatore",
    coords: [11.0168, 76.9558],
    address: "Coimbatore Branch, Tamil Nadu",
    image: coimbatore,
  },
  {
    id: 2,
    name: "Chennai",
    coords: [13.0827, 80.2707],
    address: "Chennai Branch, Tamil Nadu",
    image: chennai,
  },
  {
    id: 3,
    name: "Hyderabad",
    coords: [17.385, 78.4867],
    address: "Hyderabad Branch, Telangana",
    image: hyderabad,
  },
  {
    id: 4,
    name: "Goa",
    coords: [15.2993, 74.124],
    address: "Goa Branch, India",
    image: goa,
  },
  {
    id: 5,
    name: "Kochi",
    coords: [9.9312, 76.2673],
    address: "Kochi Branch, Kerala",
    image: kochi,
  },
  {
    id: 6,
    name: "Mumbai",
    coords: [19.076, 72.8777],
    address: "Mumbai Branch, Maharashtra",
    image: Mumbai,
  },
];

const ContactSection = () => {
  const [activeBranch, setActiveBranch] = useState({});
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setActiveBranch(branches[0]);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = () => {
    if (!formRef.current) return;
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_emailjs_server_id,
        import.meta.env.VITE_emailjs_template_id,
        formRef.current,
        {
          publicKey: "15JZ_CaN9OaulYRHr",
        }
      )
      .then(
        () => {
          toast.success("Thanks for reaching out. I'll contact you soon!");
          reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast.error(`FAILED... ${error.text}`);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Container className="border border-[#cccccc8e]  rounded-2xl py-3 relative mb-40">
      <span className="text-lg font-medium absolute -top-6 left-1/2 -translate-x-1/2 text-center mb-6 bg-primary  py-2 px-5 rounded-full">
        Our Branches
      </span>

      <div className="xl:px-3  ">
        {/* Branch Tabs */}
        <div className="flex flex-wrap justify-center mt-12 gap-4 mb-6">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(branch)}
              className={`px-4 py-2 rounded-lg cursor-pointer border transition flex flex-col items-center justify-center ${
                activeBranch.id === branch.id
                  ? "bg-lime-100 "
                  : "bg-white border-gray-300 hover:bg-gray-100"
              }`}
            >
              <img
                className="min-h-8 max-h-8"
                src={branch.image}
                alt={branch.name + " image"}
              />
              {branch.name}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="bg-radial-[at_550%_550%] from-info to-neutral text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form
              ref={formRef}
              className="space-y-4"
              onSubmit={handleSubmit(sendEmail)}
            >
              <input
                type="text"
                placeholder="Your Name"
                {...register("user_name", { required: true })}
                className="input input-bordered w-full bg-[#1a4267] placeholder:text-white"
              />
              {errors.user_name && (
                <span className="text-red-300 text-sm">Name is required</span>
              )}

              <input
                type="email"
                placeholder="Your Email"
                {...register("user_email", { required: true })}
                className="input input-bordered w-full bg-[#1a4267] placeholder:text-white"
              />
              {errors.user_email && (
                <span className="text-red-300 text-sm">Email is required</span>
              )}

              <input
                type="text"
                placeholder="Phone (optional)"
                {...register("user_phone")}
                className="input input-bordered w-full bg-[#1a4267] placeholder:text-white"
              />

              <input
                type="text"
                placeholder="Subject"
                {...register("user_subject", { required: true })}
                className="input input-bordered w-full bg-[#1a4267] placeholder:text-white"
              />
              {errors.user_subject && (
                <span className="text-red-300 text-sm">
                  Subject is required
                </span>
              )}

              <textarea
                placeholder="Message..."
                {...register("message", { required: true })}
                className="textarea textarea-bordered w-full bg-[#1a4267] placeholder:text-white"
              ></textarea>
              {errors.message && (
                <span className="text-red-300 text-sm">
                  Message is required
                </span>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn w-full ${
                  isSubmitting ? "cursor-not-allowed" : ""
                } btn-primary text-black`}
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Send Email"
                )}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[300px] sm:h-[400px] md:h-auto w-full rounded-2xl overflow-hidden shadow-md">
            <MapContainer
              center={activeBranch.coords}
              zoom={13}
              scrollWheelZoom={true}
              className="h-full w-full"
              key={activeBranch.id}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={activeBranch.coords}>
                <Popup>{activeBranch.address}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
