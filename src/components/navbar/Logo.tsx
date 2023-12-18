import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center bg-white drop-shadow-xl shadow-xl rounded-full w-[70px] h-[70px] "
    >
      <img className=" w-[70px] h-[50px]" src="./logo.png" alt="" />
    </Link>
  );
};

export default Logo;
