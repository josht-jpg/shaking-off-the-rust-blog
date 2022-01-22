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

interface IIsDarkModeContext {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const IsDarkModeContext = createContext<IIsDarkModeContext>(undefined);

export const IsDarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode
      ? DARK_MODE_BACKGROUND
      : LIGHT_MODE_BACKGROUND;
  }, [isDarkMode]);

  return (
    <IsDarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </IsDarkModeContext.Provider>
  );
};
