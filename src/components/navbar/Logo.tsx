"use client";

import Link from "next/link";

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
