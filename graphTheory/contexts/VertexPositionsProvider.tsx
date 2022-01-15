import { createContext, Dispatch, SetStateAction, useState } from "react";
import coordinates from "../interfaces/coordinates";

interface IVertexPositionsContext {
  vertexPositions: coordinates[];
  setVertexPositions: Dispatch<SetStateAction<coordinates[]>>;
}

export const VertexPositionsContext =
  createContext<IVertexPositionsContext>(undefined);

export const VertexPositionsProvider = ({ children }) => {
  const [vertexPositions, setVertexPositions] = useState<coordinates[]>([]);

  return (
    <VertexPositionsContext.Provider
      value={{ vertexPositions, setVertexPositions }}
    >
      {children}
    </VertexPositionsContext.Provider>
  );
};
