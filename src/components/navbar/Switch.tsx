"use client";

import { useState } from "react";

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="relative inline-flex cursor-pointer select-none items-center justify-center rounded-full bg-white p-1  drop-shadow-xl shadow-xl shadow-inner! ">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[9px] md:px-[18px] text-sm font-medium ${
            !isChecked
              ? "text-primary bg-green-400 rounded-full transition-all duration-500"
              : "text-body-color text-gray-500"
          }`}
        >
          Anasayfa
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[9px] md:px-[18px] text-sm font-medium ${
            isChecked
              ? "text-primary bg-green-400 rounded-full transition-all duration-500 "
              : "text-body-color text-gray-500"
          }`}
        >
          Ürünler
        </span>
      </label>
    </>
  );
};

export default Switcher;
