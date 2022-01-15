import * as d3 from "d3";
import { CONSTRUCTION_INPUT_CONTAINER_ID } from "../../constants/inputConstants";
import selectByIdPrefix from "../selectByIdPrefix";

const drawConstructionInput = (startPosition, isLightMode: boolean) => {
  d3.select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID)).append("line");

  d3.select("#mainSVG")
    .append("marker")
    .attr("id", "tempMarker")
    .attr("class", "arrow")
    .attr("refY", "3")
    .attr("refX", "5.8")
    .attr("markerUnits", "strokeWidth")
    .attr("markerHeight", "6")
    .attr("markerWidth", "6")
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 6 3 L 0 6 z")
    .attr("fill", "gray")
    .attr("opacity", "0.6");

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
