import * as d3 from "d3";
import { useRef } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import indexOfStateMouseIsOverContext from "../../../contexts/indexOfStateMouseIsOver";
import preventHightlight from "../../../utils/preventHighlight";
import createNewInput from "../../../utils/inputs/createNewInput";
import drawContructionInput from "../../../utils/inputs/drawConstructionInput";
import moveConstructionInput from "../../../utils/inputs/moveConstructionInput";
import selectByIdPrefix from "../../../utils/selectByIdPrefix";
import { CONSTRUCTION_INPUT_CONTAINER_ID } from "../../../constants/inputConstants";
import G from "../../../adjacencyList";
import { IsLightModeContext } from "../../../../context/IsLightModeProvider";

interface InputProps {
  startPosition;
  startNodeIndex: number;
  setConstructionInput: any;
  createdInputIdsState: any;
}

const Input: React.FC<InputProps> = ({
  startPosition,
  startNodeIndex,
  setConstructionInput,
  createdInputIdsState,
}) => {
  const { isLightMode } = useContext(IsLightModeContext);
  const [isMouseDown, setIsMouseDown] = useState(true);
  const indexOfStateMouseIsOver = useContext(indexOfStateMouseIsOverContext);
  const [isCreated, setIsCreated] = useState(false);
  const [createdInputIds, setCreatedInputIds] = createdInputIdsState;

  const drawConstuctionLineIfNotExists = () => {
    const constructionLineExists = d3
      .select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID))
      .select("line")
      .node();

    if (!constructionLineExists) {
      drawContructionInput(startPosition, isLightMode);
    }
  };

  const mousemove = (mouseEvent: MouseEvent) => {
    preventHightlight(mouseEvent);

    drawConstuctionLineIfNotExists();

    moveConstructionInput(
      {
        x: startPosition.x - ref.current?.getBoundingClientRect().left,
        y: startPosition.y + ref.current?.getBoundingClientRect().top,
      },
      mouseEvent
    );
  };

  useEffect(() => {
    d3.select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID)).on(
      "mousemove",
      mousemove
    );

    const handleMouseUp = () => {
      d3.select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID)).on(
        "mousemove",
        null
      );
      setIsMouseDown(false);
      setConstructionInput(null);
    };
    document.addEventListener("mouseup", handleMouseUp);

    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  const createInput = () => {
    G.addEgde(startNodeIndex, indexOfStateMouseIsOver);

    setIsCreated(true);

    d3.select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID)).attr(
      "z-index",
      -5
    );

    const newId = `line${startNodeIndex}to${indexOfStateMouseIsOver}Number${lineIndex(
      createdInputIds,
      startNodeIndex,
      indexOfStateMouseIsOver
    )}`;
    createNewInput(newId, isLightMode);
    setCreatedInputIds((prev) => [...prev, "#" + newId]);

    setConstructionInput(null);
  };

  useEffect(() => {
    const isCreateInput =
      (!!indexOfStateMouseIsOver || indexOfStateMouseIsOver === 0) &&
      !isMouseDown &&
      startNodeIndex !== indexOfStateMouseIsOver;

    if (isCreateInput) {
      createInput();
    } else if (!indexOfStateMouseIsOver && !isMouseDown && !isCreated) {
      setConstructionInput(null);
    }
  }, [indexOfStateMouseIsOver, isMouseDown, isCreated, G]);

  useEffect(() => {
    const color = "gray";
    const opacity = isLightMode ? "0.5" : "0.9";

    d3.select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID))
      ?.select("line")
      ?.attr("stroke", color)
      .attr("opacity", opacity);
    d3.select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID))
      ?.select("path")
      ?.attr("stroke", color)
      .attr("fill", color)
      .attr("opacity", opacity);
  }, [isLightMode]);

  const ref = useRef<SVGSVGElement>();

  return (
    <svg
      ref={ref}
      id={CONSTRUCTION_INPUT_CONTAINER_ID}
      style={{
        zIndex: -1,
        position: "absolute",
        width: "78%",
        height: "95%",
        backgroundColor: "transparent",
      }}
    ></svg>
  );
};

export default Input;

const lineIndex = (
  createdInputIds: string[],
  startNodeIndex: number,
  indexOfStateMouseIsOver: number
) =>
  createdInputIds.reduce((acc, curr) => {
    const commonIdPrefix = `#line${startNodeIndex}to${indexOfStateMouseIsOver}`;
    if (curr.startsWith(commonIdPrefix)) {
      acc += 1;
    }
    return acc;
  }, 1);
