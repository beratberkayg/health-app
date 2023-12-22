import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { data } from "@/data/data";

const Swiper3 = () => {
  return (
    <Swiper
      grabCursor
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className=""
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
  );
};

export default Swiper3;
