import * as d3 from "d3";
import { CONSTRUCTION_INPUT_CONTAINER_ID } from "../../constants/inputConstants";
import { STATE_NODE_RADIUS } from "../../constants/stateNodeConstants";
import selectByIdPrefix from "../selectByIdPrefix";

const moveConstructionInput = (origin, e: MouseEvent) => {
  const [mouseX, mouseY] = mousePosition(e);

  d3.select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID))
    .select("line")
    .attr("x2", mouseX)
    .attr("y2", mouseY);

  d3.select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID))
    .select("path")
    .attr("transform", transform(e, origin))
    .attr("transform-origin", "0 0");
};

export default moveConstructionInput;

const mousePosition = (e: MouseEvent) => d3.pointer(e);

const transform = (e: MouseEvent, origin) => {
  const [mouseX, mouseY] = mousePosition(e);

  return `translate(${mouseX}, ${mouseY}) rotate(${
    ((mouseX - origin.x) * (mouseY - origin.y)) / (mouseX + mouseY) -
    STATE_NODE_RADIUS
  })`;
};
