import React from "react";
import Logo from "./Logo";
import Switch from "./Switch";

const Navbar = () => {
  return (
    <div className="fixed bg-transparent w-full mt-3 flex ">
      <Logo />
      <Switch />
    </div>
  );
};

export default Navbar;
