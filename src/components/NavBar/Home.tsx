import { useEffect, useState } from "react";
import { images } from "../../image-export/Images";
import successor from "../../Images/confirmed-animation-gif-download-5359648.mp4";

const Home = () => {
  const [showGif, setShowGif] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="bg-[#f0f6ff] overflow-hidden md:p-5 flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
      <div className="w-full sm:w-full md:w-[50%] space-y-5 p-4 sm:p-6 font-sans transition-all duration-500 ease-in-out">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-bold leading-snug tracking-tight">
          <span className="text-[#133042] block w-full font-bold">
            Streamline Your Life:
          </span>

          <span className="relative inline-block group">
            <span className="text-[#15683A] font-bold">
              Effortless Utility Bill Payments and Travel
            </span>
            <span className="absolute left-0 bottom-0 h-1 bg-black w-0 group-hover:w-full transition-all duration-500" />
          </span>
        </h1>

        <p className="text-gray-700 mt-4 sm:mt-6 text-base sm:text-[0.9rem] md:text-[1.1rem] leading-relaxed">
          Planning with <strong className="text-[#15683A]">Money Care</strong> &
          our advanced technology and secure systems provide a safe and reliable
          way to transfer funds, allowing you to benefit from reduced processing
          times and improved efficiency.
        </p>

        <a href="#ABOUTUS">
          <button className=" font-boldmt-6 sm:mt-8 md:mt-10 px-5 py-2 sm:px-6 sm:py-3 bg-[#15683A] hover:bg-[#133042] text-white rounded-full font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointe">
            Get started →
          </button>
        </a>
      </div>

      <div className="bg-[#f0f6ff] p-1 flex items-center justify-center w-full md:w-[50%]">
        <div className="relative w-full">
          <div className="flex flex-row justify-center items-start gap-2 sm:gap-4 md:gap-5 mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center transition-shadow duration-300 hover:shadow-xl shadow-gray-400 w-full sm:w-auto">
              <img
                src={images.Credit}
                alt="Mike"
                className="w-25 sm:w-30 rounded-xl object-contain"
              />
              <div className="text-center">
                <button className="bg-gray-100 text-black px-2 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-colors">
                  Utility Payments
                </button>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full sm:w-56 text-center transition-shadow duration-300 hover:shadow-xl shadow-gray-400">
              <img
                src={images.Money}
                alt="Controller"
                className="w-30 sm:w-30 object-contain mx-auto mb-2"
              />
              <div className="flex flex-col gap-2">
                <button className="bg-gray-100 text-black px-2 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-colors">
                  Mobile Recharge
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-md w-full sm:w-auto text-center font-semibold transition-shadow duration-300 hover:shadow-xl shadow-gray-400">
              <img
                src={images.MoneyStress}
                alt="Bank Logos"
                className="w-25 sm:w-30 object-contain"
              />
              <button className="bg-gray-100 text-black px-2 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-colors">
                Tour & Travels
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-5 mt-8">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-[100%] sm:w-[50%] md:w-62 text-xs sm:text-sm transition-shadow duration-300 hover:shadow-xl shadow-gray-400 flex flex-col justify-start">
              {showGif ? (
                <video
                  src={successor}
                  autoPlay
                  onEnded={() => setShowGif(false)}
                  className="rounded-xl h-[10rem] md:h-[12rem] lg:h-[10rem]"
                />
              ) : (
                <>
                  <p className="text-gray-700 mb-2 text-[1rem] font-bold">
                    Authorize payment
                  </p>
                  <div className="text-gray-500 space-y-1 text-[0.9rem]">
                    <p>
                      <strong>Amount:</strong> ₹ 75.00
                    </p>
                    <p>
                      <strong>Recipient:</strong> PlaystationStore
                    </p>
                    <p>
                      <strong>Sort code:</strong> 98-76-54
                    </p>
                    <p>
                      <strong>Account number:</strong> 12956381
                    </p>
                  </div>
                  <button
                    onClick={() => setShowGif(true)}
                    className="mt-2 sm:mt-4 bg-gray-900 text-white px-4 py-2 rounded-full cursor-pointer text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    CONFIRM
                  </button>
                </>
              )}
            </div>
            <div className="bg-white p-6 sm:p-6 rounded-2xl shadow-md w-[100%] sm:w-[50%] flex flex-col items-center justify-center gap-3 sm:gap-4 transition-shadow duration-300 hover:shadow-xl shadow-gray-400">
              <img
                src={images.Payment}
                alt="Success"
                className="w-30 sm:w-20 mb-1 sm:mb-2 object-contain"
              />
              <button className="bg-gray-100 text-black px-2 sm:px-4 py-2 rounded-2xl text-md sm:text-sm font-medium transition-colors">
                Successful transactions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
