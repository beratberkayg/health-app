"use client";

import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import Link from "next/link";
import { SiteContext } from "@/context/siteContext";
const Hamburger = () => {
  const val = useContext(SiteContext);

  return (
    <div className="md:hidden">
      <input
        onClick={() => val?.setToogle(!val.toogle)}
        type="checkbox"
        id="checkbox"
        checked={val?.toogle}
      />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
      <AnimatePresence initial={false}>
        {val?.toogle && (
          <motion.div
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ y: -500, opacity: 0 }}
            className="absolute right-0 top-16 bg-white drop-shadow-xl shadow-xl w-[200px] h-[210px] rounded-xl px-2 py-3 flex flex-col gap-2"
          >
            <Link
              onClick={() => val.setToogle(false)}
              href={"/"}
              className="w-full hover:bg-slate-200 h-1/2 rounded-md flex items-center gap-2  p-2 text-g cursor-pointer"
            >
              <FaHome color={"green"} size={20} />
              Ana Sayfa
            </Link>
            <Link
              onClick={() => val.setToogle(false)}
              href={"/product"}
              className="w-full hover:bg-slate-200 h-1/2 rounded-md flex items-center gap-2  p-2 text-g cursor-pointer"
            >
              <AiFillCaretRight color={"green"} size={20} />
              Ürünler
            </Link>
            <Link
              onClick={() => val.setToogle(false)}
              href={"/#hakkımızda"}
              className="w-full hover:bg-slate-200 h-1/2 rounded-md flex items-center gap-2 p-2 text-g cursor-pointer"
            >
              <FaUser color={"green"} size={20} /> Hakkımızda
            </Link>
            <Link
              onClick={() => val.setToogle(false)}
              href={"/#iletisim"}
              className="w-full hover:bg-slate-200 h-1/2 rounded-md flex items-center gap-2  p-2 text-g cursor-pointer"
            >
              <FaPhoneAlt color={"green"} size={20} />
              İletişim
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hamburger;
