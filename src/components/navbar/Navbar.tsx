"use client";
import Logo from "./Logo";
import Switcher from "./Switch";
import Menu from "./Menu";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
      }}
      className="fixed flex justify-between items-center w-full px-1 md:px-0 md:w-[80%] lg:w-[70%] mt-5
     "
    >
      <Logo />
      <Switcher />
      <Menu />
    </motion.div>
  );
};

export default Navbar;
