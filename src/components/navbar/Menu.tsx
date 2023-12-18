"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Menu = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="flex items-center justify-center  bg-white drop-shadow-xl shadow-xl rounded-full w-[50px] h-[50px] cursor-pointer "
      >
        {show ? <IoMdClose size={35} /> : <IoMdMenu size={35} />}
      </div>
      {show && (
        <div className="absolute right-0 top-16 bg-white drop-shadow-xl shadow-xl w-[200px] h-[120px] rounded-xl px-2 py-3 flex flex-col gap-2">
          <div className="w-full hover:bg-slate-200 h-1/2 rounded-md flex items-center gap-2 p-2 text-g cursor-pointer">
            <FaUser color={"green"} size={20} /> Hakkımızda
          </div>
          <div className="w-full hover:bg-slate-200 h-1/2 rounded-md flex items-center gap-2  p-2 text-g cursor-pointer">
            <FaPhoneAlt color={"green"} size={20} />
            İletişim
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;