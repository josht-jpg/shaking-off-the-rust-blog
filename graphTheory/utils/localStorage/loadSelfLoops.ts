import * as d3 from "d3";

const createPath = (stateIndex: number, loop: any) =>
  d3
    .select(`#container${stateIndex}`)
    .append("path")
    .attr("id", `selfLoopOnNode${stateIndex}-${loop.index}`)
    .attr("class", "input")
    .attr("d", loop.d)
    .attr("marker-end", `url(#selfLoopOnNode${stateIndex}-${loop.index}marker)`)
    .attr("stroke", loop.color ?? "gray")
    .attr("opacity", "0.4")
    .attr("filter", "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2))")
    .attr("stroke-width", "3px")
    .attr("width", "3px")
    .attr("fill", "none")
    .attr("cursor", "pointer")
    .attr("transform-origin", loop.transformOrigin)
    .attr("transform", loop.transform);

const loadSelfLoops = (
  stateIndex: number,
  isContainerCreated: boolean,
  handleMouseDown: (loopIndex: number) => void,
  setSelfLoops: (selfLoops: any[]) => void
) => {
  const savedSelfLoops = JSON.parse(localStorage.getItem("selfLoops"));
  const savedSelfLoopsExist = !!savedSelfLoops && !!savedSelfLoops[stateIndex];

  if (savedSelfLoopsExist && isContainerCreated) {
    savedSelfLoops[stateIndex].map((loop) => {
      createPath(stateIndex, loop);

      d3.select(`#selfLoopOnNode${stateIndex}-${loop.index}`).on(
        "mousedown",
        () => handleMouseDown(loop.index)
      );
    });

    setSelfLoops(savedSelfLoops[stateIndex]);
  }
};

export default loadSelfLoops;
