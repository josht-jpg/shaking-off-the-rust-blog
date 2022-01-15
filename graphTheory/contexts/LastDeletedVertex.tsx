import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ILastDeletedVertexContext {
  lastDeletedVertex: number;
  setLastDeletedVertex: Dispatch<SetStateAction<number>>;
}

export const LastDeletedVertexContext =
  createContext<ILastDeletedVertexContext>(undefined);

export const LastDeletedVertexProvider = ({ children }) => {
  const [lastDeletedVertex, setLastDeletedVertex] = useState<number>();
  return (
    <LastDeletedVertexContext.Provider
      value={{ lastDeletedVertex, setLastDeletedVertex }}
    >
      {children}
    </LastDeletedVertexContext.Provider>
  );
};
