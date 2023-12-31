import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Provider from "@/context/dataContext";
import SiteProvider from "@/context/siteContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pendik Doğal Sağlık",
  description: "Pendik Kibarlı Doğal Sağlık Ürünleri",
  keywords: "kibarlı, pendik, doğal, sağlık, panax,hakan, özkul,  ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} flex flex-col min-h-screen items-center w-full md:w-[80%] lg:w-[70%] mx-auto bg-[#E6FFFD] `}
      >
        <SiteProvider>
          <Provider>
            <Navbar />
            <main className=" flex-grow w-full">{children}</main>
            <Footer />
          </Provider>
        </SiteProvider>
      </body>
    </html>
  );
}
