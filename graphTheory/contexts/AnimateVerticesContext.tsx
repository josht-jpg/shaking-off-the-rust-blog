import { createContext, Dispatch, SetStateAction, useState } from "react";
import { INITIAL_ANIMATION_SPEED } from "../constants/animationConstants";

//Should create seperates
interface IAnimateContext {
  animateVertices: number[];
  setAnimateVertices: Dispatch<SetStateAction<number[]>>;

  stopAnimationVertex: number;
  setStopAnimationVertex: Dispatch<SetStateAction<number>>;

  showPseudoCode: boolean;
  setShowPseudoCode: Dispatch<SetStateAction<boolean>>;

  animationSpeed: number;
  setAnimationSpeed: Dispatch<SetStateAction<number>>;

  animationColors: string[];
  setAnimationColors: Dispatch<SetStateAction<string[]>>;
}

export const AnimateVerticesContext = createContext<IAnimateContext>(undefined);

export const AnimateVerticesProvider = ({ children }) => {
  const [animateVertices, setAnimateVertices] = useState<number[]>([]);
  const [stopAnimationVertex, setStopAnimationVertex] = useState<number>();
  const [showPseudoCode, setShowPseudoCode] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(INITIAL_ANIMATION_SPEED);
  const [animationColors, setAnimationColors] = useState([]);

  return (
    <AnimateVerticesContext.Provider
      value={{
        animateVertices,
        setAnimateVertices,
        stopAnimationVertex,
        setStopAnimationVertex,
        showPseudoCode,
        setShowPseudoCode,
        animationSpeed,
        setAnimationSpeed,
        animationColors,
        setAnimationColors,
      }}
    >
      {children}
    </AnimateVerticesContext.Provider>
  );
};
