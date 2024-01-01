"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const SiteContext = createContext<valueType | undefined>(undefined);

interface DataContextProps {
  children: ReactNode;
}

export interface valueType {
  toogle: boolean;
  setToogle: Dispatch<SetStateAction<boolean>>;
}

const SiteProvider: React.FC<DataContextProps> = ({ children }) => {
  const [toogle, setToogle] = useState<boolean>(false);

  const value: valueType = {
    toogle,
    setToogle,
  };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;
