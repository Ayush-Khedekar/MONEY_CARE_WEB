import { useState } from "react";
import { FaHouseUser, FaLinkedin } from "react-icons/fa";

// import { Link } from "react-router";
import FavLogo from "../Images/LOGO VARIATION 02.svg";

type dataType = {
  icons: React.ReactNode;
};

const Footer = () => {
  const [data, _setData] = useState<dataType[]>([
    { icons: <FaHouseUser /> },
    { icons: <FaLinkedin /> },
  ]);

  return (

    <div className="w-full relative bg-gradient-to-r from-blue-200 via-white to-gray-200 shadow-inner py-8 px-6 sm:px-12">
  <img
    src={FavLogo}
    alt="bgLogo"
    className="w-full h-40 opacity-55 object-contain mb-6 pointer-events-none select-none"
  />

  <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-6 sm:gap-0">
    <p className="font-semibold text-center text-gray-700 text-sm sm:text-base max-w-xl">
      © {new Date().getFullYear()} Auronix Payment Solutions Pvt. LTD. All rights reserved.
    </p>

    <div className="flex gap-6 text-2xl">
      {data.map((item, index) => (
        <button
          key={index}
          className="bg-white hover:bg-blue-600 transition-colors duration-300 p-3 rounded-full text-blue-800 hover:text-white shadow-md hover:shadow-lg"
          aria-label={`Social icon ${index + 1}`}
        >
          {item.icons}
        </button>
      ))}

    </div>
  </div>
</div>

  );
};

export default Footer;
