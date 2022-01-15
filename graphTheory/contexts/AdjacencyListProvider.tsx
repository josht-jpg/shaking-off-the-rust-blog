import { createContext, Dispatch, SetStateAction, useState } from "react";
import AdjacencyList from "../adjacencyList";
import { Vertex } from "../type/Vertex";

interface AdjacencyListState {
  adjacencyList: Vertex[];
  setAdjacencyList: Dispatch<SetStateAction<Vertex[]>>;
}

export const AdjacencyListContext =
  createContext<AdjacencyListState>(undefined);

export const AdjacencyListProvider = ({ children }) => {
  const [adjacencyList, setAdjacencyList] = useState<Vertex[]>([]);
  return (
    <AdjacencyListContext.Provider value={{ adjacencyList, setAdjacencyList }}>
      {children}
    </AdjacencyListContext.Provider>
  );
};

/*export const AdjacencyListContext = createContext<AdjacencyList>(undefined);

export const AdjacencyListProvider = ({ children }) => {
  const adjacencyList = new AdjacencyList();
  return (
    <AdjacencyListContext.Provider value={adjacencyList}>
      {children}
    </AdjacencyListContext.Provider>
  );
};*/
