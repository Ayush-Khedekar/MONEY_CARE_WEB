import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FaHandHoldingUsd } from "react-icons/fa";
// import { FaHeadset, FaRegHandshake } from "react-icons/fa6";
import { MdGppGood } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";

type servicetype = {
  title: string;
  content: string;
  icon: React.ReactNode;
  color?: string;
  id: string;
};
const services: servicetype[] = [
  {
    title: "Cutting-edge Technology",
    content:
      "Utilize state-of-the-art technology to offer innovative solutions that streamline bill pay processes and enhance user experience.",
    id: "1",
    icon: <IoMdSettings />,
  },
  {
    title: "Robust Security Measures",
    content:
      "Implement stringent security protocols to safeguard sensitive data and ensure the confidentiality and integrity of transactions.",
    color: "border-orange-400",
    icon: <FaHandHoldingUsd />,

    id: "2",
  },
  {
    title: "Scalability and Flexibility",
    content:
      "Design services that can adapt to the evolving needs of clients and accommodate growth without compromising performance or efficiency.",
    color: "border-purple-400",
    icon: <GiProgression  />,
    id: "3",
  },
  {
    title: "Comprehensive Compliance",
    content:
      "Adhere to regulatory standards and compliance requirements to maintain trust and credibility while ensuring the protection of clients’ assets.",
    color: "border-red-400",
    icon: <MdGppGood />,
    id: "4",
  },
  {
    title: "Personalized Solutions",
    content:
      "Offer customizable solutions tailored to individual client needs, providing them with personalized experiences and maximizing the value delivered.",
    color: "border-blue-400",
    icon: <RiHandHeartLine/>,
    id: "5",
  },
  {
    title: "Responsive Customer Support",
    content:
      "Provide timely and responsive customer support to address inquiries, resolve issues, and foster strong client relationships.",
    color: "border-yellow-400",
    icon: <BiSupport />,
    id: "6",
  },
];

const Service = () => {
  return (
    <div className="py-10 px-6 md:px-20 bg-[#f0f6ff] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#133042]">
        Empower Your Finances:
      </h2>
      <p className="text-[1rem] text-gray-700 mb-12">Money Care at Your Service.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const hoverStyles = [
            "hover:bg-[#00ff87] hover:text-[#0a0a0a] hover:shadow-[0_0_25px_#00ff87]",
            "hover:bg-[#ff0066] hover:text-white hover:shadow-[0_0_25px_#ff0066]",
            "hover:bg-[#ff9900] hover:text-[#0a0a0a] hover:shadow-[0_0_25px_#ff9900]",
            "hover:bg-[#0099ff] hover:text-white hover:shadow-[0_0_25px_#0099ff]",
            "hover:bg-[#cc00ff] hover:text-white hover:shadow-[0_0_25px_#cc00ff]",
            "hover:bg-[#00e5ff] hover:text-[#0a0a0a] hover:shadow-[0_0_25px_#00e5ff]",
          ];

          return (
            <div
              key={service.id}
              className={`
          border-2 border-transparent text-white bg-[#0a0a0a]
          rounded-xl p-6 shadow-md relative
          transition-all duration-300 ease-in-out
          transform hover:scale-[1.05]
          ${hoverStyles[index % hoverStyles.length]}
        `}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold mb-4 ${
                  service ? "bg-white text-black" : "bg-gray-100 text-black"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
