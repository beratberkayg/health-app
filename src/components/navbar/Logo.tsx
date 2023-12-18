import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center  bg-white drop-shadow-xl shadow-xl rounded-full  w-[60px] h-[60px] "
    >
      <img
        className="w-[60px] h-[40px] md:w-[60px] md:h-[50px]"
        src="./logo.png"
        alt=""
      />
    </Link>
  );
};

export default Logo;
