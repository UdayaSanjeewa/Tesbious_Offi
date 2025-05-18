import { FaCheckCircle } from "react-icons/fa";

interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingPlansProps {
  sectionTitle: string;
  plans: Plan[];
}

const PricingPlans = ({ sectionTitle, plans }: PricingPlansProps) => {
  return (
    <section className="bg-white sm:mb-10 ">
      <div className="w-full flex items-center justify-center">
        <h2 className="text-[26px] w-[320px] sm:text-[60px] flex font-[600] text-center sm:w-[737px] mb-12">
          {sectionTitle}
        </h2>
      </div>

      <div className="flex justify-evenly flex-wrap gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col border w-[320px] h-[560px] sm:w-[380px] sm:h-[534px] rounded-2xl p-8 shadow-md ${
              plan.highlighted
                ? "bg-[#1C1C1E] text-white"
                : "bg-white text-[#1C1C1E]"
            }`}
          >
            <h3 className="text-[24px] font-[700]">{plan.name}</h3>
            <div className="font-[600] text-[60px]">${plan.price}</div>
            <p className="text-[15px] font-[400]">{plan.description}</p>

            <ul className="flex-1 space-y-3 text-left ml-2 mt-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaCheckCircle
                    className={`${
                      plan.highlighted ? "text-white" : "text-[#1C1C1E]"
                    }`}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto py-2 px-4 rounded-lg font-semibold transition ${
                plan.highlighted
                  ? "bg-white text-[#1C1C1E]"
                  : "bg-[#1C1C1E] text-white"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
