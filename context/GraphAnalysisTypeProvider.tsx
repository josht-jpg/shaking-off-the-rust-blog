import { createContext, Dispatch, SetStateAction, useState } from "react";

export enum GraphAnalysisTypes {
  BFS,
  DFS,
  SSSP,
}

interface IGraphAnalysisTypeContext {
  graphAnalysisType: GraphAnalysisTypes | undefined;
  setGraphAnalysisType: Dispatch<
    SetStateAction<GraphAnalysisTypes | undefined>
  >;
}

export const GraphAnalysisTypeContext =
  createContext<IGraphAnalysisTypeContext>(undefined);

export const GraphAnalysisTypeProvider = ({ children }) => {
  const [graphAnalysisType, setGraphAnalysisType] =
    useState<GraphAnalysisTypes>();

  return (
    <GraphAnalysisTypeContext.Provider
      value={{ graphAnalysisType, setGraphAnalysisType }}
    >
      {children}
    </GraphAnalysisTypeContext.Provider>
  );
};
