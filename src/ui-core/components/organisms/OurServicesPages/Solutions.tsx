import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import SolutionModal from "@/ui-core/components/molecules/OurServicesPage/SolutionModal";

interface Solution {
  title: string;
}

interface SolutionContentItem {
  label: string;
  text: string;
}

interface SolutionsProps {
  sectionTitle: string;
  solutions: Solution[];
  solutionContents: Record<string, SolutionContentItem[]>;
}

const Solutions = ({
  sectionTitle,
  solutions,
  solutionContents,
}: SolutionsProps) => {
  type SolutionTitle = keyof typeof solutionContents;
  const [selectedSolution, setSelectedSolution] =
    useState<SolutionTitle | null>(null);

  const openModal = (title: string) => {
    setSelectedSolution(title as SolutionTitle);
  };

  const closeModal = () => {
    setSelectedSolution(null);
  };

  return (
    <section className="sm:py-10 xl:py-20 xl:mb-[20px] flex flex-col items-center justify-center w-full px-4 bg-white text-center">
      <h2 className="text-[50px] font-[600] mb-12">{sectionTitle}</h2>

      <div className="xl:max-w-[1256px] md:w-[600px] lg:w-[1000px] sm:w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            onClick={() => openModal(solution.title)}
            className="group cursor-pointer flex items-center w-full h-[60px] pl-[20px] pr-[5px] justify-between border rounded-[12px] hover:shadow-md transition"
          >
            <span className="text-gray-700 font-medium">{solution.title}</span>
            <div className="w-[50px] h-[55px] rounded-lg group-hover:bg-[#6C63FF] group-hover:text-white flex justify-center text-[#374957] items-center transition duration-500">
              <FiExternalLink />
            </div>
          </div>
        ))}
      </div>
      <SolutionModal
        isOpen={!!selectedSolution}
        onClose={closeModal}
        title={selectedSolution || ""}
        content={selectedSolution ? solutionContents[selectedSolution] : []}
      />
    </section>
  );
};

export default Solutions;
