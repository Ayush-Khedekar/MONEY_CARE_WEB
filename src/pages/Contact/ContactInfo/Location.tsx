const Location = () => {
  return (
    <div className="flex flex-col md:flex-col bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full md:w-[100%] p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#133042] mb-4">
          Find Us at <span className="text-[#15683A]">Money_Care</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Visit our office at panalal compound, Bhandup (W). We're here to help
          you make smart financial decisions, backed by the trust and care of{" "}
          <strong className="text-[#15683A]">Money_Care</strong>.
        </p>
      </div>

      <div className="w-full md:w-[100%] h-[250px] sm:h-[350px]">
        <iframe
          title="Money_Care Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.9343976494047!2d72.93577490000001!3d19.154348700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b86673253dd9%3A0x950775382663a34a!2sPannalal%20Complex!5e0!3m2!1sen!2sin!4v1755772821322!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
        {/* src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.9343976494047!2d72.93577490000001!3d19.154348700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b86673253dd9%3A0x950775382663a34a!2sPannalal%20Complex!5e0!3m2!1sen!2sin!4v1755772821322!5m2!1sen!2sin"  */}
      </div>
    </div>
  );
};

export default Location;
