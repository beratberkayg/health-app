"use client";
import Logo from "./Logo";
import Switcher from "./Switch";
import Menu from "./Menu";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";
import Links from "./Links";
const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  function navbarChange() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  useEffect(() => {
    navbarChange();
  }, []);
  window.addEventListener("scroll", navbarChange);
  return (
    <motion.div
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
      }}
      className={`fixed flex justify-between items-center w-full px-1 md:w-[80%] lg:w-[70%] mt-5 z-50  ${
        navbar ? "bg-green-500 mt-0 py-1 px-2 rounded-b-md" : ""
      }
     `}
    >
      <Link href={"/"} className="text-3xl cursor-pointer">
        Doğal Sağlık
      </Link>
      <Links />
      <Hamburger />
    </motion.div>
  );
};

export default Navbar;
