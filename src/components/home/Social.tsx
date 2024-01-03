import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Social = () => {
  return (
    <div className="w-full flex justify-center items-center mt-3 gap-10">
      <Link
        href="https://www.facebook.com/adil.gokdemir.7"
        target="_blank"
        className="w-50 h-50 bg-white rounded-full hover:scale-110"
      >
        <FaFacebook size={60} color={"blue"} />
      </Link>
      <Link
        href="https://wa.me/+905545875797"
        target="_blank"
        className="w-50 h-50 bg-white rounded-full hover:scale-110"
      >
        <IoLogoWhatsapp size={60} color={"green"} />
      </Link>
    </div>
  );
};

export default Social;
