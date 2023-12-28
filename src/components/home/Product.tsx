import React from "react";
import { motion } from "framer-motion";
import { data } from "@/data/data";
import Item from "./Item";
const Product = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-[100px] min-h-screen  rounded-lg flex flex-wrap gap-5 md:gap-9 justify-center"
    >
      {data.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </motion.div>
  );
};

export default Product;
