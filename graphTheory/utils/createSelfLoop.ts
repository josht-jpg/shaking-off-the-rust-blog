import * as d3 from "d3";

const createSelfLoop = (
  stateIndex: number,
  selfLoopIndex: number,
  d: string
) => {
  d3.select(`#container${stateIndex}`)
    .append("marker")
    .attr("id", `selfLoopOnNode${stateIndex}-${selfLoopIndex}` + "marker")
    .attr("refY", "3")
    .attr("refX", "5.8")
    .attr("markerUnits", "strokeWidth")
    .attr("markerHeight", "6")
    .attr("markerWidth", "6")
    .attr("orient", "auto")
    .append("path")
    .attr("id", `selfLoopOnNode${stateIndex}-${selfLoopIndex}Arrow`)
    .attr("class", "arrow")
    .attr("d", "M 0 0 L 6 3 L 0 6 z")
    .attr("fill", "gray")
    .attr("opacity", "0.9")
    .attr("z-index", "20");

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
