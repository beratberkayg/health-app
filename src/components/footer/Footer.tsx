import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-green-500 w-full mt-5 rounded-t-md py-2 flex justify-center items-center  flex-col gap-1">
      <div className="text-lg md:text-3xl">
        Pendik Kibarlı Doğal Sağlık Ürünleri
      </div>
      <a
        className="text-blue-500 text-xl md:text-3xl font-medium flex items-center justify-center gap-3"
        href="tel:+905545875797"
      >
        <FaPhoneAlt /> 0554 587 57 97
      </a>
    </div>
  );
};

export default Footer;
