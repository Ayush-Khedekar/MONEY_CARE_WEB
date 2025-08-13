import { useState } from "react";
import Footer from "./Footer/Footer";
import Contact from "./pages/Contact/Contact";
import User_Terms from "./pages/User_Terms/User_Terms";
import Solutions from "./pages/Solutions/Solutions";

const Money_Care = () => {
  const [activePrivacy, setActivePrivacy] = useState<boolean>(false);
  const [activeTerms, setActiveTerms] = useState<boolean>(false);

  function privacyActive() {
    setActivePrivacy(true);
  }

  function termsActive() {
    setActiveTerms(true);
  }

  function privacyInActive() {
    setActivePrivacy(false);
  }
  function termsInActive() {
    setActiveTerms(false);
  }
  return (
    <>
      <div
        className={`${activePrivacy || activeTerms === true ? "blur-xs" : ""}`}
      >
        <Solutions />
      </div>
      <User_Terms
        activePrivacy={activePrivacy}
        activeTerms={activeTerms}
        privacyActive={privacyActive}
        termsActive={termsActive}
        privacyInActive={privacyInActive}
        termsInActive={termsInActive}
      />
      <div
        className={`${activePrivacy || activeTerms === true ? "blur-xs" : ""}`}
      >
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Money_Care;
