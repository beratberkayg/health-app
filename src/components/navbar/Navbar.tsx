"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";
import Links from "./Links";
import { useRouter } from "next/router";

const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  useEffect(() => {
    navbarChange();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", navbarChange);

    return () => {
      window.removeEventListener("scroll", navbarChange);
    };
  }, []);

  function navbarChange() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  return (
    <motion.div
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
      }}
      className={`fixed  flex justify-between items-center w-full px-1 md:w-[80%] lg:w-[70%] mt-5 z-50    ${
        navbar
          ? "bg-green-500 -mt-1 py-2 px-2 rounded-b text-black"
          : "text-green-500 md:border-b md:border-blue-500 md:pb-2"
      }
     `}
    >
      <Link href={"/"} className="text-3xl cursor-pointer font-medium ">
        Doğal Sağlık
      </Link>
      <Links />
      <Hamburger />
    </motion.div>
  );
};

export default Navbar;
