import { dataType } from "@/types/type";

import React from "react";

import { motion } from "framer-motion";

const Item = ({ item }: { item: dataType }) => {
  return (
    <motion.div
      initial={{ x: 500, y: 500, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      whileHover={{ scale: 1.04, rotate: 1, transition: { duration: 0.1 } }}
      transition={{ duration: `${item.id * 0.25}` }}
      className="card bg-green-400 rounded-[8px] w-[300px] md:w-[47%] lg:w-[300px] lg:h-[400px] h-[400px] overflow-hidden relative "
    >
      <div className="circle"></div>
      <div className="circle "></div>
      <div className="card-inner">
        <img src={item.img} alt="" />
        <h2 className="text-center text-xl font-medium">{item.name}</h2>
      </div>
    </motion.div>
  );
};

export default Item;
