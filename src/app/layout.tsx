import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/context/dataContext";
import SiteProvider from "@/context/siteContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen items-center w-full md:w-[80%] lg:w-[70%] mx-auto bg-[#ECF9FF]  `}
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
