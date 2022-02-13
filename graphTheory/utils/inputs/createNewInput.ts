import * as d3 from "d3";
import { CONSTRUCTION_INPUT_CONTAINER_ID } from "../../constants/inputConstants";
import selectByIdPrefix from "../selectByIdPrefix";

const createNewInput = (id: string, isLightMode: boolean) => {
  const drawnLine = d3
    .select(selectByIdPrefix(CONSTRUCTION_INPUT_CONTAINER_ID))
    .select("line");

  const d = `M ${drawnLine.node().x1.baseVal.value} ${
    drawnLine.node().y1.baseVal.value
  } Q ${drawnLine.node().x2.baseVal.value} ${
    drawnLine.node().y2.baseVal.value
  } ${drawnLine.node().x2.baseVal.value} ${drawnLine.node().y2.baseVal.value}`;

  createPath(id, d, isLightMode);

  saveInputInStorage(id, d);
};

export default createNewInput;

const createPath = (id: string, d: string, isLightMode: boolean) =>
  d3
    .select("#mainSVG")
    .append("path")
    .attr("id", id)
    .attr("class", "input")
    .attr("d", d)
    .attr("marker-end", `url(#${id}marker)`)
    .attr("stroke", isLightMode ? "gray" : "white")
    .attr("opacity", "0.4")
    .attr("filter", "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2))")
    .attr("stroke-width", "3px")
    .attr("width", "3px")
    .attr("fill", "none")
    .attr("cursor", "pointer");

const saveInputInStorage = (id: string, d: string) =>
  false &&
  localStorage.setItem(
    "inputs",
    JSON.stringify([
      ...(JSON.parse(localStorage.getItem("inputs")) ?? []),
      { id, d },
    ])
  );
