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
    <div className="">
      <Hero />
      {value?.isChecked && <div>ürünler</div>}
    </div>
  );
}
