"use client";
import { DataContext } from "@/context/dataContext";
import { useContext } from "react";

export default function Home() {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <div className="">
      {data.map((item, i) => (
        <div key={i}>
          {item.name}
          <img className="w-10 h-10" src={item.img} alt="" />
        </div>
      ))}
    </div>
  );
}
