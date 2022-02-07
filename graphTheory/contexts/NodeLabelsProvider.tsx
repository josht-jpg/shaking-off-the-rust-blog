import { createContext, Dispatch, SetStateAction, useState } from "react";

interface INodeLabelsContext {
  nodeLabels: string[];
  setNodeLabels: Dispatch<SetStateAction<string[]>>;
}

export const NodeLabelsContext = createContext<INodeLabelsContext | undefined>(
  undefined
);

const NodeLabelsProvider = ({ children }) => {
  const [nodeLabels, setNodeLabels] = useState<string[]>([]);
  return (
    <NodeLabelsContext.Provider value={{ nodeLabels, setNodeLabels }}>
      {children}
    </NodeLabelsContext.Provider>
  );
};

export default NodeLabelsProvider;
