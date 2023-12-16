"use client";
import { data } from "@/data/data";
import { dataType } from "@/types/type";
import { createContext, ReactNode } from "react";

export const DataContext = createContext<dataType[]>([]);

interface DataContextProps {
  children: ReactNode;
}

const Provider: React.FC<DataContextProps> = ({ children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default Provider;
