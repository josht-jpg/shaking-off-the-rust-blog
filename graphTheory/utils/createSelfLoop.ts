import * as d3 from "d3";

const createSelfLoop = (
  stateIndex: number,
  selfLoopIndex: number,
  d: string
) => {
  d3.select(`#container${stateIndex}`)
    .append("path")
    .attr("id", `selfLoopOnNode${stateIndex}-${selfLoopIndex}`)
    .attr("class", "input")
    .attr("d", d)
    .attr(
      "marker-end",
      `url(#selfLoopOnNode${stateIndex}-${selfLoopIndex}marker)`
    )
    .attr("stroke", "gray")
    .attr("opacity", "0.4")
    .attr("filter", "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2))")
    .attr("stroke-width", "3px")
    .attr("width", "3px")
    .attr("fill", "none")
    .attr("cursor", "pointer");
};

export default createSelfLoop;
