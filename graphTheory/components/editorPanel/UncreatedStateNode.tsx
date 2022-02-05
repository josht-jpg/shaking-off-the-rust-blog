import { useContext, useState } from "react";
import { TRANSITION_TIME } from "../../constants/styleConstants";
import StateNodesContext from "../../contexts/StateNodesContext";
import IsDraggingContext from "../../contexts/IsDraggingContext";
import StateNodeContext from "../../contexts/StateNodeContext";
import CreatedStateNode from "../FSMpieces/stateNode/CreatedStateNode";
import StateNode from "../FSMpieces/stateNode/StateNode";
import { saveNewStateNodeInStorage } from "../../utils/stateNodeUtils";
import G from "../../adjacencyList";
import MainSvgOffSetContext from "../../contexts/MainSvgOffSet";

interface UncreatedStateNodeProps {
  addStateNode: () => void;
}

const UncreatedStateNode: React.FC<UncreatedStateNodeProps> = ({
  addStateNode,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const isNodeCreated = useContext(StateNodeContext);
  const [stateNodes, setStateNodes] = useContext(StateNodesContext);
  const setIsDraggingGlobalState = useContext(IsDraggingContext);

  const handleStartDragging = () => {
    setIsDragging(true);
    setIsDraggingGlobalState(true);
    addStateNode();
  };

  const [closeNode, setCloseNode] = useState(false);

  const mainSvgOffSet = useContext(MainSvgOffSetContext);

  const saveNode = (top: number, left: number) => {
    G.addVertex();

    setStateNodes([
      ...stateNodes,
      <CreatedStateNode
        x={left}
        y={top}
        index={stateNodes.length}
        savedAttributes={undefined}
      />,
    ]);

    saveNewStateNodeInStorage(top - mainSvgOffSet.y, left - mainSvgOffSet.x);

    setCloseNode(true);
  };

  const handleStopDragging = (top: number, left: number) => {
    if (isNodeCreated) {
      saveNode(top, left);
    }
    setIsDraggingGlobalState(false);
    setIsDragging(false);
  };

  if (closeNode) {
    return null;
  }

  const marginLeft = "-37px";

  return (
    <StateNode
      handleStartDragging={handleStartDragging}
      handleStopDragging={handleStopDragging}
      isCreated={false}
      styleProps={
        isDragging
          ? {
              cursor: "grabbing",
              zIndex: 2,
              marginLeft,
            }
          : {
              transition: TRANSITION_TIME,
              zIndex: 1,
              marginLeft,
            }
      }
    />
  );
};
export default UncreatedStateNode;
