import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <div className="bg-green-500 w-full rounded-t-md py-2 flex justify-center items-center  flex-col gap-1 mt-5 relative overflow-hidden">
      <div className="text-lg md:text-3xl">
        Pendik Kibarlı Doğal Sağlık Ürünleri
      </div>
      <div className="flex items-center justify-center gap-10">
        <Link
          href="https://www.facebook.com/adil.gokdemir.7"
          target="_blank"
          className="w-50 h-50 bg-white rounded-full hover:scale-105 "
        >
          <FaFacebook size={40} color={"blue"} />
        </Link>
        <a
          className="text-blue-500 text-xl md:text-3xl font-medium flex items-center justify-center gap-3 hover:scale-105"
          href="tel:+905545875797"
        >
          <FaPhoneAlt /> 0554 587 57 97
        </a>

        <Link
          href="https://wa.me/+905545875797"
          target="_blank"
          className="w-50 h-50 bg-white rounded-full hover:scale-105  "
        >
          <IoLogoWhatsapp size={40} color={"green"} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
