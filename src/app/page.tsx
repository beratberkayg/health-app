"use client";

import Hero from "@/components/home/Hero";
import { DataContext } from "@/context/dataContext";
import { SiteContext } from "@/context/siteContext";
import { useContext } from "react";

export default function Home() {
  const data = useContext(DataContext);
  console.log(data);
  const value = useContext(SiteContext);

  return (
    <div className="border border-black">
      <Hero />
      <div>
        {/* <div className=" w-full h-[500px] relative  ">
        <Title />
        <div className="absolute -z-20 w-full h-full left-0 top-0 md:top-10 flex  justify-around items-center ">
          <img
            className=" hidden md:block md:w-64 lg:w-96 "
            src="./img/panax.png"
            alt=""
          />
          <img
            className="relative -top-20 hidden md:block md:w-64 lg:w-96"
            src="./img/d1.png"
            alt=""
          />
          <img className="w-96 md:hidden" src="./img/panax.png" alt="" />
          <img
            className="hidden md:block md:w-64 lg:w-96"
            src="./img/reishi.png"
            alt=""
          />
        </div>
      </div>
      <Banner /> */}
      </div>
      {value?.isChecked && <div>ürünler</div>}
    </div>
  );
}
