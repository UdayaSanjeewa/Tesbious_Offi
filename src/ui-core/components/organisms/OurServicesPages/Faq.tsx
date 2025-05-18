import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  sectionTitle: string;
  faqs: FaqItem[];
}

const Faq = ({ sectionTitle, faqs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center flex-col sm:mb-20 w-full items-center bg-white text-center">
      <h2 className= "text-[32px] sm:text-[40px]  xl:text-[60px] font-[600] m-10 sm:m-20">{sectionTitle}</h2>

      <div className="flex flex-col space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border w-[350px] sm:w-[500px] lg:w-[914px] rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="sm:w-full flex justify-between items-center p-4 text-left focus:outline-none"
            >
              <span className="text-[18px]  font-[400] w-[270px] sm:w-auto  lg:text-[22px] sm:font-[600] text-[#4A5151]">
                {faq.question}
              </span>
              <div
                className={`w-[39px] h-[39px] flex items-center justify-center ml-2 rounded-[36px] ${
                  openIndex === index ? "bg-[#4A5151]" : "bg-[#6C63FF]"
                }`}
              >
                <FaChevronDown
                  className={`text-white duration-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {openIndex === index && (
              <div className="pt-5 ml-5 pb-5 border-t-2 lg:w-[880px] text-start text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
