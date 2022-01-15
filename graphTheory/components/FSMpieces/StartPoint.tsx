import { useContext, useEffect, useState } from "react";
import * as d3 from "d3";
import StartStateContext from "../../contexts/StartStateContext";
import preventHightlight from "../../utils/preventHighlight";
import {
  getInitialPosition,
  moveStartInput,
  saveStartInputPositionInStorage,
  saveStartPointPositionInStorage,
} from "../../utils/startPointUtils";
import mainBoundingRect from "../../utils/mainBoundingRect";
import { TRANSITION_TIME } from "../../constants/styleConstants";

interface StartPointProps {
  position?: { cx: number; cy: number };
}

const START_POINT_RADIUS = 5;

const StartPoint: React.FC<StartPointProps> = ({ position }) => {
  const [startStateIndex, _] = useContext(StartStateContext);

  const { initialCx, initialCy } = getInitialPosition(
    startStateIndex,
    position
  );
  const [cx, setCx] = useState(initialCx);
  const [cy, setCy] = useState(initialCy);

  const [isGrabbing, setIsGrabbing] = useState(false);

  useEffect(() => {
    d3.select(`#lineStartTo${startStateIndex}Circle`).attr("fill", "gray");
  }, []);

  const moveStartPoint = (mouseEvent: MouseEvent) => {
    setCx(mouseEvent.clientX - mainBoundingRect().left);
    setCy(mouseEvent.clientY - mainBoundingRect().top);
  };

  useEffect(() => {
    const handleMouseMove = (mouseEvent: globalThis.MouseEvent) => {
      if (isGrabbing) {
        preventHightlight(mouseEvent);

        moveStartPoint(mouseEvent);
        saveStartPointPositionInStorage(mouseEvent);
        moveStartInput(mouseEvent, startStateIndex);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isGrabbing, setCx, setCy, mainBoundingRect]);

  const handleMouseUp = (mouseEvent) => {
    setIsGrabbing(false);
    saveStartInputPositionInStorage(mouseEvent, startStateIndex);
  };

  const [isMouseOver, setIsMouseOver] = useState(false);

  const expandedStartPointRadius = 2 * START_POINT_RADIUS;

  return (
    <circle
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      id={`lineStartTo${startStateIndex}Circle`}
      className={"startCircle"}
      cx={cx}
      cy={cy}
      r={isMouseOver ? expandedStartPointRadius : START_POINT_RADIUS}
      style={{
        opacity: 0.8,
        transition: `r ${TRANSITION_TIME}`,
        cursor: isGrabbing ? "grabbing" : "grab",
      }}
    />
  );
};

export default StartPoint;
