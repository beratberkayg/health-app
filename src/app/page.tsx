"use client";

import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Maps from "@/components/home/Maps";
import Product from "@/components/home/Product";
import { DataContext } from "@/context/dataContext";
import { SiteContext } from "@/context/siteContext";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const data = useContext(DataContext);
  console.log(data);
  const value = useContext(SiteContext);

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col"
    >
      {value?.isChecked ? (
        <Product />
      ) : (
        <div className="flex flex-col">
          <Hero />
          <div
            id="hakkımızda"
            className="relative -top-40 rounded-lg bg-green-400 w-[98%] mx-auto flex flex-wrap gap-1 md:flex-nowrap md:max-h-[500px] mt-5"
          >
            <div className="w-full md:w-1/2">
              <img
                className="w-full h-[330px] md:h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg md:rounded-tl-lg"
                src="./dükkan.jpeg"
                alt=""
              />
            </div>
            <div className="md:w-1/2 flex justify-evenly flex-col px-3 gap-3 py-3 lg:text-lg">
              <h2 className="text-2xl lg:text-4xl font-medium text-center">
                Pendik Doğal Sağlık
              </h2>
              <div className="flex flex-col gap-3 text-justify">
                <div>
                  2012 yılında başlayan serüvenimizde, müşterilerimize en
                  kaliteli doğal ürünleri sunma misyonumuzla yola çıktık. Bugüne
                  kadar edindiğimiz deneyimle, sizlere daha iyi hizmet
                  sunabilmek için sürekli olarak kendimizi geliştiriyoruz.
                </div>
                <div>
                  İnsan sağlığını ön planda tutarak, güvenilir ve etkili doğal
                  ürünleri sizlere sunuyoruz. Doğadan elde edilen, özenle
                  seçilmiş içeriklerle üretilen ürünlerimiz, vücudunuzu dengede
                  tutarak doğal bir yaşam sürmenize yardımcı olacaktır.
                </div>
                <div>
                  Müşteri memnuniyeti bizim için en önemli önceliktir. Sizlere
                  en iyi hizmeti sunabilmek adına, uzman ekibimiz her zaman
                  yanınızda. Sorularınız için bize her zaman ulaşabilir, doğru
                  ürün seçimi konusunda destek alabilirsiniz.
                </div>
              </div>
            </div>
          </div>
          <Maps />
          <Contact />
        </div>
      )}
    </motion.div>
  );
}
