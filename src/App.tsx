// import Animation from "./components/ServiceCarousel";
import Home from "./components/NavBar/Home";
import Navbar from "./components/NavBar/Navbar";
import OurCard from "./components/Our-Card";
import Service from "./components/Service";
// import Money_Care from "./Money_Care";
import { useState } from "react";
import Solutions from "./pages/Solutions/Solutions";
import User_Terms from "./pages/User_Terms/User_Terms";
import Contact from "./pages/Contact/Contact";
import Footer from "./Footer/Footer";
// import Footer from "./Footer/Footer";

const App = () => {
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
      <Navbar />
      <section
        id="HOME"
        className={`${
          activePrivacy || activeTerms === true ? "blur-xs" : ""
        } bg-blue-50 py-4`}
      >
        <Home />
      </section>
      <section
        id="ABOUTUS"
        className={`${
          activePrivacy || activeTerms === true ? "blur-xs" : ""
        } w-full space-y-10 bg-blue-50 pb-4 pt-10`}
      >
        <OurCard />
      </section>
      <div
        id="FEATURES"
        className={`${activePrivacy || activeTerms === true ? "blur-xs" : ""}`}
      >
        <Service />
      </div>
      <div
        id="SOLUTIONS"
        className={`${activePrivacy || activeTerms === true ? "blur-xs" : ""}`}
      >
        <Solutions />
      </div>
      <section id="USER_TERMS">
        <User_Terms
          activePrivacy={activePrivacy}
          activeTerms={activeTerms}
          privacyActive={privacyActive}
          termsActive={termsActive}
          privacyInActive={privacyInActive}
          termsInActive={termsInActive}
        />
      </section>
      <section
        id="CONTACT"
        className={`${activePrivacy || activeTerms === true ? "blur-xs" : ""}`}
      >
        <Contact />
      </section>
      <section
        className={`${activePrivacy || activeTerms === true ? "blur-xs" : ""}`}
      >
        <Footer />
      </section>
    </>
  );
};

export default App;
