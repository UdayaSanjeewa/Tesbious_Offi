import OurServicesHero from "@/ui-core/components/molecules/OurServicesPage/OurServicesHero";


interface HeroSectionProps {
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  points,
  imageSrc,
}) => {
  return (
    <div className="mb-0 sm:mb-10">
      <OurServicesHero
        title={title}
        description={description}
        points={points}
        imageSrc={imageSrc}
      />
    </div>
  );
}

export default HeroSection;
