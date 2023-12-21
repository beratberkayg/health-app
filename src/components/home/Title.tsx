import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center gap-3 font-bold text-white text-center text-[80px] md:text-[100px] "
    >
      <h1 className=" text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
        Kibarlı
      </h1>
      <h1 className=" text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
        Doğal Sağlık
      </h1>
      <h1 className=" text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
        Ürünleri
      </h1>
    </motion.div>
  );
};

export default Title;
