import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import NavBarItems from "./NavBarItems";
import Navigations from "./Navigations";
import { images } from "../../image-export/Images";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [active, setActive] = useState("");

  function toggleDropDown() {
    setShowDropDown((prev) => !prev);
  }

  const handleScrollTo = (id: string) => {
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
    const el = document.getElementById(id);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setShowDropDown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-20 bg-white shadow-sm transition-shadow duration-300">
      <div className="flex relative justify-between items-center px-6 py-2 bg-white">
        <img
          src={images.LOGO}
          onClick={() => handleScrollTo("HOME")}
          className="lg:w-[15%] sm:w-[35%] w-[40%] md:w-[25%] cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <div className="flex gap-6 items-center">
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              <Navigations
                onLinkClick={handleScrollTo}
                activeSection={active}
              />
            </ul>
          </div>

          <div className="lg:hidden flex relative items-center">
            <button
              onClick={toggleDropDown}
              className="text-2xl flex cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              <RxHamburgerMenu />
            </button>
          </div>

          {/* Mobile Dropdown */}
          {showDropDown && (
            <div className="absolute z-20 top-0 right-0 w-[70%] sm:w-[60%] bg-white border-l border-gray-200 shadow-lg h-screen py-4 px-4 overflow-y-auto flex flex-col animate-slideIn">
              <button
                className="ml-auto text-[1.25rem] cursor-pointer hover:scale-110 transition-transform duration-200"
                onClick={() => setShowDropDown(false)}
              >
                <IoClose />
              </button>
              <NavBarItems
                onLinkClick={handleScrollTo}
                activeSection={active}
              />
            </div>
          )}

          <button className="relative p-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-orange-300 to-purple-500 bg-[length:200%_200%] animate-borderPulse">
            <div className="bg-white rounded-lg px-4 py-2 text-black text-sm font-medium hover:bg-gray-100 transition-colors">
              SIGN IN
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
