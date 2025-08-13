import terms from "../TermsAndCoditions/TermsData";

export default function TermsandConditions() {
  return (
    <div className="p-4 flex">
      <div className="bg-gray-200 flex flex-col sm:rounded-2xl shadow-lg p-9 space-y-10 w-full max-h-[85vh] overflow-y-auto">
        <section>
          <h1 className="text-3xl font-bold text-gray-800 border-b pb-3">
            Terms & Conditions
          </h1>
          {terms.map((term) => (
            <div key={term.id} className="space-y-2 mt-5">
              <h2 className="text-xl font-semibold text-gray-700">
                {term.title}
              </h2>
              {Array.isArray(term.content) ? (
                <ul className="list-disc pl-5 text-gray-600 sm:text-[1rem] text-[0.8rem]">
                  {term.content.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">{term.content}</p>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
