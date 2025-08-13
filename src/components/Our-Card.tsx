import React from "react";
import NewCard from "./NewCard";
import ServiceCarousel from "./ServiceCarousel";
const dataType = [
  {
    Icons: "",
    Title: "Our Mission",
    Content:
      "Our mission is to provide a seamless, unified platform for bill payments, mobile recharges, and a wide range of utility services. We aim to simplify the technology for individuals and businesses by offering a one-stop solution that is fast, secure, and accessible.",
  },
  {
    Icons: "",
    Title: "Our Values",
    Content:
      "We believe in building trust with our users by providing transparent and secure financial services. We are committed to delivering top-quality services while upholding the highest standards of integrity and customer satisfaction.",
  },
  {
    Icons: "",
    Title: "Our Vision",
    Content:
      "Empowering seamless lifestyles through smart utility solutions and transformative travel experiences. We envision a world where essential services and exploration merge effortlessly, creating convenience, affordability, and unmatched accessibility for every journey and daily need.",
  },
  {
    Icons: "",
    Title: "Our Achievements",
    Content:
      "Since launching, we’ve helped countless users seamlessly pay bills, recharge mobile phones, and more—making their travel faster and simpler. Our platform has become the go-to solution for businesses and individuals, offering integrated, secure, and easy-to-use services.",
  },
];

const OurCard = () => {
  return (
    <>
     
      <div className="bg-[#f0f6ff]">
        <div className="text-center mb-10 ">
          <p className="text-xs tracking-widest text-gray-400 mb-3 uppercase">
            [ READY TO GET STARTED ]
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-b leading-snug">
            Empowering change, one step at <br /> a time.
          </h2>
        </div>
        <div className=" px-4  md:px-10 py-5  rounded-4xl">
          <div className="bg-[#0f172a] text-white px-4 py-8  md:py-16  md:px-10 rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex flex-col gap-10 w-full md:w-1/2">
                <ServiceCarousel />
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-start">
                <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight text-white">
                  Tired of paying high <br />
                  <span className="relative inline-block">
                    Card fees?
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"></span>
                  </span>
                </h2>
                <p className="text-sm text-gray-300 mb-6">
                  Join payments evolution with us. Accept bank payments that are
                  settled in seconds.
                </p>

                <button className="bg-[#7a5af8] hover:bg-[#6747e9] text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition duration-300">
                  Get in touch
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCard;
