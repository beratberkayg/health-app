import React from "react";
import Swipe from "./Swiper";
import Banner from "./Banner";
import Swiper3 from "./Swiper3";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full flex flex-col md:mt-8"
    >
      <div className="h-[110px] w-full"></div>
      <div className="w-full flex flex-col md:justify-center md:bg-green-400 md:py-5 rounded-xl ">
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
        <motion.div
          initial={{ opacity: 0, y: 600 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <Swiper3 />
        </motion.div>
      </div>
      <Banner />
    </motion.div>
  );
};

export default Hero;
