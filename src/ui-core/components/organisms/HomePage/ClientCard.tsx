import React from "react";
import Slider from "react-slick";
import Avatar from "../../atoms/Avatar";
import ClientInfo from "../../molecules/HomePage/ClientInfo";
import ClientContent from "../../molecules/HomePage/ClientContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const comments = [
  {
    BadgeNum: "1",
    name: "Lorem Ipsum",
    location: "From USA",
    avatarSrc: "/images/man.jpeg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat sollicitudin tortor. Sed mauris augue, consectetur eu felis hendrerit, sollicitudin.",
  },
  {
    BadgeNum: "2",
    name: "Lorem Ipsum",
    location: "From USA",
    avatarSrc: "/images/man.jpeg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat sollicitudin tortor. Sed mauris augue, consectetur eu felis hendrerit, sollicitudin.",
  },
  {
    BadgeNum: "3",
    name: "Lorem Ipsum",
    location: "From USA",
    avatarSrc: "/images/man.jpeg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat sollicitudin tortor. Sed mauris augue, consectetur eu felis hendrerit, sollicitudin.",
  },
];

interface ClientCardProps {
  bgColour: string;
  textColour: string;
  borderCol: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ bgColour, borderCol, textColour }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className={`relative bg-[${bgColour}] w-full sm:h-[500px] lg:h-[700px] xl:h-[843px]`}>
      <div className="absolute inset-0 bg-[url('/images/polygonBG.svg')] bg-cover bg-center opacity-20 z-0"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex sm:gap-5 md:gap-8 xl:gap-10 items-center">
          <div className="text-center">
            <Avatar
              src={"/images/man.jpeg"}
              alt={"man"}
              className="sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[370px] xl:w-[401px] xl:h-[558px] object-cover rounded-[12px] shadow-xl"
            />
          </div>

          <div className="w-auto xl:h-[600px] xl:w-[740px]">
            <h2 className={`${textColour} sm:text-[25px] sm:w-[300px] lg:text-[40px] lg:w-[600px] xl:w-auto xl:text-[60px] font-[600]`}>
              Some Of Our Respected Happy Clients Says
            </h2>

            <div className="xl:w-[740px] overflow-hidden">
              <Slider {...settings} className="sm:w-[340px] lg:w-[550px] xl:w-[840px]">
                {comments.map((comment, index) => (
                  <div key={index} className=" xl:w-[500px] xl:h-[400px]">
                    <ClientContent borderCol={borderCol} quote={comment.quote} />
                    <ClientInfo
                      textColour={textColour}
                      BadgeNum={comment.BadgeNum}
                      name={comment.name}
                      location={comment.location}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
