import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { data } from "@/data/data";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
              className=" "
              src={item.img}
              alt={item.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Hero;
