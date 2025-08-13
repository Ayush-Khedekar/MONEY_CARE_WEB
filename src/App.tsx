import Animation from "./components/ServiceCarousel";
import Home from "./components/NavBar/Home";
import Navbar from "./components/NavBar/Navbar";
import OurCard from "./components/Our-Card";
import Service from "./components/Service";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <main className="">
        <section id="ABOUT US">
          <OurCard />
        </section>
        <section id="FEATURES">
          <Service />
        </section>
        <section id="SOLUTIONS"></section>
        <section id="USER TERMS"></section>
        <section id="CONTACT"></section>
      </main>
    </>
  );
};

export default App;
