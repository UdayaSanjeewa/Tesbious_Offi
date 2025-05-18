import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaLightbulb, FaInfoCircle } from "react-icons/fa"; // Example icons

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: { label: string; text: string }[];
}

const SolutionModal = ({
  isOpen,
  onClose,
  title,
  content,
}: SolutionModalProps) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowAnimation(true), 10);
    } else {
      setShowAnimation(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Image mapping (can be local or remote)
  const labelToImage: Record<string, string> = {
    Offer: "/images/PopUpCard/popup1.svg",
    Includes: "/images/PopUpCard/popup2.svg",
    Tools: "/images/PopUpCard/popup3.svg",
    Strategies: "/images/PopUpCard/popup4.svg",
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div
        className={`bg-[#6C63FF] rounded-2xl w-full max-w-[994px] max-h-[95vh] relative
        transform transition-all duration-700 ease-in-out
        ${
          showAnimation
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute font-bold right-4 top-4 sm:right-10 sm:top-[27px] text-white text-2xl"
        >
          &times;
        </button>

        <div className="pt-7 px-6 sm:px-10">
          <h2 className="text-white text-xl sm:text-[25px] lg:text-3xl font-semibold">
            {title}
          </h2>
        </div>

        <div className="mt-6 sm:mt-10 text-start bg-white rounded-2xl px-6 sm:px-10 py-6 max-h-[70vh] overflow-y-auto">
          {content.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start mb-4 sm:mb-6">
              <div className="flex flex-row h-auto items-center gap-3">
                {/* Image */}
                {labelToImage[item.label] ? (
                  <Image
                    src={labelToImage[item.label]}
                    alt={item.label}
                    width={100}
                    height={100}
                    className="w-12 h-12 xl:w-12 xl:h-12 mt-1"
                  />
                ) : (
                  <div className="w-6 h-6" />
                )}

                <div className="flex flex-col">
                  <span className="text-[#6C63FF] text-lg sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] font-semibold mb-1">
                    {item.label}
                  </span>
                  <p className="text-gray-700 text-base sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] font-normal">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;
