import * as d3 from "d3";

const createGroup = (stateIndex: number, transform: string | null) => {
  d3.select("#mainSVG")
    .append("g")
    .attr("id", `container${stateIndex}`)
    .attr("position", "absolute")
    .attr("left", "0")
    .attr("top", "0")
    .attr("transform", transform);
};

export default createGroup;
