import Privacy_Policy from "./Privacy_Policy/Privacy_policy";
import TermsandConditions from "./TermsAndCoditions/Terms_&_Conditions";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import "../../index.css";
type activeStateProp = {
  activePrivacy: boolean;
  activeTerms: boolean;
  termsActive: () => void;
  privacyActive: () => void;
  termsInActive: () => void;
  privacyInActive: () => void;
};
const User_Terms = ({
  activePrivacy,
  activeTerms,
  termsActive,
  privacyActive,
  termsInActive,
  privacyInActive,
}: activeStateProp) => {
  return (
    <div className="flex flex-col w-full bg-blue-50 relative overflow-x-hidden justify-center items-center pt-9 px-4 sm:px-10 ">
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-6">
        <button
          onClick={() => privacyActive()}
          type="button"
          className="cursor-pointer relative px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white bg-[#3357C7] rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition-all duration-200 overflow-hidden group"
        >
          <span className="relative z-10">📜 Show Privacy Policy</span>
          <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300"></span>
        </button>

        <button
          onClick={() => termsActive()}
          type="button"
          className="cursor-pointer relative px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white bg-[#32A26B] rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 active:scale-95 transition-all duration-200 overflow-hidden group"
        >
          <span className="relative z-10">📄 Show Terms & Conditions</span>
          <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300"></span>
        </button>
      </div>
      <AnimatePresence>
        {activePrivacy && (
          <motion.div
            key="privacy"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`w-full md:w-[50%] fixed left-0 top-0 z-50 bg-white rounded-xl shadow-xl p-5 sm:p-10 `}
          >
            {/* scrollable-element */}
            <button
              onClick={() => privacyInActive()}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 cursor-pointer"
            >
              <IoCloseSharp size={25} />
            </button>
              <Privacy_Policy />
          </motion.div>
        )}

        {activeTerms && (
          <motion.div
            key="terms"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed w-full md:w-[50%] right-0 overflow-y-auto top-0 z-50 bg-white rounded-2xl shadow-xl p-5 sm:p-10"
          >
            <button
              onClick={() => termsInActive()}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 cursor-pointer"
            >
              <IoCloseSharp size={25} />
            </button>
            <TermsandConditions />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default User_Terms;
