import { dataType } from "@/types/type";
import React from "react";

const Item = ({ item }: { item: dataType }) => {
  return (
    <div className="w-full md:w-[45%] lg:w-[32%] h-[430px] rounded-md bg-green-400 px-7  flex  justify-center flex-col">
      <img className="w-full " src={item.img} alt="" />

      <div className="text-2xl font-medium text-center">{item.name}</div>
    </div>
  );
};

export default Item;
