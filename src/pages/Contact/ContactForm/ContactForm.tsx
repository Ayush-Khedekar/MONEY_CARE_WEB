import { useState } from "react";
import { motion } from "motion/react";

type contactType = {
  label: string;
  Placeholder: string;
  type: string;
  name: string;
  Val: string;
  id: string;
};

const ContactForm = () => {
  const [input, setInput] = useState<contactType[]>([
    {
      label: "Name",
      Placeholder: "Enter your Name",
      type: "text",
      name: "Name",
      Val: "",
      id: "1",
    },
    {
      label: "E-mail",
      Placeholder: "Enter your e-mail",
      type: "text",
      Val: "",
      name: "email",
      id: "2",
    },
    {
      label: "Message",
      Placeholder: "Write your message here",
      type: "text",
      Val: "",
      name: "message",
      id: "3",
    },
  ]);

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

  function valueHolder(
    id: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = e.target.value;
    const update = input.map((item) =>
      item.id == id ? { ...item, Val: value } : item
    );
    setInput(update);
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      className="flex flex-col gap-8 px-6 py-10 sm:p-10 bg-white rounded-3xl shadow-xl max-w-3xl mx-auto"
    >
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="text-[1.8rem] sm:text-[2.5rem] font-extrabold text-[#133042] text-center sm:text-left"
      >
        Contact Us
      </motion.h1>

      {input.map((item) => (
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <motion.label className="text-[1.1rem] sm:text-[1.25rem] text-gray-700 font-medium ml-1">
            {item.label}
          </motion.label>

          {item.name === "message" ? (
            <textarea
              className="w-full h-[180px] sm:h-[220px] resize-y max-h-[400px] px-5 py-4 text-base sm:text-lg bg-gray-50 text-gray-800 rounded-2xl 
                     border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all shadow-sm hover:shadow-md"
              placeholder={item.Placeholder}
              value={item.Val}
              name={item.name}
              onChange={(e) => valueHolder(item.id, e)}
            />
          ) : (
            <input
              type={item.type}
              placeholder={item.Placeholder}
              value={item.Val}
              name={item.name}
              onChange={(e) => valueHolder(item.id, e)}
              className="w-full px-5 py-3 text-base sm:text-lg bg-gray-50 text-gray-800 rounded-2xl 
                     border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all shadow-sm hover:shadow-md"
            />
          )}
        </motion.div>
      ))}

      <button
        type="button"
        className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl sm:text-xl text-lg px-6 py-3 sm:py-4 transition-all shadow-lg hover:shadow-xl"
      >
        Send Message
      </button>
    </motion.div>
  );
};

export default ContactForm;
