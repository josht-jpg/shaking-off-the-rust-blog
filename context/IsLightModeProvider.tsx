import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  DARK_MODE_BACKGROUND,
  LIGHT_MODE_BACKGROUND,
} from "../graphTheory/constants/styleConstants";

interface IIsLightModeContext {
  isLightMode: boolean;
  setIsLightMode: Dispatch<SetStateAction<boolean>>;
}

export const IsLightModeContext = createContext<IIsLightModeContext>(undefined);

export const IsLightModeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = isLightMode
      ? LIGHT_MODE_BACKGROUND
      : DARK_MODE_BACKGROUND;
  }, [isLightMode]);

  return (
    <IsLightModeContext.Provider value={{ isLightMode, setIsLightMode }}>
      {children}
    </IsLightModeContext.Provider>
  );
};
