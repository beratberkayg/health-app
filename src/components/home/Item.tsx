import { dataType } from "@/types/type";

import React from "react";

import { motion } from "framer-motion";

const Item = ({ item }: { item: dataType }) => {
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: `${item.id * 0.25}` }}
      className="card bg-green-500 rounded-[8px] w-[300px] md:w-[47%] lg:w-[300px] lg:h-[400px] h-[400px] overflow-hidden relative  "
    >
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="card-inner">
        <img src={item.img} alt="" />
        <h2 className="text-center text-xl font-medium">{item.name}</h2>
      </div>
      <div className="absolute top-0 left-0 w-full h-full hover:shadow-lg hover:bg-white/30 hover:backdrop-blur opacity-0 hover:opacity-100 transition-all-opacity rounded-[8px] text-black flex flex-col justify-center items-center gap-10">
        <div className="text-3xl text-center">{item.name}</div>
        <div className="text-2xl text-center w-[90%]">{item.desc}</div>
        <div className="text-2xl text-center">Takviye Edici Gıda</div>
      </div>
    </motion.div>
  );
};

export default Item;
