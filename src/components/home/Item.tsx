import { dataType } from "@/types/type";
import Image from "next/image";
import React from "react";

const Item = ({ item }: { item: dataType }) => {
  return (
    <div className="card bg-green-400 rounded-[8px] w-[300px] md:w-[47%] lg:w-[300px] lg:h-[400px] h-[400px] overflow-hidden ">
      <div className="circle"></div>
      <div className="circle "></div>
      <div className="card-inner">
        <img src={item.img} alt="" />
        <h2 className="text-center text-xl font-medium">{item.name}</h2>
      </div>
    </div>
  );
};

export default Item;
