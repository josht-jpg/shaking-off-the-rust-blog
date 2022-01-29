import * as d3 from "d3";
import { CONSTRUCTION_INPUT_CONTAINER_ID } from "../../constants/inputConstants";
import selectByIdPrefix from "../selectByIdPrefix";

const drawConstructionInput = (startPosition, isLightMode: boolean) => {
  d3.select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID)).append("line");

  const initX =
    startPosition.x -
    document.getElementById(`mainSVG`)?.getBoundingClientRect().left;

  const initY =
    startPosition.y -
    document.getElementById(`mainSVG`)?.getBoundingClientRect().top;

  d3.select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID))
    .select("line")
    .attr("x1", initX)
    .attr("y1", initY)
    .attr("x2", initX)
    .attr("y2", initY)
    .attr("marker-end", `url(#tempMarker)`)
    .attr("stroke", isLightMode ? "gray" : "white")
    .attr("opacity", "0.5")
    .attr("stroke-width", "3px");
};

export default drawConstructionInput;
