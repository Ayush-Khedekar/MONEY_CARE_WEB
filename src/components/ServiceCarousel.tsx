import { motion } from "motion/react";

const cards = [
  {
    title: "Our Mission",
    content:
      "Our mission is to provide a seamless, unified platform for bill payments, mobile recharges, and a wide range of utility services.",
  },
  {
    title: "Our Values",
    content:
      "We believe in providing transparent and secure financial services, delivering top-quality experiences to our users.",
  },
  {
    title: "Our Vision",
    content:
      "Empowering seamless lifestyles through smart utility solutions and transformative travel experiences for all.",
  },
  {
    title: "Our Achievements",
    content:
      "Since launching, we’ve helped users seamlessly pay bills, recharge phones, and more – making life simpler and smarter.",
  },
];

const ServiceCarousel = () => {
  return ( 
    <div className="space-y-8">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center px-4"
        >
          <div className="bg-[#b7e3df] rounded-xl p-6 max-w-xl w-full shadow-xl">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <h3 className="text-lg font-semibold text-[#0b1320]">
                {card.title}
              </h3>
            </div>
            <p className="text-[#1f2d3d] text-sm">{card.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCarousel;
