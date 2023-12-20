"use client";

import Banner from "@/components/home/Banner";
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
    <div className="flex flex-col mt-20 md:mt-10">
      <div className=" rounded-lg flex justify-between items-center flex-wrap md:flex-nowrap">
        <div className="w-full">
          <Title />
        </div>
        <div className="w-full">
          <Hero />
        </div>
      </div>
      <Banner />
      {value?.isChecked && <div>ürünler</div>}
    </div>
  );
}
