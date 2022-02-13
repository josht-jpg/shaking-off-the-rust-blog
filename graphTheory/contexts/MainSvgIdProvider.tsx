import { createContext, Dispatch, SetStateAction, useState } from "react";

interface MainSvgIdState {
  mainSvgId: string;
  setMainSvgId: Dispatch<SetStateAction<string>>;
}

export const MainSvgIdContext = createContext<MainSvgIdState>(undefined);

export const MainSvgIdProvider = ({ children, isExample }) => {
  const [mainSvgId, setMainSvgId] = useState<string>(
    isExample ? "#mainSvgExample" : "#mainSvg"
  );
  return (
    <MainSvgIdContext.Provider value={{ mainSvgId, setMainSvgId }}>
      {children}
    </MainSvgIdContext.Provider>
  );
};
