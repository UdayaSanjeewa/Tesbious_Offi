// import ParallaxImage from "/public/images/TesbiousBg.png";
// // bg-[url(/images/Tesbiousbg.png)]

// const Parallax = () => {
//   return (
//     <div
//       className="
//         bg-[url(/images/Tesbiousbg.png)]
//         bg-fixed
//         bg-center
//         bg-no-repeat
//         bg-[#E2E2E2]
//         w-full
//         sm:bg-[position:60%_12%]
//         xl:bg-[position: 100%_12%]

//         h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[700px] 2xl:h-[900px]
//         bg-[length:120%] sm:bg-[length:80%] md:bg-[length:90%] lg:bg-[length:85%] xl:bg-[length:90%] 2xl:bg-[length:80%]
//       "
//     ></div>
//   );
// };

// export default Parallax;

import ParallaxImage from "/public/images/TesbiousBg.png";

const Parallax = () => {
  return (
    <div
      className={`
        bg-fixed
        bg-center
        bg-no-repeat
        bg-[#E2E2E2]
        w-full
        sm:bg-[position:60%_12%]
        xl:bg-[position: 100%_12%]

        h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[700px] 2xl:h-[900px]
        bg-[length:120%] sm:bg-[length:80%] md:bg-[length:90%] lg:bg-[length:85%] xl:bg-[length:90%] 2xl:bg-[length:80%]
      `}
      style={{
        backgroundImage: `url(${ParallaxImage.src})`,
      }}
    ></div>
  );
};

export default Parallax;
