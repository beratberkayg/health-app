import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Maps = () => {
  return (
    <div className="w-[98%] mx-auto rounded-lg bg-green-400 relative -top-28 flex flex-wrap gap-1 md:gap-0">
      <div className="md:w-1/2 w-full flex justify-center items-center flex-col text-xl gap-3 my-5">
        <div className="text-3xl font-bold">Pendik Doğal Sağlık</div>
        <div className="text-center">
          Bahçelievler, Adnan Menderes Blv. No:10 /A, 34893 Pendik/İstanbul
        </div>
        <a
          className="text-blue-500 text-3xl font-medium flex items-center justify-center gap-3"
          href="tel:+905545875797"
        >
          <FaPhoneAlt /> 0554 587 57 97
        </a>
      </div>
      <div className="w-full md:w-1/2 h-[200px] ">
        <iframe
          title="Google Harita"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.520377043683!2d29.23202547603424!3d40.882398671368456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caddec7f12a2b9%3A0x222f9da7bdab0127!2zS2liYXJsxLEgUGFuYXggw7xyw7xubGVyaQ!5e0!3m2!1str!2str!4v1703255539573!5m2!1str!2str"
          width="100%"
          height="100%"
          loading="lazy"
          className="rounded-b-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
