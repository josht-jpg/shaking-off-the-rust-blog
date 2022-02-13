import { useContext } from "react";
import { useState } from "react";
import IsShiftKeyPressedContext from "../../../contexts/IsShiftKeyPressed";
import StateNode from "./StateNode";
import { useEffect } from "react";
import changeNodeInLocalStorage from "../../../utils/changeNodeInLocalStorage";
import {
  getPositionFromStorage,
  moveGroupConnectedToState,
  moveInputsConnectedToStateNode,
} from "../../../utils/stateNodeUtils";
import { TRANSITION_TIME } from "../../../constants/styleConstants";
import MainSvgOffSetContext from "../../../contexts/MainSvgOffSet";

interface CreatedStateNodeProps {
  x: number;
  y: number;
  index: number;
  savedAttributes: any;
  example?: string;
}

const CreatedStateNode: React.FC<CreatedStateNodeProps> = ({
  x,
  y,
  index,
  savedAttributes,
  example,
}) => {
  const { initialX: initialXFromStorage, initialY: initialYFromStorage } =
    getPositionFromStorage(index);
  const [initialX, setInitialX] = useState<number | undefined>(
    initialXFromStorage
  );
  const [initialY, setInitialY] = useState<number | undefined>(
    initialYFromStorage
  );

  let prevX: number;
  let prevY: number;

  const moveInputs = (x: number, y: number) => {
    if (!prevX && !prevY) {
      prevX = x;
      prevY = y;
    }

    const changeInX = x - prevX;
    const changeInY = y - prevY;

    moveInputsConnectedToStateNode(index, changeInX, changeInY);
    /* moveGroupConnectedToState(
      index,
      { x: initialX, y: initialY, setX: setInitialX, setY: setInitialY },
      changeInX,
      changeInY
    );*/

    prevX = x;
    prevY = y;
  };

  const handleStartDragging = () => {
    setIsDragging(true);
  };

  const [initialPagePosition, setInitialPagePosition] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = () => {
    if (!example) {
      if (!initialPagePosition) {
        setInitialPagePosition(window.screenTop);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll, window.screenTop]);

  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (mouseEvent: MouseEvent) => {
    if (isDragging) {
      setScrollOffset(initialPagePosition - window.screenTop);
      moveInputs(mouseEvent.clientX, mouseEvent.clientY);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleDrag);
    return () => document.removeEventListener("mousemove", handleDrag);
  }, [handleDrag, isDragging]);

  const graphContainerId = !!example
    ? "graph-container-example"
    : "graph-container";

  const positionStyle = {
    left:
      x -
      document.getElementById(graphContainerId)?.getBoundingClientRect().left,
    top: y /*-
      document.getElementById(graphContainerId)?.getBoundingClientRect().top,*/,
  };

  const isShiftPressed = useContext(IsShiftKeyPressedContext);

  const mainSvgOffSet = useContext(MainSvgOffSetContext);

  const handleStopDragging = (top: number, left: number) => {
    setIsDragging(false);

    if (!example && false) {
      changeNodeInLocalStorage("x", left /*- mainSvgOffSet.x*/, index);
      changeNodeInLocalStorage("y", top /*- mainSvgOffSet.y*/, index);
    }
  };

  return (
    <StateNode
      handleStartDragging={handleStartDragging}
      handleStopDragging={handleStopDragging}
      savedAttributes={savedAttributes}
      isCreated={true}
      styleProps={
        isDragging
          ? {
              cursor: "grabbing",
              zIndex: 2,
              ...positionStyle,
            }
          : {
              transition: `background-color ${TRANSITION_TIME}`,
              zIndex: 1,
              cursor: isShiftPressed && "crosshair",
              ...positionStyle,
            }
      }
      index={index}
    />
  );
};
export default CreatedStateNode;
