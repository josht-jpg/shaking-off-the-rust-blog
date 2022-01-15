import { createContext } from "react";

type stateNodeState = (x?: number, y?: number) => void;

const StateNodesContext =
  createContext</*createNode | undefined*/ any>(undefined);

export default StateNodesContext;
