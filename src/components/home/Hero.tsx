import React from "react";
import Swipe from "./Swiper";
import Banner from "./Banner";
import Swiper3 from "./Swiper3";

const Hero = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[110px] w-full"></div>
      <div className="w-full flex flex-col md:justify-center md:bg-green-300 md:py-5 rounded-xl ">
        <div className=" w-full flex items-center justify-center flex-col md:flex-row gap-3 ">
          <h1 className="h-16 text-6xl text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
            Pendik
          </h1>
          <h1 className="h-16 text-6xl text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-green-600">
            Doğal Sağlık
          </h1>
        </div>
        <div className="md:hidden">
          <Swipe />
        </div>
        <div className="hidden md:block">
          <Swiper3 />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Hero;
