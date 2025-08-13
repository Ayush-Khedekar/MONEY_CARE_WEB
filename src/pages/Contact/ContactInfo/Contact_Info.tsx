import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Contact_Info = () => {
  const [contactInfoData, _setContactInfoData] = useState([
    {
      icons: <IoMdCall />,
      text: "+91 00000 00000 / 00000 00000",
      id: "1",
    },
    {
      icons: <IoMdMail />,
      text: "info@auronixs.com",
      id: "2",
    },
    {
      icons: <FaLocationDot />,
      text: "B-219,B-Wing,Plot No.-D-1,MIDC, Centrum Business Square, Road No. 16,Near Lotus IT Park, Wagle Estate , Thane (W),Maharashtra-400604, India",
      id: "3",
    },
  ]);

  return (
    <div className="h-full flex flex-col justify-between gap-8 p-6 md:p-8 bg-white rounded-2xl ">
      <div className="space-y-8">

      <h2 className="text-[1rem] md:text-3xl font-bold text-blue-800">
        Contact Information
      </h2>
      {contactInfoData.map((item) => (
        <div
          className="flex items-start gap-4 text-gray-700 text-base md:text-lg"
          key={item.id}
        >
          <span className="text-blue-600 text-2xl md:text-3xl">
            {item.icons}
          </span>
          <p className="font-medium leading-relaxed">{item.text}</p>
        </div>
      ))}
      </div>

      <div className="w-full flex gap-5 mt-auto text-xl">
        <FaLinkedin /> <FaTwitter /> <FaInstagram /> <FaFacebook />
      </div>
    </div>
  );
};

export default Contact_Info;
