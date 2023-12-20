"use client";

import Hero from "@/components/home/Swiper";
import Title from "@/components/home/Title";
import { DataContext } from "@/context/dataContext";
import { SiteContext } from "@/context/siteContext";
import { useContext } from "react";

export default function Home() {
  const data = useContext(DataContext);
  console.log(data);
  const value = useContext(SiteContext);

  return (
    <div className="">
      <div className=" flex justify-between items-center flex-wrap md:flex-nowrap">
        <div className="w-full">
          <Title />
        </div>
        <div className="w-full">
          <Hero />
        </div>
      </div>

      {value?.isChecked && <div>ürünler</div>}
    </div>
  );
}
