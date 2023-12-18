import React from "react";

const Hero = () => {
  return (
    <div className=" flex items-center justify-between flex-wrap w-[90%]  mx-auto">
      <div className=" text-xl text-justify mx-auto">
        "Kibarlı Doğal Sağlık Ürünleri olarak, sağlığınız bizim için önemlidir.
        Sizinle birlikte olmak, doğal ve sağlıklı bir yaşam için var gücümüzle
        çalışmak demektir."
      </div>
      <div className=" rounded-bl-full rounded-tr-full bg-green-400 flex items-center justify-center w-[300px]">
        <img src="./img/panax.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
