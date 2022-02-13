import * as d3 from "d3";
import removeWhiteSpace from "./removeWhiteSpace";

const createPath = (input, mainSvgId) =>
  d3
    .select(mainSvgId)
    .append("path")
    .attr("id", input.id)
    .attr("class", "input")
    .attr("d", input.d)
    .attr("marker-end", `url(#${input.id}marker)`)
    .attr("stroke", removeWhiteSpace(input.color) ?? "gray")
    .attr("opacity", "0.4")
    .attr("filter", "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2))")
    .attr("stroke-width", "3px")
    .attr("width", "3px")
    .attr("fill", "none")
    .attr("cursor", "pointer");

const createInputsFromLocalStorage = (mainSvgId: string) =>
  false &&
  (JSON.parse(localStorage.getItem("inputs")) ?? []).map((input) => {
    createPath(input, mainSvgId);
  });

export default createInputsFromLocalStorage;
