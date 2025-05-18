import { useRouter } from "next/navigation";
import MovingBallWithText from "../../molecules/HomePage/MovingBallWithText";
import BottomText from "../../molecules/ServicesPage/BottomText";

const BottomSection = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full  sm:bg-white flex flex-col items-center justify-center xl:pt-24 xl:mb-24">
        <BottomText />
        <div className="hidden sm:flex">
          <div className="pt-5 pb-10 xl:pt-20 group">
            <div className="flex sm:hidden">
              <MovingBallWithText
                xLength={10}
                routeLink="/Contact-Us"
                text="Contact Us"
                arrSize={10}
              />
            </div>

            <div className="hidden sm:flex md:hidden">
              <MovingBallWithText
                xLength={85}
                routeLink="/Our-Services"
                text="Contact Us"
                arrSize={10}
              />
            </div>
            <div className="hidden md:flex lg:hidden">
              <MovingBallWithText
                xLength={105}
                routeLink="/Our-Services"
                text="Contact Us"
                arrSize={10}
              />
            </div>
            <div className="hidden lg:flex xl:hidden">
              <MovingBallWithText
                xLength={110}
                routeLink="/Our-Services"
                text="Contact Us"
                arrSize={14}
              />
            </div>
            <div className="hidden xl:flex">
              <MovingBallWithText
                xLength={150}
                routeLink="/Our-Services"
                text="Contact Us"
              />
            </div>
          </div>
        </div>
        <button
          className="mt-6  h-[48px] p-2 sm:hidden mb-10 bg-black text-white rounded-full w-[165px] px-6 text-[18px] font-bold"
          onClick={() => {
            router.push("/Contact-Us");
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default BottomSection;
