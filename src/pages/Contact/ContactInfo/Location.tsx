const Location = () => {
  return (
    <div className="flex flex-col md:flex-col bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full md:w-[100%] p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#133042] mb-4">
          Find Us at <span className="text-[#15683A]">Money_Care</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Visit our office at Centrum Business Square, Thane (W). We're here to
          help you make smart financial decisions, backed by the trust and care
          of <strong className="text-[#15683A]">Money_Care</strong>.
        </p>
      </div>

      <div className="w-full md:w-[100%] h-[250px] sm:h-[350px]">
        <iframe
          title="Money_Care Location"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Centrum%20Business%20Square,Road%20No.%2016,Wagle%20Estate,Thane%20west,maharashtra,India+(Money_Care)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
