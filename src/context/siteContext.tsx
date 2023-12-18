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

interface valueType {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const SiteProvider: React.FC<DataContextProps> = ({ children }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const value: valueType = {
    isChecked,
    setIsChecked,
  };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;
