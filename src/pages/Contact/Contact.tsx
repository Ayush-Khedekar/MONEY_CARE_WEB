import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Contact_Info from "./ContactInfo/Contact_Info";
import Location from "./ContactInfo/Location";
import { GrContactInfo } from "react-icons/gr";
import { SiGoogleforms } from "react-icons/si";
import logo from "../../Images/LOGO.svg";
import { motion } from "motion/react";
const Contact = () => {
  const [activeTab, setActiveTab] = useState(false);

  return (
    <div className="w-full space-y-10 flex flex-col items-center sm:p-8 bg-blue-50">
      <div className="flex flex-col items-center mt-3 text-center gap-5">
        <img src={logo} alt="logo" className="sm:w-[10%] w-[30%]" />
        <p className="sm:text-[1.3rem] font-semibold text-blue-800">
          We're here to assist you. Reach out to us for any inquiries or
          support.
        </p>
      </div>

      <div
        className="inline-flex rounded-2xl shadow-md p-4 bg-white"
        role="group"
      >
        <button
          onClick={() => setActiveTab(false)}
          type="button"
          className={`inline-flex gap-2 items-center px-6 py-3 text-base md:text-lg font-medium
      rounded-s-lg transition-all duration-200 ease-in-out
      ${
        activeTab === false
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-900 hover:bg-gray-500 hover:text-white"
      }
      focus:z-10 focus:outline-none`}
        >
          <GrContactInfo className="text-xl md:text-2xl" />
          Contact Info
        </button>

        <button
          onClick={() => setActiveTab(true)}
          type="button"
          className={`inline-flex gap-2 items-center px-6 py-3 text-base md:text-lg font-medium
      rounded-e-lg transition-all duration-200 ease-in-out
      ${
        activeTab === true
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-900 hover:bg-gray-500 hover:text-white"
      }
      focus:z-10 focus:outline-none`}
        >
          <SiGoogleforms className="text-xl md:text-2xl" />
          Contact Form
        </button>
      </div>
      {activeTab ? (
        <div className="w-full rounded-2xl">
          <ContactForm />
        </div>
      ) : (
        <div className="w-full md:flex justify-around sm:gap-6 grid gap-9 sm:pb-0 pb-1 overflow-hidden">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="shadow-md hover:scale-[1.03] hover:text-[#000080] bg-white "
          >
            <Contact_Info />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <Location />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Contact;
