import { images } from "../../image-export/Images";

const Home = () => {
  return (
    <div className="bg-[#f0f6ff] overflow-hidden md:p-5 flex flex-col md:flex-row items-center justify-between w-full gap-4">
      <div className="w-full sm:w-[70%] md:w-[40%] p-4 sm:p-6 font-sans transition-all duration-500 ease-in-out">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight">
          <span className="text-[#133042] block w-full font-bold">
            Streamline Your Life:
          </span>

          <span className="relative inline-block group">
            <span className="text-black font-bold">
              Effortless Utility Bill Payments and Travel
            </span>
            <span className="absolute left-0 bottom-0 h-1 bg-black w-0 group-hover:w-full transition-all duration-500" />
          </span>
        </h1>

        <p className="text-gray-700 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
          Planning with <strong className="text-[#133042]">Money Care</strong> &
          our advanced technology and secure systems provide a safe and reliable
          way to transfer funds, allowing you to benefit from reduced processing
          times and improved efficiency.
        </p>

        <a href="#ABOUTUS">
          <button className=" font-boldmt-6 sm:mt-8 md:mt-10 px-5 py-2 sm:px-6 sm:py-3 bg-[#008c59] hover:bg-purple-700 text-white rounded-full font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1">
            Get started →
          </button>
        </a>
      </div>

      <div className="bg-[#f0f6ff] p-1 flex items-center justify-center w-full  md:w-[60%]">
        <div className="relative w-full">
          <div className="flex flex-row justify-center items-start gap-2 sm:gap-4  md:gap-10 mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center transition-shadow duration-300 hover:shadow-xl shadow-gray-400 w-full sm:w-auto">
              <img
                src={images.Credit}
                alt="Mike"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-contain"
              />
              <div className="mt-2 text-center  ">
                <p className="text-sm font-semibold ">Mike</p>
                <p className="text-xs text-gray-500 font-bold">Game Ninja</p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full sm:w-64 text-center transition-shadow duration-300 hover:shadow-xl shadow-gray-400">
              <img
                src={images.Money}
                alt="Controller"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto mb-2"
              />
              <div className="flex flex-col gap-2">
                <p className="text-gray-600 text-xs sm:text-sm font-medium">
                  PS 4 Controller
                </p>
                <p className="text-md sm:text-xl font-bold ">₹ 75.00</p>
                <button className="bg-gray-900 text-white px-2 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors">
                  PAY BY BANK
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-md w-full sm:w-40 text-center font-semibold transition-shadow duration-300 hover:shadow-xl shadow-gray-400">
              <p className="text-xs sm:text-sm font-semibold mb-3 ">
                Select your bank
              </p>
              <img
                src={images.MoneyStress}
                alt="Bank Logos"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 sm:gap-5 mt-8">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full sm:w-96 text-xs sm:text-sm transition-shadow duration-300 hover:shadow-xl shadow-gray-400">
              <p className="text-gray-700 mb-2 font-bold">Authorize payment</p>
              <div className="text-gray-500 space-y-1 ">
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
              <button className="mt-3 sm:mt-4 bg-gray-900 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors">
                CONFIRM
              </button>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full sm:w-52 flex flex-col items-center justify-center gap-3 sm:gap-4  transition-shadow duration-300 hover:shadow-xl shadow-gray-400">
              <img
                src={images.Payment}
                alt="Success"
                className="w-14 h-14 sm:w-16 sm:h-16 mb-1 sm:mb-2 object-contain"
              />
              <p className="text-xs sm:text-sm font-semibold text-center">
                Successful transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
