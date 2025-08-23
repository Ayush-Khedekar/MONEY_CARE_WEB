import { useState } from "react";
import { FaHouseUser, FaLinkedin } from "react-icons/fa";

import FavLogo from "../image-export/favicon.svg";

type dataType = {
  icons: React.ReactNode;
  id: string;
};

const Footer = () => {
  const [data, _setData] = useState<dataType[]>([
    { icons: <FaHouseUser />, id: "1" },
    { icons: <FaLinkedin />, id: "2" },
  ]);

  return (
    <div className="w-full relative bg-gradient-to-r from-blue-200 via-white to-gray-200 shadow-inner py-8 px-6 sm:px-12">
      <img
        src={FavLogo}
        alt="bgLogo"
        className="w-full h-30 opacity-55 object-contain mb-2 pointer-events-none select-none"
      />

      <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-6 sm:gap-0">
        <p className="font-semibold text-center text-[#133042] text-sm sm:text-base max-w-xl">
          © {new Date().getFullYear()} MONEYCARE WALLET SERVICE Pvt. LTD. All
          rights reserved.
        </p>

        <div className="flex gap-6 text-2xl">
          {data.map((item) => (
            <a key={item.id} href={`${item.id === "1" ? "#HOME" : ""}`}>
              <button
                className="bg-white hover:bg-[#133042] transition-colors duration-300 p-3 rounded-full text-[#133042] hover:text-white shadow-md hover:shadow-lg"
                aria-label={`Social icon ${item.id + 1}`}
              >
                {item.icons}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
