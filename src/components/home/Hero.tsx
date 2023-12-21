import React from "react";
import Swipe from "./Swiper";

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="h-[90px]"></div>
      <div className="flex flex-col justify-center items-center lg:text-[100px] text-[50px] font-medium ">
        <div>Kibarlı</div>
        <div>Doğal Sağlık</div>
      </div>
      <div>
        <Swipe />
      </div>
    </div>
  );
};

export default Hero;
