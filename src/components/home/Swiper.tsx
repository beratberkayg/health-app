import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { data } from "@/data/data";
import { motion } from "framer-motion";
const Swipe = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative -top-10 md:top-0"
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        grabCursor
        className="w-[300px] md:w-[350px] lg:w-[400px] rounded-xl  flex items-center justify-center"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center ">
            <motion.img
              whileHover={{ scale: 1.3 }}
              className="w-96 h-96"
              src={item.img}
              alt={item.name}
            />
          </SwiperSlide>
        ))}

        <div className=" w-72 h-72 rounded-full absolute  -z-50 bg-green-400 left-[3%] bottom-12"></div>
      </Swiper>
    </motion.div>
  );
};

export default Swipe;
