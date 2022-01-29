import * as d3 from "d3";
import removeWhiteSpace from "./removeWhiteSpace";

const createPath = (input) =>
  d3
    .select("#mainSVG")
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

const createInputsFromLocalStorage = () =>
  (JSON.parse(localStorage.getItem("inputs")) ?? []).map((input) => {
    createPath(input);
  });

export default createInputsFromLocalStorage;
