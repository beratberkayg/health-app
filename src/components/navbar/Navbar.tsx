import React from "react";
import Logo from "./Logo";
import Switcher from "./Switch";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div
      className="fixed flex justify-between items-center w-full px-1 md:px-0 md:w-[80%] lg:w-[70%] mt-5
     "
    >
      <Logo />
      <Switcher />
      <Menu />
    </div>
  );
};

export default Navbar;
