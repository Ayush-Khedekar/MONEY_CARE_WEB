import { useState } from "react";
import { FaHouseUser, FaLinkedin } from "react-icons/fa";
import { images } from "../image-export/Images";

type dataType = {
  icons: React.ReactNode;
};

const Footer = () => {
  const [data, _setData] = useState<dataType[]>([
    { icons: <FaHouseUser /> },
    { icons: <FaLinkedin /> },
  ]);

  return (
    <div
      style={{ backgroundImage: `url(${images.LOGO}})` }}
      className="flex justify-between p-5 items-center relative"
    >
      <p className="font-medium">
        All rights reserve to Auronix Payment Solutions Pvt. LTD
      </p>
      <div className="flex gap-3">
        {data.map((item) => (
          <button className="bg-slate-300 p-3 rounded-full text-[#000080] cursor-pointer">
            {item.icons}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Footer;
