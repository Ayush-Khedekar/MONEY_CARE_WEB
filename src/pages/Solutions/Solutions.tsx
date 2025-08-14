import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { MdOutlineSecurity, MdTravelExplore } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import {
  TbCalendarDollar,
  TbSettingsAutomation,
  TbShieldDollar,
} from "react-icons/tb";
import { motion } from "motion/react";

type solutionsType = {
  icons: React.ReactNode;
  text: string;
  id: string;
};

const Solutions = () => {
  const solutionData: solutionsType[] = [
    {
      icons: <TbCalendarDollar />,
      text: "Utility Payments",
      id: "1",
    },
    {
      icons: <TbShieldDollar />,
      text: "Secure Bill Payments",
      id: "2",
    },
    {
      icons: <FaPersonWalkingLuggage />,
      text: "Tour & Travels and many more..",
      id: "3",
    },
  ];
  const solutions: solutionsType[] = [
    { icons: <RiSecurePaymentLine size={50} />, text: "Payments", id: "1" },
    { icons: <MdOutlineSecurity size={50} />, text: "Secure", id: "2" },
    { icons: <MdTravelExplore size={50} />, text: "Tour", id: "3" },
    { icons: <TbSettingsAutomation size={50} />, text: "Automation", id: "4" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <div className="w-full bg-blue-50 py-5 px-4 sm:px-5 lg:px-5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#133042] leading-snug">
            Revolutionizing Utility Bill Payments and Travel Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            With advanced automation and ironclad security, it's the ultimate
            choice for fintech teams aiming for seamless operations and
            fortified protection.
          </p>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {solutionData.map((item) => (
              <motion.li
                variants={itemVariants}
                key={item.id}
                className="flex text-[#15683A] font-medium items-center gap-3"
              >
                <span className="bg-[#133042] rounded-full p-2 text-white text-xl">
                  {item.icons}
                </span>
                {item.text}
              </motion.li>
            ))}
          </motion.ul>

          <a href="#CONTACT">
            <button className="mt-6 px-6 cursor-pointer py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              TRY IT NOW
            </button>
          </a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {solutions.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.id}
              className="bg-white hover:bg-[#133042] hover:text-white font-semibold p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
            >
              <span className="w-20 h-12 flex items-center justify-center">
                {item.icons}
              </span>
              <span className="text-sm ">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;
