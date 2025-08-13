import { data } from "../Privacy_Policy/privacyData";
import { generalData } from "../Privacy_Policy/privacyData";
import { personalData } from "../Privacy_Policy/privacyData";
import { cookiesData } from "../Privacy_Policy/privacyData";
import { ConsentData } from "../Privacy_Policy/privacyData";
import { communicationData } from "../Privacy_Policy/privacyData";
import { linkData } from "../Privacy_Policy/privacyData";
import { SecurityData } from "../Privacy_Policy/privacyData";
export type dataType = {
  label: string;
  id: string;
};

const Privacy_Policy = () => {
  return (
    <div className="p-4 flex">
      <div className="bg-gray-200 flex flex-col sm:rounded-2xl rounded-[10px] shadow-lg sm:p-9 p-6 space-y-10 w-full max-h-[85vh] overflow-y-auto">
        <section>
          <h1 className="sm:text-3xl text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">
            📜 Privacy Policy
          </h1>
          <ul className="space-y-4 text-gray-700 leading-relaxed sm:text-[1rem] text-[0.8rem]">
            {data.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.id === "4"
                    ? "bg-yellow-100 p-3 rounded-lg border border-yellow-200"
                    : ""
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-6">
            📌 General
          </h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            {generalData.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-6">
            🔒 Personal Information
          </h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            {personalData.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
            🍪 Cookies
          </h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            {cookiesData.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            🔗 Links to Other Sites
          </h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            {linkData.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-6">
            🛡️ Security
          </h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            {SecurityData.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-6">
            🤝 Consent
          </h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            {ConsentData.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-6">
            💬 Communication
          </h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            {communicationData.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Privacy_Policy;
