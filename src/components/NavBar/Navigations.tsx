import { motion } from "framer-motion"; // Ensure 'framer-motion' installed

type Props = {
  onLinkClick: (id: string) => void;
  activeSection?: string;
};

const navItems = [
  { id: "ABOUT US", label: "ABOUT US" },
  { id: "FEATURES", label: "FEATURES" },
  { id: "SOLUTIONS", label: "SOLUTIONS" },
  { id: "USER TERMS", label: "USER TERMS" },
  { id: "CONTACT", label: "CONTACT" },
];

const Navigations = ({ onLinkClick, activeSection }: Props) => {
  return (
    <>
      {navItems.map((item) => (
        <motion.li
          whileInView={{ opacity: 1, x: 10 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          key={item.id}
          className={`relative group list-none ${
            activeSection == item.id ? "font-bold text-[#000000]" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick(item.id);
          }}
        >
          <a
            href={`#${item.id}`}
            className={`flex flex-col items-start justify-between mx-2 md:text-[13px] pt-[5px] pb-[3px] text-[20px] xl:text-[18px] lg:text-[16px] 2xl:text-[20px] font-medium hover:text-[#00556a] font-[Poppins] relative
              ${activeSection === item.id ? "" : "text-[#000000]"}
              `}
          >
            {item.label}
          </a>
        </motion.li>
      ))}
    </>
  );
};

export default Navigations;
