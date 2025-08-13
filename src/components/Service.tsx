import React from "react";

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
    icon: "",
  },
  {
    title: "Robust Security Measures",
    content:
      "Implement stringent security protocols to safeguard sensitive data and ensure the confidentiality and integrity of transactions.",
    color: "border-orange-400",
    icon: "",
    id: "2",
  },
  {
    title: "Scalability and Flexibility",
    content:
      "Design services that can adapt to the evolving needs of clients and accommodate growth without compromising performance or efficiency.",
    color: "border-purple-400",
    icon: "",
    id: "3",
  },
  {
    title: "Comprehensive Compliance",
    content:
      "Adhere to regulatory standards and compliance requirements to maintain trust and credibility while ensuring the protection of clients’ assets.",
    color: "border-red-400",
    icon: "",
    id: "4",
  },
  {
    title: "Personalized Solutions",
    content:
      "Offer customizable solutions tailored to individual client needs, providing them with personalized experiences and maximizing the value delivered.",
    color: "border-blue-400",
    icon: "",
    id: "5",
  },
  {
    title: "Responsive Customer Support",
    content:
      "Provide timely and responsive customer support to address inquiries, resolve issues, and foster strong client relationships.",
    color: "border-yellow-400",
    icon: "",
    id: "6",
  },
];

const Service = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-black">
        Empower Your Finances:
      </h2>
      <p className="text-xl text-gray-700 mb-12">RioMoney at Your Service.</p>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={` border-2 text-white bg-[#0a0a0a] hover:bg-[#0a0a0a] hover:bg-[radial-gradient(circle_at_center,rgba(0,255,135,0.55)_0%,transparent_75%)]

    rounded-xl
    p-6



 shadow-md
            relative`}
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
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const hoverStyles = [
            "hover:bg-[#00ff87] hover:text-[#0a0a0a]", // bright green
            "hover:bg-[#ff0066] hover:text-white", // hot pink
            "hover:bg-[#ff9900] hover:text-[#0a0a0a]", // orange
            "hover:bg-[#0099ff] hover:text-white", // bright blue
            "hover:bg-[#cc00ff] hover:text-white", // purple
            "hover:bg-[#00e5ff] hover:text-[#0a0a0a]", // cyan
          ];

          return (
            <div
              key={service.id}
              className={`
          border-2 text-white bg-[#0a0a0a]
          rounded-xl p-6 shadow-md relative
          transition-all duration-300 ease-in-out
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
