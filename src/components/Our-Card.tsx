
import ServiceCarousel from "./ServiceCarousel";


const OurCard = () => {
  return (
    <>
      <div className="text-center bg-blue-50">
        <p className="text-[1rem] tracking-widest text-[#133042] uppercase">
          [ READY TO GET STARTED ]
        </p>
        <h2 className="text-3xl sm:text-4xl text-[#133042] leading-snug font-bold">
          Empowering change, one step at <br /> a time.
        </h2>
      </div>
      <div className=" px-4 md:px-10 rounded-4xl bg-blue-50">
        <div className="bg-[#0f172a] text-white px-4 py-8  md:py-16  md:px-10 rounded-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col gap-10 w-full md:w-1/2">
              <ServiceCarousel />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight text-white">
                Tired of paying high <br />
                <span className="relative inline-block">
                  Card fees?
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"></span>
                </span>
              </h2>
              <p className="text-sm text-gray-300 mb-6">
                Join payments evolution with us. Accept bank payments that are
                settled in seconds.
              </p>

              <a href="#CONTACT"><button className="bg-[#7a5af8] hover:bg-[#6747e9] text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition duration-300">
                Get in touch
                <span className="text-lg">→</span>
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCard;
